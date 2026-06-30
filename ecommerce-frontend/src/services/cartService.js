import api from "./api";

// GET Cart
export const getCart = async () => {
  const token = localStorage.getItem("accessToken");
  return api.get("/api/cart", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

// ADD To Cart
export const addToCart = async (data) => {
  const token = localStorage.getItem("accessToken");
  return api.post("/api/cart", data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

// UPDATE Cart
export const updateCart = async (id, data) => {
  const token = localStorage.getItem("accessToken");
  return api.put(`/api/cart/${id}`, data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

// DELETE Cart
export const deleteCart = async (id) => {
  const token = localStorage.getItem("accessToken");
  return api.delete(`/api/cart/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};



// import api from "./api";

// // GET Cart
// export const getCart = () => {
//   return api.get("/api/cart");
// };

// // ADD To Cart
// export const addToCart = (data) => {
//   return api.post("/api/cart", data);
// };

// // UPDATE Cart
// export const updateCart = (id, data) => {
//   return api.put(`/api/cart/${id}`, data);
// };

// // DELETE Cart
// export const deleteCart = (id) => {
//   return api.delete(`/api/cart/${id}`);
// };