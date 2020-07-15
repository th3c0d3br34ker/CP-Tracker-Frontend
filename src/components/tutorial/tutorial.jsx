import React, { Component } from "react";
import axios from "axios";
import { Container } from "react-bootstrap";

import TutorialTable from "../../elements/tutorialTable/tutorialTable.jsx";

class Tutorial extends Component {
  state = {
    rowsTutorials: [],
  };
  componentDidMount() {
    axios
      .get(this.props.tutorial)
      .then((response) => {
        console.log(response.data);
        this.setState({ rowsTutorials: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }
  render() {
    return (
      <Container className="p-5">
        <h2>Tutorials</h2>
        <table className="content-table">
          <thead>
            <tr>
              <th>Sr.</th>
              <th>Topics</th>
              <th>Source</th>
              <th>Links</th>
            </tr>
          </thead>
          <tbody>
            {this.state.rowsTutorials.map((row) => (
              <TutorialTable key={row.id} rowInfo={row} />
            ))}
          </tbody>
        </table>
      </Container>
    );
  }
}

export default Tutorial;
