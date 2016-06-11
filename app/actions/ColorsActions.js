export const FETCH_COLORS_REQUEST = 'FETCH_COLORS_REQUEST'
export const FETCH_COLORS_SUCCESS = 'FETCH_COLORS_SUCCESS'
export const FETCH_COLORS_FAILURE = 'FETCH_COLORS_FAILURE'

import { CALL_API } from '../middleware/api'
import { config } from '../config.js'

export function fetchColors() {
  return {
    [CALL_API]: {
      endpoint: '/api/v1/colors/',
      authenticated: true,
      types: [FETCH_COLORS_REQUEST, FETCH_COLORS_SUCCESS, FETCH_COLORS_FAILURE]
    }
  }
}