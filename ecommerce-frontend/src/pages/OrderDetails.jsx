import { Link } from "react-router-dom";
import { ArrowLeft, Package } from "lucide-react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getOrderById } from "../services/orderService";

function OrderDetails() {
    // get order id from url params
    const { id } = useParams();
const [order, setOrder] = useState(null);

useEffect(() => {
  fetchOrder();
}, []);
// fetch order details by id from db
const fetchOrder = async () => {
  try {
    const response = await getOrderById(id);

    setOrder(response.data.data);

  } catch (error) {
    console.log(error);
  }
};

// if order is not found, show loading
if (!order) {
  return (
    <div className="min-h-screen flex justify-center items-center">
      Loading...
    </div>
  );
}
  return (
    <div className="min-h-screen bg-gray-100 pt-24 pb-10">
      <div className="max-w-6xl mx-auto px-4">

        {/* Header */}
        <div className="mb-8">
          <Link
            to="/orders"
            className="inline-flex items-center gap-2 text-green-600 hover:text-green-700 font-semibold"
          >
            <ArrowLeft size={18} />
            Back To Orders
          </Link>

          <h1 className="text-4xl font-bold mt-4 flex items-center gap-3">
            <Package className="text-green-600" />
            Order Details
          </h1>

          <p className="text-gray-500 mt-2">
            View your order information
          </p>
        </div>

        {/* Order Header */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">

          <div className="grid md:grid-cols-4 gap-6">

            <div>
              <p className="text-gray-500 text-sm">
                Order ID
              </p>

              <h3 className="font-bold">
                #{order.id.slice(-8).toUpperCase()}
              </h3>
            </div>

            <div>
              <p className="text-gray-500 text-sm">
                Status
              </p>

              <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-sm font-semibold">
               {order.status}
              </span>
            </div>

            <div>
              <p className="text-gray-500 text-sm">
                Date
              </p>

              <h3 className="font-semibold">
              {new Date(order.createdAt).toLocaleDateString()}
              </h3>
            </div>

            <div>
              <p className="text-gray-500 text-sm">
                Total
              </p>

              <h3 className="text-2xl font-bold text-green-600">
               ₹{order.totalAmount.toLocaleString()}
              </h3>
            </div>

          </div>

        </div>

        {/* Shipping Address */}

          <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">

            <h2 className="text-2xl font-bold mb-5">
              Shipping Address
            </h2>

            <div className="space-y-2">

              <h3 className="text-lg font-bold">
                {order.address.fullName}
              </h3>

              <p>{order.address.phone}</p>

              <p>{order.address.address}</p>

              <p>
                {order.address.city}, {order.address.state}
              </p>

              <p>{order.address.pincode}</p>

            </div>

          </div>

        {/* Products */}

        <div className="bg-white rounded-2xl shadow-lg p-6">

          <h2 className="text-2xl font-bold mb-6">
            Ordered Products
          </h2>

          {/* Product */}
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

                    <div className="flex gap-8 mt-4">

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

      </div>
    </div>
  );
}

export default OrderDetails;