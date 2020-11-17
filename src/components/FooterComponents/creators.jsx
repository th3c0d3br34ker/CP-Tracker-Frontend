import makeStyles from "@material-ui/styles/makeStyles";

const creatorsStyles = makeStyles({
  root: {
    width: `33%`,
  },
  heading: {
    textAlign: `center`,
  },
  link: {
    listStyle: `none`,
    padding: `8px`,
    textAlign: `center`,
    margin: 0,
  },
  iconButton: {
    color: `white`,
    borderRadius: `1.5rem`,
    cursor: `pointer`,
    margin: `0 5px`,
    position: `relative`,
    textAlign: `left`,
    // user-select: none,
    width: `1.5rem`,
  },
});
const Creators = () => {
  const classes = creatorsStyles();

  const CreatorsInfo = [
    {
      id: 1,
      name: "Jainam Desai ",
      linkedin: "https://in.linkedin.com/in/jainam-desai",
      github: "https://github.com/th3c0d3br34ker",
    },
    {
      id: 2,
      name: "Harsh Kanani ",
      linkedin: "https://in.linkedin.com/in/harsh-kanani-69a45818b",
      github: "https://github.com/harshkanani014",
    },
    {
      id: 3,
      name: "Aayush Chodvadiya ",
      linkedin: "https://in.linkedin.com/in/aayush-chodvadiya-9122b418b",
      github: "https://github.com/aayush1607",
    },
  ];

  return (
    <section className={classes.root}>
      <h3 className={classes.heading}>Creators</h3>

      {CreatorsInfo.map(({ id, name, linkedin, github }) => (
        <p key={id} className={classes.link}>
          {name}
          <a
            href={linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className={classes.iconButton}
          >
            <i className="fab fa-linkedin"></i>
          </a>
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className={classes.iconButton}
          >
            <i className="fab fa-github"></i>
          </a>
        </p>
      ))}
    </section>
  );
};

export default Creators;
