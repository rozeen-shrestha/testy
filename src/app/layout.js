import { Inter } from "next/font/google";
import "./globals.css";
import {NextUIProvider} from "@nextui-org/react";
import * as React from "react";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Kantipur",
  description: "Roz ko Plant",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <NextUIProvider>
        {children}
        </NextUIProvider>
        </body>
    </html>
  );
}
