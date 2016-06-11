export const FETCH_CATEGORIES_REQUEST = 'FETCH_CATEGORIES_REQUEST'
export const FETCH_CATEGORIES_SUCCESS = 'FETCH_CATEGORIES_SUCCESS'
export const FETCH_CATEGORIES_FAILURE = 'FETCH_CATEGORIES_FAILURE'

export const FETCH_CATEGORIES_USER_REQUEST = 'FETCH_CATEGORIES_USER_REQUEST'
export const FETCH_CATEGORIES_USER_SUCCESS = 'FETCH_CATEGORIES_USER_SUCCESS'
export const FETCH_CATEGORIES_USER_FAILURE = 'FETCH_CATEGORIES_USER_FAILURE'


import { CALL_API } from '../middleware/api'
import { config } from '../config.js'

export function fetchCategories() {
  return {
    [CALL_API]: {
      endpoint: '/api/v1/category/',
      authenticated: true,
      types: [FETCH_CATEGORIES_REQUEST, FETCH_CATEGORIES_SUCCESS, FETCH_CATEGORIES_FAILURE]
    }
  }
}

export function fetchCategoriesByUser() {
  return {
    [CALL_API]: {
      endpoint: '/api/v1/categorybyuser/',
      authenticated: true,
      types: [FETCH_CATEGORIES_USER_REQUEST, FETCH_CATEGORIES_USER_SUCCESS, FETCH_CATEGORIES_USER_FAILURE]
    }
  }
}