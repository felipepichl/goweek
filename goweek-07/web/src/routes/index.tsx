import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';

import Route from './Route';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import Home from '../pages/Home';
import Post from '../pages/Post';
import Profile from '../pages/Profile';

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={SignIn} />
        <Route path="/register" component={SignUp} />

        <Route path="/home" component={Home} isPrivate />
        <Route path="/post" component={Post} isPrivate />
        <Route path="/profile" component={Profile} isPrivate />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
