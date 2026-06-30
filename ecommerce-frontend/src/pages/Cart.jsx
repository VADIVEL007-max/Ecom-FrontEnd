// import { Link } from "react-router-dom";
// import { useEffect, useState } from "react";
// // import { getCart } from "../services/cartService";
// import { getCart, updateCart, deleteCart } from "../services/cartService";
// import {
//   ShoppingCart,
//   ArrowLeft,
//   Plus,
//   Minus,
//   Trash2,
// } from "lucide-react";

// function Cart() {

//   const [cartItems, setCartItems] = useState([]);
//   useEffect(() => {
//   fetchCart();
// }, []);

// const fetchCart = async () => {
//   try {
//     const response = await getCart();
//     setCartItems(response.data.data);
//   } catch (error) {
//     console.log(error);
//   }
// };

// const subtotal = cartItems.reduce(
//   (total, item) => total + item.product.price * item.quantity,
//   0
// );
// const tax = subtotal * 0.1;
// //  handle updated quantity
// const handleIncrease = async (item) => {
//   try {
//     await updateCart(item.id, {
//       quantity: item.quantity + 1,
//     });

//     fetchCart();
//   } catch (error) {
//     console.log(error);
//   }
// };
// // handle decrease quantity
// const handleDecrease = async (item) => {
//   try {
//     if (item.quantity === 1) {
//       await deleteCart(item.id);
//     } else {
//       await updateCart(item.id, {
//         quantity: item.quantity - 1,
//       });
//     }

//     fetchCart();
//   } catch (error) {
//     console.log(error);
//   }
// };

// const handleRemove = async (item) => {
//   try {
//     await deleteCart(item.id);
//     fetchCart();
//   } catch (error) {
//     console.log(error);
//   }
// };



// const total = subtotal + tax;
//   return (
//     <div className="min-h-screen bg-gray-100 pt-24 pb-10">
//       <div className="max-w-7xl mx-auto px-4">

//         {/* Header */}
//         <div className="mb-8">
//           <Link
//             to="/products"
//             className="inline-flex items-center gap-2 text-green-600 hover:text-green-700 font-semibold"
//           >
//             <ArrowLeft size={18} />
//             Continue Shopping
//           </Link>

//           <h1 className="text-4xl font-bold mt-4 flex items-center gap-3">
//             <ShoppingCart className="text-green-600" />
//             Shopping Cart
//           </h1>

//           <p className="text-gray-500 mt-2">
//             {cartItems.length} Items in your cart
//           </p>
//         </div>

//         <div className="grid lg:grid-cols-3 gap-6">

//           {/* Left */}
//           <div className="lg:col-span-2 space-y-5">

//             {/* Cart Card */}
//            {cartItems.map((item) => (
//               <div
//                 key={item.id}
//                 className="bg-white rounded-2xl shadow p-5"
//               >
//                 <div className="flex gap-5">

//                   {/* Image */}
//                   <img
//                     src={item.product.image}
//                     alt={item.product.title}
//                     className="w-28 h-28 object-cover rounded-xl"
//                   />

//                   {/* Details */}
//                   <div className="flex-1">

//                     <h2 className="text-xl font-bold">
//                       {item.product.title}
//                     </h2>

//                     <p className="text-gray-500 mt-1">
//                       {item.product.description}
//                     </p>

//                     <h3 className="text-2xl font-bold text-green-600 mt-3">
//                       ₹{item.product.price}
//                     </h3>

//                   </div>

//                   {/* Quantity */}
//                   <div className="flex flex-col items-end justify-between">

//                     <div className="flex items-center border rounded-lg">

//                      <button className="p-2"onClick={() => handleDecrease(item)}>
//                         <Minus size={18} />
//                       </button>

//                       <span className="px-4">
//                         {item.quantity}
//                       </span>

//                       <button className="p-2" onClick={() => handleIncrease(item)}>
//                         <Plus size={18} />
//                       </button>

//                     </div>

//                     <button
//                           onClick={() => handleRemove(item)}
//                           className="text-red-500 hover:text-red-700 flex items-center gap-2"
//                         >
//                           <Trash2 size={18} />
//                           Remove
//                         </button>

//                   </div>

//                 </div>
//               </div>
//             ))}

//           </div>

//           {/* Right */}
//           <div>

//             <div className="bg-white rounded-2xl shadow p-6 sticky top-24">

//               <h2 className="text-2xl font-bold mb-6">
//                 Order Summary
//               </h2>

//               <div className="space-y-3">

//                 <div className="flex justify-between">
//                   <span>Subtotal</span>
//                   <span>₹{subtotal.toLocaleString()}</span>
//                 </div>

//                 <div className="flex justify-between">
//                   <span>Shipping</span>
//                   <span className="text-green-600">
//                     FREE
//                   </span>
//                 </div>

//                 <div className="flex justify-between">
//                   <span>Tax</span>
//                   <span>₹{tax.toLocaleString()}</span>
//                 </div>

//               </div>

//               <hr className="my-5" />

//               <div className="flex justify-between text-xl font-bold">

//                 <span>Total</span>

//                 <span className="text-green-600">
//                   ₹{total.toLocaleString()}
//                 </span>

//               </div>

//               <button className="mt-6 w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-xl font-bold">

//                 Proceed To Checkout

//               </button>

//             </div>

//           </div>

//         </div>

//       </div>
//     </div>
//   );
// }

// export default Cart;


import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
// import { getCart } from "../services/cartService";
import { getCart, updateCart, deleteCart } from "../services/cartService";
import {
  ShoppingCart,
  ArrowLeft,
  Plus,
  Minus,
  Trash2,
} from "lucide-react";

function Cart() {

  const [cartItems, setCartItems] = useState([]);
  useEffect(() => {
  fetchCart();
}, []);

const fetchCart = async () => {
  try {
    const response = await getCart();
    setCartItems(response.data.data);
  } catch (error) {
    console.log(error);
  }
};

const subtotal = cartItems.reduce(
  (total, item) => total + item.product.price * item.quantity,
  0
);
const tax = subtotal * 0.1;
//  handle updated quantity
const handleIncrease = async (item) => {
  try {
    await updateCart(item.id, {
      quantity: item.quantity + 1,
    });

    fetchCart();
  } catch (error) {
    console.log(error);
  }
};
// handle decrease quantity
const handleDecrease = async (item) => {
  try {
    if (item.quantity === 1) {
      await deleteCart(item.id);
    } else {
      await updateCart(item.id, {
        quantity: item.quantity - 1,
      });
    }

    fetchCart();
  } catch (error) {
    console.log(error);
  }
};

const handleRemove = async (item) => {
  try {
    await deleteCart(item.id);
    fetchCart();
  } catch (error) {
    console.log(error);
  }
};

const total = subtotal + tax;

  return (
    <div className="min-h-screen bg-gray-100 pt-20 sm:pt-24 pb-8 sm:pb-10">
      <style>{`
        @keyframes slideInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes slideInLeft {
          from { opacity: 0; transform: translateX(-20px); }
          to { opacity: 1; transform: translateX(0); }
        }

        @keyframes slideInRight {
          from { opacity: 0; transform: translateX(20px); }
          to { opacity: 1; transform: translateX(0); }
        }

        .cart-header {
          animation: slideInLeft 0.5s ease-out;
        }

        .cart-item {
          animation: slideInUp 0.5s ease-out;
        }

        .cart-summary {
          animation: slideInRight 0.5s ease-out 0.2s both;
          opacity: 0;
        }

        .quantity-btn {
          transition: all 0.2s ease;
        }

        .quantity-btn:hover {
          background: #f3f4f6;
        }

        .quantity-btn:active {
          transform: scale(0.95);
        }

        .remove-btn {
          transition: all 0.3s ease;
        }

        .remove-btn:hover {
          color: #991b1b;
        }

        .checkout-btn {
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }

        .checkout-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 16px rgba(34, 197, 94, 0.2);
        }

        .checkout-btn:active {
          transform: translateY(0);
        }

        @media (max-width: 768px) {
          .cart-summary {
            position: static;
          }
        }

        @media (min-width: 1024px) {
          .cart-summary {
            position: sticky;
            top: 100px;
            height: fit-content;
          }
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-5 lg:px-4">

        {/* Header */}
        <div className="cart-header mb-6 sm:mb-8">
          <Link
            to="/products"
            className="inline-flex items-center gap-2 text-green-600 hover:text-green-700 font-semibold text-sm sm:text-base transition-colors"
          >
            <ArrowLeft size={18} />
            Continue Shopping
          </Link>

          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-3 sm:mt-4 flex items-center gap-2 sm:gap-3">
            <ShoppingCart size={24} className="sm:w-8 sm:h-8 text-green-600" />
            Shopping Cart
          </h1>

          <p className="text-gray-500 mt-1 sm:mt-2 text-sm sm:text-base">
            {cartItems.length} Item{cartItems.length !== 1 ? "s" : ""} in your cart
          </p>
        </div>

        {cartItems.length > 0 ? (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">

            {/* Left - Cart Items */}
            <div className="lg:col-span-2 space-y-3 sm:space-y-4 md:space-y-5">

              {/* Cart Cards */}
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="cart-item bg-white rounded-lg sm:rounded-xl md:rounded-2xl shadow hover:shadow-md transition-shadow p-3 sm:p-4 md:p-5"
                >
                  <div className="flex gap-3 sm:gap-4 md:gap-5">

                    {/* Product Image */}
                    <div className="flex-shrink-0">
                      <img
                        src={item.product.image}
                        alt={item.product.title}
                        className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 object-cover rounded-lg sm:rounded-xl"
                      />
                    </div>

                    {/* Product Details */}
                    <div className="flex-1 min-w-0">
                      <h2 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 line-clamp-2">
                        {item.product.title}
                      </h2>

                      <p className="text-xs sm:text-sm text-gray-600 mt-1 line-clamp-1 sm:line-clamp-2">
                        {item.product.description}
                      </p>

                      <p className="text-lg sm:text-xl md:text-2xl font-bold text-green-600 mt-2 sm:mt-3">
                        ₹{item.product.price.toLocaleString()}
                      </p>
                    </div>

                    {/* Quantity Controls & Remove - Right Side */}
                    <div className="flex flex-col items-end justify-between gap-2 sm:gap-3">

                      {/* Quantity Buttons */}
                      <div className="flex items-center border border-gray-300 rounded-lg bg-white">
                        <button
                          className="quantity-btn p-1.5 sm:p-2 hover:bg-gray-100"
                          onClick={() => handleDecrease(item)}
                          title="Decrease quantity"
                        >
                          <Minus size={16} className="sm:w-5 sm:h-5" />
                        </button>

                        <span className="px-2 sm:px-3 font-semibold text-sm sm:text-base min-w-8 text-center">
                          {item.quantity}
                        </span>

                        <button
                          className="quantity-btn p-1.5 sm:p-2 hover:bg-gray-100"
                          onClick={() => handleIncrease(item)}
                          title="Increase quantity"
                        >
                          <Plus size={16} className="sm:w-5 sm:h-5" />
                        </button>
                      </div>

                      {/* Remove Button */}
                      <button
                        onClick={() => handleRemove(item)}
                        className="remove-btn text-red-500 hover:text-red-700 flex items-center gap-1 text-xs sm:text-sm font-semibold transition-colors"
                        title="Remove from cart"
                      >
                        <Trash2 size={16} className="sm:w-4 sm:h-4" />
                        <span className="hidden sm:inline">Remove</span>
                      </button>

                    </div>

                  </div>
                </div>
              ))}

            </div>

            {/* Right - Order Summary */}
            <div className="cart-summary">
              <div className="bg-white rounded-lg sm:rounded-xl md:rounded-2xl shadow p-4 sm:p-5 md:p-6">

                <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-gray-900">
                  Order Summary
                </h2>

                <div className="space-y-2.5 sm:space-y-3">

                  <div className="flex justify-between text-sm sm:text-base">
                    <span className="text-gray-600">Subtotal</span>
                    <span className="font-semibold">₹{subtotal.toLocaleString()}</span>
                  </div>

                  <div className="flex justify-between text-sm sm:text-base">
                    <span className="text-gray-600">Shipping</span>
                    <span className="text-green-600 font-semibold">
                      FREE
                    </span>
                  </div>

                  <div className="flex justify-between text-sm sm:text-base">
                    <span className="text-gray-600">Tax (10%)</span>
                    <span className="font-semibold">₹{tax.toLocaleString()}</span>
                  </div>

                </div>

                <hr className="my-4 sm:my-5" />

                <div className="flex justify-between text-base sm:text-lg md:text-xl font-bold text-gray-900 mb-4 sm:mb-6">
                  <span>Total</span>
                  <span className="text-green-600">
                    ₹{total.toLocaleString()}
                  </span>
                </div>

                <button className="checkout-btn w-full bg-green-600 hover:bg-green-700 text-white py-2.5 sm:py-3 rounded-lg sm:rounded-xl font-bold text-sm sm:text-base transition-colors">
                  Proceed To Checkout
                </button>

              </div>
            </div>

          </div>
        ) : (
          // Empty Cart State
          <div className="bg-white rounded-lg sm:rounded-xl md:rounded-2xl shadow p-8 sm:p-12 md:p-16 text-center">
            <ShoppingCart size={48} className="sm:w-16 sm:h-16 mx-auto text-gray-300 mb-4 sm:mb-6" />
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-2 sm:mb-3">
              Your cart is empty
            </h2>
            <p className="text-gray-600 text-sm sm:text-base mb-6 sm:mb-8">
              Start shopping and discover amazing products!
            </p>
            <Link
              to="/products"
              className="inline-flex items-center gap-2 px-6 sm:px-8 py-2.5 sm:py-3 bg-green-600 hover:bg-green-700 text-white font-bold text-sm sm:text-base rounded-lg sm:rounded-xl transition-colors"
            >
              <ShoppingCart size={18} className="sm:w-5 sm:h-5" />
              Continue Shopping
            </Link>
          </div>
        )}

      </div>
    </div>
  );
}

export default Cart;