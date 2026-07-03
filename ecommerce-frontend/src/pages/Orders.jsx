import { Link } from "react-router-dom";
import { ArrowLeft, Package } from "lucide-react";
import { useEffect, useState } from "react";
import { getOrders } from "../services/orderService";

function Orders() {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
  fetchOrders();
}, []);

const fetchOrders = async () => {
  try {
    const response = await getOrders();

    setOrders(response.data.data);

  } catch (error) {
    console.log(error);
  }
};





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
            <Package className="text-green-600" />
            My Orders
          </h1>

          <p className="text-gray-500 mt-2">
            View all your placed orders
          </p>
        </div>

        {/* Order Card */}
       {orders.map((order) => (
        <div
            key={order.id}
            className="bg-white rounded-2xl shadow-lg overflow-hidden mb-8"
        >
            {/* Order Header */}
            <div className="bg-green-600 text-white p-5 flex flex-col md:flex-row md:justify-between gap-4">

            <div>
                <p className="text-sm opacity-80">Order ID</p>
                <h2 className="font-bold">
                #{order.id.slice(-8).toUpperCase()}
                </h2>
            </div>

            <div>
                <p className="text-sm opacity-80">Status</p>
                <span className="font-semibold">
                {order.status}
                </span>
            </div>

            <div>
                <p className="text-sm opacity-80">Order Date</p>
                <span>
                {new Date(order.createdAt).toLocaleDateString()}
                </span>
            </div>

            <div>
                <p className="text-sm opacity-80">Total</p>
                <span className="font-bold text-xl">
                ₹{order.totalAmount.toLocaleString()}
                </span>
            </div>

            </div>

            {/* Products */}
            <div className="p-6 space-y-5">

            {order.orderItems.map((item) => (

                <div
                key={item.id}
                className="flex flex-col sm:flex-row gap-5 border rounded-xl p-4"
                >

                <img
                    src={item.product.image}
                    alt={item.product.title}
                    className="w-32 h-32 rounded-xl object-cover"
                />

                <div className="flex-1">

                    <h2 className="text-xl font-bold">
                    {item.product.title}
                    </h2>

                    <p className="text-gray-500 mt-2">
                    {item.product.description}
                    </p>

                    <div className="flex flex-wrap gap-6 mt-4">

                    <div>
                        <p className="text-gray-500 text-sm">
                        Quantity
                        </p>

                        <h3 className="font-semibold">
                        {item.quantity}
                        </h3>
                    </div>

                    <div>
                        <p className="text-gray-500 text-sm">
                        Price
                        </p>

                        <h3 className="font-semibold text-green-600">
                        ₹{item.price.toLocaleString()}
                        </h3>
                    </div>

                    </div>

                </div>

                </div>

            ))}

            </div>

            {/* Footer */}
            <div className="border-t p-5 flex justify-end">

            <Link to={`/ordersDetails/${order.id}`}>
              <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl font-semibold transition">
                View Details
              </button>
            </Link>
            </div>

        </div>
))}
      </div>
    </div>
  );
}

export default Orders;