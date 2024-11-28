import "./globals.css";
import type { Metadata } from "next";
import { Layout } from "@/types/Layout";
import { Inter } from "next/font/google";
import { title, description } from "@/lib/texts";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ThemeProvider } from "@/components/Theme/ThemeProvider";
import { GoogleTagManager, GoogleAnalytics } from "@next/third-parties/google";

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
    <html lang="it">
      <head>
        <link
          rel="icon"
          type="image/png"
          href="/favicon-96x96.png"
          sizes="96x96"
        />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link rel="manifest" href="/site.webmanifest" />

        <meta property="og:image" content="<generated>" />
        <meta property="og:image:type" content="<generated>" />
        <meta property="og:image:width" content="<generated>" />
        <meta property="og:image:height" content="<generated>" />

        <meta name="twitter:image" content="<generated>" />
        <meta name="twitter:image:type" content="<generated>" />
        <meta name="twitter:image:width" content="<generated>" />
        <meta name="twitter:image:height" content="<generated>" />

        <GoogleTagManager gtmId="G-LJE466BM11" />
        <GoogleAnalytics gaId="G-K8TH2BH1F9" />
      </head>

      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <Header />

          <main className="p-4 w-full h-[calc(100dvh-100px)] overflow-y-auto">
            {children}
          </main>

          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}

export default RootLayout;
