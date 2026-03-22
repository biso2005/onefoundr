import Link from "next/link";

export default function NotFound() {
  return (
    <main style={{ width: "100%" }}>
      <div style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "calc(100vh - 200px)",
        paddingLeft: "24px",
        paddingRight: "24px",
        paddingTop: "120px",
        paddingBottom: "120px"
      }} className="md:py-32 py-20">
        <div style={{
          maxWidth: "800px",
          textAlign: "center"
        }}>
          {/* 404 Number */}
          <p style={{
            fontSize: "clamp(48px, 20vw, 128px)",
            fontWeight: "700",
            color: "#00B894",
            opacity: 0.15,
            margin: 0,
            marginBottom: "16px",
            lineHeight: 1
          }}>
            404
          </p>

          {/* Heading */}
          <h1 style={{
            fontSize: "clamp(24px, 5vw, 32px)",
            fontWeight: "700",
            color: "#2D3436",
            margin: 0,
            marginBottom: "12px"
          }}>
            Page Not Found
          </h1>

          {/* Friendly Message */}
          <p style={{
            fontSize: "16px",
            color: "#636E72",
            lineHeight: "1.6",
            maxWidth: "500px",
            margin: "0 auto",
            marginBottom: "32px"
          }}>
            This page doesn't exist or may have been moved. Here are some places to start instead:
          </p>

          {/* Navigation Buttons */}
          <div style={{
            display: "flex",
            flexDirection: "row",
            gap: "16px",
            justifyContent: "center",
            marginBottom: "32px"
          }}>
            <Link href="/">
              <button style={{
                backgroundColor: "#00B894",
                color: "white",
                border: "none",
                borderRadius: "8px",
                padding: "14px 28px",
                fontWeight: 600,
                fontSize: "16px",
                cursor: "pointer",
                boxShadow: "0 2px 8px rgba(44,62,80,0.04)",
                transition: "background 0.2s"
              }} className="hover:bg-emerald-700">
                ← Back to Homepage
              </button>
            </Link>
            <Link href="/start-here">
              <button style={{
                backgroundColor: "white",
                color: "#00B894",
                border: "2px solid #00B894",
                borderRadius: "8px",
                padding: "14px 28px",
                fontWeight: 600,
                fontSize: "16px",
                cursor: "pointer",
                boxShadow: "0 2px 8px rgba(44,62,80,0.04)",
                transition: "border 0.2s"
              }} className="hover:border-emerald-700">
                Start Here
              </button>
            </Link>
          </div>

          {/* Popular Guides Section */}
          <div style={{
            marginTop: "48px",
            paddingTop: "32px",
            borderTop: "1px solid #E2E8F0"
          }}>
            <h2 style={{
              fontSize: "18px",
              fontWeight: 700,
              color: "#2D3436",
              margin: "0 0 16px 0",
              textAlign: "center"
            }}>
              Popular Guides:
            </h2>
            <ul style={{
              listStyle: "none",
              padding: 0,
              margin: 0,
              display: "flex",
              flexDirection: "column",
              gap: "10px",
              maxWidth: "400px",
              marginLeft: "auto",
              marginRight: "auto"
            }}>
              <li>
                <Link href="/start/business-ideas">
                  <span style={{
                    fontSize: "15px",
                    color: "#059669",
                    textDecoration: "none",
                    cursor: "pointer"
                  }} className="hover:underline">
                    Business Ideas for Solopreneurs
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/sales/getting-clients">
                  <span style={{
                    fontSize: "15px",
                    color: "#059669",
                    textDecoration: "none",
                    cursor: "pointer"
                  }} className="hover:underline">
                    How to Get Your First 10 Clients
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/tools/ai-tools">
                  <span style={{
                    fontSize: "15px",
                    color: "#059669",
                    textDecoration: "none",
                    cursor: "pointer"
                  }} className="hover:underline">
                    AI Tools That Replace a Team
                  </span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}
