import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import store from "./redux/store";

import App from "./App";
import {stateType} from "./redux/store";
import {BrowserRouter} from "react-router-dom";
import ReactDOM from "react-dom";

export const renderEntireTree = (state: stateType) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state}
                 dispatch = {store.dispatch.bind(store)}/>
        </BrowserRouter>, document.getElementById("root"))
};
renderEntireTree(store.getState())
store.subscriber(renderEntireTree)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
