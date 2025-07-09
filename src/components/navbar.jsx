import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '1rem 2rem',
      backgroundColor: '#111',
      color: '#fff',
      borderBottom: '1px solid #333'
    }}>
      <div>
       <img 
         src="/arcasyaai_logo.png" 
        alt="Arcasya.ai logo" 
            style={{ height: '40px', objectFit: 'contain' }} 
/>

      </div>
      <div style={{ display: 'flex', gap: '1rem' }}>
        <Link to="/" style={{ color: '#fff', textDecoration: 'none' }}>Home</Link>
        <Link to="/about" style={{ color: '#fff', textDecoration: 'none' }}>About</Link>
      </div>
    </nav>
  );
}

export default Navbar;
