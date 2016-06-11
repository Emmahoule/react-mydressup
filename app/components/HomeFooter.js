import React, { Component, PropTypes } from 'react'
import { Link } from "react-router";

export default class HomeFooter extends Component {

  render() {
    return (
      <footer className="home-footer">
        <div className="homepage-section homepage-section-social">
            <div className="homepage-section-wrapper">
              <div className="homepage-section-social-flower">
                <img className="homepage-section-social-flower-img" src="/html/src/img/flower.png"/>
              </div>
                <div className="homepage-section-social-networks">
                  <Link className="homepage-section-social-networks-link" to='#'> 
                    <svg className="icon icon-facebook">
                      <use xlinkHref="#icon-facebook"></use>
                    </svg>
                  </Link>
                  <Link className="homepage-section-social-networks-link" to='#'> 
                    <svg className="icon icon-instagram">
                      <use xlinkHref="#icon-instagram"></use>
                    </svg>
                  </Link>
                  <Link className="homepage-section-social-networks-link" to='#'> 
                    <svg className="icon icon-twitter">
                      <use xlinkHref="#icon-twitter"></use>
                    </svg>
                  </Link>
                  <Link className="homepage-section-social-networks-link" to='#'> 
                    <svg className="icon icon-pinterest">
                      <use xlinkHref="#icon-pinterest"></use>
                    </svg>
                  </Link>
                  <Link className="homepage-section-social-networks-link" to='#'> 
                    <svg className="icon icon-youtube">
                      <use xlinkHref="#icon-youtube"></use>
                    </svg>
                  </Link>
                </div>
            </div>
          </div>

          <div className="homepage-section homepage-footer">
            <div className="homepage-footer-wrapper">
                <div><Link to="#">Mentions légales</Link> - MyDressUp © All rights reserved 2016.</div>
            </div>
          </div>
      </footer>
    )
  }

}
