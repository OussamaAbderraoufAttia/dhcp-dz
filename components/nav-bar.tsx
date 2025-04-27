"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";

export function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const linkClass = "text-gray-700 hover:text-blue-600 font-medium";

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <img src="/Logo - Version 1.svg" alt="DHCP Logo" className="h-12 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className={linkClass}>Home</Link>
            <Link href="#about" className={linkClass}>About Us</Link>
            <Link href="#services" className={linkClass}>Services</Link>
            <Link href="#projects" className={linkClass}>Projects</Link>
            <Link href="#team" className={linkClass}>Team</Link>
            <Link href="#contact" className={linkClass}>Contact</Link>
          </nav>

          {/* Desktop Custom Button */}
          <div className="hidden md:block">
            <button className="bg-[#289DD2] hover:bg-[#01003B] text-white font-medium py-2 px-4 rounded-lg transition duration-300">
              Get a Quote
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-blue-600 focus:outline-none"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 pb-6">
            <nav className="flex flex-col space-y-4">
              <Link href="/" className={linkClass} onClick={() => setIsMenuOpen(false)}>Home</Link>
              <Link href="#about" className={linkClass} onClick={() => setIsMenuOpen(false)}>About Us</Link>
              <Link href="#services" className={linkClass} onClick={() => setIsMenuOpen(false)}>Services</Link>
              <Link href="#projects" className={linkClass} onClick={() => setIsMenuOpen(false)}>Projects</Link>
              <Link href="#team" className={linkClass} onClick={() => setIsMenuOpen(false)}>Team</Link>
              <Link href="#contact" className={linkClass} onClick={() => setIsMenuOpen(false)}>Contact</Link>
              {/* Mobile Custom Button */}
              <button className="bg-[#289DD2] hover:bg-[#01003B] text-white font-medium py-2 px-4 rounded-lg w-full transition duration-300">
                Get a Quote
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
