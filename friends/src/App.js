import React from 'react';
import {Login} from './components/LoginPage';
import {PrivateRoute } from './components/PrivateRoute';
import {FriendsList} from './components/FriendsList';

import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <PrivateRoute exact path="/friends" component={FriendsList} />
          <Route path="/login" component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
