import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import Dashboard from '../components/Dashboard'

export const AppRoute = () => (
    <Router>
        <Route exact path="/" component={Dashboard} />
    </Router>
);