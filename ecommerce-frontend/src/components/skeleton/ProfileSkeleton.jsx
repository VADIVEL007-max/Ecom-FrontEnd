function ProfileSkeleton() {
  return (
    <div className="min-h-screen bg-gray-100 pt-24 pb-10 animate-pulse">
      <div className="max-w-5xl mx-auto px-4">

        {/* Back Button */}
        <div className="mb-6">
          <div className="w-24 h-10 bg-gray-300 rounded-lg"></div>
        </div>

        {/* Header */}
        <div className="bg-white rounded-2xl shadow-lg p-8">

          <div className="flex flex-col md:flex-row items-center gap-8">

            {/* Avatar */}
            <div className="w-32 h-32 rounded-full bg-gray-300"></div>

            {/* User Info */}
            <div className="flex-1 w-full">

              <div className="h-8 w-52 bg-gray-300 rounded"></div>

              <div className="h-5 w-72 bg-gray-200 rounded mt-4"></div>

              <div className="h-5 w-48 bg-gray-200 rounded mt-3"></div>

            </div>

          </div>

        </div>

        {/* Personal Information */}
        <div className="bg-white rounded-2xl shadow-lg mt-8 p-8">

          <div className="h-8 w-56 bg-gray-300 rounded mb-6"></div>

          <div className="grid md:grid-cols-2 gap-6">

            <div>

              <div className="h-4 w-20 bg-gray-300 rounded mb-3"></div>

              <div className="h-12 bg-gray-200 rounded-xl"></div>

            </div>

            <div>

              <div className="h-4 w-20 bg-gray-300 rounded mb-3"></div>

              <div className="h-12 bg-gray-200 rounded-xl"></div>

            </div>

          </div>

        </div>

        {/* Address */}
        <div className="bg-white rounded-2xl shadow-lg mt-8 p-8">

          <div className="flex justify-between items-center mb-6">

            <div className="h-8 w-56 bg-gray-300 rounded"></div>

            <div className="h-10 w-36 bg-gray-300 rounded-xl"></div>

          </div>

          {[1, 2].map((item) => (
            <div
              key={item}
              className="border rounded-xl p-5 flex flex-col md:flex-row justify-between gap-5 mb-5"
            >
              <div className="space-y-3 flex-1">

                <div className="h-6 w-40 bg-gray-300 rounded"></div>

                <div className="h-4 w-full bg-gray-200 rounded"></div>

                <div className="h-4 w-52 bg-gray-200 rounded"></div>

                <div className="h-4 w-32 bg-gray-200 rounded"></div>

                <div className="h-4 w-36 bg-gray-200 rounded"></div>

              </div>

              <div className="flex gap-3">

                <div className="w-20 h-10 bg-gray-300 rounded-lg"></div>

                <div className="w-20 h-10 bg-gray-300 rounded-lg"></div>

              </div>

            </div>
          ))}

        </div>

        {/* Logout */}
        <div className="mt-8">

          <div className="w-36 h-12 bg-gray-300 rounded-xl"></div>

        </div>

      </div>
    </div>
  );
}

export default ProfileSkeleton;