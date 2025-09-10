"use client";

import { useState } from "react";

type FaqItem = {
  id: number;
  question: string;
  answer: string;
};

const faqData: FaqItem[] = [
  {
    id: 1,
    question: "How do I book a vehicle?",
    answer:
      "You can easily book a vehicle through our website by entering your desired pick-up and drop-off locations and dates on the homepage. You can also book via our mobile app or by calling our customer service team.",
  },
  {
    id: 2,
    question: "Can I modify or cancel my reservation?",
    answer:
      "Yes, you can modify or cancel your reservation through your account dashboard or by contacting our support team. Cancellation policies may apply.",
  },
  {
    id: 3,
    question: "Do I need to pay a deposit to reserve a vehicle?",
    answer:
      "Some reservations may require a deposit depending on the vehicle type and rental duration. Details will be shown during the booking process.",
  },
  {
    id: 4,
    question: "How will I know my reservation is confirmed?",
    answer:
      "Once your booking is complete, you will receive a confirmation email with all the details of your reservation.",
  },
  {
    id: 5,
    question: "Can I pay with a debit card or another method?",
    answer:
      "Yes, we accept major debit cards, credit cards, and other payment methods depending on your region.",
  },
];

export default function FAQAccordion() {
  const [openId, setOpenId] = useState<number | null>(1); // first one open by default

  const toggleAccordion = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return ( 
    <div className="bg-white mmin-h-screen pt-10 pb-20">
      <div className="max-w-7xl mx-auto px-4 py-6">
        {/* Category Buttons */}
        <div className="flex flex-wrap gap-3 justify-center mb-8">
          {[
            "Booking & Reservation",
            "Rental Requirements",
            "Vehicle & Fleet",
            "Payment & Fees",
            "Pickup & Return",
            "Insurance & Damage",
          ].map((cat, i) => (
            <button
              key={i}
              className="bg-orange-600 text-white text-sm font-semibold rounded px-3 py-1 whitespace-nowrap"
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Accordions */}
        <div className="max-w-4xl mx-auto text-black">
          {faqData.map((item) => (
            <div
              key={item.id}
              className="border-b border-gray-200 py-3 cursor-pointer"
              onClick={() => toggleAccordion(item.id)}
            >
              <div className="flex items-start justify-between">
                <p className="text-sm font-bold">
                  {String(item.id).padStart(2, "0")}.&nbsp;&nbsp;{item.question}
                </p>
                <div className="text-black text-lg font-bold select-none">
                  {openId === item.id ? "−" : "+"}
                </div>
              </div>

              {openId === item.id && (
                <p className="text-xs leading-tight mt-2">{item.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
