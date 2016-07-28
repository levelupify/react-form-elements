import './styles.css';

import React, { Component } from 'react';
import {HOC} from 'formsy-react';

class Checkbox extends Component {

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
      <input {...this.props}
             type="checkbox"
             onClick={this.handleClick}
             onChange={this.handleChange} />
    );
  }

}

export default HOC(Checkbox);
