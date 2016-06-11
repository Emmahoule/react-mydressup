export const EDIT_PROFIL_REQUEST = 'EDIT_PROFIL_REQUEST'
export const EDIT_PROFIL_SUCCESS = 'EDIT_PROFIL_SUCCESS'
export const EDIT_PROFIL_FAILURE = 'EDIT_PROFIL_FAILURE'
export const FETCH_PROFIL_INFOS_REQUEST = 'FETCH_PROFIL_INFOS_REQUEST'
export const FETCH_PROFIL_INFOS_SUCCESS = 'FETCH_PROFIL_INFOS_SUCCESS'
export const FETCH_PROFIL_INFOS_FAILURE = 'FETCH_PROFIL_INFOS_FAILURE'
import { CALL_API } from '../middleware/api'
import { config } from '../config.js'

const API_URL = config.API_URL;

function requestEditProfil(creds) {
  return {
    type: EDIT_PROFIL_REQUEST,
    isFetching: true,
    creds
  }
}

function receiveEditProfil(user) {
  return {
    type: EDIT_PROFIL_SUCCESS,
    isFetching: false
  }
}

function editProfilError(message) {
  return {
    type: EDIT_PROFIL_FAILURE,
    isFetching: false,
    message
  }
}

export function editProfilUser(creds) {
  let token = localStorage.getItem('id_token') || null

  let config = {
    method: 'PUT',
    headers: {'Content-Type':'multipart/form-data', 'Authorization': `Bearer ${token}` },
    body: creds
  }

  return dispatch => {
    dispatch(requestEditProfil(creds))

    return fetch(API_URL+'/api/v1/profiles/', config)
      .then(response =>
        response.text().then(user => ({ user, response }))
            ).then(({ user, response }) =>  {
        if (!response.ok) {
          dispatch(editProfilError("Nope, ton profil est pas édité!"))
          return Promise.reject(user)
        } else {
          dispatch(receiveEditProfil(user))
        }
      }).catch(err => console.log("Error: ", err))
  }
}

export function fetchProfilInfos() {
  return {
    [CALL_API]: {
      endpoint: '/api/v1/profiles/',
      authenticated: true,
      types: [FETCH_PROFIL_INFOS_REQUEST, FETCH_PROFIL_INFOS_SUCCESS, FETCH_PROFIL_INFOS_FAILURE]
    }
  }
}

