'use client';

import { useState } from 'react';

export interface BookingDetails {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
}

interface BookingFormProps {
  onBookingChange?: (details: BookingDetails) => void;
}

export default function BookingForm({ onBookingChange }: BookingFormProps) {
  const [details, setDetails] = useState<BookingDetails>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleInputChange = (field: keyof BookingDetails, value: string) => {
    const newDetails = { ...details, [field]: value };
    setDetails(newDetails);
    onBookingChange?.(newDetails);
  };

  return (
    <div className="bg-white rounded-lg p-6 border border-gray-200/80">
      <h2 className="text-[24px] font-bold text-gray-900 mb-6">Booking Details</h2>
      <div className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-gray-700 text-[16px] font-medium mb-2">
              First Name
            </label>
            <input
              type="text"
              placeholder="First Name"
              value={details.firstName}
              onChange={(e) => handleInputChange('firstName', e.target.value)}
              className="w-[277px] h-[40px] px-3 py-2 bg-[#ECEBEB] border border-transparent rounded-[5px] focus:outline-none focus:ring-2 focus:ring-orange-500 placeholder:text-gray-500 text-[13px]"
            />
          </div>
          
          <div>
            <label className="block text-gray-700 text-[16px] font-medium mb-2">
              Last Name
            </label>
            <input
              type="text"
              placeholder="Last Name"
              value={details.lastName}
              onChange={(e) => handleInputChange('lastName', e.target.value)}
              className="w-[277px] h-[40px] px-3 py-2 bg-[#ECEBEB] border border-transparent rounded-[5px] focus:outline-none focus:ring-2 focus:ring-orange-500 placeholder:text-gray-500 text-[13px]"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-gray-700 text-[16px] font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              placeholder="Email"
              value={details.email}
              onChange={(e) => handleInputChange('email', e.target.value)}
              className="w-[277px] h-[40px] px-3 py-2 bg-[#ECEBEB] border border-transparent rounded-[5px] focus:outline-none focus:ring-2 focus:ring-orange-500 placeholder:text-gray-500 text-[13px]"
            />
          </div>
          
          <div>
            <label className="block text-gray-700 text-[16px] font-medium mb-2">
              Phone Number
            </label>
            <input
              type="tel"
              placeholder="Number"
              value={details.phone}
              onChange={(e) => handleInputChange('phone', e.target.value)}
              className="w-[277px] h-[40px] px-3 py-2 bg-[#ECEBEB] border border-transparent rounded-[5px] focus:outline-none focus:ring-2 focus:ring-orange-500 placeholder:text-gray-500 text-[13px]"
            />
          </div>
        </div>

        <div>
          <label className="block text-gray-700 text-[16px] font-medium mb-2">
            Special Message
          </label>
          <textarea
            placeholder="Message..."
            rows={4}
            value={details.message}
            onChange={(e) => handleInputChange('message', e.target.value)}
            className="w-[554px] h-[82px] px-3 py-2 bg-[#ECEBEB] border border-transparent rounded-[5px] focus:outline-none focus:ring-2 focus:ring-orange-500 placeholder:text-gray-500 text-[13px] resize-none"
          />
        </div>
      </div>
    </div>
  );
}
