import React, { Component, PropTypes } from 'react'
import { Link } from "react-router";
import ReactDOM from 'react-dom';
import Input from './Input';
import Textarea from './Textarea';
import Select from './Select';
import { Form } from 'formsy-react';
import ItemImageForm from './ItemImageForm';

export default class EditItemForm extends Component {
  
  constructor(props) {
      super(props);
      this.state = {
        image: null 
      };
  } 
  
  componentDidMount() {
    this.props.fetchItem();
  }

  submit(data) {
    const itemDatas = { 
      id: this.props.id,
      image: data.image, 
      title: data.title, 
      description: data.description,
      category: data.category,
      brand: data.brand,
      color: data.color,
      style: data.style,
      laundryGuide: data.laundryGuide  
    }
    this.props.onEditItemClick(itemDatas);
  }  

  render() {
    const {errorMessage, fetchItem, onEditItemClick, dataCategories, dataBrands, dataColors, dataStyles, dataItem, id, onDownloadImage, imageDownloaded, onDeleteImage} = this.props
    const category = 
      [
        {"title": "vetements", "id":"3"}, 
        {"title": "chaussures", "id":"4"}
      ]
    const datas = 
        {"title": "Le titre",
        "description": "La super description"
        } 
    return ( 
      <div className="add-item-form app-block">
      {dataItem && 
        <Form onSubmit={this.submit.bind(this)}>
          <div className="add-item-form-left">
            <ItemImageForm 
            onDownloadImage={onDownloadImage}
            errorMessage={errorMessage}
            imageDownloaded={imageDownloaded}
            onDeleteImage={onDeleteImage}
            image={dataItem.image380}
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
                value={dataItem.name}
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
                value={dataItem.description}
                id="description"
              />
            </div>
            <div className="add-item-form-block">
               <Select name="category" id="category" value={dataItem.category} title="Catégorie" className=" add-item-form-block-field add-item-form-block-field-select " 
                options={dataCategories}
                />
            </div>
            <div className="add-item-form-block">
              <Select name="brand" id="brand" value={dataItem.brand} title="Marque" className=" add-item-form-block-field add-item-form-block-field-select " 
                options={dataBrands}
              />
            </div>
            <div className="add-item-form-block">
              <Select name="color" id="color" value={dataItem.color} title="Couleur" className=" add-item-form-block-field add-item-form-block-field-select " 
                options={dataColors}
              />
            </div>
            <div className="add-item-form-block">
              <Select name="style" id="style" value={dataItem.style} title="Style" className=" add-item-form-block-field add-item-form-block-field-select " 
                options={dataStyles}
              />
            </div>
            <div className="add-item-form-block">
              <Textarea
                className=" add-item-form-block-field " 
                placeholder="Ex: Lavage machine à 30°..." 
                name="laundryGuide" 
                type="text" 
                id="laundryGuide" 
                title="Information d'entretien :"
                value={dataItem.laundryGuide}
              />
            </div>
            {errorMessage &&
                <div className="add-item-form-block form-error">
                  <p>{errorMessage}</p>
                </div>
              }
            <div className="add-item-form-block">
              <button type="submit" className="add-item-form-btn btn1">Editer cet habit</button>
            </div>
          </div>
         </Form>
         }
        </div>
    )
  }
}