import React, { Component, PropTypes } from 'react'
import AddItemForm from "../../components/AddItemForm"
import { Link } from "react-router";
import { connect } from 'react-redux'
import { addItem } from '../../actions/ItemsActions.js'
import { fetchBrands } from '../../actions/BrandsActions.js'
import { downloadUrl } from '../../actions/UrlActions.js'
import { deleteDownloadUrl } from '../../actions/UrlActions.js'
class AddItem extends Component {
  render() {
  	const { dispatch, errorMessage, dataCategories, dataBrands, dataColors, dataStyles, imageDownloaded } = this.props
    return (
      	<div className="app-add-item">
            <div className="app-add-item-top app-top-tools">
              <Link className="btn-back-to" to="/app/items"><span className="btn-back-to-arrow"></span>Retour à la liste</Link>
            </div>
          	<AddItemForm 
          	dataCategories={dataCategories}
          	dataBrands={dataBrands}
          	dataColors={dataColors}
          	dataStyles={dataStyles}
          	errorMessage={errorMessage}
            imageDownloaded={imageDownloaded}
          	onAddItemClick={ itemDatas => dispatch(addItem(itemDatas, this.props.history))}
       	    onDownloadImage={ url => dispatch(downloadUrl(url))}
            onDeleteImage={ () => dispatch(deleteDownloadUrl())}
            />
        </div>
    )
  }
}

function mapStateToProps(state) {

  const { addItem, fetchCategories, fetchBrands, fetchColors, fetchStyles, downloadUrl } = state
  const { errorMessage } = addItem
  const { dataCategories } = fetchCategories
  const { dataBrands } = fetchBrands
  const { dataColors } = fetchColors
  const { dataStyles } = fetchStyles
  const { imageDownloaded } = downloadUrl

  return {
    errorMessage,
    dataCategories,
    dataBrands,
    dataColors,
    dataStyles,
    imageDownloaded
  }
}

export default connect(mapStateToProps)(AddItem)