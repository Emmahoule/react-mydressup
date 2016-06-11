import React, { Component, PropTypes } from 'react'
import { Link } from "react-router";
import ReactDOM from 'react-dom';
import { Form } from 'formsy-react';

import Input from './Input';

export default class SignupForm extends Component {
  submit(data) {
    const username = data.username
    const email = data.email
    const password = data.password
    const creds = { username: username, email: email, password: password }
    this.props.onSignupClick(creds);
  }     
  render() {
    const { errorMessage } = this.props
    return (
      <div>
      <Form onSubmit={this.submit.bind(this)} className="signup-form">
        <div className="signup-form-block">
          <Input 
            className=" signup-form-block-input " 
            placeholder="Username" 
            name="username" 
            validations="minLength:2"
            validationError="Votre username doit contenir plus de 2 caractères" 
            required />
        </div>
        <div className="signup-form-block">
          <Input 
            className=" signup-form-block-input " 
            placeholder="Adresse email" 
            name="email" 
            validations="isEmail" 
            validationError="Email invalide" 
            required />
        </div>
        <div className="signup-form-block">
          <Input 
            className=" signup-form-block-input " 
            type="password"
            placeholder="Mot de passe" 
            name="password" 
            required />
        </div>
        <div className="signup-form-block">
          <Input 
            className=" signup-form-block-input " 
            type="password"
            placeholder="Confirmez votre mot de passe" 
            name="password-validation" 
            validations="equalsField:password" 
            validationError="Les mots de passe sont différents" 
            required />
        </div>
        {errorMessage &&
          <div className="login-form-error">
            <p>{errorMessage}</p>
          </div>
        }
        <br/>
          <button className="signup-form-btn btn1" type="submit">
            S'inscrire
          </button>
      </Form>
      <br/>
      </div>
    )
  }
}