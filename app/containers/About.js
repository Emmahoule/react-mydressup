import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { loginUser } from '../actions/LoginActions.js'
import HomeNavbar from '../components/HomeNavbar'
import HomeFooter from '../components/HomeFooter'
import { Link } from "react-router";

export default class About extends Component {

  render() {
    const { dispatch, isAuthenticated, history } = this.props
    return (
      <div className="about" >
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
                <h1 className="page-section-title-title">Envie de connaître <span className="c-second">la naissance</span> et <span className="c-second">les secrets</span> de My Dress’Up ?</h1>
                <div className="homepage-section-title-baseline page-section-title-baseline">Apprenez-tout de son histoire ! </div>
              </div>
              <div className="arrow-to-bottom"></div>
            </div>
          </div>
          
          <div className="page-section page-section-about">
            <div className="homepage-section-wrapper">
              <div className="page-section-about-text">
                <h2 className="page-section-about-text-title">Lassée de ne jamais savoir quoi mettre le matin? Trouver la bonne tenue avec My Dress Up, en un coup de main !</h2>
                <p>My Dress’Up  est une application web d’un dressing virtuel. Elle vous permettra de créer, classer, organiser votre propre dressing, de créer vos tenues favorites mais aussi des lookbooks avec l’ensemble de vos tenues préférées. Pluie, soleil, neige, My Dress’Up vous conseillera des tenues en fonction de la météo et de la température extérieure. Un dîner important vendredi soir, un footing le samedi après-midi, une soirée le samedi soir, le calendrier de My Dress’Up vous permettra d’organiser vos tenues pour chacune de vos sorties ! </p>
                <p>Un mois de réalisation professionnelle dans le cadre d’un M2 CIM, 2 DT et 2 DA, des passionnées de mode, voilà comment est né My Dress’Up ! Soutenez-nous et aidez-nous à développer ce projet jusqu’au bout ! Nous avons besoin de votre soutient ! </p>
                <video controls src="video.ogv" width="100%" className="page-section-about-video">Ici la description alternative</video>
              </div>
            </div>
          </div>


        <HomeFooter />

        </div>
      </div>
    )
  }
}
