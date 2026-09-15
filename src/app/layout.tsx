import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Arshad Ali | SEO Specialist",
  description:
    "Arshad Ali is an SEO Specialist with 4 years of experience growing organic search visibility, traffic, and revenue for brands across the UK, US, UAE, and Pakistan.",
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
