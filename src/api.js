import axios from "axios";

const client = axios.create({
  baseURL: "http://localhost:3095",
  timeout: 9000,
  headers: { "Content-Type": "application/json" }
});

export default client;
