'use client';

export interface Vehicle {
  id: string;
  name: string;
  image: string;
  category: string;
  automatic: boolean;
  price: number;
  seats?: number;
  fuelType?: string;
  features?: string[];
}

interface VehicleCardProps {
  vehicle: Vehicle;
  onBookNow?: (vehicle: Vehicle) => void;
}

import Image from 'next/image';

export default function VehicleCard({ vehicle, onBookNow }: VehicleCardProps) {
  const handleBookNow = () => onBookNow?.(vehicle);

  return (
    <div
      className="group relative rounded-xl overflow-hidden shadow-[0_4px_10px_rgba(0,0,0,0.25)] border border-black/20 bg-black/5 w-full h-[350px] focus-within:ring-2 focus-within:ring-blue-500 focus-within:ring-offset-2 focus-within:ring-offset-white transition-transform duration-200 hover:-translate-y-0.5"
      tabIndex={0}
    >
      {/* Vehicle image fills card */}
      <div className="absolute inset-0">
        <Image
          src={vehicle.image}
          alt={vehicle.name}
          fill
          sizes="(max-width:768px) 100vw, 33vw"
          className="object-cover object-center transition-transform duration-700 group-hover:scale-[1.03]"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = 'https://via.placeholder.com/600x400/111111/ffffff?text=Vehicle';
          }}
        />
        {/* Top subtle light sheen */}
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(140deg,rgba(255,255,255,0.35)_0%,rgba(255,255,255,0)_35%)]" />
        {/* Bottom dark gradient for readability */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />
      </div>

      {/* Content overlay */}
      <div className="relative z-10 flex flex-col h-full px-4 pt-4 pb-4">
        <h3 className="text-white text-[17px] font-semibold tracking-wide drop-shadow-sm">
          {vehicle.name}
        </h3>
        <div className="mt-2 flex flex-wrap gap-2">
          <span className="inline-flex items-center gap-1 bg-white/20 backdrop-blur-sm text-white text-[11px] font-medium px-2 py-1 rounded-full">
            <span className="opacity-80">👥</span>{vehicle.seats || 5}
          </span>
          <span className="inline-flex items-center gap-1 bg-white/20 backdrop-blur-sm text-white text-[11px] font-medium px-2 py-1 rounded-full">
            <span className="opacity-80">⛽</span>{vehicle.fuelType || 'Petrol'}
          </span>
          <span className="inline-flex items-center gap-1 bg-white/20 backdrop-blur-sm text-white text-[11px] font-medium px-2 py-1 rounded-full">
            <span className="opacity-80">⚙️</span>{vehicle.automatic ? 'Automatic' : 'Manual'}
          </span>
        </div>

        {/* Spacer pushes price bar to bottom */}
        <div className="flex-1" />

        <div className="flex items-center justify-between">
          <div className="flex items-baseline gap-1 text-white">
            <span className="text-[11px] tracking-wide">LKR.</span>
            <span className="text-[23px] font-semibold leading-none">{vehicle.price.toLocaleString()}</span>
            <span className="text-[11px] font-medium tracking-wide ml-1">| Day</span>
          </div>
          <button
            onClick={handleBookNow}
            className="bg-[#FF7A00] hover:bg-[#ff881a] text-white text-[11px] font-semibold px-4 py-2 rounded-md shadow-[0_2px_4px_rgba(0,0,0,0.4)] transition-colors focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-[#FF7A00]"
          >
            BOOK NOW
          </button>
        </div>
      </div>
    </div>
  );
}
