import './styles.css';

import React, { Component } from 'react';
import {HOC} from 'formsy-react';

class Textarea extends Component {

  handleChange = (ev) => {
    const value = ev.target.value;
    this.props.setValue(value);
    if (this.props.onChange) this.props.onChange(value);
  };

  handleClick = (ev) => {
    if (this.props.onClick) this.props.onClick(ev);
  };

  render() {
    const classes = `lvlp-textarea ${this.props.className ? this.props.className : ''}`;
    return (
      <textarea {...this.props}
                className={classes}
                onClick={this.handleClick}
                onChange={this.handleChange} />
    );
  }

}

export default HOC(Textarea);
