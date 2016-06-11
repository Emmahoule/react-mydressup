import React, { Component, PropTypes } from 'react'
import Logout from './Logout'
import { loginUser } from '../actions/LoginActions.js'
import { logoutUser } from '../actions/LogoutActions.js'
import { Link } from "react-router";

export default class HomeNavbar extends Component {

  render() {
    const { dispatch, isAuthenticated, history } = this.props

    return (
      <header className="home-header">
        <div className="home-header-wrapper">
          <Link to="/"  className="home-header-logo">
            <svg className="icon icon-logo home-header-logo">
              <use xlinkHref="#icon-logo"></use>
            </svg>
          </Link>
          <nav className="home-navbar">
            <div className="home-navbar-item">
              <Link to="/about" className="home-navbar-item-link">À propos</Link>
            </div>
            <div className="home-navbar-item">
              <Link to="/team" className="home-navbar-item-link">Notre équipe</Link>
            </div>
            <div className="home-navbar-item">
              <Link to="/faq" className="home-navbar-item-link">FAQ</Link>
            </div>
            <div className="home-navbar-item">
              <Link to="/contact" className="home-navbar-item-link">Contact</Link>
            </div>
              {!isAuthenticated &&
                <div className="home-navbar-items-noauth">
                  <div className="home-navbar-item home-navbar-items-noauth-item">
                    <Link className="btn2" to="signin">Connecte-toi</Link>
                  </div>
                  <div className="home-navbar-item home-navbar-items-noauth-item">
                    <Link className="btn2" to="signup">Inscris-toi</Link>
                  </div>
                </div>
              }
              {isAuthenticated &&
                <div className="home-navbar-items-auth">
                  <div className="home-navbar-item">
                    <Link className="btn2" to="app/home">Accéder à My Dress'up</Link>
                  </div>
                </div>
              }
          </nav>
        </div>
      </header>
    )
  }
}

HomeNavbar.propTypes = {
  dispatch: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
}