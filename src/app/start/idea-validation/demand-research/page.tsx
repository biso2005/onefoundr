'use client';

import Link from 'next/link';
import { AlertTriangle, Clock, DollarSign, CheckCircle, TrendingUp } from 'lucide-react';

export default function DemandResearchPage() {
  return (
    <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '48px 24px', fontSize: '16px', lineHeight: '1.8', color: '#2D3436' }}>
      
      {/* Hero */}
      <section style={{ marginBottom: '64px' }}>
        <h1 style={{ fontSize: '48px', fontWeight: '700', color: '#2D3436', marginBottom: '16px' }}>
          Demand Research: The Only Valid Investigation is a Transaction Attempt
        </h1>
        <p style={{ fontSize: '20px', color: '#636E72', marginBottom: '24px', fontWeight: '500' }}>
          Stop surveying. Start selling.
        </p>
        <div style={{ backgroundColor: '#FFF3E0', borderLeft: '4px solid #F57C00', padding: '20px', borderRadius: '8px', margin: '32px 0' }}>
          <p style={{ margin: '0', fontSize: '15px', color: '#E65100' }}>
            <strong>The Market Research Trap:</strong> You spend 2 weeks building a survey. 50 people respond: "I'd use that!" Then you build it and zero buy. Why? Because "I like that idea" is noise. Only one signal matters: <strong>payment.</strong> This page teaches you how to validate demand in 48 hours using the Shadow Offer—a method that requires one person, one laptop, and one Stripe link. If someone won't pre-pay for the shadow, they won't pay for the finished product.
          </p>
        </div>
      </section>

      {/* The Problem */}
      <section style={{ marginBottom: '64px' }}>
        <h2 style={{ fontSize: '32px', fontWeight: '700', color: '#2D3436', marginBottom: '24px' }}>
          Why Market Research Kills Solo Businesses
        </h2>
        <p style={{ marginBottom: '16px' }}>
          Most solo founders start validation the wrong way:
        </p>
        <div style={{ display: 'grid', gap: '16px', marginBottom: '32px' }}>
          <div style={{ backgroundColor: '#FFEBEE', borderLeft: '4px solid #C62828', padding: '16px', borderRadius: '4px' }}>
            <p style={{ margin: '0 0 6px 0', fontWeight: '700', color: '#C62828' }}>❌ The Survey Trap</p>
            <p style={{ margin: '0', fontSize: '14px', color: '#2D3436' }}>
              "I'd pay £50 for that!" (said the person who will never use the product). Surveys measure interest, not intent. 70% say yes. 5% buy.
            </p>
          </div>
          <div style={{ backgroundColor: '#FFEBEE', borderLeft: '4px solid #C62828', padding: '16px', borderRadius: '4px' }}>
            <p style={{ margin: '0 0 6px 0', fontWeight: '700', color: '#C62828' }}>❌ The Interview Trap</p>
            <p style={{ margin: '0', fontSize: '14px', color: '#2D3436' }}>
              "Let me talk to 20 potential customers." You drink coffee with friends who nod politely. They say "looks good!" because they like you, not because they need it.
            </p>
          </div>
          <div style={{ backgroundColor: '#FFEBEE', borderLeft: '4px solid #C62828', padding: '16px', borderRadius: '4px' }}>
            <p style={{ margin: '0 0 6px 0', fontWeight: '700', color: '#C62828' }}>❌ The TAM Analysis Trap</p>
            <p style={{ margin: '0', fontSize: '14px', color: '#2D3436' }}>
              "The TAM is £10 billion!" (But you need 10 customers, not 10 million. TAM is irrelevant at solo stage.)
            </p>
          </div>
          <div style={{ backgroundColor: '#FFEBEE', borderLeft: '4px solid #C62828', padding: '16px', borderRadius: '4px' }}>
            <p style={{ margin: '0 0 6px 0', fontWeight: '700', color: '#C62828' }}>❌ The Build-First Validation Trap</p>
            <p style={{ margin: '0', fontSize: '14px', color: '#2D3436' }}>
              "I'll build a landing page and see if people sign up for a waitlist." Emails cost nothing. Waitlist = vanity metric. You need payment.
            </p>
          </div>
        </div>

        <div style={{ backgroundColor: '#E8F5E9', borderLeft: '4px solid #2E7D32', padding: '16px', borderRadius: '4px' }}>
          <p style={{ margin: '0 0 8px 0', fontWeight: '700', color: '#1B5E20' }}>The Only Valid Evidence of Demand</p>
          <p style={{ margin: '0', fontSize: '14px', color: '#2E7D32' }}>
            Someone who already pays for a workaround. Or someone who commits £ to your solution before you build it. Everything else is entertainment.
          </p>
        </div>
      </section>

      {/* Section 1: Evidence Types */}
      <section style={{ marginBottom: '64px' }}>
        <h2 style={{ fontSize: '32px', fontWeight: '700', color: '#2D3436', marginBottom: '24px' }}>
          Section 1: The Three Evidence Types (What Actually Counts)
        </h2>
        <p style={{ marginBottom: '24px' }}>
          Before you do anything, look for these signals that demand is real:
        </p>

        <div style={{ display: 'grid', gap: '20px', marginBottom: '32px' }}>
          <div style={{ backgroundColor: '#E3F2FD', borderLeft: '4px solid #1565C0', padding: '20px', borderRadius: '8px' }}>
            <h3 style={{ fontSize: '18px', fontWeight: '700', color: '#1565C0', margin: '0 0 12px 0' }}>
              Evidence Type 1: Already Paying for a Workaround
            </h3>
            <p style={{ margin: '0 0 12px 0', fontSize: '14px', color: '#0D47A1' }}>
              <strong>What it is:</strong> They spend money solving this problem today (even if badly).
            </p>
            <p style={{ margin: '0 0 12px 0', fontSize: '14px', color: '#0D47A1' }}>
              <strong>Example:</strong> "We pay £500/month to three different freelancers because no single tool does what we need." (Translation: budget exists; they're frustrated with current solution; you have a path to a sale.)
            </p>
            <p style={{ margin: '0', fontSize: '14px', color: '#0D47A1' }}>
              <strong>Why it matters:</strong> If they're paying today, they'll pay you tomorrow (just better/faster).
            </p>
          </div>

          <div style={{ backgroundColor: '#F3E5F5', borderLeft: '4px solid #6A1B9A', padding: '20px', borderRadius: '8px' }}>
            <h3 style={{ fontSize: '18px', fontWeight: '700', color: '#6A1B9A', margin: '0 0 12px 0' }}>
              Evidence Type 2: Active, Intense Pain
            </h3>
            <p style={{ margin: '0 0 12px 0', fontSize: '14px', color: '#4A148C' }}>
              <strong>What it is:</strong> They spend significant time solving this manually, and it's killing them.
            </p>
            <p style={{ margin: '0 0 12px 0', fontSize: '14px', color: '#4A148C' }}>
              <strong>Example:</strong> "I spend 10 hours/week managing this manually. I'd pay for something that cuts that in half." (But only if they're desperate enough to pay now, not "when it's ready".)
            </p>
            <p style={{ margin: '0', fontSize: '14px', color: '#4A148C' }}>
              <strong>Why it matters:</strong> Intense pain = willingness to pay + speed of purchase.
            </p>
          </div>

          <div style={{ backgroundColor: '#E0F2F1', borderLeft: '4px solid #00695C', padding: '20px', borderRadius: '8px' }}>
            <h3 style={{ fontSize: '18px', fontWeight: '700', color: '#00695C', margin: '0 0 12px 0' }}>
              Evidence Type 3: Recent Search Intent
            </h3>
            <p style={{ margin: '0 0 12px 0', fontSize: '14px', color: '#004D40' }}>
              <strong>What it is:</strong> They've been looking for your solution recently (Google, Twitter, Reddit, Slack).
            </p>
            <p style={{ margin: '0 0 12px 0', fontSize: '14px', color: '#004D40' }}>
              <strong>Example:</strong> You find 5 Reddit posts from last week: "Anyone know a tool that does X?" (Translation: active seeking; short window to capture them.)
            </p>
            <p style={{ margin: '0', fontSize: '14px', color: '#004D40' }}>
              <strong>Why it matters:</strong> Search intent = top-of-funnel demand. If they're searching, some are ready to buy.
            </p>
          </div>
        </div>

        <div style={{ backgroundColor: '#FFEBEE', borderLeft: '4px solid #C62828', padding: '16px', borderRadius: '4px', marginBottom: '32px' }}>
          <p style={{ margin: '0 0 8px 0', fontWeight: '700', color: '#C62828' }}>Forbidden Evidence (Doesn't Count)</p>
          <ul style={{ paddingLeft: '24px', margin: '8px 0 0 0', fontSize: '14px', color: '#C62828' }}>
            <li style={{ marginBottom: '6px' }}>"I would pay for that..." (hypothetical, not commitment)</li>
            <li style={{ marginBottom: '6px' }}>"That sounds interesting..." (curiosity, not intent)</li>
            <li style={{ marginBottom: '6px' }}>"Let me know when it's ready..." (politeness, not purchase)</li>
            <li style={{ marginBottom: '6px' }}>50 survey responses (7 will say yes, 0 will buy)</li>
            <li>"No competitors for this" (usually = no market, not blue ocean)</li>
          </ul>
        </div>

        <div style={{ backgroundColor: '#E8F5E9', borderLeft: '4px solid #2E7D32', padding: '16px', borderRadius: '4px' }}>
          <p style={{ margin: '0 0 8px 0', fontWeight: '700', color: '#1B5E20' }}>The Validation Threshold</p>
          <p style={{ margin: '0', fontSize: '14px', color: '#2E7D32' }}>
            You need <strong>one of these signals from 3 people.</strong> Not 50. Not 20. Three pre-payments or three active pains = demand is validated. Zero in 48 hours = pivot or kill.
          </p>
        </div>
      </section>

      {/* Section 2: Shadow Offer */}
      <section style={{ marginBottom: '64px' }}>
        <h2 style={{ fontSize: '32px', fontWeight: '700', color: '#2D3436', marginBottom: '24px' }}>
          Section 2: The Shadow Offer Method (Sell Manual Before Building Automated)
        </h2>
        <p style={{ marginBottom: '24px' }}>
          The Shadow Offer is the ultimate validation tool. It's the manual, white-glove version of your product. You sell it first. If it sells, you know there's demand. Then you can build the automated version.
        </p>

        <h3 style={{ fontSize: '22px', fontWeight: '700', color: '#2D3436', marginBottom: '16px' }}>
          Why the Shadow Works
        </h3>
        <ul style={{ paddingLeft: '24px', marginBottom: '32px' }}>
          <li style={{ marginBottom: '12px' }}>
            <strong>No product required.</strong> You deliver manually. Takes 2 hours, not 2 months to build.
          </li>
          <li style={{ marginBottom: '12px' }}>
            <strong>Customer-inclusive validation.</strong> You learn what they actually need (not what you think they need).
          </li>
          <li style={{ marginBottom: '12px' }}>
            <strong>Natural upsell.</strong> Once they see the value, they ask: "Can you do this faster?" That's your product.
          </li>
          <li style={{ marginBottom: '12px' }}>
            <strong>Revenue from day 1.</strong> You're not building for free; you're getting paid to validate.
          </li>
        </ul>

        <h3 style={{ fontSize: '22px', fontWeight: '700', color: '#2D3436', marginBottom: '16px' }}>
          The Shadow Offer Script
        </h3>
        <div style={{ backgroundColor: '#F5F5F5', padding: '20px', borderRadius: '8px', marginBottom: '32px', fontFamily: 'monospace', fontSize: '13px', lineHeight: '1.6' }}>
          "Hi [Name],<br/>
          <br/>
          I'm helping people solve [specific pain] more efficiently. Right now, I'm taking on 3 beta clients this week at £[discounted price] instead of my normal £[full price].<br/>
          <br/>
          Here's what I deliver: [specific output, e.g., "A custom social media audit and 30-day posting plan"]. Takes me 4–6 hours. I need payment today to hold your spot.<br/>
          <br/>
          Interested? I can start on Monday if you're in.<br/>
          <br/>
          [Your name]"
        </div>

        <h3 style={{ fontSize: '22px', fontWeight: '700', color: '#2D3436', marginBottom: '16px' }}>
          Pricing the Shadow Offer
        </h3>
        <div style={{ backgroundColor: '#F5F5F5', padding: '20px', borderRadius: '8px', marginBottom: '32px' }}>
          <p style={{ margin: '0 0 12px 0', fontWeight: '600', color: '#2D3436' }}>
            Price it to validate, not to profit (yet).
          </p>
          <ul style={{ paddingLeft: '24px', margin: '0', fontSize: '14px' }}>
            <li style={{ marginBottom: '8px' }}>
              <strong>Service shadow:</strong> £300–£600 (covers your 4–6 hours at £50–£100/hour)
            </li>
            <li style={{ marginBottom: '8px' }}>
              <strong>SaaS shadow (manual):</strong> £500–£1,000/month for "concierge" version (you do manually what software will do later)
            </li>
            <li style={{ marginBottom: '8px' }}>
              <strong>Product shadow:</strong> 50% discount on the future product for pre-purchase (£100 beta price becomes £200 at launch)
            </li>
            <li>
              <strong>Content shadow:</strong> £100 for "early cohort access" before launch (to 5 people)
            </li>
          </ul>
        </div>

        <div style={{ backgroundColor: '#E8F5E9', borderLeft: '4px solid #2E7D32', padding: '16px', borderRadius: '4px' }}>
          <p style={{ margin: '0', fontSize: '14px', color: '#2E7D32' }}>
            <strong>Key point:</strong> If you can't sell the shadow at £300–£600 (a massive discount), you can't sell the full product at £1,500. This tells you whether the problem is the idea or your sales pitch.
          </p>
        </div>
      </section>

      {/* Section 3: 48-Hour Sprint */}
      <section style={{ marginBottom: '64px' }}>
        <h2 style={{ fontSize: '32px', fontWeight: '700', color: '#2D3436', marginBottom: '24px' }}>
          Section 3: The 48-Hour Validation Sprint (Execution Map)
        </h2>
        <p style={{ marginBottom: '24px' }}>
          You have 48 hours maximum. Go.
        </p>

        <div style={{ backgroundColor: '#E3F2FD', borderRadius: '12px', padding: '24px', marginBottom: '32px' }}>
          <h3 style={{ fontSize: '18px', fontWeight: '700', color: '#1565C0', marginBottom: '16px' }}>
            Hours 0–2: The Workaround Audit
          </h3>
          <p style={{ marginBottom: '12px' }}>
            <strong>Goal:</strong> Find 5 pieces of evidence that someone is solving this problem (badly) right now.
          </p>
          <div style={{ marginBottom: '16px' }}>
            <p style={{ marginBottom: '8px', fontWeight: '600', color: '#2D3436' }}>Where to look:</p>
            <ul style={{ paddingLeft: '24px', fontSize: '14px' }}>
              <li style={{ marginBottom: '6px' }}>Reddit (r/[industry], r/smallbusiness, r/solopreneur)</li>
              <li style={{ marginBottom: '6px' }}>IndieHackers "Ideas & Validation" forum</li>
              <li style={{ marginBottom: '6px' }}>Twitter complaints or questions (search: "I need help with [X]" or "anyone know a tool for [X]?")</li>
              <li style={{ marginBottom: '6px' }}>Facebook groups in your niche</li>
              <li>Slack communities (Slack keyword search: "workaround" or "tool that does [X]")</li>
            </ul>
          </div>
          <p style={{ marginBottom: '8px', fontWeight: '600', color: '#2D3436' }}>Action:</p>
          <p style={{ margin: '0', fontSize: '14px' }}>
            Screenshot 5 examples of your target customer expressing the pain OR describing a workaround. Save to a folder titled "Demand Evidence."
          </p>
        </div>

        <div style={{ backgroundColor: '#F3E5F5', borderRadius: '12px', padding: '24px', marginBottom: '32px' }}>
          <h3 style={{ fontSize: '18px', fontWeight: '700', color: '#6A1B9A', marginBottom: '16px' }}>
            Hours 2–6: The Shadow Offer Design
          </h3>
          <p style={{ marginBottom: '12px' }}>
            <strong>Goal:</strong> Write down exactly what you'll deliver and at what price.
          </p>
          <div style={{ marginBottom: '16px', backgroundColor: '#FFF', padding: '12px', borderRadius: '6px' }}>
            <p style={{ margin: '0 0 8px 0', fontWeight: '600', color: '#2D3436' }}>Use this template:</p>
            <p style={{ margin: '0', fontSize: '13px', fontFamily: 'monospace' }}>
              "I'll deliver [specific output], covering [specific scope]. Timeframe: [X days]. Price: £[X]. Payment due upfront to hold the spot."
            </p>
          </div>
          <p style={{ marginBottom: '8px', fontWeight: '600', color: '#2D3436' }}>Example offers:</p>
          <ul style={{ paddingLeft: '24px', fontSize: '14px' }}>
            <li style={{ marginBottom: '6px' }}>"LinkedIn profile audit: £400. 48-hour turnaround. 1-page report + 15-min call."</li>
            <li style={{ marginBottom: '6px' }}>"Customer research sprint: £600/week. I interview 10 of your customers, deliver findings."</li>
            <li>"Social media strategy setup: £500. 30-day posting plan + 3 templates. Delivered this week."</li>
          </ul>
          <p style={{ marginBottom: '12px', marginTop: '16px', fontWeight: '600', color: '#2D3436' }}>Action:</p>
          <p style={{ margin: '0', fontSize: '14px' }}>
            Write the offer. Post it in your Lean Canvas doc or Notion. Make sure you can deliver it in the timeframe you promise (overestimate buffer by 50%).
          </p>
        </div>

        <div style={{ backgroundColor: '#E0F2F1', borderRadius: '12px', padding: '24px', marginBottom: '32px' }}>
          <h3 style={{ fontSize: '18px', fontWeight: '700', color: '#00695C', marginBottom: '16px' }}>
            Hours 6–24: The Outreach (10 Conversations)
          </h3>
          <p style={{ marginBottom: '12px' }}>
            <strong>Goal:</strong> Send your Shadow Offer to 10 warm contacts who fit your target profile.
          </p>
          <p style={{ marginBottom: '12px', fontWeight: '600', color: '#2D3436' }}>Where to find them:</p>
          <ul style={{ paddingLeft: '24px', fontSize: '14px', marginBottom: '16px' }}>
            <li style={{ marginBottom: '6px' }}>LinkedIn (people in your network + target titles/companies)</li>
            <li style={{ marginBottom: '6px' }}>Slack communities (direct message members)</li>
            <li style={{ marginBottom: '6px' }}>People from Reddit/Twitter who posted the pain</li>
            <li>Your email list or previous clients</li>
          </ul>
          <p style={{ marginBottom: '8px', fontWeight: '600', color: '#2D3436' }}>Send the script:</p>
          <div style={{ backgroundColor: '#FFF', padding: '12px', borderRadius: '6px', marginBottom: '12px', fontFamily: 'monospace', fontSize: '13px' }}>
            "Hi [Name], I'm doing [shadow offer]. Normally £[X], but I'm taking 3 beta clients at £[discount]. Need payment today to hold your spot. In?"
          </div>
          <p style={{ marginBottom: '8px', fontWeight: '600', color: '#2D3436' }}>What to expect:</p>
          <ul style={{ paddingLeft: '24px', fontSize: '14px' }}>
            <li style={{ marginBottom: '6px' }}>30% no response (expected)</li>
            <li style={{ marginBottom: '6px' }}>30% "that's interesting!" (not a buyer)</li>
            <li style={{ marginBottom: '6px' }}>20% "ask me in 2 weeks" (not ready)</li>
            <li>20% "I'm in" (these are your validators)</li>
          </ul>
          <p style={{ marginTop: '16px', marginBottom: '8px', fontWeight: '600', color: '#2D3436' }}>Action:</p>
          <p style={{ margin: '0', fontSize: '14px' }}>
            Send 10 outreach messages. Track responses. Your goal: 1–3 "yes" answers with payment commitment.
          </p>
        </div>

        <div style={{ backgroundColor: '#FFF3E0', borderRadius: '12px', padding: '24px', marginBottom: '32px' }}>
          <h3 style={{ fontSize: '18px', fontWeight: '700', color: '#E65100', marginBottom: '16px' }}>
            Hours 24–48: The Pivot Decision
          </h3>
          <p style={{ marginBottom: '16px' }}>
            <strong>Time to decide:</strong> We have data now.
          </p>
          <div style={{ display: 'grid', gap: '16px' }}>
            <div style={{ backgroundColor: '#FFF', padding: '12px', borderRadius: '6px' }}>
              <p style={{ margin: '0 0 6px 0', fontWeight: '700', color: '#E65100' }}>If you got 2–3 payments:</p>
              <p style={{ margin: '0', fontSize: '14px' }}>✅ Demand is validated. Move to <Link href="/offer/from-scratch" style={{ color: '#00B894', textDecoration: 'none' }}>productization</Link>. You already have the Shadow Offer; now build the automated version or scale it.</p>
            </div>
            <div style={{ backgroundColor: '#FFF', padding: '12px', borderRadius: '6px' }}>
              <p style={{ margin: '0 0 6px 0', fontWeight: '700', color: '#E65100' }}>If you got 0–1 payments:</p>
              <p style={{ margin: '0', fontSize: '14px' }}>Either your sales pitch was weak OR demand doesn't exist. You have two options:</p>
            </div>
          </div>
          <div style={{ marginTop: '16px', paddingLeft: '24px' }}>
            <p style={{ marginBottom: '12px' }}>
              <strong>Option 1: Pivot the Offer</strong><br/>
              Same problem, different packaging. "I'll do the audit as a SaaS instead of a service" or "I'll create a template instead of 1:1 consulting." Try the Shadow Offer again with the new format.
            </p>
            <p style={{ marginBottom: '12px' }}>
              <strong>Option 2: Pivot the Niche</strong><br/>
              Same offer, richer target. "Instead of small businesses, let me target consultants specifically." Re-run the 48-hour sprint with a more specific audience.
            </p>
            <p>
              <strong>Option 3: Kill It</strong><br/>
              This idea is not the one. Move to the next Cobblestone idea from <Link href="/offer/from-scratch" style={{ color: '#00B894', textDecoration: 'none' }}>from-scratch</Link>. No shame. You validated in 48 hours instead of 2 months building.
            </p>
          </div>
        </div>
      </section>

      {/* Section 4: Model-Specific */}
      <section style={{ marginBottom: '64px' }}>
        <h2 style={{ fontSize: '32px', fontWeight: '700', color: '#2D3436', marginBottom: '24px' }}>
          Section 4: Model-Specific Shadow Offers
        </h2>
        <p style={{ marginBottom: '24px' }}>
          The Shadow Offer changes based on your business model. Here's how to validate each:
        </p>

        <div style={{ display: 'grid', gap: '20px' }}>
          <div style={{ backgroundColor: '#E3F2FD', borderLeft: '4px solid #1565C0', padding: '20px', borderRadius: '8px' }}>
            <h3 style={{ fontSize: '16px', fontWeight: '700', color: '#1565C0', margin: '0 0 12px 0' }}>
              Service (Consulting, Freelancing, Done-for-You)
            </h3>
            <p style={{ margin: '0 0 8px 0', fontSize: '14px', color: '#0D47A1' }}>
              <strong>Shadow Offer:</strong> 1-day diagnostic audit at 50% discount.
            </p>
            <p style={{ margin: '0 0 8px 0', fontSize: '14px', color: '#0D47A1' }}>
              <strong>Example:</strong> "Marketing audit: £500 (normally £1,000). 48-hour turnaround. You get: competitor analysis, messaging gaps, 3 quick wins. Payment due today."
            </p>
            <p style={{ margin: '0', fontSize: '14px', color: '#0D47A1' }}>
              <strong>Validation success:</strong> 1 person pays = service shadow works. Now you can sell 5-day implementation projects at £5k+.
            </p>
          </div>

          <div style={{ backgroundColor: '#F3E5F5', borderLeft: '4px solid #6A1B9A', padding: '20px', borderRadius: '8px' }}>
            <h3 style={{ fontSize: '16px', fontWeight: '700', color: '#6A1B9A', margin: '0 0 12px 0' }}>
              SaaS / Subscription
            </h3>
            <p style={{ margin: '0 0 8px 0', fontSize: '14px', color: '#4A148C' }}>
              <strong>Shadow Offer:</strong> "Concierge MVP"—you manually deliver what the software will do for a monthly fee.
            </p>
            <p style={{ margin: '0 0 8px 0', fontSize: '14px', color: '#4A148C' }}>
              <strong>Example:</strong> "Social media automation: £500/month. I manually schedule 30 days of posts for you. 3-month minimum. Payment due today for month 1."
            </p>
            <p style={{ margin: '0', fontSize: '14px', color: '#4A148C' }}>
              <strong>Validation success:</strong> 1 person pays £500/month = your SaaS solves a real problem at a real price point.
            </p>
          </div>

          <div style={{ backgroundColor: '#E0F2F1', borderLeft: '4px solid #00695C', padding: '20px', borderRadius: '8px' }}>
            <h3 style={{ fontSize: '16px', fontWeight: '700', color: '#00695C', margin: '0 0 12px 0' }}>
              Digital Product (Course, Template, E-Book)
            </h3>
            <p style={{ margin: '0 0 8px 0', fontSize: '14px', color: '#004D40' }}>
              <strong>Shadow Offer:</strong> Pre-sale of the beta version before you build it.
            </p>
            <p style={{ margin: '0 0 8px 0', fontSize: '14px', color: '#004D40' }}>
              <strong>Example:</strong> "Email marketing course (beta): £99. You get lifetime access once launched (normally £199). Delivered in 30 days. Payment due today."
            </p>
            <p style={{ margin: '0', fontSize: '14px', color: '#004D40' }}>
              <strong>Validation success:</strong> 3 people pre-pay = you have budget to build + proof of demand.
            </p>
          </div>

          <div style={{ backgroundColor: '#FFF3E0', borderLeft: '4px solid #F57C00', padding: '20px', borderRadius: '8px' }}>
            <h3 style={{ fontSize: '16px', fontWeight: '700', color: '#E65100', margin: '0 0 12px 0' }}>
              Content / Newsletter / Community
            </h3>
            <p style={{ margin: '0 0 8px 0', fontSize: '14px', color: '#E65100' }}>
              <strong>Shadow Offer:</strong> Paid cohort entry to exclusive content or community.
            </p>
            <p style={{ margin: '0 0 8px 0', fontSize: '14px', color: '#E65100' }}>
              <strong>Example:</strong> "Founder cohort (Cohort 1): £197. 12-week program, weekly live calls + Slack community. Payment due today for Cohort 1 (closes Friday)."
            </p>
            <p style={{ margin: '0', fontSize: '14px', color: '#E65100' }}>
              <strong>Validation success:</strong> 3 people pre-pay = you have audience demand + revenue to sustain content creation.
            </p>
          </div>
        </div>
      </section>

      {/* Section 5: Red Flags */}
      <section style={{ marginBottom: '64px' }}>
        <h2 style={{ fontSize: '32px', fontWeight: '700', color: '#C62828', marginBottom: '24px' }}>
          Section 5: The Red Flags (When to Kill This Idea)
        </h2>
        <p style={{ marginBottom: '24px' }}>
          During your 48-hour sprint, watch for these signals that this isn't the right idea:
        </p>

        <div style={{ display: 'grid', gap: '16px' }}>
          <div style={{ backgroundColor: '#FFEBEE', borderLeft: '4px solid #C62828', padding: '16px', borderRadius: '4px' }}>
            <p style={{ margin: '0 0 6px 0', fontWeight: '700', color: '#C62828' }}>🚩 "Everyone needs this"</p>
            <p style={{ margin: '0', fontSize: '14px', color: '#2D3436' }}>
              If your target is too broad ("everyone"), there's no demand segment. Specificity = demand. "Small businesses" = vague. "Freelance copywriters aged 25–40 in the UK" = specific. Narrow until 10 people in 48 hours is realistic to reach.
            </p>
          </div>

          <div style={{ backgroundColor: '#FFEBEE', borderLeft: '4px solid #C62828', padding: '16px', borderRadius: '4px' }}>
            <p style={{ margin: '0 0 6px 0', fontWeight: '700', color: '#C62828' }}>🚩 "No competitors"</p>
            <p style={{ margin: '0', fontSize: '14px', color: '#2D3436' }}>
              Usually means no paying market, not blue ocean. If no one else is solving this, ask: is anyone even looking? (Check Google search volume, Reddit posts, etc.) If you're the only one in the space and zero people will pay the Shadow Offer, it's not a market—it's a hobby.
            </p>
          </div>

          <div style={{ backgroundColor: '#FFEBEE', borderLeft: '4px solid #C62828', padding: '16px', borderRadius: '4px' }}>
            <p style={{ margin: '0 0 6px 0', fontWeight: '700', color: '#C62828' }}>🚩 "I'll use it myself"</p>
            <p style={{ margin: '0', fontSize: '14px', color: '#2D3436' }}>
              Founder pain is not market pain. You have the problem doesn't = enough people have the problem. Use the 48-hour sprint above. If 10 outreach messages yield zero payments, your pain is not shared.
            </p>
          </div>

          <div style={{ backgroundColor: '#FFEBEE', borderLeft: '4px solid #C62828', padding: '16px', borderRadius: '4px' }}>
            <p style={{ margin: '0 0 6px 0', fontWeight: '700', color: '#C62828' }}>🚩 Everyone says "Send updates when you're ready"</p>
            <p style={{ margin: '0', fontSize: '14px', color: '#2D3436' }}>
              Politeness, not intent. If 10 people say this and zero pre-pay, they're interested, not invested. Kill the idea or pivot to a hotter problem.
            </p>
          </div>

          <div style={{ backgroundColor: '#FFEBEE', borderLeft: '4px solid #C62828', padding: '16px', borderRadius: '4px' }}>
            <p style={{ margin: '0 0 6px 0', fontWeight: '700', color: '#C62828' }}>🚩 You feel bad asking for money</p>
            <p style={{ margin: '0', fontSize: '14px', color: '#2D3436' }}>
              That's a sign. You don't have conviction that the problem matters. Either get more conviction by talking to more people, or kill the idea. You can't build a business on an idea you don't believe in.
            </p>
          </div>
        </div>
      </section>

      {/* Next Steps CTA */}
      <section style={{ marginBottom: '32px', backgroundColor: '#E3F2FD', padding: '32px', borderRadius: '12px', textAlign: 'center' }}>
        <h2 style={{ fontSize: '24px', fontWeight: '700', color: '#1565C0', marginBottom: '16px' }}>
          Your Next Step: Start the 48-Hour Sprint
        </h2>
        <p style={{ fontSize: '16px', color: '#0D47A1', lineHeight: '1.8', marginBottom: '24px' }}>
          Stop researching. Start selling. Find 3 people who will pre-pay for your Shadow Offer in the next 48 hours. If you can't, you know the problem. Pivot or kill before you waste 2 months building.
        </p>
        <div style={{ display: 'grid', gap: '12px', justifyContent: 'center' }}>
          <Link href="/offer/from-scratch" style={{ display: 'inline-block', padding: '12px 24px', backgroundColor: '#1565C0', color: '#FFF', textDecoration: 'none', borderRadius: '6px', fontWeight: '600' }}>
            Go to Cobblestone Method (Next: Design the Offer)
          </Link>
          <Link href="/marketing/first-customers" style={{ display: 'inline-block', padding: '12px 24px', backgroundColor: 'transparent', color: '#1565C0', textDecoration: 'none', borderRadius: '6px', fontWeight: '600', border: '2px solid #1565C0' }}>
            How to Find & Reach Your 10 Outreach Targets
          </Link>
        </div>
      </section>

      {/* Footer */}
      <section style={{ backgroundColor: '#F5F5F5', padding: '24px', borderRadius: '8px', textAlign: 'center' }}>
        <p style={{ fontSize: '14px', color: '#636E72', margin: '0' }}>
          <strong>Remember:</strong> The only valid market research is a transaction attempt. Everything else is entertainment.
        </p>
      </section>
    </div>
  );
}
