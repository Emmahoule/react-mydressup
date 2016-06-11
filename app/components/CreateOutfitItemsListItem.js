import React, { Component, PropTypes } from 'react'
import { Link } from "react-router";
import ReactDOM from 'react-dom';
import habit_img from '../src/img/habit_test.png'

export default class CreateOutfitItemsListItem extends Component {

  constructor(props) {
      super(props);
  } 
  
  render() {
    const { id, photo, onClickItem, listItems, imgBase } = this.props
    const detailPage =  "app/items/" + id;
    return (
        <div className="create-outfit-list-item-link">
            <img className="create-outfit-list-item-link-img" src={photo} data-src={imgBase} data-id={id}/>
        </div>
    )
  }
}