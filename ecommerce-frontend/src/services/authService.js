import api from "./api"

// Login API
export const login = (loginDetails) => {
  return api.post("/api/user/login", loginDetails);
};

// Register API
export const register = (registerDetails) => {
  return api.post("/api/user/register", registerDetails);
};