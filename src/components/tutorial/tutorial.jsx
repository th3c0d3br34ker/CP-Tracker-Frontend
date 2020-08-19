import React, { Component } from "react";
import Axios from "axios";
import { Container, Row } from "react-bootstrap";

import TutorialTable from "../../elements/tutorialTable/tutorialTable.jsx";
import Loading from "../../elements/loading/loading.jsx";

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
    return (
      <Container className="p-4">
        <h2 className="text-center p-2">Tutorials</h2>
        {this.state.isLoading ? (
          <div className="center-div">
            <Loading />
          </div>
        ) : (
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
        )}
      </Container>
    );
  }
}

export default Tutorial;
