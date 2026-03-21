import CategoryHub from "@/components/CategoryHub";
import { getPostsByCategory } from "@/lib/mdx";

export const metadata = {
  title: "Build Your Offer — OneFoundr | Package & Price Your Offer",
  description: "Learn to package, price, and position offers that people actually want to buy."
};

export default async function OfferPage() {
  const posts = getPostsByCategory("offer");
  return (
    <CategoryHub
      eyebrow="CATEGORY"
      emoji="📦"
      title="Build Your Offer"
      description="Turn your skills and expertise into sellable products and services. Learn to package, price, and position offers that people actually want to buy."
      color="text-green-500"
      pillarGuide={{
        title: "How to Create an Offer That Sells (For Solopreneurs)",
        description: "The complete guide to turning your skills into a sellable, scalable offer.",
        readTime: "12 min read",
        href: "/offer/complete-guide"
      }}
      subcategories={[
        {
          name: "Productized Services",
          description: "Turn services into scalable products",
          href: "/offer",
          articleCount: 8
        },
        {
          name: "Digital Products",
          description: "Create and sell digital products",
          href: "/offer",
          articleCount: 7
        },
        {
          name: "Coaching & Consulting",
          description: "Build a consulting or coaching offer",
          href: "/offer",
          articleCount: 6
        },
        {
          name: "Pricing Strategy",
          description: "Price your offers for maximum profit",
          href: "/offer",
          articleCount: 10
        },
        {
          name: "Memberships",
          description: "Build recurring membership revenue",
          href: "/offer",
          articleCount: 5
        },
        {
          name: "Offer Stacking",
          description: "Create multiple revenue streams",
          href: "/offer",
          articleCount: 6
        }
      ]}
      featuredArticles={[
        {
          title: "Hyper-Niche Positioning: The Unfair Advantage for Solopreneurs",
          category: "POSITIONING",
          readTime: "11 min",
          href: "/offer/hyper-niche-positioning"
        },
        {
          title: "Pricing Strategy for Solopreneurs: Complete Playbook",
          category: "PRICING",
          readTime: "12 min",
          href: "/offer"
        },
        {
          title: "Digital Products: From Idea to Income in 30 Days",
          category: "DIGITAL",
          readTime: "10 min",
          href: "/offer"
        },
        {
          title: "Offer Stacking: Multiple Revenue Streams",
          category: "STACKING",
          readTime: "9 min",
          href: "/offer"
        },
        {
          title: "How to Raise Prices Without Losing Clients",
          category: "PRICING",
          readTime: "8 min",
          href: "/offer"
        }
      ]}
      relatedCategories={[
        { name: "Start", emoji: "💡", href: "/start" },
        { name: "Sales", emoji: "🤝", href: "/sales" },
        { name: "Marketing", emoji: "📣", href: "/marketing" }
      ]}
      dynamicArticles={posts}
    />
  );
}
