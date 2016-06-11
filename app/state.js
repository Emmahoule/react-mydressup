import { applyMiddleware, createStore, combineReducers } from 'redux';
import createLogger from "redux-logger";

function authReducer(state=null, action) {
	switch(action.type) {
		case('LOGIN'):
			return action.payload;
		case('LOGOUT'):
			return null;
		default:
			return state;
	}
}

let reducers = combineReducers({
	token: authReducer,
});

const logger = createLogger();
const createStoreWithMiddleware = applyMiddleware(logger)(createStore);
export var store = createStoreWithMiddleware(reducers);