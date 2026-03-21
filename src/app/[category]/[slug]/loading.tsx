export default function ArticleLoading() {
  return (
    <main style={{ width: "100%" }}>
      {/* ARTICLE HEADER SKELETON */}
      <article
        style={{
          backgroundColor: "white",
          width: "100%",
          paddingTop: "80px",
          paddingBottom: "48px",
          paddingLeft: "24px",
          paddingRight: "24px"
        }}
        className="md:pt-20 pt-12"
      >
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          {/* Breadcrumb skeleton */}
          <div
            style={{
              height: "16px",
              width: "192px",
              backgroundColor: "#F7F7F7",
              borderRadius: "8px",
              marginBottom: "24px"
            }}
            className="animate-pulse"
          ></div>

          {/* Title skeleton */}
          <div
            style={{
              height: "48px",
              width: "100%",
              backgroundColor: "#F7F7F7",
              borderRadius: "8px",
              marginBottom: "24px",
              marginTop: "96px"
            }}
            className="animate-pulse"
          ></div>

          {/* Subtitle skeleton */}
          <div
            style={{
              height: "20px",
              width: "75%",
              backgroundColor: "#F7F7F7",
              borderRadius: "8px",
              marginBottom: "48px",
              marginTop: "48px"
            }}
            className="animate-pulse"
          ></div>

          {/* Meta info skeleton */}
          <div
            style={{
              height: "16px",
              width: "128px",
              backgroundColor: "#F7F7F7",
              borderRadius: "8px",
              marginBottom: "48px",
              marginTop: "48px"
            }}
            className="animate-pulse"
          ></div>

          {/* Divider */}
          <div
            style={{
              borderTop: "1px solid #E2E8F0",
              marginTop: "96px",
              marginBottom: "48px"
            }}
          ></div>
        </div>
      </article>

      {/* ARTICLE BODY SKELETON */}
      <article
        style={{
          backgroundColor: "white",
          width: "100%",
          paddingBottom: "48px",
          paddingLeft: "24px",
          paddingRight: "24px"
        }}
      >
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          {/* Paragraph skeleton bars */}
          {[1, 2, 3, 4, 5, 6, 7, 8].map((index) => (
            <div
              key={index}
              style={{
                height: "16px",
                width: index % 3 === 0 ? "85%" : "100%",
                backgroundColor: "#F7F7F7",
                borderRadius: "8px",
                marginTop: index === 1 ? "0" : "16px"
              }}
              className="animate-pulse"
            ></div>
          ))}

          {/* Extra spacing for layout */}
          <div style={{ marginTop: "96px" }}></div>

          {/* Author box skeleton */}
          <div
            style={{
              backgroundColor: "#F7F7F7",
              borderRadius: "8px",
              padding: "24px",
              marginBottom: "48px",
              height: "120px"
            }}
            className="animate-pulse"
          ></div>
        </div>
      </article>
    </main>
  );
}
