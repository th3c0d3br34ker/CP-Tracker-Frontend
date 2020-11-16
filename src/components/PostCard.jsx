import { Button, Card, CardMedia, Typography } from "@material-ui/core";

import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    margin: `10px`,
    padding: 16,
    maxWidth: `300px`,
    display: `flex`,
    flexDirection: `column`,
    justifyContent: `space-evenly`,
    border: `1px solid black`,
    boxShadow: `4px 4px 20px 0 rgba(0,0,0,0.8)`,
  },
  media: {
    height: `180px`,
    width: `320px`,
    objectFit: `fill`,
    margin: `auto`,
    transform: `translate(-12px, -14px)`,
    border: `1px solid black`,
  },
  link: {
    textDecoration: `none`,
    color: `#1c1c1c`,
    padding: 4,
  },
  button: {
    width: `fit-content`,
    margin: `40px auto 10px auto`,
  },
  body: {
    margin: `auto`,
    padding: 8,
    height: 60,
  },
  heading: {
    fontSize: 24,
    padding: 8,
    margin: `auto`,
    width: `100%`,
  },
});

const LeftArrow = () => (
  <i className="fa fa-arrow-right" aria-hidden="true"></i>
);

const PostCard = ({ cardInfo }) => {
  const classes = useStyles();

  const { heading, image, alt, text, link } = cardInfo;
  return (
    <Card className={classes.root}>
      <CardMedia
        component="img"
        image={image}
        title={alt}
        className={classes.media}
      />
      <Typography component="h1" className={classes.heading}>
        {heading}
      </Typography>
      <Typography component="p" className={classes.body}>
        {text}
      </Typography>
      <Button variant="outlined" color="inherit" className={classes.button}>
        <Link to={link} className={classes.link}>
          {`${heading} `}
          <LeftArrow />
        </Link>
      </Button>
    </Card>
  );
};

export default PostCard;