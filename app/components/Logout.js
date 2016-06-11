
import React, { Component, PropTypes } from 'react'

export default class Logout extends Component {

  render() {
    const { onLogoutClick } = this.props

    return (
    	<div className="block-button-logout">
          <svg onClick={() => onLogoutClick()} className="icon icon-logout">
            <use xlinkHref="#icon-logout"></use>
          </svg>
	    </div>
    )
  }

}

Logout.propTypes = {
  onLogoutClick: PropTypes.func.isRequired
}