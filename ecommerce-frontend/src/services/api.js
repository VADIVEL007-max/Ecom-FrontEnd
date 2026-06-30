import axios from "axios";

const api = axios.create({
  baseURL: "https://ecom-backend-nmzd.onrender.com/",
});

export default api;