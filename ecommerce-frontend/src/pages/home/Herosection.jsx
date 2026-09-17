import { Link } from "react-router-dom";

export default function HeroCenteredFloating() {
  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-slate-900 text-white py-24 lg:py-36">
      {/* Background Image Layer */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-100 pointer-events-none"
        style={{
          backgroundImage: `url('https://ik.imagekit.io/yz7lyfxnj/peter%20img/ChatGPT%20Image%20Sep%2017,%202026,%2010_22_47%20PM.png')`,
        }}
      />

      {/* Background Gradient & Mesh Overlay */}
      <div className="absolute inset-0 bg-linear-to-b from-slate-222/80 via-white/30 to-black pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(#334155_1px,transparent_1px)] [bg-size:16px_16px] opacity-30 pointer-events-none" />

      {/* Floating Pill Left - Nike Air Max */}
      {/* <div className="hidden lg:flex absolute top-16 left-12 items-center gap-3 bg-slate-800/90 border border-slate-700/80 p-2 pr-5 rounded-full shadow-2xl backdrop-blur-md animate-bounce [animation-duration:4s] z-20">
        <img
          src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=150&auto=format&fit=crop"
          alt="Nike Air Max"
          className="w-10 h-10 rounded-full object-cover"
        />
        <div>
          <p className="text-xs font-bold text-white">Nike Air Max</p>
          <p className="text-[10px] text-emerald-400 font-semibold">$129 • Trending</p>
        </div>
      </div> */}

      {/* Floating Pill Right - Smart Watch Ultra */}
      {/* <div className="hidden lg:flex absolute bottom-20 right-16 items-center gap-3 bg-slate-800/90 border border-slate-700/80 p-2 pr-5 rounded-full shadow-2xl backdrop-blur-md animate-bounce [animation-duration:5s] z-20">
        <img
          src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=150&auto=format&fit=crop"
          alt="Smart Watch"
          className="w-10 h-10 rounded-full object-cover"
        />
        <div>
          <p className="text-xs font-bold text-white">Smart Watch Ultra</p>
          <p className="text-[10px] text-emerald-400 font-semibold">20% OFF Deal</p>
        </div>
      </div> */}

      {/* Main Content Container */}
      <div className="max-w-4xl mx-auto px-4 text-center relative z-10 space-y-8">
        
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black  leading-[1.1]">
          The 
          <span className="bg-linear-to-r from-black via-black/90 to-black bg-clip-text text-transparent ">
            Smartest Way
          </span>  To Shop For <br />
          <span className="bg-linear-to-r from-black via-black/30 to-black bg-clip-text text-transparent">
            Everyday Essentials
          </span>
        </h1>

        <p className=" shadow-lg shadow-rose-500text-slate-300 text-base sm:text-lg max-w-2xl mx-auto font-normal leading-relaxed">
          Discover verified top-tier products with instant checkout, free express shipping, and 24/7 dedicated support.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
          <Link
            to="/products"
            className="w-full sm:w-auto px-10 py-4 bg-stone-700 hover:bg-white text-white hover:text-black font-extrabold text-base rounded-2xl shadow-lg shadow-rose-500 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
          >
            Start Shopping
          </Link>
          <a
            href="/products"
            className=" hover:shadow-lg shadow-rose-500 w-full sm:w-auto px-8 py-4 bg-black hover:bg-black/300 border border-slate-700 text-white font-bold text-base rounded-2xl transition-all"
          >
            Browse Categories
          </a>
        </div>
      </div>
    </section>
  );
}