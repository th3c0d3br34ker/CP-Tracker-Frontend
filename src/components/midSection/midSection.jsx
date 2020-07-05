import React, { Component } from 'react';
import "./midSection.css";

class MidGreeting extends Component {
  state = {};
  render() {
    return (
        <div className="row justify-content-around p-4 bg-dark text-white">
          <div className="justify-content-between m-3">
            <h2>We help you to practise!</h2>
            <p>
              There is a lot of material out there for learning Coding. So don't
              worry. We have prepared different tracks for learning coding which
              covers all the necessary concepts and questions you have to do for
              mastering it.
            </p>
            <div className="row">
              <div className="col-6">
                <h4>Our Mission</h4>
                <p>
                  To empower each and every student interested in coding with
                  power to code.
                </p>
              </div>
              <div className="col-6">
                <h4>Our Vision</h4>
                <p>
                  To grow this community and level up the coding enviornment
                  that we have in today's world to next level.
                </p>
              </div>
            </div>
          </div>
        </div>

    );
  }
}

export default MidGreeting;
