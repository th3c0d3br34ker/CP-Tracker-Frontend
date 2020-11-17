import { Container, Divider, makeStyles } from "@material-ui/core";

import Community from "./FooterComponents/community";
import Contact from "./FooterComponents/contact";
import Copyright from "./FooterComponents/copyright";
import Creators from "./FooterComponents/creators";
import Subscribe from "./FooterComponents/subscribe";

const footerStyles = makeStyles({
  root: {
    height: `380px`,
    backgroundColor: `#1c1c1c`,
    color: `white`,
    padding: `16px`,
    maxWidth: `100%`,
  },
  row: {
    display: `flex`,
  },
  divider: {
    backgroundColor: `#fff`,
    margin: `20px 0`,
  },
});

const Footer = () => {
  const classes = footerStyles();

  return (
    <Container className={classes.root}>
      <Subscribe />
      <Divider className={classes.divider} />
      <div className={classes.row}>
        <Creators />
        <Contact />
        <Community />
      </div>

      <Copyright />
    </Container>
  );
};

export default Footer;
