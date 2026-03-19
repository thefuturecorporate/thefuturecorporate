import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

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
    images: [
      {
        url: "https://supabase-proxy.avinashchate-abc.workers.dev/storage/v1/object/public/profile-assets/headshots/1772463022779-5f1g1i4yo.jpg",
        width: 800,
        height: 800,
        alt: "Avinash Chate — The Future Corporate",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Future Corporate — People. Systems. Growth.",
    description:
      "Business transformation through people development and systems automation.",
    images: [
      "https://supabase-proxy.avinashchate-abc.workers.dev/storage/v1/object/public/profile-assets/headshots/1772463022779-5f1g1i4yo.jpg",
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Organization",
                  name: "The Future Corporate",
                  url: "https://thefuturecorporate.com",
                  logo: "https://thefuturecorporate.com/the-future-logo.png",
                  description:
                    "Business transformation through people development and AI-powered systems automation for Indian businesses.",
                  founder: {
                    "@type": "Person",
                    name: "Avinash Bhaskar Chate",
                    jobTitle: "Founder & Business Transformation Consultant",
                    url: "https://avinashchate.com",
                  },
                  contactPoint: {
                    "@type": "ContactPoint",
                    telephone: "+91-8793630001",
                    contactType: "customer service",
                    availableLanguage: ["English", "Hindi", "Marathi"],
                  },
                  sameAs: ["https://instagram.com/avinashchate"],
                },
                {
                  "@type": "LocalBusiness",
                  name: "The Future Corporate",
                  address: [
                    {
                      "@type": "PostalAddress",
                      streetAddress:
                        "Bloom Hotel, ABC Trainings, 1st Floor, S.No. 156/3, Shree Tower, Pune-Solapur Road, Magarpatta, Hadapsar",
                      addressLocality: "Pune",
                      addressRegion: "Maharashtra",
                      postalCode: "411028",
                      addressCountry: "IN",
                    },
                    {
                      "@type": "PostalAddress",
                      streetAddress:
                        "103, Arihant Palacio, Behind Raymond Shopee, Kranti Chowk, Snehnagar, Konkanwadi",
                      addressLocality: "Chhatrapati Sambhajinagar",
                      addressRegion: "Maharashtra",
                      postalCode: "431005",
                      addressCountry: "IN",
                    },
                  ],
                  telephone: "+91-8793630001",
                  url: "https://thefuturecorporate.com",
                },
                {
                  "@type": "WebSite",
                  name: "The Future Corporate",
                  url: "https://thefuturecorporate.com",
                },
              ],
            }),
          }}
        />
      </head>
      <body className="font-sans antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
