import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "Projects", path: "/projects" },
  { label: "Experience", path: "/experience" },
  { label: "Education", path: "/education" },
  { label: "Publications", path: "/publications" },
  { label: "Beyond Engineering", path: "/community" },
];

export default function CornerNav() {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      {/* Desktop corner-pin nav */}
      <nav className="hidden md:block fixed inset-0 z-40 pointer-events-none">
        {/* Top-left: Home */}
        <Link
          to="/"
          className="pointer-events-auto absolute top-8 left-8 font-mono text-sm tracking-[0.3em] uppercase text-foreground/85 hover:text-primary transition-colors duration-500 focus:outline-none focus:ring-2 focus:ring-primary"
          style={{ textShadow: "0 0 12px rgba(255,210,110,0.5), 0 0 30px rgba(255,170,60,0.28), 0 0 60px rgba(255,140,40,0.14)" }}
        >
          Home
        </Link>
        {/* Top-right: Projects */}
        <Link
          to="/projects"
          className="pointer-events-auto absolute top-8 right-8 font-mono text-sm tracking-[0.3em] uppercase text-foreground/85 hover:text-primary transition-colors duration-500 focus:outline-none focus:ring-2 focus:ring-primary"
          style={{ textShadow: "0 0 12px rgba(255,210,110,0.5), 0 0 30px rgba(255,170,60,0.28), 0 0 60px rgba(255,140,40,0.14)" }}
        >
          Projects
        </Link>
        {/* Bottom-left: Contact */}
        <a
          href="mailto:sangeet1@stanford.edu"
          className="pointer-events-auto absolute bottom-8 left-8 font-mono text-sm tracking-[0.3em] uppercase text-foreground/85 hover:text-primary transition-colors duration-500 focus:outline-none focus:ring-2 focus:ring-primary"
          style={{ textShadow: "0 0 12px rgba(255,210,110,0.5), 0 0 30px rgba(255,170,60,0.28), 0 0 60px rgba(255,140,40,0.14)" }}
        >
          Contact
        </a>
        {/* Bottom-right vertical links */}
        <div className="pointer-events-auto absolute bottom-8 right-8 flex flex-col items-end gap-3">
          {navLinks.slice(2).map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.path}
                to={link.path}
                className={`font-mono text-sm tracking-[0.3em] uppercase transition-colors duration-500 focus:outline-none focus:ring-2 focus:ring-primary ${
                  isActive ? "text-primary" : "text-foreground/85 hover:text-primary"
                }`}
                style={{
                  textShadow: isActive
                    ? "0 0 16px rgba(255,210,110,0.8), 0 0 40px rgba(255,170,60,0.5), 0 0 80px rgba(255,140,40,0.25)"
                    : "0 0 12px rgba(255,210,110,0.5), 0 0 30px rgba(255,170,60,0.28), 0 0 60px rgba(255,140,40,0.14)",
                }}
              >
                {link.label}
              </Link>
            );
          })}
        </div>
      </nav>

      {/* Mobile nav */}
      <button
        onClick={() => setMobileOpen(true)}
        className="md:hidden fixed top-6 right-6 z-50 p-2 text-foreground/85 hover:text-primary transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center"
        aria-label="Open navigation"
      >
        <Menu size={24} />
      </button>

      {mobileOpen && (
        <div className="md:hidden fixed inset-0 z-50 bg-background/98 flex flex-col items-center justify-center gap-8">
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
          <a
            href="mailto:sangeet1@stanford.edu"
            className="font-display text-2xl tracking-[0.2em] uppercase text-foreground/60 hover:text-primary transition-colors duration-500"
          >
            Contact
          </a>
        </div>
      )}
    </>
  );
}