import React, { Component, PropTypes } from 'react'
import { Link } from "react-router";
import ReactDOM from 'react-dom';

export default class MeteoBlock extends Component {

	componentWillMount(){
		this.props.fetchMeteo();
  }

  render() {
  const {fetchMeteo, dataMeteo} = this.props;
  let username = localStorage.getItem('username') || null
    return (
      <div className="meteo-block">
        <div className="meteo-block-hello">Bonjour {username} !</div>
        {dataMeteo &&
        	<div>
        		<div className={"meteo-block-icon wi wi-owm-"+dataMeteo.list[0].weather[0].id}></div>
		       	<div className="meteo-block-temp">{Math.floor(dataMeteo.list[0].temp.day)}°C</div>
		       	<div className="meteo-block-weather">Aujourd'hui, <span className="c-main">{dataMeteo.list[0].weather[0].description}</span></div>
		        <p className="meteo-block-txt">Ciel sans nuage, grand soleil et température de saison. Pas la moindre goutte de pluie à l’horizon, l’occasion de mettre une petite tenue légère et agréable ! </p>
	        </div>
		}
      </div>
    )
  }
}