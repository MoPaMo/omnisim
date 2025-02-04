import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";
import type React from "react"; // Import React

export const metadata: Metadata = {
  title: "omniSIM",
  description: "Find the best eSIM for your trip!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${GeistSans.variable} ${GeistMono.variable} antialiased scroll-smooth bg-black`}
      >
        <div className="relative">
          <div className="absolute inset-0 w-full h-full">
            <div className="noise"></div>
            <div className="overlay"></div>
          </div>
          <div className="relative z-10">{children}</div>
        </div>
      </body>
    </html>
  );
}
