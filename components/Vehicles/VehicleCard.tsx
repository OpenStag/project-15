'use client';

export interface Vehicle {
  id: string;
  name: string;
  image: string;
  category: string;
  automatic: boolean;
  price: number;
  features?: string[];
}

interface VehicleCardProps {
  vehicle: Vehicle;
  onBookNow?: (vehicle: Vehicle) => void;
}

export default function VehicleCard({ vehicle, onBookNow }: VehicleCardProps) {
  const handleBookNow = () => {
    onBookNow?.(vehicle);
  };

  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
      {/* Vehicle Name and Features at Top */}
      <div className="p-4 pb-2">
        <h3 className="text-white text-lg font-semibold mb-2">{vehicle.name}</h3>
        
        {/* Features Row */}
        <div className="flex items-center space-x-4 text-gray-300 text-sm mb-3">
          <span className="flex items-center space-x-1">
            <span>⛽</span>
            <span>Petrol</span>
          </span>
          <span className="flex items-center space-x-1">
            <span>👥</span>
            <span>Premium</span>
          </span>
          <span className="flex items-center space-x-1">
            <span>⚙️</span>
            <span>Automatic</span>
          </span>
        </div>
      </div>

      {/* Vehicle Image */}
      <div className="relative h-48 bg-gradient-to-br from-gray-700 to-gray-900 mx-4 rounded-lg">
        <img
          src={vehicle.image}
          alt={vehicle.name}
          className="w-full h-full object-cover rounded-lg"
          onError={(e) => {
            // Fallback to a placeholder
            e.currentTarget.src = 'https://via.placeholder.com/400x300/374151/ffffff?text=Vehicle+Image';
          }}
        />
      </div>

      {/* Price and Book Button */}
      <div className="p-4 flex items-center justify-between">
        <div>
          <span className="text-gray-400 text-xs">LKR</span>
          <span className="text-white text-xl font-bold ml-1">{vehicle.price.toLocaleString()}</span>
          <span className="text-gray-400 text-sm">/day</span>
        </div>
        <button
          onClick={handleBookNow}
          className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-md font-semibold text-sm transition-colors"
        >
          BOOK NOW
        </button>
      </div>
    </div>
  );
}
