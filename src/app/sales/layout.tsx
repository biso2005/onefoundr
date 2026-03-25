import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sales Guides for Solopreneurs | Close Deals Without Being Pushy",
  description: "Learn how to sell with integrity. Guides on sales conversations, consultative selling, and closing deals without feeling salesy.",
  openGraph: {
    title: "Sales Guides for Solopreneurs | Close Deals Without Being Pushy",
    description: "Learn how to sell with integrity. Guides on sales conversations, consultative selling, and closing deals without feeling salesy.",
  },
};

export default function SalesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
