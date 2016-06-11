import React, { Component, PropTypes } from 'react'
import MeteoBlock from '../../components/MeteoBlock';
import SuggestBlock from '../../components/SuggestBlock';
import Calendar4days from '../../components/Calendar4days';
import { connect } from 'react-redux'
import { fetchMeteo } from '../../actions/MeteoActions.js';

class HomeApp extends Component {
  getDate(){
    var m_names = new Array("janvier", "février", "mars", 
    "avril", "mai", "juin", "juillet", "août", "septembre", 
    "octobre", "novembre", "décembre");

    var d = new Date();
    var curr_date = d.getDate();
    var curr_month = d.getMonth();
    var curr_year = d.getFullYear();
    var date = (curr_date + " " + m_names[curr_month] 
    + " " + curr_year);
    return date;
  }
  getHour(){
    var date = new Date;
    var minutes = date.getMinutes();
    var hour = date.getHours();
    var dateHour = (hour+":"+minutes);
    return dateHour;
  }
  render() {
    const {dispatch, dataMeteo} = this.props;
    return (
      <div className="app-home">
        <div className="app-home-block app-home-block-meteo app-block">
          <div className="app-home-block-title">Météo</div>
          <div className="app-home-block-title-right">{this.getDate()}<span className="app-home-block-title-right-hours">{this.getHour()}</span></div>
        	<MeteoBlock 
            dataMeteo={dataMeteo}
            fetchMeteo={() => dispatch(fetchMeteo())}
          />
        </div>
        <div className="app-home-block app-home-block-suggest app-block">
          <div className="app-home-block-title">Suggestion du jour</div>
        	<SuggestBlock />
        </div>
        <div className="app-home-block app-home-block-calendar app-block">
          <div className="app-home-block-title">Calendrier</div>
          <Calendar4days />
        </div>        
      </div>
    )
  }
}

function mapStateToProps(state) {

  const { fetchMeteo } = state
  const { dataMeteo } = fetchMeteo

  return {
    dataMeteo 
  }
}

export default connect(mapStateToProps)(HomeApp)
