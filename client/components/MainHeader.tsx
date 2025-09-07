import { ChevronDown, ShoppingCart, User } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useApp } from "@/context/AppContext";

export function MainHeader() {
  const navigate = useNavigate();
  const { getCartItemCount, isLoggedIn, user, logout } = useApp();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <div
      className="w-full px-4 md:px-8 lg:px-32 py-4 md:py-6 flex items-center justify-between"
      style={{ backgroundColor: "#FAF9F6" }}
    >
      {/* Logo */}
      <div 
        onClick={() => navigate("/")}
        className="text-neutral font-montserrat text-xl md:text-2xl lg:text-3xl font-bold cursor-pointer hover:opacity-80 transition-opacity"
      >
        Vows Vibe
      </div>

      {/* Navigation - Hidden on mobile */}
      <nav className="hidden md:flex items-center gap-4 lg:gap-7">
        <div className="flex items-center gap-1 cursor-pointer">
          <span className="text-neutral-600 font-montserrat text-base">
            Collections
          </span>
          <ChevronDown
            className="w-5.5 h-5.5 text-neutral-600"
            strokeWidth={1.5}
          />
        </div>

        <div className="flex items-center gap-1 cursor-pointer">
          <span className="text-neutral-600 font-montserrat text-base">
            Categories
          </span>
          <ChevronDown
            className="w-5.5 h-5.5 text-neutral-600"
            strokeWidth={1.5}
          />
        </div>

        <span className="text-neutral-600 font-montserrat text-base cursor-pointer">
          Hot Picks
        </span>
        <span className="text-neutral-600 font-montserrat text-base cursor-pointer">
          Gifts
        </span>
        <span className="text-neutral-600 font-montserrat text-base cursor-pointer">
          Shop All
        </span>
      </nav>

      {/* Cart and User Actions */}
      <div className="flex items-center gap-2 md:gap-4">
        {/* Cart Button */}
        <button
          onClick={() => navigate("/cart")}
          className="relative p-2 hover:bg-gray-100 rounded-lg transition-colors"
        >
          <ShoppingCart className="w-6 h-6 text-gray-700" />
          {getCartItemCount() > 0 && (
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
              {getCartItemCount()}
            </span>
          )}
        </button>

        {/* User Actions */}
        {isLoggedIn ? (
          <div className="flex items-center gap-2">
            <div className="hidden md:flex items-center gap-2">
              <User className="w-5 h-5 text-gray-700" />
              <span className="text-sm text-gray-700">Hi, {user?.name?.split(' ')[0]}</span>
            </div>
            <button
              onClick={handleLogout}
              className="px-3 md:px-4 py-2 text-sm md:text-base font-medium text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
            >
              Logout
            </button>
          </div>
        ) : (
          <div className="flex items-center gap-1 md:gap-1.5">
            <button
              onClick={() => navigate("/login")}
              className="px-3 md:px-6 py-2 md:py-2.5 h-8 md:h-10 font-montserrat text-sm md:text-lg font-bold text-white shadow-sm hover:opacity-90 transition-opacity"
              style={{ backgroundColor: "#FF8F9D" }}
            >
              LOGIN
            </button>
            <button
              onClick={() => navigate("/login")}
              className="px-3 md:px-6 py-2 md:py-2.5 h-8 md:h-10 font-montserrat text-sm md:text-lg font-bold border shadow-sm hover:bg-pink-50 transition-colors"
              style={{
                borderColor: "#FF8F9D",
                color: "#FF8F9D",
              }}
            >
              REGISTER
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
