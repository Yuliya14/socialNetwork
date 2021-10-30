import {combineReducers, createStore} from 'redux'
import postReducer from "./post-reducer.";
import messageReducer from "./message-reducer.";

export type globalStateType = ReturnType<typeof reducers>

let reducers = combineReducers({
    ProfilePage: postReducer,
    DialogsPage: messageReducer,
})
let store = createStore(reducers)

export default store

