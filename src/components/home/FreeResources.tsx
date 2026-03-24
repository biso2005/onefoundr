"use client";

import EmailSignupForm from "../EmailSignupForm";

export default function FreeResources() {
  return (
    <section className="bg-accent w-full py-20 px-6">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* LEFT COLUMN */}
        <div>
          <div className="inline-block bg-white/30 text-white text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-5">
            Free Resource
          </div>
          <h2 className="text-[42px] font-extrabold text-[#1a1a2e] mb-4 leading-tight">
            The Solopreneur Starter Kit
          </h2>
          <p className="text-[17px] font-medium text-[#1a3a2a] mb-8 leading-relaxed">
            Everything you need to start and run your one-person business — templates, checklists, and guides in one free bundle.
          </p>
          <div className="mb-4">
            <EmailSignupForm
              variant="green"
              buttonText="Get Free Access"
              placeholder="Enter your email"
            />
          </div>
          <p className="text-[13px] text-[#1a3a2a]">Free for solo founders • No spam, ever</p>
        </div>

        {/* RIGHT COLUMN */}
        <div className="bg-white rounded-2xl p-9 shadow-[0_20px_60px_rgba(0,0,0,0.15)]">
          <h3 className="text-lg font-bold text-primary mb-6">What's Inside:</h3>
          <ul className="list-none p-0 mb-6">
            {[
              "Business Model Canvas Template",
              "Client Proposal Template",
              "Weekly Planning System",
              "Pricing Calculator Spreadsheet",
              "30-Day Content Calendar",
              "SOP Template Library"
            ].map((item, index) => (
              <li key={index} className="flex items-center gap-3 mb-4">
                <span className="text-accent text-lg shrink-0">✅</span>
                <span className="text-[15px] text-primary font-medium">{item}</span>
              </li>
            ))}
          </ul>
          <div className="border-t border-border pt-5">
            <p className="text-sm text-textLight mb-1">
              Total value: <span className="line-through">$149</span>
            </p>
            <p className="text-sm font-bold text-accentDark">Yours free today</p>
          </div>
        </div>

      </div>
    </section>
  );
}
