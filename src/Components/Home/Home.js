import React from 'react';
import './Home.css';

export default function Header() {
  return (
    < section id="home" style={{
      background: "url('images/body.jpg')"
    }}>
      <div className="row banner">
        
        <div className="banner-text">
          
          <h1>Seyi Ariyo</h1>
          <h2>Software Engineer</h2>
        </div>
      </div>
    </section >
  );
};