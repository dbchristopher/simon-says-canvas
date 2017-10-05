import { Mongo } from 'meteor/mongo'; // eslint-disable-line
import { Meteor } from 'meteor/meteor'; // eslint-disable-line
import { check, Match } from 'meteor/check'; // eslint-disable-line

export const Scores = new Mongo.Collection('scores');

Meteor.methods({
  'scores.insert': (name, score) => {
    check(name, String);
    check(score, Number);
    if (isNaN(score)) {
      throw new Match.Error('invalid score');
    }
    Scores.insert({
      name: name.substring(0, 3),
      score,
      createdAt: new Date(),
    });
  },
  'scores.remove': (scoreId) => {
    check(scoreId, String);
    Scores.remove(scoreId);
  },
});