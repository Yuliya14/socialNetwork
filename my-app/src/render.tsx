import React from "react";
import App from "./App";
import {addMessage, addPost, stateType} from "./redux/state";
import {BrowserRouter} from "react-router-dom";
import ReactDOM from "react-dom";

export const renderEntireTree = (state: stateType) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state} addPost={addPost} addMessage={addMessage}/>
        </BrowserRouter>, document.getElementById("root"))
};