import React, { Component, PropTypes } from 'react'
import { Link } from "react-router";
import ItemsList from "../../components/ItemsList"
import ItemsFilters from "../../components/ItemsFilters"
import { fetchItems } from '../../actions/ItemsActions.js'
import { fetchCategories } from '../../actions/CategoriesActions.js'
import { fetchCategoriesByUser } from '../../actions/CategoriesActions.js'
import { fetchBrands } from '../../actions/BrandsActions.js'
import { fetchStyles } from '../../actions/StylesActions.js'
import { fetchColors } from '../../actions/ColorsActions.js'

import { connect } from 'react-redux'

class Items extends Component {
  constructor() {
    super();
  }

  render() {
  	const { dispatch, dataItems, dataCategories, dataCategoriesUser, dataBrands, dataStyles, dataColors } = this.props
    return (
      <div className="app-items">
        <ItemsList 
          fetchItems={() => dispatch(fetchItems())}
          fetchCategories={() => dispatch(fetchCategories())}
          fetchCategoriesByUser={() => dispatch(fetchCategoriesByUser())}
          fetchBrands={() => dispatch(fetchBrands())}
          fetchStyles={() => dispatch(fetchStyles())}
          fetchColors={() => dispatch(fetchColors())}
          dataItems={dataItems}
          dataCategories={dataCategories}
          dataCategoriesUser={dataCategoriesUser}
          dataBrands={dataBrands}
          dataStyles={dataStyles}
          dataColors={dataColors}
        />
      </div>
    )
  }
}



function mapStateToProps(state) {

  const { fetchItems, fetchCategories, fetchCategoriesByUser, fetchBrands, fetchStyles, fetchColors } = state
  const { dataItems } = fetchItems
  const { dataCategories } = fetchCategories
  const { dataCategoriesUser } = fetchCategoriesByUser
  const { dataBrands } = fetchBrands
  const { dataStyles } = fetchStyles
  const { dataColors } = fetchColors
  return {
    dataItems, 
    dataCategories,
    dataCategoriesUser,
    dataBrands,
    dataStyles,
    dataColors
	}
}

export default connect(mapStateToProps)(Items)