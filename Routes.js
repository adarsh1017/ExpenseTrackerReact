// Routes.js

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SignupScreen from './SignupScreen';
import UpdateProfileScreen from './UpdateProfileScreen';

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/signup" component={SignupScreen} />
        <Route path="/update-profile" component={UpdateProfileScreen} />
        <Route path="/" component={SignupScreen} />
      </Switch>
    </Router>
  );
};

export default Routes;

