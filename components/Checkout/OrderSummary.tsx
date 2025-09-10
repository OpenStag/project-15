'use client';

import { useState } from 'react';

interface OrderSummaryProps {
  basePrice: number;
  addOnsPrice?: number;
  onBook?: () => void;
  formValid?: boolean;
}

export default function OrderSummary({ basePrice, addOnsPrice = 0, onBook, formValid = true }: OrderSummaryProps) {
  const [accepted, setAccepted] = useState(false);
  const total = basePrice + addOnsPrice;

  return (
    <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
      <h2 className="text-[32px] font-semibold text-gray-900 mb-6">Total</h2>
      
      <div className="space-y-4 mb-6">
        <div className="flex justify-between text-gray-700">
          <span>Base Price (10 days)</span>
          <span>LKR {basePrice.toLocaleString()}</span>
        </div>
        
        {addOnsPrice > 0 && (
          <div className="flex justify-between text-gray-700">
            <span>Add-ons</span>
            <span>LKR {addOnsPrice.toLocaleString()}</span>
          </div>
        )}
        
        <div className="border-t pt-4">
          <div className="flex justify-between items-center">
            <span className="text-lg font-semibold text-gray-900">Total</span>
            <span className="text-[16px] font-semibold tracking-tight text-gray-900">
              LKR {total.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
            </span>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <label className="flex items-start gap-3 text-[11px] text-gray-600 leading-relaxed cursor-pointer select-none">
          <input
            type="checkbox"
            className="mt-0.5 w-4 h-4 rounded border-gray-400 text-orange-500 focus:ring-orange-500"
            checked={accepted}
            onChange={(e) => setAccepted(e.target.checked)}
          />
          <span>
            I have read and accept the Rental Information, the <span className="text-orange-500 underline-offset-2 hover:underline">Terms and Conditions</span>, and the <span className="text-orange-500 underline-offset-2 hover:underline">Privacy Policy</span>.
          </span>
        </label>
        <button
          onClick={accepted && formValid ? onBook : undefined}
          disabled={!formValid || !accepted}
          className={`w-[554px] h-[64px] rounded-[10px] font-semibold text-[36px] transition-colors ${
            formValid && accepted
              ? 'bg-[#FF5C00] hover:bg-orange-600 text-white'
              : 'bg-gray-300 text-gray-500 cursor-not-allowed'
          }`}
          aria-disabled={!formValid || !accepted}
        >
          BOOK
        </button>
      </div>
    </div>
  );
}
