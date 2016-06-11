import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { Link } from "react-router";
// import OutfitsList from "../../components/OutfitsList"
import OutfitsFilters from "../../components/OutfitsFilters"
import { fetchOutfits } from '../../actions/OutfitsActions.js'
import CreateLookbookListOutfits from "../../components/CreateLookbookListOutfits"
export default class CreateLookbook extends Component {
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
    const { dispatch, dataOutfits } = this.props

    const category = 
      [
        {"name": "Vetements", "id":"3"}, 
        {"name": "Chaussures", "id":"4"}
      ]
    return (
      <div className="app-outfits">
        <CreateLookbookListOutfits
        fetchOutfits={() => dispatch(fetchOutfits())}
        dataOutfits={dataOutfits}
         />
      </div>
    );
  }
}

function mapStateToProps(state) {

  const { fetchOutfits } = state
  const { dataOutfits } = fetchOutfits
  return {
    dataOutfits
  }
}

export default connect(mapStateToProps)(CreateLookbook)