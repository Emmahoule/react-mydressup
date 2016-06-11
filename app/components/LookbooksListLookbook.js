import React, { Component, PropTypes } from 'react'
import { Link } from "react-router";
import ReactDOM from 'react-dom';
import habit_img from '../src/img/habit_test.png'

export default class LookbooksListOutfit extends Component {
  
  constructor(props) {
      super(props);
  } 
  
  render() {
    const { id, photo } = this.props
    const detailPage =  "app/outfits/" + id;
    return (
        <div className="outfits-list-item">
          <Link className="outfits-list-item-link" to={detailPage} setQuery={id}>
              <img className="outfits-list-item-link-img" src={photo} data-id={id}/>
              <span className="outfits-list-item-link-more"></span>
          </Link>
        </div>
    )
  }
}