import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { loginUser } from '../actions/LoginActions.js'
import HomeNavbar from '../components/HomeNavbar'
import HomeFooter from '../components/HomeFooter'
import { Link } from "react-router";

export default class Faq extends Component {

  render() {
    const { dispatch, isAuthenticated, history } = this.props
    return (
      <div className="faq" >
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
                <h1 className="page-section-title-title">Envie d'<span className="c-second">en savoir plus</span> sur My Dress’Up ?</h1>
                <div className="homepage-section-title-baseline page-section-title-baseline">Nous vous répondons à vos questions ici !</div>
              </div>
              <div className="arrow-to-bottom"></div>
            </div>
          </div>
          
          <div className="page-section page-section-faq">
            <div className="homepage-section-wrapper">
              <div className="page-section-faq-question">
                <h2 className="page-section-question-title">Qu’est ce que My Dress’Up ? </h2>
                <p>My Dress’Up est une application web d’un dressing virtuel. Il vous permettra de créer votre propre dressing en ajoutant vos vêtemnts et de l’organiser à votre guise. Vous pourrez créer vos tenues et même vos lookbooks. </p>
              </div>
              <div className="page-section-faq-question">
                <h2 className="page-section-question-title">Comment fonctionne My Dress’Up ? </h2>
                <p>Avec My Dress’Up, vous uploadez vos propres photos de vêtements ou vous entrez l’URL de l’habit, vous entrez les informations et hop vos vêtements sont triés par catégorie ! Faciles de les retrouver, de les classer, et de les organiser ! Créez ensuite vos tenues favorites et vos lookbooks pour ne plus galérer à vous habiller le matin.</p>
              </div>
              <div className="page-section-faq-question">
                <h2 className="page-section-question-title">Comment accéder à My Dress’Up ?</h2>
                <p>My Dress’Up est une application web, vous pouvez donc y accéder depuis n’importe quel navigateur web, d’une tablette, d’un mobile ou d’un ordinateur. </p>
              </div>
              <div className="page-section-faq-question">
                <h2 className="page-section-question-title">Comment créer une tenue dans My Dress’Up ?</h2>
                <p>Choississez vos vêtements, associez les et créez votre tenue favorite. Définissez l’occasion, la météo, la température, ce qui vous permettra de la retrouver facilement suivant la météo. </p>
              </div>
              <div className="page-section-faq-question">
                <h2 className="page-section-question-title">Comment fonctionne la suggestion de tenue ?</h2>
                <p>En fonction de la météo, My Dress’Up vous propose une tenue chaque jour selon les critères que vous avez rentré pour chaque tenue.</p>
              </div>
            </div>
          </div>


        <HomeFooter />

        </div>
      </div>
    )
  }
}
