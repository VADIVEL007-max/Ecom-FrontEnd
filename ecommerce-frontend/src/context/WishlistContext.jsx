import { createContext, useContext, useEffect, useState } from "react";
import { getWishlist } from "../services/wishlistService";

const WishlistContext = createContext();

export const WishlistProvider = ({ children }) => {
  const [wishlist, setWishlist] = useState([]);

  const fetchWishlist = async () => {
    try {
      const token = localStorage.getItem("accessToken");

      if (!token) {
        setWishlist([]);
        return;
      }

      const response = await getWishlist();

      // Store only product ids
      const productIds = response.data.map((item) => item.product.id);

      setWishlist(productIds);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchWishlist();
  }, []);

  return (
    <WishlistContext.Provider
      value={{
        wishlist,
        setWishlist,
        fetchWishlist,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
};

export const useWishlist = () => useContext(WishlistContext);