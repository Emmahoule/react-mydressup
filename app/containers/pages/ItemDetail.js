import React, { Component, PropTypes } from 'react'
import ItemDetailForm from "../../components/ItemDetailForm"
import { fetchItem } from '../../actions/ItemsActions.js'
import { deleteItem } from '../../actions/ItemsActions.js'
import { connect } from 'react-redux'
import { Link } from "react-router";

class ItemDetail extends Component {
  constructor(){
    super();
    this.state = ({
      deleteValidation: false,
    })
  }
  onClickDelete(e){
    if (this.state.deleteValidation==true) {
      this.props.dispatch(deleteItem(this.props.params.id, this.props.history));
    } else {
      this.setState({deleteValidation:true});
    }
  }
  render() {
    const { dispatch, dataItem } = this.props
    const editLink = "app/items/edit/"+ this.props.params.id;
    return (	
        <div className="app-item-detail">
          <div className="app-item-detail-top app-top-tools">
            <Link className="btn-back-to" to="/app/items"><span className="btn-back-to-arrow"></span>Retour à la liste</Link>
            <div className="app-top-tools-right">
              <div 
                onClick={this.onClickDelete.bind(this)} 
                className={"btn1 app-top-tools-right-btn app-top-tools-right-btn-delete "+ (this.state.deleteValidation==true ? "delete-validation": "")}>
                {this.state.deleteValidation==true ? "Etes vous sûr ? Oui !" : "Suprimer" }
              </div>
              <Link to={editLink} className="btn1 app-top-tools-right-btn">Editer</Link>
            </div>
          </div>
          <ItemDetailForm 
            fetchItem={() => dispatch(fetchItem(this.props.params.id, this.props.history))}
            dataItem={dataItem}
          />
        </div>
    )
  }
}


function mapStateToProps(state) {

  const { fetchItem, deleteItem } = state
  const { dataItem } = fetchItem

  return {
    dataItem 
  }
}

export default connect(mapStateToProps)(ItemDetail)