import React from 'react';
import './Home.css';

export default function Header() {
  return (
    < section id="home" style={{
      background: "url('images/body.jpg')"
    }}>
      <div className="row banner">
        <div className="banner-text">
          <h1>I'm Seyi,</h1>
          <h3>My specialties include software engineering and fullstack web development. </h3>
        </div>
      </div>
    </section >
  );
};