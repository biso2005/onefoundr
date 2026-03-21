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

          {/* Description */}
          <p style={{
            fontSize: "16px",
            color: "#636E72",
            lineHeight: "1.6",
            marginBottom: "32px",
            maxWidth: "500px",
            margin: "0 auto",
            marginBottom: "32px"
          }}>
            The page you're looking for doesn't exist or has been moved. But don't worry — there's plenty more to explore.
          </p>

          {/* Suggestion Links */}
          <div style={{
            display: "flex",
            flexDirection: "column",
            gap: "12px",
            maxWidth: "400px",
            margin: "0 auto",
            marginBottom: "32px"
          }}>
            <Link href="/">
              <div style={{
                backgroundColor: "#F7F7F7",
                borderRadius: "8px",
                padding: "16px 20px",
                display: "flex",
                alignItems: "center",
                gap: "12px",
                border: "1px solid #E2E8F0",
                cursor: "pointer",
                transition: "all 0.2s",
                textDecoration: "none",
                width: "100%"
              }} className="hover:border-accent hover:shadow-sm">
                <span style={{ fontSize: "20px" }}>🏠</span>
                <span style={{
                  fontSize: "14px",
                  fontWeight: "500",
                  color: "#2D3436",
                  flex: 1,
                  textAlign: "left"
                }}>
                  Go to Homepage
                </span>
                <span style={{
                  fontSize: "16px",
                  color: "#00B894",
                  marginLeft: "auto"
                }}>
                  →
                </span>
              </div>
            </Link>

            <Link href="/start-here">
              <div style={{
                backgroundColor: "#F7F7F7",
                borderRadius: "8px",
                padding: "16px 20px",
                display: "flex",
                alignItems: "center",
                gap: "12px",
                border: "1px solid #E2E8F0",
                cursor: "pointer",
                transition: "all 0.2s",
                textDecoration: "none",
                width: "100%"
              }} className="hover:border-accent hover:shadow-sm">
                <span style={{ fontSize: "20px" }}>🚀</span>
                <span style={{
                  fontSize: "14px",
                  fontWeight: "500",
                  color: "#2D3436",
                  flex: 1,
                  textAlign: "left"
                }}>
                  Start Here Guide
                </span>
                <span style={{
                  fontSize: "16px",
                  color: "#00B894",
                  marginLeft: "auto"
                }}>
                  →
                </span>
              </div>
            </Link>

            <Link href="/tools">
              <div style={{
                backgroundColor: "#F7F7F7",
                borderRadius: "8px",
                padding: "16px 20px",
                display: "flex",
                alignItems: "center",
                gap: "12px",
                border: "1px solid #E2E8F0",
                cursor: "pointer",
                transition: "all 0.2s",
                textDecoration: "none",
                width: "100%"
              }} className="hover:border-accent hover:shadow-sm">
                <span style={{ fontSize: "20px" }}>🛠️</span>
                <span style={{
                  fontSize: "14px",
                  fontWeight: "500",
                  color: "#2D3436",
                  flex: 1,
                  textAlign: "left"
                }}>
                  Browse Tools
                </span>
                <span style={{
                  fontSize: "16px",
                  color: "#00B894",
                  marginLeft: "auto"
                }}>
                  →
                </span>
              </div>
            </Link>
          </div>

          {/* Search hint */}
          <p style={{
            fontSize: "14px",
            color: "#636E72"
          }}>
            Or try searching for what you need
          </p>
        </div>
      </div>
    </main>
  );
}
