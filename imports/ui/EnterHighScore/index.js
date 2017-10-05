import React, { Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data'; // eslint-disable-line
import { Meteor } from 'meteor/meteor'; // eslint-disable-line

class EnterHighScore extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      name: '',
      score: 0,
    };
  }
  handleSubmit(event) {
    event.preventDefault();
    const { name, score } = this.state;
    Meteor.call('scores.insert', name, parseInt(score, 10));
  }
  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value.trim() });
  }
  render() {
    return (
      <div>
        <form className="new-score" onSubmit={this.handleSubmit}>
          <input type="text" name="name" onChange={this.handleChange} maxLength="3" />
          <input type="text" name="score" onChange={this.handleChange} />
          <input type="submit" />
        </form>
      </div>
    );
  }
}

export default EnterHighScore;