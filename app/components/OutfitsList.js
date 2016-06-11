import React, { Component, PropTypes } from 'react'
import ReactDOM from 'react-dom';
import OutfitsListOutfit from './OutfitsListOutfit';
import chaussure_img from '../src/img/chaussure_test.png'
import OutfitsFilters from "./OutfitsFilters"

import { Link } from "react-router";
import { config } from '../config.js'
const API_URL = config.API_URL;

export default class OutfitsList extends Component {

  constructor(props) {
      super(props);
  } 

  componentWillMount() {
    this.props.fetchOutfits();
    this.props.fetchOccasions();
    this.props.fetchTemperatures();
    this.props.fetchWeathers();
    console.log(this.props.dataWeathers);
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
    const {fetchOutfits, dataOutfits, dataOccasions, dataTemperatures, dataWeathers, fetchOccasions, fetchTemperatures, fetchWeathers} = this.props
    const occasion = 
      [
        {"name": "Soirée", "id":1}, 
        {"name": "Sport", "id":2},
        {"name": "Soirée", "id":3}, 
        {"name": "Sport", "id":4}
      ]

    const outfits = 
      [
        {
            "id" : "1",
            "photo" : "/html/src/img/tenue_test.png",
            "occasion": "1"
        },
        {
            "id" : "2",
            "photo" : "/html/src/img/tenue_test.png",
            "occasion": "2"
        },
        {
            "id" : "3",
            "photo" : "/html/src/img/tenue_test.png",
            "occasion": "3"
        },
        {
            "id" : "5",
            "photo" : "/html/src/img/tenue_test.png",
            "occasion": "4"
        },
        {
            "id" : "6",
            "photo" : "/html/src/img/tenue_test.png",
            "occasion": "5"
        }
      ];

    return (
      <div className="outfits-list">
          <div className="app-item-detail-top app-topbar">
            <OutfitsFilters 
            dataOccasions={dataOccasions}
            dataTemperatures={dataTemperatures}
            dataWeathers={dataWeathers}
            />
            <div className="app-topbar-right">
              <Link to="/app/outfits/create-outfit" className="btn1 app-topbar-right-btn">Créer une tenue</Link>
            </div>
          </div>
        {dataOutfits  && dataOccasions &&
          <div>
        {dataOccasions.map(function(occasion){
          var jsxOutfits = dataOutfits.filter(e => e.occasion.includes(occasion.id)).map(outfit => <OutfitsListOutfit id={outfit.id} key={outfit.id} photo={API_URL+outfit.img200}/>);
            return <div key={occasion.id} className="outfits-list-block app-block">
                <div className="outfits-list-block-occasion visible" onClick={this.hideCategory.bind(this)} ><span className="items-list-block-category-see-more more"></span>{occasion.name}</div>
                <div className="outfits-list-block-occasion-items">
                  <div className="items-list-block-occasion-items-inner">
                    {jsxOutfits}
                    <div className="outfits-list-item-add outfits-list-item">
                      <Link className="outfits-list-item-add-inner" to="/app/outfits/create-outfit">+</Link>
                    </div>
                  </div>
                </div>
              </div>
        }.bind(this))}
        </div>
        }

      </div>
    )
  }
}
