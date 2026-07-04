import { Link } from "react-router-dom";
import { ShoppingBag, Home } from "lucide-react";

function NotFound() {
  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-green-50 via-white to-green-100 flex items-center justify-center px-4">

      <style>{`
        @keyframes float {
          0%,100%{transform:translateY(0px);}
          50%{transform:translateY(-15px);}
        }

        @keyframes fadeUp {
          from{
            opacity:0;
            transform:translateY(40px);
          }
          to{
            opacity:1;
            transform:translateY(0);
          }
        }

        @keyframes pulseGlow{
          0%,100%{
            box-shadow:0 0 0 rgba(34,197,94,.3);
          }
          50%{
            box-shadow:0 0 35px rgba(34,197,94,.5);
          }
        }

        @keyframes rotateSlow{
          from{
            transform:rotate(0deg);
          }
          to{
            transform:rotate(360deg);
          }
        }

        .floating{
          animation:float 3s ease-in-out infinite;
        }

        .fade-up{
          animation:fadeUp .8s ease forwards;
        }

        .glow{
          animation:pulseGlow 2s infinite;
        }

        .circle{
          position:absolute;
          border-radius:9999px;
          background:rgba(34,197,94,.08);
          animation:rotateSlow 25s linear infinite;
        }
      `}</style>

      {/* Background Circles */}
      <div className="circle w-72 h-72 -top-20 -left-20"></div>
      <div className="circle w-96 h-96 -bottom-32 -right-24"></div>

      <div className="text-center relative z-10 fade-up">

        <div className="flex justify-center mb-6 floating">
          <div className="w-28 h-28 rounded-full bg-green-500 text-white flex items-center justify-center glow">
            <ShoppingBag size={52} />
          </div>
        </div>

        <h1 className="text-8xl md:text-9xl font-black text-green-600">
          404
        </h1>

        <h2 className="mt-4 text-3xl md:text-4xl font-bold text-gray-800">
          Oops! Page Not Found
        </h2>

        <p className="mt-4 text-gray-600 max-w-lg mx-auto leading-relaxed">
          Looks like this page went shopping and never came back.
          The page you're looking for doesn't exist or has been moved.
        </p>

        <Link
          to="/"
          className="inline-flex items-center gap-3 mt-10 bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:scale-105 transition-all duration-300"
        >
          <Home size={20} />
          Back to Home
        </Link>

      </div>
    </div>
  );
}

export default NotFound;