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
    <div className="bg-[#1a1a2e] p-6 rounded-lg">
      {/* Location and Date Section */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
        <div>
          <label className="block text-white text-sm font-medium mb-2">Pick-up Location</label>
          <input
            type="text"
            placeholder="Location"
            value={filters.pickupLocation}
            onChange={(e) => handleInputChange('pickupLocation', e.target.value)}
            className="w-full px-3 py-2 bg-white rounded-md text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
        </div>
        
        <div>
          <label className="block text-white text-sm font-medium mb-2">Pick-up Date</label>
          <input
            type="date"
            value={filters.pickupDate}
            onChange={(e) => handleInputChange('pickupDate', e.target.value)}
            className="w-full px-3 py-2 bg-white rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
        </div>
        
        <div>
          <label className="block text-white text-sm font-medium mb-2">Drop-off Date</label>
          <input
            type="date"
            value={filters.dropoffDate}
            onChange={(e) => handleInputChange('dropoffDate', e.target.value)}
            className="w-full px-3 py-2 bg-white rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
        </div>
        
        <div className="flex items-end">
          <button
            onClick={handleSearch}
            className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 rounded-md font-medium transition-colors"
          >
            Search Car
          </button>
        </div>
      </div>

      {/* Filters Section */}
      <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
        <div>
          <select
            value={filters.dailyPrice}
            onChange={(e) => handleInputChange('dailyPrice', e.target.value)}
            className="w-full px-3 py-2 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
          >
            <option value="">Daily Price</option>
            <option value="0-2000">Under $2000</option>
            <option value="2000-5000">$2000 - $5000</option>
            <option value="5000-8000">$5000 - $8000</option>
            <option value="8000+">$8000+</option>
          </select>
        </div>

        <div>
          <select
            value={filters.vehicleType}
            onChange={(e) => handleInputChange('vehicleType', e.target.value)}
            className="w-full px-3 py-2 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
          >
            <option value="">Vehicle Type</option>
            <option value="sedan">Sedan</option>
            <option value="suv">SUV</option>
            <option value="hatchback">Hatchback</option>
            <option value="coupe">Coupe</option>
          </select>
        </div>

        <div>
          <select
            value={filters.seats}
            onChange={(e) => handleInputChange('seats', e.target.value)}
            className="w-full px-3 py-2 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
          >
            <option value="">Seats</option>
            <option value="2">2 Seats</option>
            <option value="4">4 Seats</option>
            <option value="5">5 Seats</option>
            <option value="7">7 Seats</option>
          </select>
        </div>

        <div>
          <select
            value={filters.transmission}
            onChange={(e) => handleInputChange('transmission', e.target.value)}
            className="w-full px-3 py-2 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
          >
            <option value="">Transmission</option>
            <option value="automatic">Automatic</option>
            <option value="manual">Manual</option>
          </select>
        </div>

        <div>
          <select
            value={filters.fuelType}
            onChange={(e) => handleInputChange('fuelType', e.target.value)}
            className="w-full px-3 py-2 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
          >
            <option value="">Fuel Type</option>
            <option value="petrol">Petrol</option>
            <option value="diesel">Diesel</option>
            <option value="electric">Electric</option>
            <option value="hybrid">Hybrid</option>
          </select>
        </div>

        <div>
          <select
            value={filters.category}
            onChange={(e) => handleInputChange('category', e.target.value)}
            className="w-full px-3 py-2 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
          >
            <option value="">Category</option>
            <option value="economy">Economy</option>
            <option value="premium">Premium</option>
            <option value="luxury">Luxury</option>
            <option value="electric">Electric</option>
          </select>
        </div>
      </div>
    </div>
  );
}
