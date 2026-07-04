import { Link } from "react-router-dom";
import { ArrowLeft, MapPin, CreditCard } from "lucide-react";
import { placeOrder } from "../services/orderService";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getCart } from "../services/cartService";
import AddressCard from "../components/AddressCard";
import { getAddresses } from "../services/addressService";
import AddressModal from "../components/AddressModal";
import AddressForm from "../components/AddressForm";
import toast from "react-hot-toast";



function Checkout() {
  // State to manage whether the form is in edit mode
  const [isEditing, setIsEditing] = useState(false);
const [editingId, setEditingId] = useState(null);
// Form data state
const [formData, setFormData] = useState({
  fullName: "",
  phone: "",
  address: "",
  city: "",
  state: "",
  pincode: "",
});

  const [cartItems, setCartItems] = useState([]);
  const navigate = useNavigate();
// State to manage addresses
  const [addresses, setAddresses] = useState([]);

const [selectedAddress, setSelectedAddress] = useState(null);

const [openModal, setOpenModal] = useState(false);

// Function to fetch addresses from the backend
const fetchAddresses = async () => {
  try {
    const response = await getAddresses();

    setAddresses(response.data.data);

    if (response.data.data.length > 0) {
      setSelectedAddress(response.data.data[0]);
    }
  } catch (error) {
    console.log(error);
  }
};
  // place an order in db
const handlePlaceOrder = async () => {
  try {
     if (!selectedAddress) {
      toast.error("Please select an address");
      return;
    }

    await placeOrder({
      addressId: selectedAddress.id,
    });
    

    toast.success("Order placed successfully");

    navigate("/orders");

  } catch (error) {
    console.log(error);
    toast.error("Failed to place order");
  }
};
// Function to handle the edit button click 

const handleEdit = (address) => {
  setIsEditing(true);

  setEditingId(address.id);

  setFormData({
    fullName: address.fullName,
    phone: address.phone,
    address: address.address,
    city: address.city,
    state: address.state,
    pincode: address.pincode,
  });

  setOpenModal(true);
};
// on page load fetch cart items from db
useEffect(() => {
  fetchCart();
  fetchAddresses();
}, []);

const fetchCart = async () => {
  try {
    const response = await getCart();
    setCartItems(response.data.data);
  } catch (error) {
    console.log(error);
  }
};
// calculate subtotal, tax, shipping and total
const subtotal = cartItems.reduce(
  (total, item) => total + item.product.price * item.quantity,
  0
);

const tax = subtotal * 0.1;

const shipping = 0;

const total = subtotal + tax + shipping;


  return (
    <div className="min-h-screen bg-gray-100 pt-24 pb-10">
      <div className="max-w-7xl mx-auto px-4">

        {/* Header */}
        <div className="mb-8">
          <Link
            to="/cart"
            className="inline-flex items-center gap-2 text-green-600 hover:text-green-700 font-semibold"
          >
            <ArrowLeft size={18} />
            Back To Cart
          </Link>

          <h1 className="text-4xl font-bold mt-4">
            Checkout
          </h1>

          <p className="text-gray-500 mt-2">
            Complete your order
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">

          {/* Left Section */}
          <div className="lg:col-span-2 space-y-6">

            {/* Products */}
            <div className="bg-white rounded-2xl shadow p-6">

              <h2 className="text-2xl font-bold mb-6">
                Products
              </h2>

              <div className="space-y-5">

                {cartItems.map((item) => (

                  <div
                    key={item.id}
                    className="flex flex-col sm:flex-row gap-5 border rounded-xl p-4"
                  >

                    <img
                      src={item.product.image}
                      alt={item.product.title}
                      className="w-28 h-28 rounded-xl object-cover"
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
                            ₹{item.product.price.toLocaleString()}
                          </h3>

                        </div>

                      </div>

                    </div>

                  </div>

                ))}

              </div>

            </div>

           <div className="flex justify-between items-center mb-6">

                <h2 className="text-2xl font-bold">

                    Delivery Address

                </h2>

                <button
                    onClick={() => setOpenModal(true)}
                    className="bg-green-600 text-white px-5 py-2 rounded-xl"
                >
                    + Add New Address
                </button>

            </div>

      <div className="space-y-4">

          {addresses.map((address) => (

              <AddressCard
                  key={address.id}
                  address={address}
                  selectedAddress={selectedAddress}
                  setSelectedAddress={setSelectedAddress}
                  onEdit={handleEdit}
              />

          ))}

      </div>

            {/* Payment */}
            <div className="bg-white rounded-2xl shadow p-6">

              <h2 className="text-2xl font-bold flex items-center gap-2 mb-6">
                <CreditCard className="text-green-600" />
                Payment Method
              </h2>

              <div className="space-y-4">

                <label className="flex items-center gap-3 border rounded-xl p-4 cursor-pointer hover:border-green-500">
                  <input type="radio" name="payment" defaultChecked />
                  Cash On Delivery
                </label>

                <label className="flex items-center gap-3 border rounded-xl p-4 cursor-pointer hover:border-green-500">
                  <input type="radio" name="payment" />
                  UPI
                </label>

                <label className="flex items-center gap-3 border rounded-xl p-4 cursor-pointer hover:border-green-500">
                  <input type="radio" name="payment" />
                  Credit / Debit Card
                </label>

              </div>

            </div>

          </div>
          <AddressModal
                  isOpen={openModal}
                  onClose={() => setOpenModal(false)}
                >
                  <AddressForm
                    formData={formData}
                    setFormData={setFormData}
                    fetchAddresses={fetchAddresses}
                    isEditing={isEditing}
                    setIsEditing={setIsEditing}
                    editingId={editingId}
                    setEditingId={setEditingId}
                    onClose={() => setOpenModal(false)}
                  />
                </AddressModal>

          {/* Right Section */}
          <div>

            <div className="bg-white rounded-2xl shadow p-6 sticky top-24">

              <h2 className="text-2xl font-bold mb-6">
                Order Summary
              </h2>

              <div className="space-y-4">

                <div className="flex justify-between">
                 <span>Items</span>
                <span>{cartItems.length}</span>
                </div>

                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>₹{subtotal.toLocaleString()}</span>
                </div>

                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span className="text-green-600">
                    ₹{shipping.toLocaleString()}
                  </span>
                </div>

                <div className="flex justify-between">
                  <span>Tax</span>
                  <span>₹{tax.toLocaleString()}</span>
                </div>

              </div>

              <hr className="my-5" />

              <div className="flex justify-between text-xl font-bold">

                <span>Total</span>

                <span className="text-green-600">
                ₹{total.toLocaleString()}
                </span>

              </div>

              <button onClick={handlePlaceOrder}
                className="mt-6 w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-xl font-bold transition"
              >
                Place Order
              </button>

            </div>

          </div>

        </div>

      </div>
    </div>
  );
}

export default Checkout;