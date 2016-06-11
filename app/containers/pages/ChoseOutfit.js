import React, { Component, PropTypes } from 'react'
import ReactDOM from 'react-dom';
import OutfitsListOutfit from '../../components/OutfitsListOutfit';
import CreateLookbookListOutfitsOutfit from '../../components/CreateLookbookListOutfitsOutfit';
import OutfitsFilters from "../../components/OutfitsFilters"

import { Link } from "react-router";

export default class ChoseOutfit extends Component {
  constructor(props) {
      super(props);
  } 
  componentWillMount() {
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

  onClickItemToList(e){
    var tabDiv = document.querySelectorAll(".create-lookbook-list-outfit-link");
    for (var i=0; i<tabDiv.length; i++){
      tabDiv[i].classList.remove("selected");
    }
    var element = e.target;
    var id = element.getAttribute("data-id");
    var src = element.getAttribute("data-src");

    if (element.parentElement.classList.contains('selected')){
      element.parentElement.classList.remove("selected");
    } else {
      element.parentElement.className+=" selected";
    }
  }

  deleteSelection() {
    var tabDiv = document.querySelectorAll(".create-lookbook-list-outfit-link");
    console.log(tabDiv);
    for (var i=0; i<tabDiv.length; i++){
      tabDiv[i].classList.remove("selected");
    }
  }

  render() {
    const {fetchOutfits, dataOutfits, dataCategories} = this.props
    const occasion = 
      [
        {"name": "Soirée", "id":"3"}, 
        {"name": "Sport", "id":"4"}
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
         <OutfitsFilters />
         </div>
          <div className="app-item-detail-top app-top-tools">
            <Link className="btn-back-to" to="/app/calendar/"><span className="btn-back-to-arrow"></span>Retour au calendrier</Link>
            <div className="app-top-tools-right">
              <Link to="/app/calendar/" className="btn1 app-top-tools-right-btn">Choisir cette tenue pour mardi</Link>
            </div>
          </div>
        {occasion.map(function(occasion){
          var jsxOutfits = outfits.filter(e => e.occasion === occasion.id).map(item => <div key={item.id} className="create-lookbook-list-outfit" data-id={item.id} onClick={this.onClickItemToList.bind(this)} ><CreateLookbookListOutfitsOutfit id={item.id} key={item.id} photo={item.photo}/></div>);
            return <div key={occasion.id} className="outfits-list-block app-block create-lookbook-list-outfits">
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
    )
  }
}
