export const FETCH_WEATHER_REQUEST = 'FETCH_WEATHER_REQUEST'
export const FETCH_WEATHER_SUCCESS = 'FETCH_WEATHER_SUCCESS'
export const FETCH_WEATHER_FAILURE = 'FETCH_WEATHER_FAILURE'

export const FETCH_WEATHER_USER_REQUEST = 'FETCH_WEATHER_USER_REQUEST'
export const FETCH_WEATHER_USER_SUCCESS = 'FETCH_WEATHER_USER_SUCCESS'
export const FETCH_WEATHER_USER_FAILURE = 'FETCH_WEATHER_USER_FAILURE'

import { CALL_API } from '../middleware/api'
import { config } from '../config.js'

export function fetchWeathers() {
  return {
    [CALL_API]: {
      endpoint: '/api/v1/weather/',
      authenticated: true,
      types: [FETCH_WEATHER_REQUEST, FETCH_WEATHER_SUCCESS, FETCH_WEATHER_FAILURE]
    }
  }
}