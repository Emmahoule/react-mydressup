import React, { Component, PropTypes } from 'react'
import { Link } from "react-router";
import ReactDOM from 'react-dom';

export default class EditOutfitInfos extends Component {
  
  constructor(props) {
      super(props);
      this.state = {
        itemsSelected: {}
      }
  } 

  onClickItem(category, type){
    var newItemsSelected = this.state.itemsSelected;
    if (!this.state.itemsSelected.hasOwnProperty(category)){
      newItemsSelected[category] = []
    }

    if (this.state.itemsSelected[category].includes(type)) {
      newItemsSelected = this.state.itemsSelected;
      var index = newItemsSelected[category].indexOf(type);
      newItemsSelected[category].splice(index, 1);
      this.setState({
        itemsSelected: newItemsSelected
      })
    }
    else {
      newItemsSelected[category].push(type);      
      this.setState({
      itemsSelected: newItemsSelected
      })
    }
  }

  verifySelected(category, type){
    if(this.state.itemsSelected[category]){
      if(this.state.itemsSelected[category].includes(type)){
        return "selected"
      }
    }
    return ""
  }

  replaceChar(s) {
    s = s.toLowerCase();
    var rules = {
      'a': /[àáâãäå]+/g,
      'ae': /[æ]+/g,
      'c': /[ç]+/g,
      'e': /[èéêë]+/g,
      'i': /[ìíîï]+/g,
      'n': /[ñ]+/g,
      'o': /[òóôõöø]+/g,
      'oe': /[œ]+/g,
      'u': /[ùúûü]+/g,
      'y': /[ýÿ]+/g,
      '_': /[\s\']+/g,
      'th': /[ðþ]+/g,
      'ss': /[ß]/g
    };
    for (var r in rules) 
      s = s.replace(rules[r], r);
    return s;
  }

  merge_options(obj1,obj2){
    var obj3 = {};
    for (var attrname in obj1) { obj3[attrname] = obj1[attrname]; }
    for (var attrname in obj2) { obj3[attrname] = obj2[attrname]; }
    return obj3;
  }


  onClickSave(){
    // console.log(this.props.listItems);
    // console.log(this.state.itemsSelected);
    // console.log(this.merge_options(this.props.listItems,this.state.itemsSelected))
    // this.props.listItems.
    // this.props.onClickCreateOutfitImage(this.props.listItems);
    this.props.onClickCreateOutfitInfos(this.merge_options(this.props.listItems,this.state.itemsSelected));
  }


  render() {
    const {onClickCreateOutfitImage, onClickCreateOutfitInfos, listItems, dataOutfit} = this.props
    var test = "héhéhé"
    return (
      <div>
      <div className="app-item-detail-top app-top-tools">
        <div className="app-top-tools-right">
          <div className="btn1 app-top-tools-right-btn" onClick={this.onClickSave.bind(this)} >Enregistrer cette tenue</div>
        </div>
      </div>
      <div className="create-outfit-infos app-block">
        <div className="create-outfit-infos-block">

          <div className="create-outfit-infos-block-title">Occasion</div>
          <div className={"create-outfit-infos-block-item " + this.verifySelected("Occasion", "Soirée")} onClick={()=>this.onClickItem("Occasion", "Soirée")}>
            <svg className="icon create-outfit-infos-block-item-icon">
              <use xlinkHref={"#icon-"+this.replaceChar("Soirée")}></use>
            </svg>
            Soirée
          </div>
          <div className={"create-outfit-infos-block-item "+this.verifySelected("Occasion", "Travail")} onClick={()=>this.onClickItem("Occasion", "Travail")}>
            <svg className="icon create-outfit-infos-block-item-icon">
              <use xlinkHref={"#icon-"+this.replaceChar("Travail")}></use>
            </svg>
            Travail
          </div>
          <div className={"create-outfit-infos-block-item "+this.verifySelected("Occasion", "Sport")} onClick={()=>this.onClickItem("Occasion", "Sport")}>
            <svg className="icon create-outfit-infos-block-item-icon">
              <use xlinkHref={"#icon-"+this.replaceChar("Sport")}></use>
            </svg>
            Sport
          </div>
          <div className={"create-outfit-infos-block-item "+this.verifySelected("Occasion", "Ville")} onClick={()=>this.onClickItem("Occasion", "Ville")}>
            <svg className="icon create-outfit-infos-block-item-icon">
              <use xlinkHref={"#icon-"+this.replaceChar("Ville")}></use>
            </svg>
            Ville
          </div>
        </div>

        <div className="create-outfit-infos-block">
          <div className="create-outfit-infos-block-title">Météo</div>
            <div className={"create-outfit-infos-block-item " + this.verifySelected("Météo", "Ensoleillé")} onClick={()=>this.onClickItem("Météo", "Ensoleillé")}>
              <svg className="icon create-outfit-infos-block-item-icon">
                <use xlinkHref={"#icon-"+this.replaceChar("Ensoleillé")}></use>
              </svg>
              Ensoleillé
            </div>
            <div className={"create-outfit-infos-block-item "+this.verifySelected("Météo", "Nuageux")} onClick={()=>this.onClickItem("Météo", "Nuageux")}>
              <svg className="icon create-outfit-infos-block-item-icon">
                <use xlinkHref={"#icon-"+this.replaceChar("Nuageux")}></use>
              </svg>
              Nuageux
            </div>
            <div className={"create-outfit-infos-block-item "+this.verifySelected("Météo", "Pluvieux")} onClick={()=>this.onClickItem("Météo", "Pluvieux")}>
              <svg className="icon create-outfit-infos-block-item-icon">
                <use xlinkHref={"#icon-"+this.replaceChar("Pluvieux")}></use>
              </svg>
              Pluvieux
            </div>
            <div className={"create-outfit-infos-block-item "+this.verifySelected("Météo", "Neige")} onClick={()=>this.onClickItem("Météo", "Neige")}>
              <svg className="icon create-outfit-infos-block-item-icon">
                <use xlinkHref={"#icon-"+this.replaceChar("Neige")}></use>
              </svg>
              Neige
            </div>
          </div>

        <div className="create-outfit-infos-block">
          <div className="create-outfit-infos-block-title">Température</div>
            <div className={"create-outfit-infos-block-item " + this.verifySelected("Température", "Froid")} onClick={()=>this.onClickItem("Température", "Froid")}>
              <svg className="icon create-outfit-infos-block-item-icon">
                <use xlinkHref={"#icon-"+this.replaceChar("Froid")}></use>
              </svg>
              Froid
            </div>
            <div className={"create-outfit-infos-block-item "+this.verifySelected("Température", "Tempéré")} onClick={()=>this.onClickItem("Température", "Tempéré")}>
              <svg className="icon create-outfit-infos-block-item-icon">
                <use xlinkHref={"#icon-"+this.replaceChar("Tempéré")}></use>
              </svg>
              Tempéré
            </div>
            <div className={"create-outfit-infos-block-item "+this.verifySelected("Température", "Chaud")} onClick={()=>this.onClickItem("Température", "Chaud")}>
              <svg className="icon create-outfit-infos-block-item-icon">
                <use xlinkHref={"#icon-"+this.replaceChar("Chaud")}></use>
              </svg>
              Chaud
            </div>
            <div className={"create-outfit-infos-block-item "+this.verifySelected("Température", "Très chaud")} onClick={()=>this.onClickItem("Température", "Très chaud")}>
              <svg className="icon create-outfit-infos-block-item-icon">
                <use xlinkHref={"#icon-"+this.replaceChar("Très-chaud")}></use>
              </svg>
              Très chaud
            </div>
          </div>
        </div>
      </div>
    )
  }
}