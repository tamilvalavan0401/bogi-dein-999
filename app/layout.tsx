// app/layout.tsx
import type { Metadata } from "next";
import { ReactNode } from "react";

import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Bogi Dein Toy Shop",
    template: "Bogi Dein Toy Shop | Fun & Learning Toys for Kids",
  },
  description:
    "Bogi Dein Toy Shop offers fun, safe, and educational toys for kids of all ages. Discover exciting games, learning toys, and creative play products.",
  keywords: [
    "Bogi Dein Toy Shop",
    "Kids toys",
    "Educational toys",
    "Learning toys",
    "Children toy store",
    "Fun toys for kids",
    "Toy shop online",
  ],
  openGraph: {
    title: "Bogi Dein Toy Shop",
    description:
      "Explore a wide range of fun and educational toys for kids at Bogi Dein Toy Shop.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}