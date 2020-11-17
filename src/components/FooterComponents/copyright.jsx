import { makeStyles } from "@material-ui/core";

const copyrightStyles = makeStyles({
  root: {
    width: `100%`,
    textAlign: `center`,
    fontSize: `14px`,
  },
});

const Copyright = () => {
  const classes = copyrightStyles();

  return (
    <p className={classes.root}>
      <span>Curated with 🤍 by CP - Tracks</span>
    </p>
  );
};

export default Copyright;
