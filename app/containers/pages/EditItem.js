import React, { Component, PropTypes } from 'react'
import EditItemForm from "../../components/EditItemForm"
import { Link } from "react-router";
import { connect } from 'react-redux'
import { editItem } from '../../actions/ItemsActions.js'
import { fetchItem } from '../../actions/ItemsActions.js'


class EditItem extends Component {
  render() {
  	const { dispatch, errorMessage, dataCategories, dataBrands, dataColors, dataStyles, dataItem } = this.props
    const linkDetailItem = "app/items/"+this.props.params.id;
    return (
      	<div className="app-add-item">
          <div className="app-add-item-top app-top-tools">
            <Link className="btn-back-to" to={linkDetailItem}><span className="btn-back-to-arrow"></span>Retour au détail</Link>
          </div>
          	<EditItemForm 
            id={this.props.params.id}
          	dataCategories={dataCategories}
          	dataBrands={dataBrands}
          	dataColors={dataColors}
          	dataStyles={dataStyles}
          	errorMessage={errorMessage}
            dataItem={dataItem}
            fetchItem={() => dispatch(fetchItem(this.props.params.id))}
          	onEditItemClick={ itemDatas => dispatch(editItem(itemDatas, this.props.history))}/>
       	</div>
    )
  }
}

function mapStateToProps(state) {

  const { editItem, fetchCategories, fetchBrands, fetchColors, fetchStyles, fetchItem } = state
  const { errorMessage } = editItem
  const { dataCategories } = fetchCategories
  const { dataBrands } = fetchBrands
  const { dataColors } = fetchColors
  const { dataStyles } = fetchStyles
  const { dataItem } = fetchItem

  return {
    errorMessage,
    dataCategories,
    dataBrands,
    dataColors,
    dataStyles, 
    dataItem
  }
}

export default connect(mapStateToProps)(EditItem)