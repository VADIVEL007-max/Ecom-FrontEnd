function OrdersSkeleton() {
  return (
    <div className="min-h-screen bg-gray-100 pt-24 pb-10 animate-pulse">
      <div className="max-w-7xl mx-auto px-4">

        {/* Header */}
        <div className="mb-8">
          <div className="h-5 w-40 bg-gray-300 rounded mb-5"></div>

          <div className="h-10 w-64 bg-gray-300 rounded mb-3"></div>

          <div className="h-5 w-56 bg-gray-200 rounded"></div>
        </div>

        {[1, 2].map((order) => (
          <div
            key={order}
            className="bg-white rounded-2xl shadow-lg overflow-hidden mb-8"
          >

            {/* Products */}
            <div className="p-6 space-y-5">

              {[1, 2].map((item) => (
                <div
                  key={item}
                  className="flex flex-col sm:flex-row gap-5 border rounded-xl p-4"
                >

                  {/* Image */}
                  <div className="w-32 h-32 bg-gray-300 rounded-xl"></div>

                  {/* Content */}
                  <div className="flex-1">

                    <div className="h-6 w-52 bg-gray-300 rounded mb-3"></div>

                    <div className="h-4 w-full bg-gray-200 rounded mb-2"></div>

                    <div className="h-4 w-3/4 bg-gray-200 rounded mb-5"></div>

                    <div className="flex gap-8">

                      <div>
                        <div className="h-4 w-16 bg-gray-300 rounded mb-2"></div>
                        <div className="h-5 w-10 bg-gray-200 rounded"></div>
                      </div>

                      <div>
                        <div className="h-4 w-16 bg-gray-300 rounded mb-2"></div>
                        <div className="h-5 w-20 bg-gray-200 rounded"></div>
                      </div>

                    </div>

                  </div>

                </div>
              ))}

            </div>

            {/* Footer */}
            <div className="border-t p-5 flex justify-end">

              <div className="w-36 h-12 bg-gray-300 rounded-xl"></div>

            </div>

          </div>
        ))}

      </div>
    </div>
  );
}

export default OrdersSkeleton;