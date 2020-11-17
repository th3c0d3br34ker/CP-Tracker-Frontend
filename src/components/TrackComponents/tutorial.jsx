import { Fragment, useEffect, useState } from "react";
import { makeStyles, withStyles } from "@material-ui/core";

import Paper from "@material-ui/core/Paper";
import { Skeleton } from "@material-ui/lab";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import axios from "../../axios";

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

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(even)": {
      backgroundColor: `#d1d5da`,
    },
  },
}))(TableRow);

const TutorialTable = ({ rowInfo }) => {
  const { id, topic, source, tut_link } = rowInfo;

  return (
    <StyledTableRow>
      <TableCell align="center">{id}</TableCell>
      <TableCell align="center">{topic}</TableCell>
      <TableCell align="center">{source}</TableCell>
      <TableCell align="center">
        <a href={tut_link}>VISIT</a>
      </TableCell>
    </StyledTableRow>
  );
};

const Tutorial = ({ url }) => {
  const classes = useStyles();
  const [tutorials, setTutorial] = useState([1, 2, 3, 4]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios({
      method: "GET",
      url: url,
    }).then((response) => {
      setTutorial(response.data);
      setIsLoading(false);
    });
    //eslint-disable-next-line
  }, []);

  return (
    <TableContainer component={Paper} className={classes.tableContainer}>
      <h2 className={classes.heading}>Tutorials</h2>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell align="center">Sr.</TableCell>
            <TableCell align="center">Topics</TableCell>
            <TableCell align="center">Source</TableCell>
            <TableCell align="center">Links</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {tutorials.map((row, i) => {
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
                  </StyledTableRow>
                ) : (
                  <TutorialTable key={row.id} rowInfo={row} />
                )}
              </Fragment>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Tutorial;
