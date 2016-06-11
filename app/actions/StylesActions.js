export const FETCH_STYLES_REQUEST = 'FETCH_STYLES_REQUEST'
export const FETCH_STYLES_SUCCESS = 'FETCH_STYLES_SUCCESS'
export const FETCH_STYLES_FAILURE = 'FETCH_STYLES_FAILURE'

import { CALL_API } from '../middleware/api'
import { config } from '../config.js'

export function fetchStyles() {
  return {
    [CALL_API]: {
      endpoint: '/api/v1/style/',
      authenticated: true,
      types: [FETCH_STYLES_REQUEST, FETCH_STYLES_SUCCESS, FETCH_STYLES_FAILURE]
    }
  }
}