import React, { Component } from "react";
import Axios from "axios";
import { Container, Row } from "react-bootstrap";

import ProblemTable from "../../elements/problemTable/problenTable.jsx";
import BackButton from "../../elements/backButton/backButton.jsx";
import Loading from "../../elements/loading/loading.jsx";

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
    return (
      <Container className="p-4">
        <h2 className="text-center p-2">Problems</h2>
        {this.state.isLoading ? (
          <div className="center-div">
            <Loading />
          </div>
        ) : (
          <React.Fragment>
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
          </React.Fragment>
        )}
      </Container>
    );
  }
}

export default Problem;
