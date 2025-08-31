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

  return (
    <div className="bg-[#E9E6E6] rounded-[20px] p-6 shadow-[0px_4px_4px_rgba(0,0,0,0.3)] w-[475px] h-[950px]">
      <div className="mb-6">
        <div className="relative w-[441px] h-[294px] bg-[#E3E3E3] rounded-[20px] mb-4 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800&h=480&fit=crop&auto=format"
            alt="Ford Mustang Mach-E"
            className="w-full h-full object-cover"
            onError={(e) => {
              e.currentTarget.src = 'https://via.placeholder.com/800x480/cccccc/000000?text=Vehicle';
            }}
          />
        </div>
        <div className="flex space-x-3">
          {[1, 2].map((index) => (
            <div
              key={index}
              className="w-[78px] h-[78px] bg-[#E3E3E3] rounded-[20px] cursor-pointer overflow-hidden border border-white transition-all flex items-center justify-center"
            >
              <img
                src="https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=160&h=160&fit=crop&auto=format"
                alt={`Ford Mustang Mach-E view ${index}`}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.src = 'https://via.placeholder.com/160/cccccc/000000?text=Img';
                }}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="mb-4">
        <h2 className="text-[18px] font-semibold text-gray-900 mb-2">Ford Mustang Mach-E</h2>
        <p className="text-gray-700 text-[12px] leading-[18px] mb-4">
          A stylish, all-electric SUV that combines performance with practicality. With its spacious interior, long driving range, and advanced tech features, it&apos;s perfect for both city cruising and long road trips. Enjoy eco-friendly driving without compromising on power or comfort.
        </p>
      </div>

      <div className="flex flex-wrap gap-2 mb-6">
        <span className="bg-[#8B8A8A80] text-white px-3 py-1 rounded-[15px] text-[12px] font-medium flex items-center gap-1 shadow-[0px_1px_4px_rgba(0,0,0,0.25)]">
          <span>👥</span>5
        </span>
        <span className="bg-[#BAB8B8] text-white px-3 py-1 rounded-[15px] text-[12px] font-medium flex items-center gap-1 shadow-[0px_1px_4px_rgba(0,0,0,0.25)]">
          <span>⛽</span>Petrol
        </span>
        <span className="bg-[#BAB8B8] text-white px-3 py-1 rounded-[15px] text-[12px] font-medium shadow-[0px_1px_4px_rgba(0,0,0,0.25)]">Automatic</span>
      </div>

      <div className="mb-10">
        <h3 className="text-[18px] font-semibold text-gray-900 mb-4">Features</h3>
        <div className="grid grid-cols-2 gap-y-4 gap-x-4 text-[14px]">
          <div className="flex items-center gap-2 text-[#454545]">
            <span className="text-[16px]">📊</span>
            <span>Digital Instrument Cluster</span>
          </div>
          <div className="flex items-center gap-2 text-[#454545]">
            <span className="text-[16px]">🎯</span>
            <span>Intelligent Range</span>
          </div>
          <div className="flex items-center gap-2 text-[#454545]">
            <span className="text-[16px]">📶</span>
            <span>5G Wi-Fi Hotspot</span>
          </div>
          <div className="flex items-center gap-2 text-[#454545]">
            <span className="text-[16px]">�</span>
            <span>Phone As a Key</span>
          </div>
          <div className="flex items-center gap-2 text-[#454545]">
            <span className="text-[16px]">⚡</span>
            <span>SYNC 4A System</span>
          </div>
          <div className="flex items-center gap-2 text-[#454545]">
            <span className="text-[16px]">�️</span>
            <span>Ford Co-Pilot360</span>
          </div>
        </div>
      </div>

      <div className="flex justify-between text-[12px] mt-12">
        <div>
          <div className="text-[#FF5C00] font-medium mb-1">Pick - up</div>
          <div className="font-bold text-gray-900">Colombo | Aug 01, 2025</div>
        </div>
        <div>
          <div className="text-[#FF5C00] font-medium mb-1">Drop - Off</div>
          <div className="font-bold text-gray-900">Colombo | Aug 23, 2025</div>
        </div>
      </div>
    </div>
  );
}
