import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { useState } from "react";
import { ChevronRight, Zap } from "lucide-react";

import "swiper/css";
import "swiper/css/pagination";

const offers = [
  {
    title: "Summer Sale",
    subtitle: "Up to 50% OFF",
    description: "Discover amazing deals on the latest products",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600",
    buttonText: "Shop Now",
    bgColor: "from-blue-50 to-blue-100",
  },
  {
    title: "Latest Smartphones",
    subtitle: "Starting from ₹19,999",
    description: "Premium quality at unbeatable prices",
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=600",
    buttonText: "Explore",
    bgColor: "from-purple-50 to-purple-100",
  },
  {
    title: "Fashion Collection",
    subtitle: "Flat 60% OFF",
    description: "Trending styles for every occasion",
    image: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=600",
    buttonText: "Browse",
    bgColor: "from-pink-50 to-pink-100",
  },
  {
    title: "Gaming Zone",
    subtitle: "Best Gaming Deals",
    description: "Level up your gaming experience",
    image: "https://images.unsplash.com/photo-1605901309584-818e25960a8f?w=600",
    buttonText: "Shop",
    bgColor: "from-red-50 to-red-100",
  },
  {
    title: "Furniture Festival",
    subtitle: "Up to 40% OFF",
    description: "Transform your living spaces",
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=600",
    buttonText: "Discover",
    bgColor: "from-orange-50 to-orange-100",
  },
];

function OfferSlider() {
  const [activeSlide, setActiveSlide] = useState(0);

  return (
    <section className="w-full px-2 sm:px-3 md:px-4 py-3 sm:py-5 md:py-0 bg-white mx-auto">
      <style>{`
        @keyframes slideInLeft {
          from { opacity: 0; transform: translateX(-40px); }
          to { opacity: 1; transform: translateX(0); }
        }

        @keyframes slideInRight {
          from { opacity: 0; transform: translateX(40px); }
          to { opacity: 1; transform: translateX(0); }
        }

        @keyframes slideInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }

        .swiper-container {
          width: 100%;
          overflow: hidden;
        }

        .slider-content {
          display: flex;
          align-items: center;
          gap: 20px;
          padding: 20px;
          border-radius: 16px;
          min-height: 280px;
        }

        .slider-left {
          flex: 1;
          min-width: 0;
        }

        .slider-right {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          min-width: 0;
        }

        .slider-image {
          width: 100%;
          height: 100%;
          max-height: 320px;
          object-fit: contain;
          animation: slideInRight 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
          animation-delay: 0.1s;
          opacity: 0;
        }

        .slider-title {
          font-size: 32px;
          font-weight: 800;
          color: #1f2937;
          margin-bottom: 8px;
          line-height: 1.2;
          animation: slideInLeft 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
          opacity: 0;
        }

        .slider-subtitle {
          font-size: 18px;
          font-weight: 700;
          color: #22c55e;
          margin-bottom: 12px;
          display: flex;
          align-items: center;
          gap: 8px;
          animation: slideInLeft 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) 0.1s forwards;
          opacity: 0;
        }

        .slider-description {
          font-size: 14px;
          color: #6b7280;
          margin-bottom: 20px;
          line-height: 1.6;
          animation: slideInLeft 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) 0.2s forwards;
          opacity: 0;
        }

        .slider-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: linear-gradient(135deg, #22c55e 0%, #16a34a 100%);
          color: white;
          padding: 12px 28px;
          border-radius: 50px;
          border: none;
          font-weight: 600;
          font-size: 15px;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
          position: relative;
          overflow: hidden;
          animation: slideInUp 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) 0.3s forwards;
          opacity: 0;
        }

        .slider-btn::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: rgba(255, 255, 255, 0.2);
          transition: left 0.5s ease;
        }

        .slider-btn:hover::before {
          left: 100%;
        }

        .slider-btn:hover {
          transform: translateY(-3px);
          box-shadow: 0 12px 24px rgba(34, 197, 94, 0.3);
        }

        .slider-btn:active {
          transform: translateY(-1px);
        }

        /* Pagination */
        .swiper-pagination {
          bottom: 16px !important;
        }

        .swiper-pagination-bullet {
          width: 10px !important;
          height: 10px !important;
          background: rgba(31, 41, 55, 0.3) !important;
          transition: all 0.3s ease !important;
          cursor: pointer !important;
          border-radius: 50% !important;
        }

        .swiper-pagination-bullet-active {
          background: #22c55e !important;
          width: 28px !important;
          border-radius: 5px !important;
        }

        .swiper-wrapper {
          transition-timing-function: cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        /* Badge animation */
        .badge-icon {
          animation: float 2s ease-in-out infinite;
        }

        /* Responsive */
        @media (max-width: 768px) {
          .slider-content {
            flex-direction: column-reverse;
            min-height: auto;
            gap: 16px;
            padding: 16px;
          }

          .slider-title {
            font-size: 22px;
          }

          .slider-subtitle {
            font-size: 16px;
          }

          .slider-description {
            font-size: 13px;
            margin-bottom: 16px;
          }

          .slider-image {
            max-height: 240px;
          }

          .slider-btn {
            padding: 10px 20px;
            font-size: 13px;
          }

          .swiper-pagination {
            bottom: 12px !important;
          }

          .swiper-pagination-bullet {
            width: 8px !important;
            height: 8px !important;
          }

          .swiper-pagination-bullet-active {
            width: 24px !important;
          }
        }

        @media (min-width: 769px) and (max-width: 1024px) {
          .slider-content {
            min-height: 300px;
            gap: 24px;
          }

          .slider-title {
            font-size: 26px;
          }

          .slider-subtitle {
            font-size: 16px;
          }

          .slider-image {
            max-height: 280px;
          }
        }

        @media (min-width: 1025px) {
          .slider-content {
            min-height: 350px;
            gap: 40px;
          }

          .slider-image {
            max-height: 350px;
          }
        }
      `}</style>

      <div className="max-w-7xl    pt-25 mx-auto">
        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          speed={800}
          pagination={{ 
            clickable: true,
            dynamicBullets: true,
          }}
          loop={true}
          onSlideChange={(swiper) => setActiveSlide(swiper.activeIndex)}
          className="swiper-container"
        >
          {offers.map((offer, index) => (
            <SwiperSlide key={index}>
              <div className={`slider-content bg-linear-to-br ${offer.bgColor}`}>
                
                {/* Left Side - Text Content */}
                <div className="slider-left">
                  <h2 className="slider-title">{offer.title}</h2>
                  
                  <div className="slider-subtitle">
                    <Zap size={20} className="badge-icon" />
                    {offer.subtitle}
                  </div>

                  <p className="slider-description">{offer.description}</p>

                  <button className="slider-btn">
                    {offer.buttonText}
                    <ChevronRight size={18} />
                  </button>
                </div>

                {/* Right Side - Image */}
                <div className="slider-right">
                  <img
                    src={offer.image}
                    alt={offer.title}
                    className="slider-image"
                    loading="lazy"
                  />
                </div>

              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Slide Counter */}
        {/* <div className="flex justify-center mt-4">
          <span className="text-sm text-gray-500 font-medium">
            {activeSlide + 1} / {offers.length}
          </span>
        </div> */}
      </div>
    </section>
  );
}

export default OfferSlider;