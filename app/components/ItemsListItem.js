import React, { Component, PropTypes } from 'react'
import { Link } from "react-router";
import ReactDOM from 'react-dom';
import habit_img from '../src/img/habit_test.png'

export default class ItemsListItem extends Component {
  constructor(props) {
      super(props);
  } 
  
  render() {
    const { id, photo } = this.props
    const detailPage =  "app/items/" + id;
    return (
        <div className="items-list-item">
          <Link className="items-list-item-link" to={detailPage}>
              <img className="items-list-item-link-img" src={photo} data-id={id}/>
              <span className="items-list-item-link-more"></span>
          </Link>
        </div>
    )
  }
}