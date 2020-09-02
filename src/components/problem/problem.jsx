import { Container, Row } from "react-bootstrap";
import React, { Component } from "react";

import Axios from "axios";
import BackButton from "../../elements/backButton/backButton.jsx";
import Loading from "../../elements/loading/loading.jsx";
import ProblemTable from "../../elements/problemTable/problenTable.jsx";

class Problem extends Component {
  state = {
    rowsProblems: [],
  };
  componentDidMount() {
    this.setState({ isLoading: true }, () => {
      Axios.get(this.props.problem)
        .then((response) => {
          this.setState({ rowsProblems: response.data, isLoading: false });
        })
        .catch((error) => {
          console.log(error);
        });
    });
  }

  render() {
    if (this.state.rowsProblems && this.state.isLoading) {
      return (
        <div className="center-div">
          <Loading />
        </div>
      );
    }

    if (this.state.rowsProblems.length > 0) {
      return (
        <Container className="p-4">
          <h2 className="text-center p-2">Problems</h2>
          <Row>
            <table className="content-table">
              <thead>
                <tr>
                  <th>Sr.</th>
                  <th>Topics</th>
                  <th>Difficulty Level</th>
                  <th>Problem Name</th>
                  <th>Solution</th>
                </tr>
              </thead>
              <tbody>
                {this.state.rowsProblems.map((row) => (
                  <ProblemTable key={row.id} rowInfo={row} />
                ))}
              </tbody>
            </table>
          </Row>
          <Row>
            <BackButton />
          </Row>
        </Container>
      );
    } else {
      return null;
    }
  }
}

export default Problem;
