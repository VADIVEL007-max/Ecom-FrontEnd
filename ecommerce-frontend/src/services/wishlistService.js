import api from "./api";

export const toggleWishlist = async (productId) => {
  const response = await api.post("/api/wishlist", {
    productId,
  });

  return response.data;
};

export const getWishlist = async () => {
  const response = await api.get("/api/wishlist");
  return response.data;
};