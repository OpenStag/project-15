import React from 'react';
import { Search, Calendar } from 'lucide-react';


export default function Home() {
  return (
    <div>
      {/* Car Search Section */}
      <section className="bg-[#2D3748] p-6 rounded-lg mx-6 my-8 flex flex-wrap gap-4 justify-between items-end">
        {/* Pick-up Location */}
        <div className="flex flex-col min-w-[200px]">
          <label className="text-white font-medium mb-2 text-sm">Pick-up Location</label>
          <div className="relative">
            <input
              type="text"
              placeholder="Location"
              className="pl-10 pr-3 py-3 rounded-md bg-gray-100 focus:outline-none focus:ring-2 focus:ring-orange-500 w-full text-gray-700"
              style={{ border: '1px solid rgba(0, 0, 0, 0.34)' }}
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          </div>
        </div>

        {/* Pick-up Date */}
        <div className="flex flex-col min-w-[180px]">
          <label className="text-white font-medium mb-2 text-sm">Pick-up Date</label>
          <div className="flex gap-2">
            <div className="relative flex-1">
              <input
                type="date"
                defaultValue="2025-09-01"
                className="pl-10 pr-3 py-3 rounded-md bg-gray-100 focus:outline-none focus:ring-2 focus:ring-orange-500 w-full text-gray-700"
                style={{ border: '1px solid rgba(0, 0, 0, 0.34)' }}
              />
              <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            </div>
            <input
              type="time"
              defaultValue="08:00"
              className="px-3 py-3 rounded-md bg-gray-100 focus:outline-none focus:ring-2 focus:ring-orange-500 text-gray-700 min-w-[80px]"
              style={{ border: '1px solid rgba(0, 0, 0, 0.34)' }}
            />
          </div>
        </div>

        {/* Drop-off Date */}
        <div className="flex flex-col min-w-[180px]">
          <label className="text-white font-medium mb-2 text-sm">Drop-off Date</label>
          <div className="flex gap-2">
            <div className="relative flex-1">
              <input
                type="date"
                defaultValue="2025-10-01"
                className="pl-10 pr-3 py-3 rounded-md bg-gray-100 focus:outline-none focus:ring-2 focus:ring-orange-500 w-full text-gray-700"
                style={{ border: '1px solid rgba(0, 0, 0, 0.34)' }}
              />
              <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            </div>
            <input
              type="time"
              defaultValue="08:00"
              className="px-3 py-3 rounded-md bg-gray-100 focus:outline-none focus:ring-2 focus:ring-orange-500 text-gray-700 min-w-[80px]"
              style={{ border: '1px solid rgba(0, 0, 0, 0.34)' }}
            />
          </div>
        </div>

        {/* Search Button */}
        <button className="bg-orange-500 text-white font-semibold px-8 py-3 rounded-md hover:bg-orange-600 transition-colors duration-200 min-w-[120px] h-fit">
          Search Car
        </button>
      </section>

      {/* Hero Section */}
<section className="bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-6 mx-6 my-8 rounded-lg">
  <div className="max-w-6xl mx-auto text-center">
    <h1 className="text-9xl font-bold text-orange-500 mb-2">RENT A CAR</h1>
    <h2 className="text-5xl font-bold text-black mb-8">ANYWHERE. ANYTIME</h2>
    
    <div className="relative">
      <img 
        src="/hero car.png" 
        alt="Multiple rental cars" 
        className="w-full max-w-4xl mx-auto"
      />
    </div>
  </div>
</section>

{/* Choose the Ride Section */}
<section className="py-12 px-6 mx-6 my-8">
  <div className="max-w-6xl mx-auto">
    <h2 className="text-4xl font-bold text-black text-center mb-12">
      Choose the <span className="text-orange-500">Ride</span> That Fits You <span className="text-orange-500">Best</span>
    </h2>
    
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {/* Easy Rides Card */}
      <div className="relative rounded-2xl overflow-hidden bg-cover bg-center h-96 group">
        <img 
          src="/cheap.png" 
          alt="Economy Vehicle" 
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-6 left-6 text-white">
          <h3 className="text-2xl font-bold mb-2 drop-shadow-lg">Easy Rides</h3>
          <p className="text-lg mb-4 drop-shadow-lg">Economy Vehicles</p>
          <button className="border-2 border-white text-white px-6 py-2 rounded-full hover:bg-white hover:text-black transition-colors">
            View Vehicles
          </button>
        </div>
      </div>

      {/* Comfort Drive Card */}
      <div className="relative rounded-2xl overflow-hidden bg-cover bg-center h-96 group">
        <img 
          src="/mid.png" 
          alt="Mid-Range Vehicle" 
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-6 left-6 text-white">
          <h3 className="text-2xl font-bold mb-2 drop-shadow-lg">Comfort Drive</h3>
          <p className="text-lg mb-4 drop-shadow-lg">Mid-Range Vehicles</p>
          <button className="border-2 border-white text-white px-6 py-2 rounded-full hover:bg-white hover:text-black transition-colors">
            View Vehicles
          </button>
        </div>
      </div>

      {/* Elite Wheels Card */}
      <div className="relative rounded-2xl overflow-hidden bg-cover bg-center h-96 group">
        <img 
          src="/luxury.png" 
          alt="Luxury Vehicle" 
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-6 left-6 text-white">
          <h3 className="text-2xl font-bold mb-2 drop-shadow-lg">Elite Wheels</h3>
          <p className="text-lg mb-4 drop-shadow-lg">Luxury Vehicles</p>
          <button className="border-2 border-white text-white px-6 py-2 rounded-full hover:bg-white hover:text-black transition-colors">
            View Vehicles
          </button>
        </div>
      </div>
    </div>
  </div>
</section>
{/* Reviews Section */}
<section className="py-12 px-6 mx-6 my-8 relative">
  {/* Background Image */}
  <div className="absolute inset-0 rounded-lg overflow-hidden">
    <img 
      src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2021&q=80" 
      alt="Laughing couple driving car" 
      className="w-full h-full object-cover opacity-20"
    />
  </div>
  
  <div className="relative z-10 max-w-6xl mx-auto">
    <h2 className="text-4xl font-bold text-center mb-4 text-black">
      Trusted by Thousands of <span className="text-orange-500">Happy Riders</span>
    </h2>
    <p className="text-center text-gray-600 text-lg mb-12">
      "Here's what our customers say about their experience."
    </p>
    
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-black">
      {/* Michael R. Review */}
      <div className="bg-white rounded-2xl p-6 shadow-lg">
        <div className="flex flex-col items-center mb-6">
          <img 
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80" 
            alt="Michael R." 
            className="w-20 h-20 rounded-full object-cover mb-4"
          />
          <h3 className="text-xl font-bold text-center">Michael R.</h3>
        </div>
        <div className="mb-6">
          <span className="text-orange-500 text-2xl">"</span>
          <p className="text-gray-700 text-center px-2">
            Smooth booking process and the car was in great condition. Made my business trip stress-free.
          </p>
          <span className="text-orange-500 text-2xl float-right">"</span>
        </div>
        <div className="flex justify-center space-x-1">
          {[...Array(5)].map((_, i) => (
            <span key={i} className="text-orange-500 text-xl">★</span>
          ))}
        </div>
      </div>

      {/* Amelia W. Review */}
      <div className="bg-white rounded-2xl p-6 shadow-lg">
        <div className="flex flex-col items-center mb-6">
          <img 
            src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
            alt="Amelia W." 
            className="w-20 h-20 rounded-full object-cover mb-4"
          />
          <h3 className="text-xl font-bold text-center">Amelia W.</h3>
        </div>
        <div className="mb-6">
          <span className="text-orange-500 text-2xl">"</span>
          <p className="text-gray-700 text-center px-2">
            I loved how quick and easy it was to rent. The car was clean, comfortable, and fuel-efficient.
          </p>
          <span className="text-orange-500 text-2xl float-right">"</span>
        </div>
        <div className="flex justify-center space-x-1">
          {[...Array(4)].map((_, i) => (
            <span key={i} className="text-orange-500 text-xl">★</span>
          ))}
        </div>
      </div>

      {/* The Johnson Family Review */}
      <div className="bg-white rounded-2xl p-6 shadow-lg">
        <div className="flex flex-col items-center mb-6">
          <img 
            src="https://images.unsplash.com/photo-1581579438747-1dc8d17bbce4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
            alt="The Johnson Family" 
            className="w-20 h-20 rounded-full object-cover mb-4"
          />
          <h3 className="text-xl font-bold text-center">The Johnson Family</h3>
        </div>
        <div className="mb-6">
          <span className="text-orange-500 text-2xl">"</span>
          <p className="text-gray-700 text-center px-2">
            Perfect spacious vehicle for our weekend getaway. Safe, reliable, and excellent service.
          </p>
          <span className="text-orange-500 text-2xl float-right">"</span>
        </div>
        <div className="flex justify-center space-x-1">
          {[...Array(5)].map((_, i) => (
            <span key={i} className="text-orange-500 text-xl">★</span>
          ))}
        </div>
      </div>
    </div>
  </div>
</section>

{/* Why Ride With Us Section */}
<section className="py-12 px-6 mx-6 my-8">
  <div className="max-w-6xl mx-auto text-black">
    <h2 className="text-4xl font-bold text-center mb-4">
      Why <span className="text-orange-500">Ride</span> With Us?
    </h2>
    <p className="text-center text-gray-600 text-lg mb-12">
      We make renting a vehicle simple, reliable, and stress-free.
    </p>
    
    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 justify-items-center">
      <img 
        src="/wide range.png" 
        alt="Wide Range of Vehicles" 
        className="w-auto h-auto max-w-full"
      />
      <img 
        src="/easy payment.png" 
        alt="Easy & Secure Payments" 
        className="w-auto h-auto max-w-full"
      />
      <img 
        src="/hussle free.png" 
        alt="Hassle-Free Booking" 
        className="w-auto h-auto max-w-full"
      />
      <img 
        src="/customer support.png" 
        alt="24/7 Customer Support" 
        className="w-auto h-auto max-w-full"
      />
    </div>
  </div>
</section>
    </div>
  );
}