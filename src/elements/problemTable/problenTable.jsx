import React from "react";
import "./problemTable.css";

export default function ProblemTable({ rowInfo }) {
  if (rowInfo.id % 2 === 0) {
    return (
      <React.Fragment>
        <tr className="active-row text-center">
          <td>{rowInfo.id}</td>
          <td>{rowInfo.topic}</td>
          <td>
            <a href="https://www.google.com">{rowInfo.link}</a>
          </td>
          <td>
            <a href="https://www.google.com">{rowInfo.solution}</a>
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
        <td>
          <a href="https://www.google.com">{rowInfo.link}</a>{" "}
        </td>
        <td>
          <a href="https://www.google.com">{rowInfo.solution}</a>
        </td>
      </tr>
    </React.Fragment>
  );
}
