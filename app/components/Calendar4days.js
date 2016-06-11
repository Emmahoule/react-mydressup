import React, { Component, PropTypes } from 'react'
import { Link } from "react-router";

export default class Calendar4days extends Component {
  render() {
    return (
      <div className="calendar-4days">
     	
     	<div className="calendar-4days-block">
     		<div className="calendar-4days-block-top">
     			<div className="calendar-4days-block-top-day">
     				Vendredi 4
     			</div>
     			<div className="calendar-4days-block-top-meteo wi wi-owm-503">
     			</div>
     		</div>
     		<div className="calendar-4days-block-bottom">
     			<Link to="/app/outfits/4" className="calendar-4days-block-bottom-outfit">
     				<img src="/html/src/img/tenue_test.png"/>
     			</Link>
     		</div>
     	</div>

     	<div className="calendar-4days-block">
     		<div className="calendar-4days-block-top">
     			<div className="calendar-4days-block-top-day">
     				Samedi 5
     			</div>
     			<div className="calendar-4days-block-top-meteo wi wi-owm-511">
     			</div>
     		</div>
     		<div className="calendar-4days-block-bottom">
     			<div className="calendar-4days-block-bottom-add-outfit">
	     		    <Link to="/app/calendar/chose-outfit/" className="calendar-4days-block-bottom-add">
	     			<span className="calendar-4days-block-bottom-add-icn">+</span><span className="calendar-4days-block-bottom-add-text">Ajouter une tenue</span>
	     			</Link>
     			</div>
     		</div>
     	</div>

     	<div className="calendar-4days-block">
     		<div className="calendar-4days-block-top">
     			<div className="calendar-4days-block-top-day">
     				Dimanche 6
     			</div>
     			<div className="calendar-4days-block-top-meteo wi wi-owm-521">
     			</div>
     		</div>
     		<div className="calendar-4days-block-bottom">
     			<Link to="/app/outfits/4" className="calendar-4days-block-bottom-outfit">
     				<img src="/html/src/img/tenue_test.png"/>
     			</Link>
     		</div>
     	</div>

     	<div className="calendar-4days-block">
     		<div className="calendar-4days-block-top">
     			<div className="calendar-4days-block-top-day">
     				Lundi 7
     			</div>
     			<div className="calendar-4days-block-top-meteo wi wi-owm-601">
     			</div>
     		</div>
     		<div className="calendar-4days-block-bottom">
     			<Link to="/app/outfits/4" className="calendar-4days-block-bottom-outfit">
     				<img src="/html/src/img/tenue_test.png"/>
     			</Link>
     		</div>
     	</div>

      </div>
    )
  }

}
