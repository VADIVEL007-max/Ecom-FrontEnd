
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { Star, MessageSquareQuote } from "lucide-react";

import "swiper/css";
import "swiper/css/pagination";

const reviews = [
  {
    id: 1,
    name: "Arun Kumar",
    role: "Verified Buyer",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    rating: 5,
    review:
      "Amazing shopping experience! Fast delivery and excellent product quality.",
  },
  {
    id: 2,
    name: "Priya Sharma",
    role: "Verified Buyer",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    rating: 5,
    review:
      "Excellent customer support. The website is easy to use and delivery was super fast.",
  },
  {
    id: 3,
    name: "Rahul Verma",
    role: "Verified Buyer",
    image: "https://randomuser.me/api/portraits/men/51.jpg",
    rating: 4,
    review:
      "Great discounts and genuine products. Definitely recommended!",
  },
  {
    id: 4,
    name: "Sneha Patel",
    role: "Verified Buyer",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
    rating: 5,
    review:
      "Loved the shopping experience. Easy returns and secure payment.",
  },
];

export default function CustomerReviews() {
  return (
    <section className="bg-linear-to-b from-white to-black text-slate-100 py-20 px-6 border-t border-slate-800/80 overflow-hidden relative">
      {/* Custom Swiper Pagination Styling */}
      <style>{`
        .swiper-pagination-bullet {
          background: #334155 !important;
          opacity: 1 !important;
          width: 10px !important;
          height: 10px !important;
          transition: all 0.3s ease !important;
        }
        .swiper-pagination-bullet-active {
          background: #10b981 !important;
          width: 28px !important;
          border-radius: 6px !important;
        }
        .swiper {
          padding-bottom: 50px !important;
        }
      `}</style>

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          

          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            What Our <span className="text-green-500">Customers Say</span>
          </h2>

          <p className="text-slate-200 mt-4 text-base sm:text-lg">
            Trusted by thousands of happy shoppers across the country.
          </p>
        </div>

        {/* Swiper Carousel */}
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={24}
          loop={true}
          speed={600}
          autoplay={{
            delay: 4500,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {reviews.map((review) => (
            <SwiperSlide key={review.id} className="h-auto">
              <div className="group bg-black border border-slate-800/80 rounded-3xl p-8 h-full flex flex-col justify-between transition-all duration-300 hover:border-emerald-500/40 hover:bg-slate-900 hover:shadow-xl hover:shadow-emerald-500/5">
                <div>
                  {/* Top Quote & Rating Header */}
                  <div className="flex items-center justify-between mb-6">
                    <MessageSquareQuote className="w-8 h-8 text-emerald-500/40 group-hover:text-emerald-400 transition-colors" />

                    <div className="flex gap-1 bg-slate-950/60 px-3 py-1.5 rounded-full border border-slate-800">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={14}
                          className={
                            i < review.rating
                              ? "fill-amber-400 text-amber-400"
                              : "fill-slate-700 text-slate-700"
                          }
                        />
                      ))}
                    </div>
                  </div>

                  {/* Review Text */}
                  <p className="text-slate-300 text-base leading-relaxed mb-8 italic">
                    "{review.review}"
                  </p>
                </div>

                {/* User Info Footer */}
                <div className="flex items-center gap-4 pt-6 border-t border-slate-800/80">
                  <img
                    src={review.image}
                    alt={review.name}
                    className="w-12 h-12 rounded-full object-cover border-2 border-emerald-500/40 group-hover:border-emerald-400 transition-colors"
                  />
                  <div>
                    <h3 className="font-bold text-white text-base group-hover:text-emerald-300 transition-colors">
                      {review.name}
                    </h3>
                    <p className="text-xs text-emerald-400 font-semibold mt-0.5">
                      {review.role}
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}