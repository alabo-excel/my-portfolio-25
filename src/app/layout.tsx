import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SiteHeader from "components/SiteHeader";
import SiteFooter from "components/SiteFooter";
import Connect from "components/Connect";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Alabo Excel — Software Engineer",
    template: "%s — Alabo Excel",
  },
  description:
    "Software engineer building products for web and mobile with React, Next.js, and Node.js. Community builder and blockchain enthusiast.",
  openGraph: {
    title: "Alabo Excel — Software Engineer",
    description:
      "Software engineer building products for web and mobile with React, Next.js, and Node.js.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} flex min-h-screen flex-col antialiased`}
      >
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <Connect />
        <SiteFooter />
      </body>
    </html>
  );
}
