'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Header from '../../components/ui/Header';
import Footer from '../../components/ui/Footer';
import VehicleDetails from '../../components/Checkout/VehicleDetails';
import BookingForm, { BookingDetails } from '../../components/Checkout/BookingForm';
import AddOns, { AddOn } from '../../components/Checkout/AddOns';
import OrderSummary from '../../components/Checkout/OrderSummary';
import { Vehicle } from '../../components/Vehicles/VehicleCard';

export default function CheckoutPage() {
  const router = useRouter();
  const [selectedVehicle, setSelectedVehicle] = useState<Vehicle | null>(null);
  const [bookingDetails, setBookingDetails] = useState<BookingDetails>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  });
  const [selectedAddOns, setSelectedAddOns] = useState<AddOn[]>([]);

  useEffect(() => {
    // Get selected vehicle from localStorage
    const vehicle = localStorage.getItem('selectedVehicle');
    if (vehicle) {
      setSelectedVehicle(JSON.parse(vehicle));
    } else {
      // Redirect to vehicles page if no vehicle selected
      router.push('/vehicles');
    }
  }, [router]);

  const handleBookingDetailsChange = (details: BookingDetails) => {
    setBookingDetails(details);
  };

  const handleAddOnsChange = (addOns: AddOn[]) => {
    setSelectedAddOns(addOns);
  };

  const handleBook = () => {
    // Here you would typically send the booking data to your backend
    const bookingData = {
      vehicle: selectedVehicle,
      customer: bookingDetails,
      addOns: selectedAddOns.filter(addOn => addOn.selected),
      total: 65580 + (selectedAddOns.filter(addOn => addOn.selected).length * 1000)
    };

    console.log('Booking data:', bookingData);
    
    // Show success message or redirect to confirmation page
    alert('Booking confirmed! We will contact you soon.');
    
    // Clear localStorage and redirect
    localStorage.removeItem('selectedVehicle');
    router.push('/');
  };

  const calculateTotal = () => {
    if (!selectedVehicle) return 0;
    const basePrice = 65580; // Fixed price from Figma design
    const addOnsPrice = selectedAddOns.filter(addOn => addOn.selected).length * 1000; // Example pricing
    return basePrice + addOnsPrice;
  };

  if (!selectedVehicle) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  const basePrice = 65580; // Fixed price to match Figma
  const addOnsPrice = selectedAddOns.filter(addOn => addOn.selected).length * 1000;

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Vehicle Details */}
          <div className="lg:col-span-1">
            <VehicleDetails vehicle={selectedVehicle} />
          </div>

          {/* Middle Column - Booking Form & Add-ons */}
          <div className="lg:col-span-1 space-y-6">
            <BookingForm onBookingChange={handleBookingDetailsChange} />
            <AddOns onAddOnsChange={handleAddOnsChange} />
          </div>

          {/* Right Column - Order Summary */}
          <div className="lg:col-span-1">
            <OrderSummary 
              basePrice={basePrice}
              addOnsPrice={addOnsPrice}
              onBook={handleBook}
            />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}