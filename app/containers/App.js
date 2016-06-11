import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { loginUser } from '../actions/LoginActions.js'
import NavTop from '../components/NavTop'
import NavLeft from '../components/NavLeft'

export class App extends Component {
  constructor(props) {
    super(props);
    if (!props.isAuthenticated) {
      props.history.push('/');
    }
  }
  componentDidMount() {
    var tl = new TimelineLite();    
    tl.set(".app", { autoAlpha: 0});
    tl.fromTo(".app-entry", 1, {opacity:0}, {opacity:1, ease:Expo.easeOut});
    tl.set(".app", { autoAlpha: 1});
    tl.fromTo(".app-entry-text", 3, {opacity:0, y:-50}, {opacity:1, y:0, ease:Expo.easeOut}, "-=0.75");
    tl.to(".app-entry-text",0.75, {autoAlpha: 0, ease:Expo.easeOut});
    tl.to(".app-entry", 0.75, {backgroundColor: "#5d4657", ease:Expo.easeOut});
    tl.to(".app-entry", 0.75, {x: -(window.innerWidth)+120, ease:Expo.easeOut}, "-=0.75");
    tl.to(".navtop", 1, { autoAlpha:1, height: "55px", ease:Expo.easeOut});
    tl.to(".app-entry", 1, {top:55, ease:Expo.easeOut});
    tl.to(".app-entry", 1, {autoAlpha: 0, ease:Expo.easeOut}, "-=1.5");
  }
  render() {
    const { dispatch, isAuthenticated, errorMessage, history } = this.props
    let username = localStorage.getItem('username') || null
    let img = localStorage.getItem('img') || null
    return (
      <div>
      {isAuthenticated &&
        <div>
          <div className="app-entry">
            <p className="app-entry-text">Bonjour {username} !</p>
          </div>
          <div className="app">
            <NavTop
              isAuthenticated={isAuthenticated}
              errorMessage={errorMessage}
              dispatch={dispatch}
              history={history}
            />
            <NavLeft />
            <div className="app-container">
              {this.props.children}
            </div>
          </div>
        </div>
      }
      </div>
    )
  }
}

App.propTypes = {
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

export default connect(mapStateToProps)(App)