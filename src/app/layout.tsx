import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "OneFoundr",
  description:
    "Practical guides, tools, and systems for solopreneurs who want to build profitable businesses without a team.",
  metadataBase: new URL("https://onefoundr.com"),
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
      <body className="bg-background text-text">
        <Header />
        <main className="min-h-screen">{children}</main>
        {/* Footer component */}
        <Footer />
      </body>
    </html>
  );
}
