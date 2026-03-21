import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "OneFoundr",
  description:
    "Practical guides, tools, and systems for solopreneurs who want to build profitable businesses without a team.",
  openGraph: {
    title: "OneFoundr",
    description:
      "Practical guides, tools, and systems for solopreneurs who want to build profitable businesses without a team.",
    url: "https://onefoundr.com"
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <body className="bg-background text-text">{children}</body>
    </html>
  );
}
