import React, { Component, PropTypes } from 'react'
import ReactDOM from 'react-dom';
import ItemsListItem from './ItemsListItem';
import habit_img from '../src/img/habit_test.png'
import chaussure_img from '../src/img/chaussure_test.png'
import ItemsFilters from "./ItemsFilters"

import { Link } from "react-router";
import { config } from '../config.js'
const API_URL = config.API_URL;

export default class ItemsList extends Component {
  constructor(props) {
      super(props);

  } 

  componentWillMount() {
    this.props.fetchItems();
    this.props.fetchCategories();
    this.props.fetchCategoriesByUser();
    this.props.fetchBrands();
    this.props.fetchStyles();
    this.props.fetchColors();
  }
  
  hideCategory(e) {
    var toHide = e.target.nextSibling;
    var icnToggle = e.target.firstChild;
    if (!e.target.classList.contains('visible')){
        TweenLite.set(toHide, {
          height: "auto"
        });
        TweenLite.from(toHide, 1.5, {height: 0, ease:Expo.easeOut});
        icnToggle.classList.add('more');
        e.target.classList.add("visible");
    } else {
        TweenLite.to(toHide, 1, {height: 0, ease:Expo.easeOut});
        icnToggle.classList.remove("more");
        e.target.classList.remove("visible");
    }
  }

  render() {

    const {fetchItems, fetchCategories, fetchCategoriesByUser, fetchBrands, fetchStyles, fetchColors, dataItems, dataCategories, dataCategoriesUser, dataBrands, dataStyles, dataColors} = this.props
    return (
      <div className="items-list">
        <div>
          <div className="app-item-detail-top app-topbar">
            <ItemsFilters dataCategories={dataCategories} dataBrands={dataBrands} dataStyles={dataStyles} dataColors={dataColors}/>
            <div className="app-topbar-right">
              <Link to="/app/items/add-item" className="btn1 app-topbar-right-btn">Ajouter un vêtement</Link>
            </div>
          </div>
        {dataItems && dataCategoriesUser &&
          <div>
        {dataCategoriesUser.map(function(category){
          var jsxItems = dataItems.filter(e => e.category === category.id).map(item => <ItemsListItem id={item.id} key={item.id} photo={API_URL+item.img190} />);
            return <div key={category.id} className="items-list-block app-block">
                <div className="items-list-block-category visible" onClick={this.hideCategory.bind(this)} ><span className="items-list-block-category-see-more more"></span>{category.name}</div>
                <div className="items-list-block-category-items">
                    <div className="items-list-block-category-items-inner">
                {jsxItems}
                      <div className="items-list-item-add items-list-item">
                        <Link className="items-list-item-add-inner" to="/app/items/add-item">+</Link>
                      </div>
                    </div>
                </div>
              </div>
        }.bind(this))}
        </div>
        }
        </div>
      </div>
    )
  }
}
