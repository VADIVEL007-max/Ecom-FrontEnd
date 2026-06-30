import { useEffect, useState } from "react";
import api from "../services/api";
import ProductCard from "../components/ProductCard";
// import Loader from "./Loader";
import FeaturedCategories from "../components/FeaturedCategories";
import OfferSlider from "../components/OfferSlider";
import { X } from "lucide-react";

function Products() {
  const [products, setProducts] = useState([]);
  const [allProducts, setAllProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedCategoryId, setSelectedCategoryId] = useState(null);
  const [categoryName, setCategoryName] = useState("All Products");

  // Fetch all products on mount
  useEffect(() => {
    getProducts();
  }, []);

  // Filter products when category changes
  useEffect(() => {
    if (selectedCategoryId) {
      filterProductsByCategory(selectedCategoryId);
    } else {
      setProducts(allProducts);
      setCategoryName("All Products");
    }
  }, [selectedCategoryId, allProducts]);

  // Get all products
  const getProducts = async () => {
    try {
      setLoading(true);
      const response = await api.get("/api/product");
      console.log("All Products Response:", response.data);
      
      if (response.data.data) {
        setAllProducts(response.data.data);
        setProducts(response.data.data);
      }
      setLoading(false);
    } catch (error) {
      console.error("Error fetching products:", error);
      setLoading(false);
    }
  };

  // Filter products by category (Client-side filtering)
  const filterProductsByCategory = (categoryId) => {
    console.log("Filtering by category ID:", categoryId);
    console.log("All products:", allProducts);

    // Filter products where category ID matches
    const filtered = allProducts.filter(
      (product) => product.categoryId === categoryId || product.category_id === categoryId
    );

    console.log("Filtered products:", filtered);

    if (filtered.length > 0) {
      setProducts(filtered);
    } else {
      // If no products found with that category ID, try matching by category name
      console.warn("No products found by ID, trying by name...");
      setProducts(allProducts);
    }
  };

  // Handle category selection from FeaturedCategories
  const handleCategorySelect = (categoryId, categoryName) => {
    setSelectedCategoryId(categoryId);
    setCategoryName(categoryName);
    console.log("Selected Category ID:", categoryId, "Name:", categoryName);
  };

  // Clear filter
  const clearFilter = () => {
    setSelectedCategoryId(null);
    setCategoryName("All Products");
    setProducts(allProducts);
  };

  // if (loading && allProducts.length === 0) {
  //   return ;
  // }

  return (
    <>
      {/* Offer Slider - Optional */}
    <OfferSlider/>

      {/* Featured Categories */}
      <FeaturedCategories onSelectCategory={handleCategorySelect} />
        

      {/* Products Section */}
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-5 py-1 md:py-12">
        <style>{`
          @keyframes slideInDown {
            from { opacity: 0; transform: translateY(-20px); }
            to { opacity: 1; transform: translateY(0); }
          }

          @keyframes slideInUp {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }

          @keyframes fadeOut {
            from { opacity: 1; }
            to { opacity: 0; }
          }

          .section-header {
            animation: slideInDown 0.6s ease-out;
          }

          .products-grid {
            animation: slideInUp 0.6s ease-out 0.2s both;
            opacity: 0;
          }

          .product-item {
            animation: slideInUp 0.5s ease-out both;
          }

          .filter-badge {
            animation: slideInDown 0.5s ease-out;
            display: inline-flex;
            align-items: center;
            gap: 8px;
            background: linear-gradient(135deg, #22c55e 0%, #16a34a 100%);
            color: white;
            padding: 8px 16px;
            border-radius: 50px;
            font-weight: 600;
            font-size: 14px;
            margin-bottom: 20px;
          }

          .clear-filter-btn {
            background: rgba(255, 255, 255, 0.2);
            border: none;
            cursor: pointer;
            padding: 4px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: all 0.3s ease;
          }

          .clear-filter-btn:hover {
            background: rgba(255, 255, 255, 0.4);
            transform: scale(1.1);
          }

          .empty-state {
            animation: slideInUp 0.6s ease-out;
          }

          .product-count {
            color: #6b7280;
            font-size: 14px;
            margin-top: 8px;
          }
        `}</style>

        {/* Header */}
        <div className="section-header mb-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">
                <span className="text-green-500">{categoryName}</span>
              </h1>
              <p className="product-count">
                {products.length} product{products.length !== 1 ? "s" : ""} available
              </p>
            </div>
          </div>

          {/* Active Filter Badge */}
          {selectedCategoryId && (
            <div className="filter-badge mt-4">
              <span>Filtering by: {categoryName}</span>
              <button
                onClick={clearFilter}
                className="clear-filter-btn"
                title="Clear filter"
              >
                <X size={16} />
              </button>
            </div>
          )}
        </div>

        {/* Products Grid */}
        {products.length > 0 ? (
          <div className="products-grid grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4 md:gap-6">
            {products.map((product, index) => (
              <div
                key={product.id}
                className="product-item"
                style={{
                  animation: `slideInUp 0.5s ease-out ${index * 0.05}s both`,
                  opacity: 0,
                }}
              >
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        ) : (
          // Empty State
          <div className="empty-state bg-white rounded-xl shadow-md p-12 sm:p-16 text-center">
            <div className="text-6xl mb-4">📭</div>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
              No Products Found
            </h2>
            <p className="text-gray-600 mb-6">
              We couldn't find any products in the "{categoryName}" category.
              <br />
              <small className="text-gray-500 mt-2 block">
                (Check if category ID matches product data)
              </small>
            </p>
            <button
              onClick={clearFilter}
              className="inline-flex items-center gap-2 px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-bold rounded-lg transition-colors"
            >
              <X size={18} />
              View All Products
            </button>
          </div>
        )}
      </div>
    </>
  );
}

export default Products;