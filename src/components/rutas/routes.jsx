import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";

import selectorHorario, { SelectorHorario }  from "../selector-disponibilidad/index";


export default class Routes extends Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Route path="/selector" component={SelectorHorario} />
                </Switch>
            </Router>
        );
    }
}