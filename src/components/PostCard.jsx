import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import Skeleton from "@material-ui/lab/Skeleton";
import Typography from "@material-ui/core/Typography";
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles({
  root: {
    "margin": `10px`,
    "padding": 16,
    "maxWidth": `300px`,
    "display": `flex`,
    "flexDirection": `column`,
    "justifyContent": `space-evenly`,
    "border": `1px solid black`,
    "boxShadow": `4px 4px 20px 0 rgba(0,0,0,0.8)`,
    "&:hover": {
      boxShadow: `4px 4px 40px 0 rgba(0,0,0,0.8)`,
    },
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
    "width": `fit-content`,
    "margin": `40px auto 10px auto`,
    "backgroundColor": `white`,
    "&:hover": {
      boxShadow: `4px 4px 20px 0 rgba(0,0,0,0.8)`,
    },
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

const PostCard = ({ cardInfo, loading = false }) => {
  const classes = useStyles();

  const { heading, image, alt, text, link } = cardInfo;

  return (
    <Card className={classes.root}>
      {loading ? (
        <Skeleton variant="rect">
          <div className={classes.media}></div>
        </Skeleton>
      ) : (
        <CardMedia
          component="img"
          image={image}
          title={alt}
          className={classes.media}
        />
      )}
      {loading ? (
        <Skeleton width="100%" height="60px" />
      ) : (
        <Typography component="h1" className={classes.heading}>
          {heading}
        </Typography>
      )}

      {loading ? (
        <Skeleton width="100%" height="120px" />
      ) : (
        <Typography component="p" className={classes.body}>
          {text}
        </Typography>
      )}
      {loading ? (
        <Skeleton width="100%" height="40px">
          <div></div>
        </Skeleton>
      ) : (
        <Button
          variant="outlined"
          color="inherit"
          href={link}
          className={classes.button}
        >
          {`${heading} `}
          <LeftArrow />
        </Button>
      )}
    </Card>
  );
};

export default PostCard;
