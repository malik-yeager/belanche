import type { Metadata } from "next";
import { Playfair_Display, Cormorant_Garamond, Lato } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "../context/ThemeContext";
import MainLayout from "../layout/MainLayout";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
});

export const metadata: Metadata = {
  title: "Triplogs - Curated Travel Stories",
  description: "A professional travel portfolio by Shaik Malikbaba",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${lato.variable} ${playfair.variable} ${cormorant.variable}`}>
      <body
        className={`antialiased font-sans`}
      >
        <ThemeProvider>
          <MainLayout>
            {children}
          </MainLayout>
        </ThemeProvider>
      </body>
    </html>
  );
}
