import fs from "fs";
import path from "path";
import matter from "gray-matter";
import readingTime from "reading-time";

export interface PostFrontmatter {
  title: string;
  description: string;
  category: string;
  categoryLabel: string;
  date: string;
  readTime: string;
  author: string;
  featured: boolean;
  image: string;
  tags: string[];
}

export interface Post {
  frontmatter: PostFrontmatter;
  content: string;
  slug: string;
  category: string;
}

const contentDirectory = path.join(process.cwd(), "content");

// Cache for getAllPosts() to avoid repeated file I/O during build
// Removed in-memory caches for dynamic/ISR support

/**
 * Get a single post by category and slug
 */
export function getPostBySlug(category: string, slug: string): Post | null {
  try {
    const filePath = path.join(contentDirectory, category, `${slug}.mdx`);

    if (!fs.existsSync(filePath)) {
      return null;
    }

    const fileContent = fs.readFileSync(filePath, "utf-8");
    const { data, content } = matter(fileContent);

    // Ensure all required frontmatter fields have fallbacks
    const safeFrontmatter: PostFrontmatter = {
      title: (data?.title as string) || "Untitled",
      description: (data?.description as string) || "",
      category: (data?.category as string) || category,
      categoryLabel: (data?.categoryLabel as string) || (data?.category as string) || category,
      date: (data?.date as string) || new Date().toISOString(),
      readTime: (data?.readTime as string) || "5 min read",
      author: (data?.author as string) || "OneFoundr",
      featured: (data?.featured as boolean) || false,
      image: (data?.image as string) || "",
      tags: (Array.isArray(data?.tags) ? data.tags : []) as string[],
    };

    return {
      frontmatter: safeFrontmatter,
      content,
      slug,
      category,
    };
  } catch (error) {
    console.error(`Error reading post ${category}/${slug}:`, error);
    return null;
  }
}

/**
 * Get all posts across all categories
 */
export function getAllPosts(): Post[] {
  // Always read from disk for dynamic/ISR

  try {
    const posts: Post[] = [];

    // Read all category directories
    const categories = fs.readdirSync(contentDirectory);

    for (const category of categories) {
      const categoryPath = path.join(contentDirectory, category);
      const stat = fs.statSync(categoryPath);

      if (!stat.isDirectory()) continue;

      // Read all .mdx files in the category
      const files = fs.readdirSync(categoryPath).filter((f) => f.endsWith(".mdx"));

      for (const file of files) {
        const slug = file.replace(".mdx", "");
        const post = getPostBySlug(category, slug);

        if (post) {
          posts.push(post);
        }
      }
    }

    // Sort by date (newest first)
    const sorted = posts.sort(
      (a, b) => new Date(b.frontmatter.date).getTime() - new Date(a.frontmatter.date).getTime()
    );

    return sorted;
  } catch (error) {
    console.error("Error reading all posts:", error);
    return [];
  }
}

/**
 * Get all posts in a specific category
 */
export function getPostsByCategory(category: string): Post[] {
  // Always read from disk for dynamic/ISR

  try {
    const categoryPath = path.join(contentDirectory, category);

    if (!fs.existsSync(categoryPath)) {
      return [];
    }

    const files = fs.readdirSync(categoryPath).filter((f) => f.endsWith(".mdx"));
    const posts: Post[] = [];

    for (const file of files) {
      const slug = file.replace(".mdx", "");
      const post = getPostBySlug(category, slug);

      if (post) {
        posts.push(post);
      }
    }

    // Sort by date (newest first)
    const sorted = posts.sort(
      (a, b) => new Date(b.frontmatter.date).getTime() - new Date(a.frontmatter.date).getTime()
    );

    return sorted;
  } catch (error) {
    console.error(`Error reading posts for category ${category}:`, error);
    return [];
  }
}

/**
 * Get all featured posts
 */
export function getFeaturedPosts(): Post[] {
  const allPosts = getAllPosts();
  return allPosts.filter((post) => post.frontmatter.featured);
}

/**
 * Get all unique categories from all posts
 */
export function getAllCategories(): string[] {
  try {
    const categories = fs.readdirSync(contentDirectory);
    return categories.filter((cat) => {
      const catPath = path.join(contentDirectory, cat);
      return fs.statSync(catPath).isDirectory();
    });
  } catch (error) {
    console.error("Error reading categories:", error);
    return [];
  }
}

/**
 * Get all slugs for static generation (for generateStaticParams)
 */
export function getAllPostSlugs(): Array<{ category: string; slug: string }> {
  const posts = getAllPosts();
  return posts.map((post) => ({
    category: post.category,
    slug: post.slug,
  }));
}

/**
 * Get related posts from same category, or fallback to other categories
 */
export function getRelatedPosts(
  currentSlug: string,
  category: string,
  count: number = 3
): Post[] {
  const postsInCategory = getPostsByCategory(category).filter((p) => p.slug !== currentSlug);

  if (postsInCategory.length >= count) {
    return postsInCategory.slice(0, count);
  }

  // If not enough in category, fill with posts from other categories
  const allPosts = getAllPosts().filter(
    (p) => p.category !== category && p.slug !== currentSlug
  );

  return [...postsInCategory, ...allPosts].slice(0, count);
}
