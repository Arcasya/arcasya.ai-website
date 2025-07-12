import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) {
        setIsOpen(false); // close menu on desktop view
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleMenu = () => setIsOpen(prev => !prev);

  return (
    <nav
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '1rem 2rem',
        backgroundColor: '#111',
        color: '#fff',
        borderBottom: '1px solid #333',
        position: 'relative',
      }}
    >
      {/* Logo */}
      <div>
        <img
          src="/arcasyaai_logo.png"
          alt="Arcasya.ai logo"
          style={{ height: '40px', objectFit: 'contain' }}
        />
      </div>

      {/* Hamburger for mobile */}
      {isMobile ? (
        <>
          <div onClick={toggleMenu} style={{ cursor: 'pointer' }}>
            <div style={barStyle}></div>
            <div style={barStyle}></div>
            <div style={barStyle}></div>
          </div>

          {isOpen && (
            <div
              style={{
                position: 'absolute',
                top: '70px',
                right: '20px',
                backgroundColor: '#111',
                padding: '1rem',
                borderRadius: '8px',
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
                zIndex: 100,
              }}
            >
              <Link to="/" style={linkStyle}>Home</Link>
              <Link to="/about" style={linkStyle}>About</Link>
            </div>
          )}
        </>
      ) : (
        // Full nav for desktop
        <div style={{ display: 'flex', gap: '1rem' }}>
          <Link to="/" style={linkStyle}>Home</Link>
          <Link to="/about" style={linkStyle}>About</Link>
        </div>
      )}
    </nav>
  );
};

const barStyle: React.CSSProperties = {
  width: '25px',
  height: '3px',
  backgroundColor: '#fff',
  margin: '4px 0',
};

const linkStyle: React.CSSProperties = {
  color: '#fff',
  textDecoration: 'none',
};

export default Navbar;
