// components/Login.js

import React, { Component, PropTypes } from 'react'


export default class ResetPassForm extends Component {

  render() {
    const { errorMessage } = this.props
    return (
      <form className="resetpass-form">
        <div className="resetpass-form-block">
          <input type='email' ref='username' className="resetpass-form-block-input" placeholder='Adresse email'/>
        </div>
        <button className="resetpass-form-btn btn1" onClick={(event) => this.handleClick(event)}>
          Envoyer
        </button>
      </form>
    )
  }
}
