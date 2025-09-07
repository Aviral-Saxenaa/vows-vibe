import { ChevronDown } from "lucide-react";

export function MainHeader() {
  return (
    <div
      className="w-full px-32 py-6 flex items-center justify-between"
      style={{ backgroundColor: "#FAF9F6" }}
    >
      {/* Logo */}
      <div className="text-neutral font-montserrat text-3xl font-bold">
        LOGO
      </div>

      {/* Navigation */}
      <nav className="flex items-center gap-7">
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

      {/* Buttons */}
      <div className="flex items-center gap-1.5">
        <button
          className="px-6 py-2.5 h-10 font-montserrat text-lg font-bold text-white shadow-sm"
          style={{ backgroundColor: "#FF8F9D" }}
        >
          LOGIN
        </button>
        <button
          className="px-6 py-2.5 h-10 font-montserrat text-lg font-bold border shadow-sm"
          style={{
            borderColor: "#FF8F9D",
            color: "#FF8F9D",
          }}
        >
          REGISTER
        </button>
      </div>
    </div>
  );
}
