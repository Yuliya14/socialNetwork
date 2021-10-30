import {combineReducers, createStore} from 'redux'
import postReducer from "./post-reducer";
import messageReducer from "./message-reducer";

let reducers = combineReducers({
    ProfilePage: postReducer,
    DialogsPage: messageReducer,
})
let store = createStore(reducers)

export type storeType = ReturnType<typeof reducers>

export default store

