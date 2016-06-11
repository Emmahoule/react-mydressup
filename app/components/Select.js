import React from 'react';
import Formsy from 'formsy-react';

const Select = React.createClass({
  mixins: [Formsy.Mixin],

  getInitialState () {
    return {
      active:"",
    };
  },

  changeValue(event) {
    this.setValue(event.currentTarget.value);
  },

  render() {
    const className = 'form-group' + (this.props.className || ' ') +
      (this.showRequired() ? 'required' : this.showError() ? 'error' : '');
    const errorMessage = this.getErrorMessage();

    const options = this.props.options.map((option, i) => (
      <option key={option.id} value={option.name} selected={option.selected}>
        {option.name}
      </option>
    ));

    return (
      <div className={className}>
        <div className={"select-box "+this.state.active}>
          <label htmlFor={this.props.id} className="c-main label-select">{this.props.title}</label>
          <select ref="select" name={this.props.name} onChange={this.changeValue} onFocus={()=>this.setState({active:"selected"})} onBlur={()=>this.setState({active:""})}  value={this.getValue()}>
            <option>
              Sélectionnez...
            </option>
            {options}
          </select>
          <span className="select-box-arrow"></span>
        </div>
        <span className='validation-error'>{errorMessage}</span>
      </div>
    );
  }

});

export default Select;