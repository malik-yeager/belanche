import type { Metadata } from "next";
import { Playfair_Display, Cormorant_Garamond, Lato } from "next/font/google";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import "../globals.css";
import { ThemeProvider } from "../../context/ThemeContext";
import MainLayout from "../../layout/MainLayout";

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

export default async function RootLayout({
  children,
  params
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning className={`${lato.variable} ${playfair.variable} ${cormorant.variable}`}>
      <body
        className={`antialiased font-sans`}
      >
        <NextIntlClientProvider messages={messages}>
          <ThemeProvider>
            <MainLayout>
              {children}
            </MainLayout>
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
