import React, { Component } from 'react';
import { partial } from 'lodash';
import { createContainer } from 'meteor/react-meteor-data'; // eslint-disable-line
import EnterHighScore from '../EnterHighScore';
import { Scores } from '../../api/scores';

function deleteScore(_id, event) {
  event.preventDefault();
  Meteor.call('scores.remove', _id);
}

class Leaderboard extends Component {
  constructor(props) {
    super(props);
    this.renderHighScores = this.renderHighScores.bind(this);
  }
  renderHighScores() {
    return this.props.scores.map((s) => {
      const { name, score, createdAt, _id } = s;
      const date = `${createdAt.getMonth() + 1}/${createdAt.getDate()}/${createdAt.getFullYear()}`;
      return (
        <div key={_id} className="score">
          {name}
          {score}
          {date}
          <a href="#" onClick={partial(deleteScore, _id)}>x</a>
        </div>
      );
    });
  }
  render() {
    return (
      <div>
        Leaderboard!!
        {this.renderHighScores()}
        <EnterHighScore />
      </div>
    );
  }
}

export default createContainer(() => {
  return {
    scores: Scores.find({}, { sort: { score: -1 } }).fetch(),
  };
}, Leaderboard);