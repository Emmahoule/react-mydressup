import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { loginUser } from '../actions/LoginActions.js'
import HomeNavbar from '../components/HomeNavbar'
import HomeFooter from '../components/HomeFooter'
import { Link } from "react-router";
import ContactForm from '../components/ContactForm';

export default class Contact extends Component {

  render() {
    const { dispatch, isAuthenticated, history } = this.props
    return (
      <div className="contact" >
        <div className="homepage-container">
          <div className="homepage-section homepage-section-title">
            <div className="homepage-section homepage-section-title-bg">
            </div>
            <div className="homepage-section-wrapper">
              <HomeNavbar
                isAuthenticated={isAuthenticated}
                dispatch={dispatch}
                history={history}
              />
              <div className="homepage-section-inner">
                <h1 className="page-section-title-title">Envie de <span className="c-second">papoter de la mode</span> avec nous ?</h1>
                <div className="homepage-section-title-baseline page-section-title-baseline">Contactez-nous !</div>
              </div>
              <div className="arrow-to-bottom"></div>
            </div>
          </div>
          
          <div className="page-section page-section-contact">
            <div className="homepage-section-wrapper">
              <div className="page-section-contact-text">
              <ContactForm/>
                
              </div>
            </div>
          </div>


        <HomeFooter />

        </div>
      </div>
    )
  }
}
