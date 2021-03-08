import 'modules/bootstrap/dist/css/bootstrap.min.css'
import 'modules/font-awesome/css/font-awesome.min.css'

import '../css/app.css';
import '../css/materialize.css';
import '../js/materialize.js';

import React from "react";
import { BrowserRouter } from "react-router-dom";

import Login from './login.jsx'

export default props => (
    <div className="container container-height">
        <BrowserRouter>
        <Login />
        </BrowserRouter>
    </div>
)