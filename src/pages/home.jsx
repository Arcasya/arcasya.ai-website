import React from 'react';

function Home() {
  return (
    <div style={{ backgroundColor: '#0d0d0d', color: '#ffffff', fontFamily: 'Segoe UI, sans-serif' }}>
      
     {/* HERO SECTION with Background Video and Logo */}
<section style={{ position: 'relative', height: '100vh', overflow: 'hidden' }}>
  {/* Background Video */}
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
    <source src="/home_hero_video.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>


  {/* Overlay Content */}
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
    {/* Logo */}
    <img
  src="/arcasyaai_logo.png"
  alt="Arcasya.ai Logo"
  className="hero-logo"
    />


    {/* Headline & Subtext */}
    <h1 style={{ fontSize: '4rem', marginBottom: '1rem' }}>
      AI Driven Solutions
    </h1>
    <p style={{ maxWidth: '800px', fontSize: '1.2rem', opacity: 0.9 }}>
      Arcasya.ai is your modern toolbox — a localized, intelligent platform built to unify CRMs,
      deploy custom AI agents, and empower service industries through innovative solutions.
    </p>
  </div>
</section>


      {/* MISSION SECTION */}
      <section style={{ padding: '5rem 2rem', textAlign: 'center', backgroundColor: '#111' }}>
        <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Our Mission</h2>
        <p style={{ fontSize: '1.1rem', maxWidth: '900px', margin: '0 auto', opacity: 0.9 }}>
          Arcasya.ai empowers American service businesses to thrive in a digital age by
          delivering an AI-driven platform that unifies operations, fosters collaboration, and
          drives innovation. Rooted in True Mark USA’s commitment to ethical excellence and an
          America-first vision, we create localized ecosystems where advanced technology
          streamlines processes, optimizes growth, and strengthens communities, equipping
          service industries with the tools to build a resilient economic future.
        </p>
      </section>

      
<section style={{ position: 'relative', padding: '5rem 2rem', overflow: 'hidden' }}>
  {/* Background Video */}
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
      opacity: 0.3, // Lower so content is visible
    }}
  >
    <source src="/home_features_video.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>


  {/* Content */}
  <div style={{ position: 'relative', zIndex: 2, textAlign: 'center', color: '#fff' }}>
    <h2 style={{ fontSize: '2.5rem', marginBottom: '2rem' }}>Core Features</h2>
    <div
      style={{
        maxWidth: '1000px',
        margin: '0 auto',
        display: 'grid',
        gap: '2rem',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
      }}
    >
      {[
        {
          title: 'Seamless CRM Integration',
          desc: 'Connect platforms like Jobber, HubSpot, and ServiceTitan into one powerful network.',
        },
        {
          title: 'Custom AI Agents',
          desc: 'Deploy predictive, intelligent tools for maintenance, dispatch, and customer service.',
        },
        {
          title: 'Data Pooling & Insights',
          desc: 'Harness and unify operational data for local collaboration and smarter decisions.',
        },
        {
          title: 'Backend Automation',
          desc: 'Streamline scheduling, invoicing, and workflows so you can scale effortlessly.',
        },
        {
          title: 'Centralized Control',
          desc: 'Orchestrate your ecosystem through a single hub connected to your CRMs.',
        },
          {
          title: 'Localized Ecosystem Integration',
          desc: 'Empower service businesses within communities by enabling intelligent data-sharing, job routing, and AI collaboration across a trusted local network — all managed from one central platform.',
        }

      ].map((item, idx) => (
        <div key={idx} style={{ backgroundColor: '#181818cc', padding: '2rem', borderRadius: '8px' }}>
          <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>{item.title}</h3>
          <p style={{ opacity: 0.85 }}>{item.desc}</p>
        </div>
      ))}
    </div>
  </div>
</section>


{/* CTA SECTION */}
<section style={{ padding: '4rem 2rem', backgroundColor: '#111', textAlign: 'center' }}>
  <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Ready to launch?</h2>
  <p style={{ fontSize: '1rem', opacity: 0.9, maxWidth: '600px', margin: '0 auto' }}>
    Join the Arcasya.ai pilot program or request a demo to see how we’re revolutionizing the service industry.
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
    textDecoration: 'none'
  }}
>
  Request Demo
</a>

</section>

<footer style={{ backgroundColor: '#0d0d0d', color: '#aaa', textAlign: 'center', padding: '1.5rem 1rem', fontSize: '0.9rem' }}>
  © {new Date().getFullYear()} Arcasya.ai — A True Mark USA Product. All rights reserved.
</footer>

    </div>
  );
}

export default Home;
