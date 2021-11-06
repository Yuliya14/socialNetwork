import {applyMiddleware, combineReducers, createStore} from 'redux'
import postReducer from "./post-reducer";
import messageReducer from "./message-reducer";
import userReducer from "./user-reducer";
import authReducer from "./auth-reducer";
import thunk from "redux-thunk";

let reducer = combineReducers({
    ProfilePage: postReducer,
    UsersPage: userReducer,
    DialogsPage: messageReducer,
    auth: authReducer
})
let store = createStore(reducer, applyMiddleware(thunk))
export type storeType = ReturnType<typeof reducer>

export default store
//@ts-ignore
window.store = store
