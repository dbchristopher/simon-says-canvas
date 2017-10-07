/* global createjs, window, addEventListener, requestAnimationFrame */

import React, { Component } from 'react';
import 'createjs-easeljs';
import 'createjs-soundjs';
import styled from 'styled-components';
import { flow } from 'lodash';

function degreesToRadians(degrees) {
  return (degrees * Math.PI) / 180;
}


const Canvas = styled.canvas`
  position: absolute;
  left: 0;
  top: 0;
`;

class SimonSays extends Component {
  constructor(props) {
    super(props);
    this.setCanvasDimensions = this.setCanvasDimensions.bind(this);
    this.measureBrowser = this.measureBrowser.bind(this);
    this.loadGraphics = this.loadGraphics.bind(this);
    this.state = {
      width: 0,
      height: 0,
    };
  }

  componentDidMount() {
    const setStage = flow([this.measureBrowser, this.setCanvasDimensions, this.loadGraphics]);

    requestAnimationFrame(setStage);
    addEventListener('resize', setStage);
  }

  setCanvasDimensions() {
    const canvas = this.canvas;
    canvas.width = this.state.width;
    canvas.height = this.state.height;
  }

  measureBrowser() {
    this.setState({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  }

  loadGraphics() {
    const stage = new createjs.Stage(this.canvas);
    const circle = new createjs.Shape();
    circle.graphics.beginFill('DeepSkyBlue').drawCircle(0, 0, 50);
    circle.x = 100;
    circle.y = 100;
    stage.addChild(circle);
    stage.update();

    const graphics = new createjs.Graphics()
      .beginFill('#ff0000')
      .beginStroke('#000000')
      .moveTo(200, 200)
      .arc(200, 200, 100, degreesToRadians(180), degreesToRadians(270), true)
      .lineTo(400, 100)
      .arc(200, 200, 200, degreesToRadians(180), degreesToRadians(270), false)
      .closePath();
    const shape = new createjs.Shape(graphics);
    stage.addChild(shape);
    stage.update();
  }

  render() {
    return (
      <div>
        <Canvas innerRef={(el) => { this.canvas = el; }} />
      </div>
    );
  }
}

export default SimonSays;