import React, { Component } from "react";
import axios from "axios";
import { Container } from "react-bootstrap";

import ProblemTable from "../../elements/problemTable/problenTable.jsx";
import BackButton from "../../elements/backButton/backButton.jsx";

class Problem extends Component {
  state = {
    rowsProblems: [],
  };

  componentDidMount() {
    console.log(this.props.problem);
    axios
      .get(this.props.problem)
      .then((response) => {
        console.log(response.data);
        this.setState({ rowsProblems: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <Container className="p-5">
        <h2>Problems</h2>
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
        <BackButton />
      </Container>
    );
  }
}

export default Problem;
