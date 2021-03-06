import React from "react";
import "./problemTable.css";

export default function ProblemTable({ rowInfo }) {
  if (rowInfo.id % 2 === 0) {
    return (
      <React.Fragment>
        <tr className="active-row text-center">
          <td>{rowInfo.id}</td>
          <td>{rowInfo.topic}</td>
          <td>{rowInfo.difficulty_level}</td>
          <td>
            <a href={rowInfo.prob_link}>{rowInfo.prob_name}</a>
          </td>
          <td>
            <a href={rowInfo.sol_link}>SOLUTION</a>
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
        <td>{rowInfo.difficulty_level}</td>
        <td>
          <a href={rowInfo.prob_link}>{rowInfo.prob_name}</a>
        </td>
        <td>
          <a href={rowInfo.sol_link}>SOLUTION</a>
        </td>
      </tr>
    </React.Fragment>
  );
}
