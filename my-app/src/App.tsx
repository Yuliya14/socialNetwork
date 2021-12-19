import React from 'react';
import './App.css';
import NavBar from "./Components/NavBar/NavBar";
import {BrowserRouter, Route} from "react-router-dom";

import HeaderContainer from "./Components/Header/HeaderContainer";
import ProfileContainer from './Components/Profile/ProfileContainer';
import {withSuspense} from "./hoc/withSuspense";

const PeopleContainer = React.lazy(() => import('./Components/People/PeopleContainer'));
const DialogsContainer = React.lazy(() => import('./Components/Dialogs/DialogsContainer'));
const News = React.lazy(() => import('./Components/News/News'));
const Music = React.lazy(() => import('./Components/Music/Music'));
const Settings = React.lazy(() => import('./Components/Settings/Settings'));
const Login = React.lazy(() => import('./Components/Login/Login'));

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <HeaderContainer/>
                <NavBar/>
                <div className={"appWrapper"}>
                    <Route path={'/profile/:userId?'} render={() => <ProfileContainer/>}/>
                    <Route path={'/people'} render={withSuspense(PeopleContainer)}/>
                    <Route path={'/dialogs'} render={withSuspense(DialogsContainer)}/>
                    <Route path={'/news'} render={withSuspense(News)}/>
                    <Route path={'/music'} render={withSuspense(Music)}/>
                    <Route path={'/settings'} render={withSuspense(Settings)}/>
                    <Route path={'/login'} render={withSuspense(Login)}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;

