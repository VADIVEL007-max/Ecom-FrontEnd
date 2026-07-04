import { useState, useEffect, useMemo } from "react";
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

function FeaturedCategories({ onSelectCategory }) {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch categories on component mount
  useEffect(() => {
    fetchCategories();
  }, []);

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
    console.log("Selected category:", categoryId, categoryName);

    // Pass selected category to parent component
    if (onSelectCategory) {
      onSelectCategory(categoryId, categoryName);
    }
  };

  // Memoize rendered category buttons so they aren't recreated on every
  // unrelated re-render (only recomputes when categories or selection change)
  const categoryButtons = useMemo(() => {
    return categories.map((category, index) => {
      const Icon = category.icon;
      const isActive = selectedCategory === category.id;

      return (
        <button
          key={category.id}
          onClick={() => handleCategory(category.id, category.name)}
          className={`category-button flex items-center gap-2 px-3 sm:px-5 py-3 rounded-full border-2 border-green-200 bg-white hover:text-white shadow-sm hover:shadow-lg whitespace-nowrap ${
            isActive ? "active" : ""
          }`}
          style={{
            animation: `slideInUp 0.5s ease-out ${index * 0.05}s both`,
          }}
        >
          <Icon
            size={20}
            className={`category-icon ${
              isActive ? "text-white" : "text-green-500"
            }`}
          />
          <span className="font-medium text-sm sm:text-base">
            {category.name}
          </span>
        </button>
      );
    });
  }, [categories, selectedCategory]);

  // Loading skeleton
  if (loading) {
    return (
      <section className="w-full px-3 sm:px-4 md:px-5 py-8 md:py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto pt-12">
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
    <section className="  w-full  mt-2.5 px-3 sm:px-4 md:px-5 py-8 md:py-12 bg-gray-50">
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

        .categories-container {
          animation: slideInUp 0.6s ease-out 0.2s both;
          opacity: 0;
        }

        .category-button {
          transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
          position: relative;
          overflow: hidden;
          flex-shrink: 0;
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

        .category-button:hover {
          transform: translateY(-6px);
          box-shadow: 0 12px 24px rgba(34, 197, 94, 0.3);
        }

        .category-button.active {
          background: #22c55e;
          color: white;
          border-color: #16a34a;
        }

        .category-button.active .category-icon {
          color: white;
        }

        .category-icon {
          transition: all 0.3s ease;
          animation: iconFloat 2s ease-in-out infinite;
        }

        .category-button:hover .category-icon,
        .category-button.active .category-icon {
          animation: none;
          transform: scale(1.2) rotate(10deg);
        }

        /* Horizontal scroll on ALL devices, scrollbar hidden but scroll/swipe enabled */
        #categories-scroll {
          scroll-behavior: smooth;
          -ms-overflow-style: none; /* IE and Edge */
          scrollbar-width: none; /* Firefox */
          -webkit-overflow-scrolling: touch; /* smooth swipe on iOS */
        }

        #categories-scroll::-webkit-scrollbar {
          display: none; /* Chrome, Safari */
        }
      `}</style>

      <div className="max-w-7xl mx-auto pt-4 md:pt-6">
        
        {/* Header Section */}
        <div className="mb-6 md:mb-8">
          <h2 className="section-title text-2xl sm:text-3xl md:text-4xl font-bold">
            Shop by <span className="text-green-500">Category</span>
          </h2>
          <p className="section-subtitle text-gray-600 text-sm sm:text-base mt-2">
            Explore our wide range of products
          </p>
        </div>

        {/* Error State */}
        {error && (
          <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg mb-6">
            {error}
            <button
              onClick={fetchCategories}
              className="ml-4 underline font-semibold hover:text-red-900"
            >
              Retry
            </button>
          </div>
        )}

        {/* Sticky Horizontal Scroll Bar - used on ALL devices */}
        <div className="sticky top-14 lg:top-16 z-40 bg-gray-50">
          <div
            id="categories-scroll"
            className="categories-container flex gap-3 sm:gap-4 overflow-x-auto py-3 px-0"
          >
            {categoryButtons}
          </div>
        </div>

        {/* Empty State */}
        {categories.length === 0 && !error && (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">No categories available</p>
          </div>
        )}
      </div>
    </section>
  );
}

export default FeaturedCategories;