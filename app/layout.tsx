import type { Metadata } from "next";
import "./globals.css";
import { poppins } from "@/constans";
import {
  ClerkProvider,
  
} from '@clerk/nextjs'

export const metadata: Metadata = {
  title: "Firshop",
  description: "Firshop is an ecommerce website created using Next JS and Tailwind CSS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${poppins.className}`}>
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
