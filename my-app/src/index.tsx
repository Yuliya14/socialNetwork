import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import store from "./redux/state";

import App from "./App";
import {stateType} from "./redux/state";
import {BrowserRouter} from "react-router-dom";
import ReactDOM from "react-dom";

export const renderEntireTree = (state: stateType) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state}
                 addPost = {store.addPost.bind(store)}
                 changePostText = {store.changePostText.bind(store)}
                 addMessage = {store.addMessage.bind(store)}
                 changeMessageText = {store.changeMessageText.bind(store)}/>
        </BrowserRouter>, document.getElementById("root"))
};
renderEntireTree(store.getState())
store.subscriber(renderEntireTree)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
