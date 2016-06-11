import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { loginUser } from '../actions/LoginActions.js'
import HomeNavbar from '../components/HomeNavbar'
import HomeFooter from '../components/HomeFooter'
import { Link } from "react-router";

export default class Team extends Component {

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
                <h1 className="page-section-title-title">Envie de savoir <span className="c-second">qui se cache</span> derrière My Dress’Up ?</h1>
                <div className="homepage-section-title-baseline page-section-title-baseline">Découvrez-nous !</div>
              </div>
              <div className="arrow-to-bottom"></div>
            </div>
          </div>
          
          <div className="page-section page-section-team">
            <div className="homepage-section-wrapper">
            <div className="page-section-team-text-title page-section-title">“Nous sommes avant tout dynamiques, et passionnées de mode !”</div>
              <div className="page-section-team-item">
                <img className="page-section-team-item-img" src="/html/src/img/verica.png"/>
                <div className="page-section-team-item-name">Verica Naveska</div>
                <div className="page-section-team-item-post">Développeuse Back-end</div>
                <div className="page-section-team-item-text">Verica est une passionnée de code. Ses multiples expériences professionnelles dans le développement lui ont permis de se spécialiser dans le back-end. Bilingue, Verica a toutes les compétences pour exporter My Dress’Up à l’international ! </div>
              </div>
              <div className="page-section-team-item">
                <img className="page-section-team-item-img" src="/html/src/img/emma.png"/>
                <div className="page-section-team-item-name">Emma Houlé</div>
                <div className="page-section-team-item-post">Développeuse Front-end</div>
                <div className="page-section-team-item-text">Polyvalente, voilà le mot qui décrit au mieux Emma. Elle aime autant coder que designer ce qui la rend totalement polyvalente dans son travail. Grâce à cela, elle sait nous diriger pour faciliter au mieux l’intégration ! </div>
              </div>
              <div className="page-section-team-item">
                <img className="page-section-team-item-img" src="/html/src/img/paulineB.png"/>
                <div className="page-section-team-item-name">Pauline Barthe</div>
                <div className="page-section-team-item-post">Graphiste</div>
                <div className="page-section-team-item-text">Pauline a su développer ses compétences au cours de ses expériences professionnelles: chef de projet communication et relations presse, community manager, rédactrice web, graphiste... pour communiquer au mieux My Dress’Up ! </div>
              </div>
              <div className="page-section-team-item">
                <img className="page-section-team-item-img" src="/html/src/img/pauline.png"/>
                <div className="page-section-team-item-name">Pauline Champavier</div>
                <div className="page-section-team-item-post">Développeuse Back-end</div>
                <div className="page-section-team-item-text">Pauline a plusieurs cordes à son arc : de la photographie, vidéo, et du graphisme... ces trois domaines lui permet d’être polyvalente dans son travail et dans la création de My Dress’Up ! </div>
              </div>
            </div>
          </div>


        <HomeFooter />

        </div>
      </div>
    )
  }
}
