export function calculateReadingTime(content: string): string {
  const wordsPerMinute = 230;
  const wordCount = content.trim().split(/\s+/).length;
  const minutes = Math.ceil(wordCount / wordsPerMinute);
  return `${minutes} min read`;
}
