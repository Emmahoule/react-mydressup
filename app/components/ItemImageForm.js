import React, { Component, PropTypes } from 'react'

import Dropzone from "react-dropzone";
import Cropper from 'react-cropper';
import Input from './Input';

import { config } from '../config.js'
const API_URL = config.API_URL;

export default class ItemImageForm extends Component {
  constructor(props) {
      super(props);
      this.state = {
        image: "", 
        base64: "",
        downloadUrl:false
      };
  } 

  onDrop(files) {
      this.setState({
        image: files[0].preview
      });
  }

  componentWillReceiveProps(nextProps){
    if (nextProps.image){
      this.setState({
        image: API_URL+nextProps.image
      });
    }
  }

  crop(){
    this.setState({base64: this.refs.cropper.getCroppedCanvas().toDataURL("image/png")});
  }
  
  onBlurUrl(e){
    if (!this.props.downloadImage) {
      if (this.state.downloadUrl==false){
        this.setState({downloadUrl: true});
        this.props.onDownloadImage(e.target.value);
        setTimeout(this.onBlurUrl.bind(this, e), 1000);
        return;
      }
    }
    this.setState({image: API_URL+this.props.imageDownloaded})
  }

  deleteImage(){
    this.setState({image:""})
    this.setState({downloadUrl: false});
    this.props.onDeleteImage;
  }
  render() {
    const {image, onDownloadImage, imageDownloaded, errorMessage, onDeleteImage} = this.props
    return (
      <div className="item-image-form">
              {this.state.image != "" ? 
                <div className="item-image-form-cropper">
                  <Cropper
                    ref='cropper'
                    src={this.state.image}
                    style={{height: 380, width: "100%"}}
                    guides={false}
                    dragMode={"move"}
                    background={false}
                    modal={false}
                    crop={this.crop.bind(this)}
                    checkCrossOrigin={true}
                     />
                  <div className="item-image-form-cropper-btn btn1" onClick={this.deleteImage.bind(this)}>Changer la photo</div>
                  <Input
                    className=" hidden " 
                    placeholder="image" 
                    name="image" 
                    type="text" 
                    value={this.state.base64}
                  />
                </div>
              : 
              <div className="item-image-form-upload">
                <Dropzone onDrop={this.onDrop.bind(this)} className="item-image-form-upload-dropzone">
                  <div className="item-image-form-upload-dropzone-text"><span className="c-main">Cliquez-glissez</span> une photo ici, ou <span className="c-main">cliquez</span> pour sélectionner une photo à uploader</div>
                </Dropzone>
                <div className="item-image-form-upload-field">
                  <label htmlFor="url" className="c-main">Entrez-une URL pour télécharger une photo</label>
                    <input
                      type="text"
                      name="url"
                      placeholder="Url"
                      id="url"
                      onBlur={this.onBlurUrl.bind(this)}
                    />
                </div>
              </div>
            }
          </div>
    )
  }
}