import { Container, Divider, makeStyles } from "@material-ui/core";

import { Fragment } from "react";
import Posts from "../components/posts";

const useStyles = makeStyles({
  root: {
    display: `flex`,
    flexWrap: `wrap`,
    justifyContent: `flex-start`,
    margin: `auto`,
  },
  divider: {
    height: "2px",
    marginTop: "24px",
    backgroundColor: "#1c1c1c",
  },
});

const HomeBody = () => {
  const classes = useStyles();

  return (
    <Container>
      <Divider className={classes.divider} />
      <h1>Body</h1>
    </Container>
  );
};

const Home = () => {
  const classes = useStyles();

  return (
    <Fragment>
      <h1>Home</h1>
      <Posts className={classes.root} />
      <HomeBody />
    </Fragment>
  );
};

export default Home;
