import { Fragment, useEffect, useState } from "react";

import Paper from "@material-ui/core/Paper";
import Skeleton from "@material-ui/lab/Skeleton";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import axios from "../../axios";
import makeStyles from "@material-ui/styles/makeStyles";
import withStyles from "@material-ui/styles/withStyles";

const useStyles = makeStyles({
  heading: {
    textAlign: `center`,
    borderBottom: `1px solid black`,
    paddingBottom: `28px`,
  },
  tableContainer: {
    margin: `20px 0`,
    border: `2px solid black`,
  },
});

const StyledTableRow = withStyles({
  root: {
    "&:nth-of-type(even)": {
      backgroundColor: `#d1d5da`,
    },
  },
})(TableRow);

const ProblemTable = ({ rowInfo }) => {
  const {
    id,
    topic,
    difficulty_level,
    prob_link,
    prob_name,
    sol_link,
  } = rowInfo;

  return (
    <StyledTableRow>
      <TableCell align="center">{id}</TableCell>
      <TableCell align="center">{topic}</TableCell>
      <TableCell align="center">{difficulty_level}</TableCell>
      <TableCell align="center">
        <a href={prob_link}>{prob_name}</a>
      </TableCell>
      <TableCell align="center">
        <a href={sol_link}>SOLUTION</a>
      </TableCell>
    </StyledTableRow>
  );
};

const Problems = ({ url }) => {
  const classes = useStyles();

  const [problems, setProblems] = useState([1, 2, 3, 4]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios({
      method: "GET",
      url: url,
    }).then((response) => {
      setProblems(response.data);
      setIsLoading(false);
    });
    //eslint-disable-next-line
  }, []);

  return (
    <TableContainer component={Paper} className={classes.tableContainer}>
      <h2 className={classes.heading}>Problems</h2>

      <Table>
        <TableHead>
          <TableRow>
            <TableCell align="center">Sr.</TableCell>
            <TableCell align="center">Topics</TableCell>
            <TableCell align="center">Difficulty Level</TableCell>
            <TableCell align="center">Problem Name</TableCell>
            <TableCell align="center">Solution</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {problems.map((row, i) => {
            return (
              <Fragment key={i}>
                {isLoading ? (
                  <StyledTableRow>
                    <TableCell>
                      <Skeleton width="100%" height="40px" />
                    </TableCell>
                    <TableCell>
                      <Skeleton width="100%" height="40px" />
                    </TableCell>
                    <TableCell>
                      <Skeleton width="100%" height="40px" />
                    </TableCell>
                    <TableCell>
                      <Skeleton width="100%" height="40px" />
                    </TableCell>
                    <TableCell>
                      <Skeleton width="100%" height="40px" />
                    </TableCell>
                  </StyledTableRow>
                ) : (
                  <ProblemTable key={row.id} rowInfo={row} />
                )}
              </Fragment>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Problems;
