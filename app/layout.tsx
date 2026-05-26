import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display, JetBrains_Mono } from "next/font/google";
import "./globals.css";

import { COMPANY } from "@/lib/constants";
import { EmergencyBanner } from "@/components/layout/EmergencyBanner";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ToastProvider } from "@/components/ui/Toast";
import { QuoteProvider } from "@/components/ui/QuoteContext";
import { ChatWidget } from "@/components/ui/ChatWidget";

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const display = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["700", "800", "900"],
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://pacificcrestplumbing.ca"),
  title: {
    default: `${COMPANY.name} — ${COMPANY.tagline}`,
    template: `%s | ${COMPANY.name}`,
  },
  description:
    "Victoria BC's most trusted plumbing company. 24/7 emergency service, upfront flat-rate pricing, licensed Red Seal plumbers. Same-day service. 200+ five-star reviews.",
  keywords: [
    "Victoria BC plumber",
    "emergency plumber Victoria",
    "plumbing services Victoria",
    "water heater Victoria",
    "drain cleaning Victoria BC",
    "Oak Bay plumber",
    "Saanich plumber",
  ],
  authors: [{ name: COMPANY.name }],
  openGraph: {
    type: "website",
    locale: "en_CA",
    siteName: COMPANY.name,
    title: `${COMPANY.name} — ${COMPANY.tagline}`,
    description:
      "24/7 emergency response. Flat-rate pricing. Red Seal certified plumbers serving Greater Victoria.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: COMPANY.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${COMPANY.name} — ${COMPANY.tagline}`,
    description:
      "24/7 emergency plumbing in Victoria BC. Flat-rate pricing. 200+ five-star reviews.",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#0B1829",
  width: "device-width",
  initialScale: 1,
};

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "Plumber",
  name: COMPANY.name,
  image: "https://pacificcrestplumbing.ca/og-image.png",
  telephone: COMPANY.phoneRaw,
  email: COMPANY.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: "1247 Government Street",
    addressLocality: "Victoria",
    addressRegion: "BC",
    postalCode: "V8W 1Y4",
    addressCountry: "CA",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 48.4284,
    longitude: -123.3656,
  },
  url: "https://pacificcrestplumbing.ca",
  priceRange: "$$",
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "07:00",
      closes: "20:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Saturday", "Sunday"],
      opens: "08:00",
      closes: "18:00",
    },
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "214",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${sans.variable} ${display.variable} ${mono.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-white text-navy antialiased">
        <ToastProvider>
          <QuoteProvider>
            <EmergencyBanner />
            <Navbar />
            <main>{children}</main>
            <Footer />
            <ChatWidget />
          </QuoteProvider>
        </ToastProvider>
      </body>
    </html>
  );
}
