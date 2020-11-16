import {
  AppBar,
  List,
  ListItem,
  ListItemText,
  Toolbar,
} from "@material-ui/core";

import Logo from "../assets/logo.png";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  navDisplayFlex: {
    display: `flex`,
    justifyContent: `flex-end`,
    width: `100%`,
  },
  linkText: {
    textDecoration: `none`,
    textTransform: `uppercase`,
    color: `white`,
  },
  appBar: {
    backgroundColor: `#080808`,
  },
  logo: {
    height: `42px`,
    borderRadius: `8px`,
  },
});

const navLinks = [
  { title: `cp - Tracks`, path: `/` },
  { title: `about us`, path: `/about-us` },
  { title: `contact`, path: `/contact` },
];

const Header = () => {
  const classes = useStyles();

  return (
    <AppBar position="static" className={classes.appBar}>
      <Toolbar>
        <img alt="logo" src={Logo} className={classes.logo} />
        <List
          component="nav"
          aria-labelledby="main navigation"
          className={classes.navDisplayFlex}
        >
          {navLinks.map(({ title, path }) => (
            <a href={path} key={title} className={classes.linkText}>
              <ListItem button>
                <ListItemText primary={title} />
              </ListItem>
            </a>
          ))}
        </List>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
