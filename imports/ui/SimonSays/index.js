/* global createjs */

import React, { Component } from 'react';
import 'createjs-easeljs';

class SimonSays extends Component {
  componentDidMount() {
    const stage = new createjs.Stage(this.canvas);
    const circle = new createjs.Shape();
    circle.graphics.beginFill('DeepSkyBlue').drawCircle(0, 0, 50);
    circle.x = 100;
    circle.y = 100;
    stage.addChild(circle);
    stage.update();
  }
  render() {
    return (
      <div>
        <canvas ref={(el) => { this.canvas = el; }} width="700" height="500" />
      </div>
    );
  }
}

export default SimonSays;