import React from 'react';
import './App.css';
import NavBar from "./Components/NavBar/NavBar";
import {BrowserRouter, Route} from "react-router-dom";
import News from "./Components/News/News";
import Music from "./Components/Music/Music";
import Settings from "./Components/Settings/Settings";

import PeopleContainer from './Components/People/PeopleContainer';

import HeaderContainer from "./Components/Header/HeaderContainer";
import Login from "./Components/Login/Login";
import DialogsContainer from "./Components/Dialogs/DialogsContainer";
import ProfileContainer from './Components/Profile/ProfileContainer';

type AppPropsType = {
}

function App(props: AppPropsType) {
    return (
        <BrowserRouter>
            <div className="App">
                <HeaderContainer/>
                <NavBar/>
                <div className={"appWrapper"}>
                    <Route path={'/profile/:userId?'} render={() => <ProfileContainer/>}/>
                    <Route path={'/people'} render={() => <PeopleContainer/>}/>
                    <Route path={'/dialogs'} render={() => <DialogsContainer/>}/>
                    <Route path={'/news'} render={() => <News/>}/>
                    <Route path={'/music'} render={() => <Music/>}/>
                    <Route path={'/settings'} render={() => <Settings/>}/>
                    <Route path={'/login'} render={() => <Login/>}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;

