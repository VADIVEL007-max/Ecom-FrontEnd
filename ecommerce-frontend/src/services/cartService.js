
import api from "./api";

// GET Cart
export const getCart = () => {
  return api.get("/api/cart");
};

// ADD To Cart
export const addToCart = (data) => {
  return api.post("/api/cart", data);
};

// UPDATE Cart
export const updateCart = (id, data) => {
  return api.put(`/api/cart/${id}`, data);
};

// DELETE Cart
export const deleteCart = (id) => {
  return api.delete(`/api/cart/${id}`);
};