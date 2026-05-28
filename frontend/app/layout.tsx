import "./globals.css";
import type { Metadata } from "next";
import { Layout } from "@/types/Layout";
import { Inter } from "next/font/google";
import { title, description } from "@/lib/texts";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ThemeProvider } from "@/components/Theme/ThemeProvider";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Cookies } from "@/components/Cookies";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://mariafilippini.it"),
  title: {
    template: "%s | Maria Filippini Lazzari",
    default: title,
  },
  alternates: {
    canonical: "/",
  },
  description,
  openGraph: {
    title,
    description,
    images: "/images/logo.jpg",
    url: "https://mariafilippini.it",
    siteName: "Maria Filippini Lazzari",
  },
  keywords: ["Commedia", "Teatro", "Brescia", "Dialetto"],
  authors: [
    { name: "Maria Filippini Lazzari" },
    { name: "Mario Lazzari", url: "https://mariolazzari.itg" },
  ],
  creator: "Mario Lazzari",
};

function RootLayout({ children }: Layout) {
  return (
    <html lang="it" suppressHydrationWarning>
      <head>
        <GoogleAnalytics gaId="G-K8TH2BH1F9" />
      </head>

      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <Header />
          <main className="p-4 w-full h-[calc(100dvh-100px)] overflow-y-auto">
            {children}
          </main>
          <Footer />
          <Cookies />
        </ThemeProvider>
      </body>
    </html>
  );
}

export default RootLayout;
