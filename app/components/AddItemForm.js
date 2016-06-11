import React, { Component, PropTypes } from 'react'
import { Link } from "react-router";
import ReactDOM from 'react-dom';
import Input from './Input';
import Textarea from './Textarea';
import Select from './Select';
import { Form } from 'formsy-react';
import ItemImageForm from './ItemImageForm';

export default class AddItemForm extends Component {
  
  constructor(props) {
      super(props);
      this.state = {
        image: null 
      };
  } 

  submit(data) {
    const itemDatas = { 
      image: data.image, 
      title: data.title, 
      description: data.description,
      category: data.category,
      brand: data.brand,
      color: data.color,
      style: data.style,
      laundryguide: data.laundryguide 
    }
    this.props.onAddItemClick(itemDatas, this.props.history);
  }  

  render() {
    const {errorMessage, onAddItemClick, dataCategories, dataBrands, dataColors, dataStyles, onDownloadImage, imageDownloaded, onDeleteImage} = this.props
    return (
      <div className="add-item-form app-block">
        <Form onSubmit={this.submit.bind(this)}>
          <div className="add-item-form-left">
            <ItemImageForm 
            onDownloadImage={onDownloadImage}
            errorMessage={errorMessage}
            imageDownloaded={imageDownloaded}
            onDeleteImage={onDeleteImage}
            />
          </div>
          <div className="add-item-form-right">
          <div className="add-item-form-block add-item-form-block-title">
              <Input
                className=" add-item-form-block-field " 
                placeholder="Titre du vêtement" 
                name="title" 
                type="text" 
                id="titre"
                title="Titre"
              />
            </div>
            <div className="add-item-form-block">
              <Textarea
                className=" add-item-form-block-field " 
                placeholder="Description du vêtement" 
                name="description" 
                type="text" 
                title="Description"
                id="description"
              />
            </div>
            {dataCategories &&
            <div className="add-item-form-block">
               <Select name="category" id="category" title="Catégorie" className=" add-item-form-block-field add-item-form-block-field-select " 
                options={dataCategories}
                />
            </div>
            }
            <div className="add-item-form-block">
              <Select name="brand" id="brand" title="Marque" className=" add-item-form-block-field add-item-form-block-field-select " 
                options={dataBrands}
              />
            </div>
            <div className="add-item-form-block">
              <Select name="color" id="color" title="Couleur" className=" add-item-form-block-field add-item-form-block-field-select " 
                options={dataColors}
              />
            </div>
            <div className="add-item-form-block">
              <Select name="style" id="style" title="Style" className=" add-item-form-block-field add-item-form-block-field-select " 
                options={dataStyles}
              />
            </div>
            <div className="add-item-form-block">
              <Textarea
                className=" add-item-form-block-field " 
                placeholder="Ex: Lavage machine à 30°..." 
                name="laundryguide" 
                type="text" 
                id="laundryguide" 
                title="Information d'entretien :"
              />
            </div>
            <div className="add-item-form-block">
              <button type="submit" className="add-item-form-btn btn1">Ajouter ce vêtement</button>
            </div>
          </div>
         </Form>
        </div>
    )
  }
}