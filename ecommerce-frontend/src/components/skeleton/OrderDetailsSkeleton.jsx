function OrderDetailsSkeleton() {
  return (
    <div className="min-h-screen bg-gray-100 pt-24 pb-10 animate-pulse">
      <div className="max-w-6xl mx-auto px-4">

        {/* Header */}
        <div className="mb-8">
          <div className="h-5 w-40 bg-gray-300 rounded mb-5"></div>

          <div className="h-10 w-72 bg-gray-300 rounded mb-3"></div>

          <div className="h-5 w-56 bg-gray-200 rounded"></div>
        </div>

        {/* Order Header */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">

          <div className="grid md:grid-cols-4 gap-6">

            {[1,2,3,4].map((item) => (
              <div key={item}>
                <div className="h-4 w-20 bg-gray-300 rounded mb-3"></div>
                <div className="h-6 w-28 bg-gray-200 rounded"></div>
              </div>
            ))}

          </div>

        </div>

        {/* Shipping Address */}

        <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">

          <div className="h-8 w-52 bg-gray-300 rounded mb-5"></div>

          <div className="space-y-3">

            <div className="h-6 w-48 bg-gray-300 rounded"></div>

            <div className="h-5 w-40 bg-gray-200 rounded"></div>

            <div className="h-5 w-full bg-gray-200 rounded"></div>

            <div className="h-5 w-56 bg-gray-200 rounded"></div>

            <div className="h-5 w-24 bg-gray-200 rounded"></div>

          </div>

        </div>

        {/* Ordered Products */}

        <div className="bg-white rounded-2xl shadow-lg p-6">

          <div className="h-8 w-56 bg-gray-300 rounded mb-6"></div>

          {[1,2].map((item) => (

            <div
              key={item}
              className="flex flex-col sm:flex-row gap-5 border rounded-xl p-4 mb-5"
            >

              {/* Image */}
              <div className="w-32 h-32 bg-gray-300 rounded-xl"></div>

              {/* Content */}
              <div className="flex-1">

                <div className="h-6 w-56 bg-gray-300 rounded mb-3"></div>

                <div className="h-4 w-full bg-gray-200 rounded mb-2"></div>

                <div className="h-4 w-3/4 bg-gray-200 rounded mb-5"></div>

                <div className="flex gap-8">

                  <div>
                    <div className="h-4 w-20 bg-gray-300 rounded mb-2"></div>
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

      </div>
    </div>
  );
}

export default OrderDetailsSkeleton;