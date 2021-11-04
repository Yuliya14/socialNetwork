import {combineReducers, createStore} from 'redux'
import postReducer from "./post-reducer";
import messageReducer from "./message-reducer";
import userReducer from "./user-reducer";

let reducer = combineReducers({
    ProfilePage: postReducer,
    UsersPage: userReducer,
    DialogsPage: messageReducer,
})
let store = createStore(reducer)
export type storeType = ReturnType<typeof reducer>

export default store

