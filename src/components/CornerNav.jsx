import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "Projects", path: "/projects" },
  { label: "Experience", path: "/experience" },
  { label: "Education", path: "/education" },
  { label: "Skills & Tools", path: "/skills" },
  { label: "Publications", path: "/publications" },
  { label: "Beyond Engineering", path: "/community" },
];

export default function CornerNav() {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      {/* Desktop corner-pin nav — only on lg+ */}
      <nav className="hidden lg:block fixed inset-0 z-40 pointer-events-none">
        {/* Top-left: Home */}
        <Link
          to="/"
          className="pointer-events-auto absolute top-8 left-8 font-mono font-semibold text-sm tracking-[0.3em] uppercase text-[#ffd060] hover:text-white transition-colors duration-500 focus:outline-none focus:ring-2 focus:ring-primary"
        >
          Home
        </Link>
        {/* Bottom-right vertical links */}
        <div className="pointer-events-auto absolute bottom-8 right-8 flex flex-col items-end gap-3 bg-background/90 backdrop-blur-sm px-4 py-3 rounded-sm">
          {navLinks.slice(1).map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.path}
                to={link.path}
                className={`font-mono font-semibold text-sm tracking-[0.3em] uppercase transition-colors duration-500 focus:outline-none focus:ring-2 focus:ring-primary ${
                  isActive ? "text-white" : "text-[#ffd060] hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>
      </nav>

      {/* Mobile / tablet nav — hamburger on anything below lg */}
      <button
        onClick={() => setMobileOpen(true)}
        className="lg:hidden fixed top-6 right-6 z-50 p-2 text-primary/80 hover:text-primary transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center"
        aria-label="Open navigation"
      >
        <Menu size={24} />
      </button>

      {mobileOpen && (
        <div className="lg:hidden fixed inset-0 z-50 bg-background/98 flex flex-col items-center justify-center gap-8">
          <button
            onClick={() => setMobileOpen(false)}
            className="absolute top-6 right-6 p-2 text-foreground/60 hover:text-primary min-w-[44px] min-h-[44px] flex items-center justify-center"
            aria-label="Close navigation"
          >
            <X size={24} />
          </button>
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setMobileOpen(false)}
              className={`font-display text-2xl tracking-[0.2em] uppercase transition-colors duration-500 ${
                location.pathname === link.path
                  ? "text-primary"
                  : "text-foreground/60 hover:text-primary"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </>
  );
}