import profil_img from '../src/img/profil_img.png';
import React, { Component, PropTypes } from 'react'
import Logout from './Logout'
import { loginUser } from '../actions/LoginActions.js'
import { logoutUser } from '../actions/LogoutActions.js'
import { Link } from "react-router";
import { config } from '../config.js'
const API_URL = config.API_URL;

export default class NavTop extends Component {

  render() {
    const { dispatch, history } = this.props
    let username = localStorage.getItem('username') || null
    let img = localStorage.getItem('img') || null
    return (
      <header>
        <nav className='navtop'>
          <div className="navtop-wrapper">
            <Link to="app/home" className="navtop-logo">
              <svg className="icon icon-logo navtop-logo-icn">
                <use xlinkHref="#icon-logo"></use>
              </svg>
            </Link>
            <div className='navtop-right-block'>
              <div className="navtop-right-block-item navtop-right-block-item-profil">
                <Link to="/app/profil"><img className="navtop-right-block-item-profil-img" src={API_URL+img}/></Link>
                <p className="navtop-right-block-item-profil-txt">Bonjour <Link to="/app/profil">{username}</Link></p>
              </div>
              <div className="navtop-right-block-item">
                <Logout onLogoutClick={() => dispatch(logoutUser(this.props.history))} />
              </div>
            </div>
          </div>
        </nav>
      </header>
    )
  }

}

NavTop.propTypes = {
  dispatch: PropTypes.func.isRequired,
  errorMessage: PropTypes.string
}