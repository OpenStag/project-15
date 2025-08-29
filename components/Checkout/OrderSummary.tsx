'use client';

interface OrderSummaryProps {
  basePrice: number;
  addOnsPrice?: number;
  onBook?: () => void;
}

export default function OrderSummary({ basePrice, addOnsPrice = 0, onBook }: OrderSummaryProps) {
  const total = basePrice + addOnsPrice;

  return (
    <div className="bg-white rounded-lg p-6">
      <h2 className="text-xl font-semibold text-gray-900 mb-6">Total</h2>
      
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
            <span className="text-2xl font-bold text-gray-900">
              LKR {total.toLocaleString()}.48
            </span>
          </div>
        </div>
      </div>

      <div className="text-xs text-gray-500 mb-6">
        *Taxes and fees are based on Rental Agreement Requirements. 
        Read our <span className="text-orange-500 cursor-pointer">Terms and Conditions</span> and the <span className="text-orange-500 cursor-pointer">Privacy Policy</span>.
      </div>

      <button
        onClick={onBook}
        className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 px-6 rounded-md font-semibold text-lg transition-colors"
      >
        BOOK
      </button>
    </div>
  );
}
