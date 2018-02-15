import React from 'react';
import './App.css';
import { compose } from 'recompose'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { ProgressMenu } from './screen'
const enchance = compose();

export default enchance((props) => (
  <Router>
    <Switch>
      <Route exact path='/' component={ProgressMenu} />
    </Switch>
  </Router>
))
