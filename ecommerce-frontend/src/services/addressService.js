import api from "./api";

// Get All Addresses
export const getAddresses = () => {
  return api.get("/api/address");
};

// Add Address
export const addAddress = (data) => {
  return api.post("/api/address", data);
};

// Update Address
export const updateAddress = (id, data) => {
  return api.put(`/api/address/${id}`, data);
};

// Delete Address
export const deleteAddress = (id) => {
  return api.delete(`/api/address/${id}`);
};