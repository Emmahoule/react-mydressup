import React, { Component, PropTypes } from 'react'
import { Link } from "react-router";
import ReactDOM from 'react-dom';
import { Form } from 'formsy-react';

// import FacebookLogin from 'react-facebook-login';
import Input from './Input';

export default class LoginForm extends Component {
  submit(data) {
    const email = data.email
    const password = data.password
    const creds = { email: email, password: password }
    this.props.onLoginClick(creds);
  }   
  render() {
    const { errorMessage } = this.props
    return (
      <div>
      <Form onSubmit={this.submit.bind(this)} className="login-form">
        <div className="login-form-block">
          <Input 
            className=" login-form-block-input " 
            placeholder="Adresse email" 
            name="email" 
            validations="isEmail" 
            validationError="Email invalide" 
            required />
        </div>
        <div className="login-form-block">
          <Input 
            className=" login-form-block-input login-form-block-input-pass " 
            placeholder="Mot de passe" 
            name="password" 
            type="password" 
            required />
          <Link className="login-form-block-resetpass" to="reset-pass">Mot de passe oublié ?</Link>
        </div>
        {errorMessage &&
          <div className="form-error">
            <p>{errorMessage}</p>
          </div>
        }
        <button type="submit" className="login-form-btn btn1">Se connecter</button>
      </Form>
      </div>
    )
  }

}