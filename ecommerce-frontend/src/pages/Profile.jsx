import { User, Mail, Calendar, LogOut, MapPin,ArrowLeft } from "lucide-react";
import { useEffect, useState } from "react";
import { getProfile} from "../services/profileService";
import { useNavigate } from "react-router-dom";



import {
  getAddresses,
  addAddress,
  updateAddress,
  deleteAddress,
} from "../services/addressService";
import AddressForm from "../components/AddressForm";
import AddressModal from "../components/AddressModal";
import toast from "react-hot-toast";
import ProfileSkeleton from "../components/skeleton/ProfileSkeleton";

function Profile() {
  const navigate = useNavigate();
    
    const [addresses, setAddresses] = useState([]);
    const [openModal, setOpenModal] = useState(false);

    const [user, setUser] = useState(null);
    
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

// Function to handle the edit button click
 const handleEdit = (address) => {

    setIsEditing(true);

    setEditingId(address.id);

    setFormData({
        fullName:address.fullName,
        phone:address.phone,
        address:address.address,
        city:address.city,
        state:address.state,
        pincode:address.pincode,
    });

    setOpenModal(true);

};

// Function to handle the delete button click
const handleDelete = async (id) => {

  try {
    await deleteAddress(id);

    toast.success("Address Deleted Successfully");

    fetchAddresses();
  } catch (error) {
    toast.error("Error deleting address. Please try again.");
  }
};

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

  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    localStorage.removeItem("user");
    navigate("/login");
  };

// Show loading state while fetching user profile
if (!user) {
  return (
   <ProfileSkeleton/>
  );
}

// Render user profile
  return (<>
   <div className="mb-6">
          <button
            onClick={() => navigate("/")}
            className="flex items-center gap-2 bg-white shadow-md px-4 py-2 rounded-lg hover:bg-gray-100 transition"
          >
            <ArrowLeft size={20} />
            Back
          </button>
        </div>
    
    <div className="min-h-screen bg-gray-100 pt-5 pb-10">
      <div className="max-w-5xl mx-auto px-4">
        {/* <div className="mb-6">
          <button
            onClick={() => navigate("/")}
            className="flex items-center gap-2 bg-white shadow-md px-4 py-2 rounded-lg hover:bg-gray-100 transition"
          >
            <ArrowLeft size={20} />
            Back
          </button>
        </div> */}

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

            <button
                onClick={() => {
                    setIsEditing(false);

                    setFormData({
                        fullName:"",
                        phone:"",
                        address:"",
                        city:"",
                        state:"",
                        pincode:"",
                    });

                    setOpenModal(true);
                }}
                className="bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-xl"
            >
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

                   <button
                    onClick={() => handleEdit(address)}
                    className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg"
                  >
                    Edit
                  </button>

                    <button
                      onClick={() => handleDelete(address.id)}
                      className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg"
                    >
                      Delete
                    </button>
                </div>

                </div>

            ))}

            </div>

        )}

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

        {/* Logout */}

        <div className="mt-8">

          <button  onClick={handleLogout} className="flex items-center gap-3 bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-xl font-semibold">

            <LogOut size={20} />

            Logout

          </button>

        </div>

      </div>
    </div>
    </>
  );
}

export default Profile;