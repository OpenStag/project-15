'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-[#1a1a2e] text-white">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold">
              Trip<span className="text-orange-500">Go</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="hover:text-orange-500 transition-colors">
              Home
            </Link>
            <Link href="/vehicles" className="text-orange-500 hover:text-orange-400 transition-colors">
              Vehicles
            </Link>
            <Link href="/contact" className="hover:text-orange-500 transition-colors">
              Contact Us
            </Link>
            <Link href="/about" className="hover:text-orange-500 transition-colors">
              About Us
            </Link>
          </nav>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="bg-orange-500 hover:bg-orange-600 px-4 py-2 rounded-md text-sm font-medium transition-colors">
              Login | Register
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-4">
              <Link href="/" className="hover:text-orange-500 transition-colors">
                Home
              </Link>
              <Link href="/vehicles" className="text-orange-500 hover:text-orange-400 transition-colors">
                Vehicles
              </Link>
              <Link href="/contact" className="hover:text-orange-500 transition-colors">
                Contact Us
              </Link>
              <Link href="/about" className="hover:text-orange-500 transition-colors">
                About Us
              </Link>
              <button className="bg-orange-500 hover:bg-orange-600 px-4 py-2 rounded-md text-sm font-medium transition-colors w-fit">
                Login | Register
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
