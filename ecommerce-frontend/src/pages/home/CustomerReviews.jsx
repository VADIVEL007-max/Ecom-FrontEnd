import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { Star } from "lucide-react";

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

function CustomerReviews() {
  return (
    <section className="max-w-7xl mx-auto px-5 py-14">
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold">
          What Our <span className="text-green-500">Customers Say</span>
        </h2>

        <p className="text-gray-500 mt-2">
          Trusted by thousands of happy customers.
        </p>
      </div>

      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={25}
        loop={true}
        speed={500}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
        }}
      >
        {reviews.map((review) => (
          <SwiperSlide key={review.id}>
            <div className="bg-white rounded-2xl shadow-md p-8 h-full hover:shadow-xl transition duration-300">
              <div className="flex items-center gap-4">
                <img
                  src={review.image}
                  alt={review.name}
                  className="w-16 h-16 rounded-full border-2 border-green-500"
                />

                <div>
                  <h3 className="font-bold text-lg">
                    {review.name}
                  </h3>

                  <p className="text-sm text-gray-500">
                    {review.role}
                  </p>
                </div>
              </div>

              <div className="flex gap-1 mt-5">
                {[...Array(review.rating)].map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    className="fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              <p className="text-gray-600 leading-7 mt-5">
                "{review.review}"
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default CustomerReviews;


// import { Star } from "lucide-react";

// const reviews = [
//   {
//     id: 1,
//     name: "Arun Kumar",
//     role: "Verified Buyer",
//     image:
//       "https://randomuser.me/api/portraits/men/32.jpg",
//     rating: 5,
//     review:
//       "Amazing shopping experience! Fast delivery and excellent product quality.",
//   },
//   {
//     id: 2,
//     name: "Priya Sharma",
//     role: "Verified Buyer",
//     image:
//       "https://randomuser.me/api/portraits/women/44.jpg",
//     rating: 5,
//     review:
//       "The website is easy to use and customer support was very helpful.",
//   },
//   {
//     id: 3,
//     name: "Rahul Verma",
//     role: "Verified Buyer",
//     image:
//       "https://randomuser.me/api/portraits/men/51.jpg",
//     rating: 4,
//     review:
//       "Great discounts and genuine products. I'll definitely shop here again.",
//   },
// ];

// function CustomerReviews() {
//   return (
//     <section className="max-w-7xl mx-auto px-5 py-14">
//       {/* Heading */}
//       <div className="text-center mb-12">
//         <h2 className="text-4xl font-bold">
//           What Our <span className="text-green-500">Customers Say</span>
//         </h2>

//         <p className="text-gray-500 mt-2">
//           Trusted by thousands of happy shoppers.
//         </p>
//       </div>

//       {/* Cards */}
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//         {reviews.map((review) => (
//           <div
//             key={review.id}
//             className="bg-white rounded-2xl shadow-md p-7 hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
//           >
//             {/* User */}
//             <div className="flex items-center gap-4">
//               <img
//                 src={review.image}
//                 alt={review.name}
//                 className="w-16 h-16 rounded-full object-cover border-2 border-green-500"
//               />

//               <div>
//                 <h3 className="font-bold text-lg">
//                   {review.name}
//                 </h3>

//                 <p className="text-sm text-gray-500">
//                   {review.role}
//                 </p>
//               </div>
//             </div>

//             {/* Rating */}
//             <div className="flex gap-1 mt-5">
//               {[...Array(review.rating)].map((_, index) => (
//                 <Star
//                   key={index}
//                   size={18}
//                   className="fill-yellow-400 text-yellow-400"
//                 />
//               ))}
//             </div>

//             {/* Review */}
//             <p className="text-gray-600 mt-5 leading-7">
//               "{review.review}"
//             </p>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }

// export default CustomerReviews;