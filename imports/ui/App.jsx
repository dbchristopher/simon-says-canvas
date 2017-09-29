import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Leaderboard from './Leaderboard';
import SimonSays from './SimonSays';

class App extends Component {
  render() {
    return (
      <div className="container">
        Simon Says, Yo!!
        <Route exact path="/" component={SimonSays} />
        <Route exact path="/leaderboard" component={Leaderboard} />
      </div>
    );
  }
}

export default App;