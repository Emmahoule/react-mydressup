import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux';
import CollageOutfit from '../../components/CollageOutfit';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

import { collageAddItem } from '../../actions/CollageActions.js';
import { collageRemoveAllItems } from '../../actions/CollageActions.js';
import { collageUpdateItem } from '../../actions/CollageActions.js';
import { collageDeleteItem } from '../../actions/CollageActions.js';

import EditOutfitItemsList from "../../components/EditOutfitItemsList"
import ItemsFilters from "../../components/ItemsFilters"
import { fetchItems } from '../../actions/ItemsActions.js'
import { fetchCategories } from '../../actions/CategoriesActions.js'
import { fetchCategoriesByUser } from '../../actions/CategoriesActions.js'
import { editOutfit } from '../../actions/OutfitsActions.js'
import { fetchOutfit } from '../../actions/OutfitsActions.js'

import { addOutfitImage } from '../../actions/OutfitsActions.js';
import { addOutfitInfos } from '../../actions/OutfitsActions.js';

import { Link } from "react-router";

class EditOutfit extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { dispatch, dataItems, dataCategories, dataCategoriesUser, onClickItem, onRemoveAllItems, listItems, onUpdateItem, onDeleteItem, onClickCreateOutfitImage, onClickCreateOutfitInfos, dataOutfit} = this.props
    const category = 
      [
        {"name": "Vetements", "id":"3"}, 
        {"name": "Chaussures", "id":"4"}
      ]
    return (
      <div className="app-create-outfit">
        <div className="app-items">
          <EditOutfitItemsList
            fetchItems={() => dispatch(fetchItems())}
            fetchCategories={() => dispatch(fetchCategories())}
            fetchCategoriesByUser={() => dispatch(fetchCategoriesByUser())}
            dataItems={dataItems}
            dataCategories={dataCategories}
            dataCategoriesUser={dataCategoriesUser}
            onClickItem = {(listItems, id, item)=>dispatch(collageAddItem(listItems, id, item))}
            onRemoveAllItems = {()=>dispatch(collageRemoveAllItems())}
            listItems = {listItems}    
            onUpdateItem = {(listItems, id, key, newValue)=>dispatch(collageUpdateItem(listItems, id, key, newValue))}
            onDeleteItem = {(listItems, id)=>dispatch(collageDeleteItem(listItems, id))}
            onClickCreateOutfitImage = {(imageOutfit)=>dispatch(addOutfitImage(imageOutfit))}
            onClickCreateOutfitInfos = {(infoOutfit)=>dispatch(editOutfit(infoOutfit, this.props.history))}
          	fetchOutfit={() => dispatch(fetchOutfit(this.props.params.id))}
          	dataOutfit={dataOutfit}
          />
          </div>
      </div>
    );
  }
}

function mapStateToProps(state) {

  const { collageItem, addOutfitImage } = state
  const { listItems } = collageItem
  const { fetchItems, fetchCategories, fetchCategoriesByUser, fetchOutfit } = state
  const { dataItems } = fetchItems
  const { dataCategories } = fetchCategories
  const { dataCategoriesUser } = fetchCategoriesByUser
  const { dataOutfit } = fetchOutfit


  return {
    dataItems, 
    dataCategories,
    dataCategoriesUser,
    listItems,
    dataOutfit

  }
}
export default connect(mapStateToProps)(EditOutfit)