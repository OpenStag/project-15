'use client';

import { useState } from 'react';

interface SearchBarProps {
  onSearch?: (filters: SearchFilters) => void;
}

export interface SearchFilters {
  pickupLocation: string;
  pickupDate: string;
  dropoffDate: string;
  dailyPrice: string;
  vehicleType: string;
  seats: string;
  transmission: string;
  fuelType: string;
  category: string;
}

export default function SearchBar({ onSearch }: SearchBarProps) {
  const [filters, setFilters] = useState<SearchFilters>({
    pickupLocation: '',
    pickupDate: '',
    dropoffDate: '',
    dailyPrice: '',
    vehicleType: '',
    seats: '',
    transmission: '',
    fuelType: '',
    category: ''
  });

  const handleInputChange = (field: keyof SearchFilters, value: string) => {
    const newFilters = { ...filters, [field]: value };
    setFilters(newFilters);
    onSearch?.(newFilters);
  };

  const handleSearch = () => {
    onSearch?.(filters);
  };

  return (
    <div className="bg-white">
      <div className="bg-[#0F131B] rounded-2xl px-6 pt-5 pb-5 shadow-[0_2px_6px_rgba(0,0,0,0.25)] max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)_minmax(0,1fr)_140px] gap-6 items-end">
          <div>
            <label className="block text-white text-sm font-medium mb-2">Pick-up Location</label>
            <div className="relative">
              <span className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-500 text-sm">🔍</span>
              <input
                type="text"
                placeholder="Location"
                value={filters.pickupLocation}
                onChange={(e) => handleInputChange('pickupLocation', e.target.value)}
                className="w-full pl-7 pr-3 py-2.5 bg-white rounded-md text-sm text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#FF7A00]"
              />
            </div>
          </div>
          <div>
            <label className="block text-white text-sm font-medium mb-2">Pick-up Date</label>
            <input
              type="date"
              value={filters.pickupDate}
              onChange={(e) => handleInputChange('pickupDate', e.target.value)}
              className="w-full px-3 py-2.5 bg-white rounded-md text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#FF7A00]"
            />
          </div>
          <div>
            <label className="block text-white text-sm font-medium mb-2">Drop-off Date</label>
            <input
              type="date"
              value={filters.dropoffDate}
              onChange={(e) => handleInputChange('dropoffDate', e.target.value)}
              className="w-full px-3 py-2.5 bg-white rounded-md text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#FF7A00]"
            />
          </div>
          <div className="flex items-center md:justify-end">
            <button
              onClick={handleSearch}
              className="w-full md:w-auto bg-[#FF7A00] hover:bg-[#ff881a] text-white text-sm font-semibold py-2.5 px-6 rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-[#FF7A00]"
            >
              Search Car
            </button>
          </div>
        </div>
      </div>
      {/* Separate filter pills bar below container */}
      <div className="mt-6 max-w-5xl mx-auto flex flex-wrap gap-3 px-1">
        <select
          value={filters.dailyPrice}
          onChange={(e) => handleInputChange('dailyPrice', e.target.value)}
          className="px-3 py-2 bg-[#252C37] text-white text-xs rounded-full focus:outline-none focus:ring-2 focus:ring-[#FF7A00] border-0"
        >
          <option value="">Daily Price</option>
          <option value="0-2000">Under 2,000</option>
          <option value="2000-5000">2,000 - 5,000</option>
          <option value="5000-8000">5,000 - 8,000</option>
          <option value="8000+">8,000+</option>
        </select>
        <select
          value={filters.vehicleType}
          onChange={(e) => handleInputChange('vehicleType', e.target.value)}
          className="px-3 py-2 bg-[#252C37] text-white text-xs rounded-full focus:outline-none focus:ring-2 focus:ring-[#FF7A00] border-0"
        >
          <option value="">Vehicle Type</option>
          <option value="sedan">Sedan</option>
          <option value="suv">SUV</option>
          <option value="hatchback">Hatchback</option>
          <option value="coupe">Coupe</option>
        </select>
        <select
          value={filters.seats}
          onChange={(e) => handleInputChange('seats', e.target.value)}
          className="px-3 py-2 bg-[#252C37] text-white text-xs rounded-full focus:outline-none focus:ring-2 focus:ring-[#FF7A00] border-0"
        >
          <option value="">Seats</option>
          <option value="2">2</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="7">7</option>
        </select>
        <select
          value={filters.transmission}
          onChange={(e) => handleInputChange('transmission', e.target.value)}
          className="px-3 py-2 bg-[#252C37] text-white text-xs rounded-full focus:outline-none focus:ring-2 focus:ring-[#FF7A00] border-0"
        >
          <option value="">Transmission</option>
          <option value="automatic">Automatic</option>
          <option value="manual">Manual</option>
        </select>
        <select
          value={filters.fuelType}
          onChange={(e) => handleInputChange('fuelType', e.target.value)}
          className="px-3 py-2 bg-[#252C37] text-white text-xs rounded-full focus:outline-none focus:ring-2 focus:ring-[#FF7A00] border-0"
        >
          <option value="">Fuel Type</option>
          <option value="petrol">Petrol</option>
          <option value="diesel">Diesel</option>
          <option value="electric">Electric</option>
          <option value="hybrid">Hybrid</option>
        </select>
        <select
          value={filters.category}
          onChange={(e) => handleInputChange('category', e.target.value)}
          className="px-3 py-2 bg-[#252C37] text-white text-xs rounded-full focus:outline-none focus:ring-2 focus:ring-[#FF7A00] border-0"
        >
          <option value="">Category</option>
          <option value="economy">Economy</option>
          <option value="premium">Premium</option>
          <option value="luxury">Luxury</option>
          <option value="electric">Electric</option>
        </select>
      </div>
    </div>
  );
}
