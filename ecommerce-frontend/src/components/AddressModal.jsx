function AddressModal({ isOpen, onClose, children }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">

      <div className="bg-white rounded-2xl shadow-xl w-full max-w-2xl mx-4 relative">

        {/* Close Button */}

        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-2xl hover:text-red-500"
        >
          ✕
        </button>

        {children}

      </div>

    </div>
  );
}

export default AddressModal;