import axios from "axios";

const instance = axios.create({
  baseURL:
    "https://cp-tracker.herokuapp.com/api",
});

export default instance;
