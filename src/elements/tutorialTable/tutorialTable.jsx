import React from "react";
import "./tutorialTable.css";

export default function TutorialTable({ rowInfo }) {
  if (rowInfo.id % 2 === 0) {
    return (
      <React.Fragment>
        <tr className="text-center active-row p-5">
          <td>{rowInfo.id}</td>
          <td>{rowInfo.topic}</td>
          <td>{rowInfo.source}</td>
          <td>
            <a href={rowInfo.tut_link}>VISIT</a>
          </td>
        </tr>
      </React.Fragment>
    );
  }
  return (
    <React.Fragment>
      <tr className="text-center">
        <td>{rowInfo.id}</td>
        <td>{rowInfo.topic}</td>
        <td>{rowInfo.source}</td>
        <td>
          <a href={rowInfo.tut_link}>VISIT</a>
        </td>
      </tr>
    </React.Fragment>
  );
}
