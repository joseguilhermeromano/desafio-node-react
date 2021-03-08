import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Login from './components/login.jsx'
import SignUp from './components/signup.jsx'

import React from 'react'

export default props => (
    <Router>
        <div className="auth-wrapper vertical-center">
            <div className="auth-inner">
            <Switch>
                <Route exact path='/' component={Login} />
                <Route path="/sign-in" component={Login} />
                <Route path="/sign-up" component={SignUp} />
            </Switch>
            </div>
        </div>
    </Router>
)