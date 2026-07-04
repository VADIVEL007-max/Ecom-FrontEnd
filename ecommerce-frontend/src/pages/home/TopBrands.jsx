import "./TopBrands.css";

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
    name: "Dell",
    logo: "https://upload.wikimedia.org/wikipedia/commons/1/18/Dell_logo_2016.svg",
  },
  {
    name: "HP",
    logo: "https://upload.wikimedia.org/wikipedia/commons/a/ad/HP_logo_2012.svg",
  },
  {
    name: "Lenovo",
    logo: "https://upload.wikimedia.org/wikipedia/commons/b/b8/Lenovo_logo_2015.svg",
  },
  {
    name: "ASUS",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/2e/ASUS_Logo.svg",
  },
  {
    name: "Acer",
    logo: "https://upload.wikimedia.org/wikipedia/commons/5/5d/Acer_2011.svg",
  },
  {
    name: "Xiaomi",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/29/Xiaomi_logo.svg",
  },
  {
    name: "OnePlus",
    logo: "https://upload.wikimedia.org/wikipedia/commons/b/b2/OnePlus_logo.svg",
  },
  {
    name: "Nike",
    logo: "https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg",
  },
  {
    name: "Adidas",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/20/Adidas_Logo.svg",
  },
];

function TopBrands() {
  return (
    <section className="max-w-7xl mx-auto px-5 py-16 overflow-hidden">
      {/* Heading */}
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold">
          Top <span className="text-green-500">Brands</span>
        </h2>

        <p className="text-gray-500 mt-2">
          Shop products from the world's most trusted brands
        </p>
      </div>

      <div className="relative">

        {/* Left Fade */}
        <div className="absolute left-0 top-0 h-full w-20 bg-gradient-to-r from-white to-transparent z-20"></div>

        {/* Right Fade */}
        <div className="absolute right-0 top-0 h-full w-20 bg-gradient-to-l from-white to-transparent z-20"></div>

        <div className="brand-slider">

          <div className="brand-track">

            {[...brands, ...brands].map((brand, index) => (

              <div className="brand-card" key={index}>

                <img
                  src={brand.logo}
                  alt={brand.name}
                />

              </div>

            ))}

          </div>

        </div>

      </div>
    </section>
  );
}

export default TopBrands;