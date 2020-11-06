import React from 'react';
import './Footer.css';

export default function Footer(props) {
  return (
    <footer>
      <div className="row">
        <ul className="social-links row">
          <li><a href="https://github.com/SeyiAriyo" rel="noopener noreferrer" target="_blank"><i className="fa fa-github" /></a></li>
          <li><a href="https://www.linkedin.com/in/oluwaseyi-ariyo/" rel="noopener noreferrer" target="_blank"><i className="fa fa-linkedin" /></a></li>
          <li><a href="https://www.instagram.com/seyi_ari/" rel="noopener noreferrer" target="_blank"><i className="fa fa-instagram" /></a></li>
        </ul>
      </div>
    </footer>
  );
};