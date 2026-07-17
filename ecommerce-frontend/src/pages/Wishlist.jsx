import { useEffect, useState } from "react";
import { getWishlist, toggleWishlist } from "../services/wishlistService";
import ProductCard from "../components/ProductCard";
// redux tool
import { useDispatch, useSelector } from "react-redux";
import { setWishlist } from "../redux/wishlistSlice";

function Wishlist() {

  const dispatch = useDispatch();

  const wishlistProducts = useSelector((state) => state.wishlist.wishlistItems);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchWishlist();
  }, []);

  const fetchWishlist = async () => {
    try {
      const response = await getWishlist();

      dispatch(setWishlist(response.data));

    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

const handleRemove = (productId) => {
  setWishlistProducts(prev =>
    prev.filter(item => item.product.id !== productId)
  );
};
  if (loading) {
    return <h1>Loading...</h1>;
  }

 return (
  <div className="min-h-screen bg-gray-50">
    {/* Header */}
    {/* <div className="bg-gradient-to-r from-green-200 via-green-200 to-green-100 text-white py-12 shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl text-black font-bold flex items-center gap-3">
          ❤️ My Wishlist
        </h1>

        <p className="mt-2 text-black text-lg">
          Save your favourite products and purchase them later.
        </p>

        <div className="mt-5 inline-flex items-center gap-2 bg-black backdrop-blur-md px-5 py-2 rounded-full">
          <span className="font-semibold">
            {wishlistProducts.length}
          </span>
          <span>
            {wishlistProducts.length === 1
              ? "Product"
              : "Products"}
          </span>
        </div>
      </div>
    </div> */}

    {/* Body */}
    <div className="max-w-7xl mx-auto px-4 py-10">

      {wishlistProducts.length === 0 ? (

        <div className="flex flex-col items-center justify-center py-24 bg-white rounded-2xl shadow">

          <div className="text-7xl mb-5">❤️</div>

          <h2 className="text-3xl font-bold text-gray-800">
            Your Wishlist is Empty
          </h2>

          <p className="text-gray-500 mt-3 text-center max-w-md">
            Save products that you love.
            They will appear here so you can
            purchase them later.
          </p>

          <a
            href="/products"
            className="mt-8 px-8 py-3 rounded-full bg-red-500 hover:bg-red-600 text-white font-semibold transition"
          >
            Continue Shopping
          </a>

        </div>

      ) : (

        <>
          <div className="flex justify-between items-center mb-8">

            <h2 className="text-2xl font-bold text-gray-800">
              Saved Products
            </h2>

            <span className="bg-red-100 text-red-600 px-4 py-2 rounded-full font-semibold">
              {wishlistProducts.length} Items
            </span>

          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">

            {wishlistProducts.map((item) => (
              <ProductCard
                key={item.id}
                product={item.product}
                onWishlistToggle={handleRemove}
              />
            ))}

          </div>
        </>

      )}

    </div>
  </div>
);
}

export default Wishlist;