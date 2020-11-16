import axios from "axios";

const instance = axios.create({
  baseURL:
    "https://cors-anywhere.herokuapp.com/https://cp-tracker.herokuapp.com/api",
});

export default instance;
