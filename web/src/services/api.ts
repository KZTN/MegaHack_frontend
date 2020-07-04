import axios from "axios";

const api = axios.create({
  baseURL: "https://megahack2020-server.herokuapp.com",
});

export default api;
