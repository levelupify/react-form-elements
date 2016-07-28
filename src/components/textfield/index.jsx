import './styles.css';

import React, { Component } from 'react';
import {HOC} from 'formsy-react';

class Textfield extends Component {

  handleChange = (ev) => {
    const value = ev.target.value;
    this.props.setValue(value);
    if (this.props.onChange) this.props.onChange(value);
  };

  handleBlur = (ev) => {
    if (this.props.onBlur) this.props.onBlur(ev);
  };

  handleClick = (ev) => {
    if (this.props.onClick) this.props.onClick(ev);
  };

  render() {
    const classes = `lvlp-textfield ${this.props.className ? this.props.className : ''}`;
    return (
      <input {...this.props}
             className={classes}
             onBlur={this.handleBlur}
             onClick={this.handleClick}
             onChange={this.handleChange} />
    );
  }

}

export default HOC(Textfield);
