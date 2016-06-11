import React, { Component, PropTypes } from 'react'
import { Link } from "react-router";
import LookbooksList from "../../components/LookbooksList"
import { fetchLookbooks } from '../../actions/LookbooksActions.js'


import { connect } from 'react-redux'

class Lookbooks extends Component {
  constructor() {
    super();
  }

  render() {
  	const { dispatch, dataLookbooks } = this.props
    return (
      <div className="app-items">
        <LookbooksList 
          fetchLookbooks={() => dispatch(fetchLookbooks())}
          dataLookbooks={dataLookbooks}
        />
      </div>
    )
  }
}



function mapStateToProps(state) {

  const { fetchLookbooks } = state
  const { dataLookbooks } = fetchLookbooks

  return {
    dataLookbooks, 
	}
}

export default connect(mapStateToProps)(Lookbooks)