import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function OffersHeroSection() {
  const deals = [
    {
      id: 1,
      title: "Smartwatch Elite",
      price: "$199",
      originalPrice: "$249",
      tag: "20% OFF",
      image: "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?q=80&w=600&auto=format&fit=crop",
    },
    {
      id: 2,
      title: "Runner Pro X",
      price: "$129",
      originalPrice: "$169",
      tag: "FLASH DEAL",
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=600&auto=format&fit=crop",
    },
    {
      id: 3,
      title: "Studio Headset Pro",
      price: "$299",
      originalPrice: "$399",
      tag: "HOT DEAL",
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=600&auto=format&fit=crop",
    },
    {
      id: 4,
      title: "Minimalist Camera",
      price: "$499",
      originalPrice: "$599",
      tag: "SAVE $100",
      image: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?q=80&w=600&auto=format&fit=crop",
    },
    {
      id: 5,
      title: "Wireless Speaker",
      price: "$89",
      originalPrice: "$119",
      tag: "LIMITED",
      image: "https://images.unsplash.com/photo-1545454675-3531b543be5d?q=80&w=600&auto=format&fit=crop",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-scrolls every 7 seconds (7000ms)
  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 7000);

    return () => clearInterval(timer);
  }, [currentIndex]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % deals.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + deals.length) % deals.length);
  };

  return (
    <section className="w-full bg-white py-6 sm:py-10 px-3 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto bg-slate-50/70 border border-slate-100 rounded-3xl p-5 sm:p-8 lg:p-10 shadow-sm">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Heading & CTA */}
          <div className="lg:col-span-5 space-y-4 text-left">
            <div className="inline-block">
              <span className="text-[11px] sm:text-xs font-bold tracking-wider text-emerald-700 uppercase bg-emerald-100/70 px-3 py-1.5 rounded-md">
                BIG SEASON DISCOUNTS
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-[1.1]">
              Unbeatable Deals on <br />
              <span className="text-emerald-600">Everything You Love.</span>
            </h1>

            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-normal">
              Shop over 10,000 top-rated electronics, fashion, and home goods with 30-day hassle-free returns.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-1">
              <Link
                to="/offers"
                className="inline-flex items-center justify-center px-6 py-3 bg-emerald-600 hover:bg-emerald-700 active:scale-95 text-white font-bold rounded-xl shadow-md transition-all text-xs sm:text-sm"
              >
                Start Shopping Now
              </Link>
              
              <div className="flex items-center gap-1 text-xs font-semibold text-slate-500">
                <span>🔒</span>
                <span>Guaranteed Safe Checkout</span>
              </div>
            </div>
          </div>

          {/* Right Column: 2 Also/Side-by-Side Low-Height Wide Cards */}
          <div className="lg:col-span-7 relative overflow-hidden pt-2">
            
            {/* Sliding Track (2 Cards Visible Side-by-Side) */}
            <div
              className="flex transition-transform duration-700 ease-in-out gap-3 sm:gap-4"
              style={{
                transform: `translateX(-${currentIndex * 52}%)`,
              }}
            >
              {deals.map((item) => (
                <div
                  key={item.id}
                  /* Low height + wide horizontal card layout (Image Left, Details Right) */
                  className="min-w-[85%] sm:min-w-[calc(50%-6px)] bg-slate-100/90 border border-slate-200/80 rounded-2xl p-2.5 sm:p-3 shadow-xs shrink-0 flex items-center gap-3"
                >
                  {/* Left Side: Square Compact Image */}
                  <div className="relative w-20 h-20 sm:w-22 sm:h-22 rounded-xl overflow-hidden bg-white shrink-0">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
                    />
                    <span className="absolute top-1 left-1 bg-emerald-600 text-white text-[8px] sm:text-[9px] font-extrabold px-1.5 py-0.5 rounded-md shadow-xs">
                      {item.tag}
                    </span>
                  </div>

                  {/* Right Side: Title & Pricing */}
                  <div className="space-y-1 flex-1 min-w-0">
                    <h3 className="text-xs sm:text-sm font-bold text-slate-900 truncate">
                      {item.title}
                    </h3>
                    
                    <p className="text-[10px] sm:text-xs text-slate-500 font-medium">
                      In Stock • Free Delivery
                    </p>

                    <div className="flex items-baseline gap-1.5 pt-0.5">
                      <span className="text-sm sm:text-base font-black text-emerald-600">
                        {item.price}
                      </span>
                      <span className="text-[10px] sm:text-xs text-slate-400 line-through">
                        {item.originalPrice}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination Dots & Navigation Controls */}
            <div className="flex items-center justify-between pt-4 px-1">
              <div className="flex items-center gap-1.5">
                {deals.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      currentIndex === idx
                        ? "w-5 bg-emerald-600"
                        : "w-1.5 bg-slate-300 hover:bg-slate-400"
                    }`}
                  />
                ))}
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={handlePrev}
                  className="w-7 h-7 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-600 hover:border-emerald-500 hover:text-emerald-600 shadow-xs transition-all text-xs font-bold"
                >
                  ←
                </button>
                <button
                  onClick={handleNext}
                  className="w-7 h-7 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-600 hover:border-emerald-500 hover:text-emerald-600 shadow-xs transition-all text-xs font-bold"
                >
                  →
                </button>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}