import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { Link } from "react-router";

export default class LookbooksFilter extends Component {
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
    const date = 
      [
        {"name": "16 janvier 2010", "id":"3"}, 
        {"name": "20 novembre 2015", "id":"4"}
      ]
    return (
        <div className="app-topbar-left">
          <div className="app-topbar-filter">
            <div className="app-topbar-filter-title">Filtrer par :</div>
            <div className="app-topbar-filter-item app-topbar-filter-select lookbook-select-date-create" id="occasion" onClick={this.handleSelectBox.bind(this)}>
              Date de création
              <div className={"app-topbar-filter-select-list " + (this.state.selectBox=="occasion" ? "visible" : "hidden")}>
                {date.map(function(occasion){
                  return <div key={occasion.id} className="app-topbar-filter-select-list-option">{occasion.name}</div>
                })}
              </div>
            </div>
          </div>
        </div>
    );
  }
}
