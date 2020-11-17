import Container from "@material-ui/core/Container";
import Divider from "@material-ui/core/Divider";
import { Fragment } from "react";
import Posts from "../components/posts";
import makeStyles from "@material-ui/styles/makeStyles";

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
      <Posts className={classes.root} />
      <HomeBody />
    </Fragment>
  );
};

export default Home;
