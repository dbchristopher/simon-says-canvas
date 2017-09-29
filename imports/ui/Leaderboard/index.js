import React, { Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';

import { Scores } from '../../api/scores.js';

class Leaderboard extends Component {
  constructor(props) {
    super(props);
    this.renderHighScores = this.renderHighScores.bind(this);
  }
  renderHighScores() {
    return this.props.scores.map(score => (
      <div key={score._id} className="score">{score.name} {score.score}</div>
    ));
  }
  render() {
    return (
      <div>
        Leaderboard!!
        {this.renderHighScores()}
      </div>
    );
  }
}

export default createContainer(() => {
  return {
    scores: Scores.find({}).fetch(),
  };
}, Leaderboard);