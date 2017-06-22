import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { Motion, spring } from 'react-motion';


export default class Demo extends Component {
  constructor(props) {
    super(props);
    this.state = {open: false};
  };

  handleMouseDown = () => {
    this.setState({open: !this.state.open});
  };

  handleTouchStart = (e) => {
    e.preventDefault();
    this.handleMouseDown();
  };

  render() {
    return (
      <div>
        <button
          onMouseDown={this.handleMouseDown}
          onTouchStart={this.handleTouchStart}>
          Toggle
        </button>

        <Motion style={{x: spring(this.state.open ? 400 : 0)}}>
          {({x}) =>
            // children is a callback which should accept the current value of
            // `style`
            <div className="demo0">
              <div className="demo0-block" style={{
                transform: `translate3d(${x}px, 0, 0)`,
              }} />
            </div>
          }
        </Motion>
      </div>
    );
  };
}