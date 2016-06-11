import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { editProfilUser, fetchProfilInfos } from '../../actions/ProfilActions.js'
import EditProfilForm from '../../components/EditProfilForm'
import { browserHistory } from 'react-router'
import { render } from "react-dom"; 
import { Link } from "react-router";

class Profil extends Component {
  render() {
    const { dispatch, errorMessage, userInfos } = this.props
    return (
      <div className="app-profil">
        <div className="app-add-item-top app-top-tools">
          <Link className="btn-back-to" to="app/home"><span className="btn-back-to-arrow"></span>Retour à l'accueil</Link>
        </div>
        <div className="app-block">
          <EditProfilForm 
            errorMessage={errorMessage}
            fetchProfilInfos={() => dispatch(fetchProfilInfos())}
            onEditProfilClick={ creds => dispatch(editProfilUser(creds, this.props.history))}
            userInfos={userInfos}/>
        </div>
      </div>
    )
  }
}

Profil.propTypes = {
  dispatch: PropTypes.func.isRequired,
  errorMessage: PropTypes.string
}

// These props come from the application's
// state when it is started
function mapStateToProps(state) {

  const { profil } = state
  const { userInfos, errorMessage } = profil

  return {
    userInfos,
    errorMessage,
  }
}

export default connect(mapStateToProps)(Profil)