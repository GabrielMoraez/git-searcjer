import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

/* Pages */
import Home from '../components/pages/Home';
import Search from '../components/pages/Search';

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/Search' component={Search} />
    </Switch>
  </BrowserRouter>
);

export default Router;
