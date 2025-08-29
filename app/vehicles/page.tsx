'use client';

import { useRouter } from 'next/navigation';
import Header from '../../components/ui/Header';
import Footer from '../../components/ui/Footer';
import VehicleGrid from '../../components/Vehicles/VehicleGrid';
import { Vehicle } from '../../components/Vehicles/VehicleCard';

export default function VehiclesPage() {
  const router = useRouter();

  const handleVehicleBook = (vehicle: Vehicle) => {
    // Store selected vehicle in localStorage for checkout page
    localStorage.setItem('selectedVehicle', JSON.stringify(vehicle));
    router.push('/checkout');
  };

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <VehicleGrid onVehicleBook={handleVehicleBook} />
      </main>
      <Footer />
    </div>
  );
}