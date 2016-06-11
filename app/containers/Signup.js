import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { signupUser } from '../actions/SignupActions.js'
import SignupForm from '../components/SignupForm'
import { render } from "react-dom"; 
import { Link } from "react-router";
import * as TweenMax from "gsap/src/minified/TweenMax.min.js";


class Signup extends Component {
  componentDidMount() {
    TweenLite.fromTo(".auth-wrapper", 3, {opacity:0, top:'55%'}, {opacity:1, top:'50%', ease:Expo.easeOut, delay:0.2});
  }
  render() {
    const { dispatch, errorMessage } = this.props
    return (
      <div className="auth auth-signup">
        <div className="auth-wrapper">
          <Link className="" to="/">
            <img className="auth-logo" src="/html/src/img/logo_mydressup.png" />
          </Link>
          <h1 className="auth-title1">Envi de découvrir l'application ? <span className="auth-title1-bold">Inscris-toi !</span></h1>
          <SignupForm 
            errorMessage={errorMessage}
            onSignupClick={ creds => dispatch(signupUser(creds, this.props.history))}/>
          <p>Tu as déjà un compte ? &nbsp; 
            <Link className="underline-hover" to="signin">Connecte-toi</Link>
          </p>
        </div>
      </div>
    )
  }
}

Signup.propTypes = {
  dispatch: PropTypes.func.isRequired,
  errorMessage: PropTypes.string
}

function mapStateToProps(state) {

  const { signup } = state
  const { errorMessage } = signup

  return {
    errorMessage
  }
}

export default connect(mapStateToProps)(Signup)