import { useState, useEffect } from "react";
import api from "../services/api";
import {
  Smartphone,
  Laptop,
  Shirt,
  Sofa,
  Watch,
  Gamepad2,
  HeartPulse,
  Car,
} from "lucide-react";

// Icon mapping for category names
const iconMap = {
  Mobiles: Smartphone,
  Laptops: Laptop,
  Fashion: Shirt,
  Furniture: Sofa,
  Watches: Watch,
  Gaming: Gamepad2,
  Health: HeartPulse,
  Automobile: Car,
};

function FeaturedCategories({ onSelectCategory, activeCategoryId }) {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  // Fetch categories on component mount
  useEffect(() => {
    fetchCategories();
  }, []);

  // Sync internal selected state with parent's active category.
  // Only runs if the parent actually passes this prop, so existing
  // usages without it keep working exactly as before.
  useEffect(() => {
    if (activeCategoryId !== undefined) {
      setSelectedCategory(activeCategoryId);
    }
  }, [activeCategoryId]);

  // API call to fetch categories
  const fetchCategories = async () => {
    try {
      setLoading(true);
      const response = await api.get("/api/category");

      // Map categories with icons
      const categoriesWithIcons = response.data.data.map((category) => ({
        ...category,
        icon: iconMap[category.name] || Smartphone,
      }));

      setCategories(categoriesWithIcons);
      setError(null);
    } catch (err) {
      console.error("Error fetching categories:", err);
      setError("Failed to load categories");
    } finally {
      setLoading(false);
    }
  };

  // Handle category selection
  const handleCategory = (categoryId, categoryName) => {
    setSelectedCategory(categoryId);
    // console.log("Selected category:", categoryId, categoryName);
    
    // Pass selected category to parent component
    if (onSelectCategory) {
      onSelectCategory(categoryId, categoryName);
    }
  };

  // Loading skeleton
  if (loading) {
    return (
      <section className="w-full px-3 sm:px-4 md:px-5 py-6 md:py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="h-10 bg-gray-300 rounded-lg w-1/3 mb-6 animate-pulse"></div>
          <div className="flex gap-4 overflow-hidden">
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className="h-12 bg-gray-300 rounded-full w-32 animate-pulse"
              ></div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="sticky top-[56px] md:top-[64px] z-30 w-full px-3 sm:px-4 md:px-5 py-4 md:py-6 bg-gray-50 border-b border-gray-100 shadow-sm">
      <style>{`
        @keyframes slideInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes iconFloat {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-4px); }
        }

        .section-title {
          animation: slideInUp 0.6s ease-out;
        }

        .section-subtitle {
          animation: slideInUp 0.6s ease-out 0.1s both;
          opacity: 0;
        }

        .category-button {
          transition: background-color 0.3s ease, border-color 0.3s ease, transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.3s ease;
          position: relative;
          overflow: hidden;
          flex-shrink: 0;
          background-color: #ffffff;
          border-color: #bbf7d0; /* border-green-200 */
          color: #000000;
        }

        .category-button::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: rgba(255, 255, 255, 0.2);
          transition: left 0.4s ease;
          z-index: 1;
        }

        .category-button:hover::before {
          left: 100%;
        }

        /* Hover: background + border + text + icon all shift to green/white
           TOGETHER, so text is never white-on-white. Text/icon stay visible,
           only color + a slight lift + shadow change. No opacity/scale/translate
           on the text itself. */
        .category-button:hover {
          background-color: #22c55e;
          border-color: #16a34a;
          color: #ffffff;
          transform: translateY(-4px);
          box-shadow: 0 12px 24px rgba(34, 197, 94, 0.3);
        }

        .category-button:hover .category-icon {
          color: #ffffff;
        }

        /* Active (selected) state - same green look, no layout shift on hover */
        .category-button.active {
          background-color: #22c55e;
          border-color: #16a34a;
          color: #ffffff;
        }

        .category-button.active .category-icon {
          color: #ffffff;
        }

        .category-button.active:hover {
          background-color: #22c55e;
          border-color: #16a34a;
          transform: translateY(-4px);
          box-shadow: 0 12px 24px rgba(34, 197, 94, 0.3);
        }

        .category-icon {
          transition: color 0.3s ease, transform 0.3s ease;
          animation: iconFloat 2s ease-in-out infinite;
          color: #22c55e;
        }

        .category-button:hover .category-icon,
        .category-button.active .category-icon {
          animation: none;
          transform: scale(1.2) rotate(10deg);
        }

        .category-button-text {
          transition: color 0.3s ease;
        }

        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>

      <div className="max-w-7xl mx-auto pb-1">
        
        {/* Header Section remains intact */}
        <div className="mb-4 md:mb-5">
          <h2 className="section-title text-xl sm:text-2xl md:text-3xl font-bold">
            Shop by <span className="text-green-500">Category</span>
          </h2>
          <p className="section-subtitle text-gray-600 text-xs sm:text-sm mt-1">
            Explore our wide range of products
          </p>
        </div>

        {/* Error State */}
        {error && (
          <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg mb-4">
            {error}
            <button
              onClick={fetchCategories}
              className="ml-4 underline font-semibold hover:text-red-900"
            >
              Retry
            </button>
          </div>
        )}

        {/* Safe Empty State vs Horizontal View Check */}
        {categories.length === 0 && !error ? (
          <div className="py-4 text-left">
            <p className="text-gray-500 text-sm italic">No categories available right now.</p>
          </div>
        ) : (
          <div
            className="hide-scrollbar flex gap-2.5 sm:gap-4 overflow-x-auto pb-2 pt-1 px-0 scroll-smooth touch-pan-x"
          >
            {categories.map((category, index) => {
              const Icon = category.icon;
              const isActive = selectedCategory === category.id;

              return (
                <button
                  key={category.id}
                  onClick={() => handleCategory(category.id, category.name)}
                  className={`category-button flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-full border-2 shadow-sm whitespace-nowrap ${
                    isActive ? "active" : ""
                  }`}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  style={{
                    animation: `slideInUp 0.5s ease-out ${index * 0.05}s both`,
                  }}
                >
                  <Icon
                    size={18}
                    className="category-icon"
                  />
                  <span className="category-button-text font-medium text-xs sm:text-sm md:text-base">
                    {category.name}
                  </span>
                </button>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}

export default FeaturedCategories;