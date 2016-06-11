import React, { Component, PropTypes } from 'react'
import OutfitDetailForm from "../../components/OutfitDetailForm"
import { fetchOutfit } from '../../actions/OutfitsActions.js'
import { deleteOutfit } from '../../actions/OutfitsActions.js'
import { connect } from 'react-redux'
import { Link } from "react-router";

class OutfitDetail extends Component {
  constructor(){
    super();
    this.state = ({
      deleteValidation: false,
    })
  }
  onClickDelete(e){
    if (this.state.deleteValidation==true) {
      this.props.dispatch(deleteOutfit(this.props.params.id, this.props.history));
    } else {
      this.setState({deleteValidation:true});
    }
  }
  render() {
    const { dispatch, dataOutfit } = this.props
    const editLink = "app/outfits/edit/"+ this.props.params.id;
    console.log(this.props.params.id);
    return (	
        <div className="app-item-detail">
          <div className="app-item-detail-top app-top-tools">
            <Link className="btn-back-to" to="/app/outfits"><span className="btn-back-to-arrow"></span>Retour à la liste</Link>
            <div className="app-top-tools-right">
              <div 
                onClick={this.onClickDelete.bind(this)} 
                className={"btn1 app-top-tools-right-btn app-top-tools-right-btn-delete "+ (this.state.deleteValidation==true ? "delete-validation": "")}>
                {this.state.deleteValidation==true ? "Etes vous sûr ? Oui !" : "Suprimer" }
              </div>
              <Link to={editLink} className="btn1 app-top-tools-right-btn">Editer</Link>
            </div>
          </div>
          <OutfitDetailForm 
            fetchOutfit={() => dispatch(fetchOutfit(this.props.params.id, this.props.history))}
            dataOutfit={dataOutfit}
          />
        </div>
    )
  }
}


function mapStateToProps(state) {

  const { fetchOutfit, deleteOutfit } = state
  const { dataOutfit } = fetchOutfit

  return {
    dataOutfit 
  }
}

export default connect(mapStateToProps)(OutfitDetail)