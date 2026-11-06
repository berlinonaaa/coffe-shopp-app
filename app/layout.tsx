import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Bricolage_Grotesque, DM_Sans } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

const bricolage = Bricolage_Grotesque({ subsets: ["latin"], variable: "--font-bricolage" });
const dm = DM_Sans({ subsets: ["latin"], variable: "--font-dm" });

// Judul & deskripsi untuk tab browser dan Google
export const metadata: Metadata = {
  title: "Coffee Shop Specialty Coffee",
  description: "Small-batch coffee roasted fresh every morning.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={`${bricolage.variable} ${dm.variable} font-body text-lg text-ink antialiased`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}