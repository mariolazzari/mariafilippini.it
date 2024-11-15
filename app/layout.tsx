import "./globals.css";
import type { Metadata } from "next";
import { Layout } from "@/types/Layout";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Maria Filippini Lazzari",
  description:
    "Maria Filippini Lazzari sito ufficiale scrittrice dialettale bresciana",
  openGraph: {
    title: "Maria Filippini Lazzari",
    description:
      "Maria Filippini Lazzari sito ufficiale scrittrice dialettale bresciana",
  },
};

function RootLayout({ children }: Layout) {
  return (
    <html className={inter.className} lang="it">
      <body>{children}</body>
    </html>
  );
}

export default RootLayout;
