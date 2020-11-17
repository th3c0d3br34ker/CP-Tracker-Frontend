const { makeStyles } = require("@material-ui/core");

const contactStyles = makeStyles({
  root: {
    width: `33%`,
    textAlign: `center`,
  },
  heading: {
    textAlign: `center`,
  },
  contactIcon: {
    color: `white`,
    borderRadius: `2.6rem`,
    cursor: `pointer`,
    display: `inline-block`,
    fontSize: ` 1.3rem`,
    height: `2.6rem`,
    lineHeight: `2.6rem`,
    margin: `0 5px`,
    position: `relative`,
    textAlign: `center`,
    // user-select: none,
    width: `2.6rem`,
    marginBottom: `10px`,
    size: `10px`,
  },
});

const Contact = () => {
  const classes = contactStyles();

  const ContactInfo = [
    {
      name: "instagram",
      link: "https://www.instagram.com/cptracks/",
      fontAwesome: "instagram",
    },
    {
      name: "linkedin",
      link: "https://www.linkedin.com/company/cp-tracks/",
      fontAwesome: "linkedin",
    },
    {
      name: "email",
      link: "mailto:cptracksreachout@gmaifl.com",
      fontAwesome: "envelope",
    },
  ];

  return (
    <section className={classes.root}>
      <h3 className={classes.heading}>{`Connect & Contact Us`}</h3>
      <a href={ContactInfo.instagram}>
        <i className={`fab fa-instagram ${classes.contactIcon}`}></i>
      </a>
      <a href={ContactInfo.linkedin}>
        <i className={`fab fa-linkedin ${classes.contactIcon}`}></i>
      </a>
      <a href={ContactInfo.mail}>
        <i className={`fa fa-envelope ${classes.contactIcon}`}></i>
      </a>
    </section>
  );
};

export default Contact;
