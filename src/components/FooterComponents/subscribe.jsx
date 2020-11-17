import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import Input from "@material-ui/core/Input";
import axios from "../../axios.js";
import makeStyles from "@material-ui/styles/makeStyles";
import { useState } from "react";

const useStyles = makeStyles({
  root: {
    textAlign: `center`,
    margin: `8px`,
    maxWidth: `100%`,
  },
  input: {
    "color": `white`,
    "margin": `8px`,
    "&::after": {
      borderBottom: `2px solid #fff`,
    },
  },
  button: {
    "backgroundColor": `white`,
    "marginLeft": `8px`,
    "&:hover": {
      backgroundColor: `white`,
    },
  },
});

const Subscribe = () => {
  const classes = useStyles();
  const [email, setEmail] = useState("");

  const handleChange = (event) => {
    setEmail(event.target.value);
  };

  const postEmail = () => {
    const body = {
      email: email,
    };
    axios({
      method: "POST",
      url: "/subscribers/",
      data: body,
    })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Container className={classes.root}>
      <h2>Subscribe Newsletter</h2>

      <Input
        id="emailBox"
        placeholder="Enter Your Email Address"
        size="30"
        defaultValue={email}
        onChange={handleChange}
        className={classes.input}
      />
      <Button className={classes.button} onClick={postEmail}>
        Submit
      </Button>
    </Container>
  );
};

export default Subscribe;