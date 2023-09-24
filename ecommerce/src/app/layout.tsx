// import { Head } from "next/document";
import Navbar from "./components/Navbar";
import "./globals.css";
import type { Metadata } from "next";
import Footer from '../../src/app/components/Footer'

export const metadata: Metadata = {
  title: "DelightShop",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true} className="layout">
        <div className="">
          <Navbar /> {children} <Footer/> {" "} 
        </div>
      </body>
    </html>
  );
}
