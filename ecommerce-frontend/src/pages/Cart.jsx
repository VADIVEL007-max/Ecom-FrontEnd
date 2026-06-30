import { Link } from "react-router-dom";
import {
  ShoppingCart,
  ArrowLeft,
  Plus,
  Minus,
  Trash2,
} from "lucide-react";

function Cart() {
  return (
    <div className="min-h-screen bg-gray-100 pt-24 pb-10">
      <div className="max-w-7xl mx-auto px-4">

        {/* Header */}
        <div className="mb-8">
          <Link
            to="/products"
            className="inline-flex items-center gap-2 text-green-600 hover:text-green-700 font-semibold"
          >
            <ArrowLeft size={18} />
            Continue Shopping
          </Link>

          <h1 className="text-4xl font-bold mt-4 flex items-center gap-3">
            <ShoppingCart className="text-green-600" />
            Shopping Cart
          </h1>

          <p className="text-gray-500 mt-2">
            2 Items in your cart
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">

          {/* Left */}
          <div className="lg:col-span-2 space-y-5">

            {/* Cart Card */}
            <div className="bg-white rounded-2xl shadow p-5">

              <div className="flex gap-5">

                {/* Image */}
                <img
                  src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9"
                  className="w-28 h-28 object-cover rounded-xl"
                />

                {/* Details */}
                <div className="flex-1">

                  <h2 className="text-xl font-bold">
                    iPhone 16
                  </h2>

                  <p className="text-gray-500 mt-1">
                    Apple iPhone 16 128GB
                  </p>

                  <h3 className="text-2xl font-bold text-green-600 mt-3">
                    ₹79,999
                  </h3>

                </div>

                {/* Quantity */}
                <div className="flex flex-col items-end justify-between">

                  <div className="flex items-center border rounded-lg">

                    <button className="p-2">
                      <Minus size={18} />
                    </button>

                    <span className="px-4">1</span>

                    <button className="p-2">
                      <Plus size={18} />
                    </button>

                  </div>

                  <button className="text-red-500 flex items-center gap-2">

                    <Trash2 size={18} />

                    Remove

                  </button>

                </div>

              </div>

            </div>

          </div>

          {/* Right */}
          <div>

            <div className="bg-white rounded-2xl shadow p-6 sticky top-24">

              <h2 className="text-2xl font-bold mb-6">
                Order Summary
              </h2>

              <div className="space-y-3">

                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>₹79,999</span>
                </div>

                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span className="text-green-600">
                    FREE
                  </span>
                </div>

                <div className="flex justify-between">
                  <span>Tax</span>
                  <span>₹7,999</span>
                </div>

              </div>

              <hr className="my-5" />

              <div className="flex justify-between text-xl font-bold">

                <span>Total</span>

                <span className="text-green-600">
                  ₹87,998
                </span>

              </div>

              <button className="mt-6 w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-xl font-bold">

                Proceed To Checkout

              </button>

            </div>

          </div>

        </div>

      </div>
    </div>
  );
}

export default Cart;