'use client';

import { Vehicle } from '../Vehicles/VehicleCard';

interface VehicleDetailsProps {
  vehicle?: Vehicle;
}

export default function VehicleDetails({ vehicle }: VehicleDetailsProps) {
  if (!vehicle) {
    return (
      <div className="bg-white rounded-lg p-6">
        <div className="text-center py-8">
          <p className="text-gray-500">No vehicle selected</p>
        </div>
      </div>
    );
  }

  const features = [
    { icon: '📊', label: 'Digital Instrument Cluster' },
    { icon: '🎯', label: 'Intelligent Range' },
    { icon: '📶', label: '5G Wi-Fi Hotspot' },
    { icon: '🔑', label: 'Phone As a Key' },
    { icon: '⚡', label: 'SYNC 4A System' },
    { icon: '🚗', label: 'Ford Co-Pilot360' }
  ];

  return (
    <div className="bg-gray-200 rounded-lg p-6">
      {/* Vehicle Image and Thumbnails */}
      <div className="mb-6">
        <div className="relative h-64 bg-black rounded-lg mb-4 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=500&h=300&fit=crop&auto=format"
            alt="Ford Mustang Mach-E"
            className="w-full h-full object-cover rounded-lg"
            onError={(e) => {
              e.currentTarget.src = 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=500&h=300&fit=crop&auto=format';
            }}
          />
        </div>
        
        {/* Thumbnail Gallery */}
        <div className="flex space-x-2">
          {[1, 2].map((index) => (
            <div
              key={index}
              className="w-16 h-16 bg-black rounded-lg cursor-pointer hover:opacity-80 transition-opacity overflow-hidden"
            >
              <img
                src="https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=100&h=100&fit=crop&auto=format"
                alt={`Ford Mustang Mach-E view ${index}`}
                className="w-full h-full object-cover rounded-lg"
                onError={(e) => {
                  e.currentTarget.src = 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=100&h=100&fit=crop&auto=format';
                }}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Vehicle Info */}
      <div className="mb-6">
        <h2 className="text-xl font-bold text-gray-900 mb-2">Ford Mustang Mach-E</h2>
        <p className="text-gray-600 text-sm leading-relaxed mb-4">
          A stylish, all-electric SUV that combines performance with practicality. With its spacious interior, long driving range, and advanced tech features, it&apos;s perfect for both city cruising and long road trips. Enjoy eco-friendly driving without compromising on power or comfort.
        </p>
      </div>

      {/* Vehicle Tags */}
      <div className="flex items-center space-x-2 mb-6">
        <span className="bg-gray-300 text-gray-700 px-3 py-1 rounded-full text-xs font-medium flex items-center">
          <span className="mr-1">👥</span>
          5
        </span>
        <span className="bg-gray-300 text-gray-700 px-3 py-1 rounded-full text-xs font-medium flex items-center">
          <span className="mr-1">⛽</span>
          Petrol
        </span>
        <span className="bg-gray-300 text-gray-700 px-3 py-1 rounded-full text-xs font-medium">
          Automatic
        </span>
        <span className="bg-gray-300 text-gray-700 px-3 py-1 rounded-full text-xs font-medium">
          Electric
        </span>
      </div>

      {/* Features */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Features</h3>
        <div className="grid grid-cols-2 gap-3">
          <div className="flex items-center space-x-3">
            <span className="text-lg">📊</span>
            <span className="text-gray-700 text-sm">Digital Instrument Cluster</span>
          </div>
          <div className="flex items-center space-x-3">
            <span className="text-lg">🎯</span>
            <span className="text-gray-700 text-sm">Intelligent Range</span>
          </div>
          <div className="flex items-center space-x-3">
            <span className="text-lg">📶</span>
            <span className="text-gray-700 text-sm">5G Wi-Fi Hotspot</span>
          </div>
          <div className="flex items-center space-x-3">
            <span className="text-lg">🔑</span>
            <span className="text-gray-700 text-sm">Phone As a Key</span>
          </div>
          <div className="flex items-center space-x-3">
            <span className="text-lg">⚡</span>
            <span className="text-gray-700 text-sm">SYNC 4A System</span>
          </div>
          <div className="flex items-center space-x-3">
            <span className="text-lg">🚗</span>
            <span className="text-gray-700 text-sm">Ford Co-Pilot360</span>
          </div>
        </div>
      </div>

      {/* Rental Dates */}
      <div className="grid grid-cols-2 gap-4 text-sm">
        <div>
          <span className="text-orange-500 font-medium">Pick - up</span>
          <div className="font-medium text-gray-900">Colombo | Aug 01, 2025</div>
        </div>
        <div>
          <span className="text-orange-500 font-medium">Drop - off</span>
          <div className="font-medium text-gray-900">Colombo | Aug 23, 2025</div>
        </div>
      </div>
    </div>
  );
}
