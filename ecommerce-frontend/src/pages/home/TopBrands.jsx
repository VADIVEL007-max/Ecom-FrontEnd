// const brands = [
//   {
//     name: "Apple",
//     logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
//   },
//   {
//     name: "Samsung",
//     logo: "https://upload.wikimedia.org/wikipedia/commons/2/24/Samsung_Logo.svg",
//   },
//   {
//     name: "Sony",
//     logo: "https://upload.wikimedia.org/wikipedia/commons/c/ca/Sony_logo.svg",
//   },
//   {
//     name: "Dell",
//     logo: "https://upload.wikimedia.org/wikipedia/commons/1/18/Dell_logo_2016.svg",
//   },
//   {
//     name: "HP",
//     logo: "https://upload.wikimedia.org/wikipedia/commons/a/ad/HP_logo_2012.svg",
//   },
//   {
//     name: "Lenovo",
//     logo: "https://upload.wikimedia.org/wikipedia/commons/b/b8/Lenovo_logo_2015.svg",
//   },
// ];

// function TopBrands() {
//   return (
    
//     <section className="max-w-7xl mx-auto px-5 py-14">
//       {/* Heading */}
//       <div className="text-center mb-10">
//         <h2 className="text-4xl font-bold">
//           Top <span className="text-green-500">Brands</span>
//         </h2>

//         <p className="text-gray-500 mt-2">
//           Trusted brands available at SmartBuy
//         </p>
//       </div>

//       {/* Slider */}
//       <div className="relative overflow-hidden">
//         {/* Left Fade */}
//         <div className="absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>

//         {/* Right Fade */}
//         <div className="absolute right-0 top-0 h-full w-24 bg-gradient-to- from-white to-transparent z-10 pointer-events-none"></div>

//         {/* Logos */}
//         <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
//           {[...brands, ...brands].map((brand, index) => (
//             <div
//               key={index}
//               className="mx-12 flex-shrink-0 flex items-center justify-center"
//             >
//               <img
//                 src={brand.logo}
//                 alt={brand.name}
//                 className="h-12 w-auto grayscale hover:grayscale-0 hover:scale-110 transition-all duration-300"
//               />
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// export default TopBrands;

const brands = [
  {
    name: "Apple",
    logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
  },
  {
    name: "Samsung",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/24/Samsung_Logo.svg",
  },
  {
    name: "Sony",
    logo: "https://upload.wikimedia.org/wikipedia/commons/c/ca/Sony_logo.svg",
  },
  {
    name: "HP",
    logo: "https://upload.wikimedia.org/wikipedia/commons/a/ad/HP_logo_2012.svg",
  },
  {
    name: "Dell",
    logo: "https://upload.wikimedia.org/wikipedia/commons/1/18/Dell_logo_2016.svg",
  },
  {
    name: "Lenovo",
    logo: "https://upload.wikimedia.org/wikipedia/commons/b/b8/Lenovo_logo_2015.svg",
  },
];

function TopBrands() {
  return (
    <section className="max-w-7xl mx-auto px-5 py-14">
      {/* Heading */}
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold">
          Top <span className="text-green-500">Brands</span>
        </h2>

        <p className="text-gray-500 mt-2">
          Shop products from the world's most trusted brands.
        </p>
      </div>

      {/* Brand Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
        {brands.map((brand, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex items-center justify-center p-6"
          >
            <img
              src={brand.logo}
              alt={brand.name}
              className="h-10 object-contain grayscale hover:grayscale-0 transition duration-300"
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default TopBrands;