import { MDXRemote } from "next-mdx-remote/rsc";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import {
  getPostBySlug,
  getAllPostSlugs,
  getPostsByCategory,
  getRelatedPosts,
} from "@/lib/mdx";
import { MDXComponents } from "@/components/MDXComponents";
import { mdxSerializeOptions } from "@/lib/mdx-options";
import AuthorBox from "@/components/AuthorBox";
import { calculateReadingTime } from "@/lib/readingTime";
import NewsletterCTA from "@/components/NewsletterCTA";
import { ShareButtons } from "@/components/ShareButtons";
import { CategoryIcon } from "@/components/CategoryIcon";
import { VALID_CONTENT_CATEGORIES, RESERVED_ROUTES } from "@/lib/constants";

interface ArticlePageProps {
  params: Promise<{
    category: string;
    slug: string;
  }>;
}

// Generate static params for all posts
export async function generateStaticParams() {
  const slugs = getAllPostSlugs();
  
  // Filter out reserved routes and only include valid content categories
  return slugs.filter(
    (param) =>
      VALID_CONTENT_CATEGORIES.includes(param.category as any) &&
      !RESERVED_ROUTES.includes(param.category as any)
  );
}

// Generate metadata for SEO
export async function generateMetadata({
  params,
}: ArticlePageProps): Promise<Metadata> {
  const { category, slug } = await params;
  
  // Route guard: Check if category is valid for dynamic routes
  if (
    !VALID_CONTENT_CATEGORIES.includes(category as any) ||
    RESERVED_ROUTES.includes(category as any)
  ) {
    return {
      title: "Not Found",
      description: "Page not found",
    };
  }
  
  const post = getPostBySlug(category, slug);

  if (!post) {
    return {
      title: "Not Found",
      description: "Post not found",
    };
  }

  return {
    title: post.frontmatter.title,
    description: post.frontmatter.description,
    openGraph: {
      title: post.frontmatter.title,
      description: post.frontmatter.description,
      type: "article",
      publishedTime: post.frontmatter.date,
    },
  };
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { category, slug } = await params;

  // Route guard: Check if category is valid for dynamic routes
  if (
    !VALID_CONTENT_CATEGORIES.includes(category as any) ||
    RESERVED_ROUTES.includes(category as any)
  ) {
    notFound();
  }

  // Route guard: Check if slug exists
  const post = getPostBySlug(category, slug);
  if (!post) {
    notFound();
  }

  const relatedPosts = getRelatedPosts(slug, category, 3);

  // Format date
  const publishDate = new Date(post.frontmatter.date);
  const formattedDate = publishDate.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  // Calculate reading time from raw MDX content
  const readingTime = calculateReadingTime(post.content);

  return (
    <main style={{ width: "100%" }}>
      {/* ARTICLE HEADER */}
      <article style={{
        backgroundColor: "white",
        width: "100%",
        paddingTop: "80px",
        paddingBottom: "48px",
        paddingLeft: "24px",
        paddingRight: "24px"
      }} className="md:pt-20 pt-12">
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          {/* Breadcrumb */}
          <div style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            marginBottom: "24px",
            flexWrap: "wrap"
          }}>
            <Link href="/" style={{
              fontSize: "14px",
              color: "#059669",
              textDecoration: "none"
            }} className="hover:underline">
              Home
            </Link>
            <span style={{ color: "#9CA3AF" }}>—</span>
            <Link href={`/${category}`} style={{
              fontSize: "14px",
              color: "#059669",
              textDecoration: "none"
            }} className="hover:underline">
              {post.frontmatter.categoryLabel}
            </Link>
            <span style={{ color: "#9CA3AF" }}>—</span>
            <span style={{
              fontSize: "14px",
              color: "#636E72"
            }}>
              {post.frontmatter.title}
            </span>
          </div>

          {/* Category Tag */}
          <p style={{
            fontSize: "12px",
            textTransform: "uppercase",
            letterSpacing: "0.1em",
            color: "#059669",
            fontWeight: "600",
            marginBottom: "12px"
          }}>
            {post.frontmatter.categoryLabel}
          </p>

          {/* Title */}
          <h1 style={{
            fontSize: "48px",
            fontWeight: "700",
            color: "#2D3436",
            lineHeight: "1.2",
            marginBottom: "16px"
          }} className="md:text-5xl text-3xl">
            {post.frontmatter.title}
          </h1>

          {/* Description */}
          <p style={{
            fontSize: "18px",
            color: "#636E72",
            lineHeight: "1.6",
            marginBottom: "24px"
          }}>
            {post.frontmatter.description}
          </p>

          {/* Meta Info */}
          <div style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            flexWrap: "wrap",
            marginBottom: "48px",
            justifyContent: "space-between"
          }}>
            <div style={{ display: "flex", alignItems: "center", gap: "16px", flexWrap: "wrap" }}>
              <p style={{
                fontSize: "14px",
                color: "#2D3436",
                fontWeight: "500",
                margin: 0
              }}>
                {post.frontmatter.author}
              </p>
              <span style={{ color: "#9CA3AF" }}>•</span>
              <p style={{
                fontSize: "14px",
                color: "#636E72",
                margin: 0
              }}>
                Last updated: {formattedDate}
              </p>
              <span style={{ color: "#9CA3AF" }}>•</span>
              <span className="text-sm text-gray-500">⏱ {readingTime}</span>
            </div>
            <ShareButtons title={post.frontmatter.title} url={`/${category}/${slug}`} />
          </div>

          {/* Category Visual */}
          <div style={{ display: "flex", justifyContent: "center", margin: "32px 0" }}>
            <CategoryIcon category={category?.toLowerCase?.() || "start"} size="md" className="!h-32 !w-full" />
          </div>
          {/* Divider */}
          <div style={{
            borderTop: "1px solid #E2E8F0",
            marginBottom: "48px"
          }}></div>
        </div>
      </article>

      {/* ARTICLE BODY */}
      <article style={{
        backgroundColor: "white",
        width: "100%",
        paddingBottom: "48px",
        paddingLeft: "24px",
        paddingRight: "24px"
      }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          {/* MDX Content */}
          <div style={{ color: "#636E72" }}>
            <MDXRemote 
              source={post.content} 
              components={MDXComponents}
              options={mdxSerializeOptions}
            />
          </div>
          {/* Author Box */}
          <AuthorBox />
          {/* Newsletter CTA */}
          <NewsletterCTA />

          {/* ARTICLE FOOTER */}
          <div style={{
            marginTop: "48px"
          }}>
            {/* Tags */}
            {post.frontmatter.tags && post.frontmatter.tags.length > 0 && (
              <div style={{
                display: "flex",
                gap: "8px",
                flexWrap: "wrap",
                marginBottom: "48px"
              }}>
                {post.frontmatter.tags.map((tag) => (
                  <span
                    key={tag}
                    style={{
                      fontSize: "12px",
                      backgroundColor: "#F7F7F7",
                      color: "#2D3436",
                      padding: "4px 12px",
                      borderRadius: "9999px"
                    }}
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            )}

            {/* Divider */}
            <div style={{
              borderTop: "1px solid #E2E8F0",
              marginBottom: "32px"
            }}></div>



            {/* Related Articles */}
            {relatedPosts.length > 0 && (
              <div>
                <h2 style={{
                  fontSize: "20px",
                  fontWeight: "700",
                  color: "#2D3436",
                  marginBottom: "20px"
                }}>
                  Keep Reading
                </h2>

                <div style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
                  gap: "16px",
                  marginBottom: "48px"
                }} className="grid-cols-1 md:grid-cols-3">
                  {relatedPosts.map((relatedPost) => (
                    <Link
                      key={`${relatedPost.category}-${relatedPost.slug}`}
                      href={`/${relatedPost.category}/${relatedPost.slug}`}
                      style={{
                        border: "1px solid #E2E8F0",
                        borderRadius: "8px",
                        padding: "16px",
                        textDecoration: "none",
                        transition: "all 0.2s",
                        cursor: "pointer"
                      }}
                      className="hover:border-accent hover:shadow-sm"
                    >
                      <p style={{
                        fontSize: "12px",
                        color: "#00B894",
                        textTransform: "uppercase",
                        letterSpacing: "0.05em",
                        margin: "0 0 4px 0",
                        fontWeight: "600"
                      }}>
                        {relatedPost.frontmatter.categoryLabel}
                      </p>
                      <p style={{
                        fontSize: "16px",
                        fontWeight: "500",
                        color: "#2D3436",
                        marginTop: "4px",
                        marginBottom: "4px",
                        margin: "0"
                      }}>
                        {relatedPost.frontmatter.title}
                      </p>
                      <p style={{
                        fontSize: "12px",
                        color: "#636E72",
                        marginTop: "4px",
                        margin: "0"
                      }}>
                        {relatedPost.frontmatter.readTime}
                      </p>
                    </Link>
                  ))}
                </div>
              </div>
            )}

          </div>
        </div>
      </article>
    </main>
  );
}
