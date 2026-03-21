export default function Testimonials() {
  const testimonials = [
    {
      quote: "The only newsletter I actually open every week. No fluff, just stuff I can use immediately in my business.",
      name: "Alex T.",
      role: "Freelance Developer"
    },
    {
      quote: "I discovered three tools through OneFoundr that saved me hours every week. Worth subscribing for the tool picks alone.",
      name: "Maria L.",
      role: "Design Consultant"
    },
    {
      quote: "Finally, a newsletter that gets what it's like to build alone. The strategies are practical and actually work.",
      name: "James K.",
      role: "SaaS Founder"
    }
  ];

  return (
    <section style={{ backgroundColor: "white", width: "100%", paddingTop: "64px", paddingBottom: "64px" }} className="px-6">
      <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
        <h2 style={{
          fontSize: "clamp(24px, 5vw, 42px)",
          fontWeight: "700",
          color: "#2D3436",
          marginBottom: "32px",
          textAlign: "center"
        }}>
          What Readers Are Saying
        </h2>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "24px"
        }} className="grid-cols-1 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              style={{
                backgroundColor: "#F7F7F7",
                borderRadius: "12px",
                padding: "24px"
              }}
            >
              <div style={{
                fontSize: "48px",
                color: "#00B894",
                lineHeight: "1",
                marginBottom: "8px"
              }}>
                "
              </div>

              <p style={{
                fontSize: "14px",
                color: "#2D3436",
                lineHeight: "1.6",
                fontStyle: "italic",
                marginBottom: "16px"
              }}>
                {testimonial.quote}
              </p>

              <div style={{
                borderTop: "1px solid #E2E8F0",
                paddingTop: "16px"
              }}>
                <p style={{
                  fontSize: "14px",
                  fontWeight: "600",
                  color: "#2D3436",
                  margin: 0,
                  marginBottom: "2px"
                }}>
                  {testimonial.name}
                </p>
                <p style={{
                  fontSize: "12px",
                  color: "#636E72",
                  margin: 0
                }}>
                  {testimonial.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
