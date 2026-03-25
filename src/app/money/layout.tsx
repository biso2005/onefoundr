import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Money & Pricing for Solopreneurs | Master Revenue & Profitability",
  description: "Master pricing, revenue streams, and profitability. Guides on value-based pricing, tiered offers, and sustainable solo business economics.",
  openGraph: {
    title: "Money & Pricing for Solopreneurs | Master Revenue & Profitability",
    description: "Master pricing, revenue streams, and profitability. Guides on value-based pricing, tiered offers, and sustainable solo business economics.",
  },
};

export default function MoneyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
