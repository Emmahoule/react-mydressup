import React, { Component, PropTypes } from 'react'
import ReactDOM from 'react-dom';
import LookbooksListLookbook from './LookbooksListLookbook';
import Input from './Input';
import { Form } from 'formsy-react';
import LookbooksFilters from './LookbooksFilters';
import chaussure_img from '../src/img/chaussure_test.png'

import { Link } from "react-router";

export default class LookbooksList extends Component {
  
  constructor(props) {
      super(props);
  } 

  componentWillMount() {
    this.props.fetchLookbooks();
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
    const {fetchLookbooks, dataLookbooks, dataCategories} = this.props
    const occasion = 
      [
        {"name": "Eté 2016", "id":"3"}, 
        {"name": "Vacances à Courchevel", "id":"4"}
      ]


    const outfits = 
      [
        {
            "id" : "1",
            "photo" : "/html/src/img/tenue_test.png",
            "occasion": "3"
        },
        {
            "id" : "2",
            "photo" : "/html/src/img/tenue_test.png",
            "occasion": "4"
        },
        {
            "id" : "3",
            "photo" : "/html/src/img/tenue_test.png",
            "occasion": "3"
        },
        {
            "id" : "5",
            "photo" : "/html/src/img/tenue_test.png",
            "occasion": "3"
        },
        {
            "id" : "6",
            "photo" : "/html/src/img/tenue_test.png",
            "occasion": "4"
        }
      ];


    return (
      <div className="outfits-list">
          <div className="app-item-detail-top app-topbar">
            <div className="app-topbar-left">
              <LookbooksFilters/>
              <div className="app-block-search">
                <svg className="icon app-block-search-icon">
                  <use xlinkHref={"#icon-search"}></use>
                </svg>
                <input
                  className=" add-item-form-block-field  app-block-search-input" 
                  placeholder="Rechercher un lookbook" 
                  name="search" 
                  type="text" 
                  id="search"
                  title="Rechercher un lookbook"
                />
              </div>
            </div>
            <div className="app-topbar-right">
              <Link to="/app/lookbooks/create-lookbook" className="btn1 app-topbar-right-btn">Créer un lookbook</Link>
            </div>
          </div>
        {occasion.map(function(occasion){
          var jsxLookbooks = outfits.filter(e => e.occasion === occasion.id).map(item => <LookbooksListLookbook id={item.id} key={item.id} photo={item.photo}/>);
            return <div>
              <div key={occasion.id} className="outfits-list-block app-block">
                <div className="outfits-list-block-occasion lookbook-outfits-list-block-occasion visible" onClick={this.hideCategory.bind(this)} ><span className="items-list-block-category-see-more more"></span>{occasion.name}
                  <div className="lookbook-outfits-list-block-occasion-right">
                    <Link to="/app/lookbooks/create-lookbook/" className=" lookbook-outfits-list-block-occasion-right-btn">
                      <svg className="icon lookbook-outfits-list-block-occasion-right-btn-icon">
                        <use xlinkHref="#icon-edit"></use>
                      </svg>
                    </Link>
                    <Link to="/app/lookbooks/" className=" lookbook-outfits-list-block-occasion-right-btn">
                      <svg className="icon lookbook-outfits-list-block-occasion-right-btn-icon">
                        <use xlinkHref="#icon-delete"></use>
                      </svg>
                    </Link>
                  </div>
                </div>
                <div className="outfits-list-block-occasion-items">
                  <div className="items-list-block-occasion-items-inner">
                    {jsxLookbooks}
                    <div className="outfits-list-item-add outfits-list-item">
                      <Link className="outfits-list-item-add-inner" to="/app/lookbooks/create-lookbook/">+
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        }.bind(this))}

      </div>
    )
  }
}
