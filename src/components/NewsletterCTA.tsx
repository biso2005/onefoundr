"use client";

export function NewsletterCTA() {
  return (
    <div style={{
      backgroundColor: "#00B894",
      borderRadius: "12px",
      padding: "32px",
      textAlign: "center"
    }}>
      <h2 style={{
        fontSize: "20px",
        fontWeight: "700",
        color: "white",
        marginBottom: "4px"
      }}>
        Want more guides like this?
      </h2>
      <p style={{
        fontSize: "14px",
        color: "rgba(255, 255, 255, 0.8)",
        marginBottom: "20px",
        margin: "0 0 20px 0"
      }}>
        Get one actionable tip every Tuesday.
      </p>

      {/* Email Form */}
      <form style={{
        display: "flex",
        gap: "0",
        marginBottom: "12px"
      }} className="flex-col md:flex-row md:gap-0" onSubmit={(e) => e.preventDefault()}>
        <input
          type="email"
          placeholder="Enter your email"
          style={{
            flex: 1,
            minWidth: "200px",
            padding: "12px 16px",
            backgroundColor: "white",
            border: "none",
            borderRadius: "6px 0 0 6px",
            fontSize: "14px",
            fontFamily: "inherit",
            outline: "none"
          }}
          className="md:rounded-l-lg md:rounded-r-none focus:outline-none"
        />
        <button
          type="submit"
          style={{
            padding: "12px 20px",
            backgroundColor: "#2D3436",
            color: "white",
            border: "none",
            borderRadius: "0 6px 6px 0",
            fontSize: "14px",
            fontWeight: "600",
            cursor: "pointer",
            transition: "opacity 0.2s"
          }}
          className="md:rounded-r-lg md:rounded-l-none hover:opacity-90"
        >
          Subscribe
        </button>
      </form>
      <p style={{
        fontSize: "12px",
        color: "rgba(255, 255, 255, 0.7)",
        margin: 0
      }}>
        No spam. Unsubscribe anytime.
      </p>
    </div>
  );
}
