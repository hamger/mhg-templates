import React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';

import Home from '@/pages/home/home';
import None from '@/pages/none/none';

const routers = [
  {
    name: 'home',
    path: '/',
    component: Home,
    exact: true,
  },
  {
    name: 'none',
    path: '/none',
    component: None,
  },
];

const App = () => (
  <Router>
    <Switch>
      {routers.map(v => (
        <Route
          key={v.name}
          exact={v.exact}
          path={v.path}
          component={v.component}
        />
      ))}
    </Switch>
  </Router>
);

export default App;
