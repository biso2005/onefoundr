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
      <section className="bg-white w-full pt-20 pb-6 md:py-20 py-12 px-6">
        <div className="max-w-[1200px] mx-auto">
          <div className="flex flex-col md:flex-row gap-12 items-start">
            {/* LEFT SIDE */}
            <div className="w-full md:w-[60%]">
              <p className="text-xs uppercase tracking-widest text-accentDark font-semibold mb-3">
                {eyebrow}
              </p>

              <div className="flex items-center gap-4 mb-5">
                <CategoryIcon category={categoryKey} size="lg" />
                <h1 className="text-[clamp(28px,6vw,48px)] font-bold text-primary leading-tight m-0">
                  {title}
                </h1>
              </div>

              <p className="text-lg text-textLight leading-relaxed mb-8 max-w-[500px]">
                {description}
              </p>

              <Link href={pillarGuide.href}>
                <button className="px-7 py-3.5 bg-accent text-white border-0 rounded-lg text-base font-semibold cursor-pointer transition-opacity hover:opacity-90">
                  Read the Complete Guide →
                </button>
              </Link>
            </div>

            {/* RIGHT SIDE - PILLAR GUIDE CARD */}
            <div className="w-full md:w-[40%]">
              <Link href={pillarGuide.href}>
                <div
                  style={{ background: `linear-gradient(135deg, ${categoryConfig[categoryKey]?.gradient?.replace('from-', '')?.replace('to-', '')?.replace(/ /g, ', ') || 'rgba(0, 184, 148, 0.1), rgba(5, 150, 105, 0.1)'})` }}
                  className="rounded-2xl p-7 border border-border cursor-pointer transition-all hover:shadow-md hover:border-accent"
                >
                  <p className="text-xs uppercase tracking-widest text-accentDark font-semibold mb-4">
                    📖 Complete Guide
                  </p>

                  <h3 className="text-lg font-bold text-primary mb-2 leading-snug">
                    {pillarGuide.title}
                  </h3>

                  <p className="text-sm text-textLight leading-relaxed mb-4">
                    {pillarGuide.description}
                  </p>

                  <div className="flex justify-between items-center">
                    <p className="text-xs text-textLight m-0">
                      {pillarGuide.readTime}
                    </p>
                    <p className="text-sm text-accentDark font-medium m-0">
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
      <section className="bg-muted w-full py-16 px-6">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-[clamp(24px,5vw,42px)] font-bold text-primary mb-8 text-center">
            Topics in {title}
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
            {subcategories.map((subcategory) => (
              <Link
                key={subcategory.name}
                href={subcategory.href}
                className="no-underline"
              >
                <div className="bg-white rounded-xl p-6 border border-border cursor-pointer transition-all h-full hover:border-green-400 hover:shadow-md">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <p className="text-base font-semibold text-primary m-0">
                        {subcategory.name}
                      </p>
                      <p className="text-sm text-textLight mt-1 m-0">
                        {subcategory.description}
                      </p>
                    </div>
                    <span className={`text-xs px-3 py-1 rounded-full whitespace-nowrap ml-3 ${
                      subcategory.articleCount === 0
                        ? "text-gray-400 bg-gray-100"
                        : "text-accentDark bg-emerald-50"
                    }`}>
                      {subcategory.articleCount === 0 ? "Coming soon" : `${subcategory.articleCount} guides`}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: FEATURED ARTICLES */}
      <section className="bg-white w-full py-16 px-6">
        <div className="max-w-[800px] mx-auto">
          <h2 className="text-[clamp(24px,5vw,42px)] font-bold text-primary mb-8">
            Popular {title} Guides
          </h2>

          <div className={articlesToDisplay.length < 3 ? "grid grid-cols-1 gap-6" : "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"}>
            {articlesToDisplay.map((article) => (
              <Link key={article.href} href={article.href}>
                <div className="flex flex-col justify-between items-start p-5 border border-border rounded-xl bg-white shadow-[0_1px_2px_rgba(44,62,80,0.03)] cursor-pointer transition-colors hover:bg-gray-50 hover:shadow-md">
                  <div>
                    <p className="text-xs uppercase tracking-widest text-accentDark font-semibold m-0">
                      {article.category}
                    </p>
                    <p className="text-base font-medium text-primary mt-0.5 m-0">
                      {article.title}
                    </p>
                  </div>
                  <div className="flex items-center gap-3 mt-3">
                    <p className="text-xs text-textLight m-0 whitespace-nowrap">
                      {article.readTime}
                    </p>
                    <span className="text-accentDark text-base">→</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: RELATED CATEGORIES */}
      <section className="bg-muted w-full py-16 px-6">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-[clamp(20px,5vw,42px)] font-bold text-primary mb-6 text-center">
            Explore Other Topics
          </h2>

          <div className="flex justify-center flex-wrap gap-4">
            {relatedCategories.map((category) => (
              <Link key={category.href} href={category.href}>
                <div className="bg-white rounded-lg px-5 py-3 border border-border flex items-center gap-2 cursor-pointer transition-all hover:border-accent hover:shadow-sm">
                  <span className="text-lg">{category.emoji}</span>
                  <p className="text-sm font-medium text-primary m-0">{category.name}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: NEWSLETTER CTA */}
      <section className="bg-primary w-full py-12 px-6">
        <div className="max-w-[800px] mx-auto text-center">
          <h2 className="text-[clamp(20px,5vw,42px)] font-bold text-white mb-2">
            Get {title} Tips Weekly
          </h2>
          <p className="text-sm text-gray-400 mb-6">
            Join solo founders building smarter businesses
          </p>

          <div className="flex flex-col md:flex-row gap-0 mb-2">
            <EmailSignupForm variant="dark" placeholder="Enter your email" />
          </div>
          <p className="text-xs text-gray-500 mt-2">
            No spam, just practical guides.
          </p>
        </div>
      </section>
    </>
  );
}
