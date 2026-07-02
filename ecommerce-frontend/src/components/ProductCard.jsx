import { Link, Navigate, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Heart, ShoppingCart, Star, Zap, ImageOff } from "lucide-react";
import { addToCart } from "../services/cartService";



function ProductCard({ product }) {
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [isAddedToCart, setIsAddedToCart] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  if (!product) {
    return (
      <div className="bg-white rounded-xl shadow-md overflow-hidden p-4">
        <div className="text-center text-gray-500">No Product</div>
      </div>
    );
  }

  const handleWishlist = (e) => {
    e.preventDefault();
    setIsWishlisted(!isWishlisted);
  };

  // const handleAddToCart = (e) => {
  //   e.preventDefault();
  //   setIsAddedToCart(true);
  //   setShowNotification(true);
  //   setTimeout(() => setShowNotification(false), 2000);
  //   setTimeout(() => setIsAddedToCart(false), 600);
  // };
// const handleAddToCart = async (e) => {
//   e.preventDefault();

//   try {
//     await addToCart({
//       productId: product.id,
//       quantity: 1,
//     });

//     setIsAddedToCart(true);
//     setShowNotification(true);

//     setTimeout(() => setShowNotification(false), 2000);
//     setTimeout(() => setIsAddedToCart(false), 600);

//   } catch (error) {
//     console.log(error);
//     alert("Failed to add product to cart");
//   }
// };


const navigate = useNavigate();
const handleAddToCart = async (e) => {
  e.preventDefault();

  const token = localStorage.getItem("accessToken");

  if (!token) {
    navigate("/login");
    return;
  }

  try {
    await addToCart({
      productId: product.id,
      quantity: 1,
    });

    setIsAddedToCart(true);
    setShowNotification(true);

    setTimeout(() => setShowNotification(false), 2000);
    setTimeout(() => setIsAddedToCart(false), 600);

  } catch (error) {
    console.log(error);
  }
};


  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  const handleImageError = () => {
    setImageError(true);
    setImageLoaded(true);
  };

  const discountPercent = product.discount || 0;
  const originalPrice = product.originalPrice || product.price;
  const rating = product.rating || 4.5;
  const reviews = product.reviews || 128;

  return (
    <>
      <style>{`
        @keyframes slideInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes scaleIn {
          from { opacity: 0; transform: scale(0.9); }
          to { opacity: 1; transform: scale(1); }
        }

        @keyframes shimmer {
          0% { background-position: -1000px 0; }
          100% { background-position: 1000px 0; }
        }

        @keyframes wishlistPop {
          0% { transform: scale(1); }
          50% { transform: scale(1.3); }
          100% { transform: scale(1); }
        }

        @keyframes glow {
          0%, 100% { box-shadow: 0 0 0 0 rgba(34, 197, 94, 0.4); }
          50% { box-shadow: 0 0 0 8px rgba(34, 197, 94, 0); }
        }

        @keyframes notificationSlide {
          from { opacity: 0; transform: translateX(100%); }
          to { opacity: 1; transform: translateX(0); }
        }

        .product-card {
          animation: slideInUp 0.5s ease-out;
          transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .product-card:hover {
          transform: translateY(-8px);
        }

        .product-image-container {
          position: relative;
          overflow: hidden;
          background: #f3f4f6;
          height: 220px;
        }

        .product-image-skeleton {
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, #e5e7eb 25%, #f3f4f6 50%, #e5e7eb 75%);
          background-size: 1000px 100%;
          animation: shimmer 1.5s infinite linear;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .product-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.4s ease, opacity 0.3s ease;
          opacity: 0;
        }

        .product-image.loaded {
          opacity: 1;
        }

        .product-card:hover .product-image.loaded {
          transform: scale(1.1);
        }

        .image-error-placeholder {
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, #f3f4f6 0%, #e5e7eb 100%);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 8px;
        }

        .image-error-placeholder svg {
          color: #9ca3af;
        }

        .image-error-text {
          font-size: 12px;
          color: #9ca3af;
          text-align: center;
        }

        .discount-badge {
          position: absolute;
          top: 12px;
          right: 12px;
          background: linear-gradient(135deg, #ef4444 0%, #dc2626 100%);
          color: white;
          padding: 6px 12px;
          border-radius: 20px;
          font-weight: 700;
          font-size: 12px;
          animation: scaleIn 0.4s ease-out;
          z-index: 5;
        }

        .stock-status {
          position: absolute;
          top: 12px;
          left: 12px;
          display: flex;
          align-items: center;
          gap: 4px;
          background: rgba(34, 197, 94, 0.9);
          color: white;
          padding: 6px 10px;
          border-radius: 20px;
          font-size: 11px;
          font-weight: 600;
          backdrop-filter: blur(4px);
          z-index: 5;
        }

        .wishlist-btn {
          position: absolute;
          bottom: 12px;
          right: 12px;
          background: white;
          border: 2px solid #e5e7eb;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.3s ease;
          z-index: 10;
        }

        .wishlist-btn:hover {
          border-color: #ef4444;
          background: #fef2f2;
          transform: scale(1.1);
        }

        .wishlist-btn.active {
          background: #ef4444;
          border-color: #ef4444;
          animation: wishlistPop 0.4s ease-out;
        }

        .wishlist-btn.active svg {
          color: white;
          fill: white;
        }

        .product-content {
          padding: 16px;
          display: flex;
          flex-direction: column;
          flex: 1;
        }

        .product-title {
          font-size: 15px;
          font-weight: 700;
          margin-bottom: 8px;
          color: #1f2937;
          line-height: 1.4;
          overflow: hidden;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
        }

        .product-description {
          font-size: 13px;
          color: #6b7280;
          margin-bottom: 12px;
          overflow: hidden;
          display: -webkit-box;
          -webkit-line-clamp: 1;
          -webkit-box-orient: vertical;
        }

        .rating-section {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 12px;
          font-size: 13px;
        }

        .stars {
          display: flex;
          gap: 2px;
        }

        .star {
          color: #fbbf24;
          font-size: 12px;
        }

        .reviews-count {
          color: #9ca3af;
          font-size: 12px;
        }

        .price-section {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 12px;
          flex-wrap: wrap;
        }

        .current-price {
          font-size: 18px;
          font-weight: 800;
          color: #22c55e;
        }

        .original-price {
          font-size: 13px;
          color: #9ca3af;
          text-decoration: line-through;
        }

        .stock-info {
          font-size: 12px;
          font-weight: 600;
          padding: 6px 12px;
          border-radius: 6px;
          text-align: center;
          margin-bottom: 12px;
        }

        .stock-low {
          background: #fef3c7;
          color: #92400e;
        }

        .stock-high {
          background: #f0fdf4;
          color: #166534;
        }

        .button-group {
          display: flex;
          gap: 8px;
          margin-top: auto;
        }

        .view-details-btn {
          flex: 1;
          padding: 10px 12px;
          background: linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%);
          color: white;
          border: none;
          border-radius: 8px;
          font-weight: 600;
          font-size: 13px;
          cursor: pointer;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
          text-decoration: none;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .view-details-btn::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: rgba(255, 255, 255, 0.2);
          transition: left 0.4s ease;
        }

        .view-details-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 16px rgba(37, 99, 235, 0.3);
        }

        .view-details-btn:hover::before {
          left: 100%;
        }

        .view-details-btn:active {
          transform: translateY(0);
        }

        .add-to-cart-btn {
          width: 45px;
          height: 45px;
          background: linear-gradient(135deg, #22c55e 0%, #16a34a 100%);
          color: white;
          border: none;
          border-radius: 8px;
          cursor: pointer;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          overflow: hidden;
        }

        .add-to-cart-btn::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: rgba(255, 255, 255, 0.2);
          transition: left 0.4s ease;
        }

        .add-to-cart-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 16px rgba(34, 197, 94, 0.3);
        }

        .add-to-cart-btn:hover::before {
          left: 100%;
        }

        .add-to-cart-btn.added {
          animation: glow 0.6s ease-out;
        }

        .add-to-cart-btn:active {
          transform: translateY(0);
        }

        .add-to-cart-btn:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }

        .notification {
          position: fixed;
          top: 80px;
          right: 20px;
          background: linear-gradient(135deg, #22c55e 0%, #16a34a 100%);
          color: white;
          padding: 12px 20px;
          border-radius: 8px;
          box-shadow: 0 8px 24px rgba(34, 197, 94, 0.3);
          animation: notificationSlide 0.3s ease-out;
          z-index: 1000;
          font-weight: 600;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        @media (max-width: 640px) {
          .product-image-container {
            height: 180px;
          }

          .product-title {
            font-size: 14px;
          }

          .current-price {
            font-size: 16px;
          }

          .button-group {
            gap: 6px;
          }

          .add-to-cart-btn {
            width: 40px;
            height: 40px;
          }
        }
      `}</style>

      {/* Notification */}
      {showNotification && (
        <div className="notification">
          <ShoppingCart size={18} />
          <span>Added to cart!</span>
        </div>
      )}

      {/* Product Card */}
      <div className="product-card bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl">
        
        {/* Image Container */}
        <div className="product-image-container">
          {/* Image Loading Skeleton */}
          {!imageLoaded && (
            <div className="product-image-skeleton"></div>
          )}

          {/* Product Image */}
          {!imageError ? (
            <img
              src={product.image}
              alt={product.title}
              className={`product-image ${imageLoaded ? "loaded" : ""}`}
              onLoad={handleImageLoad}
              onError={handleImageError}
            />
          ) : (
            // Error Placeholder
            <div className="image-error-placeholder">
              <ImageOff size={48} />
              <span className="image-error-text">Image not available</span>
            </div>
          )}

          {/* Discount Badge */}
          {discountPercent > 0 && (
            <div className="discount-badge">
              -{discountPercent}%
            </div>
          )}

          {/* Stock Status */}
          {product.stock > 0 && (
            <div className="stock-status">
              <Zap size={14} />
              {product.stock <= 5 ? "Limited Stock" : "In Stock"}
            </div>
          )}

          {/* Wishlist Button */}
          <button
            className={`wishlist-btn ${isWishlisted ? "active" : ""}`}
            onClick={handleWishlist}
            title={isWishlisted ? "Remove from wishlist" : "Add to wishlist"}
          >
            <Heart size={20} fill={isWishlisted ? "currentColor" : "none"} />
          </button>
        </div>

        {/* Content */}
        <div className="product-content">
          
          {/* Title */}
          <h2 className="product-title">{product.title}</h2>

          {/* Description */}
          <p className="product-description">{product.description}</p>

          {/* Rating */}
          <div className="rating-section">
            <div className="stars">
              {[...Array(5)].map((_, i) => (
                <span
                  key={i}
                  className="star"
                  style={{
                    opacity: i < Math.floor(rating) ? 1 : 0.3,
                  }}
                >
                  ★
                </span>
              ))}
            </div>
            <span className="reviews-count">({reviews})</span>
          </div>

          {/* Price */}
          <div className="price-section">
            <span className="current-price">₹{product.price}</span>
            {originalPrice > product.price && (
              <span className="original-price">₹{originalPrice}</span>
            )}
          </div>

          {/* Stock Info */}
          <div className={`stock-info ${product.stock > 5 ? "stock-high" : "stock-low"}`}>
            Stock: {product.stock} available
          </div>

          {/* Buttons */}
          <div className="button-group">
            <Link
              to={`/products/${product.id}`}
              className="view-details-btn"
            >
              View Details
            </Link>
            <button
              className={`add-to-cart-btn ${isAddedToCart ? "added" : ""}`}
              onClick={handleAddToCart}
              title="Add to cart"
              disabled={product.stock === 0}
            >
              <ShoppingCart size={20} />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductCard;