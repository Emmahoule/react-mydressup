import React, { Component, PropTypes } from 'react'
import { Link } from "react-router";
import ReactDOM from 'react-dom';
import ImgDetail from "../src/img/habit_detail_test.png"

import { config } from '../config.js'
const API_URL = config.API_URL;

export default class ItemsDetailForm extends Component {
  constructor(props) {
      super(props);
  } 
  componentWillMount() {
    this.props.fetchItem();
  }

  render() {
    var {fetchItem, dataItem} = this.props
    const colorStyle = {
      backgroundColor: '#000'
    };
    return (
      <div>
      { dataItem &&
        <div className="item-detail-form app-block">
          <div className="item-detail-form-left">
            <div className="item-detail-form-img-container">
              <img className="item-detail-form-img" src={API_URL+dataItem.image380} />
            </div>
          </div>
          <div className="item-detail-form-right">
            <h1 className="item-detail-form-info item-detail-form-info-title">
              {dataItem.name}
            </h1>
            <div className="item-detail-form-info">
              <span className="c-main">Description : </span>{dataItem.description}
            </div>
            <div className="item-detail-form-info">
              <span className="c-main">Catégorie : </span>{dataItem.category}
            </div>
            <div className="item-detail-form-info">
              <span className="c-main">Marque : </span>{dataItem.brand}
            </div>
            <div className="item-detail-form-info">
              <span className="c-main">Couleur : </span>
              <div className="item-detail-form-info-color-rect" style={{backgroundColor: dataItem.colorCode}}></div>
            </div>
            <div className="item-detail-form-info">
              <span className="c-main">Style : </span>{dataItem.style}
            </div>
            <div className="item-detail-form-info">
              <span className="c-main">Information d'entretien : </span>{dataItem.laundryGuide}
            </div>
          </div>
        </div>
      }
      </div>
    )
  }
}