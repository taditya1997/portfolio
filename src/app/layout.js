import React from 'react';
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import "./globals.css";

export const metadata = {
  title: 'Aditya Thakur - Software Engineer',
  description: 'Personal website and blog of Aditya Thakur, a software engineer from Bangalore.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen text-neutral-white bg-primaryBackground">
        <div className="flex flex-col flex-grow max-w-[79.25rem] mx-auto px-4 md:px-8 w-full">
          <Navbar />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
