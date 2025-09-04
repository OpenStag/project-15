import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/ui/Footer";
import LoginRegister from "./loginRegister";

export const metadata: Metadata = {
  title: "TripGo - Vehicle Rental Platform",
  description:
    "Drive your way, anytime, anywhere. Rent premium vehicles with TripGo.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Geist:wght@100..900&family=Geist+Mono:wght@100..900&display=swap"
          rel="stylesheet"
        />
      </head>

      <body className="font-geist antialiased">
        <LoginRegister>{children}</LoginRegister>
        <Footer />
      </body>
    </html>
  );
}
