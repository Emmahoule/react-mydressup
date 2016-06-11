export const FETCH_OUTFITS_REQUEST = 'FETCH_OUTFITS_REQUEST'
export const FETCH_OUTFITS_SUCCESS = 'FETCH_OUTFITS_SUCCESS'
export const FETCH_OUTFITS_FAILURE = 'FETCH_OUTFITS_FAILURE'

export const FETCH_OUTFIT_REQUEST = 'FETCH_OUTFIT_REQUEST'
export const FETCH_OUTFIT_SUCCESS = 'FETCH_OUTFIT_SUCCESS'
export const FETCH_OUTFIT_FAILURE = 'FETCH_OUTFIT_FAILURE'

export const ADD_OUTFIT_IMAGE_REQUEST = 'ADD_OUTFIT_IMAGE_REQUEST'
export const ADD_OUTFIT_IMAGE_SUCCESS = 'ADD_OUTFIT_IMAGE_SUCCESS'
export const ADD_OUTFIT_IMAGE_FAILURE = 'ADD_OUTFIT_IMAGE_FAILURE'

export const ADD_OUTFIT_INFOS_REQUEST = 'ADD_OUTFIT_INFOS_REQUEST'
export const ADD_OUTFIT_INFOS_SUCCESS = 'ADD_OUTFIT_INFOS_SUCCESS'
export const ADD_OUTFIT_INFOS_FAILURE = 'ADD_OUTFIT_INFOS_FAILURE'

export const EDIT_OUTFIT_REQUEST = 'EDIT_OUTFIT_REQUEST'
export const EDIT_OUTFIT_SUCCESS = 'EDIT_OUTFIT_SUCCESS'
export const EDIT_OUTFIT_FAILURE = 'EDIT_OUTFIT_FAILURE'

export const DELETE_OUTFIT_REQUEST = 'DELETE_OUTFIT_REQUEST'
export const DELETE_OUTFIT_SUCCESS = 'DELETE_OUTFIT_SUCCESS'
export const DELETE_OUTFIT_FAILURE = 'DELETE_OUTFIT_FAILURE'

import { CALL_API } from '../middleware/api'
import { config } from '../config.js'
const API_URL = config.API_URL;

export function fetchOutfits() {
  return {
    [CALL_API]: {
      endpoint: '/api/v1/outfit/',
      authenticated: true,
      types: [FETCH_OUTFITS_REQUEST, FETCH_OUTFITS_SUCCESS, FETCH_OUTFITS_FAILURE]
    }
  }
}

function requestFetchOutfit(idOutfit) {
  return {
    type: FETCH_OUTFIT_REQUEST,
    isFetching: true,
    isAuthenticated: false,
    idOutfit
  }
}

function receiveFetchOutfit(outfit) {
  return {
    type: FETCH_OUTFIT_SUCCESS,
    isFetching: false,
    isAuthenticated: true,
    dataOutfit: outfit
  }
}

function fetchOutfitError(message) {
  return {
    type: FETCH_OUTFIT_FAILURE,
    isFetching: false,
    isAuthenticated: false,
    message
  }
}

export function fetchOutfit(idOutfit, history) {
  let token = localStorage.getItem('id_token') || null

  let config = {
    method: 'POST',
    headers: {'Content-Type':'application/x-www-form-urlencoded', 'Authorization': `Bearer ${token}` },
    body: `id=${idOutfit}`
  }

  return dispatch => {
    dispatch(requestFetchOutfit(idOutfit))

    return fetch(API_URL+'/api/v1/outfitdetail/', config)
      .then(response =>
        response.json().then(outfit => ({ outfit, response }))
            ).then(({ outfit, response }) =>  {
        if (!response.ok) {
          dispatch(fetchOutfitError("L'outfit n'a pas pu être récupéré."))
          return Promise.reject(outfit)
        } else {
          dispatch(receiveFetchOutfit(outfit))
        }
      }).catch(err => console.log("Error: ", err))
  }
}

function requestAddOutfitInfos(outfitInfos) {
  return {
    type: ADD_OUTFIT_INFOS_REQUEST,
    isFetching: true,
    isAuthenticated: false,
    outfitInfos
  }
}

function receiveAddOutfitInfos(outfit) {
  return {
    type: ADD_OUTFIT_INFOS_SUCCESS,
    isFetching: false,
    isAuthenticated: true,
    id_outfit: outfit.id
  }
}

function addOutfitInfosError(message) {
  return {
    type: ADD_OUTFIT_INFOS_FAILURE,
    isFetching: false,
    isAuthenticated: false,
    message
  }
}

export function addOutfitInfos(outfitInfos, history) {
  let token = localStorage.getItem('id_token') || null

  if (outfitInfos.image) {
    outfitInfos.image = outfitInfos.image.replace(";", "-");
  }

  let config = {
    method: 'POST',
    headers: {'Content-Type':'application/x-www-form-urlencoded', 'Authorization': `Bearer ${token}` },
    body: JSON.stringify(outfitInfos)
  }

  return dispatch => {
    dispatch(requestAddOutfitInfos(outfitInfos))

    return fetch(API_URL+'/api/v1/outfitInfos/', config)
      .then(response =>
        response.json().then(outfit => ({ outfit, response }))
            ).then(({ outfit, response }) =>  {
        if (!response.ok) {
          dispatch(addOutfitInfosError("L'outfit n'a pas pu être créé."))
          return Promise.reject(outfit)
        } else {
          dispatch(receiveAddOutfitInfos(outfit))
          history.push('app/outfits/'+outfit.id);
        }
      }).catch(err => console.log("Error: ", err))
  }
}

function requestEditOutfit(outfitDatas) {
  return {
    type: EDIT_OUTFIT_REQUEST,
    isFetching: true,
    isAuthenticated: false,
    outfitDatas
  }
}

function receiveEditOutfit(outfit) {
  return {
    type: EDIT_OUTFIT_SUCCESS,
    isFetching: false,
    isAuthenticated: true,
    id_outfit: outfit.id
  }
}

function editOutfitError(message) {
  return {
    type: EDIT_OUTFIT_FAILURE,
    isFetching: false,
    isAuthenticated: false,
    message
  }
}

export function editOutfit(outfitDatas, history) {
  let token = localStorage.getItem('id_token') || null

  if (outfitDatas.image) {
    outfitDatas.image = outfitDatas.image.replace(";", "-");
  }
  
  let config = {
    method: 'POST',
    headers: {'Content-Type':'application/x-www-form-urlencoded', 'Authorization': `Bearer ${token}` },
    body: `id=${outfitDatas.id}&image=${outfitDatas.image}&name=${outfitDatas.title}&description=${outfitDatas.description}&category=${outfitDatas.category}&brand=${outfitDatas.brand}&color=${outfitDatas.color}&style=${outfitDatas.style}&laundryGuide=${outfitDatas.laundryGuide}`
  }

  return dispatch => {
    dispatch(requestEditOutfit(outfitDatas))

    return fetch(API_URL+'/api/v1/outfitupdate/', config)
      .then(response =>
        response.json().then(outfit => ({ outfit, response }))
            ).then(({ outfit, response }) =>  {
        if (!response.ok) {
          dispatch(editOutfitError("L'outfit n'a pas pu être modifié."))
          return Promise.reject(outfit)
        } else {
          dispatch(receiveEditOutfit(outfit))
          history.push('app/outfits/'+outfitDatas.id);
        }
      }).catch(err => console.log("Error: ", err))
  }
}

function requestDeleteOutfit(outfitDatas) {
  return {
    type: DELETE_OUTFIT_REQUEST,
    isFetching: true,
    isAuthenticated: false,
    outfitDatas
  }
}

function receiveDeleteOutfit(outfit) {
  return {
    type: DELETE_OUTFIT_SUCCESS,
    isFetching: false,
    isAuthenticated: true,
    id_outfit: outfit.id
  }
}

function deleteOutfitError(message) {
  return {
    type: DELETE_OUTFIT_FAILURE,
    isFetching: false,
    isAuthenticated: false,
    message
  }
}

export function deleteOutfit(outfitId, history) {
  let token = localStorage.getItem('id_token') || null

  let config = {
    method: 'POST',
    headers: {'Content-Type':'application/x-www-form-urlencoded', 'Authorization': `Bearer ${token}` },
    body: `id=${outfitId}`
  }

  return dispatch => {
    dispatch(requestDeleteOutfit(outfitId))

    return fetch(API_URL+'/api/v1/outfitdelete/', config)
      .then(response => {
        if (!response.ok) {
          dispatch(deleteOutfitError("L'item n'a pas pu être supprimé."))
        } else {
          history.push('app/outfits/');
        }
      }).catch(err => console.log("Error: ", err))
  }

}








