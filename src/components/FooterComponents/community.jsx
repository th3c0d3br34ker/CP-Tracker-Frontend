import { Link } from "react-router-dom";

const { makeStyles } = require("@material-ui/core");

const communityStyles = makeStyles({
  root: {
    width: `33%`,
  },
  heading: {
    textAlign: `center`,
  },
  link: {
    padding: `8px`,
    textAlign: `center`,
    margin: 0,
    color: `white`,
    textDecoration: `none`,
  },
});

const Community = () => {
  const classes = communityStyles();

  const CommunityInfo = [
    {
      id: 1,
      name: "Home",
      link: "/",
    },
    {
      id: 2,
      name: "Practice",
      link: "/",
    },
    {
      id: 3,
      name: "About Us",
      link: "/",
    },
  ];

  return (
    <section className={classes.root}>
      <h3 className={classes.heading}>Creators</h3>

      {CommunityInfo.map(({ id, name, link }) => (
        <p key={id} className={classes.link}>
          <Link to={link} className={classes.link}>
            {name}
          </Link>
        </p>
      ))}
    </section>
  );
};

export default Community;
