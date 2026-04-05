'use client';
import { useState } from 'react';

const DEALS = [
  {
    id: 'hyperloan',
    name: 'HyperLoan AI',
    badge: 'WHITE-LABEL ENTERPRISE',
    badgeColor: '#8B5CF6',
    tagline: 'Full AI Mortgage CRM — Unlimited LO Seats, Your Brand, Your Domain',
    monthlyEquiv: 17995,
    annualPrice: 179950,
    savings: 35990,
    color: '#8B5CF6',
    highlight: true,
    includes: [
      'Unlimited LO seats across all branches',
      'White-label deployment — your brand, your domain',
      'All 27 AI modules: Lead Scoring, Property Pulse, Campaign Manager, Power Dialer, AI Voice Agent, HMDA Analytics, GuidelineAI, Borrower Portal, LOS Integration',
      'Custom Encompass LOS integration',
      'Bi-directional processing layer sync (real-time)',
      'HMDA fair lending analytics + peer benchmarking',
      'Multilingual AI — 7 languages',
      'Dedicated infrastructure — isolated tenant',
      'Dedicated Solutions Engineer',
      'Quarterly executive business reviews',
      '99.9% uptime SLA + custom data DPA',
      'Annual contract — invoiced quarterly or upfront',
    ],
    bestFor: 'Regional lenders, $500M+ IMBs, multi-branch operations',
    contact: 'mailto:derekhuit@gmail.com?subject=HyperLoan AI Enterprise Annual — $179,950/yr&body=Hi Derek,%0A%0AI%27m interested in the HyperLoan AI Enterprise Annual license at $179,950/year.%0A%0ACompany:%0AContact Name:%0APhone:%0ANumber of LOs:%0A%0ALooking forward to connecting.',
    call: 'tel:+19072449368',
  },
  {
    id: 'apex',
    name: 'APEX Intelligence',
    badge: 'RECRUITING INTELLIGENCE',
    badgeColor: '#F59E0B',
    tagline: 'Patent-Pending Predictive Recruiting Engine — Unlimited Candidate Profiles',
    monthlyEquiv: 4125,
    annualPrice: 49500,
    savings: 9000,
    color: '#F59E0B',
    highlight: false,
    includes: [
      'Unlimited candidate APEX profiles — any LO in the country',
      'Full 16-signal behavioral scoring engine (TLS/STDA/SCF)',
      '86% backtested transition prediction accuracy',
      'RUN, MIRROR, DEFEND, LANDSCAPE, FLOW modules',
      'Automated 6-week outreach playbooks per candidate',
      'Objection handler scripts and pitch decks',
      'Monthly APEX market intelligence reports',
      'Attrition Risk Index for your current producers',
      'API access for integration with your ATS',
      'NMLS, deed records, LinkedIn, Glassdoor signal monitoring',
      'Dedicated APEX Intelligence Analyst (quarterly review)',
      'Annual contract — billed upfront or quarterly',
    ],
    bestFor: 'VP Recruiting, CHRO, Branch Network Leaders at IMBs and regional lenders',
    contact: 'mailto:derekhuit@gmail.com?subject=APEX Intelligence Annual — $49,500/yr&body=Hi Derek,%0A%0AI%27m interested in the APEX Intelligence Annual license at $49,500/year.%0A%0ACompany:%0AContact Name:%0APhone:%0ANumber of open LO positions:%0A%0ALooking forward to connecting.',
    call: 'tel:+19072449368',
  },
  {
    id: 'hmda',
    name: 'HMDA Data Platform',
    badge: 'DATA LICENSING',
    badgeColor: '#10B981',
    tagline: '7-Year Federal Mortgage Intelligence — API Access + Bulk Delivery',
    monthlyEquiv: null,
    annualPrice: 25000,
    savings: null,
    color: '#10B981',
    highlight: false,
    includes: [
      '7 years of HMDA data (2017–2024) — 309,000+ loan records',
      'Pre-joined, clean schema — zero ETL required',
      'API access with SQL query layer included',
      'Bulk data delivery (CSV/JSON/Parquet) on any schedule',
      'Every federally reported loan, lender, and market',
      'Fair lending analytics layer — built-in disparate impact scoring',
      'Market share intelligence by MSA, ZIP, lender, product',
      'Peer benchmarking — any lender against any geography',
      'Annual refresh — 2025 data included when released',
      'Custom schema joins on request',
      'Compliant data use agreement + HMDA attribution docs included',
      'Annual license — single entity, unlimited internal users',
    ],
    bestFor: 'Fintechs, compliance firms, banks, research organizations, data vendors',
    contact: 'mailto:derekhuit@gmail.com?subject=HMDA Data Platform License — $25,000/yr&body=Hi Derek,%0A%0AI%27m interested in the HMDA Data Platform annual license at $25,000/year.%0A%0ACompany:%0AContact Name:%0APhone:%0AUse case:%0A%0ALooking forward to connecting.',
    call: 'tel:+19072449368',
  },
];

export default function EnterprisePage() {
  const [activeDeal, setActiveDeal] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState<string | null>(null);
  const [form, setForm] = useState({ name: '', company: '', email: '', phone: '', message: '' });
  const [sending, setSending] = useState(false);

  const handleSubmit = async (dealId: string) => {
    setSending(true);
    // Opens mailto with pre-filled form data for immediate action
    const deal = DEALS.find(d => d.id === dealId)!;
    const body = encodeURIComponent(
      `Company: ${form.company}\nContact: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\n\n${form.message || 'I am interested in this enterprise plan and would like to schedule a call.'}`
    );
    const subject = encodeURIComponent(`${deal.name} Enterprise Inquiry — ${form.company}`);
    window.location.href = `mailto:derekhuit@gmail.com?subject=${subject}&body=${body}`;
    setTimeout(() => {
      setSubmitted(dealId);
      setSending(false);
    }, 500);
  };

  const C = {
    bg: '#030712', surface: '#0D1117', border: 'rgba(255,255,255,0.06)',
    text: '#F1F5F9', muted: '#64748B', card: '#0F172A',
  };

  return (
    <div style={{ background: C.bg, color: C.text, fontFamily: "'Inter',-apple-system,system-ui,sans-serif", minHeight: '100vh' }}>

      {/* Header */}
      <div style={{ borderBottom: `1px solid ${C.border}`, padding: '0 24px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', height: 64, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <div style={{ width: 32, height: 32, background: 'linear-gradient(135deg,#8B5CF6,#3B82F6)', borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 900, fontSize: 16, color: '#fff' }}>H</div>
            <div>
              <div style={{ fontSize: 14, fontWeight: 800, color: '#F1F5F9', letterSpacing: '-0.01em' }}>Huit.AI</div>
              <div style={{ fontSize: 10, color: C.muted, letterSpacing: '0.05em', textTransform: 'uppercase', marginTop: -2 }}>Enterprise</div>
            </div>
          </div>
          <a href="tel:+19072449368" style={{ fontSize: 13, color: '#8B5CF6', textDecoration: 'none', fontWeight: 600 }}>
            📞 907-244-9368
          </a>
        </div>
      </div>

      {/* Hero */}
      <div style={{ maxWidth: 860, margin: '0 auto', padding: '72px 24px 56px', textAlign: 'center' }}>
        <div style={{ display: 'inline-block', background: 'rgba(139,92,246,0.1)', border: '1px solid rgba(139,92,246,0.3)', borderRadius: 40, padding: '5px 18px', fontSize: 11, fontWeight: 700, color: '#8B5CF6', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 24 }}>
          Enterprise Annual Licensing
        </div>
        <h1 style={{ fontSize: 'clamp(32px,5vw,60px)', fontWeight: 900, letterSpacing: '-0.03em', lineHeight: 1.06, marginBottom: 20 }}>
          Institutional-Grade AI for Mortgage.<br />
          <span style={{ background: 'linear-gradient(90deg,#8B5CF6,#3B82F6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
            Annual Licensing. Real Results.
          </span>
        </h1>
        <p style={{ fontSize: 18, color: C.muted, maxWidth: 580, margin: '0 auto 32px', lineHeight: 1.7 }}>
          Three enterprise products. Built by an 18-year mortgage veteran with $1B+ in career production.
          Purpose-built for IMBs, regional lenders, and fintech organizations.
        </p>
        <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
          <div style={{ background: 'rgba(16,185,129,0.1)', border: '1px solid rgba(16,185,129,0.3)', borderRadius: 8, padding: '8px 16px', fontSize: 13, color: '#10B981', fontWeight: 600 }}>✓ No setup fees</div>
          <div style={{ background: 'rgba(16,185,129,0.1)', border: '1px solid rgba(16,185,129,0.3)', borderRadius: 8, padding: '8px 16px', fontSize: 13, color: '#10B981', fontWeight: 600 }}>✓ Annual contract</div>
          <div style={{ background: 'rgba(16,185,129,0.1)', border: '1px solid rgba(16,185,129,0.3)', borderRadius: 8, padding: '8px 16px', fontSize: 13, color: '#10B981', fontWeight: 600 }}>✓ Invoiced quarterly or upfront</div>
          <div style={{ background: 'rgba(16,185,129,0.1)', border: '1px solid rgba(16,185,129,0.3)', borderRadius: 8, padding: '8px 16px', fontSize: 13, color: '#10B981', fontWeight: 600 }}>✓ Dedicated onboarding</div>
        </div>
      </div>

      {/* Deal Cards */}
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 24px 80px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(320px,1fr))', gap: 20 }}>
        {DEALS.map((deal) => (
          <div key={deal.id} style={{
            background: deal.highlight ? `linear-gradient(160deg,${deal.color}08,${C.card})` : C.card,
            border: `1.5px solid ${deal.highlight ? deal.color + '40' : C.border}`,
            borderRadius: 16,
            padding: 28,
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
          }}>
            {deal.highlight && (
              <div style={{ position: 'absolute', top: -12, left: 24, background: deal.color, color: '#fff', fontSize: 10, fontWeight: 800, padding: '3px 14px', borderRadius: 20, letterSpacing: '0.1em' }}>
                HIGHEST VALUE
              </div>
            )}

            <div style={{ marginBottom: 20 }}>
              <div style={{ display: 'inline-block', background: deal.color + '18', color: deal.color, fontSize: 10, fontWeight: 700, padding: '3px 10px', borderRadius: 4, letterSpacing: '0.1em', marginBottom: 10 }}>{deal.badge}</div>
              <h2 style={{ fontSize: 22, fontWeight: 900, color: C.text, marginBottom: 6, letterSpacing: '-0.02em' }}>{deal.name}</h2>
              <p style={{ fontSize: 13, color: C.muted, lineHeight: 1.5, marginBottom: 16 }}>{deal.tagline}</p>

              <div style={{ marginBottom: 6 }}>
                <span style={{ fontSize: 44, fontWeight: 900, color: C.text, letterSpacing: '-0.03em' }}>
                  ${deal.annualPrice.toLocaleString()}
                </span>
                <span style={{ fontSize: 15, color: C.muted }}>/year</span>
              </div>
              {deal.monthlyEquiv && (
                <div style={{ fontSize: 12, color: '#10B981', marginBottom: 4 }}>
                  Save ${deal.savings?.toLocaleString()} vs month-to-month · ${Math.round(deal.annualPrice / 12).toLocaleString()}/mo effective
                </div>
              )}
              {!deal.monthlyEquiv && (
                <div style={{ fontSize: 12, color: '#10B981', marginBottom: 4 }}>
                  One-time annual license · unlimited internal users
                </div>
              )}
              <div style={{ fontSize: 11, color: C.muted }}>Best for: {deal.bestFor}</div>
            </div>

            {/* Includes */}
            <div style={{ background: '#070D16', borderRadius: 10, padding: 16, marginBottom: 20, flex: 1 }}>
              <div style={{ fontSize: 10, color: C.muted, letterSpacing: '0.1em', fontWeight: 700, marginBottom: 10, textTransform: 'uppercase' }}>What's included</div>
              <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 7 }}>
                {deal.includes.map((item) => (
                  <li key={item} style={{ display: 'flex', gap: 8, fontSize: 12, color: '#94A3B8', lineHeight: 1.4 }}>
                    <span style={{ color: deal.color, flexShrink: 0, marginTop: 1 }}>✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA */}
            {activeDeal !== deal.id ? (
              <div style={{ display: 'flex', gap: 10, flexDirection: 'column' }}>
                <button
                  onClick={() => setActiveDeal(deal.id)}
                  style={{ background: deal.color, color: '#fff', border: 'none', borderRadius: 10, padding: '14px 0', fontSize: 15, fontWeight: 800, cursor: 'pointer', width: '100%' }}
                >
                  Request This License →
                </button>
                <div style={{ display: 'flex', gap: 10 }}>
                  <a href={deal.call} style={{ flex: 1, textAlign: 'center', background: 'transparent', color: C.muted, border: `1px solid ${C.border}`, borderRadius: 8, padding: '10px 0', fontSize: 13, fontWeight: 600, textDecoration: 'none', display: 'block' }}>
                    📞 Call
                  </a>
                  <a href={deal.contact} style={{ flex: 1, textAlign: 'center', background: 'transparent', color: C.muted, border: `1px solid ${C.border}`, borderRadius: 8, padding: '10px 0', fontSize: 13, fontWeight: 600, textDecoration: 'none', display: 'block' }}>
                    ✉ Email
                  </a>
                </div>
              </div>
            ) : submitted === deal.id ? (
              <div style={{ background: 'rgba(16,185,129,0.1)', border: '1px solid rgba(16,185,129,0.3)', borderRadius: 10, padding: 20, textAlign: 'center' }}>
                <div style={{ fontSize: 24, marginBottom: 8 }}>✓</div>
                <div style={{ fontSize: 14, fontWeight: 700, color: '#10B981', marginBottom: 4 }}>Request Sent</div>
                <div style={{ fontSize: 12, color: C.muted }}>Derek will respond within 4 business hours.</div>
              </div>
            ) : (
              <div style={{ background: '#070D16', borderRadius: 10, padding: 16 }}>
                <div style={{ fontSize: 12, color: C.muted, marginBottom: 12, fontWeight: 600 }}>Your info — Derek responds within 4 hours</div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                  {[
                    { key: 'name', placeholder: 'Your name' },
                    { key: 'company', placeholder: 'Company' },
                    { key: 'email', placeholder: 'Work email' },
                    { key: 'phone', placeholder: 'Phone (optional)' },
                  ].map((f) => (
                    <input
                      key={f.key}
                      placeholder={f.placeholder}
                      value={(form as any)[f.key]}
                      onChange={(e) => setForm(prev => ({ ...prev, [f.key]: e.target.value }))}
                      style={{ background: '#0D1117', border: `1px solid ${C.border}`, borderRadius: 6, padding: '10px 12px', fontSize: 13, color: C.text, outline: 'none', width: '100%', boxSizing: 'border-box' }}
                    />
                  ))}
                  <textarea
                    placeholder="Any questions or context for Derek (optional)"
                    value={form.message}
                    onChange={(e) => setForm(prev => ({ ...prev, message: e.target.value }))}
                    rows={2}
                    style={{ background: '#0D1117', border: `1px solid ${C.border}`, borderRadius: 6, padding: '10px 12px', fontSize: 13, color: C.text, outline: 'none', width: '100%', boxSizing: 'border-box', resize: 'none' }}
                  />
                  <div style={{ display: 'flex', gap: 8 }}>
                    <button
                      onClick={() => handleSubmit(deal.id)}
                      disabled={!form.name || !form.company || !form.email || sending}
                      style={{ flex: 1, background: deal.color, color: '#fff', border: 'none', borderRadius: 8, padding: '12px 0', fontSize: 14, fontWeight: 800, cursor: (!form.name || !form.company || !form.email) ? 'not-allowed' : 'pointer', opacity: (!form.name || !form.company || !form.email) ? 0.5 : 1 }}
                    >
                      {sending ? 'Sending…' : 'Send Request →'}
                    </button>
                    <button
                      onClick={() => setActiveDeal(null)}
                      style={{ background: 'transparent', color: C.muted, border: `1px solid ${C.border}`, borderRadius: 8, padding: '12px 14px', fontSize: 13, cursor: 'pointer' }}
                    >
                      ✕
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Derek section */}
      <div style={{ borderTop: `1px solid ${C.border}`, background: C.surface, padding: '64px 24px' }}>
        <div style={{ maxWidth: 720, margin: '0 auto', textAlign: 'center' }}>
          <div style={{ fontSize: 13, color: C.muted, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 16 }}>You're talking to the founder</div>
          <h2 style={{ fontSize: 'clamp(24px,4vw,42px)', fontWeight: 900, letterSpacing: '-0.02em', marginBottom: 16 }}>Derek Huit</h2>
          <p style={{ fontSize: 15, color: C.muted, lineHeight: 1.8, marginBottom: 28, maxWidth: 560, margin: '0 auto 28px' }}>
            18 years in mortgage. $1B+ career production. NMLS #203980. I built every one of these products
            because I couldn't find them when I needed them. When you call or email, you're talking to me directly —
            not a sales team.
          </p>
          <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="tel:+19072449368" style={{ background: '#8B5CF6', color: '#fff', textDecoration: 'none', borderRadius: 10, padding: '14px 32px', fontSize: 15, fontWeight: 800, display: 'inline-block' }}>
              📞 907-244-9368
            </a>
            <a href="mailto:derekhuit@gmail.com" style={{ background: 'transparent', color: C.text, border: `1px solid ${C.border}`, textDecoration: 'none', borderRadius: 10, padding: '14px 32px', fontSize: 15, fontWeight: 600, display: 'inline-block' }}>
              derekhuit@gmail.com
            </a>
          </div>
          <p style={{ marginTop: 20, fontSize: 12, color: '#334155' }}>
            Anchorage, Alaska · Available Mon–Fri 8am–6pm AKST · Typically responds same day
          </p>
        </div>
      </div>

      <footer style={{ borderTop: `1px solid ${C.border}`, padding: '28px 24px', textAlign: 'center' }}>
        <p style={{ fontSize: 11, color: '#1E293B' }}>© 2026 Huit.AI, Inc. · Anchorage, Alaska · All enterprise licenses subject to executed order form.</p>
      </footer>
    </div>
  );
}
