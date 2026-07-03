import { MapPin, Phone, CheckCircle } from "lucide-react";

function AddressCard({
  address,
  selectedAddress,
  setSelectedAddress,
  onEdit,
}) {
  const isSelected = selectedAddress?.id === address.id;

  return (
    <div
      onClick={() => setSelectedAddress(address)}
      className={`border rounded-2xl p-5 cursor-pointer transition-all duration-200
      ${
        isSelected
          ? "border-green-600 bg-green-50 shadow-md"
          : "border-gray-200 hover:border-green-500"
      }`}
    >
      <div className="flex justify-between items-start">

        <div>

          <div className="flex items-center gap-2">

            {isSelected && (
              <CheckCircle
                size={20}
                className="text-green-600"
              />
            )}

            <h3 className="font-bold text-lg">
              {address.fullName}
            </h3>

          </div>

          <p className="text-gray-600 mt-3">
            {address.address}
          </p>

          <p className="text-gray-600">
            {address.city}, {address.state}
          </p>

          <p className="text-gray-600">
            {address.pincode}
          </p>

          <p className="flex items-center gap-2 mt-3 text-gray-700">
            <Phone size={16} />
            {address.phone}
          </p>

        </div>

        <button
            onClick={(e) => {
                e.stopPropagation();
                onEdit(address);
            }}
            className="text-green-600 hover:underline"
            >
            Edit
            </button>
      </div>
    </div>
  );
}

export default AddressCard;