"use client";

import Link from "next/link";
import { FaUser } from "react-icons/fa";

interface HeaderProps {
  onLoginRegisterClick: () => void;
}

export default function Navbar({ onLoginRegisterClick }: HeaderProps) {
  return (
    <nav className="bg-[#1a2433] border-b border-[#f97316]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-12">
          {/* Logo */}
          <div className="flex items-center">
            <Link
              href="/"
              className="text-white font-semibold text-xl flex items-center"
            >
              <span>Trip</span>
              <span className="text-[#f97316] ml-1">Go</span>
            </Link>
          </div>

          {/* Center Nav Links */}
          <div className="hidden md:flex space-x-6 text-sm font-medium text-white">
            <Link href="/" className="hover:underline">
              Home
            </Link>
            <Link
              href="/vehicles"
              className="text-[#f97316] font-semibold hover:underline"
            >
              Vehicles
            </Link>
            <Link href="/contact" className="hover:underline">
              Contact Us
            </Link>
            <Link href="/about" className="hover:underline">
              About Us
            </Link>
          </div>

          {/* Right Side Login Button */}
          <div className="hidden md:flex">
            <button
              onClick={onLoginRegisterClick}
              className="flex items-center space-x-1 bg-[#f97316] text-white text-sm font-semibold px-3 py-1 rounded"
            >
              <FaUser />
              <span>Login | Register</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
