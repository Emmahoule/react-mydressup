import React from 'react';
import Formsy from 'formsy-react';

const Input = React.createClass({

  mixins: [Formsy.Mixin],
  
  getInitialState () {
    return {
      errorMessage:null,
      errorClass: ""
    };
  },
  changeValue(event) {
    this.setValue(event.currentTarget[this.props.type === 'checkbox' ? 'checked' : 'value']);
  },
  handleBlur: function() {
    this.setState({errorMessage : this.getErrorMessage()});
    if (this.showError()) {
      this.setState({errorClass : "error"});
    } else {
      this.setState({errorClass : ""});
    }
  },
  render() {
    const className = (this.props.className || ' ') +
      (this.showRequired() ? 'required' : this.state.errorClass);

    const classNameError = "validation-error "+ this.state.errorClass;

    return (
      <div className={className}>
      <label htmlFor={this.props.id} className="c-main">{this.props.title}</label>
        <input
          type={this.props.type || 'text'}
          name={this.props.name}
          placeholder={this.props.placeholder}
          onChange={this.changeValue}
          value={this.getValue()}
          checked={this.props.type === 'checkbox' && this.getValue() ? 'checked' : null}
          onBlur={this.handleBlur}
          id={this.props.id}
        />
        <span className={classNameError}>{this.state.errorMessage}</span>
      </div>
    );
  }
});

export default Input;
