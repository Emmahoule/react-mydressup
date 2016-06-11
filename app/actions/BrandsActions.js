export const FETCH_BRANDS_REQUEST = 'FETCH_BRANDS_REQUEST'
export const FETCH_BRANDS_SUCCESS = 'FETCH_BRANDS_SUCCESS'
export const FETCH_BRANDS_FAILURE = 'FETCH_BRANDS_FAILURE'

import { CALL_API } from '../middleware/api'
import { config } from '../config.js'

export function fetchBrands() {
  return {
    [CALL_API]: {
      endpoint: '/api/v1/brands/',
      authenticated: true,
      types: [FETCH_BRANDS_REQUEST, FETCH_BRANDS_SUCCESS, FETCH_BRANDS_FAILURE]
    }
  }
}