export const FETCH_METEO_REQUEST = 'FETCH_METEO_REQUEST'
export const FETCH_METEO_SUCCESS = 'FETCH_METEO_SUCCESS'
export const FETCH_METEO_FAILURE = 'FETCH_METEO_FAILURE'

import { CALL_EXTERN_API } from '../middleware/externApi'

export function fetchMeteo() {
  return {
    [CALL_EXTERN_API]: {
      endpoint: 'http://api.openweathermap.org/data/2.5/forecast/daily?id=2996944&lang=fr&units=metric&cnt=1&APPID=2728b4fb376466466a56c19b9363ddd3',
      types: [FETCH_METEO_REQUEST, FETCH_METEO_SUCCESS, FETCH_METEO_FAILURE]
    }
  }
}


