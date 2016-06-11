import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { Link } from "react-router";
import OutfitsList from "../../components/OutfitsList"
import { fetchOutfits } from '../../actions/OutfitsActions.js'
import { fetchOccasions } from '../../actions/OccasionsActions.js'
import { fetchTemperatures } from '../../actions/TemperaturesActions.js'
import { fetchWeathers } from '../../actions/WeathersActions.js'

export default class Outfits extends Component {
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
    const { dispatch, dataOutfits, dataOccasions, dataTemperatures, dataWeathers } = this.props

    const category = 
      [
        {"name": "Vetements", "id":"3"}, 
        {"name": "Chaussures", "id":"4"}
      ]
    return (
      <div className="app-outfits">
        <OutfitsList
        fetchOutfits={() => dispatch(fetchOutfits())}
        dataOutfits={dataOutfits}
        fetchOccasions={() => dispatch(fetchOccasions())}
        fetchTemperatures={() => dispatch(fetchTemperatures())}
        fetchWeathers={() => dispatch(fetchWeathers())}
        dataOccasions={dataOccasions}
        dataTemperatures={dataTemperatures}
        dataWeathers={dataWeathers}
         />
      </div>
    );
  }
}

function mapStateToProps(state) {

  const { fetchOutfits, fetchOccasions, fetchTemperatures, fetchWeathers } = state
  const { dataOutfits } = fetchOutfits
  const { dataOccasions } = fetchOccasions
  const { dataTemperatures } = fetchTemperatures
  const { dataWeathers } = fetchWeathers
  return {
    dataOutfits,
    dataOccasions,
    dataTemperatures,
    dataWeathers
  }
}

export default connect(mapStateToProps)(Outfits)