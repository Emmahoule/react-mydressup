import React, { Component, PropTypes } from 'react'
import CalendarWeek from '../../components/CalendarWeek';

class Calendar extends Component {
  render() {
    return (
      <div>
      	<div className="app-calendar">
      		<div className="app-block app-block-calendar">
        		<CalendarWeek /> 
        	</div>
        </div>
      </div>
    )
  }
}

export default (Calendar)
