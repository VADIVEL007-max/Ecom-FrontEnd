import ProductCard from "./ProductCard";

const featuredProducts = [
  {
    id: 1,
    title: "iPhone 15",
    description: "128GB Black",
    price: 79999,
    stock: 10,
    image:
      "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=600",
  },
  {
    id: 2,
    title: "Samsung S24",
    description: "256GB Silver",
    price: 69999,
    stock: 8,
    image:
      "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=600",
  },
  {
    id: 3,
    title: "MacBook Air",
    description: "M3 Chip",
    price: 99999,
    stock: 5,
    image:
      "https://images.pexels.com/photos/18105/pexels-photo.jpg",
  },
  {
    id: 4,
    title: "AirPods Pro",
    description: "2nd Generation",
    price: 24999,
    stock: 15,
    image:
      "https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?w=600",
  },
];

function FeaturedProducts() {
  return (
    <section className="max-w-7xl mx-auto px-5 py-12">
      {/* Heading */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-4xl font-bold">
            Featured <span className="text-green-500">Products</span>
          </h2>

          <p className="text-gray-500 mt-2">
            Handpicked products just for you.
          </p>
        </div>

        <button className="hidden md:block px-5 py-2 border border-green-500 text-green-500 rounded-full hover:bg-green-500 hover:text-white transition-all duration-300">
          View All
        </button>
      </div>

      {/* Products */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {featuredProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </div>
    </section>
  );
}

export default FeaturedProducts;


// function FeaturedProducts() {
  
//   return (
//     <div>
//          <section className="max-w-7xl mx-auto px-5 py-10">
//           <h2 className="text-3xl font-bold mb-6">
//             Featured Products
//           </h2>
        
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
//            <ProductCard
//               product={{
//                 title: "iPhone 15",
//                 description: "128GB Black",
//                 price: 79999,
//                 stock: 10,
//                 image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab"
//               }}
//             />

//             <ProductCard
//               product={{
//                 title: "Samsung S24",
//                 description: "256GB Silver",
//                 price: 69999,
//                 stock: 8,
//                 image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf"
//               }}
//             />

//             <ProductCard
//               product={{
//                 title: "MacBook Air",
//                 description: "M3 Chip",
//                 price: 99999,
//                 stock: 5,
//                 image: "https://images.pexels.com/photos/18105/pexels-photo.jpg"
//               }}
//             />

//             <ProductCard
//               product={{
//                 title: "AirPods Pro",
//                 description: "2nd Generation",
//                 price: 24999,
//                 stock: 15,
//                 image: "https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46"
//               }}
//             />
        
//           </div>
//               </section>

//     </div>
//   )
// }

// export default FeaturedProducts