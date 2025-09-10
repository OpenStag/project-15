// components/Footer.tsx
import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaArrowRight,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";

export default function Footer() {
  return (
    <div className="bg-[#111826] text-white">
      <footer className="max-w-7xl mx-auto px-6 py-10">
        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-10 md:gap-0">
          {/* Brand */}
          <div className="flex flex-col space-y-2 md:w-1/4">
            <h1 className="text-2xl font-extrabold flex items-center gap-1">
              <span>Trip</span>
              <span className="text-[#FF7A00]">Go</span>
            </h1>
            <p className="text-xs font-normal leading-tight max-w-[140px]">
              Drive your way,
              <br />
              anytime, anywhere.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col space-y-2 md:w-1/5">
            <h2 className="font-bold text-sm mb-2">Quick Links</h2>
            <Link href="/" className="text-[12px] font-normal hover:underline">
              Home
            </Link>
            <Link
              href="/vehicles"
              className="text-[12px] font-normal hover:underline"
            >
              Vehicles
            </Link>
            <Link
              href="/about"
              className="text-[12px] font-normal hover:underline"
            >
              About Us
            </Link>
            <Link
              href="/contact"
              className="text-[12px] font-normal hover:underline"
            >
              Contact Us
            </Link>
          </div>

          {/* Support */}
          <div className="flex flex-col space-y-2 md:w-1/5">
            <h2 className="font-bold text-sm mb-2">Support</h2>
            <Link href="/faq" className="text-[12px] font-normal hover:underline">
              FAQs
            </Link>
            <Link
              href="/terms"
              className="text-[12px] font-normal hover:underline"
            >
              Terms & Conditions
            </Link>
            <Link
              href="/privacy"
              className="text-[12px] font-normal hover:underline"
            >
              Privacy Policy
            </Link>
            <Link
              href="/contact"
              className="text-[12px] font-normal hover:underline"
            >
              Customer Support
            </Link>
          </div>

          {/* Contact */}
          <div className="flex flex-col space-y-3 md:w-1/4">
            <h2 className="font-bold text-sm mb-1">Contact</h2>
            <form className="flex items-center space-x-1">
              <input
                type="email"
                placeholder="Email"
                className="text-[12px] px-2 py-1 rounded-sm text-black focus:outline-none bg-white"
              />
              <button
                type="submit"
                className="bg-[#D9D9D9] text-black p-1 rounded-sm"
                aria-label="Submit email"
              >
                <FaArrowRight />
              </button>
            </form>
            <div className="flex flex-col space-y-2">
              <div className="flex items-center gap-2">
                <FaPhoneAlt size={12} />
                <p className="text-[10px] font-normal">+94 71 5872458</p>
              </div>
              <div className="flex items-center gap-2">
                <FaMapMarkerAlt size={12} />
                <p className="text-[10px] font-normal">Colombo, Sri Lanka</p>
              </div>
            </div>
            <div className="flex space-x-3 text-[#D9D9D9] text-xs">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="hover:text-white"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="hover:text-white"
              >
                <FaInstagram />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="hover:text-white"
              >
                <FaTwitter />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <hr className="border-white my-6" />
        <p className="text-[10px] text-[#D9D9D9] text-center">
          Copyright © 2025 Trip
          <span className="text-[#FF7A00]">Go</span>. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
