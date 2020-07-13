import React, { Component } from "react";

import ProblemTable from "../../elements/problemTable/problenTable.jsx";
import BackButton from "../../elements/backButton/backButton.jsx";

class Problem extends Component {
  state = {
    rowsForProblems: [
      {
        id: 1,
        topic: "Maths",
        link: "link1",
        solution: "solution_link",
      },

      {
        id: 2,

        topic: "arrays",
        link: "link2",
        solution: "solution_link",
      },
      {
        id: 3,

        topic: "recursion",
        link: "link3",
        solution: "solution_link",
      },
    ],
  };

  render() {
    return (
      <div className="p-5">
        <h2>Problems</h2>
        <table class="content-table">
          <thead>
            <tr>
              <th>Sr.</th>
              <th>Topics</th>
              <th>Links</th>
              <th>Solutions</th>
            </tr>
          </thead>
          <tbody>
            {this.state.rowsForProblems.map((row) => (
              <ProblemTable key={row.id} rowInfo={row} />
            ))}
          </tbody>
        </table>
        <BackButton />
      </div>
    );
  }
}

export default Problem;
