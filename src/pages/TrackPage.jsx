import { Container, Divider, makeStyles } from "@material-ui/core";

import Problem from "../components/TrackComponents/problems.jsx";
import Tutorial from "../components/TrackComponents/tutorial.jsx";
import { routes } from "../util.js";

const useStyles = makeStyles({
  divider: {
    height: "2px",
    marginTop: "24px",
    marginBottom: "24px",
    backgroundColor: "#1c1c1c",
  },
});

const Track = ({ match }) => {
  const classes = useStyles();

  const url = routes[match.params.track];
  return (
    <Container>
      <Tutorial url={url.tutorial} />
      <Divider className={classes.divider} />
      <Problem url={url.problem} />
    </Container>
  );
};

export default Track;
