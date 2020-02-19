import React from 'react'
import {Route, Switch} from 'react-router-dom'
import { Home } from './pages'
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => (
  <Switch>
    <Route path="/">
      <Home />
    </Route>
    <Route path="/home">
      <Home />
    </Route>
  </Switch>
);

export default App;
