import { combineReducers } from 'redux'

import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE } from '../actions/LoginActions.js'
import { SIGNUP_REQUEST, SIGNUP_SUCCESS, SIGNUP_FAILURE } from '../actions/SignupActions.js'
import { LOGOUT_SUCCESS } from '../actions/LogoutActions.js'

import { EDIT_PROFIL_REQUEST, EDIT_PROFIL_SUCCESS, EDIT_PROFIL_FAILURE, FETCH_PROFIL_INFOS_REQUEST, FETCH_PROFIL_INFOS_SUCCESS, FETCH_PROFIL_INFOS_FAILURE } from '../actions/ProfilActions.js'

import { FETCH_ITEMS_REQUEST, FETCH_ITEMS_SUCCESS, FETCH_ITEMS_FAILURE, FETCH_ITEM_REQUEST, FETCH_ITEM_SUCCESS, FETCH_ITEM_FAILURE, ADD_ITEM_REQUEST, ADD_ITEM_SUCCESS, ADD_ITEM_FAILURE, EDIT_ITEM_REQUEST, EDIT_ITEM_SUCCESS, EDIT_ITEM_FAILURE, DELETE_ITEM_REQUEST, DELETE_ITEM_SUCCESS, DELETE_ITEM_FAILURE} from '../actions/ItemsActions.js'

import { FETCH_OUTFITS_REQUEST, FETCH_OUTFITS_SUCCESS, FETCH_OUTFITS_FAILURE, FETCH_OUTFIT_REQUEST, FETCH_OUTFIT_SUCCESS, FETCH_OUTFIT_FAILURE, ADD_OUTFIT_IMAGE_REQUEST, ADD_OUTFIT_IMAGE_SUCCESS, ADD_OUTFIT_IMAGE_FAILURE, ADD_OUTFIT_INFOS_REQUEST, ADD_OUTFIT_INFOS_SUCCESS, ADD_OUTFIT_INFOS_FAILURE, EDIT_OUTFIT_REQUEST, EDIT_OUTFIT_SUCCESS, EDIT_OUTFIT_FAILURE, DELETE_OUTFIT_REQUEST, DELETE_OUTFIT_SUCCESS, DELETE_OUTFIT_FAILURE} from '../actions/OutfitsActions.js'

import { FETCH_LOOKBOOKS_REQUEST, FETCH_LOOKBOOKS_SUCCESS, FETCH_LOOKBOOKS_FAILURE, FETCH_LOOKBOOK_REQUEST, FETCH_LOOKBOOK_SUCCESS, FETCH_LOOKBOOK_FAILURE, ADD_LOOKBOOK_REQUEST, ADD_LOOKBOOK_SUCCESS, ADD_LOOKBOOK_FAILURE, EDIT_LOOKBOOK_REQUEST, EDIT_LOOKBOOK_SUCCESS, EDIT_LOOKBOOK_FAILURE, DELETE_LOOKBOOK_REQUEST, DELETE_LOOKBOOK_SUCCESS, DELETE_LOOKBOOK_FAILURE} from '../actions/LookbooksActions.js'


import { FETCH_CATEGORIES_REQUEST, FETCH_CATEGORIES_SUCCESS, FETCH_CATEGORIES_FAILURE } from '../actions/CategoriesActions.js'
import { FETCH_CATEGORIES_USER_REQUEST, FETCH_CATEGORIES_USER_SUCCESS, FETCH_CATEGORIES_USER_FAILURE } from '../actions/CategoriesActions.js'
import { FETCH_BRANDS_REQUEST, FETCH_BRANDS_SUCCESS, FETCH_BRANDS_FAILURE } from '../actions/BrandsActions.js'
import { FETCH_STYLES_REQUEST, FETCH_STYLES_SUCCESS, FETCH_STYLES_FAILURE } from '../actions/StylesActions.js'
import { FETCH_COLORS_REQUEST, FETCH_COLORS_SUCCESS, FETCH_COLORS_FAILURE } from '../actions/ColorsActions.js'

import { FETCH_OCCASIONS_REQUEST, FETCH_OCCASIONS_SUCCESS, FETCH_OCCASIONS_FAILURE } from '../actions/OccasionsActions.js'
import { FETCH_TEMPERATURES_REQUEST, FETCH_TEMPERATURES_SUCCESS, FETCH_TEMPERATURES_FAILURE } from '../actions/TemperaturesActions.js'
import { FETCH_WEATHERS_REQUEST, FETCH_WEATHERS_SUCCESS, FETCH_WEATHERS_FAILURE } from '../actions/WeathersActions.js'


import { COLLAGE_ADD_ITEM, COLLAGE_REMOVE_ALL_ITEMS, COLLAGE_UPDATE_ITEM, COLLAGE_DELETE_ITEM } from '../actions/CollageActions.js'

import { DOWNLOAD_URL_REQUEST, DOWNLOAD_URL_SUCCESS, DOWNLOAD_URL_FAILURE, DOWNLOAD_URL_DELETE } from '../actions/UrlActions.js'

import { FETCH_METEO_REQUEST, FETCH_METEO_SUCCESS, FETCH_METEO_FAILURE } from '../actions/MeteoActions.js'



function auth(state = {
    isFetching: false,
    isAuthenticated: localStorage.getItem('id_token') ? true : false
  }, action) {
  switch (action.type) {
    case LOGIN_REQUEST:
      return Object.assign({}, state, {
        isFetching: true,
        isAuthenticated: false,
        user: action.creds
      })
    case LOGIN_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        isAuthenticated: true,
        errorMessage: 'Vous êtes maintenant connecté'
      })
    case LOGIN_FAILURE:
      return Object.assign({}, state, {
        isFetching: false,
        isAuthenticated: false,
        errorMessage: action.message
      })
    case LOGOUT_SUCCESS:
      return Object.assign({}, state, {
        isFetching: true,
        isAuthenticated: false,
        errorMessage: ''
      })
    default:
      return state
  }
}


function signup(state = {
    isFetching: false,
    isAuthenticated: localStorage.getItem('id_token') ? true : false
  }, action) {
  switch (action.type) {
    case SIGNUP_REQUEST:
      return Object.assign({}, state, {
        isFetching: true,
        isAuthenticated: false,
        user: action.creds
      })
    case SIGNUP_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        isAuthenticated: true,
        errorMessage: 'Vous êtes maintenant inscrit'
      })
    case SIGNUP_FAILURE:
      return Object.assign({}, state, {
        isFetching: false,
        isAuthenticated: false,
        errorMessage: action.message
      })
    default:
      return state
  }
}


function profil(state = {
    isFetching: false
  }, action) {
  switch (action.type) {
    case EDIT_PROFIL_REQUEST:
      return Object.assign({}, state, {
        isFetching: true,
        user: action.creds
      })
    case EDIT_PROFIL_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        errorMessage: 'Bravo, votre profile a été modifié !'
      })
    case EDIT_PROFIL_FAILURE:
      return Object.assign({}, state, {
        isFetching: false,
        errorMessage: action.message
      })
    case FETCH_PROFIL_INFOS_REQUEST:
      return Object.assign({}, state, {
        isFetching: true
      })
    case FETCH_PROFIL_INFOS_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        userInfos: action.response
      })    
    case FETCH_PROFIL_INFOS_FAILURE:
      return Object.assign({}, state, {
        isFetching: false
      })
    default:
      return state
  }
}


function fetchItems(state = {
    isFetching: false
  }, action) {
  switch (action.type) {
    case FETCH_ITEMS_REQUEST:
      return Object.assign({}, state, {
        isFetching: true
      })
    case FETCH_ITEMS_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        dataItems: action.response
      })    
    case FETCH_ITEMS_FAILURE:
      return Object.assign({}, state, {
        isFetching: false
      })
    default:
      return state
  }
}


function fetchItem(state = {
    isFetching: false
  }, action) {
  switch (action.type) {
    case FETCH_ITEM_REQUEST:
      return Object.assign({}, state, {
        isFetching: true
      })
    case FETCH_ITEM_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        dataItem: action.dataItem
      })    
    case FETCH_ITEM_FAILURE:
      return Object.assign({}, state, {
        isFetching: false
      })
    default:
      return state
  }
}


function addItem(state = {
    isFetching: false
  }, action) {
  switch (action.type) {
    case ADD_ITEM_REQUEST:
      return Object.assign({}, state, {
        isFetching: true,
        item: action.itemDatas
      })
    case ADD_ITEM_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        errorMessage: 'Bravo, votre item a été ajouté !'
      })
    case ADD_ITEM_FAILURE:
      return Object.assign({}, state, {
        isFetching: false,
        errorMessage: action.message
      })
    default:
      return state
  }
}

function editItem(state = {
    isFetching: false
  }, action) {
  switch (action.type) {
    case EDIT_ITEM_REQUEST:
      return Object.assign({}, state, {
        isFetching: true,
        item: action.itemDatas
      })
    case EDIT_ITEM_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        errorMessage: 'Bravo, votre item a été édité !'
      })
    case EDIT_ITEM_FAILURE:
      return Object.assign({}, state, {
        isFetching: false,
        errorMessage: action.message
      })
    default:
      return state
  }
}


function deleteItem(state = {
    isFetching: false
  }, action) {
  switch (action.type) {
    case DELETE_ITEM_REQUEST:
      return Object.assign({}, state, {
        isFetching: true,
        item: action.itemDatas
      })
    case DELETE_ITEM_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        errorMessage: 'Bravo, votre item a été édité !'
      })
    case DELETE_ITEM_FAILURE:
      return Object.assign({}, state, {
        isFetching: false,
        errorMessage: action.message
      })
    default:
      return state
  }
}




function fetchCategories(state = {
    isFetching: false
  }, action) {
  switch (action.type) {
    case FETCH_CATEGORIES_REQUEST:
      return Object.assign({}, state, {
        isFetching: true
      })
    case FETCH_CATEGORIES_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        dataCategories: action.response
      })    
    case FETCH_CATEGORIES_FAILURE:
      return Object.assign({}, state, {
        isFetching: false
      })
    default:
      return state
  }
}

function fetchCategoriesByUser(state = {
    isFetching: false
  }, action) {
  switch (action.type) {
    case FETCH_CATEGORIES_USER_REQUEST:
      return Object.assign({}, state, {
        isFetching: true
      })
    case FETCH_CATEGORIES_USER_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        dataCategoriesUser: action.response
      })    
    case FETCH_CATEGORIES_USER_FAILURE:
      return Object.assign({}, state, {
        isFetching: false
      })
    default:
      return state
  }
}



function fetchBrands(state = {
    isFetching: false
  }, action) {
  switch (action.type) {
    case FETCH_BRANDS_REQUEST:
      return Object.assign({}, state, {
        isFetching: true
      })
    case FETCH_BRANDS_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        dataBrands: action.response
      })    
    case FETCH_BRANDS_FAILURE:
      return Object.assign({}, state, {
        isFetching: false
      })
    default:
      return state
  }
}


function fetchColors(state = {
    isFetching: false
  }, action) {
  switch (action.type) {
    case FETCH_COLORS_REQUEST:
      return Object.assign({}, state, {
        isFetching: true
      })
    case FETCH_COLORS_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        dataColors: action.response
      })    
    case FETCH_COLORS_FAILURE:
      return Object.assign({}, state, {
        isFetching: false
      })
    default:
      return state
  }
}



function fetchStyles(state = {
    isFetching: false
  }, action) {
  switch (action.type) {
    case FETCH_STYLES_REQUEST:
      return Object.assign({}, state, {
        isFetching: true
      })
    case FETCH_STYLES_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        dataStyles: action.response
      })    
    case FETCH_STYLES_FAILURE:
      return Object.assign({}, state, {
        isFetching: false
      })
    default:
      return state
  }
}


function collageItem(state = {
    listItems: {}
  }, action) {
  switch (action.type) {
    case COLLAGE_ADD_ITEM:
      return Object.assign({}, state, {
        listItems: action.listItems
      })
    case COLLAGE_REMOVE_ALL_ITEMS:
      return Object.assign({}, state, {
        listItems: action.listItems
      })
    case COLLAGE_UPDATE_ITEM:
      return Object.assign({}, state, {
        listItems: action.listItems
      })
    case COLLAGE_DELETE_ITEM:
      return Object.assign({}, state, {
        listItems: action.listItems
      })
    default:
      return state
  }
}

function downloadUrl(state = {
    isFetching: false
  }, action) {
  switch (action.type) {
    case DOWNLOAD_URL_REQUEST:
      return Object.assign({}, state, {
        isFetching: true      
      })
    case DOWNLOAD_URL_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        errorMessage: 'Bravo, votre image a été téléchargée',
        imageDownloaded: action.imageDownloaded
      })
    case DOWNLOAD_URL_FAILURE:
      return Object.assign({}, state, {
        isFetching: false,
        errorMessage: action.message
      })
    case DOWNLOAD_URL_DELETE:
      return Object.assign({}, state, {
        isFetching: false,
        imageDownloaded: action.imageDownloaded
      })
    default:
      return state
  }
}


function fetchOutfits(state = {
    isFetching: false
  }, action) {
  switch (action.type) {
    case FETCH_OUTFITS_REQUEST:
      return Object.assign({}, state, {
        isFetching: true
      })
    case FETCH_OUTFITS_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        dataOutfits: action.response
      })    
    case FETCH_OUTFITS_FAILURE:
      return Object.assign({}, state, {
        isFetching: false
      })
    default:
      return state
  }
}


function fetchOutfit(state = {
    isFetching: false
  }, action) {
  switch (action.type) {
    case FETCH_OUTFIT_REQUEST:
      return Object.assign({}, state, {
        isFetching: true
      })
    case FETCH_OUTFIT_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        dataOutfit: action.dataOutfit
      })    
    case FETCH_OUTFIT_FAILURE:
      return Object.assign({}, state, {
        isFetching: false
      })
    default:
      return state
  }
}


function addOutfitImage(state = {
    isFetching: false
  }, action) {
  switch (action.type) {
    case ADD_OUTFIT_IMAGE_REQUEST:
      return Object.assign({}, state, {
        isFetching: true,
        outfit: action.outfitImage
      })
    case ADD_OUTFIT_IMAGE_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        errorMessage: 'Bravo, votre outfit a été ajouté !'
      })
    case ADD_OUTFIT_IMAGE_FAILURE:
      return Object.assign({}, state, {
        isFetching: false,
        errorMessage: action.message
      })
    default:
      return state
  }
}

function editOutfit(state = {
    isFetching: false
  }, action) {
  switch (action.type) {
    case EDIT_OUTFIT_REQUEST:
      return Object.assign({}, state, {
        isFetching: true,
        outfit: action.outfitDatas
      })
    case EDIT_OUTFIT_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        errorMessage: 'Bravo, votre outfit a été édité !'
      })
    case EDIT_OUTFIT_FAILURE:
      return Object.assign({}, state, {
        isFetching: false,
        errorMessage: action.message
      })
    default:
      return state
  }
}


function deleteOutfit(state = {
    isFetching: false
  }, action) {
  switch (action.type) {
    case DELETE_OUTFIT_REQUEST:
      return Object.assign({}, state, {
        isFetching: true,
        outfit: action.outfitDatas
      })
    case DELETE_OUTFIT_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        errorMessage: 'Bravo, votre outfit a été édité !'
      })
    case DELETE_OUTFIT_FAILURE:
      return Object.assign({}, state, {
        isFetching: false,
        errorMessage: action.message
      })
    default:
      return state
  }
}


function fetchOutfits(state = {
    isFetching: false
  }, action) {
  switch (action.type) {
    case FETCH_OUTFITS_REQUEST:
      return Object.assign({}, state, {
        isFetching: true
      })
    case FETCH_OUTFITS_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        dataOutfits: action.response
      })    
    case FETCH_OUTFITS_FAILURE:
      return Object.assign({}, state, {
        isFetching: false
      })
    default:
      return state
  }
}


function fetchOutfit(state = {
    isFetching: false
  }, action) {
  switch (action.type) {
    case FETCH_OUTFIT_REQUEST:
      return Object.assign({}, state, {
        isFetching: true
      })
    case FETCH_OUTFIT_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        dataOutfit: action.dataOutfit
      })    
    case FETCH_OUTFIT_FAILURE:
      return Object.assign({}, state, {
        isFetching: false
      })
    default:
      return state
  }
}


function addOutfitInfos(state = {
    isFetching: false
  }, action) {
  switch (action.type) {
    case ADD_OUTFIT_INFOS_REQUEST:
      return Object.assign({}, state, {
        isFetching: true,
        outfit: action.outfitInfos
      })
    case ADD_OUTFIT_INFOS_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        errorMessage: 'Bravo, votre outfit a été ajouté !'
      })
    case ADD_OUTFIT_INFOS_FAILURE:
      return Object.assign({}, state, {
        isFetching: false,
        errorMessage: action.message
      })
    default:
      return state
  }
}

function editOutfit(state = {
    isFetching: false
  }, action) {
  switch (action.type) {
    case EDIT_OUTFIT_REQUEST:
      return Object.assign({}, state, {
        isFetching: true,
        outfit: action.outfitDatas
      })
    case EDIT_OUTFIT_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        errorMessage: 'Bravo, votre outfit a été édité !'
      })
    case EDIT_OUTFIT_FAILURE:
      return Object.assign({}, state, {
        isFetching: false,
        errorMessage: action.message
      })
    default:
      return state
  }
}


function deleteOutfit(state = {
    isFetching: false
  }, action) {
  switch (action.type) {
    case DELETE_OUTFIT_REQUEST:
      return Object.assign({}, state, {
        isFetching: true,
        outfit: action.outfitDatas
      })
    case DELETE_OUTFIT_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        errorMessage: 'Bravo, votre outfit a été édité !'
      })
    case DELETE_OUTFIT_FAILURE:
      return Object.assign({}, state, {
        isFetching: false,
        errorMessage: action.message
      })
    default:
      return state
  }
}

function fetchMeteo(state = {
    isFetching: false
  }, action) {
  switch (action.type) {
    case FETCH_METEO_REQUEST:
      return Object.assign({}, state, {
        isFetching: true
      })
    case FETCH_METEO_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        dataMeteo: action.response
      })    
    case FETCH_METEO_FAILURE:
      return Object.assign({}, state, {
        isFetching: false
      })
    default:
      return state
  }
}

function fetchLookbooks(state = {
    isFetching: false
  }, action) {
  switch (action.type) {
    case FETCH_LOOKBOOKS_REQUEST:
      return Object.assign({}, state, {
        isFetching: true
      })
    case FETCH_LOOKBOOKS_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        dataLookbooks: action.response
      })    
    case FETCH_LOOKBOOKS_FAILURE:
      return Object.assign({}, state, {
        isFetching: false
      })
    default:
      return state
  }
}


function fetchLookbook(state = {
    isFetching: false
  }, action) {
  switch (action.type) {
    case FETCH_LOOKBOOK_REQUEST:
      return Object.assign({}, state, {
        isFetching: true
      })
    case FETCH_LOOKBOOK_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        dataLookbook: action.dataLookbook
      })    
    case FETCH_LOOKBOOK_FAILURE:
      return Object.assign({}, state, {
        isFetching: false
      })
    default:
      return state
  }
}


function addLookbook(state = {
    isFetching: false
  }, action) {
  switch (action.type) {
    case ADD_LOOKBOOK_REQUEST:
      return Object.assign({}, state, {
        isFetching: true,
        lookbook: action.lookbookDatas
      })
    case ADD_LOOKBOOK_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        errorMessage: 'Bravo, votre lookbook a été ajouté !'
      })
    case ADD_LOOKBOOK_FAILURE:
      return Object.assign({}, state, {
        isFetching: false,
        errorMessage: action.message
      })
    default:
      return state
  }
}

function editLookbook(state = {
    isFetching: false
  }, action) {
  switch (action.type) {
    case EDIT_LOOKBOOK_REQUEST:
      return Object.assign({}, state, {
        isFetching: true,
        lookbook: action.lookbookDatas
      })
    case EDIT_LOOKBOOK_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        errorMessage: 'Bravo, votre lookbook a été édité !'
      })
    case EDIT_LOOKBOOK_FAILURE:
      return Object.assign({}, state, {
        isFetching: false,
        errorMessage: action.message
      })
    default:
      return state
  }
}


function deleteLookbook(state = {
    isFetching: false
  }, action) {
  switch (action.type) {
    case DELETE_LOOKBOOK_REQUEST:
      return Object.assign({}, state, {
        isFetching: true,
        lookbook: action.lookbookDatas
      })
    case DELETE_LOOKBOOK_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        errorMessage: 'Bravo, votre lookbook a été édité !'
      })
    case DELETE_LOOKBOOK_FAILURE:
      return Object.assign({}, state, {
        isFetching: false,
        errorMessage: action.message
      })
    default:
      return state
  }
}




function fetchOccasions(state = {
    isFetching: false
  }, action) {
  switch (action.type) {
    case FETCH_OCCASIONS_REQUEST:
      return Object.assign({}, state, {
        isFetching: true
      })
    case FETCH_OCCASIONS_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        dataOccasions: action.response
      })    
    case FETCH_OCCASIONS_FAILURE:
      return Object.assign({}, state, {
        isFetching: false
      })
    default:
      return state
  }
}


function fetchTemperatures(state = {
    isFetching: false
  }, action) {
  switch (action.type) {
    case FETCH_TEMPERATURES_REQUEST:
      return Object.assign({}, state, {
        isFetching: true
      })
    case FETCH_TEMPERATURES_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        dataTemperatures: action.response
      })    
    case FETCH_TEMPERATURES_FAILURE:
      return Object.assign({}, state, {
        isFetching: false
      })
    default:
      return state
  }
}



function fetchWeathers(state = {
    isFetching: false
  }, action) {
  switch (action.type) {
    case FETCH_WEATHERS_REQUEST:
      return Object.assign({}, state, {
        isFetching: true
      })
    case FETCH_WEATHERS_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        dataWeathers: action.response
      })    
    case FETCH_WEATHERS_FAILURE:
      return Object.assign({}, state, {
        isFetching: false
      })
    default:
      return state
  }
}

const dressingApp = combineReducers({
  auth, signup, profil, 
  fetchItems, fetchItem, addItem, editItem, deleteItem, 
  fetchCategories, fetchCategoriesByUser, fetchBrands, fetchColors , fetchStyles, 
  collageItem, 
  downloadUrl,
  fetchOutfits, fetchOutfit, addOutfitImage,  addOutfitInfos, editOutfit, deleteOutfit, 
  fetchMeteo,
  fetchLookbooks, fetchLookbook, addLookbook, editLookbook, deleteLookbook, 
  fetchOccasions, fetchTemperatures , fetchWeathers
})

export default dressingApp

