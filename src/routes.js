import React from 'react';
import { Router, Route } from 'react-router';

import App from './App';
import City1 from './pages/City1';

const Routes = (props) => (
  <Router {...props}>
    <Route path="/" component={App}>
        <Route path="/city1" component={City1} />
        
    </Route>
  </Router>
);

export default Routes;