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
    return (
      <textarea {...this.props}
                onClick={this.handleClick}
                onChange={this.handleChange} />
    );
  }

}

export default HOC(Textarea);
