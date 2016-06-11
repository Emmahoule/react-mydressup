import React, { Component, PropTypes } from 'react'
import Input from './Input';
import { Form } from 'formsy-react';
import Textarea from './Textarea';
export default class ContactForm extends Component {
  render() {
    return (
      <div>
      <Form className="contact-form">
        <div className="contact-form-block">
          <Input 
            className=" contact-form-block-input " 
            title="Prénom"
            placeholder="Prénom" 
            name="prénom" 
            validations="minLength:2"
            validationError="Votre prénom doit contenir plus de 2 caractères" 
            required />
        </div>
        <div className="contact-form-block">
          <Input 
            title="Mail"
            className=" contact-form-block-input " 
            placeholder="Adresse email" 
            name="email" 
            validations="isEmail" 
            validationError="Email invalide" 
            required />
        </div>
        <div className="contact-form-block">
          <Textarea 
            title="Message"
            className=" contact-form-block-input " 
            type="tect"
            placeholder="message" 
            name="message" 
            required />
        </div>
        <br/>
        <div className="contact-form-block contact-form-block-btn">
          <button className="contact-form-btn btn1" type="submit">
            Envoyer
          </button>
        </div>
      </Form>
      <br/>
      </div>
    )
  }
}
