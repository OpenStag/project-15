"use client";

import Image from "next/image";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-start pt-10 pb-20">
      <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-5xl gap-10">
        {/* Left: Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <Image
            src="/car.png"
            alt="Contact Us "
            width={350}
            height={466}
            className="rounded-lg object-cover"
          />
        </div>
        {/* Right: Contact Form */}
        <div className="w-full md:w-1/2 bg-white rounded-lg p-6 flex flex-col">
          <h2 className="text-3xl font-bold mb-2 text-[#1a2433]">Get in Touch...</h2>
          <p className="text-sm text-gray-600 mb-6">
            Have a question about a vehicle, your booking, or anything else? We're here to help. Fill out the form below, and we'll get back to you as soon as possible.
          </p>
          <form className="space-y-4 text-black">
            <div className="flex gap-4">
              <input
                type="text"
                placeholder="First Name"
                className="w-1/2 px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#f97316]"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="w-1/2 px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#f97316]"
              />
            </div>
            <div className="flex gap-4">
              <input
                type="email"
                placeholder="Email"
                className="w-1/2 px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#f97316]"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-1/2 px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#f97316]"
              />
            </div>
            <textarea
              placeholder="Enter your message here ..."
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#f97316] min-h-[80px]"
            />
            <button
              type="submit"
              className="w-full bg-[#f97316] text-white font-bold py-2 rounded mt-2 hover:bg-[#ff8c42] transition"
            >
              SEND
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
