import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Categories from '../components/Categories';

export default function Routes() {
    return (
        <Router>
            <Switch>
                <Route path="/" component={Categories} exact />
            </Switch>
        </Router>
    )
}
