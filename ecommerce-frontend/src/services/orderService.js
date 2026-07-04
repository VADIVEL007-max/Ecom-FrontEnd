import api from "./api";

// Place Order
export const placeOrder = (data) => {
  return api.post("/api/orders", data);
};

// Get All Orders
export const getOrders = () => {
  return api.get("/api/orders");
};

// Get Order By Id
export const getOrderById = (id) => {
  return api.get(`/api/orders/${id}`);
};