import { Link } from "react-router-dom";

function Herosection() {
  return (
    <div>
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes fadeInDown {
          from { opacity: 0; transform: translateY(-30px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes slideInLeft {
          from { opacity: 0; transform: translateX(-50px); }
          to { opacity: 1; transform: translateX(0); }
        }

        @keyframes slideInRight {
          from { opacity: 0; transform: translateX(50px); }
          to { opacity: 1; transform: translateX(0); }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }

        @keyframes shimmer {
          0% { background-position: -1000px 0; }
          100% { background-position: 1000px 0; }
        }

        @keyframes pulse {
          0%, 100% { box-shadow: 0 0 0 0 rgba(34, 197, 94, 0.7); }
          50% { box-shadow: 0 0 0 10px rgba(34, 197, 94, 0); }
        }

        .hero-section {
          background: linear-gradient(135deg, #f0fdf4 0%, #dcfce7 50%, #bbf7d0 100%);
          position: relative;
          overflow: hidden;
        }

        .hero-section::before {
          content: '';
          position: absolute;
          top: -50%;
          right: -10%;
          width: 500px;
          height: 500px;
          background: rgba(34, 197, 94, 0.1);
          border-radius: 50%;
          animation: float 6s ease-in-out infinite;
        }

        .hero-section::after {
          content: '';
          position: absolute;
          bottom: -30%;
          left: -5%;
          width: 400px;
          height: 400px;
          background: rgba(34, 197, 94, 0.08);
          border-radius: 50%;
          animation: float 8s ease-in-out infinite;
          animation-delay: 1s;
        }

        .hero-content {
          position: relative;
          z-index: 1;
        }

        .hero-title {
          animation: fadeInUp 0.8s ease-out;
          font-size: 3.5rem;
          font-weight: 800;
          line-height: 1.2;
          margin-bottom: 1rem;
        }

        .hero-brand {
          background: linear-gradient(135deg, #22c55e 0%, #16a34a 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .hero-description {
          animation: fadeInUp 0.8s ease-out 0.2s both;
          font-size: 1.125rem;
          color: #4b5563;
          margin-bottom: 2rem;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
          line-height: 1.8;
        }

        .hero-badges {
          animation: fadeInUp 0.8s ease-out 0.4s both;
          display: flex;
          gap: 1.5rem;
          justify-content: center;
          margin-bottom: 2rem;
          flex-wrap: wrap;
        }

        .badge {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          background: white;
          padding: 0.75rem 1.5rem;
          border-radius: 50px;
          font-weight: 600;
          font-size: 0.875rem;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
          color: #22c55e;
        }

        .badge-icon {
          font-size: 1.25rem;
        }

        .hero-buttons {
          animation: fadeInUp 0.8s ease-out 0.6s both;
          display: flex;
          gap: 1rem;
          justify-content: center;
          flex-wrap: wrap;
        }

        .btn-primary {
          background: linear-gradient(135deg, #22c55e 0%, #16a34a 100%);
          color: white;
          padding: 1rem 2.5rem;
          border-radius: 50px;
          font-weight: 700;
          font-size: 1rem;
          border: none;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
          position: relative;
          overflow: hidden;
          animation: pulse 2s infinite;
        }

        .btn-primary::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: rgba(255, 255, 255, 0.2);
          transition: left 0.5s ease;
        }

        .btn-primary:hover::before {
          left: 100%;
        }

        .btn-primary:hover {
          transform: translateY(-3px);
          box-shadow: 0 12px 24px rgba(34, 197, 94, 0.4);
        }

        .btn-primary:active {
          transform: translateY(-1px);
        }

        .btn-secondary {
          background: white;
          color: #22c55e;
          padding: 1rem 2.5rem;
          border-radius: 50px;
          font-weight: 700;
          font-size: 1rem;
          border: 2px solid #22c55e;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .btn-secondary:hover {
          background: #f0fdf4;
          transform: translateY(-3px);
          box-shadow: 0 12px 24px rgba(34, 197, 94, 0.2);
        }

        .hero-image {
          animation: slideInRight 1s ease-out;
          max-width: 500px;
          width: 100%;
          height: auto;
        }

        @media (max-width: 768px) {
          .hero-title {
            font-size: 2.5rem;
          }

          .hero-description {
            font-size: 1rem;
          }

          .hero-buttons {
            flex-direction: column;
            align-items: center;
          }

          .btn-primary, .btn-secondary {
            width: 100%;
            max-width: 300px;
          }
        }
      `}</style>

      <section className="hero-section py-40 mt-">
        <div className="max-w-7xl mx-auto px-5">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Content */}
            <div className="hero-content">
              <h1 className="hero-title">
                Welcome to
                <br />
                <span className="hero-brand">SmartBuy</span>
              </h1>

              <p className="hero-description">
                Shop with confidence. Every transaction is protected with 
                enterprise-grade security. Discover millions of products at 
                unbeatable prices.
              </p>

              {/* Trust Badges */}
              <div className="hero-badges">
                <div className="badge">
                  <span className="badge-icon">🔒</span>
                  <span>Secure Payment</span>
                </div>
                <div className="badge">
                  <span className="badge-icon">✓</span>
                  <span>Trusted</span>
                </div>
                <div className="badge">
                  <span className="badge-icon">⚡</span>
                  <span>Fast Delivery</span>
                </div>
              </div>

              {/* Buttons */}
              <div className="hero-buttons">
                <Link to="/products" className="btn-primary text-center">
                  Shop Now
                </Link>
                <button className="btn-secondary">
                  Learn More
                </button>
              </div>
            </div>

            {/* Right Visual */}
            <div className="flex justify-center">
              <svg
                viewBox="0 0 400 400"
                xmlns="http://www.w3.org/2000/svg"
                className="hero-image"
              >
                <style>{`
                  @keyframes cartFloat {
                    0%, 100% { transform: translateY(0px); }
                    50% { transform: translateY(-30px); }
                  }

                  .shopping-cart {
                    animation: cartFloat 3s ease-in-out infinite;
                  }
                `}</style>

                {/* Background circle */}
                <circle cx="200" cy="200" r="180" fill="#e0f2fe" opacity="0.3" />
                <circle cx="200" cy="200" r="150" fill="#dcfce7" opacity="0.5" />

                {/* Shopping bag/cart */}
                <g className="shopping-cart">
                  {/* Bag body */}
                  <rect x="140" y="120" width="120" height="140" rx="10" fill="#22c55e" opacity="0.1" stroke="#22c55e" strokeWidth="2" />
                  
                  {/* Bag handle */}
                  <path d="M 160 120 Q 160 60 200 60 Q 240 60 240 120" fill="none" stroke="#22c55e" strokeWidth="3" strokeLinecap="round" />
                  
                  {/* Items in bag */}
                  <rect x="155" y="145" width="30" height="40" rx="4" fill="#16a34a" opacity="0.8" />
                  <rect x="195" y="155" width="30" height="50" rx="4" fill="#16a34a" opacity="0.6" />
                  <rect x="175" y="180" width="25" height="35" rx="4" fill="#10b981" opacity="0.7" />
                  
                  {/* Checkmark */}
                  <path d="M 185 210 L 195 220 L 215 200" fill="none" stroke="#16a34a" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                </g>

                {/* Trust icons floating around */}
                <g opacity="0.6">
                  <circle cx="80" cy="120" r="25" fill="#fbbf24" opacity="0.2" />
                  <text x="80" y="130" textAnchor="middle" fontSize="30">🔒</text>
                </g>

                <g opacity="0.6">
                  <circle cx="320" cy="140" r="25" fill="#fbbf24" opacity="0.2" />
                  <text x="320" y="150" textAnchor="middle" fontSize="30">✓</text>
                </g>

                <g opacity="0.6">
                  <circle cx="100" cy="300" r="25" fill="#fbbf24" opacity="0.2" />
                  <text x="100" y="310" textAnchor="middle" fontSize="30">⚡</text>
                </g>
              </svg>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Herosection;
// function Herosection() {
//   return (
//     <div>
//     <section className="bg-gray-100 py-40">
//         <div className="max-w-7xl mx-auto px-5 text-center">
//           <h1 className="text-5xl font-bold mb-4">
//             Welcome to 
//           </h1>

//           <p className="text-gray-600 mb-6">
//             Discover amazing products at the best prices.
//           </p>

//           <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
//             Shop Now
//           </button>
//         </div>
//       </section>
//     </div>
//   )
// }

// export default Herosection;