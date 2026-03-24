"use client";

export default function NewsletterCTA() {
  return (
    <section className="bg-white w-full py-16 px-6">
      <div className="max-w-[800px] mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-[clamp(24px,5vw,42px)] font-bold text-primary mb-2">
            Stay in the Loop
          </h2>
          <p className="text-lg font-medium text-accentDark mb-4">
            The OneFoundr Letter
          </p>
        </div>

        {/* Two Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {/* What You Get */}
          <div>
            <p className="text-[13px] font-semibold text-primary mb-4 uppercase tracking-wider">
              What you get:
            </p>
            <div className="flex flex-col gap-3">
              {[
                "✅ One practical strategy per week",
                "✅ New tool recommendations and reviews",
                "✅ Solopreneur income breakdowns",
                "✅ Early access to templates"
              ].map((item, index) => (
                <p key={index} className="text-sm text-primary m-0">
                  {item}
                </p>
              ))}
            </div>
          </div>

          {/* What You Don't Get */}
          <div>
            <p className="text-[13px] font-semibold text-primary mb-4 uppercase tracking-wider">
              What you don't get:
            </p>
            <div className="flex flex-col gap-3">
              {["❌ Spam", "❌ Fluff", "❌ Motivational quotes", "❌ Someone selling you a $997 course"].map((item, index) => (
                <p key={index} className="text-sm text-textLight m-0">
                  {item}
                </p>
              ))}
            </div>
          </div>
        </div>

        {/* Email Form */}
        <div className="text-center max-w-[448px] mx-auto">
          <div className="flex flex-col md:flex-row gap-0 mb-2">
            <label htmlFor="email-start-here" className="sr-only">Email address</label>
            <input
              id="email-start-here"
              type="email"
              placeholder="Enter your email"
              autoComplete="email"
              className="flex-1 min-w-[200px] px-5 py-3 rounded-lg md:rounded-l-lg md:rounded-r-none border border-border text-sm font-[inherit] outline-none focus:ring-2 focus:ring-accent/50"
            />
            <button className="px-6 py-3 bg-accent text-white border-0 rounded-lg md:rounded-r-lg md:rounded-l-none text-sm font-semibold cursor-pointer transition-opacity whitespace-nowrap hover:opacity-90">
              Subscribe Free →
            </button>
          </div>
          <p className="text-xs text-textLight mt-2">
            Trusted by solo founders worldwide
          </p>
        </div>
      </div>
    </section>
  );
}
