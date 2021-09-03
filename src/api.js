import axios from "axios";

const api = axios.create({
  baseURL: "https://api.crossref.org/"
});

export default api;
