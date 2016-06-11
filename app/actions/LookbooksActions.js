export const FETCH_LOOKBOOKS_REQUEST = 'FETCH_LOOKBOOKS_REQUEST'
export const FETCH_LOOKBOOKS_SUCCESS = 'FETCH_LOOKBOOKS_SUCCESS'
export const FETCH_LOOKBOOKS_FAILURE = 'FETCH_LOOKBOOKS_FAILURE'

export const FETCH_LOOKBOOK_REQUEST = 'FETCH_LOOKBOOK_REQUEST'
export const FETCH_LOOKBOOK_SUCCESS = 'FETCH_LOOKBOOK_SUCCESS'
export const FETCH_LOOKBOOK_FAILURE = 'FETCH_LOOKBOOK_FAILURE'

export const ADD_LOOKBOOK_REQUEST = 'ADD_LOOKBOOK_REQUEST'
export const ADD_LOOKBOOK_SUCCESS = 'ADD_LOOKBOOK_SUCCESS'
export const ADD_LOOKBOOK_FAILURE = 'ADD_LOOKBOOK_FAILURE'

export const EDIT_LOOKBOOK_REQUEST = 'EDIT_LOOKBOOK_REQUEST'
export const EDIT_LOOKBOOK_SUCCESS = 'EDIT_LOOKBOOK_SUCCESS'
export const EDIT_LOOKBOOK_FAILURE = 'EDIT_LOOKBOOK_FAILURE'

export const DELETE_LOOKBOOK_REQUEST = 'DELETE_LOOKBOOK_REQUEST'
export const DELETE_LOOKBOOK_SUCCESS = 'DELETE_LOOKBOOK_SUCCESS'
export const DELETE_LOOKBOOK_FAILURE = 'DELETE_LOOKBOOK_FAILURE'

import { CALL_API } from '../middleware/api'
import { config } from '../config.js'
const API_URL = config.API_URL;

export function fetchLookbooks() {
  return {
    [CALL_API]: {
      endpoint: '/api/v1/lookbook/',
      authenticated: true,
      types: [FETCH_LOOKBOOKS_REQUEST, FETCH_LOOKBOOKS_SUCCESS, FETCH_LOOKBOOKS_FAILURE]
    }
  }
}

function requestFetchLookbook(idLookbook) {
  return {
    type: FETCH_LOOKBOOK_REQUEST,
    isFetching: true,
    isAuthenticated: false,
    idLookbook
  }
}

function receiveFetchLookbook(lookbook) {
  return {
    type: FETCH_LOOKBOOK_SUCCESS,
    isFetching: false,
    isAuthenticated: true,
    dataLookbook: lookbook
  }
}

function fetchLookbookError(message) {
  return {
    type: FETCH_LOOKBOOK_FAILURE,
    isFetching: false,
    isAuthenticated: false,
    message
  }
}

export function fetchLookbook(idLookbook, history) {
  let token = localStorage.getItem('id_token') || null

  let config = {
    method: 'POST',
    headers: {'Content-Type':'application/x-www-form-urlencoded', 'Authorization': `Bearer ${token}` },
    body: `id=${idLookbook}`
  }

  return dispatch => {
    dispatch(requestFetchLookbook(idLookbook))

    return fetch(API_URL+'/api/v1/lookbookdetail/', config)
      .then(response =>
        response.json().then(lookbook => ({ lookbook, response }))
            ).then(({ lookbook, response }) =>  {
        if (!response.ok) {
          dispatch(fetchLookbookError("L'lookbook n'a pas pu être récupéré."))
          return Promise.reject(lookbook)
        } else {
          dispatch(receiveFetchLookbook(lookbook))
        }
      }).catch(err => console.log("Error: ", err))
  }
}

function requestAddLookbook(lookbookDatas) {
  return {
    type: ADD_LOOKBOOK_REQUEST,
    isFetching: true,
    isAuthenticated: false,
    lookbookDatas
  }
}

function receiveAddLookbook(lookbook) {
  return {
    type: ADD_LOOKBOOK_SUCCESS,
    isFetching: false,
    isAuthenticated: true,
    id_lookbook: lookbook.id
  }
}

function addLookbookError(message) {
  return {
    type: ADD_LOOKBOOK_FAILURE,
    isFetching: false,
    isAuthenticated: false,
    message
  }
}

export function addLookbook(lookbookDatas) {
  let token = localStorage.getItem('id_token') || null

  if (lookbookDatas.image) {
    lookbookDatas.image = lookbookDatas.image.replace(";", "-");
  }

  let config = {
    method: 'POST',
    headers: {'Content-Type':'application/x-www-form-urlencoded', 'Authorization': `Bearer ${token}` },
    body: JSON.stringify(lookbookDatas)
  }

  return dispatch => {
    dispatch(requestAddLookbook(lookbookDatas))

    return fetch(API_URL+'/api/v1/lookbook/', config)
      .then(response =>
        response.json().then(lookbook => ({ lookbook, response }))
            ).then(({ lookbook, response }) =>  {
        if (!response.ok) {
          dispatch(addLookbookError("L'lookbook n'a pas pu être créé."))
          return Promise.reject(lookbook)
        } else {
          dispatch(receiveAddLookbook(lookbook))
        }
      }).catch(err => console.log("Error: ", err))
  }
}

function requestEditLookbook(lookbookDatas) {
  return {
    type: EDIT_LOOKBOOK_REQUEST,
    isFetching: true,
    isAuthenticated: false,
    lookbookDatas
  }
}

function receiveEditLookbook(lookbook) {
  return {
    type: EDIT_LOOKBOOK_SUCCESS,
    isFetching: false,
    isAuthenticated: true,
    id_lookbook: lookbook.id
  }
}

function editLookbookError(message) {
  return {
    type: EDIT_LOOKBOOK_FAILURE,
    isFetching: false,
    isAuthenticated: false,
    message
  }
}

export function editLookbook(lookbookDatas, history) {
  let token = localStorage.getItem('id_token') || null

  if (lookbookDatas.image) {
    lookbookDatas.image = lookbookDatas.image.replace(";", "-");
  }
  
  let config = {
    method: 'POST',
    headers: {'Content-Type':'application/x-www-form-urlencoded', 'Authorization': `Bearer ${token}` },
    body: `id=${lookbookDatas.id}&image=${lookbookDatas.image}&name=${lookbookDatas.title}&description=${lookbookDatas.description}&category=${lookbookDatas.category}&brand=${lookbookDatas.brand}&color=${lookbookDatas.color}&style=${lookbookDatas.style}&laundryGuide=${lookbookDatas.laundryGuide}`
  }

  return dispatch => {
    dispatch(requestEditLookbook(lookbookDatas))

    return fetch(API_URL+'/api/v1/lookbookupdate/', config)
      .then(response =>
        response.json().then(lookbook => ({ lookbook, response }))
            ).then(({ lookbook, response }) =>  {
        if (!response.ok) {
          dispatch(editLookbookError("L'lookbook n'a pas pu être modifié."))
          return Promise.reject(lookbook)
        } else {
          dispatch(receiveEditLookbook(lookbook))
          history.push('app/lookbooks/'+lookbookDatas.id);
        }
      }).catch(err => console.log("Error: ", err))
  }
}

function requestDeleteLookbook(lookbookDatas) {
  return {
    type: DELETE_LOOKBOOK_REQUEST,
    isFetching: true,
    isAuthenticated: false,
    lookbookDatas
  }
}

function receiveDeleteLookbook(lookbook) {
  return {
    type: DELETE_LOOKBOOK_SUCCESS,
    isFetching: false,
    isAuthenticated: true,
    id_lookbook: lookbook.id
  }
}

function deleteLookbookError(message) {
  return {
    type: DELETE_LOOKBOOK_FAILURE,
    isFetching: false,
    isAuthenticated: false,
    message
  }
}

export function deleteLookbook(lookbookId, history) {
  let token = localStorage.getItem('id_token') || null

  let config = {
    method: 'POST',
    headers: {'Content-Type':'application/x-www-form-urlencoded', 'Authorization': `Bearer ${token}` },
    body: `id=${lookbookId}`
  }

  return dispatch => {
    dispatch(requestDeleteLookbook(lookbookId))

    return fetch(API_URL+'/api/v1/lookbookdelete/', config)
      .then(response =>
        response.json().then(lookbook => ({ lookbook, response }))
            ).then(({ lookbook, response }) =>  {
        if (!response.ok) {
          dispatch(deleteLookbookError("L'lookbook n'a pas pu être supprimé."))
          return Promise.reject(lookbook)
        } else {
          dispatch(receiveDeleteLookbook(lookbook))
          history.push('app/lookbooks/');
        }
      }).catch(err => console.log("Error: ", err))
  }
}








