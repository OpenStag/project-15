'use client';

import { useState, useEffect, useMemo } from 'react';
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

  const isFormValid = useMemo(() => {
    const { firstName, lastName, email, phone } = bookingDetails;
    if (!firstName.trim() || !lastName.trim() || !email.trim() || !phone.trim()) return false;
    const emailOk = /.+@.+\..+/.test(email);
    const phoneOk = phone.replace(/[^0-9+]/g, '').length >= 7;
    return emailOk && phoneOk;
  }, [bookingDetails]);

  useEffect(() => {
    const vehicle = localStorage.getItem('selectedVehicle');
    if (vehicle) {
      setSelectedVehicle(JSON.parse(vehicle));
    } else {
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
    const bookingData = {
      vehicle: selectedVehicle,
      customer: bookingDetails,
      addOns: selectedAddOns.filter(addOn => addOn.selected),
      total: 65580 + (selectedAddOns.filter(addOn => addOn.selected).length * 1000)
    };

    console.log('Booking data:', bookingData);
    alert('Booking confirmed! We will contact you soon.');
    localStorage.removeItem('selectedVehicle');
    router.push('/');
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

  const basePrice = 65580;
  const addOnsPrice = selectedAddOns.filter(addOn => addOn.selected).length * 1000;

  return (
    <div className="min-h-screen bg-[#F4F6F8] flex flex-col">
      <Header />
      <main className="w-full max-w-[1920px] mx-auto px-4 xl:px-0 py-8 lg:py-10 flex-1">
        <div className="grid gap-8 lg:gap-16 grid-cols-1 lg:grid-cols-2 items-start">
          <div className="flex justify-end">
            <div className="w-[475px]">
              <VehicleDetails vehicle={selectedVehicle} />
            </div>
          </div>

          <div className="w-[592px] flex flex-col gap-8">
            <BookingForm onBookingChange={handleBookingDetailsChange} />
            <AddOns onAddOnsChange={handleAddOnsChange} />
            <OrderSummary
              basePrice={basePrice}
              addOnsPrice={addOnsPrice}
              onBook={handleBook}
              formValid={isFormValid}
            />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}