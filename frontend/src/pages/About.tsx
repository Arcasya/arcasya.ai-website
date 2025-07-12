import React from 'react';
import './About.css';

function About() {
  return (
    <div className="about-container">
      <header className="hero-section">
        <h1 className="hero-title">About Arcasya.ai</h1>
        <p className="hero-subtitle">
          Empowering American service businesses with AI-driven innovation
        </p>
      </header>

      <section className="mission-section">
        <h2>Our Vision: The Arcasya Ecosystem</h2>
        <p>
          Arcasya.ai is more than a platform—it's a vision reimagined as a modern,
          AI-driven ecosystem. Inspired by the Latin term "arca," meaning a
          container for valuable treasures, Arcasya represents a dynamic toolbox
          that equips service businesses with intelligent solutions. From plumbing
          to landscaping, we empower American entrepreneurs to streamline
          operations, foster collaboration, and drive growth in their local
          communities.
        </p>
        <p>
          At its core, Arcasya.ai is a unified network that connects diverse CRM
          systems, deploys custom AI agents, and centralizes operations. Built by{' '}
          <a
            href="https://truemarkusa.com"
            target="_blank"
            rel="noopener noreferrer"
            className="link"
          >
            True Mark USA
          </a>
          , our platform embodies an America-first mission to rebuild economic
          resilience through ethical, innovative technology.
        </p>
      </section>

      <section className="story-section">
        <h2>Our Story</h2>
        <p>
          Founded in the heartland of America, Arcasya.ai was born from a passion
          to modernize service industries. True Mark USA, our parent company,
          recognized the challenges faced by small-to-mid-sized businesses—disjointed
          tools, costly enterprise solutions, and a lack of localized innovation.
          We set out to change that.
        </p>
        <p>
          Arcasya.ai is being tested with{' '}
          <a
            href="https://x.com/jitlawn"
            target="_blank"
            rel="noopener noreferrer"
            className="link"
          >
            JIT Lawn Care
          </a>{' '}
          in Indianapolis, Indiana, where our AI agents optimize scheduling,
          invoicing, and customer engagement. This real-world application ensures
          our platform is practical, impactful, and ready to scale across industries
          like HVAC, plumbing, and beyond.
        </p>
      </section>

      <section className="mission-values">
        <h2>Our Mission & Values</h2>
        <div className="values-grid">
          <div className="value-card">
            <h3>Innovation</h3>
            <p>
              We leverage cutting-edge AI to deliver tailored solutions, from
              predictive analytics to automated workflows, ensuring service
              businesses stay ahead in a digital age.
            </p>
          </div>
          <div className="value-card">
            <h3>Collaboration</h3>
            <p>
              By integrating CRMs and fostering data pooling, we create localized
              ecosystems where businesses thrive through shared insights and
              seamless connectivity.
            </p>
          </div>
          <div className="value-card">
            <h3>Resilience</h3>
            <p>
              Aligned with True Mark USA’s America-first ethos, we empower local
              economies, driving investment and growth in the heartland.
            </p>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <h2>Join the Arcasya Revolution</h2>
        <p>
          Ready to transform your service business with AI-powered efficiency?
          Explore our platform, connect with our team, or start your free trial
          today.
        </p>
        <div className="cta-buttons">
          <a href="/dashboard" className="cta-button primary">
            Visit Dashboard
          </a>
          <a href="/contact" className="cta-button secondary">
            Request a Demo
          </a>
        </div>
      </section>
    </div>
  );
}

export default About;