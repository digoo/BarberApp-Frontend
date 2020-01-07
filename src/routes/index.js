import React from 'react';
import { Switch } from 'react-router-dom';
// Now, Route is imported from Route file
// import { Switch, Route } from 'react-router-dom';
import Route from './Route';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';

import Dashboard from '../pages/Dashboard';
import Profile from '../pages/Profile';

export default function routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/register" component={SignUp} />

      <Route path="/dashboard" component={Dashboard} isPrivate />
      <Route path="/profile" component={Profile} isPrivate />

      {/* Route is not existent */}
      <Route path="/" component={() => <h1>404 not found</h1>} />
    </Switch>
  );
}
