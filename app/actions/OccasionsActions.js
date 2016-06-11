export const FETCH_OCCASIONS_REQUEST = 'FETCH_OCCASIONS_REQUEST'
export const FETCH_OCCASIONS_SUCCESS = 'FETCH_OCCASIONS_SUCCESS'
export const FETCH_OCCASIONS_FAILURE = 'FETCH_OCCASIONS_FAILURE'

export const FETCH_OCCASIONS_USER_REQUEST = 'FETCH_OCCASIONS_USER_REQUEST'
export const FETCH_OCCASIONS_USER_SUCCESS = 'FETCH_OCCASIONS_USER_SUCCESS'
export const FETCH_OCCASIONS_USER_FAILURE = 'FETCH_OCCASIONS_USER_FAILURE'

import { CALL_API } from '../middleware/api'
import { config } from '../config.js'

export function fetchOccasions() {
  return {
    [CALL_API]: {
      endpoint: '/api/v1/occasion/',
      authenticated: true,
      types: [FETCH_OCCASIONS_REQUEST, FETCH_OCCASIONS_SUCCESS, FETCH_OCCASIONS_FAILURE]
    }
  }
}