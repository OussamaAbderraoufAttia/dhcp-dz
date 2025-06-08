"use client";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";

export function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    // Function to check if dark class is present on <html>
    const checkDarkMode = () => {
      const html = document.documentElement;
      setIsDark(html.classList.contains("dark"));
    };

    checkDarkMode();

    // Optionally, listen for a custom event if you toggle dark mode programmatically
    window.addEventListener("dark-mode-change", checkDarkMode);

    return () => {
      window.removeEventListener("dark-mode-change", checkDarkMode);
    };
  }, []);

  const linkClass =
    "relative text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors duration-300 ease-in-out";
  const underlineClass =
    "after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-blue-600 dark:after:bg-blue-400 after:transition-all after:duration-300 ease-in-out hover:after:w-full";

  return (
    <header className="bg-white dark:bg-gray-900 shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <img
              src={isDark ? "/Logo - Version 1 - Dark Version.svg" : "/Logo - Version 1.svg"}
              alt="DHCP Logo"
              className="h-12 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className={`${linkClass} ${underlineClass}`}>
              Home
            </Link>
            <Link href="#about" className={`${linkClass} ${underlineClass}`}>
              About Us
            </Link>
            <Link href="#services" className={`${linkClass} ${underlineClass}`}>
              Services
            </Link>
            <Link href="#projects" className={`${linkClass} ${underlineClass}`}>
              Projects
            </Link>
            <Link href="#team" className={`${linkClass} ${underlineClass}`}>
              Team
            </Link>
            <Link href="#contact" className={`${linkClass} ${underlineClass}`}>
              Contact
            </Link>
          </nav>

          {/* Desktop Custom Button */}
          <div className="hidden md:block">
            <button className="bg-[#289DD2] hover:bg-[#01003B] dark:hover:bg-blue-900 text-white font-medium py-2 px-4 rounded-lg transition duration-300">
              Get a Quote
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 focus:outline-none"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 pb-6 bg-white dark:bg-gray-900 rounded-b-lg shadow-lg">
            <nav className="flex flex-col space-y-4">
              <Link href="/" className={`${linkClass} ${underlineClass}`} onClick={() => setIsMenuOpen(false)}>
                Home
              </Link>
              <Link href="#about" className={`${linkClass} ${underlineClass}`} onClick={() => setIsMenuOpen(false)}>
                About Us
              </Link>
              <Link href="#services" className={`${linkClass} ${underlineClass}`} onClick={() => setIsMenuOpen(false)}>
                Services
              </Link>
              <Link href="#projects" className={`${linkClass} ${underlineClass}`} onClick={() => setIsMenuOpen(false)}>
                Projects
              </Link>
              <Link href="#team" className={`${linkClass} ${underlineClass}`} onClick={() => setIsMenuOpen(false)}>
                Team
              </Link>
              <Link href="#contact" className={`${linkClass} ${underlineClass}`} onClick={() => setIsMenuOpen(false)}>
                Contact
              </Link>
              {/* Mobile Custom Button */}
              <button className="bg-[#289DD2] hover:bg-[#01003B] dark:hover:bg-blue-900 text-white font-medium py-2 px-4 rounded-lg w-full transition duration-300">
                Get a Quote
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
