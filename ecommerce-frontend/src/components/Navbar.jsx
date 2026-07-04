import { Link, NavLink, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  Home,
  Package,
  ShoppingCart,
  ClipboardList,
  User,
  LogOut,
  Search,
} from "lucide-react";

function Navbar() {
  const navigate = useNavigate();
  const [profileOpen, setProfileOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);

  const token = localStorage.getItem("accessToken");
  const user = token ? JSON.parse(localStorage.getItem("user")) : null;

  useEffect(() => {
    const storedCount = localStorage.getItem("cartCount");
    if (storedCount) setCartCount(Number(storedCount));
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    localStorage.removeItem("user");
    setProfileOpen(false);
    navigate("/login");
  };

  const goTo = (path) => {
    setProfileOpen(false);
    navigate(path);
  };

  return (
    <>
      {/* ============================================================
          DESKTOP NAVBAR (lg and above) — unchanged functionality
      ============================================================ */}
      <nav className="hidden lg:block fixed top-0 w-full z-50 bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 xl:px-5 py-3 flex items-center justify-between gap-4">

          <Link to="/" className="flex items-center gap-2 flex-shrink-0">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-green-500 to-green-700 flex items-center justify-center text-white font-bold text-lg">
              S
            </div>
            <span className="text-xl xl:text-2xl font-bold bg-gradient-to-r from-green-600 to-green-700 bg-clip-text text-transparent whitespace-nowrap">
              SmartBuy
            </span>
          </Link>

          <div className="flex-1 max-w-md mx-4 xl:mx-6 min-w-0">
            <div className="flex items-center bg-gray-100 rounded-full px-4 py-2 border border-gray-300 w-full">
              <Search size={18} className="text-gray-500 flex-shrink-0" />
              <input
                type="text"
                placeholder="Search phones, fashion, furniture..."
                className="bg-transparent ml-3 outline-none w-full text-sm min-w-0"
              />
            </div>
          </div>

          <div className="flex items-center gap-4 xl:gap-6 font-medium flex-shrink-0">
            <Link to="/" className="text-gray-800 hover:text-green-600 transition-colors text-sm xl:text-base">
              Home
            </Link>
            <Link to="/products" className="text-gray-800 hover:text-green-600 transition-colors text-sm xl:text-base">
              Products
            </Link>

            <Link to="/cart" className="relative text-gray-800 hover:text-green-600 transition-colors">
              <ShoppingCart size={22} />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-green-600 text-white text-[10px] font-bold min-w-[18px] h-[18px] flex items-center justify-center rounded-full px-1">
                  {cartCount}
                </span>
              )}
            </Link>

            {!token ? (
              <Link
                to="/login"
                className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold px-4 xl:px-6 py-2 rounded-lg transition-all text-sm xl:text-base whitespace-nowrap"
              >
                Login
              </Link>
            ) : (
              <div className="relative">
                <button
                  onClick={() => setProfileOpen(!profileOpen)}
                  className="w-10 h-10 rounded-full bg-gradient-to-br from-green-500 to-green-600 text-white font-bold flex items-center justify-center hover:scale-105 transition-transform flex-shrink-0"
                  title={user?.name || "Profile"}
                >
                  {user?.name?.charAt(0).toUpperCase() || "U"}
                </button>

                {profileOpen && (
                  <>
                    <div
                      className="fixed inset-0 z-40"
                      onClick={() => setProfileOpen(false)}
                    />
                    <div className="absolute right-0 top-full mt-3 w-64 max-w-[90vw] bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden z-50">
                      <div
                        className="p-4 text-center border-b border-gray-100 cursor-pointer hover:bg-gray-50 transition-colors"
                        onClick={() => goTo("/profile")}
                      >
                        <div className="w-12 h-12 mx-auto rounded-full bg-gradient-to-br from-green-500 to-green-600 text-white font-bold text-xl flex items-center justify-center mb-2">
                          {user?.name?.charAt(0).toUpperCase() || "U"}
                        </div>
                        <p className="font-bold text-gray-900 text-sm truncate">{user?.name || "User"}</p>
                        <p className="text-gray-400 text-xs truncate">{user?.email || ""}</p>
                      </div>

                      <div className="p-2">
                        <button
                          onClick={() => goTo("/profile")}
                          className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-gray-800 font-medium text-sm hover:bg-green-50 hover:text-green-700 transition-colors"
                        >
                          <User size={16} />
                          My Profile
                        </button>
                        <button
                          onClick={() => goTo("/orders")}
                          className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-gray-800 font-medium text-sm hover:bg-green-50 hover:text-green-700 transition-colors"
                        >
                          <Package size={16} />
                          My Orders
                        </button>
                      </div>

                      <div className="border-t border-gray-100 p-2">
                        <button
                          onClick={handleLogout}
                          className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-red-600 font-medium text-sm hover:bg-red-50 transition-colors"
                        >
                          <LogOut size={16} />
                          Logout
                        </button>
                      </div>
                    </div>
                  </>
                )}
              </div>
            )}
          </div>
        </div>
      </nav>

      {/* Desktop spacer — matches actual header height (py-3 + 36px logo ≈ 60px) */}
      <div className="hidden lg:block h-[60px]" aria-hidden="true" />

      {/* ============================================================
          MOBILE TOP HEADER (< lg)
      ============================================================ */}
      <header className="lg:hidden fixed top-0 left-0 w-full z-50 bg-white shadow-sm">
        <div className="flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-3">

          <Link to="/" className="flex items-center gap-1.5 flex-shrink-0">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-green-500 to-green-700 flex items-center justify-center text-white font-bold text-sm">
              S
            </div>
            <span className="text-base sm:text-lg font-bold bg-gradient-to-r from-green-600 to-green-700 bg-clip-text text-transparent whitespace-nowrap">
              SmartBuy
            </span>
          </Link>

          <div className="flex-1 min-w-0">
            <div className="flex items-center bg-gray-100 rounded-full px-3 sm:px-3.5 py-2 border border-gray-200 w-full">
              <Search size={16} className="text-gray-500 flex-shrink-0" />
              <input
                type="text"
                placeholder="Search products..."
                className="bg-transparent ml-2 outline-none w-full text-sm min-w-0"
              />
            </div>
          </div>
        </div>
      </header>

      {/* Mobile top spacer — matches actual header height (py-3 + 32px logo ≈ 56px) */}
      <div className="lg:hidden h-14" aria-hidden="true" />

      {/* ============================================================
          MOBILE BOTTOM NAVIGATION (< lg)
      ============================================================ */}
      <nav
        className="lg:hidden fixed bottom-0 left-0 w-full z-50 bg-white border-t border-gray-200 shadow-[0_-2px_10px_rgba(0,0,0,0.06)]"
        style={{ paddingBottom: "env(safe-area-inset-bottom, 0px)" }}
      >
        <div className="flex items-center justify-between px-1 sm:px-2">

          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `flex flex-col items-center justify-center gap-0.5 flex-1 py-2 sm:py-2.5 transition-colors min-w-0 ${
                isActive ? "text-green-600" : "text-gray-500"
              }`
            }
          >
            {({ isActive }) => (
              <>
                <div className={`rounded-full px-2.5 sm:px-3 py-0.5 ${isActive ? "bg-green-50" : ""}`}>
                  <Home size={20} />
                </div>
                <span className="text-[10px] sm:text-[11px] font-medium">Home</span>
              </>
            )}
          </NavLink>

          <NavLink
            to="/products"
            className={({ isActive }) =>
              `flex flex-col items-center justify-center gap-0.5 flex-1 py-2 sm:py-2.5 transition-colors min-w-0 ${
                isActive ? "text-green-600" : "text-gray-500"
              }`
            }
          >
            {({ isActive }) => (
              <>
                <div className={`rounded-full px-2.5 sm:px-3 py-0.5 ${isActive ? "bg-green-50" : ""}`}>
                  <Package size={20} />
                </div>
                <span className="text-[10px] sm:text-[11px] font-medium">Products</span>
              </>
            )}
          </NavLink>

          <NavLink
            to="/cart"
            className={({ isActive }) =>
              `relative flex flex-col items-center justify-center gap-0.5 flex-1 py-2 sm:py-2.5 transition-colors min-w-0 ${
                isActive ? "text-green-600" : "text-gray-500"
              }`
            }
          >
            {({ isActive }) => (
              <>
                <div className={`relative rounded-full px-2.5 sm:px-3 py-0.5 ${isActive ? "bg-green-50" : ""}`}>
                  <ShoppingCart size={20} />
                  {cartCount > 0 && (
                    <span className="absolute -top-1 -right-1 bg-green-600 text-white text-[9px] font-bold min-w-[16px] h-[16px] flex items-center justify-center rounded-full px-1">
                      {cartCount}
                    </span>
                  )}
                </div>
                <span className="text-[10px] sm:text-[11px] font-medium">Cart</span>
              </>
            )}
          </NavLink>

          <NavLink
            to="/orders"
            className={({ isActive }) =>
              `flex flex-col items-center justify-center gap-0.5 flex-1 py-2 sm:py-2.5 transition-colors min-w-0 ${
                isActive ? "text-green-600" : "text-gray-500"
              }`
            }
          >
            {({ isActive }) => (
              <>
                <div className={`rounded-full px-2.5 sm:px-3 py-0.5 ${isActive ? "bg-green-50" : ""}`}>
                  <ClipboardList size={20} />
                </div>
                <span className="text-[10px] sm:text-[11px] font-medium">Orders</span>
              </>
            )}
          </NavLink>

          <NavLink
            to="/profile"
            className={({ isActive }) =>
              `flex flex-col items-center justify-center gap-0.5 flex-1 py-2 sm:py-2.5 transition-colors min-w-0 ${
                isActive ? "text-green-600" : "text-gray-500"
              }`
            }
          >
            {({ isActive }) => (
              <>
                <div className={`rounded-full px-2.5 sm:px-3 py-0.5 ${isActive ? "bg-green-50" : ""}`}>
                  <User size={20} />
                </div>
                <span className="text-[10px] sm:text-[11px] font-medium">Profile</span>
              </>
            )}
          </NavLink>

        </div>
      </nav>

      {/* Mobile bottom spacer — matches actual bottom nav height */}
      <div className="lg:hidden h-16" aria-hidden="true" />
    </>
  );
}

export default Navbar;