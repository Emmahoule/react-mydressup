export const DOWNLOAD_URL_REQUEST = 'DOWNLOAD_URL_REQUEST'
export const DOWNLOAD_URL_SUCCESS = 'DOWNLOAD_URL_SUCCESS'
export const DOWNLOAD_URL_FAILURE = 'DOWNLOAD_URL_FAILURE'

import { config } from '../config.js'
const API_URL = config.API_URL;

function requestDownloadUrl(url) {
  return {
    type: DOWNLOAD_URL_REQUEST,
    isFetching: true,
    url
  }
}

function receiveDownloadUrl(image) {
  return {
    type: DOWNLOAD_URL_SUCCESS,
    isFetching: false,
    isAuthenticated: true,
    imageDownloaded: image
  }
}

function downloadUrlError(message) {
  return {
    type: DOWNLOAD_URL_FAILURE,
    isFetching: false,
    isAuthenticated: false,
    message
  }
}

export function downloadUrl(url) {
  let token = localStorage.getItem('id_token') || null

  let config = {
    method: 'POST',
    headers: {'Content-Type':'application/x-www-form-urlencoded', 'Authorization': `Bearer ${token}` },
    body: `url=${url}`
  }

  return dispatch => {
    dispatch(requestDownloadUrl(url))

    return fetch(API_URL+'/api/v1/itemurl/', config)
      .then(response =>
        response.text().then(image => ({ image, response }))
            ).then(({ image, response }) =>  {
        if (!response.ok) {
          dispatch(receiveDownloadUrl("L'image n'a pas pu être téléchargée."))
          return Promise.reject(image)
        } else {
          dispatch(receiveDownloadUrl(image))
        }
      }).catch(err => console.log("Error: ", err))
  }
}


export function deleteDownloadUrl() {
  return {
    type: DOWNLOAD_URL_DELETE,
    isFetching: true,
    imageDownloaded: null
  }
}
