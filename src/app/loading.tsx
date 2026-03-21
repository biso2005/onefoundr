export default function Loading() {
  return (
    <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }} className="px-6">
      <div style={{ textAlign: "center" }}>
        {/* Pulsing dots */}
        <div style={{ display: "flex", justifyContent: "center", gap: "8px", marginBottom: "16px" }}>
          <div
            style={{
              width: "12px",
              height: "12px",
              borderRadius: "50%",
              backgroundColor: "#00B894",
            }}
            className="animate-pulse"
          ></div>
          <div
            style={{
              width: "12px",
              height: "12px",
              borderRadius: "50%",
              backgroundColor: "#00B894",
              animationDelay: "0.2s"
            }}
            className="animate-pulse"
          ></div>
          <div
            style={{
              width: "12px",
              height: "12px",
              borderRadius: "50%",
              backgroundColor: "#00B894",
              animationDelay: "0.4s"
            }}
            className="animate-pulse"
          ></div>
        </div>

        {/* Loading text */}
        <p style={{ fontSize: "14px", color: "#636E72" }}>Loading...</p>
      </div>
    </div>
  );
}
