import api from "./api";

// Get Logged In User Profile
export const getProfile = () => {
  return api.get("/api/user/profile");
};