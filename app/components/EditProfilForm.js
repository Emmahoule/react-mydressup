// components/Login.js

import React, { Component, PropTypes } from 'react'
import Input from './Input';
import { Form } from 'formsy-react';
import Dropzone from "react-dropzone";
import { config } from '../config.js'
const API_URL = config.API_URL;

export default class EditProfilForm extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      image: ""    
    };
  }
  
  componentDidMount() {
    this.props.fetchProfilInfos();
    let img = localStorage.getItem('img') || null
    if (img){
      this.setState({
        image: API_URL+img,
        file: null
      })
    }
  }

  submit(data) {
    console.log(data);
    let form = new FormData();
    form.append('username', data.username);
    form.append('email', data.email);
    form.append('image', this.state.image);
    this.props.onEditProfilClick(form);
  }

  onDrop(files) {
      this.setState({
        image: files[0].preview,
        file: files[0]
      });
  }  

  render() {
    const {errorMessage, fetchProfilInfos, onEditProfilClick, userInfos} = this.props

    let username = localStorage.getItem('username') || null
    let img = localStorage.getItem('img') || null

    return (
      <Form onSubmit={this.submit.bind(this)} className="edit-profil-form">
        <div className="edit-profil-form-right">
          <div className="edit-profil-form-right-block">
          <div className="edit-profil-form-right-title">{username}</div>
            {this.state.image != "" ? 
              <div>
                <div className="edit-profil-form-img-container">
                  <img className="edit-profil-form-img" src={this.state.image}/>
                </div>
                <div className="edit-profil-form-edit btn2">
                  <svg className="icon icon-edit">
                    <use xlinkHref="#icon-edit"></use>
                  </svg>
                  <div className="edit-profil-form-edit-text" onClick={(e)=>this.setState({image:"", file: null})}>Modifier la photo</div>
                </div>
              </div>
            :
            <Dropzone onDrop={this.onDrop.bind(this)} className="edit-profil-form-upload-dropzone">
              <div className="edit-profil-form-upload-dropzone-text"><span className="c-main">Cliquez-glissez</span> une photo ici, ou <span className="c-main">cliquez</span> pour sélectionner une photo à uploader</div>
            </Dropzone>
          }
          </div>
        </div>
        <div className="edit-profil-form-left">
          <div className="edit-profil-form-block">
            <Input 
              className=" edit-profil-form-block-input " 
              placeholder="Username" 
              name="username" 
              validations="minLength:2"
              value={username}
              title="Prénom"
              validationError="Votre username doit contenir plus de 2 caractères" 
              required />
          </div>
          {userInfos &&
          <div className="edit-profil-form-block">
            <Input 
              className=" edit-profil-form-block-input " 
              placeholder="Adresse email" 
              name="email" 
              value={userInfos.email}
              title="Adresse email"
              validations="isEmail" 
              validationError="Email invalide" 
              required />
          </div>
          }
          {errorMessage &&
            <p>{errorMessage}</p>
          }
          <button  className="edit-profil-form-btn btn1" type="submit">
            Modifier
          </button>
        </div>
      </Form>
    )
  }
}
