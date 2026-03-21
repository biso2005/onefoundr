import Link from "next/link";

export const MDXComponents = {
  // Headings
  h1: ({ children }: { children: React.ReactNode }) => (
    <h1 style={{
      fontSize: "28px",
      fontWeight: "700",
      color: "#2D3436",
      marginTop: "48px",
      marginBottom: "16px",
      lineHeight: "1.3"
    }}>
      {children}
    </h1>
  ),

  h2: ({ children }: { children: React.ReactNode }) => (
    <h2 style={{
      fontSize: "24px",
      fontWeight: "700",
      color: "#2D3436",
      marginTop: "40px",
      marginBottom: "12px",
      paddingBottom: "8px",
      borderBottom: "1px solid #E2E8F0"
    }}>
      {children}
    </h2>
  ),

  h3: ({ children }: { children: React.ReactNode }) => (
    <h3 style={{
      fontSize: "20px",
      fontWeight: "600",
      color: "#2D3436",
      marginTop: "32px",
      marginBottom: "8px"
    }}>
      {children}
    </h3>
  ),

  h4: ({ children }: { children: React.ReactNode }) => (
    <h4 style={{
      fontSize: "18px",
      fontWeight: "600",
      color: "#2D3436",
      marginTop: "24px",
      marginBottom: "8px"
    }}>
      {children}
    </h4>
  ),

  // Paragraphs
  p: ({ children }: { children: React.ReactNode }) => (
    <p style={{
      fontSize: "16px",
      color: "#636E72",
      lineHeight: "1.75",
      marginBottom: "20px"
    }}>
      {children}
    </p>
  ),

  // Links
  a: ({ href, children }: { href: string; children: React.ReactNode }) => (
    <a href={href} style={{
      color: "#059669",
      textDecoration: "underline",
      transition: "opacity 0.2s"
    }} className="hover:opacity-80">
      {children}
    </a>
  ),

  // Lists
  ul: ({ children }: { children: React.ReactNode }) => (
    <ul style={{
      listStyle: "disc",
      paddingLeft: "24px",
      marginBottom: "20px",
      color: "#636E72"
    }}>
      {children}
    </ul>
  ),

  ol: ({ children }: { children: React.ReactNode }) => (
    <ol style={{
      listStyle: "decimal",
      paddingLeft: "24px",
      marginBottom: "20px",
      color: "#636E72"
    }}>
      {children}
    </ol>
  ),

  li: ({ children }: { children: React.ReactNode }) => (
    <li style={{
      fontSize: "16px",
      lineHeight: "1.75",
      marginBottom: "8px"
    }}>
      {children}
    </li>
  ),

  // Blockquote
  blockquote: ({ children }: { children: React.ReactNode }) => (
    <blockquote style={{
      borderLeft: "4px solid #00B894",
      paddingLeft: "20px",
      fontStyle: "italic",
      color: "#636E72",
      margin: "24px 0",
      backgroundColor: "#F7F7F7",
      padding: "20px",
      borderRadius: "0 12px 12px 0"
    }}>
      {children}
    </blockquote>
  ),

  // Code
  code: ({ children }: { children: React.ReactNode }) => (
    <code style={{
      backgroundColor: "#F7F7F7",
      fontSize: "14px",
      padding: "2px 6px",
      borderRadius: "4px",
      fontFamily: "monospace",
      color: "#2D3436"
    }}>
      {children}
    </code>
  ),

  // Pre (code block)
  pre: ({ children }: { children: React.ReactNode }) => (
    <pre style={{
      backgroundColor: "#2D3436",
      color: "white",
      padding: "24px",
      borderRadius: "12px",
      overflowX: "auto",
      margin: "24px 0",
      fontSize: "14px",
      lineHeight: "1.5"
    }}>
      {children}
    </pre>
  ),

  // Strong
  strong: ({ children }: { children: React.ReactNode }) => (
    <strong style={{
      fontWeight: "600",
      color: "#2D3436"
    }}>
      {children}
    </strong>
  ),

  // Emphasis
  em: ({ children }: { children: React.ReactNode }) => (
    <em style={{
      fontStyle: "italic"
    }}>
      {children}
    </em>
  ),

  // Horizontal rule
  hr: () => (
    <hr style={{
      borderColor: "#E2E8F0",
      margin: "40px 0",
      border: "none",
      borderTop: "1px solid #E2E8F0"
    }} />
  ),

  // Table
  table: ({ children }: { children: React.ReactNode }) => (
    <table style={{
      width: "100%",
      borderCollapse: "collapse",
      margin: "24px 0",
      fontSize: "14px"
    }}>
      {children}
    </table>
  ),

  // Table header
  th: ({ children }: { children: React.ReactNode }) => (
    <th style={{
      textAlign: "left",
      padding: "12px",
      borderBottom: "2px solid #E2E8F0",
      fontWeight: "600",
      color: "#2D3436",
      fontSize: "14px"
    }}>
      {children}
    </th>
  ),

  // Table data
  td: ({ children }: { children: React.ReactNode }) => (
    <td style={{
      padding: "12px",
      borderBottom: "1px solid #E2E8F0",
      fontSize: "14px",
      color: "#636E72"
    }}>
      {children}
    </td>
  ),

  // Image
  img: ({ src, alt }: { src: string; alt: string }) => (
    <img
      src={src}
      alt={alt}
      style={{
        borderRadius: "12px",
        margin: "32px 0",
        width: "100%",
        maxWidth: "100%"
      }}
    />
  ),
};
