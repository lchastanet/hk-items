import axios from "axios";

const instance = axios.create({
  baseURL: import.meta.env.VITE_PROD_URL ?? "http://localhost:5500",
});

export default instance;
