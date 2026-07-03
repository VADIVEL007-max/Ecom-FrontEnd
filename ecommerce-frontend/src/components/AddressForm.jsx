import { useState } from "react";
import { addAddress } from "../services/addressService";

function AddressForm({ fetchAddresses }) {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await addAddress(formData);

      alert("Address Added Successfully");

      setFormData({
        fullName: "",
        phone: "",
        address: "",
        city: "",
        state: "",
        pincode: "",
      });

      fetchAddresses();

    } catch (error) {
      console.log(error.response?.data);
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 mt-8">

      <h2 className="text-2xl font-bold mb-6">
        Add Address
      </h2>

      <form
        onSubmit={handleSubmit}
        className="grid md:grid-cols-2 gap-5"
      >

        <input
          type="text"
          name="fullName"
          placeholder="Full Name"
          value={formData.fullName}
          onChange={handleChange}
          className="border rounded-xl p-3"
        />

        <input
          type="text"
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
          className="border rounded-xl p-3"
        />

        <textarea
          name="address"
          placeholder="Address"
          value={formData.address}
          onChange={handleChange}
          className="border rounded-xl p-3 md:col-span-2"
        />

        <input
          type="text"
          name="city"
          placeholder="City"
          value={formData.city}
          onChange={handleChange}
          className="border rounded-xl p-3"
        />

        <input
          type="text"
          name="state"
          placeholder="State"
          value={formData.state}
          onChange={handleChange}
          className="border rounded-xl p-3"
        />

        <input
          type="text"
          name="pincode"
          placeholder="Pincode"
          value={formData.pincode}
          onChange={handleChange}
          className="border rounded-xl p-3"
        />

        <button
          type="submit"
          className="bg-green-600 hover:bg-green-700 text-white py-3 rounded-xl md:col-span-2"
        >
          Save Address
        </button>

      </form>

    </div>
  );
}

export default AddressForm;