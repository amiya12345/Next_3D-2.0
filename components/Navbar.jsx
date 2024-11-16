import React, { useState, useEffect, useCallback, memo } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

// Prevent hydration errors by safely accessing window
const isBrowser = typeof window !== "undefined";

const NavLink = memo(({ href, external, children, onClick, className = "" }) => {
  // Safeguard against null/undefined href
  if (!href) return null;

  const linkClassName = `hover:text-sky-500 transition-colors ${className}`.trim();

  if (external) {
    return (
      <a 
        href={href}
        target="_blank"
        rel="noreferrer noopener" // Added noopener for security
        className={linkClassName}
        onClick={onClick}
      >
        {children}
      </a>
    );
  }

  return (
    <Link 
      href={href}
      scroll={true}
      className={linkClassName}
      onClick={onClick}
    >
      {children}
    </Link>
  );
});

NavLink.displayName = 'NavLink';

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/#works", label: "Works" },
  { href: "/#about", label: "About" },
  { 
    href: "https://drive.google.com/file/d/1X_tJFwPZENrybc325suhonCEmZPKcGWq/view",
    label: "Resume",
    external: true 
  }
];

const Navbar = memo(() => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Handle scroll events with debouncing
  const handleScroll = useCallback(() => {
    if (!isBrowser) return;

    // Using requestAnimationFrame for smooth performance
    requestAnimationFrame(() => {
      setIsScrolled(window.scrollY >= 90);
    });
  }, []);

  // Handle mounting to prevent hydration errors
  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  // Setup scroll listener with error handling
  useEffect(() => {
    if (!isBrowser) return;

    try {
      window.addEventListener("scroll", handleScroll, { passive: true });
      // Initial check
      handleScroll();
    } catch (error) {
      console.error("Error setting up scroll listener:", error);
    }

    return () => {
      try {
        window.removeEventListener("scroll", handleScroll);
      } catch (error) {
        console.error("Error removing scroll listener:", error);
      }
    };
  }, [handleScroll]);

  // Handle menu state
  const toggleMenu = useCallback(() => {
    setIsMenuOpen(prev => !prev);
    // Prevent body scroll when menu is open
    if (isBrowser) {
      document.body.style.overflow = !isMenuOpen ? 'hidden' : '';
    }
  }, [isMenuOpen]);

  const closeMenu = useCallback(() => {
    setIsMenuOpen(false);
    if (isBrowser) {
      document.body.style.overflow = '';
    }
  }, []);

  // Handle escape key to close menu
  useEffect(() => {
    if (!isBrowser) return;

    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        closeMenu();
      }
    };

    if (isMenuOpen) {
      window.addEventListener('keydown', handleEscape);
      return () => window.removeEventListener('keydown', handleEscape);
    }
  }, [isMenuOpen, closeMenu]);

  // Don't render until mounted to prevent hydration errors
  if (!mounted) return null;

  const navbarStyles = {
    backgroundColor: isScrolled ? "rgba(0, 0, 0, 0.8)" : "transparent",
    color: "#E5E7EB",
  };

  return (
    <header 
      style={navbarStyles}
      className={`
        fixed top-0 w-full h-[72px] transition-all duration-300 ease-in-out
        flex justify-between items-center px-4 z-[100]
        ${isScrolled ? 'backdrop-blur-sm shadow-lg' : ''}
      `}
      role="banner"
    >
      {/* Logo */}
      <div className="text-[16px] font-omiofont3 relative z-10">
        <Link href="/" onClick={closeMenu}>
          <span className="hover:text-sky-500 transition-colors">AR.</span>
        </Link>
      </div>

      {/* Desktop Navigation */}
      <nav 
        className="hidden md:block"
        role="navigation"
        aria-label="Main navigation"
      >
        <ul className="flex items-center space-x-10 font-omiofont3 text-[16px]">
          {navLinks.map(({ href, label, external }) => (
            <li key={href}>
              <NavLink href={href} external={external}>
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      {/* Mobile Menu Button */}
      <button
        onClick={toggleMenu}
        className="md:hidden relative z-10 p-2 hover:bg-white/10 rounded-lg transition-colors"
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        aria-expanded={isMenuOpen}
        aria-controls="mobile-menu"
      >
        {isMenuOpen ? (
          <X className="h-6 w-6" aria-hidden="true" />
        ) : (
          <Menu className="h-6 w-6" aria-hidden="true" />
        )}
      </button>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div 
          id="mobile-menu"
          className="fixed inset-0 bg-black/95 z-50 md:hidden animate-fade-in"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile menu"
        >
          <nav 
            className="h-full flex items-center justify-center"
            role="navigation"
            aria-label="Mobile navigation"
          >
            <ul className="space-y-8 text-center">
              {navLinks.map(({ href, label, external }) => (
                <li key={href} className="text-2xl">
                  <NavLink 
                    href={href}
                    external={external}
                    onClick={closeMenu}
                    className="block py-2 px-4"
                  >
                    {label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
});

Navbar.displayName = 'Navbar';

export default Navbar;