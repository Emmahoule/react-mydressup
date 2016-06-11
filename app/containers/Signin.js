import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { loginUser } from '../actions/LoginActions.js'
import LoginForm from '../components/LoginForm'
import { render } from "react-dom"; 
import { Link } from "react-router";
import * as TweenMax from "gsap/src/minified/TweenMax.min.js";

class Signin extends Component {
  componentDidMount() {
    TweenLite.fromTo(".auth-wrapper", 3, {opacity:0, top:'55%'}, {opacity:1, top:'50%', ease:Expo.easeOut, delay:0.2});
  }
  render() {
    const { dispatch, errorMessage } = this.props
    return (
      <div className="auth auth-signin">
        <div className="auth-wrapper">
          <Link className="" to="/">
            <img className="auth-logo" src="/html/src/img/logo_mydressup.png" />
          </Link>
          <LoginForm
            errorMessage={errorMessage}
            onLoginClick={ creds => dispatch(loginUser(creds, this.props.history))}
          />
          <p>Tu n'as pas encore de compte ? &nbsp; 
            <Link className="underline-hover" to="signup">Inscris-toi</Link>
          </p>
        </div>
      </div>
    )
  }
}

Signin.propTypes = {
  dispatch: PropTypes.func.isRequired,
  errorMessage: PropTypes.string
}

function mapStateToProps(state) {

  const { auth } = state
  const { errorMessage } = auth
  console.log(auth);

  return {
    errorMessage
  }
}

export default connect(mapStateToProps)(Signin)