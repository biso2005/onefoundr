import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Productivity & Time Management for Solo Founders | Work With Energy",
  description: "Master energy, focus, and systems to do more with less. Protect your time and stay sustainable as a solo entrepreneur.",
  openGraph: {
    title: "Productivity & Time Management for Solo Founders | Work With Energy",
    description: "Master energy, focus, and systems to do more with less. Protect your time and stay sustainable as a solo entrepreneur.",
  },
};

export default function ProductivityLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
