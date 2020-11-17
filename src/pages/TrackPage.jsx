import { Container } from "@material-ui/core";
import Problem from "../components/TrackComponents/problems.jsx";
import Tutorial from "../components/TrackComponents/tutorial.jsx";
import { routes } from "../util.js";

const Track = ({ match }) => {
  const url = routes[match.params.track];
  return (
    <Container>
      <h1>Track Page: {match.params.track}</h1>
      <h1>URL: {match.url}</h1>
      <Tutorial url={url.tutorial} />
      <Problem url={url.problem} />
    </Container>
  );
};

export default Track;
