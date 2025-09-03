'use client';

import { useState } from 'react';

export interface AddOn {
  id: string;
  name: string;
  icon: string;
  selected: boolean;
}

interface AddOnsProps {
  onAddOnsChange?: (addOns: AddOn[]) => void;
}

export default function AddOns({ onAddOnsChange }: AddOnsProps) {
  const [addOns, setAddOns] = useState<AddOn[]>([
    { id: 'baby-seat', name: 'Baby Seat', icon: 'baby-seat', selected: false },
    { id: 'extra-driver', name: 'Extra Driver', icon: 'extra-driver', selected: false },
    { id: 'insurance', name: 'Insurance', icon: 'insurance', selected: false }
  ]);

  const toggleAddOn = (id: string) => {
    const updatedAddOns = addOns.map(addOn =>
      addOn.id === id ? { ...addOn, selected: !addOn.selected } : addOn
    );
    setAddOns(updatedAddOns);
    onAddOnsChange?.(updatedAddOns);
  };

  const getIcon = (iconType: string) => {
    switch (iconType) {
      case 'baby-seat':
        return (
          <svg className="w-5 h-5 text-gray-800" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C13.1 2 14 2.9 14 4S13.1 6 12 6 10 5.1 10 4 10.9 2 12 2M16 8H8C6.9 8 6 8.9 6 10V22H8V18H16V22H18V10C18 8.9 17.1 8 16 8M8 10H16V16H8V10Z"/>
          </svg>
        );
      case 'extra-driver':
        return (
          <svg className="w-5 h-5 text-gray-800" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 12C14.21 12 16 10.21 16 8S14.21 4 12 4 8 5.79 8 8 9.79 12 12 12M12 14C9.33 14 4 15.34 4 18V20H20V18C20 15.34 14.67 14 12 14Z"/>
          </svg>
        );
      case 'insurance':
        return (
          <svg className="w-5 h-5 text-gray-800" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12,1L3,5V11C3,16.55 6.84,21.74 12,23C17.16,21.74 21,16.55 21,11V5L12,1M12,7C13.4,7 14.8,8.6 14.8,10V11.5C15.4,11.5 16,12.1 16,12.7V16.2C16,16.8 15.4,17.3 14.8,17.3H9.2C8.6,17.3 8,16.8 8,16.2V12.7C8,12.1 8.6,11.5 9.2,11.5V10C9.2,8.6 10.6,7 12,7M12,8.2C11.2,8.2 10.5,8.7 10.5,10V11.5H13.5V10C13.5,8.7 12.8,8.2 12,8.2Z"/>
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <div className="bg-white rounded-lg p-6 border border-gray-200/80">
      <h2 className="text-[24px] font-bold text-gray-900 mb-6">Add - ons</h2>
      <div className="flex gap-4">
        {addOns.map((addOn) => (
          <button
            key={addOn.id}
            onClick={() => toggleAddOn(addOn.id)}
            className={`flex items-center gap-3 px-4 py-3 rounded-[3px] transition-colors w-[175px] h-[54px] text-[16px] font-medium ${
              addOn.selected
                ? 'bg-[#ECEBEB] text-gray-900 border border-orange-500'
                : 'bg-[#ECEBEB] text-gray-700 border border-transparent hover:border-gray-400'
            }`}
          >
            {getIcon(addOn.icon)}
            <span className="flex-1 text-left">{addOn.name}</span>
            <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
              addOn.selected
                ? 'border-orange-500'
                : 'border-gray-400'
            }`}>
              {addOn.selected && (
                <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
              )}
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
