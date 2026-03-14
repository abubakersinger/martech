import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "TrackStack | GTM, App Tracking & Event Mapping for Technical Marketers",
  description:
    "Expert resources for Google Tag Manager, app tracking implementation, server-side tagging, and event mapping. Guides, tools, and consulting for technical marketing professionals.",
  keywords: [
    "GTM",
    "Google Tag Manager",
    "app tracking",
    "event mapping",
    "server-side tagging",
    "GA4",
    "technical marketing",
    "data layer",
    "analytics",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} antialiased`}
      >
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
