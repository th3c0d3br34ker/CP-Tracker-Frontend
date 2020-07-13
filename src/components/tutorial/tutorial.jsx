import React, { Component } from "react";

import TutorialTable from "../../elements/tutorialTable/tutorialTable.jsx";

import BackButton from "../../elements/backButton/backButton.jsx";

class Tutorial extends Component {
  state = {
    rowsForTutorials: [
      {
        id: 1,
        topic: "Maths",
        link: "link1",
      },
      {
        id: 2,

        topic: "arrays",
        link: "link2",
      },
      {
        id: 3,

        topic: "recursion",
        link: "link3",
      },
    ],
  };

  render() {
    return (
      <div className="p-5">
        <h2>Tutorials</h2>
        <table class="content-table">
          <thead>
            <tr>
              <th>Sr.</th>
              <th>Topics</th>
              <th>Links</th>
            </tr>
          </thead>
          <tbody>
            {this.state.rowsForTutorials.map((row) => (
              <TutorialTable key={row.id} rowInfo={row} />
            ))}
          </tbody>
        </table>
        <BackButton />
      </div>
    );
  }
}

export default Tutorial;
