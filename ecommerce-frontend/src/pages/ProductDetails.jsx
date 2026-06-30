import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import api from "../services/api";
import Loader from "../components/Loader";
import { ArrowLeft, ShoppingCart, Zap, Heart, Share2, Check } from "lucide-react";

function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [product, setProduct] = useState(null);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [isAddedToCart, setIsAddedToCart] = useState(false);
  const [showNotification, setShowNotification] = useState(false);

  useEffect(() => {
    getProduct();
    window.scrollTo(0, 0);
  }, [id]);

  const getProduct = async () => {
    try {
      const response = await api.get(`/api/product/${id}`);
      console.log(response.data);
      setProduct(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleAddToCart = () => {
    setIsAddedToCart(true);
    setShowNotification(true);
    setTimeout(() => setShowNotification(false), 2000);
    setTimeout(() => setIsAddedToCart(false), 600);
  };

  const handleWishlist = () => {
    setIsWishlisted(!isWishlisted);
  };

  if (!product) {
    return <Loader />;
  }

  const rating = product.rating || 4.5;
  const reviews = product.reviews || 128;
  const discount = product.discount || 0;
  const originalPrice = product.originalPrice || product.price;

  return (
    <>
      <style>{`
        @keyframes slideInDown {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes slideInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes zoomIn {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }

        @keyframes notificationSlide {
          from { opacity: 0; transform: translateX(100%); }
          to { opacity: 1; transform: translateX(0); }
        }

        @keyframes imageZoom {
          from { transform: scale(1); }
          to { transform: scale(1.08); }
        }

        @keyframes heartPop {
          0% { transform: scale(1); }
          50% { transform: scale(1.3); }
          100% { transform: scale(1); }
        }

        * {
          box-sizing: border-box;
        }

        .page-container {
          animation: slideInUp 0.6s ease-out;
          min-height: 100vh;
          background: linear-gradient(to bottom, #ffffff, #f9fafb);
        }

        .breadcrumb {
          animation: slideInDown 0.5s ease-out;
        }

        .back-button {
          transition: all 0.3s ease;
          animation: slideInDown 0.5s ease-out;
          padding: 8px 12px;
          border-radius: 8px;
          background: transparent;
          border: none;
          cursor: pointer;
        }

        .back-button:hover {
          background: #f3f4f6;
          transform: translateX(-4px);
        }

        .back-button:active {
          transform: translateX(-2px);
        }

        .image-container {
          animation: zoomIn 0.6s ease-out;
          background: white;
          border-radius: 1.5rem;
          padding: 40px;
          border: 1px solid #e5e7eb;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05), 0 10px 15px rgba(0, 0, 0, 0.1);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
          width: 100%;
        }

        .image-container:hover {
          box-shadow: 0 20px 25px rgba(0, 0, 0, 0.15);
          border-color: #22c55e;
        }

        .product-image {
          width: 80%;
          height: 80%;
          object-fit: contain;
          transition: transform 0.4s ease;
          cursor: zoom-in;
          max-width: 100%;
        }

        .image-container:hover .product-image {
          animation: imageZoom 0.4s ease-out forwards;
        }

        .content-section {
          animation: zoomIn 0.6s ease-out 0.1s both;
          opacity: 0;
        }

        .product-title {
          font-size: clamp(1.5rem, 5vw, 2.25rem);
          font-weight: 800;
          color: #1f2937;
          line-height: 1.2;
          margin-bottom: 12px;
          word-break: break-word;
        }

        .category-badge {
          display: inline-block;
          background: linear-gradient(135deg, #d1fae5 0%, #c0f0d9 100%);
          color: #065f46;
          padding: 6px 16px;
          border-radius: 50px;
          font-size: clamp(11px, 2vw, 13px);
          font-weight: 600;
          margin-bottom: 16px;
          border: 1px solid #a7f3d0;
          white-space: nowrap;
        }

        .rating-section {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 16px;
          padding-bottom: 16px;
          border-bottom: 1px solid #e5e7eb;
          flex-wrap: wrap;
        }

        .stars {
          display: flex;
          gap: 2px;
        }

        .star {
          color: #fbbf24;
          font-size: clamp(12px, 3vw, 16px);
        }

        .reviews-count-text {
          font-weight: 600;
          color: #1f2937;
          font-size: clamp(13px, 2vw, 15px);
        }

        .reviews-link {
          color: #3b82f6;
          font-size: clamp(12px, 2vw, 13px);
          font-weight: 600;
          cursor: pointer;
          transition: color 0.3s ease;
        }

        .reviews-link:hover {
          color: #1d4ed8;
          text-decoration: underline;
        }

        .price-section {
          margin-bottom: 20px;
        }

        .price-row {
          display: flex;
          align-items: baseline;
          gap: 12px;
          margin-bottom: 8px;
          flex-wrap: wrap;
        }

        .current-price {
          font-size: clamp(1.5rem, 5vw, 2rem);
          font-weight: 800;
          color: #22c55e;
        }

        .original-price {
          font-size: clamp(1rem, 3vw, 1.25rem);
          color: #9ca3af;
          text-decoration: line-through;
        }

        .discount-badge {
          background: #fef3c7;
          color: #92400e;
          padding: 4px 12px;
          border-radius: 6px;
          font-size: clamp(11px, 2vw, 12px);
          font-weight: 700;
        }

        .savings-text {
          font-size: clamp(12px, 2vw, 14px);
          color: #22c55e;
          font-weight: 600;
        }

        .info-grid {
          background: #f9fafb;
          border-radius: 12px;
          padding: clamp(16px, 4vw, 20px);
          margin-bottom: 24px;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 16px;
        }

        .info-item {
          display: flex;
          align-items: flex-start;
          gap: 12px;
        }

        .info-icon {
          color: #22c55e;
          flex-shrink: 0;
          margin-top: 2px;
          width: 20px;
          height: 20px;
        }

        .info-content {
          display: flex;
          flex-direction: column;
          gap: 4px;
          min-width: 0;
        }

        .info-label {
          font-size: clamp(11px, 2vw, 12px);
          color: #6b7280;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .info-value {
          font-size: clamp(13px, 2vw, 15px);
          font-weight: 600;
          color: #1f2937;
          word-break: break-word;
        }

        .description-section {
          background: white;
          border: 1px solid #e5e7eb;
          border-radius: 12px;
          padding: clamp(16px, 4vw, 20px);
          margin-bottom: 24px;
        }

        .description-title {
          font-size: clamp(14px, 3vw, 16px);
          font-weight: 700;
          color: #1f2937;
          margin-bottom: 12px;
        }

        .description-text {
          font-size: clamp(13px, 2vw, 14px);
          color: #6b7280;
          line-height: 1.8;
          word-break: break-word;
        }

        .button-group {
          display: flex;
          gap: clamp(8px, 3vw, 12px);
          margin-bottom: 24px;
          flex-direction: column;
        }

        .primary-btn,
        .secondary-btn {
          padding: clamp(12px, 3vw, 14px) clamp(16px, 4vw, 24px);
          border-radius: 10px;
          font-size: clamp(14px, 2vw, 16px);
          font-weight: 700;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
          border: none;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          position: relative;
          overflow: hidden;
          white-space: nowrap;
          min-height: 44px;
        }

        .primary-btn {
          background: linear-gradient(135deg, #22c55e 0%, #16a34a 100%);
          color: white;
          box-shadow: 0 4px 12px rgba(34, 197, 94, 0.2);
        }

        .primary-btn::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: rgba(255, 255, 255, 0.2);
          transition: left 0.5s ease;
        }

        .primary-btn:hover::before {
          left: 100%;
        }

        .primary-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 24px rgba(34, 197, 94, 0.3);
        }

        .primary-btn:active {
          transform: translateY(0);
        }

        .primary-btn:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }

        .secondary-btn {
          background: white;
          color: #3b82f6;
          border: 2px solid #3b82f6;
        }

        .secondary-btn:hover {
          background: #eff6ff;
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(59, 130, 246, 0.2);
        }

        .secondary-btn:active {
          transform: translateY(0);
        }

        .secondary-btn:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }

        .icon-button-group {
          display: flex;
          gap: clamp(8px, 2vw, 12px);
        }

        .wishlist-btn,
        .share-btn {
          width: clamp(44px, 10vw, 50px);
          height: clamp(44px, 10vw, 50px);
          min-width: 44px;
          min-height: 44px;
          border-radius: 10px;
          border: 2px solid #e5e7eb;
          background: white;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.3s ease;
          flex-shrink: 0;
        }

        .wishlist-btn {
          color: #ef4444;
        }

        .wishlist-btn:hover {
          border-color: #ef4444;
          background: #fef2f2;
          transform: scale(1.08);
        }

        .wishlist-btn.active {
          background: #ef4444;
          border-color: #ef4444;
          color: white;
          animation: heartPop 0.4s ease-out;
        }

        .share-btn {
          color: #6b7280;
        }

        .share-btn:hover {
          border-color: #3b82f6;
          color: #3b82f6;
          background: #eff6ff;
          transform: scale(1.08);
        }

        .guarantee-section {
          margin-top: 24px;
          padding: clamp(16px, 4vw, 20px);
          background: #eff6ff;
          border: 1px solid #93c5fd;
          border-radius: 12px;
        }

        .guarantee-text {
          font-size: clamp(12px, 2vw, 14px);
          color: #1e40af;
          line-height: 1.8;
        }

        .notification {
          position: fixed;
          top: 80px;
          right: 20px;
          left: 20px;
          max-width: 400px;
          margin-left: auto;
          background: linear-gradient(135deg, #22c55e 0%, #16a34a 100%);
          color: white;
          padding: 12px 16px;
          border-radius: 8px;
          box-shadow: 0 8px 24px rgba(34, 197, 94, 0.3);
          animation: notificationSlide 0.3s ease-out;
          z-index: 1000;
          font-weight: 600;
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: clamp(13px, 2vw, 15px);
        }

        /* Tablet Styles (641px - 1024px) */
        @media (min-width: 641px) and (max-width: 1024px) {
          .image-container {
            padding: 35px;
          }

          .button-group {
            flex-direction: row;
          }

          .icon-button-group {
            justify-content: flex-start;
          }
        }

        /* Desktop Styles (1025px+) */
        @media (min-width: 1025px) {
          .image-container {
            position: sticky;
            top: 100px;
            height: 500px;
          }

          .button-group {
            flex-direction: row;
          }

          .icon-button-group {
            justify-content: flex-start;
          }
        }

        /* Mobile Styles (640px and below) */
        @media (max-width: 640px) {
          .page-container {
            padding-bottom: 20px;
          }

          .sticky {
            position: static;
          }

          .image-container {
            padding: 20px;
            margin-bottom: 24px;
            height: 300px;
            border-radius: 12px;
          }

          .button-group {
            flex-direction: column;
            gap: 12px;
            margin-bottom: 20px;
          }

          .primary-btn,
          .secondary-btn {
            width: 100%;
          }

          .icon-button-group {
            width: 100%;
            justify-content: space-between;
          }

          .wishlist-btn,
          .share-btn {
            flex: 1;
          }

          .info-grid {
            grid-template-columns: 1fr;
          }

          .breadcrumb {
            overflow-x: auto;
            white-space: nowrap;
            -webkit-overflow-scrolling: touch;
            padding-right: 10px;
          }

          .notification {
            top: 60px;
            left: 10px;
            right: 10px;
          }
        }

        /* Small Mobile (320px - 374px) */
        @media (max-width: 374px) {
          .product-title {
            font-size: 1.25rem;
          }

          .current-price {
            font-size: 1.25rem;
          }

          .image-container {
            height: 250px;
            padding: 15px;
          }

          .price-row {
            gap: 8px;
          }

          .primary-btn,
          .secondary-btn {
            padding: 10px 12px;
            font-size: 13px;
          }
        }

        /* Landscape Orientation */
        @media (max-height: 600px) and (orientation: landscape) {
          .page-container {
            padding-top: 10px;
            padding-bottom: 10px;
          }

          .image-container {
            height: 300px;
            margin-bottom: 15px;
          }

          .description-section,
          .info-grid {
            margin-bottom: 15px;
          }
        }
      `}</style>

      {/* Notification */}
      {showNotification && (
        <div className="notification">
          <Check size={18} />
          <span>Added to cart!</span>
        </div>
      )}

      {/* Main Container */}
      <div className="page-container">
        {/* Top Bar */}
        <div className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-3 sm:px-6 py-3 sm:py-4 flex items-center">
            <button
              onClick={() => navigate(-1)}
              className="back-button flex items-center gap-2 text-gray-700 font-semibold"
            >
              <ArrowLeft size={20} />
              <span className="hidden sm:inline">Back</span>
            </button>
          </div>
        </div>

        {/* Breadcrumb */}
        <div className="breadcrumb max-w-7xl mx-auto px-3 sm:px-6 py-3 sm:py-4">
          <div className="flex items-center gap-2 text-xs sm:text-sm">
            <button
              onClick={() => navigate("/")}
              className="text-blue-600 hover:underline font-semibold truncate"
            >
              Home
            </button>
            <span className="text-gray-400">/</span>
            <button
              onClick={() => navigate("/products")}
              className="text-blue-600 hover:underline font-semibold truncate"
            >
              Products
            </button>
            <span className="text-gray-400">/</span>
            <span className="text-gray-700 font-semibold truncate">
              {product.title.length > 20
                ? `${product.title.substring(0, 20)}...`
                : product.title}
            </span>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-3 sm:px-6 py-6 sm:py-8 pb-12 sm:pb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
            
            {/* Left Side - Image */}
            <div className="flex flex-col items-center lg:sticky lg:top-24 lg:h-fit">
              <div className="image-container" style={{ height: "300px" }} className="sm:sm:hidden lg:hidden" style={{ height: "350px" }} className="hidden sm:block lg:hidden" style={{ height: "500px" }} className="hidden lg:block">
                <img
                  src={product.image}
                  alt={product.title}
                  className="product-image"
                />
              </div>
            </div>

            {/* Right Side - Details */}
            <div className="content-section">
              
              {/* Category Badge */}
              <div className="category-badge">
                {product.category || "Electronics"}
              </div>

              {/* Title */}
              <h1 className="product-title">{product.title}</h1>

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
                <span className="reviews-count-text">{rating}</span>
                <span className="reviews-link">({reviews})</span>
              </div>

              {/* Price */}
              <div className="price-section">
                <div className="price-row">
                  <span className="current-price">₹{product.price}</span>
                  {originalPrice > product.price && (
                    <span className="original-price">₹{originalPrice}</span>
                  )}
                  {discount > 0 && (
                    <span className="discount-badge">{discount}% OFF</span>
                  )}
                </div>
                <p className="savings-text">
                  You save ₹{(originalPrice - product.price).toLocaleString()}
                </p>
              </div>

              {/* Info Grid */}
              <div className="info-grid">
                <div className="info-item">
                  <Zap className="info-icon" size={20} />
                  <div className="info-content">
                    <span className="info-label">Stock Status</span>
                    <span className="info-value">
                      {product.stock > 0
                        ? product.stock <= 5
                          ? "Limited Stock"
                          : "In Stock"
                        : "Out of Stock"}
                    </span>
                  </div>
                </div>

                <div className="info-item">
                  <Check className="info-icon" size={20} />
                  <div className="info-content">
                    <span className="info-label">Availability</span>
                    <span className="info-value">
                      {product.stock > 0 ? "Available" : "Unavailable"}
                    </span>
                  </div>
                </div>
              </div>

              {/* Description */}
              <div className="description-section">
                <h3 className="description-title">Product Details</h3>
                <p className="description-text">{product.description}</p>
              </div>

              {/* Buttons */}
              <div className="button-group">
                <button
                  onClick={handleAddToCart}
                  className="primary-btn"
                  disabled={product.stock === 0}
                >
                  <ShoppingCart size={20} />
                  <span>Add To Cart</span>
                </button>
                <button
                  className="secondary-btn"
                  disabled={product.stock === 0}
                >
                  <span>Buy Now</span>
                </button>
              </div>

              {/* Wishlist & Share */}
              <div className="icon-button-group">
                <button
                  onClick={handleWishlist}
                  className={`wishlist-btn ${isWishlisted ? "active" : ""}`}
                  title="Add to wishlist"
                  aria-label="Add to wishlist"
                >
                  <Heart size={20} fill={isWishlisted ? "currentColor" : "none"} />
                </button>
                <button
                  className="share-btn"
                  title="Share product"
                  aria-label="Share product"
                >
                  <Share2 size={20} />
                </button>
              </div>

              {/* Guarantee Section */}
              <div className="guarantee-section">
                <p className="guarantee-text">
                  ✓ 100% Authentic products<br/>
                  ✓ 30-day return guarantee<br/>
                  ✓ Free shipping on orders above ₹499
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductDetails;