

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

export default function TopBrands() {
  return (
    <section className="bg-linear-to-b from-black  to-white  py-20 px-6 border-t border-slate-800 overflow-hidden relative">
      {/* Inline Keyframes for Marquee Animation */}
      <style>{`
        @keyframes marqueeScroll {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee-scroll {
          animation: marqueeScroll 25s linear infinite;
        }
      `}</style>

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
         

          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Top <span className="text-green-500">Brands</span>
          </h2>

          <p className="text-white mt-4 text-base sm:text-lg">
            Shop authentic products directly from the world's most trusted manufacturers.
          </p>
        </div>

        {/* Marquee Wrapper with Fade Gradient Overlays */}
        <div className="relative w-full overflow-hidden">
          {/* Left Fade Overlay */}
          <div className="absolute left-0 top-0 h-full w-24 sm:w-40 bg-linear-to-r from-black via-slate-100 to-transparent z-20 pointer-events-none" />

          {/* Right Fade Overlay */}
          <div className="absolute right-0 top-0 h-full w-24 sm:w-40 bg-linear-to-l from-black via-slate-100 to-transparent z-20 pointer-events-none" />

          {/* Scrolling Container */}
          <div className="flex w-max space-x-6 animate-marquee-scroll hover:[animation-play-state:paused]">
            {[...brands, ...brands].map((brand, index) => (
              <div
                key={index}
                className="group w-40 sm:w-48 h-24 sm:h-28 bg-black border text-taupe-100 border-slate-800/80 rounded-2xl flex items-center justify-center p-6 shrink-0 transition-all duration-300 hover:border-emerald-500/40 hover:bg-slate-900 hover:shadow-lg hover:shadow-emerald-500/10 hover:-translate-y-1 cursor-pointer"
              >
                <img
                  src={brand.logo}
                  alt={brand.name}
                  className="max-h-8 sm:max-h-10 w-auto object-contain filter brightness-20 invert opacity-50 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}