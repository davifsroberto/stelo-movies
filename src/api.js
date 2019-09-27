import axios from "axios";

const client = axios.create({
  baseURL: "http://www.mocky.io/v2",
  timeout: 9000,
  headers: { "Content-Type": "application/json" }
});

export default client;
