import api from "./api";

// Place Order
export const placeOrder = () => {
  return api.post("/api/orders");
};

// Get All Orders
export const getOrders = () => {
  return api.get("/api/orders");
};

// Get Order By Id
export const getOrderById = (id) => {
  return api.get(`/api/orders/${id}`);
};