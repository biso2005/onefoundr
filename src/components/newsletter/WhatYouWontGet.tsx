export default function WhatYouWontGet() {
  const items = [
    "Daily emails that pile up",
    "Generic motivational fluff",
    "Constant product pitches",
    "Content you've read a hundred times before"
  ];

  return (
    <section style={{ backgroundColor: "white", width: "100%", paddingTop: "64px", paddingBottom: "64px" }} className="px-6">
      <div style={{ maxWidth: "800px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "32px" }}>
          <h2 style={{
            fontSize: "clamp(24px, 5vw, 42px)",
            fontWeight: "700",
            color: "#2D3436",
            marginBottom: "8px"
          }}>
            What You Won't Get
          </h2>
          <p style={{
            fontSize: "16px",
            color: "#636E72"
          }}>
            We respect your inbox.
          </p>
        </div>

        <div style={{
          maxWidth: "400px",
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          gap: "16px"
        }}>
          {items.map((item, index) => (
            <div
              key={index}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px"
              }}
            >
              <span style={{ fontSize: "16px" }}>❌</span>
              <p style={{
                fontSize: "16px",
                color: "#2D3436",
                margin: 0
              }}>
                {item}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
