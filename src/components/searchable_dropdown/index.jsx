import './styles.css';

import React, { Component } from 'react';
import keycode from 'keycode';
import {HOC} from 'formsy-react';
import {Icon} from 'react-font-awesome';

class SearchableDropdown extends Component {

  state = {
    open: false,
    filter: null,
    dropdownIndex: null,
    closedByBlur: false,
  };

  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.setValue(this.props.defaultValue || this.props.value || '');
  }

  componentWillReceiveProps() {
    this.setState({
      filter: null,
      dropdownIndex: null,
    });
  }

  handleInputClick = () => {
    if (!this.state.open) {
      this.setState({open: true, closedByBlur: false, filter: null, dropdownIndex: null});
    }
  };

  // XXX: This is run before the blur logic, since blur has a timeout, but the blur is REGISTERED, 
  // so it will still fire later, thereby always closing it even if it was opened here
  handleToggleClick = () => {
    if (!this.state.open && !this.state.closedByBlur) {
      this.setState({open: true, closedByBlur: false, filter: null, dropdownIndex: null}, () => {
        this.refs.input.focus();
      });
    }
  };

  handleBlur = (ev) => {
    this.setState({closedByBlur: true}, () => {
      setTimeout(() => {
        this.setState({open: false, filter: null, dropdownIndex: null});
        if (this.props.onBlur) this.props.onBlur(ev);
        setTimeout(() => {
          this.setState({closedByBlur: false});
        }, 200);
      }, 10);
    });
  };

  handleChange = (ev) => {
    const value = ev.target.value;
    // this.props.setValue(value);
    this.setState({filter: value, open: true, dropdownIndex: 0});
    if (this.props.onChange) this.props.onChange(value, this.props.dataSource);
  };

  handleItemClick = (item, ev) => {
    this.selectItem(item);
    ev.preventDefault();
  };

  selectItem = (item, closedByBlur, callback) => { // eslint-disable-line no-unused-vars
    if (typeof closedByBlur === 'function') {
      callback = closedByBlur;
      closedByBlur = false;
    }
    this.setState({open: false, closedByBlur: closedByBlur, filter: null, dropdownIndex: null}, () => {
      this.props.setValue(item.value);
      if (this.props.onSelect) this.props.onSelect(item);
      if (typeof callback === 'function') {
        callback();
      }
    });
  };

  filter = (dataSource) => {
    if (this.state.filter) {
      const re = new RegExp(this.state.filter, 'i');
      return dataSource.filter(i => { return re.test(i.text); });
    } else {
      return dataSource;
    }
  };

  handleKeyDown = (ev) => {
    const key = keycode(ev);
    let items;
    if (key === 'enter') {
      items = this.filter(this.props.dataSource);
      const item = items[this.state.dropdownIndex];
      this.selectItem(item);
      ev.preventDefault();
    } else if (key === 'up') {
      if (this.state.dropdownIndex) {
        this.setState({dropdownIndex: this.state.dropdownIndex - 1, open: true});
      }
      ev.preventDefault();
    } else if (key === 'down') {
      items = this.filter(this.props.dataSource);
      const newIndex = this.state.dropdownIndex === null ? 0 : this.state.dropdownIndex + 1;
      if (this.state.dropdownIndex === null || this.state.dropdownIndex < (items.length - 1)) {
        this.setState({dropdownIndex: newIndex, open: true});
      }
      ev.preventDefault();
    } else if (key === 'esc') {
      this.refs.input.blur();
      ev.preventDefault();
    }
    if (this.props.onKeyDown) this.props.onKeyDown(ev, ev.currentTarget.value);
  };

  render() {
    const dropdownItems = this.filter(this.props.dataSource).map((item, i) => {
      const classes = this.state.dropdownIndex === i ? 'active' : '';
      return <div className={classes} key={i} onClick={this.handleItemClick.bind(this, item)}>{item.text}</div>;
    });

    let classes = `lvlp-searchable-dropdown ${this.props.className ? this.props.className : ''}`;
    if (this.state.open) {
      classes += ' open';
    }

    const currentItem = this.props.dataSource.find(s => { return s.value === this.props.getValue(); });
    const title = this.state.filter === null ? (currentItem ? currentItem.text : '') : this.state.filter;

    return (
      <div className={classes}>

        <div className="input-container">
          <input ref="input" 
                 type="text" 
                 value={title} 
                 placeholder={this.props.placeholder} 
                 onBlur={this.handleBlur}
                 onClick={this.handleInputClick}
                 onKeyDown={this.handleKeyDown}
                 onChange={this.handleChange} />

          <span onClick={this.handleToggleClick}><Icon type="angle-down" fixedWidth /></span>
        </div>

        <div className="dropdown">
          {dropdownItems}
        </div>

      </div>
    );
  }

}

export default HOC(SearchableDropdown);
