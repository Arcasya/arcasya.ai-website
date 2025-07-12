import React from 'react';

const Shop: React.FC = () => {
  type Tier = {
    name: string;
    price: string;
    description: string;
    features: string[];
    isPopular?: boolean;
  };

  const tiers: Tier[] = [
    {
      name: 'Basic',
      price: '$49/month',
      description: 'Core tools for small teams to unify ops and start with AI efficiency.',
      features: [
        'CRM Integration (Jobber, HubSpot)',
        'Backend Automation (scheduling, invoicing)',
        'Basic Data Insights',
        'Standard AI Agents for service',
        'Community Support',
      ],
    },
    {
      name: 'Pro',
      price: '$149/month',
      description: 'Advanced scalability for growing businesses.',
      features: [
        'All Basic Features',
        'Custom AI Agents (maintenance, dispatch)',
        'Enhanced Data Collaboration',
        'Centralized Ecosystem Control',
        'Priority Support & Onboarding',
        'API Access',
      ],
      isPopular: true,
    },
    {
      name: 'Enterprise',
      price: 'Contact Us',
      description: 'Custom solutions for large-scale operations.',
      features: [
        'All Pro Features',
        'Localized Integration (data-sharing, routing)',
        'Unlimited AI Agents & Workflows',
        'Advanced Analytics',
        '24/7 Premium Support',
        'On-Site Implementation',
        'Custom Scalability',
      ],
    },
  ];

  return (
    <div style={{ backgroundColor: '#0d0d0d', color: '#ffffff', fontFamily: 'Segoe UI, sans-serif' }}>
      {/* HERO SECTION */}
      <section style={{ position: 'relative', height: '100vh', overflow: 'hidden' }}>
        <video
          autoPlay
          muted
          loop
          playsInline
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            zIndex: 0,
            opacity: 0.35,
          }}
        >
          <source src="/shop-bg.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div
          style={{
            position: 'relative',
            zIndex: 1,
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
            padding: '2rem',
            color: '#fff',
          }}
        >
          <img src="/arcasyaai_logo.png" alt="Arcasya.ai Logo" style={{ maxWidth: '300px', marginBottom: '2rem' }} />

          <h1 style={{ fontSize: '4rem', marginBottom: '1rem' }}>
            Arcasya.ai Subscriptions
          </h1>
          <p style={{ maxWidth: '800px', fontSize: '1.2rem', opacity: 0.9 }}>
            Select a plan to boost your service operations.
          </p>
        </div>
      </section>

      {/* PRICING SECTION */}
      <section style={{ padding: '5rem 2rem', backgroundColor: '#111', textAlign: 'center' }}>
        <h2 style={{ fontSize: '2.5rem', marginBottom: '2rem' }}>Plans</h2>
        <div
          style={{
            maxWidth: '1200px',
            margin: '0 auto',
            display: 'grid',
            gap: '2rem',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          }}
        >
          {tiers.map((tier, idx) => (
            <div
              key={idx}
              style={{
                backgroundColor: '#181818',
                padding: '2rem',
                borderRadius: '8px',
                position: 'relative',
                border: tier.isPopular ? '2px solid #00aaff' : 'none',
              }}
            >
              {tier.isPopular && (
                <span
                  style={{
                    position: 'absolute',
                    top: '-1rem',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    backgroundColor: '#00aaff',
                    color: '#000',
                    padding: '0.5rem 1rem',
                    borderRadius: '4px',
                    fontSize: '0.9rem',
                  }}
                >
                  Popular
                </span>
              )}
              <h3 style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>{tier.name}</h3>
              <p style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>{tier.price}</p>
              <p style={{ opacity: 0.85, marginBottom: '1.5rem' }}>{tier.description}</p>
              <ul style={{ listStyleType: 'none', padding: 0, textAlign: 'left' }}>
                {tier.features.map((feature, fIdx) => (
                  <li key={fIdx} style={{ marginBottom: '0.75rem', opacity: 0.9 }}>
                    • {feature}
                  </li>
                ))}
              </ul>
              <a
                href="https://www.truemarkusa.com/contact-us"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-block',
                  marginTop: '2rem',
                  padding: '0.75rem 2rem',
                  fontSize: '1rem',
                  backgroundColor: tier.name === 'Enterprise' ? '#5e2394' : '#00aaff',
                  color: '#fff',
                  border: 'none',
                  borderRadius: '6px',
                  cursor: 'pointer',
                  textDecoration: 'none',
                }}
              >
                {tier.name === 'Enterprise' ? 'Contact Sales' : 'Subscribe'}
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* CTA SECTION */}
      <section style={{ padding: '4rem 2rem', backgroundColor: '#0d0d0d', textAlign: 'center' }}>
        <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Transform Your Ops?</h2>
        <p style={{ fontSize: '1rem', opacity: 0.9, maxWidth: '600px', margin: '0 auto' }}>
          Arcasya.ai accelerates success. Start now.
        </p>
        <a
          href="https://www.truemarkusa.com/contact-us"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'inline-block',
            marginTop: '2rem',
            padding: '0.75rem 2rem',
            fontSize: '1rem',
            backgroundColor: '#00aaff',
            color: '#000',
            border: 'none',
            borderRadius: '6px',
            cursor: 'pointer',
            textDecoration: 'none',
          }}
        >
          Demo Request
        </a>
      </section>

      {/* FOOTER */}
      <footer
        style={{
          backgroundColor: '#0d0d0d',
          color: '#aaa',
          textAlign: 'center',
          padding: '1.5rem 1rem',
          fontSize: '0.9rem',
        }}
      >
        © {new Date().getFullYear()} Arcasya.ai — A True Mark USA Company. All rights reserved.
      </footer>
    </div>
  );
};

export default Shop;
