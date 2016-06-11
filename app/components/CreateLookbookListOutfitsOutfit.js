import React, { Component, PropTypes } from 'react'
import { Link } from "react-router";
import ReactDOM from 'react-dom';
import habit_img from '../src/img/habit_test.png'

export default class CreateLookbookListOutfitsOutfit extends Component {
  constructor(props) {
      super(props);
  } 
  render() {
    const { id, photo, onClickItem, listItems, imgBase } = this.props
    const detailPage =  "app/items/" + id;
    return (
        <div className="create-lookbook-list-outfit-link">
            <img className="create-lookbook-list-outfit-link-img" src={photo} data-src={imgBase} data-id={id}/>
        </div>
    )
  }
}