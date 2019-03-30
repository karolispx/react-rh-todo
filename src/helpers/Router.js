import React from 'react'

import Login from "../views/pages/Login";
import Register from "../views/pages/Register";
import NotFound from "../views/pages/NotFound";

import Tasks from "../views/pages/Tasks";
import Logout from "../views/pages/Logout";

import { Switch, Route } from 'react-router-dom'
import { Redirect } from 'react-router';

import Authentication from './Authentication';

const authentication = new Authentication();

const isAuthenticated = authentication.isAuthenticated();

const Router = () => (
    <Switch>
        <Route exact path="/login" render={() => (
            isAuthenticated ? (
                <Redirect to="/tasks"/>
            ) : (
                <Route path='/login' component={Login}/>
            )
        )}/>

        <Route exact path="/register" render={() => (
            isAuthenticated ? (
                <Redirect to="/tasks"/>
            ) : (
                <Route path='/register' component={Register}/>
            )
        )}/>

        <Route exact path="/" render={() => (
            isAuthenticated ? (
                <Redirect to="/tasks"/>
            ) : (
                <Redirect to="/login"/>
            )
        )}/>

        <Route exact path="/tasks" render={() => (
            isAuthenticated ? (
                <Route path='/tasks' component={Tasks}/>
            ) : (
                <Redirect to="/login"/>
            )
        )}/>

        <Route exact path="/logout" render={() => (
            isAuthenticated ? (
                <Route path='/logout' component={Logout}/>
            ) : (
                <Redirect to="/login"/>
            )
        )}/>

        <Route component={NotFound} />
    </Switch>
);

export default Router
