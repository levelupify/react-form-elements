import './styles.css';

import React, { Component } from 'react';
import {HOC} from 'formsy-react';

class Checkbox extends Component {

  handleChange = (ev) => {
    const value = ev.target.checked;
    this.props.setValue(value);
    if (this.props.onChange) this.props.onChange(value);
  };

  handleClick = (ev) => {
    if (this.props.onClick) this.props.onClick(ev);
  };

  render() {
    const classes = `lvlp-checkbox ${this.props.className ? this.props.className : ''}`;
    return (
      <input {...this.props}
             className={classes}
             type="checkbox"
             onClick={this.handleClick}
             onChange={this.handleChange} />
    );
  }

}

export default HOC(Checkbox);
