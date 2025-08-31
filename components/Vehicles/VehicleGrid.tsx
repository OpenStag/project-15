'use client';

import { useState } from 'react';
import SearchBar, { SearchFilters } from './SearchBar';
import VehicleCard, { Vehicle } from './VehicleCard';

// Mock data for vehicles
const mockVehicles: Vehicle[] = [
  {
    id: '1',
    name: 'BMW 7 Series',
    image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=400&h=300&fit=crop&auto=format',
    category: 'Premium',
    automatic: true,
    price: 5300,
    seats: 5,
    fuelType: 'Petrol'
  },
  {
    id: '2',
    name: 'Mercedes-Benz S-Class',
    image: 'https://images.unsplash.com/photo-1563720223185-11003d516935?w=400&h=300&fit=crop&auto=format',
    category: 'Premium', 
    automatic: true,
    price: 7500,
    seats: 5,
    fuelType: 'Petrol'
  },
  {
    id: '3',
    name: 'Lexus LS',
    image: 'https://images.unsplash.com/photo-1550355291-bbee04a92027?w=400&h=300&fit=crop&auto=format',
    category: 'Premium',
    automatic: true,
    price: 6500,
    seats: 5,
    fuelType: 'Automatic'
  },
  {
    id: '4',
    name: 'Mazda CX-5', 
    image: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=400&h=300&fit=crop&auto=format',
    category: 'Premium',
    automatic: true,
    price: 2300,
    seats: 5,
    fuelType: 'Petrol'
  },
  {
    id: '5',
    name: 'Audi e-tron GT',
    image: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=400&h=300&fit=crop&auto=format',
    category: 'Electric',
    automatic: true,
    price: 8500,
    seats: 5,
    fuelType: 'Electric'
  },
  {
    id: '6',
    name: 'Kia Telluride',
    image: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=400&h=300&fit=crop&auto=format',
    category: 'Premium',
    automatic: true,
    price: 9300,
    seats: 9,
    fuelType: 'Petrol'
  }
];

interface VehicleGridProps {
  onVehicleBook?: (vehicle: Vehicle) => void;
}

export default function VehicleGrid({ onVehicleBook }: VehicleGridProps) {
  const [filteredVehicles, setFilteredVehicles] = useState<Vehicle[]>(mockVehicles);
  const [showMore, setShowMore] = useState(false);

  const handleSearch = (filters: SearchFilters) => {
    let filtered = mockVehicles;

    // Apply price filter
    if (filters.dailyPrice) {
      const [min, max] = filters.dailyPrice.split('-').map(p => parseInt(p.replace('+', '')) || Infinity);
      filtered = filtered.filter(vehicle => {
        if (max === Infinity) return vehicle.price >= min;
        return vehicle.price >= min && vehicle.price <= max;
      });
    }

    // Apply category filter
    if (filters.category) {
      filtered = filtered.filter(vehicle => 
        vehicle.category.toLowerCase() === filters.category.toLowerCase()
      );
    }

    setFilteredVehicles(filtered);
  };

  const handleBookNow = (vehicle: Vehicle) => {
    onVehicleBook?.(vehicle);
  };

  const displayedVehicles = showMore ? filteredVehicles : filteredVehicles.slice(0, 6);

  return (
    <div className="min-h-screen bg-white">
      {/* Search Section */}
      <div className="container mx-auto px-4 py-8">
        <SearchBar onSearch={handleSearch} />
      </div>

      {/* Vehicles Grid */}
      <div className="container mx-auto px-4 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {displayedVehicles.map((vehicle) => (
            <VehicleCard
              key={vehicle.id}
              vehicle={vehicle}
              onBookNow={handleBookNow}
            />
          ))}
        </div>

        {/* See More Button */}
        {filteredVehicles.length > 6 && !showMore && (
      <div className="text-center mt-10">
            <button
              onClick={() => setShowMore(true)}
        className="text-[#FF7A00] hover:text-[#ff881a] text-sm font-medium flex items-center justify-center mx-auto space-x-1"
            >
        <span>See More</span>
        <span className="text-base leading-none">⌄</span>
            </button>
          </div>
        )}

        {/* No results message */}
        {filteredVehicles.length === 0 && (
          <div className="text-center py-16">
            <div className="text-gray-600 text-lg">
              No vehicles found matching your criteria.
            </div>
            <button
              onClick={() => setFilteredVehicles(mockVehicles)}
              className="mt-4 text-orange-500 hover:text-orange-400 font-medium"
            >
              Clear filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
