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
    const classes = `lvlp-dropdown ${this.props.className ? this.props.className : ''}`;
    return (
      <select 
        {...this.props}
        className={classes}
        value={this.props.value} 
        placeholder={this.props.placeholder} 
        onBlur={this.handleBlur}
        onClick={this.handleClick}
        onChange={this.handleChange}
      >
        {this.props.children}
      </select>
    );
  }

}

export default HOC(Textfield);
