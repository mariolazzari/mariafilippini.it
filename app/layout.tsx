import "./globals.css";
import type { Metadata } from "next";
import { Layout } from "@/types/Layout";
import { Inter } from "next/font/google";
import { title, description } from "@/locales/texts";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ThemeProvider } from "@/components/Theme/ThemeProvider";
import { Separator } from "@/components/ui/separator";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
  },
};

function RootLayout({ children }: Layout) {
  return (
    <html lang="it">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <Separator />
          <main className="p-4 w-full h-[calc(100dvh-100px)] overflow-y-auto">
            {children}
          </main>
          <Separator />
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}

export default RootLayout;
