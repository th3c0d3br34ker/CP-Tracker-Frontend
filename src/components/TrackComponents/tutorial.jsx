import { Fragment, useEffect, useState } from "react";

import { Table } from "@material-ui/core";
import axios from "../../axios";

const TutorialTable = ({ rowInfo }) => {
  const { id, topic, source, tut_link } = rowInfo;
  if (id % 2 === 0) {
    return (
      <tr>
        <td>{id}</td>
        <td>{topic}</td>
        <td>{source}</td>
        <td>
          <a href={tut_link}>VISIT</a>
        </td>
      </tr>
    );
  }
  return (
    <tr>
      <td>{id}</td>
      <td>{topic}</td>
      <td>{source}</td>
      <td>
        <a href={tut_link}>VISIT</a>
      </td>
    </tr>
  );
};

const Tutorial = ({ url }) => {
  const [tutorials, setTutorial] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios({
      method: "GET",
      url: url,
    }).then((response) => {
      console.log(response.data);
      setTutorial(response.data);
      setIsLoading(false);
    });
    //eslint-disable-next-line
  }, []);

  return (
    <Fragment>
      <h2>Tutorials</h2>
      {isLoading ? (
        <h2>Loading</h2>
      ) : (
        <Table>
          <thead>
            <tr>
              <th>Sr.</th>
              <th>Topics</th>
              <th>Source</th>
              <th>Links</th>
            </tr>
          </thead>
          <tbody>
            {tutorials.map((row) => (
              <TutorialTable key={row.id} rowInfo={row} />
            ))}
          </tbody>
        </Table>
      )}
    </Fragment>
  );
};

export default Tutorial;
