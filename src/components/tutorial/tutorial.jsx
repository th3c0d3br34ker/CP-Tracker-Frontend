import React, { Component } from "react";
import axios from "axios";
import { Container, Row } from "react-bootstrap";

import TutorialTable from "../../elements/tutorialTable/tutorialTable.jsx";

class Tutorial extends Component {
  state = {
    rowsTutorials: [],
  };
  componentDidMount() {
    axios
      .get(this.props.tutorial)
      .then((response) => {
        this.setState({ rowsTutorials: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }
  render() {
    return (
      <Container className="p-4">
        <h2 className="text-center p-2">Tutorials</h2>
        <Row>
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
        </Row>
      </Container>
    );
  }
}

export default Tutorial;
