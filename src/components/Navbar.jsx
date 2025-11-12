import { useState } from "react";
import { NavLink } from "react-router-dom";
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";

const navItems = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Interior", to: "/interior" },
  { label: "Construction", to: "/construction" },
  { label: "Gallery", to: "/gallery" },
  { label: "Contact", to: "/contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => setOpen((prev) => !prev);
  const closeMenu = () => setOpen(false);

  const renderLinks = (direction = "row") => (
    <nav className={`flex ${direction === "column" ? "flex-col space-y-6" : "items-center gap-8"}`}>
      {navItems.map((item) => (
        <NavLink
          key={item.label}
          to={item.to}
          onClick={closeMenu}
          className="text-sm font-medium uppercase tracking-[0.2em] text-white transition-colors duration-300 hover:text-white"
        >
          {item.label}
        </NavLink>
      ))}
      <NavLink
        to="/contact"
        onClick={closeMenu}
        className="rounded-full border border-white px-5 py-2 text-sm font-semibold uppercase tracking-[0.2em] text-white transition-all duration-300 hover:bg-white hover:text-black"
      >
        Enquire Now
      </NavLink>
    </nav>
  );

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-black/95 backdrop-blur shadow-sm">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-5 py-2.5 md:px-7 md:py-3">
        <div className="flex items-center gap-3">
          <img
            src="/karthikeya-logo.png"
            alt="Karthikeya Constructions logo"
            className="h-12 w-auto object-contain"
          />
        </div>
        <div className="hidden lg:block text-white">{renderLinks()}</div>
        <button
          className="text-2xl text-white lg:hidden"
          type="button"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {open ? <HiX /> : <HiOutlineMenuAlt3 />}
        </button>
      </div>
      {open && (
        <div className="border-t border-white/10 bg-black px-6 pb-10 pt-6 shadow-lg lg:hidden text-white">
          {renderLinks("column")}
        </div>
      )}
    </header>
  );
};

export default Navbar;

