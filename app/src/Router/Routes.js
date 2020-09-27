import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";

import Home from "../Pages/Home/Home";
import Editaare from "../Pages/Editaare/Editaare";
import history from '../history';

export default class Routes extends Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/Editaare" component={Editaare} />
                    {/* <Route path="/Contact" component={Contact} /> */}
                    {/* <Route path="/Products" component={Products} /> */}
                </Switch>
            </Router>
        )
    }
}