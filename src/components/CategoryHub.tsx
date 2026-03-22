import Link from "next/link";
import { Post } from "@/lib/mdx";
import EmailSignupForm from "./EmailSignupForm";
import { CategoryIcon, categoryConfig } from "@/components/CategoryIcon";

interface CategoryHubProps {
  eyebrow: string;
  title: string;
  description: string;
  emoji: string;
  color: string;
  pillarGuide: {
    title: string;
    description: string;
    readTime: string;
    href: string;
  };
  subcategories: Array<{
    name: string;
    description: string;
    href: string;
    articleCount: number;
  }>;
  featuredArticles: Array<{
    title: string;
    category: string;
    readTime: string;
    href: string;
  }>;
  relatedCategories: Array<{
    name: string;
    emoji: string;
    href: string;
  }>;
  dynamicArticles?: Post[];
}

export default function CategoryHub({
  eyebrow,
  title,
  description,
  emoji,
  color,
  pillarGuide,
  subcategories,
  featuredArticles,
  relatedCategories,
  dynamicArticles
}: CategoryHubProps) {
  // Get the category key from title (e.g., "Marketing" -> "marketing")
  const categoryKey = title.toLowerCase() || "start";

  // Smart article display: merge dynamic + featured to always show content
  const getArticlesToDisplay = () => {
    if (!dynamicArticles || dynamicArticles.length === 0) {
      // No dynamic articles, use fallback featured articles
      return featuredArticles;
    }

    // Map dynamic articles to the same format as featured articles
    const mappedDynamic = dynamicArticles
      .filter(post => post && post.frontmatter)
      .map(post => ({
        title: post.frontmatter?.title || "Untitled",
        category: (post.frontmatter?.categoryLabel || post.category || "GENERAL").toUpperCase(),
        readTime: post.frontmatter?.readTime || "5 min read",
        href: `/${post.category}/${post.slug}`
      }));

    // If we have 1-2 posts, fill remaining slots with featured articles (3-5 total)
    if (mappedDynamic.length <= 2) {
      // Deduplicate by title (case-insensitive)
      const titles = new Set(mappedDynamic.map(a => a.title.toLowerCase()));
      const fillArticles = featuredArticles.filter(
        a => !titles.has(a.title.toLowerCase())
      );
      // Return up to 5 total items
      return [...mappedDynamic, ...fillArticles].slice(0, 5);
    }

    // If we have 3+ posts, return them as-is
    return mappedDynamic;
  };

  const articlesToDisplay = getArticlesToDisplay();
  return (
    <>
      {/* SECTION 1: CATEGORY HERO */}
      <section style={{ backgroundColor: "white", width: "100%", paddingTop: "80px", paddingBottom: "24px" }} className="md:py-20 py-12 px-6">
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ display: "flex", flexDirection: "row", gap: "48px", alignItems: "flex-start" }} className="md:flex-row flex-col">
            {/* LEFT SIDE */}
            <div style={{ flex: "0 0 60%" }}>
              <p style={{ fontSize: "12px", textTransform: "uppercase", letterSpacing: "0.1em", color: "#059669", fontWeight: "600", marginBottom: "12px" }}>
                {eyebrow}
              </p>

              <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "20px" }}>
                <CategoryIcon category={categoryKey} size="lg" />
                <h1 style={{ fontSize: "clamp(28px, 6vw, 48px)", fontWeight: "700", color: "#2D3436", lineHeight: "1.2", margin: 0 }}>
                  {title}
                </h1>
              </div>

              <p style={{ fontSize: "18px", color: "#636E72", lineHeight: "1.6", marginBottom: "32px", maxWidth: "500px" }}>
                {description}
              </p>

              <Link href={pillarGuide.href}>
                <button
                  style={{
                    padding: "14px 28px",
                    backgroundColor: "#00B894",
                    color: "white",
                    border: "none",
                    borderRadius: "8px",
                    fontSize: "16px",
                    fontWeight: "600",
                    cursor: "pointer",
                    transition: "background-color 0.2s"
                  }}
                  className="hover:opacity-90"
                >
                  Read the Complete Guide →
                </button>
              </Link>
            </div>

            {/* RIGHT SIDE - PILLAR GUIDE CARD */}
            <div style={{ flex: "0 0 40%" }}>
              <Link href={pillarGuide.href}>
                <div
                  style={{
                    background: `linear-gradient(135deg, ${categoryConfig[categoryKey]?.gradient?.replace('from-', '')?.replace('to-', '')?.replace(/ /g, ', ') || 'rgba(0, 184, 148, 0.1), rgba(5, 150, 105, 0.1)'})`,
                    borderRadius: "16px",
                    padding: "28px",
                    border: "1px solid #E2E8F0",
                    cursor: "pointer",
                    transition: "all 0.2s"
                  }}
                  className="hover:shadow-md hover:border-accent"
                >
                  <p style={{ fontSize: "12px", textTransform: "uppercase", letterSpacing: "0.1em", color: "#059669", fontWeight: "600", marginBottom: "16px", margin: 0 }}>
                    📖 Complete Guide
                  </p>

                  <h3 style={{ fontSize: "18px", fontWeight: "700", color: "#2D3436", marginBottom: "8px", lineHeight: "1.3" }}>
                    {pillarGuide.title}
                  </h3>

                  <p style={{ fontSize: "14px", color: "#636E72", lineHeight: "1.6", marginBottom: "16px" }}>
                    {pillarGuide.description}
                  </p>

                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <p style={{ fontSize: "12px", color: "#636E72", margin: 0 }}>
                      {pillarGuide.readTime}
                    </p>
                    <p style={{ fontSize: "14px", color: "#059669", fontWeight: "500", margin: 0 }}>
                      Start Reading →
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: SUBCATEGORIES GRID */}
      <section style={{ backgroundColor: "#F7F7F7", width: "100%", paddingTop: "64px", paddingBottom: "64px" }} className="px-6">
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "clamp(24px, 5vw, 42px)", fontWeight: "700", color: "#2D3436", marginBottom: "32px", textAlign: "center" }}>
            Topics in {title}
          </h2>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "20px" }} className="grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
            {subcategories.map((subcategory) => (
              <Link
                key={subcategory.name}
                href={subcategory.href}
                style={{ textDecoration: "none" }}
              >
                <div
                  style={{
                    backgroundColor: "white",
                    borderRadius: "12px",
                    padding: "24px",
                    border: "1px solid #E2E8F0",
                    cursor: "pointer",
                    transition: "all 0.2s",
                    height: "100%"
                  }}
                  className="hover:border-green-400 hover:shadow-md"
                >
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "16px" }}>
                    <div>
                      <p style={{ fontSize: "16px", fontWeight: "600", color: "#2D3436", margin: 0 }}>
                        {subcategory.name}
                      </p>
                      <p style={{ fontSize: "14px", color: "#636E72", marginTop: "4px", margin: 0 }}>
                        {subcategory.description}
                      </p>
                    </div>
                    <span
                      style={{
                        fontSize: "12px",
                        color: subcategory.articleCount === 0 ? "#9CA3AF" : "#059669",
                        backgroundColor: subcategory.articleCount === 0 ? "rgba(156, 163, 175, 0.1)" : "rgba(5, 150, 105, 0.1)",
                        padding: "4px 12px",
                        borderRadius: "20px",
                        whiteSpace: "nowrap",
                        marginLeft: "12px"
                      }}
                    >
                      {subcategory.articleCount === 0 ? "Coming soon" : `${subcategory.articleCount} guides`}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: FEATURED ARTICLES LIST */}
      <section style={{ backgroundColor: "white", width: "100%", paddingTop: "64px", paddingBottom: "64px" }} className="px-6">
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "clamp(24px, 5vw, 42px)", fontWeight: "700", color: "#2D3436", marginBottom: "32px" }}>
            Popular {title} Guides
          </h2>

          <div className={articlesToDisplay.length < 3 ? "grid grid-cols-1 gap-6" : "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"}>
            {articlesToDisplay.map((article, index) => (
              <Link key={article.href} href={article.href}>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    padding: "20px",
                    border: "1px solid #E2E8F0",
                    borderRadius: "12px",
                    marginBottom: "0",
                    background: "#fff",
                    boxShadow: "0 1px 2px rgba(44,62,80,0.03)",
                    cursor: "pointer",
                    transition: "background-color 0.2s"
                  }}
                  className="hover:bg-gray-50 hover:shadow-md"
                >
                  <div>
                    <p style={{ fontSize: "12px", textTransform: "uppercase", letterSpacing: "0.1em", color: "#059669", fontWeight: "600", margin: 0 }}>
                      {article.category}
                    </p>
                    <p style={{ fontSize: "16px", fontWeight: "500", color: "#2D3436", marginTop: "2px", margin: 0 }}>
                      {article.title}
                    </p>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: "12px", marginTop: "12px" }}>
                    <p style={{ fontSize: "12px", color: "#636E72", margin: 0, whiteSpace: "nowrap" }}>
                      {article.readTime}
                    </p>
                    <span style={{ color: "#059669", fontSize: "16px" }}>→</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: RELATED CATEGORIES */}
      <section style={{ backgroundColor: "#F7F7F7", width: "100%", paddingTop: "64px", paddingBottom: "64px" }} className="px-6">
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "clamp(20px, 5vw, 42px)", fontWeight: "700", color: "#2D3436", marginBottom: "24px", textAlign: "center" }}>
            Explore Other Topics
          </h2>

          <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: "16px" }}>
            {relatedCategories.map((category) => (
              <Link key={category.href} href={category.href}>
                <div
                  style={{
                    backgroundColor: "white",
                    borderRadius: "8px",
                    padding: "12px 20px",
                    border: "1px solid #E2E8F0",
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    cursor: "pointer",
                    transition: "all 0.2s"
                  }}
                  className="hover:border-accent hover:shadow-sm"
                >
                  <span style={{ fontSize: "18px" }}>
                    {category.emoji}
                  </span>
                  <p style={{ fontSize: "14px", fontWeight: "500", color: "#2D3436", margin: 0 }}>
                    {category.name}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: NEWSLETTER CTA */}
      <section style={{ backgroundColor: "#2D3436", width: "100%", paddingTop: "48px", paddingBottom: "48px" }} className="px-6">
        <div style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center" }}>
          <h2 style={{ fontSize: "clamp(20px, 5vw, 42px)", fontWeight: "700", color: "white", marginBottom: "8px" }}>
            Get {title} Tips Weekly
          </h2>
          <p style={{ fontSize: "14px", color: "#9CA3AF", marginBottom: "24px" }}>
            Join solo founders building smarter businesses
          </p>

          <div style={{ display: "flex", gap: "0", marginBottom: "8px" }} className="flex-col md:flex-row">
            <EmailSignupForm variant="dark" placeholder="Enter your email" />
          </div>
          <p style={{ fontSize: "12px", color: "#6B7280", marginTop: "8px" }}>
            No spam, just practical guides.
          </p>
        </div>
      </section>
    </>
  );
}
