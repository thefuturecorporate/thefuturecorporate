import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "The Future Corporate — People. Systems. Growth.",
  description:
    "Business transformation through people development and systems automation. Corporate training, AI-powered portals, CRM, HR automation & more by Avinash Bhaskar Chate.",
  keywords:
    "corporate training, business transformation, leadership development, AI business portals, CRM, HR automation, Avinash Chate, Pune",
  openGraph: {
    title: "The Future Corporate — People. Systems. Growth.",
    description:
      "Business transformation through people development and systems automation.",
    url: "https://thefuturecorporate.com",
    siteName: "The Future Corporate",
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
      <body className={`${inter.className} antialiased`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
