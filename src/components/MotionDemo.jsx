import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { Motion, spring } from 'react-motion';


export default class Demo extends Component {

  render() {
    return (
      <div>
        <Motion defaultStyle={{x: 0, y: 0}} style={{x: spring(100), y: spring(400)}}>
          {value => <div style={{backgroundColor: 'red', height: value.y, width: value.y, position: 'absolute', top: value.x, left: value.x}}> {value.x}</div>}
        </Motion>
      </div>
    );
  };
}