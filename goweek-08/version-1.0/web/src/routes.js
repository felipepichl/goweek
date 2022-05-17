import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Main from './pages/Main';
import SignIn from './pages/SignIn';

export default function Routes() {
  return (
    <>
      <Switch>
        <Route path="/" exact component={SignIn} />
        <Route path="/home" component={Main} />
      </Switch>
    </>
  );
}
