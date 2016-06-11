import React, { Component, PropTypes } from 'react'
import { Link } from "react-router";

export default class CalendarWeek extends Component {
	deleteOutfit(){

	}
  render() {
    return (
      <div className="calendar-week">
          <div className="calendar-week-month">Mars 2016</div>
     	<div className="calendar-week-block">
     		<div className="calendar-week-block-top">
     			<div className="calendar-week-block-top-day">
     				Lundi 29
     			</div>
     			<div className="calendar-week-block-top-meteo wi wi-owm-601">
     			</div>
     		</div>
     		<div className="calendar-week-block-bottom">
     			<Link to="/app/outfits/4" className="calendar-week-block-bottom-outfit">
     				<img src="/html/src/img/tenue_test.png"/>
     			</Link>
     			<div className="calendar-week-block-bottom-delete">
	            <svg className="icon calendar-week-block-bottom-delete-icon" onClick={this.deleteOutfit.bind(this)}>
	                <use xlinkHref="#icon-delete"></use>
	            </svg>
	            <svg className="icon calendar-week-block-bottom-delete-icon">
	                <use xlinkHref="#icon-edit"></use>
	            </svg>
     		</div>
     		</div>
     	</div>

     	<div className="calendar-week-block">
     		<div className="calendar-week-block-top">
     			<div className="calendar-week-block-top-day">
     				Lundi 29
     			</div>
     			<div className="calendar-week-block-top-meteo wi wi-owm-601">
     			</div>
     		</div>
     		<div className="calendar-week-block-bottom">
     			<div className="calendar-week-block-bottom-add-outfit">
	     		    <Link to="/app/calendar/chose-outfit/" className="calendar-week-block-bottom-add">
	     			<span className="calendar-week-block-bottom-add-icn">+</span><span className="calendar-week-block-bottom-add-text">Ajouter une tenue</span>
	     			</Link>
     			</div>
     		</div>
     	</div>

     	<div className="calendar-week-block">
     		<div className="calendar-week-block-top">
     			<div className="calendar-week-block-top-day">
     				Lundi 29
     			</div>
     			<div className="calendar-week-block-top-meteo wi wi-owm-601">
     			</div>
     		</div>
     		<div className="calendar-week-block-bottom">
     			<Link to="/app/outfits/4" className="calendar-week-block-bottom-outfit">
     				<img src="/html/src/img/tenue_test.png"/>
     			</Link>
     			<div className="calendar-week-block-bottom-delete">
	            <svg className="icon calendar-week-block-bottom-delete-icon" onClick={this.deleteOutfit.bind(this)}>
	                <use xlinkHref="#icon-delete"></use>
	            </svg>
	            <svg className="icon calendar-week-block-bottom-delete-icon">
	                <use xlinkHref="#icon-edit"></use>
	            </svg>
     		</div>
     		</div>
     	</div>

     	<div className="calendar-week-block">
     		<div className="calendar-week-block-top">
     			<div className="calendar-week-block-top-day">
     				Lundi 29
     			</div>
     			<div className="calendar-week-block-top-meteo wi wi-owm-601">
     			</div>
     		</div>
     		<div className="calendar-week-block-bottom">
     			<Link to="/app/outfits/4" className="calendar-week-block-bottom-outfit">
     				<img src="/html/src/img/tenue_test.png"/>
     			</Link>
     			<div className="calendar-week-block-bottom-delete">
	            <svg className="icon calendar-week-block-bottom-delete-icon" onClick={this.deleteOutfit.bind(this)}>
	                <use xlinkHref="#icon-delete"></use>
	            </svg>
	            <svg className="icon calendar-week-block-bottom-delete-icon">
	                <use xlinkHref="#icon-edit"></use>
	            </svg>
     		</div>
     		</div>
     	</div>

     	<div className="calendar-week-block">
     		<div className="calendar-week-block-top">
     			<div className="calendar-week-block-top-day">
     				Lundi 29
     			</div>
     			<div className="calendar-week-block-top-meteo wi wi-owm-601">
     			</div>
     		</div>
     		<div className="calendar-week-block-bottom">
     			<Link to="/app/outfits/4" className="calendar-week-block-bottom-outfit">
     				<img src="/html/src/img/tenue_test.png"/>
     			</Link>
     			<div className="calendar-week-block-bottom-delete">
	            <svg className="icon calendar-week-block-bottom-delete-icon" onClick={this.deleteOutfit.bind(this)}>
	                <use xlinkHref="#icon-delete"></use>
	            </svg>
	            <svg className="icon calendar-week-block-bottom-delete-icon">
	                <use xlinkHref="#icon-edit"></use>
	            </svg>
     		</div>
     		</div>
     	</div>

     	<div className="calendar-week-block">
     		<div className="calendar-week-block-top">
     			<div className="calendar-week-block-top-day">
     				Lundi 29
     			</div>
     			<div className="calendar-week-block-top-meteo wi wi-owm-601">
     			</div>
     		</div>
     		<div className="calendar-week-block-bottom">
     			<Link to="/app/outfits/4" className="calendar-week-block-bottom-outfit">
     				<img src="/html/src/img/tenue_test.png"/>
     			</Link>
     			<div className="calendar-week-block-bottom-delete">
	            <svg className="icon calendar-week-block-bottom-delete-icon" onClick={this.deleteOutfit.bind(this)}>
	                <use xlinkHref="#icon-delete"></use>
	            </svg>
	            <svg className="icon calendar-week-block-bottom-delete-icon">
	                <use xlinkHref="#icon-edit"></use>
	            </svg>
     		</div>
     		</div>
     	</div>

     	<div className="calendar-week-block">
     		<div className="calendar-week-block-top">
     			<div className="calendar-week-block-top-day">
     				Lundi 29
     			</div>
     			<div className="calendar-week-block-top-meteo wi wi-owm-601">
     			</div>
     		</div>
     		<div className="calendar-week-block-bottom">
     			<Link to="/app/outfits/4" className="calendar-week-block-bottom-outfit">
     				<img src="/html/src/img/tenue_test.png"/>
     			</Link>
     			<div className="calendar-week-block-bottom-delete">
	            <svg className="icon calendar-week-block-bottom-delete-icon" onClick={this.deleteOutfit.bind(this)}>
	                <use xlinkHref="#icon-delete"></use>
	            </svg>
	            <svg className="icon calendar-week-block-bottom-delete-icon">
	                <use xlinkHref="#icon-edit"></use>
	            </svg>
     		</div>
     		</div>
     	</div>

      </div>
    )
  }

}
