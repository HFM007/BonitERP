import axios from "axios";

const api = axios.create({
  baseURL: "http://boniterp.local/api",
});

export default api;