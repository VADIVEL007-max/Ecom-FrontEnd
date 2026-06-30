import { ShoppingBag } from "lucide-react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaGithub,
} from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="mt-20 bg-linear-to-r from-green-50 via-white to-green-50 border-t border-green-100">
      <div className="max-w-7xl mx-auto px-5 py-14">
        {/* Top */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Logo */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <ShoppingBag className="text-green-500" size={28} />
              <h2 className="text-2xl font-bold text-green-600">
                SmartBuy
              </h2>
            </div>

            <p className="text-gray-600 leading-7">
              Shop smarter with premium products, secure payments, and
              lightning-fast delivery.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>

            <ul className="space-y-3 text-gray-600">
              <li>
                <Link
                  to="/"
                  className="hover:text-green-500 transition duration-300"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  to="/products"
                  className="hover:text-green-500 transition duration-300"
                >
                  Products
                </Link>
              </li>

              <li>
                <Link
                  to="/cart"
                  className="hover:text-green-500 transition duration-300"
                >
                  Cart
                </Link>
              </li>

              <li>
                <Link
                  to="/login"
                  className="hover:text-green-500 transition duration-300"
                >
                  Login
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Care */}
          <div>
            <h3 className="font-bold text-lg mb-4">Customer Care</h3>

            <ul className="space-y-3 text-gray-600">
              <li className="hover:text-green-500 cursor-pointer transition">
                Help Center
              </li>
              <li className="hover:text-green-500 cursor-pointer transition">
                Track Order
              </li>
              <li className="hover:text-green-500 cursor-pointer transition">
                Privacy Policy
              </li>
              <li className="hover:text-green-500 cursor-pointer transition">
                Terms & Conditions
              </li>
            </ul>
          </div>

          {/* Follow Us */}
          <div>
            <h3 className="font-bold text-lg mb-4">Follow Us</h3>

            <div className="flex gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-green-500 hover:text-white hover:-translate-y-1 transition-all duration-300"
              >
                <FaFacebookF size={18} />
              </a>

              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-green-500 hover:text-white hover:-translate-y-1 transition-all duration-300"
              >
                <FaInstagram size={18} />
              </a>

              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-green-500 hover:text-white hover:-translate-y-1 transition-all duration-300"
              >
                <FaTwitter size={18} />
              </a>

              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-green-500 hover:text-white hover:-translate-y-1 transition-all duration-300"
              >
                <FaGithub size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-green-200 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © 2026{" "}
            <span className="font-semibold text-green-600">
              SmartBuy
            </span>
            . All Rights Reserved.
          </p>

          <p className="text-gray-500 text-sm">
            Made with ❤️ using React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

// function Footer() {
//   return (
//     <footer className="bg-gray-900 text-white mt-10">
//       <div className="max-w-7xl mx-auto px-5 py-8">
//         <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          
//           <div>
//             <h2 className="text-xl font-bold">ShopEasy</h2>
//             <p className="text-gray-400 text-sm mt-2">
//               Your one-stop online shopping destination.
//             </p>
//           </div>

//           <div className="flex gap-6">
//             <a href="/" className="hover:text-blue-400">
//               Home
//             </a>
//             <a href="/products" className="hover:text-blue-400">
//               Products
//             </a>
//             <a href="#" className="hover:text-blue-400">
//               Contact
//             </a>
//           </div>
//         </div>

//         <hr className="my-6 border-gray-700" />

//         <p className="text-center text-sm text-gray-400">
//           © 2026 ShopEasy. All Rights Reserved.
//         </p>
//       </div>
//     </footer>
//   );
// }

// export default Footer;