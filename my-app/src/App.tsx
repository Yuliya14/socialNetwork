import React from 'react';
import './App.css';
import Header from "./Components/Header/Header";
import NavBar from "./Components/NavBar/NavBar";
import Profile from "./Components/Profile/Profile";
import Dialogs from "./Components/Dialogs/Dialogs.";
import {BrowserRouter, Route} from "react-router-dom";
import News from "./Components/News/News";
import Music from "./Components/Music/Music";
import Settings from "./Components/Settings/Settings";

import {stateType} from "./redux/state";

type AppPropsType = {
    state: stateType
    addPost: (postText: string) => void
    addMessage: (messageText: string) => void
}

function App(props: AppPropsType) {
    return (
        <BrowserRouter>
            <div className="App">
                <Header/>
                <NavBar/>
                <div className={"appWrapper"}>
                    <Route path={'/profile'} render={() => <Profile profilePage={props.state.ProfilePage}
                                                                    addPost = {props.addPost}/>}/>
                    <Route path={'/dialogs'} render={() => <Dialogs dialogsPage={props.state.DialogsPage}
                                                                    addMessage = {props.addMessage}/>}/>
                    <Route path={'/news'} render={() => <News/>}/>
                    <Route path={'/music'} render={() => <Music/>}/>
                    <Route path={'/settings'} render={() => <Settings/>}/>

                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
