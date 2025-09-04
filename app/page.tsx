"use client";
import { useState } from "react";
import SignUpPopup from "../components/Popups/SignUpPopup";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false); // Show popup by default

  return (
    <div>
      <SignUpPopup isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </div>
  );
}
