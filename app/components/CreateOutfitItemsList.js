import React, { Component, PropTypes } from 'react'
import ReactDOM from 'react-dom';
import CreateOutfitItemsListItem from './CreateOutfitItemsListItem';
import CreateOutfitInfos from './CreateOutfitInfos';

import habit_img from '../src/img/habit_test.png'
import chaussure_img from '../src/img/chaussure_test.png'

import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import CollageOutfit from './CollageOutfit';
import ItemsFilters from "../components/ItemsFilters"

import { config } from '../config.js'
const API_URL = config.API_URL;
import { Link } from "react-router";

class CreateOutfitItemsList extends Component {
  constructor(props) {
      super(props);
      this.state = {
        list: {},
        validate:false,
      }
  } 
  
  componentDidMount() {
    this.props.fetchItems();
    this.props.fetchCategories();
    this.props.fetchCategoriesByUser();
    this.props.onRemoveAllItems();
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
    var element = e.target;
    var id = element.getAttribute("data-id");
    var src = element.getAttribute("data-src");

    if (element.parentElement.classList.contains('selected')){
      element.parentElement.classList.remove("selected");
      this.props.onDeleteItem(this.props.listItems, id);
      this.setState({
        list: this.props.listItems
      });
    } else {
      var img = new Image();
      img.src = src;
      img.onload = function(){
        var height = img.naturalHeight;
        var width = img.naturalWidth;
        this.props.onClickItem(this.props.listItems, id, {top: 100, left: 100, width:width, height:height, zIndex:0, img:src});
        this.setState({
          list: this.props.listItems
        });
        element.parentElement.className+=" selected";
      }.bind(this)
    }
  }
  
  removeAll(){
    var tabItem = document.getElementsByClassName("create-outfit-list-item-link");
    for (var i = 0; i < tabItem.length; i++) {
      tabItem[i].classList.remove("selected");
    }
    this.props.onRemoveAllItems();
  }

  render() {

    const {fetchItems, dataItems, dataCategories, dataCategoriesUser, fetchCategories, fetchCategoriesByUser, onClickItem, listItems, hideSourceOnDrag, onRemoveAllItems, onUpdateItem, onDeleteItem, onClickCreateOutfitImage, onClickCreateOutfitInfos} = this.props
    
    if (Object.keys(listItems).length!==0){
      var isListItem = true;
    } else {
      var isListItem = false;
    }

    return (
    <div>
      <div className="app-create-outfit-collage">
        <div className="app-add-item-top app-top-tools">
          <Link className="btn-back-to" to="app/outfits">
            <span className="btn-back-to-arrow"></span>Retour à la liste
          </Link>
          <div className="app-top-tools-right">
            {!this.state.validate && isListItem &&
            <div className="btn1 app-top-tools-right-btn" onClick={this.removeAll.bind(this)}>
              Tout supprimer
            </div>
            }
            {this.state.validate &&
            <div className="btn1 app-top-tools-right-btn" onClick={(e) => this.setState({validate:false})}>
              Modifier
            </div>
            }
          </div>
        </div>
        <CollageOutfit 
          hideSourceOnDrag={true} 
          listItems={listItems}
          onClickItem={onClickItem}
          onUpdateItem={onUpdateItem}
          />
      </div>
      <div className="app-create-outfit-items">
      {!this.state.validate &&
        <div className="items-list">
          {dataItems && dataCategoriesUser &&
          <div> 

            <div className="app-item-detail-top app-top-tools">
              <div className="app-top-tools-right">
              {isListItem && 
                <div className="btn1 app-top-tools-right-btn" onClick={()=>this.setState({validate:true})} >Valider cette tenue</div>
              }
              </div>
            </div>
            
            {dataCategoriesUser.map(function(category){
              var jsxItems = dataItems.filter(e => e.category === category.id).map(item => <div key={item.id} className="create-outfit-list-item" data-id={item.id} onClick={this.onClickItemToList.bind(this)} ><CreateOutfitItemsListItem id={item.id} key={item.id} imgBase={API_URL+item.img}  onClickItem={onClickItem} listItems={listItems} photo={API_URL+item.img190}/></div>);
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
      }
      {this.state.validate &&
          <CreateOutfitInfos
          onClickCreateOutfitImage={onClickCreateOutfitImage}
          onClickCreateOutfitInfos={onClickCreateOutfitInfos}
          listItems={listItems}
          />
      }
      </div>
    </div>
    )
  }
}

export default DragDropContext(HTML5Backend)(CreateOutfitItemsList)
