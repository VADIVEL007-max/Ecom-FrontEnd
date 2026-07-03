import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";

function Navbar() {
  const navigate = useNavigate();
  const [isLogoAnimating, setIsLogoAnimating] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);

  // Authentication
  const token = localStorage.getItem("accessToken");
  const user = token ? JSON.parse(localStorage.getItem("user")) : null;

  const handleLogoClick = () => {
    setIsLogoAnimating(true);
    setTimeout(() => setIsLogoAnimating(false), 600);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    localStorage.removeItem("user");
    setProfileOpen(false);
    closeMobileMenu();
    navigate("/login");
  };

  const handleProfileClick = () => {
    setProfileOpen(false);
    closeMobileMenu();
    navigate("/profile");
  };

  return (
    <nav className="shadow-md fixed w-full top-0 z-50 bg-white">
      <style>{`
        @keyframes navSlideDown {
          from { transform: translateY(-100%); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }

        @keyframes logoPulse {
          0% { transform: scale(1); }
          50% { transform: scale(1.05); }
          100% { transform: scale(1); }
        }

        @keyframes navItemHover {
          0% { transform: translateY(0); }
          50% { transform: translateY(-3px); }
          100% { transform: translateY(0); }
        }

        @keyframes searchFocus {
          from { box-shadow: 0 0 0 0 rgba(34, 197, 94, 0.1); }
          to { box-shadow: 0 0 0 3px rgba(34, 197, 94, 0.2); }
        }

        @keyframes slideInMenu {
          from { transform: translateX(-100%); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }

        @keyframes fadeInOverlay {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes profileDropdown {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .nav-container {
          animation: navSlideDown 0.5s ease-out;
        }

        .logo-wrapper {
          transition: all 0.3s ease;
          cursor: pointer;
          white-space: nowrap;
        }

        .logo-wrapper:hover {
          filter: drop-shadow(0 0 8px rgba(34, 197, 94, 0.4));
        }

        .logo-wrapper.animating {
          animation: logoPulse 0.6s ease-in-out;
        }

        .logo-svg {
          width: 40px;
          height: 40px;
          transition: all 0.3s ease;
        }

        @media (max-width: 640px) {
          .logo-svg {
            width: 32px;
            height: 32px;
          }

          .logo-text {
            font-size: 1.25rem;
          }
        }

        .commerce-search {
          transition: all 0.3s ease;
          position: relative;
          flex: 1;
          max-width: 500px;
        }

        .commerce-search:focus-within {
          animation: searchFocus 0.3s ease-out forwards;
        }

        .commerce-search input:focus {
          border-color: #22c55e;
          outline: none;
        }

        .search-icon-btn {
          background: none;
          border: none;
          cursor: pointer;
          padding: 4px 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #22c55e;
          transition: all 0.3s ease;
        }

        .search-icon-btn:hover {
          transform: scale(1.1);
        }

        .nav-link {
          position: relative;
          transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
          color: #1f2937;
          display: block;
          padding: 8px 0;
        }

        .nav-link::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 2px;
          background: #22c55e;
          transition: width 0.3s ease;
        }

        .nav-link:hover {
          color: #22c55e;
          animation: navItemHover 0.4s ease-in-out;
        }

        .nav-link:hover::after {
          width: 100%;
        }

        .login-btn {
          background: linear-gradient(135deg, #22c55e 0%, #16a34a 100%);
          transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
          position: relative;
          overflow: hidden;
          text-decoration: none;
          display: inline-block;
        }

        .login-btn::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: rgba(255, 255, 255, 0.2);
          transition: left 0.4s ease;
        }

        .login-btn:hover::before {
          left: 100%;
        }

        .login-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 16px rgba(34, 197, 94, 0.3);
        }

        .login-btn:active {
          transform: translateY(0);
        }

        /* Profile Avatar Button */
        .profile-avatar-btn {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: linear-gradient(135deg, #22c55e 0%, #16a34a 100%);
          color: white;
          font-weight: bold;
          font-size: 18px;
          border: none;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
          position: relative;
        }

        .profile-avatar-btn:hover {
          transform: scale(1.08);
          box-shadow: 0 4px 12px rgba(34, 197, 94, 0.3);
        }

        .profile-avatar-btn:active {
          transform: scale(0.95);
        }

        /* Profile Dropdown */
        .profile-dropdown {
          position: absolute;
          right: 0;
          top: 100%;
          margin-top: 12px;
          width: 280px;
          background: white;
          border-radius: 12px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
          border: 1px solid #e5e7eb;
          animation: profileDropdown 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
          z-index: 100;
          overflow: hidden;
        }

        .profile-dropdown-header {
          padding: 20px;
          text-align: center;
          border-bottom: 1px solid #e5e7eb;
          cursor: pointer;
          transition: background 0.2s ease;
        }

        .profile-dropdown-header:hover {
          background: #f9fafb;
        }

        .profile-avatar-large {
          width: 56px;
          height: 56px;
          border-radius: 50%;
          background: linear-gradient(135deg, #22c55e 0%, #16a34a 100%);
          color: white;
          font-weight: bold;
          font-size: 24px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 12px;
        }

        .profile-name {
          font-weight: 700;
          color: #1f2937;
          font-size: 15px;
          margin-bottom: 4px;
        }

        .profile-email {
          color: #9ca3af;
          font-size: 13px;
        }

        .profile-dropdown-logout {
          padding: 8px;
        }

        .profile-menu-btn {
          width: 100%;
          padding: 10px 16px;
          background: none;
          border: none;
          color: #1f2937;
          font-weight: 600;
          font-size: 14px;
          cursor: pointer;
          transition: all 0.3s ease;
          border-radius: 8px;
          text-align: left;
        }

        .profile-menu-btn:hover {
          background: #f0fdf4;
          color: #16a34a;
        }

        .logout-btn {
          width: 100%;
          padding: 10px 16px;
          background: none;
          border: none;
          color: #ef4444;
          font-weight: 600;
          font-size: 14px;
          cursor: pointer;
          transition: all 0.3s ease;
          border-radius: 8px;
          text-align: left;
        }

        .logout-btn:hover {
          background: #fef2f2;
        }

        .logout-btn:active {
          background: #fee2e2;
        }

        /* Mobile Menu Styles */
        .mobile-menu-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.5);
          animation: fadeInOverlay 0.3s ease-out;
          z-index: 40;
        }

        .mobile-menu {
          position: fixed;
          top: 60px;
          left: 0;
          width: 100%;
          max-width: 300px;
          background: white;
          height: calc(100vh - 60px);
          animation: slideInMenu 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
          z-index: 41;
          overflow-y: auto;
          box-shadow: 2px 0 8px rgba(0, 0, 0, 0.1);
        }

        .mobile-menu-item {
          padding: 16px 20px;
          border-bottom: 1px solid #e5e7eb;
          transition: all 0.3s ease;
        }

        .mobile-menu-item:active {
          background: #f0fdf4;
        }

        .mobile-menu-link {
          color: #1f2937;
          text-decoration: none;
          font-weight: 500;
          display: block;
          transition: color 0.3s ease;
        }

        .mobile-menu-link:active {
          color: #22c55e;
        }

        .mobile-menu-login {
          padding: 16px 20px;
          background: linear-gradient(135deg, #22c55e 0%, #16a34a 100%);
          margin: 16px;
          border-radius: 8px;
          text-align: center;
        }

        .mobile-menu-login-btn {
          color: white;
          text-decoration: none;
          font-weight: 700;
          display: block;
        }

        .mobile-profile-section {
          padding: 16px 20px;
          border-bottom: 1px solid #e5e7eb;
        }

        .mobile-profile-header {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 16px;
        }

        .mobile-profile-avatar {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: linear-gradient(135deg, #22c55e 0%, #16a34a 100%);
          color: white;
          font-weight: bold;
          font-size: 18px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .mobile-profile-info {
          flex: 1;
          min-width: 0;
        }

        .mobile-profile-name {
          font-weight: 700;
          color: #1f2937;
          font-size: 14px;
        }

        .mobile-profile-email {
          color: #9ca3af;
          font-size: 12px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }

        .mobile-logout-btn {
          width: 100%;
          padding: 10px 16px;
          background: none;
          border: 1px solid #fecaca;
          color: #ef4444;
          font-weight: 600;
          font-size: 14px;
          cursor: pointer;
          transition: all 0.3s ease;
          border-radius: 8px;
        }

        .mobile-logout-btn:active {
          background: #fef2f2;
        }

        .hamburger-btn {
          background: none;
          border: none;
          cursor: pointer;
          padding: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #1f2937;
          transition: all 0.3s ease;
        }

        .hamburger-btn:hover {
          color: #22c55e;
        }

        .hamburger-btn:active {
          transform: scale(0.95);
        }

        /* Desktop menu */
        .desktop-menu {
          display: none;
        }

        @media (min-width: 768px) {
          .hamburger-btn {
            display: none !important;
          }

          .search-icon-btn {
            display: none !important;
          }

          .desktop-menu {
            display: flex !important;
          }

          .commerce-search {
            max-width: none;
            flex: 1;
            margin: 0 20px;
          }

          .mobile-search-expand {
            display: none !important;
          }
        }

        @media (max-width: 767px) {
          .desktop-menu {
            display: none !important;
          }

          .commerce-search {
            flex: 0;
          }

          .profile-dropdown {
            position: fixed;
            right: 12px;
            top: 70px;
            width: 260px;
          }
        }

        /* Search expansion on mobile */
        .mobile-search-expand {
          position: fixed;
          top: 60px;
          left: 0;
          right: 0;
          background: white;
          padding: 12px;
          border-bottom: 1px solid #e5e7eb;
          z-index: 40;
          animation: slideInMenu 0.3s ease-out;
        }

        .mobile-search-expand input {
          width: 100%;
          padding: 10px 12px;
          border: 1px solid #e5e7eb;
          border-radius: 20px;
          outline: none;
        }

        .mobile-search-expand input:focus {
          border-color: #22c55e;
          box-shadow: 0 0 0 3px rgba(34, 197, 94, 0.1);
        }
      `}</style>

      <div className="nav-container max-w-7xl mx-auto px-3 sm:px-5 py-3 sm:py-4 flex items-center justify-between gap-3 sm:gap-4">
        
        {/* Logo */}
        <Link
          to="/"
          className={`logo-wrapper flex items-center gap-1 sm:gap-2 ${isLogoAnimating ? 'animating' : ''}`}
          onClick={handleLogoClick}
        >
          <svg
            viewBox="0 0 200 200"
            xmlns="http://www.w3.org/2000/svg"
            className="logo-svg"
          >
            <defs>
              <style>{`
                @keyframes cardSlide {
                  from { transform: translateX(-40px); opacity: 0; }
                  to { transform: translateX(0); opacity: 1; }
                }
                @keyframes lockDrop {
                  from { transform: translateY(-30px); opacity: 0; }
                  to { transform: translateY(0); opacity: 1; }
                }
                @keyframes checkDraw {
                  from { stroke-dashoffset: 35; }
                  to { stroke-dashoffset: 0; }
                }
                @keyframes securePulse {
                  0%, 100% { filter: drop-shadow(0 0 6px rgba(34, 197, 94, 0)); }
                  50% { filter: drop-shadow(0 0 16px rgba(34, 197, 94, 0.7)); }
                }
                @keyframes shineFlow {
                  from { transform: translateX(-100%); }
                  to { transform: translateX(100%); }
                }

                .sb-card { animation: cardSlide 0.7s cubic-bezier(0.34, 1.56, 0.64, 1) forwards; }
                .sb-lock { animation: lockDrop 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) 0.4s forwards; opacity: 0; }
                .sb-check { stroke-dasharray: 35; animation: checkDraw 0.6s ease-out 0.8s forwards; }
                .sb-pulse { animation: securePulse 2s ease-in-out 1s infinite; }
                .sb-shine { animation: shineFlow 1.5s ease-in-out 1.2s infinite; }
              `}</style>
            </defs>

            <g className="sb-pulse">
              <g className="sb-card">
                <rect x="50" y="70" width="100" height="65" rx="6" fill="none" stroke="#22c55e" strokeWidth="2.5" />
                <rect x="50" y="70" width="100" height="65" rx="6" fill="#22c55e" opacity="0.06" />
                <line x1="55" y1="85" x2="145" y2="85" stroke="#22c55e" strokeWidth="1.5" opacity="0.4" />
                <line x1="55" y1="100" x2="145" y2="100" stroke="#22c55e" strokeWidth="1.5" opacity="0.4" />
              </g>

              <g className="sb-lock">
                <rect x="88" y="110" width="24" height="18" rx="2" fill="none" stroke="#22c55e" strokeWidth="2" />
                <path d="M 94,110 Q 94,100 100,100 Q 106,100 106,110" fill="none" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" />
                <circle cx="100" cy="121" r="1.5" fill="#22c55e" />
              </g>

              <g>
                <path
                  className="sb-check"
                  d="M 130,110 L 138,120 L 150,105"
                  fill="none"
                  stroke="#10b981"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>

              <ellipse className="sb-shine" cx="100" cy="102" rx="60" ry="40" fill="white" opacity="0.25" />
            </g>
          </svg>
          <span className="logo-text text-xl sm:text-2xl font-bold bg-linear-to-r from-green-600 to-green-700 bg-clip-text text-transparent">
            SmartBuy
          </span>
        </Link>

        {/* Desktop Search Bar */}
        <label className="commerce-search hidden md:block">
          <div className="flex items-center bg-gray-100 rounded-full px-4 py-2 border border-gray-300">
            <svg viewBox="0 0 24 24" role="img" className="w-5 h-5 text-gray-500">
              <path fill="currentColor" d="m21 21-4.35-4.35m1.35-5.15a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0Z" />
            </svg>
            <input
              type="text"
              placeholder="Search phones, fashion, furniture..."
              className="bg-transparent ml-3 outline-none w-full text-sm"
            />
          </div>
        </label>

        {/* Mobile Search Icon */}
        <button
          className="search-icon-btn md:hidden"
          onClick={() => setIsSearchOpen(!isSearchOpen)}
        >
          <svg viewBox="0 0 24 24" className="w-5 h-5">
            <path fill="currentColor" d="m21 21-4.35-4.35m1.35-5.15a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0Z" />
          </svg>
        </button>

        {/* Desktop Menu */}
        <ul className="desktop-menu items-center gap-5 font-medium ml-auto relative">
          <li>
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>

          <li>
            <Link to="/products" className="nav-link">
              Products
            </Link>
          </li>

          <li>
            <Link to="/cart" className="nav-link">
              Cart
            </Link>
          </li>

          <li>
            {!token ? (
              <Link to="/login" className="login-btn px-6 py-2 rounded-lg text-white font-bold">
                Login
              </Link>
            ) : (
              <div className="relative">
                <button
                  onClick={() => setProfileOpen(!profileOpen)}
                  className="profile-avatar-btn"
                  title={user?.name || "Profile"}
                >
                  {user?.name?.charAt(0).toUpperCase() || "U"}
                </button>

                {profileOpen && (
                  <div className="profile-dropdown">
                    <div
                      className="profile-dropdown-header"
                      onClick={handleProfileClick}
                    >
                      <div className="profile-avatar-large">
                        {user?.name?.charAt(0).toUpperCase() || "U"}
                      </div>
                      <div className="profile-name">{user?.name || "User"}</div>
                      <div className="profile-email">{user?.email || ""}</div>
                    </div>
                    <div className="profile-dropdown-logout">
                      <button onClick={handleProfileClick} className="profile-menu-btn">
                        My Profile
                      </button>
                      <button onClick={handleLogout} className="logout-btn">
                        Logout
                      </button>
                    </div>
                  </div>
                )}
              </div>
            )}
          </li>
        </ul>

        {/* Hamburger Menu Button */}
        <button
          className="hamburger-btn md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X size={24} />
          ) : (
            <Menu size={24} />
          )}
        </button>
      </div>

      {/* Mobile Search Expansion */}
      {isSearchOpen && (
        <div className="mobile-search-expand md:hidden">
          <input
            type="text"
            placeholder="Search products..."
            autoFocus
            className="w-full"
          />
        </div>
      )}

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="mobile-menu-overlay md:hidden" onClick={closeMobileMenu} />
      )}

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="mobile-menu md:hidden">
          <div className="mobile-menu-item">
            <Link to="/" className="mobile-menu-link" onClick={closeMobileMenu}>
              Home
            </Link>
          </div>

          <div className="mobile-menu-item">
            <Link to="/products" className="mobile-menu-link" onClick={closeMobileMenu}>
              Products
            </Link>
          </div>

          <div className="mobile-menu-item">
            <Link to="/cart" className="mobile-menu-link" onClick={closeMobileMenu}>
              Cart
            </Link>
          </div>

          {!token ? (
            <div className="mobile-menu-login">
              <Link to="/login" className="mobile-menu-login-btn" onClick={closeMobileMenu}>
                Login
              </Link>
            </div>
          ) : (
            <div className="mobile-profile-section">
              <div
                className="mobile-profile-header"
                onClick={handleProfileClick}
                style={{ cursor: "pointer" }}
              >
                <div className="mobile-profile-avatar">
                  {user?.name?.charAt(0).toUpperCase() || "U"}
                </div>

                <div className="mobile-profile-info">
                  <div className="mobile-profile-name">
                    {user?.name || "User"}
                  </div>

                  <div className="mobile-profile-email">
                    {user?.email || ""}
                  </div>
                </div>
              </div>

              <button onClick={handleLogout} className="mobile-logout-btn">
                Logout
              </button>
            </div>
          )}
        </div>
      )}

      {/* Profile dropdown overlay for mobile */}
      {profileOpen && (
        <div
          className="fixed inset-0 md:hidden"
          onClick={() => setProfileOpen(false)}
          style={{ zIndex: 99 }}
        />
      )}
    </nav>
  );
}

export default Navbar;