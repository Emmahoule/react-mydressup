import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { Link } from "react-router";

export default class OutfitsFilter extends Component {
  
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
    const { dispatch, dataOccasions, dataTemperatures, dataWeathers } = this.props
    return (
        <div className="app-topbar-left">
          <div className="app-topbar-filter">
            <div className="app-topbar-filter-title">Filtrer par :</div>
            <div className="app-topbar-filter-item app-topbar-filter-select" id="occasion" onClick={this.handleSelectBox.bind(this)}>
              Occasion
              {dataOccasions &&
              <div className={"app-topbar-filter-select-list " + (this.state.selectBox=="occasion" ? "visible" : "hidden")}>
                {dataOccasions.map(function(occasion){
                  return <div key={occasion.id} className="app-topbar-filter-select-list-option">{occasion.name}</div>
                })}
              </div>
              }
            </div>


            <div className="app-topbar-filter-item app-topbar-filter-select" id="weather" onClick={this.handleSelectBox.bind(this)}>
              Météo
              <div className={"app-topbar-filter-select-list " + (this.state.selectBox=="weather" ? "visible" : "hidden")}>
                  <div className="app-topbar-filter-select-list-option">Ensoleillé</div>
                  <div className="app-topbar-filter-select-list-option">Pluvieux</div>
                  <div className="app-topbar-filter-select-list-option">Neige</div>
                  <div className="app-topbar-filter-select-list-option">Nuageux</div>
              </div>
            </div>


            <div className="app-topbar-filter-item app-topbar-filter-select" id="temperature" onClick={this.handleSelectBox.bind(this)}>
              Températures
              {dataTemperatures &&
              <div className={"app-topbar-filter-select-list " + (this.state.selectBox=="temperature" ? "visible" : "hidden")}>
                {dataTemperatures.map(function(temperature){
                  return <div key={temperature.id} className="app-topbar-filter-select-list-option">{temperature.name}</div>
                })}
              </div>
              }
            </div>

          </div>
        </div>
    );
  }
}
