import type { Metadata } from "next";
import "./globals.css";
import { profile } from "@/data/content";

const siteUrl = "https://arshad-ali-seo-specialist.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  applicationName: "Arshad Ali SEO Specialist",
  title: {
    default: "Arshad Ali | SEO Specialist & Growth Strategist",
    template: "%s | Arshad Ali",
  },
  description:
    "Arshad Ali is an SEO Specialist helping brands grow organic traffic, improve rankings, and increase revenue through technical SEO, on-page strategy, content optimization, and data-driven growth planning.",
  keywords: [
    "Arshad Ali SEO Specialist",
    "SEO Specialist Pakistan",
    "SEO Expert",
    "Technical SEO Consultant",
    "On-Page SEO",
    "Off-Page SEO",
    "Local SEO",
    "E-commerce SEO",
    "Search Engine Optimization",
    "SEO strategy",
    "AEO SEO",
    "SEO content optimization",
    "GSC GA4 SEO",
    "Ahrefs Semrush SEO",
  ],
  authors: [{ name: "Arshad Ali" }],
  creator: "Arshad Ali",
  publisher: "Arshad Ali",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    title: "Arshad Ali | SEO Specialist & Growth Strategist",
    description:
      "Helping brands improve organic visibility, search rankings, and qualified traffic through proven SEO strategy, technical optimization, and conversion-focused growth planning.",
    siteName: "Arshad Ali SEO Specialist",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Arshad Ali - SEO Specialist portfolio preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Arshad Ali | SEO Specialist & Growth Strategist",
    description:
      "SEO specialist helping brands grow organic traffic, improve rankings, and increase revenue through technical SEO and content strategy.",
    creator: "@arshadaliseo",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  manifest: "/site.webmanifest",
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/favicon-32x32.png", rel: "icon", sizes: "32x32" },
      { url: "/favicon-16x16.png", rel: "icon", sizes: "16x16" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-bg text-ink font-body antialiased">{children}</body>
    </html>
  );
}
