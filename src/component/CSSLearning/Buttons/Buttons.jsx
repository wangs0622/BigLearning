/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';

export default class Buttons extends Component {

  render() {
    return (
      <div
        id="learningButtonCss"
      >
        <div id="coolButtons">
          <button className="cssButton">button</button>
          <button className="cssButton">button</button>
          <button className="cssButton">button</button>
        </div>

        <div id="buttons3d">
          <button id="button3d_1" href="#">button</button>
        </div>
      </div>
    )
  }

}

