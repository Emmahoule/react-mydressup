import React, { Component, PropTypes } from 'react'
import { Link } from "react-router";
import ReactDOM from 'react-dom';
import ImgDetail from "../src/img/habit_detail_test.png"

import { config } from '../config.js'
const API_URL = config.API_URL;

export default class OutfitsDetailForm extends Component {

  constructor(props) {
      super(props);
  } 

  componentWillMount() {
    this.props.fetchOutfit();
  }

  replaceChar(s) {
    s = s.toLowerCase();
    var rules = {
      'a': /[àáâãäå]+/g,
      'ae': /[æ]+/g,
      'c': /[ç]+/g,
      'e': /[èéêë]+/g,
      'i': /[ìíîï]+/g,
      'n': /[ñ]+/g,
      'o': /[òóôõöø]+/g,
      'oe': /[œ]+/g,
      'u': /[ùúûü]+/g,
      'y': /[ýÿ]+/g,
      '-': /[\s\']+/g,
      'th': /[ðþ]+/g,
      'ss': /[ß]/g
    };
    for (var r in rules) 
      s = s.replace(rules[r], r);
    return s;
  }

  render() {
    var {fetchOutfit, dataOutfit} = this.props;
    console.log(dataOutfit);
    return (
      <div>
      {dataOutfit &&
        <div className="item-detail-form app-block">
          <div className="item-detail-form-left">
            <div className="outfit-detail-form-img-container">
              <img className="outfit-detail-form-img" src={API_URL+dataOutfit.image320} />
            </div>
          </div>
          <div className="item-detail-form-right">

            <div className="outfit-detail-block">
              <div className="outfit-detail-block-title">
                Occasion
              </div>
              {dataOutfit.occasion.map(function(item){
                return <div key={item} className="outfit-detail-block-item">
                    <svg className="icon outfit-detail-block-item-icon">
                      <use xlinkHref={"#icon-"+this.replaceChar(item)}></use>
                    </svg>
                    {item}
                  </div>
              }.bind(this))}
            </div>

            <div className="outfit-detail-block">
              <div className="outfit-detail-block-title">
                Météo
              </div>
              {dataOutfit.weather.map(function(item){
                return <div key={item} className="outfit-detail-block-item">
                    <svg className="icon outfit-detail-block-item-icon">
                      <use xlinkHref={"#icon-"+this.replaceChar(item)}></use>
                    </svg>
                    {item}
                  </div>
              }.bind(this))}
            </div>

            <div className="outfit-detail-block">
              <div className="outfit-detail-block-title">
                Température
              </div>
              {dataOutfit.temperature.map(function(item){
                return <div key={item} className="outfit-detail-block-item">
                    <svg className="icon outfit-detail-block-item-icon">
                      <use xlinkHref={"#icon-"+this.replaceChar(item)}></use>
                    </svg>
                    {item}
                  </div>
              }.bind(this))}
            </div>

              <div className="outfit-detail-block">
                <div className="outfit-detail-form-social">
                  <div className="outfit-detail-form-social-link" to='#'> 
                    Partager sur :
                  </div>
                  <Link className="outfit-detail-form-social-link" to='#'> 
                    <svg className="icon icon-facebook">
                      <use xlinkHref="#icon-facebook"></use>
                    </svg>
                  </Link>
                  <Link className="outfit-detail-form-social-link" to='#'> 
                    <svg className="icon icon-instagram">
                      <use xlinkHref="#icon-instagram"></use>
                    </svg>
                  </Link>
                  <Link className="outfit-detail-form-social-link" to='#'> 
                    <svg className="icon icon-twitter">
                      <use xlinkHref="#icon-twitter"></use>
                    </svg>
                  </Link>
                  <Link className="outfit-detail-form-social-link" to='#'> 
                    <svg className="icon icon-pinterest">
                      <use xlinkHref="#icon-pinterest"></use>
                    </svg>
                  </Link>
                </div>
              </div>

          </div>
        </div>
        }
      </div>
    )
  }
}