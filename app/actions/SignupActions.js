export const SIGNUP_REQUEST = 'SIGNUP_REQUEST'
export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS'
export const SIGNUP_FAILURE = 'SIGNUP_FAILURE'
import { CALL_API } from '../middleware/api'
import { config } from '../config.js'

const API_URL = config.API_URL;

function requestSignup(creds) {
  return {
    type: SIGNUP_REQUEST,
    isFetching: true,
    isAuthenticated: false,
    creds
  }
}

function receiveSignup(user) {
  return {
    type: SIGNUP_SUCCESS,
    isFetching: false,
    isAuthenticated: true,
    id_token: user.id_token
  }
}

function signupError(message) {
  return {
    type: SIGNUP_FAILURE,
    isFetching: false,
    isAuthenticated: false,
    message
  }
}

export function signupUser(creds, history) {

  let config = {
    method: 'POST',
    headers: { 'Content-Type':'application/x-www-form-urlencoded' },
    body: `username=${creds.username}&email=${creds.email}&password=${creds.password}`
  }

  return dispatch => {
    dispatch(requestSignup(creds))

    return fetch(API_URL+'/api/v1/profiles/', config)
      .then(response =>
        response.json().then(user => ({ user, response }))
            ).then(({ user, response }) =>  {
        if (!response.ok) {
          dispatch(signupError("Nope, ça a pas fonctionné!"))
          return Promise.reject(user)
        } else {
          localStorage.setItem('id_token', user.token);
          localStorage.setItem('username', user.username);
          // localStorage.setItem('img', user.img)
          dispatch(receiveSignup(user));
          history.push('app/home/');
        }
      }).catch(err => console.log("Error: ", err))
  }
}
