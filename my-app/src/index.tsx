import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';

import App from "./App";
import {BrowserRouter} from "react-router-dom";
import ReactDOM from "react-dom";
import store from "./redux/redux-store";
import {Provider} from "react-redux";

/*export const renderEntireTree = () => {
    ReactDOM.render(
        <BrowserRouter>
            <Provider store = {store}><App/></Provider>
        </BrowserRouter>, document.getElementById("root"))
};

renderEntireTree()
store.subscribe (() => {
    renderEntireTree()
})*/
    ReactDOM.render(
        <BrowserRouter>
            <Provider store = {store}><App/></Provider>
        </BrowserRouter>, document.getElementById("root"))


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
