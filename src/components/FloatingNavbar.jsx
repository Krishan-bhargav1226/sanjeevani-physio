import React, { useState, useEffect } from "react";
import { clinic } from "../data/content";
import { Menu, X, ArrowUpRight, Calendar, Phone } from "lucide-react";
import { NavLink, Link } from "react-router-dom";

export default function FloatingNavbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Close mobile menu on Escape key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setMobileMenuOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Handle scroll shrink effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Treatments", href: "/treatments" },
    { name: "About", href: "/about" },
    { name: "Gallery", href: "/gallery" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <>
      <div className="fixed top-4 md:top-6 inset-x-0 z-50 px-4 pointer-events-none flex justify-center">
        <nav
          role="navigation"
          aria-label="Main navigation"
          className={`w-full max-w-[1240px] pointer-events-auto rounded-full bg-darkSection/95 backdrop-blur-2xl border-2 border-white/20 shadow-pill transition-all duration-300 ${isScrolled
              ? "py-3 px-6 md:px-8 shadow-2xl scale-[0.99] border-primary/50 bg-darkSection"
              : "py-4 px-6 md:py-4.5 md:px-9"
            }`}
        >
          <div className="flex items-center justify-between">

            {/* LEFT: Logo & Subtitle */}
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="w-10 h-10 md:w-11 md:h-11 rounded-full bg-white p-0.5 shadow-lg group-hover:scale-105 transition-transform flex-shrink-0">
                <img src="/images/logo.png" alt="Sanjeevani Logo" className="w-full h-full object-contain rounded-full" />
              </div>
              <div className="flex flex-col">
                <div className="flex items-center space-x-2">
                  <span className="text-white font-extrabold tracking-tight text-base md:text-lg font-display">
                    SANJEEVANI
                  </span>
                  <span className="bg-secondary text-white text-[10px] font-black px-2 py-0.5 rounded-full hidden xl:inline-block">
                    HISAR
                  </span>
                </div>
                <span className="text-[10px] md:text-xs text-primary-light font-extrabold tracking-wider -mt-0.5">
                  Physiotherapy & Slimming Centre
                </span>
              </div>
            </Link>

            {/* CENTER: Navigation Links */}
            <div className="hidden lg:flex items-center space-x-1 xl:space-x-2 bg-white/5 p-1.5 rounded-full border border-white/10">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.href}
                  className={({ isActive }) =>
                    `px-4 py-2 rounded-full text-xs font-bold tracking-wide transition-all duration-200 ${isActive
                      ? "text-white bg-primary shadow-md shadow-primary/40 scale-105"
                      : "text-slate-300 hover:text-white hover:bg-white/10"
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
            </div>

            {/* RIGHT: CTAs */}
            <div className="flex items-center space-x-3">
              <a
                href={`tel:${clinic.phones[0]}`}
                className="hidden sm:flex items-center space-x-2 bg-white/10 hover:bg-white/20 text-white text-xs font-bold px-4 py-2.5 rounded-full border border-white/15 transition-all"
              >
                <Phone className="w-3.5 h-3.5 text-secondary" />
                <span className="hidden xl:inline">{clinic.phones[0]}</span>
                <span className="xl:hidden">Call</span>
              </a>

              <Link
                to="/contact"
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-primary to-secondary hover:from-primary-hover hover:to-primary text-white text-xs md:text-sm font-extrabold px-5 md:px-6 py-2.5 md:py-3 rounded-full shadow-lg shadow-primary/40 transition-all hover:scale-105 border border-white/20"
              >
                <Calendar className="w-4 h-4 text-white" />
                <span>Book Appointment</span>
                <ArrowUpRight className="w-4 h-4 text-white hidden sm:inline" />
              </Link>

              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2.5 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors focus:ring-2 focus:ring-white"
                aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
                aria-expanded={mobileMenuOpen}
                aria-controls="mobile-menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

          </div>
        </nav>
      </div>

      {/* Fullscreen Mobile Overlay Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-menu"
          role="region"
          aria-label="Mobile Navigation Menu"
          className="fixed inset-0 z-40 bg-darkSection text-white flex flex-col justify-between p-8 pt-28 lg:hidden animate-fadeIn overflow-y-auto"
        >
          <div className="space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-white/10">
              <span className="text-xs uppercase tracking-widest text-secondary font-bold">Main Menu</span>
              <span className="text-xs text-emerald-400 font-semibold">🟢 Open Today (9 AM - 8 PM)</span>
            </div>

            <div className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={({ isActive }) =>
                    `text-2xl sm:text-3xl font-extrabold font-display transition-colors py-2 border-b border-white/5 flex items-center justify-between ${isActive ? "text-secondary" : "text-white hover:text-secondary"
                    }`
                  }
                >
                  <span>{link.name}</span>
                  <ArrowUpRight className="w-5 h-5 text-slate-400" />
                </NavLink>
              ))}
            </div>
          </div>

          <div className="space-y-4 pt-8 border-t border-white/10 mt-6">
            <Link
              to="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center space-x-2 bg-primary hover:bg-primary-hover text-white font-extrabold py-4 rounded-2xl shadow-xl text-base"
            >
              <Calendar className="w-5 h-5" />
              <span>Book Appointment Now</span>
            </Link>

            <a
              href={`tel:${clinic.phones[0]}`}
              className="w-full flex items-center justify-center space-x-2 bg-white/10 text-white font-bold py-3.5 rounded-2xl border border-white/15"
            >
              <Phone className="w-4 h-4 text-secondary" />
              <span>Call Helpline: {clinic.phones[0]}</span>
            </a>
          </div>
        </div>
      )}
    </>
  );
}
