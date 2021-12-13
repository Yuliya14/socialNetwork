import {applyMiddleware, combineReducers, compose, createStore} from 'redux'
import postReducer from "./post-reducer";
import messageReducer from "./message-reducer";
import userReducer from "./user-reducer";
import authReducer from "./auth-reducer";
import thunk from "redux-thunk";
import { reducer as formReducer } from "redux-form"

let reducer = combineReducers({
    ProfilePage: postReducer,
    UsersPage: userReducer,
    DialogsPage: messageReducer,
    auth: authReducer,
    form: formReducer
})
// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));
//let store = createStore(reducer, applyMiddleware(thunk))
export type storeType = ReturnType<typeof reducer>

export default store
//@ts-ignore
window.store = store
