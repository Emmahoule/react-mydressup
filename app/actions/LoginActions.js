export const LOGIN_REQUEST = 'LOGIN_REQUEST'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_FAILURE = 'LOGIN_FAILURE'
import { config } from '../config.js'

const API_URL = config.API_URL;

function requestLogin(creds) {
  return {
    type: LOGIN_REQUEST,
    isFetching: true,
    isAuthenticated: false,
    creds
  }
}

function receiveLogin(user) {
  return {
    type: LOGIN_SUCCESS,
    isFetching: false,
    isAuthenticated: true
  }
}

function loginError(message) {
  return {
    type: LOGIN_FAILURE,
    isFetching: false,
    isAuthenticated: false,
    message
  }
}

export function loginUser(creds, history) {

  let config = {
    method: 'POST',
    headers: { 'Content-Type':'application/x-www-form-urlencoded' },
    body: `username=${creds.email}&password=${creds.password}`
  }

  return dispatch => {
    dispatch(requestLogin(creds))

    return fetch(API_URL+'/api-token-auth/', config)
      .then(response =>
        response.json().then(user => ({ user, response }))
            ).then(({ user, response }) =>  {
        if (!response.ok) {
          dispatch(loginError("Désolé, vous avez entré un email ou un mot de passe incorrecte."))
          return Promise.reject(user)
        } else {
          localStorage.setItem('id_token', user.token)
          localStorage.setItem('username', user.username)
          localStorage.setItem('img', user.img)
          dispatch(receiveLogin(user))
          history.push('app/home');
        }
      }).catch(err => console.log("Error: ", err))
  }
}
