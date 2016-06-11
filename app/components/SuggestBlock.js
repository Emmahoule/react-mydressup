import React, { Component, PropTypes } from 'react'
import { Link } from "react-router";
import ReactDOM from 'react-dom';

export default class SuggestBlock extends Component { 

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
      '_': /[\s\']+/g,
      'th': /[ðþ]+/g,
      'ss': /[ß]/g
    };
    for (var r in rules) 
      s = s.replace(rules[r], r);
    return s;
  }
  
  render() {
    return (
      <div className="suggest-block">
        <Link to="app/outfits" className="suggest-block-link">
          <img className="suggest-block-img" src="/html/src/img/tenue_test.png"/>
        </Link>
        <div className="suggest-block-right">
          <div className="suggest-block-item">
            <svg className="icon suggest-block-icon">
              <use xlinkHref={"#icon-"+this.replaceChar("Ensoleillé")}></use>
            </svg>
            <div>Ensoleillé</div>
          </div>
          <div className="suggest-block-item">
            <svg className="icon suggest-block-icon">
              <use xlinkHref={"#icon-"+this.replaceChar("Ville")}></use>
              <div>Ville</div>
            </svg>
          </div>
          <div className="suggest-block-item">
            <svg className="icon suggest-block-icon">
              <use xlinkHref={"#icon-"+this.replaceChar("Chaud")}></use>
            </svg>
            <div>Chaud</div>
          </div>
        </div>
      </div>
    )
  }
}