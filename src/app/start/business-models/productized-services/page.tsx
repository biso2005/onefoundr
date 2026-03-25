'use client';

import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import NewsletterCTA from '@/components/NewsletterCTA';

export default function ProductizedServicesPage() {
  const capacityComparison = [
    {
      model: 'Unlimited Retainer',
      monthlyPrice: '£2,000',
      expectedHours: '40 hours (open-ended)',
      actualHourlyRate: '£50/hour',
      viability: '❌ Unsustainable',
      result: 'One client consumes you. Burnout by month 2.',
    },
    {
      model: 'Fixed Container (× 4)',
      monthlyPrice: '£1,200 × 4 = £4,800',
      expectedHours: '8 hours/week × 4 = 32 hours',
      actualHourlyRate: '£150/hour',
      viability: '✅ Sustainable',
      result: 'Four clients serve you well. Profit margins exist.',
    },
  ];

  const containerTypes = [
    {
      type: 'The Sprint (Fixed Outcome)',
      scope: 'Complete deliverable: brand identity, website, email sequence',
      timeline: '5 business days',
      price: '£2,400',
      soloFit: 'Batched delivery. One sprint per week per client.',
      ideal: 'Clients who need "done" and then silent.',
    },
    {
      type: 'The Retainer Block (Fixed Time)',
      scope: '8 hours per month of work from a prioritized queue',
      timeline: 'Work every Friday (or your chosen day)',
      price: '£1,200/month',
      soloFit: 'Calendar block protects your other 4 days.',
      ideal: 'Clients who need ongoing tweaks but are OK with batching.',
    },
  ];

  const stayInsideFence = [
    'Logo and brand colors',
    'Up to 3 design revisions (all included)',
    'Copy for homepage and about page',
    'Mobile optimization',
    'Delivery in 5 business days',
  ];

  const outsideFence = [
    'Premium photography (extra cost)',
    'Video production (separate project)',
    'Ecommerce setup (upgrade to £3,500 sprint)',
    'Rush delivery (extra 50% fee)',
    '"Just one more page" requests after delivery',
  ];

  const qualificationQuestions = [
    'Do they ask "Can you just..." before signing? (Red flag)',
    'Are they the "set it and forget it" type? (Green flag)',
    'Do they value speed over perfection? (Green flag)',
    'Do they fit your specific niche? (e.g., "SaaS only," "Shopify stores only")',
    'Can they make decisions quickly? (Or do they need internal meetings?)',
  ];

  return (
    <div style={{ maxWidth: '900px', margin: '0 auto', padding: '40px 20px', fontFamily: 'system-ui, -apple-system, sans-serif' }}>
      {/* Hero Section */}
      <section style={{ marginBottom: '48px', textAlign: 'center' }}>
        <Breadcrumbs
          items={[
            { label: 'Start Solo', href: '/start' },
            { label: 'Business Models', href: '/start/business-models' },
            { label: 'Productized Services' },
          ]}
        />
        <h1 style={{ fontSize: '42px', fontWeight: '700', color: '#2D3436', marginBottom: '16px', lineHeight: '1.2' }}>
          The Productized Service: Recurring Revenue Without the Trap
        </h1>
        <p style={{ fontSize: '18px', color: '#636E72', marginBottom: '16px', lineHeight: '1.6' }}>
          Productized services are the sweet spot: You get recurring revenue (like a retainer), but bounded scope (like a project). The secret: Everything is fixed. Fixed scope. Fixed price. Fixed timeline. No "unlimited." No client appetite that devours you.
        </p>
        <p style={{ fontSize: '16px', color: '#E65100', fontWeight: '600' }}>
          Unlimited models are traps set by agencies with teams. You are solo. You need fences.
        </p>
      </section>

      {/* Section 1: The Definition */}
      <section style={{ marginBottom: '48px' }}>
        <h2 style={{ fontSize: '32px', fontWeight: '700', color: '#2D3436', marginBottom: '24px' }}>
          Section 1: The Holy Trinity — What Productized Services Actually Are
        </h2>

        <p style={{ fontSize: '16px', color: '#636E72', marginBottom: '24px' }}>
          Productized services are not freelancing, consulting, or SaaS. They are a distinct category. Here is what makes them work:
        </p>

        <div style={{ display: 'grid', gap: '20px', marginBottom: '32px' }}>
          <div style={{ backgroundColor: '#E3F2FD', padding: '20px', borderRadius: '8px', borderLeft: '4px solid #1565C0' }}>
            <h3 style={{ fontSize: '18px', fontWeight: '700', color: '#1565C0', margin: '0 0 12px 0' }}>Fixed Scope</h3>
            <p style={{ margin: '0 0 12px 0', fontSize: '14px', color: '#0D47A1' }}>
              <strong>"I will do exactly X, not Y, not Z."</strong>
            </p>
            <p style={{ margin: '0', fontSize: '14px', color: '#636E72' }}>
              Unlike freelancing (custom per client), the deliverable is the same shape for every client. Like a restaurant menu: you all get the same size burger.
            </p>
          </div>

          <div style={{ backgroundColor: '#F3E5F5', padding: '20px', borderRadius: '8px', borderLeft: '4px solid #6A1B9A' }}>
            <h3 style={{ fontSize: '18px', fontWeight: '700', color: '#6A1B9A', margin: '0 0 12px 0' }}>Fixed Price</h3>
            <p style={{ margin: '0 0 12px 0', fontSize: '14px', color: '#4A148C' }}>
              <strong>"It costs £X, not £X/hour."</strong>
            </p>
            <p style={{ margin: '0', fontSize: '14px', color: '#636E72' }}>
              No hourly billing. No time tracking. The client pays one price. You benefit from getting faster (not penalized for speed).
            </p>
          </div>

          <div style={{ backgroundColor: '#FFF3E0', padding: '20px', borderRadius: '8px', borderLeft: '4px solid #F57C00' }}>
            <h3 style={{ fontSize: '18px', fontWeight: '700', color: '#E65100', margin: '0 0 12px 0' }}>Fixed Timeline</h3>
            <p style={{ margin: '0 0 12px 0', fontSize: '14px', color: '#BF360C' }}>
              <strong>"Delivered in Y business days."</strong>
            </p>
            <p style={{ margin: '0', fontSize: '14px', color: '#636E72' }}>
              No open-ended retainers. No "We will work on this when we have time." The client knows exactly when they get their deliverable.
            </p>
          </div>
        </div>

        <div style={{ backgroundColor: '#F5F5F5', padding: '20px', borderRadius: '8px', borderLeft: '4px solid #636E72' }}>
          <p style={{ margin: '0 0 12px 0', fontWeight: '700', color: '#2D3436' }}>
            The Solo Constraint:
          </p>
          <p style={{ margin: '0', fontSize: '14px', color: '#636E72', lineHeight: '1.6' }}>
            If the offer does not fit in a predefined calendar block (e.g., "Every Tuesday, 9am–1pm, I deliver this service"), then it is not productized—it is custom work with a retainer label. Avoid that trap.
          </p>
        </div>
      </section>

      {/* Section 2: The Capacity Math */}
      <section style={{ marginBottom: '48px' }}>
        <h2 style={{ fontSize: '32px', fontWeight: '700', color: '#2D3436', marginBottom: '24px' }}>
          Section 2: The Capacity Math — Why "Unlimited" Kills Solo Solopreneurs
        </h2>

        <p style={{ fontSize: '16px', color: '#636E72', marginBottom: '24px' }}>
          The fundamental problem with unlimited retainers: they violate the laws of time.
        </p>

        <h3 style={{ fontSize: '18px', fontWeight: '700', color: '#2D3436', marginBottom: '12px' }}>The Math (Unlimited Model):</h3>

        <div style={{ display: 'grid', gap: '12px', marginBottom: '32px' }}>
          <div style={{ backgroundColor: '#FFEBEE', padding: '16px', borderRadius: '8px', borderLeft: '3px solid #C62828' }}>
            <p style={{ margin: '0 0 4px 0', fontWeight: '700', color: '#2D3436', fontSize: '14px' }}>
              Total solo capacity: 40 hours/week
            </p>
            <p style={{ margin: '0', fontSize: '13px', color: '#636E72' }}>The absolute maximum.</p>
          </div>

          <div style={{ backgroundColor: '#FFEBEE', padding: '16px', borderRadius: '8px', borderLeft: '3px solid #C62828' }}>
            <p style={{ margin: '0 0 4px 0', fontWeight: '700', color: '#2D3436', fontSize: '14px' }}>
              Available for delivery: ~20 hours/week
            </p>
            <p style={{ margin: '0', fontSize: '13px', color: '#636E72' }}>The rest goes to admin, marketing, client management, and your sanity buffer.</p>
          </div>

          <div style={{ backgroundColor: '#FFEBEE', padding: '16px', borderRadius: '8px', borderLeft: '3px solid #C62828' }}>
            <p style={{ margin: '0 0 4px 0', fontWeight: '700', color: '#2D3436', fontSize: '14px' }}>
              "Unlimited" client demand: 20+ hours minimum
            </p>
            <p style={{ margin: '0', fontSize: '13px', color: '#636E72' }}>One client consuming your entire delivery capacity? You cannot scale. You cannot breathe.</p>
          </div>

          <div style={{ backgroundColor: '#FFEBEE', padding: '16px', borderRadius: '8px', borderLeft: '3px solid #C62828' }}>
            <p style={{ margin: '0 0 4px 0', fontWeight: '700', color: '#2D3436', fontSize: '14px' }}>
              Result: One client = Full bankruptcy by month 2.
            </p>
            <p style={{ margin: '0', fontSize: '13px', color: '#636E72' }}>You are working full hours for £2,000/month = £50/hour (below minimum wage).</p>
          </div>
        </div>

        <h3 style={{ fontSize: '18px', fontWeight: '700', color: '#2D3436', marginBottom: '16px' }}>The Comparison Table:</h3>

        <div style={{ overflowX: 'auto', marginBottom: '32px' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ backgroundColor: '#F5F5F5', borderBottom: '2px solid #2D3436' }}>
                <th style={{ padding: '12px', textAlign: 'left', fontWeight: '700', color: '#2D3436' }}>Model</th>
                <th style={{ padding: '12px', textAlign: 'left', fontWeight: '700', color: '#2D3436' }}>Monthly Revenue</th>
                <th style={{ padding: '12px', textAlign: 'left', fontWeight: '700', color: '#2D3436' }}>Hours/Week</th>
                <th style={{ padding: '12px', textAlign: 'left', fontWeight: '700', color: '#2D3436' }}>Hourly Rate</th>
                <th style={{ padding: '12px', textAlign: 'left', fontWeight: '700', color: '#2D3436' }}>Solo Viability</th>
              </tr>
            </thead>
            <tbody>
              {capacityComparison.map((row, idx) => (
                <tr key={idx} style={{ borderBottom: '1px solid #E2E8F0', backgroundColor: idx % 2 === 0 ? '#FFFFFF' : '#F9FAFB' }}>
                  <td style={{ padding: '12px', color: '#2D3436', fontWeight: '500' }}>{row.model}</td>
                  <td style={{ padding: '12px', color: '#636E72' }}>{row.monthlyPrice}</td>
                  <td style={{ padding: '12px', color: '#636E72' }}>{row.expectedHours}</td>
                  <td style={{ padding: '12px', fontWeight: '600', color: row.viability.includes('❌') ? '#C62828' : '#2E7D32' }}>
                    {row.actualHourlyRate}
                  </td>
                  <td style={{ padding: '12px', fontWeight: '600', color: row.viability.includes('❌') ? '#C62828' : '#2E7D32' }}>
                    {row.viability}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div style={{ backgroundColor: '#E8F5E9', borderLeft: '4px solid #2E7D32', padding: '20px', borderRadius: '8px' }}>
          <p style={{ margin: '0 0 12px 0', fontWeight: '700', color: '#1B5E20' }}>
            The Fixed Container Wins:
          </p>
          <p style={{ margin: '0', fontSize: '14px', color: '#2E7D32', lineHeight: '1.6' }}>
            <strong>4 clients × £1,200/month = £4,800/month.</strong> 4 clients × 8 hours = 32 hours. That is £150/hour (sustainable). You have breathing room. You have profit margins. You can say no.
          </p>
        </div>
      </section>

      {/* Section 3: The Container Types */}
      <section style={{ marginBottom: '48px' }}>
        <h2 style={{ fontSize: '32px', fontWeight: '700', color: '#2D3436', marginBottom: '24px' }}>
          Section 3: The Two Container Types — Sprint vs Retainer
        </h2>

        <p style={{ fontSize: '16px', color: '#636E72', marginBottom: '24px' }}>
          Productized services come in two flavors. Pick the one that fits your capacity.
        </p>

        {containerTypes.map((container, idx) => (
          <div key={idx} style={{ backgroundColor: 'white', border: '2px solid #E2E8F0', padding: '24px', borderRadius: '8px', marginBottom: '24px' }}>
            <h3 style={{ fontSize: '18px', fontWeight: '700', color: '#2D3436', margin: '0 0 16px 0' }}>
              {container.type}
            </h3>

            <div style={{ display: 'grid', gap: '12px' }}>
              <div>
                <p style={{ margin: '0 0 4px 0', fontSize: '12px', fontWeight: '600', color: '#636E72', textTransform: 'uppercase' }}>
                  Scope
                </p>
                <p style={{ margin: '0', fontSize: '14px', color: '#2D3436' }}>{container.scope}</p>
              </div>

              <div>
                <p style={{ margin: '0 0 4px 0', fontSize: '12px', fontWeight: '600', color: '#636E72', textTransform: 'uppercase' }}>
                  Timeline
                </p>
                <p style={{ margin: '0', fontSize: '14px', color: '#2D3436' }}>{container.timeline}</p>
              </div>

              <div>
                <p style={{ margin: '0 0 4px 0', fontSize: '12px', fontWeight: '600', color: '#636E72', textTransform: 'uppercase' }}>
                  Price
                </p>
                <p style={{ margin: '0', fontSize: '14px', fontWeight: '600', color: '#2E7D32' }}>{container.price}</p>
              </div>

              <div style={{ backgroundColor: '#F5F5F5', padding: '12px', borderRadius: '6px' }}>
                <p style={{ margin: '0 0 4px 0', fontSize: '12px', fontWeight: '600', color: '#636E72', textTransform: 'uppercase' }}>
                  Solo Fit
                </p>
                <p style={{ margin: '0', fontSize: '14px', color: '#2D3436' }}>{container.soloFit}</p>
              </div>

              <div style={{ backgroundColor: '#FFF3E0', padding: '12px', borderRadius: '6px' }}>
                <p style={{ margin: '0 0 4px 0', fontSize: '12px', fontWeight: '600', color: '#636E72', textTransform: 'uppercase' }}>
                  Ideal Client
                </p>
                <p style={{ margin: '0', fontSize: '14px', color: '#2D3436' }}>{container.ideal}</p>
              </div>
            </div>
          </div>
        ))}

        <div style={{ backgroundColor: '#F5F5F5', padding: '16px', borderRadius: '8px', borderLeft: '4px solid #636E72' }}>
          <p style={{ margin: '0 0 12px 0', fontWeight: '700', color: '#2D3436' }}>
            Key Distinction:
          </p>
          <p style={{ margin: '0', fontSize: '14px', color: '#636E72' }}>
            "Unlimited requests per month" vs "8-hour month block." The latter caps the appetite. The client gets your time, nothing more—no guilt, no overwork.
          </p>
        </div>
      </section>

      {/* Section 4: The Scope Fence */}
      <section style={{ marginBottom: '48px' }}>
        <h2 style={{ fontSize: '32px', fontWeight: '700', color: '#2D3436', marginBottom: '24px' }}>
          Section 4: The Scope Fence — Your Anti-Creep Weapon
        </h2>

        <p style={{ fontSize: '16px', color: '#636E72', marginBottom: '24px' }}>
          Scope creep kills productized services. Without a fence, every product becomes custom work within 30 days. Here is your defense.
        </p>

        <h3 style={{ fontSize: '18px', fontWeight: '700', color: '#2D3436', marginBottom: '16px' }}>The Fence Concept:</h3>

        <div style={{ backgroundColor: '#E3F2FD', padding: '20px', borderRadius: '8px', marginBottom: '24px', textAlign: 'center' }}>
          <p style={{ margin: '0 0 16px 0', fontSize: '14px', color: '#1565C0', fontWeight: '700' }}>
            INSIDE THE FENCE ✓ (Included in £X price)
          </p>
          <div style={{ display: 'grid', gap: '8px', marginBottom: '20px' }}>
            {stayInsideFence.map((item, idx) => (
              <div key={idx} style={{ backgroundColor: '#FFF', padding: '12px', borderRadius: '6px', fontSize: '14px', color: '#2D3436' }}>
                ✓ {item}
              </div>
            ))}
          </div>
        </div>

        <div style={{ textAlign: 'center', margin: '32px 0', fontSize: '20px', fontWeight: '700', color: '#2D3436' }}>
          — FENCE —
        </div>

        <div style={{ backgroundColor: '#FFEBEE', padding: '20px', borderRadius: '8px', marginBottom: '24px', textAlign: 'center' }}>
          <p style={{ margin: '0 0 16px 0', fontSize: '14px', color: '#C62828', fontWeight: '700' }}>
            OUTSIDE THE FENCE ✗ (Separate project or upgrade)
          </p>
          <div style={{ display: 'grid', gap: '8px' }}>
            {outsideFence.map((item, idx) => (
              <div key={idx} style={{ backgroundColor: '#FFF', padding: '12px', borderRadius: '6px', fontSize: '14px', color: '#2D3436' }}>
                ✗ {item}
              </div>
            ))}
          </div>
        </div>

        <h3 style={{ fontSize: '18px', fontWeight: '700', color: '#2D3436', marginBottom: '16px' }}>The Script:</h3>

        <div style={{ backgroundColor: '#F5F5F5', padding: '16px', borderRadius: '8px', borderLeft: '4px solid #636E72', marginBottom: '24px', fontFamily: 'monospace', fontSize: '13px', lineHeight: '1.8' }}>
          <p style={{ margin: '0 0 8px 0', color: '#2D3436' }}>
            Client: "Can we add a video to the homepage?"
          </p>
          <p style={{ margin: '0', color: '#2E7D32', fontWeight: '600' }}>
            You: "That request lives outside the container. I can handle that as a separate £1,200 project next week, or you can upgrade to the [Higher Tier] container for £1,800/month. Which works better?"
          </p>
        </div>

        <div style={{ backgroundColor: '#E8F5E9', borderLeft: '4px solid #2E7D32', padding: '16px', borderRadius: '8px' }}>
          <p style={{ margin: '0', fontSize: '14px', color: '#1B5E20' }}>
            <strong>Solo Survival:</strong> Without this fence, you will say "yes" to scope creep, work 60 hours for £1,200, and quit by month 3. The fence is not rude—it is survival.
          </p>
        </div>
      </section>

      {/* Section 5: The Solo Calendar */}
      <section style={{ marginBottom: '48px' }}>
        <h2 style={{ fontSize: '32px', fontWeight: '700', color: '#2D3436', marginBottom: '24px' }}>
          Section 5: The Solo Calendar — How to Stack Clients
        </h2>

        <p style={{ fontSize: '16px', color: '#636E72', marginBottom: '24px' }}>
          The power of fixed containers: You can actually serve multiple clients without chaos.
        </p>

        <div style={{ backgroundColor: '#F5F5F5', padding: '20px', borderRadius: '8px', marginBottom: '24px' }}>
          <h4 style={{ fontSize: '16px', fontWeight: '700', color: '#2D3436', margin: '0 0 16px 0' }}>
            The Perfect Solo Week:
          </h4>

          <div style={{ display: 'grid', gap: '12px' }}>
            {[
              { day: 'Monday', activity: 'Container A (Client 1) — 8 hours', color: '#E3F2FD' },
              { day: 'Tuesday', activity: 'Container B (Client 2) — 8 hours', color: '#F3E5F5' },
              { day: 'Wednesday', activity: 'Container C (Client 3) — 8 hours', color: '#FFF3E0' },
              { day: 'Thursday', activity: 'Container D (Client 4) — 8 hours', color: '#E0F2F1' },
              { day: 'Friday', activity: 'Admin + Marketing + Buffer — 8 hours', color: '#F5F5F5' },
            ].map((slot, idx) => (
              <div key={idx} style={{ backgroundColor: slot.color, padding: '12px', borderRadius: '6px' }}>
                <p style={{ margin: '0 0 4px 0', fontWeight: '700', color: '#2D3436', fontSize: '14px' }}>
                  {slot.day}
                </p>
                <p style={{ margin: '0', color: '#636E72', fontSize: '13px' }}>
                  {slot.activity}
                </p>
              </div>
            ))}
          </div>
        </div>

        <h3 style={{ fontSize: '18px', fontWeight: '700', color: '#2D3436', marginBottom: '12px' }}>The Rule:</h3>

        <div style={{ backgroundColor: '#FFEBEE', borderLeft: '4px solid #C62828', padding: '16px', borderRadius: '8px', marginBottom: '24px' }}>
          <p style={{ margin: '0 0 12px 0', fontSize: '14px', color: '#C62828', fontWeight: '700' }}>
            Never stack containers. Never overflow.
          </p>
          <p style={{ margin: '0', fontSize: '14px', color: '#B71C1C' }}>
            If Client 1 says "I need my delivery done by Wednesday," they wait for next week or they pay for a second container (rush fee = extra £400). You do not break your other clients' trust by overworking on Monday.
          </p>
        </div>

        <h3 style={{ fontSize: '18px', fontWeight: '700', color: '#2D3436', marginBottom: '12px' }}>The GBP Reality:</h3>

        <div style={{ backgroundColor: '#E8F5E9', padding: '16px', borderRadius: '8px', borderLeft: '4px solid #2E7D32' }}>
          <p style={{ margin: '0 0 12px 0', fontSize: '14px', fontWeight: '700', color: '#1B5E20' }}>
            4 clients × £1,200/month = £4,800/month
          </p>
          <p style={{ margin: '0', fontSize: '14px', color: '#2E7D32' }}>
            That is a sustainable solo income (about £57k/year before tax). You have 32 billable hours (plenty of margin), profit margins exist, and you can say "no" to scope creep.
          </p>
        </div>
      </section>

      {/* Section 6: The Qualification Filter */}
      <section style={{ marginBottom: '48px' }}>
        <h2 style={{ fontSize: '32px', fontWeight: '700', color: '#2D3436', marginBottom: '24px' }}>
          Section 6: Client Qualification — Not Everyone Is Right for This Model
        </h2>

        <p style={{ fontSize: '16px', color: '#636E72', marginBottom: '24px' }}>
          Productized services require a specific client profile. Qualify upfront or spend 6 months fighting scope creep.
        </p>

        <h3 style={{ fontSize: '18px', fontWeight: '700', color: '#2D3436', marginBottom: '12px' }}>The Right Client Wants:</h3>

        <div style={{ display: 'grid', gap: '12px', marginBottom: '24px' }}>
          {[
            'Speed over bespoke perfection ("I just need it done")',
            'Fit a specific profile (e.g., "SaaS founders only," "Shopify stores only")',
            'No education needed ("You are the expert, I am buying")',
            'Know what they want before hiring (or they ask detailed questions upfront)',
            'Respect your timeline (they do not ask for "just one more thing")',
          ].map((criteria, idx) => (
            <div key={idx} style={{ backgroundColor: '#E8F5E9', padding: '12px', borderRadius: '6px', borderLeft: '3px solid #2E7D32' }}>
              <p style={{ margin: '0', fontSize: '14px', color: '#1B5E20' }}>✓ {criteria}</p>
            </div>
          ))}
        </div>

        <h3 style={{ fontSize: '18px', fontWeight: '700', color: '#2D3436', marginBottom: '12px' }}>The Wrong Client (Red Flags):</h3>

        <div style={{ backgroundColor: '#FFEBEE', padding: '20px', borderRadius: '8px', marginBottom: '24px' }}>
          <div style={{ display: 'grid', gap: '12px' }}>
            {qualificationQuestions.map((q, idx) => (
              <div key={idx} style={{ backgroundColor: '#FFF', padding: '12px', borderRadius: '6px', borderLeft: '3px solid #C62828' }}>
                <p style={{ margin: '0', fontSize: '14px', color: '#B71C1C' }}>❌ {q}</p>
              </div>
            ))}
          </div>
        </div>

        <div style={{ backgroundColor: '#FFF3E0', borderLeft: '4px solid #F57C00', padding: '16px', borderRadius: '8px' }}>
          <p style={{ margin: '0 0 12px 0', fontWeight: '700', color: '#E65100' }}>
            The "Wrong Client" Test:
          </p>
          <p style={{ margin: '0', fontSize: '14px', color: '#E65100' }}>
            If they ask "Can you just..." or "What if we added..." <strong>before signing</strong>—they are custom consulting clients. Refer them to a freelancer. Or quote them £3,000+ and do it custom. Do not try to productize a bespoke customer.
          </p>
        </div>
      </section>

      {/* Your Next Step */}
      <section style={{ marginBottom: '48px', backgroundColor: '#E3F2FD', padding: '32px', borderRadius: '12px' }}>
        <h2 style={{ fontSize: '28px', fontWeight: '700', color: '#1565C0', marginBottom: '16px' }}>
          Your Next Step — Design Your First Container
        </h2>
        <p style={{ fontSize: '15px', color: '#0D47A1', marginBottom: '24px', lineHeight: '1.8' }}>
          Productized services are the bridge between freelancing (custom, chaotic) and SaaS (complex, technical). You get recurring revenue, scalable delivery, and a life outside of work. But only if you stay disciplined about the fence.
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
          <Link
            href="/offer/from-scratch"
            style={{
              padding: '16px',
              backgroundColor: '#1565C0',
              borderRadius: '6px',
              textDecoration: 'none',
              color: '#FFF',
              fontWeight: '600',
              textAlign: 'center',
            }}
          >
            Design Your Container
          </Link>
          <Link
            href="/start/business-models"
            style={{
              padding: '16px',
              backgroundColor: '#FFF',
              borderRadius: '6px',
              textDecoration: 'none',
              color: '#1565C0',
              fontWeight: '600',
              textAlign: 'center',
              border: '2px solid #1565C0',
            }}
          >
            Back to Business Models
          </Link>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section style={{ marginBottom: '32px' }}>
        <p style={{ fontSize: '16px', color: '#636E72', marginBottom: '16px', lineHeight: '1.6', textAlign: 'center' }}>
          One proven strategy every Tuesday — so you can build recurring revenue without the "unlimited" trap.
        </p>
        <NewsletterCTA />
      </section>
    </div>
  );
}
