export const FETCH_ITEMS_REQUEST = 'FETCH_ITEMS_REQUEST'
export const FETCH_ITEMS_SUCCESS = 'FETCH_ITEMS_SUCCESS'
export const FETCH_ITEMS_FAILURE = 'FETCH_ITEMS_FAILURE'

export const FETCH_ITEM_REQUEST = 'FETCH_ITEM_REQUEST'
export const FETCH_ITEM_SUCCESS = 'FETCH_ITEM_SUCCESS'
export const FETCH_ITEM_FAILURE = 'FETCH_ITEM_FAILURE'

export const ADD_ITEM_REQUEST = 'ADD_ITEM_REQUEST'
export const ADD_ITEM_SUCCESS = 'ADD_ITEM_SUCCESS'
export const ADD_ITEM_FAILURE = 'ADD_ITEM_FAILURE'

export const EDIT_ITEM_REQUEST = 'EDIT_ITEM_REQUEST'
export const EDIT_ITEM_SUCCESS = 'EDIT_ITEM_SUCCESS'
export const EDIT_ITEM_FAILURE = 'EDIT_ITEM_FAILURE'

export const DELETE_ITEM_REQUEST = 'DELETE_ITEM_REQUEST'
export const DELETE_ITEM_SUCCESS = 'DELETE_ITEM_SUCCESS'
export const DELETE_ITEM_FAILURE = 'DELETE_ITEM_FAILURE'

import { CALL_API } from '../middleware/api'
import { config } from '../config.js'
const API_URL = config.API_URL;

export function fetchItems() {
  return {
    [CALL_API]: {
      endpoint: '/api/v1/item/',
      authenticated: true,
      types: [FETCH_ITEMS_REQUEST, FETCH_ITEMS_SUCCESS, FETCH_ITEMS_FAILURE]
    }
  }
}

function requestFetchItem(idItem) {
  return {
    type: FETCH_ITEM_REQUEST,
    isFetching: true,
    isAuthenticated: false,
    idItem
  }
}

function receiveFetchItem(item) {
  return {
    type: FETCH_ITEM_SUCCESS,
    isFetching: false,
    isAuthenticated: true,
    dataItem: item
  }
}

function fetchItemError(message) {
  return {
    type: FETCH_ITEM_FAILURE,
    isFetching: false,
    isAuthenticated: false,
    message
  }
}

export function fetchItem(idItem, history) {
  let token = localStorage.getItem('id_token') || null

  let config = {
    method: 'POST',
    headers: {'Content-Type':'application/x-www-form-urlencoded', 'Authorization': `Bearer ${token}` },
    body: `id=${idItem}`
  }

  return dispatch => {
    dispatch(requestFetchItem(idItem))

    return fetch(API_URL+'/api/v1/itemdetail/', config)
      .then(response =>
        response.json().then(item => ({ item, response }))
            ).then(({ item, response }) =>  {
        if (!response.ok) {
          dispatch(fetchItemError("L'item n'a pas pu être récupéré."))
          return Promise.reject(item)
        } else {
          dispatch(receiveFetchItem(item))
        }
      }).catch(err => console.log("Error: ", err))
  }
}





function requestAddItem(itemDatas) {
  return {
    type: ADD_ITEM_REQUEST,
    isFetching: true,
    isAuthenticated: false,
    itemDatas
  }
}

function receiveAddItem(item) {
  return {
    type: ADD_ITEM_SUCCESS,
    isFetching: false,
    isAuthenticated: true,
    id_item: item.id
  }
}

function addItemError(message) {
  return {
    type: ADD_ITEM_FAILURE,
    isFetching: false,
    isAuthenticated: false,
    message
  }
}

export function addItem(itemDatas, history) {
  let token = localStorage.getItem('id_token') || null

  if (itemDatas.image) {
    itemDatas.image = itemDatas.image.replace(";", "-");
  }

  let config = {
    method: 'POST',
    headers: {'Content-Type':'application/x-www-form-urlencoded', 'Authorization': `Bearer ${token}` },
    body: `image=${itemDatas.image}&name=${itemDatas.title}&description=${itemDatas.description}&category=${itemDatas.category}&brand=${itemDatas.brand}&color=${itemDatas.color}&style=${itemDatas.style}&laundryGuide=${itemDatas.laundryguide}`
  }

  return dispatch => {
    dispatch(requestAddItem(itemDatas))

    return fetch(API_URL+'/api/v1/item/', config)
      .then(response =>
        response.text().then(item => ({ item, response }))
            ).then(({ item, response }) =>  {
        if (!response.ok) {
          dispatch(addItemError("L'item n'a pas pu être créé."))
          return Promise.reject(item)
        } else {
          dispatch(receiveAddItem(item))
          // history.push('app/items/'+item.id);
          history.push('app/items/');
        }
      }).catch(err => console.log("Error: ", err))
  }
}

function requestEditItem(itemDatas) {
  return {
    type: EDIT_ITEM_REQUEST,
    isFetching: true,
    isAuthenticated: false,
    itemDatas
  }
}

function receiveEditItem(item) {
  return {
    type: EDIT_ITEM_SUCCESS,
    isFetching: false,
    isAuthenticated: true,
    id_item: item.id
  }
}

function editItemError(message) {
  return {
    type: EDIT_ITEM_FAILURE,
    isFetching: false,
    isAuthenticated: false,
    message
  }
}

export function editItem(itemDatas, history) {
  let token = localStorage.getItem('id_token') || null

  if (itemDatas.image) {
    itemDatas.image = itemDatas.image.replace(";", "-");
  }
  
  let config = {
    method: 'POST',
    headers: {'Content-Type':'application/x-www-form-urlencoded', 'Authorization': `Bearer ${token}` },
    body: `id=${itemDatas.id}&image=${itemDatas.image}&name=${itemDatas.title}&description=${itemDatas.description}&category=${itemDatas.category}&brand=${itemDatas.brand}&color=${itemDatas.color}&style=${itemDatas.style}&laundryGuide=${itemDatas.laundryGuide}`
  }

  return dispatch => {
    dispatch(requestEditItem(itemDatas))

    return fetch(API_URL+'/api/v1/itemupdate/', config)
      .then(response =>
        response.json().then(item => ({ item, response }))
            ).then(({ item, response }) =>  {
        if (!response.ok) {
          dispatch(editItemError("L'item n'a pas pu être modifié."))
          return Promise.reject(item)
        } else {
          dispatch(receiveEditItem(item))
          history.push('app/items/'+itemDatas.id);
        }
      }).catch(err => console.log("Error: ", err))
  }
}

function requestDeleteItem(itemDatas) {
  return {
    type: DELETE_ITEM_REQUEST,
    isFetching: true,
    isAuthenticated: false,
    itemDatas
  }
}

function receiveDeleteItem(item) {
  return {
    type: DELETE_ITEM_SUCCESS,
    isFetching: false,
    isAuthenticated: true,
    id_item: item.id
  }
}

function deleteItemError(message) {
  return {
    type: DELETE_ITEM_FAILURE,
    isFetching: false,
    isAuthenticated: false,
    message
  }
}

export function deleteItem(itemId, history) {
  let token = localStorage.getItem('id_token') || null

  let config = {
    method: 'POST',
    headers: {'Content-Type':'application/x-www-form-urlencoded', 'Authorization': `Bearer ${token}` },
    body: `id=${itemId}`
  }

  return dispatch => {
    dispatch(requestDeleteItem(itemId))

    return fetch(API_URL+'/api/v1/itemdelete/', config)
      .then(response => {
        if (!response.ok) {
          dispatch(deleteItemError("L'item n'a pas pu être supprimé."))
        } else {
          history.push('app/items/');
        }
      }).catch(err => console.log("Error: ", err))
  }
}








