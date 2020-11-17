import { Fragment, useEffect, useState } from "react";

import { Table } from "@material-ui/core";
import axios from "../../axios";

const ProblemTable = ({ rowInfo }) => {
  const {
    id,
    topic,
    difficulty_level,
    prob_link,
    prob_name,
    sol_link,
  } = rowInfo;

  if (id % 2 === 0) {
    return (
      <tr className="active-row text-center">
        <td>{id}</td>
        <td>{topic}</td>
        <td>{difficulty_level}</td>
        <td>
          <a href={prob_link}>{prob_name}</a>
        </td>
        <td>
          <a href={sol_link}>SOLUTION</a>
        </td>
      </tr>
    );
  }
  return (
    <tr>
      <td>{id}</td>
      <td>{topic}</td>
      <td>{difficulty_level}</td>
      <td>
        <a href={prob_link}>{prob_name}</a>
      </td>
      <td>
        <a href={sol_link}>SOLUTION</a>
      </td>
    </tr>
  );
};

const Problems = ({ url }) => {
  const [problems, setProblems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios({
      method: "GET",
      url: url,
    }).then((response) => {
      console.log(response.data);
      setProblems(response.data);
      setIsLoading(false);
    });
    //eslint-disable-next-line
  }, []);

  return (
    <Fragment>
      <h2>Problems</h2>
      {isLoading ? (
        <h2>Loading</h2>
      ) : (
        <Table>
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
            {problems.map((row) => (
              <ProblemTable key={row.id} rowInfo={row} />
            ))}
          </tbody>
        </Table>
      )}
    </Fragment>
  );
};

export default Problems;
