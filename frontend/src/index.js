import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './styling/index.css';
import registerServiceWorker from './registerServiceWorker';
import {Route,BrowserRouter,Switch,Redirect} from 'react-router-dom';
import store from './store';


import {Login} from "./components/Login";
import {Provider} from "react-redux";
import {DashBoard} from "./components/DashBoard";


/*
import {Profile} from "./components/Profile"
import {MainMenu} from "./components/MainMenu"
import {CourseView} from "./components/CourseView"
import {LectureView} from "./components/LectureView"
<Route path="/dashboard" component = {DashBoard}>
                    <Route path="/" component = {MainMenu}/>
                        <Route path ="/course:courseID" component = {CourseView}/>
                        <Route path ="/profile:username" component = {Profile}/>
                        <Route path ="/course/lecture:?" component = {LectureView}/>
                </Route>*/


class App extends Component {


    render() {
        return(

            <BrowserRouter>
                <Switch>

                    <Route path = "/login" component = {Login}/>
                    <Route path="/dashboard" component = {DashBoard}>
                        {/*<Route path="/" component = {MainMenu}/>
                        <Route path ="/course:courseID" component = {CourseView}/>
                        <Route path ="/profile:username" component = {Profile}/>
                        <Route path ="/course/lecture:?" component = {LectureView}/>*/}
                    </Route>

                    <Redirect to="login" />
                </Switch>

            </BrowserRouter>
        );
    }

}






ReactDOM.render(
    <Provider store = {store}>
        <App/>
    </Provider> , document.getElementById('app'));
registerServiceWorker();
