// import { Head } from "next/document";
import "./globals.css";
import type { Metadata } from "next";
import { Layout } from "./components/index";
// export { Layout } from "./components/";

import { StateContext } from "./context/StateContext";

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
          <StateContext>
            <Layout>
                {children}
            </Layout>
          </StateContext>
        </div>
      </body>
    </html>
  );
}
