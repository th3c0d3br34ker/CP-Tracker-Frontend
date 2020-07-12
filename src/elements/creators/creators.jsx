import React, { Component } from "react";
import "./creators.css";

class Creators extends Component {
  state = {
    creators: [
      {
        name: "Jainam Desai ",
        linkedin: "https://in.linkedin.com/in/jainam-desai",
        github: "https://github.com/th3c0d3br34ker",
      },
      {
        name: "Harsh Kanani ",
        linkedin: "https://in.linkedin.com/in/harsh-kanani-69a45818b",
        github: "https://github.com/harshkanani014",
      },
      {
        name: "Aayush Chodvadiya ",
        linkedin: "https://in.linkedin.com/in/aayush-chodvadiya-9122b418b",
        github: "https://github.com/aayush1607",
      },
    ],
  };
  render() {
    return (
      <div className="col-3 justify-content-start">
        <div className="d-flex flex-column text-white">
          <h5>Creators</h5>
          {this.state.creators.map((creator) => (
            <p className="d-print-none" key={creator}>
              {creator.name}
              <a
                href={creator.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="icon-button linkedin"
              >
                <i className="fa fa-linkedin"></i>
              </a>
              <a
                href={creator.github}
                className="icon-button github"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa fa-github"></i>
              </a>
            </p>
          ))}
        </div>
      </div>
    );
  }
}

export default Creators;
