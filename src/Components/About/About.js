import React from 'react';
import './About.css';

export default function About(props) {
  return (
    <section id="about">
      <div className="main-row">
        <div className="stretch-fix">
          <img className="profile-pic" src="images/profilepic.png" alt="profile pic" />
        </div>
        <div className="column main-col">
          <h2>About Me</h2>
          <p>What started as a desire to solve computer-based puzzles evolved into a passion for building software that is engaging and innovative.
           I am a computer science student at the University of Maryland College Park with a focus on software engineering.
            I attended the Thinkful software engineering Bootcamp, committing 60 hours a week for five months to expand my full-stack web development skills.
             My ultimate goal is to find a talented team that I can learn from and work with to deliver amazing products. Outside of programming, I love biking, rock climbing, and photography.
            </p>
          <div className="row">
            <div className="column contact-details">
              <h2>Contact Details</h2>
              <ul className="address">
                <li>Oluwaseyi Ariyo</li>
                <li>College Park, MD</li>
                <li>(240)713-4017</li>
                <li>ariyoseyiariyo@gmail.com</li>
              </ul>
            </div>
            <div className="column">
              <p>
                <a href="pdfs/Resume-Seyi.pdf" className="button" rel="noopener noreferrer" target="_blank"><i className="fa fa-download" />Download Resume</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
