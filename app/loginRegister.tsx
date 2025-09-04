"use client";

import { useState } from "react";
import Header from "@/components/ui/Header";
import SignUpPopup from "@/components/Popups/SignUpPopup";
import Footer from "@/components/ui/Footer";

export default function LoginRegister({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isSignUpOpen, setIsSignUpOpen] = useState(false);

  return (
    <>
      <Header onLoginRegisterClick={() => setIsSignUpOpen(true)} />
      <SignUpPopup
        isOpen={isSignUpOpen}
        onClose={() => setIsSignUpOpen(false)}
      />
      {children}
      <Footer />
    </>
  );
}
