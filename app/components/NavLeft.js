import icnCalendar from '../src/svg/calendar.svg';

import React, { Component, PropTypes } from 'react'
import { Link } from "react-router";

export default class NavLeft extends Component {
  render() {
    return (
      <nav className='navleft'>
        <div className="navleft-wrapper">
          <div className="navleft-block">
            <div className="navleft-block-item">
              <Link activeClassName="active" className="navleft-block-item-link" to="/app/home">
                <div className="navleft-block-item-link-inner">
                  <svg className="icon icon-calendar navleft-block-item-icon">
                    <use xlinkHref="#icon-home"></use>
                  </svg>
                  Accueil
                </div>
              </Link>
            </div>
            <div className="navleft-block-item">
              <Link activeClassName="active" className="navleft-block-item-link" to="/app/items">
                <div className="navleft-block-item-link-inner">
                  <svg className="icon icon-item navleft-block-item-icon navleft-block-item-icon-item">
                    <use xlinkHref="#icon-hanger"></use>
                  </svg>
                  Vêtements
                </div>
              </Link>
            </div>
            <div className="navleft-block-item">
              <Link activeClassName="active" className="navleft-block-item-link" to="/app/outfits">
                <div className="navleft-block-item-link-inner">
                  <svg className="icon icon-calendar navleft-block-item-icon navleft-block-item-icon-outfit">
                    <use xlinkHref="#icon-outfit"></use>
                  </svg>
                  Tenues
                </div>
              </Link>
            </div>
            <div className="navleft-block-item">
              <Link activeClassName="active" className="navleft-block-item-link" to="/app/lookbooks">
                <div className="navleft-block-item-link-inner">
                  <svg className="icon icon-lookbook navleft-block-item-icon navleft-block-item-icon-lookbook">
                    <use xlinkHref="#icon-lookbook"></use>
                  </svg>
                  Lookbook
                </div>
              </Link>
            </div>
            <div className="navleft-block-item">
              <Link activeClassName="active" className="navleft-block-item-link" to="/app/calendar">
                <div className="navleft-block-item-link-inner">
                  <svg className="icon icon-calendar navleft-block-item-icon">
                    <use xlinkHref="#icon-calendar"></use>
                  </svg>
                  Calendrier
                </div>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    )
  }

}