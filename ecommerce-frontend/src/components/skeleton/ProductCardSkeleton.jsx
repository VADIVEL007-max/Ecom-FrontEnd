function ProductCardSkeleton() {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden animate-pulse">

      {/* Image */}
      <div className="h-56 bg-gray-300"></div>

      {/* Content */}
      <div className="p-4">

        {/* Title */}
        <div className="h-5 bg-gray-300 rounded w-3/4 mb-3"></div>

        {/* Description */}
        <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
        <div className="h-4 bg-gray-200 rounded w-2/3 mb-4"></div>

        {/* Rating */}
        <div className="flex items-center gap-2 mb-4">
          <div className="h-4 w-24 bg-gray-300 rounded"></div>
          <div className="h-4 w-10 bg-gray-200 rounded"></div>
        </div>

        {/* Price */}
        <div className="flex items-center gap-3 mb-4">
          <div className="h-6 w-20 bg-gray-300 rounded"></div>
          <div className="h-4 w-14 bg-gray-200 rounded"></div>
        </div>

        {/* Stock */}
        <div className="h-8 bg-gray-200 rounded mb-5"></div>

        {/* Buttons */}
        <div className="flex gap-3">
          <div className="flex-1 h-11 bg-gray-300 rounded-lg"></div>
          <div className="w-11 h-11 bg-gray-300 rounded-lg"></div>
        </div>

      </div>

    </div>
  );
}

export default ProductCardSkeleton;