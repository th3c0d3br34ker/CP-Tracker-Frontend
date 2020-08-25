import React, { Component } from "react";
import "./creators.css";

class Creators extends Component {
  state = {
    creators: [
      {
        id: 1,
        name: "Jainam Desai ",
        linkedin: "https://in.linkedin.com/in/jainam-desai",
        github: "https://github.com/th3c0d3br34ker",
      },
      {
        id: 2,
        name: "Harsh Kanani ",
        linkedin: "https://in.linkedin.com/in/harsh-kanani-69a45818b",
        github: "https://github.com/harshkanani014",
      },
      {
        id: 3,
        name: "Aayush Chodvadiya ",
        linkedin: "https://in.linkedin.com/in/aayush-chodvadiya-9122b418b",
        github: "https://github.com/aayush1607",
      },
    ],
  };
  render() {
    return (
      <div className="d-flex flex-column text-center pt-2">
        <h5>Creators</h5>
        {this.state.creators.map((creator) => (
          <p className="d-print-none" key={creator.id}>
            {creator.name}
            <a
              href={creator.linkedin}
              target="_blank"
              id
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
    );
  }
}

export default Creators;
