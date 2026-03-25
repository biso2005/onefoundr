import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Growth Strategies for Solopreneurs | Scale Without Hiring",
  description: "Scale your one-person business. Advanced marketing, customer acquisition, and 10x strategies that work when you're solo.",
  openGraph: {
    title: "Growth Strategies for Solopreneurs | Scale Without Hiring",
    description: "Scale your one-person business. Advanced marketing, customer acquisition, and 10x strategies that work when you're solo.",
  },
};

export default function GrowthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
