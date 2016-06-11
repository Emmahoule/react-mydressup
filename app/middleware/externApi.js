// middleware/api.js

function callExternApi(endpoint, authenticated) {

  let config = {}

  return fetch(endpoint, config)
    .then(response => 
      response.json().then(text => ({ text, response }))
    ).then(({ text, response }) => {
      if (!response.ok) {
        return Promise.reject(text)
      }
      
      return text
    }).catch(err => console.log(err))
}

export const CALL_EXTERN_API = Symbol('Call extern API')

export default store => next => action => {

  const callExternAPI = action[CALL_EXTERN_API]

  if (typeof callExternAPI === 'undefined') {
    return next(action)
  }

  let { endpoint, types, authenticated } = callExternAPI

  const [ requestType, successType, errorType ] = types

  return callExternApi(endpoint, authenticated).then(
    response =>
      next({
        response,
        authenticated,
        type: successType
      }),
    error => next({
      error: error.message || 'There was an error.',
      type: errorType
    })
  )
}