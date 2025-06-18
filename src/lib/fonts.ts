// src/lib/fonts.ts
import localFont from "next/font/local";

export const geistSans = localFont({
  src: "../app/fonts/GeistVF.woff",
  weight: "100 900",
  variable: "--font-geist-sans",
});

export const geistMono = localFont({
  src: "../app/fonts/GeistMonoVF.woff",
  weight: "100 900",
  variable: "--font-geist-mono",
});
