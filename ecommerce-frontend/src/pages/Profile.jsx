import { User, Mail, Calendar, LogOut, MapPin,ArrowLeft } from "lucide-react";
import { useEffect, useState } from "react";
import { getProfile } from "../services/profileService";
import { useNavigate } from "react-router-dom";


import {
  getAddresses,
  addAddress,
  updateAddress,
  deleteAddress,
} from "../services/addressService";

function Profile() {
  const navigate = useNavigate();
    
    const [addresses, setAddresses] = useState([]);

    const [user, setUser] = useState(null);

useEffect(() => {
    fetchProfile();
    fetchAddresses();
}, []);

// Fetch user profile from the backend
const fetchProfile = async () => {
  try {
    const response = await getProfile();
    setUser(response.data.data);
  } catch (error) {
    console.log(error);
  }
};

// Fetch user addresses from the backend
const fetchAddresses = async () => {
  try {
    const response = await getAddresses();
    console.log(response.data);
    

    setAddresses(response.data.data);

  } catch (error) {
    console.log(error);
  }
};

// Show loading state while fetching user profile
if (!user) {
  return (
    <div className="min-h-screen flex justify-center items-center">
      Loading...
    </div>
  );
}

// Render user profile
  return (
    <div className="min-h-screen bg-gray-100 pt-24 pb-10">
      <div className="max-w-5xl mx-auto px-4">
        <div className="mb-6">
          <button
            onClick={() => navigate("/")}
            className="flex items-center gap-2 bg-white shadow-md px-4 py-2 rounded-lg hover:bg-gray-100 transition"
          >
            <ArrowLeft size={20} />
            Back
          </button>
        </div>

        {/* Header */}
        <div className="bg-white rounded-2xl shadow-lg p-8">

          <div className="flex flex-col md:flex-row items-center gap-8">

            {/* Avatar */}
            <div className="w-32 h-32 rounded-full bg-green-600 flex items-center justify-center text-white text-5xl font-bold">
             {user.name.charAt(0).toUpperCase()}
            </div>

            {/* User Info */}
            <div className="flex-1">

              <h1 className="text-3xl font-bold">
                {user.name}
              </h1>

              <p className="text-gray-500 mt-2 flex items-center gap-2">
                <Mail size={18} />
                {user.email}
              </p>

              <p className="text-gray-500 mt-2 flex items-center gap-2">
                <Calendar size={18} />
               Member Since {new Date(user.createdAt).toLocaleDateString()}
              </p>

            </div>

          </div>

        </div>

        {/* Personal Information */}

        <div className="bg-white rounded-2xl shadow-lg mt-8 p-8">

          <h2 className="text-2xl font-bold mb-6">
            Personal Information
          </h2>

          <div className="grid md:grid-cols-2 gap-6">

            <div>

              <label className="text-gray-500">
                Name
              </label>

              <input
                type="text"
                value={user.name}
                readOnly
                className="w-full mt-2 border rounded-xl p-3 bg-gray-100"
              />

            </div>

            <div>

              <label className="text-gray-500">
                Email
              </label>

              <input
                type="email"
                value={user.email}
                readOnly
                className="w-full mt-2 border rounded-xl p-3 bg-gray-100"
              />

            </div>

          </div>

        </div>

       {/* Address */}

        <div className="bg-white rounded-2xl shadow-lg mt-8 p-8">

        <div className="flex justify-between items-center mb-6">

            <h2 className="text-2xl font-bold flex items-center gap-2">
            <MapPin className="text-green-600" />
            Saved Addresses
            </h2>

            <button className="bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-xl">
            + Add Address
            </button>

        </div>

        {addresses.length === 0 ? (

            <div className="border rounded-xl p-5">

            <h3 className="font-semibold">
                No Address Added
            </h3>

            <p className="text-gray-500 mt-2">
                Add your first delivery address.
            </p>

            </div>

        ) : (

            <div className="space-y-5">

            {addresses.map((address) => (

                <div
                key={address.id}
                className="border rounded-xl p-5 flex flex-col md:flex-row justify-between gap-5"
                >

                <div>

                    <h3 className="text-lg font-bold">
                    {address.fullName}
                    </h3>

                    <p className="text-gray-600 mt-2">
                    {address.address}
                    </p>

                    <p className="text-gray-600">
                    {address.city}, {address.state}
                    </p>

                    <p className="text-gray-600">
                    {address.pincode}
                    </p>

                    <p className="text-gray-600 mt-2">
                    📞 {address.phone}
                    </p>

                </div>

                <div className="flex gap-3">

                    <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg">
                    Edit
                    </button>

                    <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg">
                    Delete
                    </button>

                </div>

                </div>

            ))}

            </div>

        )}

        </div>

        {/* Logout */}

        <div className="mt-8">

          <button className="flex items-center gap-3 bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-xl font-semibold">

            <LogOut size={20} />

            Logout

          </button>

        </div>

      </div>
    </div>
  );
}

export default Profile;