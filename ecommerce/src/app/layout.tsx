// import { Head } from "next/document";
import "./globals.css";
import type { Metadata } from "next";
import { Layout } from "./layout";
export { Layout } from "./components/";



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
          <Layout>{children}</Layout>
        </div>
      </body>
    </html>
  );
}
