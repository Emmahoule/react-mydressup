import logoUrl from '../src/img/logo_dressMeUp.png';

import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { loginUser } from '../actions/LoginActions.js'
import ResetPassForm from '../components/ResetPassForm'
import { browserHistory } from 'react-router'
import { render } from "react-dom"; 
import { Link } from "react-router";
import * as TweenMax from "gsap/src/minified/TweenMax.min.js";

class ResetPass extends Component {
  componentDidMount() {
    TweenLite.fromTo(".auth-wrapper", 3, {opacity:0, top:'55%'}, {opacity:1, top:'50%', ease:Expo.easeOut, delay:0.2});
  }
  render() {
    const { dispatch, isAuthenticated, errorMessage } = this.props
    return (
      <div className="auth auth-resetpass">
        <div className="auth-wrapper">
          <Link className="" to="/">
            <img className="auth-logo" src={logoUrl}/>
          </Link>
          <h1 className="auth-title1">Changer de mot de passe</h1>
          <ResetPassForm />
        </div>
      </div>
    )
  }
}

ResetPass.propTypes = {
  dispatch: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  errorMessage: PropTypes.string
}

function mapStateToProps(state) {

  const { auth } = state
  const { isAuthenticated, errorMessage } = auth

  return {
    isAuthenticated,
    errorMessage
  }
}

export default connect(mapStateToProps)(ResetPass)