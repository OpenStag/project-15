import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#1a1a2e] text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <span className="text-2xl font-bold">
                Trip<span className="text-orange-500">Go</span>
              </span>
            </Link>
            <p className="text-gray-300 text-sm">
              Drive your way,<br />
              anytime, anywhere.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <div className="space-y-2">
              <Link href="/" className="block text-gray-300 hover:text-orange-500 transition-colors text-sm">
                Home
              </Link>
              <Link href="/vehicles" className="block text-gray-300 hover:text-orange-500 transition-colors text-sm">
                Vehicles
              </Link>
              <Link href="/about" className="block text-gray-300 hover:text-orange-500 transition-colors text-sm">
                About Us
              </Link>
              <Link href="/contact" className="block text-gray-300 hover:text-orange-500 transition-colors text-sm">
                Contact Us
              </Link>
            </div>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <div className="space-y-2">
              <Link href="/faq" className="block text-gray-300 hover:text-orange-500 transition-colors text-sm">
                FAQs
              </Link>
              <Link href="#" className="block text-gray-300 hover:text-orange-500 transition-colors text-sm">
                Terms & Conditions
              </Link>
              <Link href="#" className="block text-gray-300 hover:text-orange-500 transition-colors text-sm">
                Privacy Policy
              </Link>
              <Link href="#" className="block text-gray-300 hover:text-orange-500 transition-colors text-sm">
                Customer Support
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <span className="text-sm">📞</span>
                <span className="text-gray-300 text-sm">+94 9 9067456</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-sm">📍</span>
                <span className="text-gray-300 text-sm">Colombo, Sri Lanka</span>
              </div>
              <div className="flex space-x-3 mt-4">
                <a href="#" className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center hover:bg-orange-500 transition-colors">
                  <span className="text-sm">f</span>
                </a>
                <a href="#" className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center hover:bg-orange-500 transition-colors">
                  <span className="text-sm">ig</span>
                </a>
                <a href="#" className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center hover:bg-orange-500 transition-colors">
                  <span className="text-sm">x</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
