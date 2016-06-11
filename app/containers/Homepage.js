import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { loginUser } from '../actions/LoginActions.js'
import HomeNavbar from '../components/HomeNavbar'
import HomeFooter from '../components/HomeFooter'
import { Link } from "react-router";
import * as ScrollToPlugin from "gsap/src/minified/plugins/ScrollToPlugin.min";

class Homepage extends Component {
  constructor(){
    super();
    this.state = {
      marginTop: 0
    }
    let timer;
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll.bind(this));

    var tl = new TimelineLite();    
    tl.set([".homepage-section-title-bg", ".home-header"], {autoAlpha:0});
    tl.set(".homepage-section-inner", {autoAlpha:0});
    tl.set(".homepage-section-title-bg", {scale:0.85});
    tl.to(".home-header", 2, {autoAlpha:1, ease:Power3.easeInOut}, "-=2");
    tl.to(".homepage-section-title-bg", 5, {autoAlpha:1,  scale:1, ease:Power3.easeInOut, onComplete:this.animParallax}, "-=3");
    tl.to(".homepage-section-inner", 3, {autoAlpha:1, ease:Power3.easeInOut}, "-=3");

  }


  animParallax(){
    var backLayer = document.getElementsByClassName('homepage-section-title-bg');
    var frontLayer = document.getElementsByClassName('homepage-section-title-title');
  
    document.body.onmousemove = function(event){
      var bMouseHor = event.pageX / 20;
      var bMouseVer = event.pageY / 20;
      TweenLite.to(backLayer, 1, { css:{x:'+' + bMouseHor, y:'+' + bMouseVer}, overwrite:true } );
      var fMouseHor = event.pageX / 70;
      var fMouseVer = event.pageY / 70;
      TweenLite.to(frontLayer, 1, { css:{x:'+' + fMouseHor,  y:'+' + fMouseVer}, overwrite:true } );
    };
  }

  animateNav(){ 
    var tl = new TimelineLite(); 
    tl.fromTo(".home-header", 1.5, {height:"100"}, {height:"0", borderBottom:"0px", ease:Expo.easeOut});
    tl.fromTo(".home-header", 1.5, {height:"0", position:"fixed", overflow: "hidden", borderBottom:"1px solid #F0F0F0", backgroundColor:"#FFF"},{height:"60", ease:Expo.easeOut}, "+=1.5");
    tl.to(".home-header-logo", 1.5, {height:"40px", y: 5, ease:Expo.easeOut}, "-=2");
    tl.to(".home-navbar-item", 1.5, {lineHeight:"60px", ease:Expo.easeOut}, "-=2");
  }
  animateSectionInfos(){
    var tl = new TimelineLite(); 
    tl.fromTo(".homepage-section-infos", 2, {backgroundColor: "#5d4657", height: "100vh"}, {backgroundColor: "#da4669", height: "75vh", ease:Expo.easeOut}, 1);     

    tl.staggerFrom(".homepage-section-infos-item", 4, {y: 60, autoAlpha: 0, ease:Expo.easeOut},0.2, 1.5);
  }

  animateSectionVideo(){
    TweenLite.to(".homepage-section-video", 1.5, {y: 0, autoAlpha: 1, ease:Expo.easeOut});      
  }

  animateSectionSocial(){
    var tl = new TimelineLite(); 
    tl.staggerTo(".homepage-section-social-networks-link", 1, {y: 0, autoAlpha: 1, ease:Quart.easeInOut},0.2);
  }


  render() {
    const { dispatch, isAuthenticated, history } = this.props
    return (
      <div className={"homepage "+(this.state.marginTop==-100 ? "scrollable" : "")} >
        <div style={{marginTop: this.state.marginTop+"vh"}} className="homepage-container">
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
                <h1 className="homepage-section-title-title"><img className="homepage-section-title-title-img" src="/html/src/img/illustration_home.png"/></h1>
                <div className="homepage-section-title-baseline">Trouver la bonne tenue avec My Dress'Up, en un coup de main ! </div>
                <div className="btn1 homepage-section-title-btn" onClick={this.onClickDiscover.bind(this)}>Découvrir My Dress'up</div>
              </div>
              <div className="arrow-to-bottom" onClick={this.onClickDiscover.bind(this)}></div>
            </div>
          </div>

          <div className="homepage-section homepage-section-infos">
            <div className="homepage-section-wrapper">
            <div className="homepage-section-infos-title">Sublimer, partager vos plus belles tenues de n’importe où et à n’importe quel moment !</div>
              <div className="homepage-section-infos-item">
                <div className="homepage-section-infos-item-icn">
                  <svg className="icon icon-clock">
                    <use xlinkHref="#icon-clock"></use>
                  </svg>
                </div>
                <div className="homepage-section-infos-item-title">Gagnez du temps</div>
                <div className="homepage-section-infos-item-text">
                    Créez, visualisez et organisez vos tenues pour la semaine, les vacances, ou les événements importants 
                </div>
              </div>
              <div className="homepage-section-infos-item">
                <div className="homepage-section-infos-item-icn">
                  <svg className="icon icon-eye">
                    <use xlinkHref="#icon-eye"></use>
                  </svg>
                </div>
                <div className="homepage-section-infos-item-title">Trouvez des idées</div>
                <div className="homepage-section-infos-item-text">
                  Plus de problème d’inspiration, 
                  nous vous proposons de nouvelles 
                  associations de vêtements 
                  pour vous simplifier la vie !
                </div>
              </div>
              <div className="homepage-section-infos-item">
                <div className="homepage-section-infos-item-icn">
                  <svg className="icon icon-rain">
                    <use xlinkHref="#icon-rain"></use>
                  </svg>
                </div>
                <div className="homepage-section-infos-item-title">N'attrapez plus froid</div>
                <div className="homepage-section-infos-item-text">
                  Découvez nos suggestions 
                  en fonction de la météo.
                  Ne vous laissez plus avoir par le temps !
                </div>
              </div>
              <div className="homepage-section-infos-item">
                <div className="homepage-section-infos-item-icn">
                  <svg className="icon icon-share">
                    <use xlinkHref="#icon-share"></use>
                  </svg>
                </div>
                <div className="homepage-section-infos-item-title">Partagez avec vos amis</div>
                <div className="homepage-section-infos-item-text">
                  Partagez vos tenues sur Twitter, Facebook et Instagram 
                  pour inspirer vos ami(e)s ou 
                  simplement demander l’avis 
                  de votre entourage.
                </div>
              </div>
            </div>
          </div>

          <div className="homepage-section homepage-section-video">
            <div className="homepage-section-wrapper">
                <div className="homepage-section-video-left">
                  <video controls src="video.ogv" width="100%" className="homepage-section-video-video">Ici la description alternative</video>
                </div>
                <div className="homepage-section-video-right">
                  <div className="homepage-section-video-title">My Dress'Up en vidéo</div><br/>
                  My Dress Up est une application web d’un dressing virtuel personnel permettant d’aider l’utilisateur à s’habiller le matin. Celui-ci pourra gérer son dressing en ajoutant ses vêtements par la fonction d’upload ou par URL et en les classant en fonction des marques, catégories, styles… il pourra aussi créer des tenues et les sauvegarder.
                  Il se verra aussi suggérer des tenues en fonction de la météo, de sa morphologie ou encore, il pourra prévoir des tenues sur son calendrier pour les jours à venir. 
                </div>
            </div>
          </div>

        <HomeFooter />

        </div>
      </div>
    )
  }
}

Homepage.propTypes = {
  dispatch: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool.isRequired
}

function mapStateToProps(state) {

  const { auth } = state
  const { isAuthenticated } = auth

  return {
    isAuthenticated
  }
}

export default connect(mapStateToProps)(Homepage)