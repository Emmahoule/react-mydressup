import React, { Component, PropTypes } from 'react'
import { Link } from "react-router";
import { connect } from 'react-redux'

export default class ItemsFilters extends Component {
  
  constructor() {
    super();
    this.state = {
      selectBox:""
    }
  }

  handleSelectBox(e){
    let el = e.target.id;
    if (this.state.selectBox=="") {
      this.setState({selectBox: el})
    } else {
      this.setState({selectBox:""})
    } 
  }

  render() {
  	const { dispatch, dataItems, dataCategories, dataBrands, dataStyles, dataColors } = this.props
    const colors = [
      'CadetBlue',
      'LightSeaGreen',
      'LightGoldenRodYellow',
      'CadetBlue',
      'CadetBlue',
    ]

    const category = 
      [
        {"name": "Vetements", "id":"3"}, 
        {"name": "Chaussures", "id":"4"}
      ]

    let style = [];
    
    for (let i=0; i<colors.length; i++){
      style.push({backgroundColor:colors[i]});
    }
    
    return (
        <div className="app-topbar-left">
          <div className="app-topbar-filter">
            <div className="app-topbar-filter-title">Filtrer par :</div>
            {dataCategories &&
            <div className="app-topbar-filter-item app-topbar-filter-select" id="category" onClick={this.handleSelectBox.bind(this)}>
              Catégorie
              <div className={"app-topbar-filter-select-list " + (this.state.selectBox=="category" ? "visible" : "hidden")}>
                {dataCategories.map(function(category){
                  return <div key={category.id} className="app-topbar-filter-select-list-option">{category.name}</div>
                })}
              </div>
            </div>
            }
            {dataBrands &&
            <div className="app-topbar-filter-item app-topbar-filter-select" id="brand" onClick={this.handleSelectBox.bind(this)}>
              Marque
              <div className={"app-topbar-filter-select-list " + (this.state.selectBox=="brand" ? "visible" : "hidden")}>
                {dataBrands.map(function(brand){
                  return <div key={brand.id} className="app-topbar-filter-select-list-option">{brand.name}</div>
                })}
              </div>
            </div>
            }
            {dataColors &&
            <div className="app-topbar-filter-item app-topbar-filter-select" id="color" onClick={this.handleSelectBox.bind(this)}>
              Couleurs
              <div className={"app-topbar-filter-select-list " + (this.state.selectBox=="color" ? "visible" : "hidden")}>
                {dataColors.map(function(color){
                  return <div key={color.id} className="app-topbar-filter-select-list-option"><span style={{backgroundColor: color.codeColor}} className="app-topbar-filter-select-list-color"></span>{color.name}</div>
                })}
              </div>
            </div>
            }
            {dataStyles &&
            <div className="app-topbar-filter-item app-topbar-filter-select" id="style" onClick={this.handleSelectBox.bind(this)}>
              Style
              <div className={"app-topbar-filter-select-list " + (this.state.selectBox=="style" ? "visible" : "hidden")}>
                {dataStyles.map(function(style){
                  return <div key={style.id} className="app-topbar-filter-select-list-option">{style.name}</div>
                })}
              </div>
            </div>
            }
          </div>
        </div>
    )
  }
}
