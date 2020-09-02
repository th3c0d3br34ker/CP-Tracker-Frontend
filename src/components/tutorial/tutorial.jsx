import { Container, Row } from "react-bootstrap";
import React, { Component } from "react";

import Axios from "axios";
import Loading from "../../elements/loading/loading.jsx";
import TutorialTable from "../../elements/tutorialTable/tutorialTable.jsx";

class Tutorial extends Component {
  state = {
    rowsTutorials: [],
    isLoading: true,
  };

  componentDidMount() {
    this.setState({ isLoading: true }, () => {
      Axios.get(this.props.tutorial)
        .then((response) => {
          this.setState({ rowsTutorials: response.data, isLoading: false });
        })
        .catch((error) => {
          console.log(error);
        });
    });
  }

  render() {
    if (this.state.rowsTutorials && this.state.isLoading) {
      return (
        <div className="center-div">
          <Loading />
        </div>
      );
    }
    if (this.state.rowsTutorials.length > 0) {
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
    } else {
      return null;
    }
  }
}

export default Tutorial;
