export default function SampleIssue() {
  return (
    <section style={{ backgroundColor: "#F7F7F7", width: "100%", paddingTop: "64px", paddingBottom: "64px" }} className="px-6">
      <div style={{ maxWidth: "800px", margin: "0 auto" }}>
        <h2 style={{
          fontSize: "clamp(24px, 5vw, 42px)",
          fontWeight: "700",
          color: "#2D3436",
          marginBottom: "32px",
          textAlign: "center"
        }}>
          Here's What a Typical Issue Looks Like
        </h2>

        {/* Mock Email Card */}
        <div style={{
          backgroundColor: "white",
          borderRadius: "16px",
          border: "1px solid #E2E8F0",
          overflow: "hidden",
          boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)"
        }}>
          {/* Email Header */}
          <div style={{
            backgroundColor: "#F7F7F7",
            padding: "20px 24px",
            borderBottom: "1px solid #E2E8F0"
          }}>
            <p style={{ fontSize: "14px", color: "#636E72", margin: 0, marginBottom: "4px" }}>
              From: OneFoundr &lt;newsletter@onefoundr.com&gt;
            </p>
            <p style={{ fontSize: "14px", fontWeight: "600", color: "#2D3436", margin: 0, marginBottom: "4px" }}>
              Subject: The pricing mistake costing you thousands
            </p>
            <p style={{ fontSize: "12px", color: "#636E72", margin: 0 }}>
              Tuesday, December 10, 2024
            </p>
          </div>

          {/* Email Body */}
          <div style={{ padding: "28px" }}>
            <p style={{ fontSize: "16px", color: "#2D3436", marginBottom: "16px" }}>
              Hey there 👋
            </p>

            <p style={{
              fontSize: "14px",
              color: "#636E72",
              lineHeight: "1.6",
              marginBottom: "16px"
            }}>
              This week, I want to talk about pricing — specifically, the mistake I see almost every solopreneur make when they're starting out.
            </p>

            <p style={{
              fontSize: "14px",
              color: "#2D3436",
              fontWeight: "600",
              fontStyle: "italic",
              marginBottom: "16px"
            }}>
              They charge by the hour.
            </p>

            <p style={{
              fontSize: "14px",
              color: "#636E72",
              lineHeight: "1.6",
              marginBottom: "16px"
            }}>
              Here's why that's a problem and what to do instead:
            </p>

            <ol style={{ paddingLeft: "20px", marginBottom: "16px" }}>
              <li style={{
                fontSize: "14px",
                color: "#2D3436",
                marginBottom: "8px"
              }}>
                <span style={{ fontWeight: "600", color: "#00B894" }}>1.</span> Hourly pricing punishes you for being efficient
              </li>
              <li style={{
                fontSize: "14px",
                color: "#2D3436",
                marginBottom: "8px"
              }}>
                <span style={{ fontWeight: "600", color: "#00B894" }}>2.</span> Clients focus on time, not results
              </li>
              <li style={{
                fontSize: "14px",
                color: "#2D3436"
              }}>
                <span style={{ fontWeight: "600", color: "#00B894" }}>3.</span> Your income has a hard ceiling
              </li>
            </ol>

            <p style={{
              fontSize: "14px",
              color: "#636E72",
              lineHeight: "1.6",
              marginBottom: "16px"
            }}>
              The fix? Switch to value-based pricing. I break down exactly how in this week's guide:
            </p>

            <p style={{
              fontSize: "14px",
              color: "#00B894",
              fontWeight: "500",
              marginBottom: "24px"
            }}>
              → Read: The Solopreneur Pricing Playbook
            </p>

            <div style={{
              borderTop: "1px solid #E2E8F0",
              paddingTop: "16px",
              marginBottom: "16px"
            }} />

            {/* Tool Section */}
            <h3 style={{
              fontSize: "14px",
              fontWeight: "600",
              color: "#2D3436",
              marginBottom: "8px"
            }}>
              🛠️ Tool of the Week
            </h3>

            <p style={{
              fontSize: "14px",
              color: "#636E72",
              lineHeight: "1.6",
              marginBottom: "16px"
            }}>
              Stripe — still the best payment processor for solopreneurs. Simple setup, clean dashboard, works globally.
            </p>

            {/* Sign Off */}
            <p style={{
              fontSize: "14px",
              color: "#2D3436",
              marginBottom: "4px"
            }}>
              See you next Tuesday ✌️
            </p>
            <p style={{
              fontSize: "14px",
              color: "#636E72",
              margin: 0
            }}>
              — [Founder Name], OneFoundr
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
