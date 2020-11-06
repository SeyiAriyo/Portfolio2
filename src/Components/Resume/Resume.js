import React from 'react';
import './Resume.css';

export default function Resume() {
  return (

    <section id="resume">
      {/* Work
      ----------------------------------------------- */}
      <div className="work">
        <div className="column header-col">
          <h1><span>Experience</span></h1>
        </div>
        <div className="column main-col">
          <div className="row item">
            <div className="column">
              <h3>Thinkful</h3>
              <p className="info"> Remote Full-Stack Engineering Student<span>•</span> May 2020 - October 2020</p>
              <ul>
                <li>
                  Learned industry best practices and practical software development standards with a focus on Node.js, React, and PostgreSQL.
                </li>
                <li>
                  Created and deployed mobile-first applications while learning new languages and
                  frameworks by collaborating several hours every week with a senior web developer.
                </li>
              </ul>
            </div>
          </div> {/* item end */}
        </div> {/* main-col end */}
      </div> {/* End Work */}
      {/* Education
      ----------------------------------------------- */}
      <div className="education">
        <div className="column header-col">
          <h1><span>Education</span></h1>
        </div>
        <div className="column main-col">
          <div className="row item">
            <div className="column">
              <h3>University of Maryland: College of Computer, Mathematical, and Natural Sciences</h3>
              <p className="info">Bachelor of Science, Computer Science<span>•</span> Expected Graduation: May 2021</p>
              <ul>
                <li>
                  Courses Taken: Linear Algebra, Object Oriented Programming I & II, Introduction to Computer Systems, Discrete Structures, Organization of Programming Languages, Algorithms, Introduction to Data Science.
                </li>
                <li>
                 Student Organizations: Code Black UMD and UMD League of Legends.
                </li>
              </ul>
            </div>
          </div>
        </div> {/* main-col end */}
      </div> {/* End Education */}
      {/* Skills
      ----------------------------------------------- */}
      <div className="skill">
        <div className="column header-col">
          <h1><span>Technical Skills</span></h1>
        </div>
        <div className="column main-col">
          <div className="row item">
            <div className="column">
              <h3>Languages</h3>
              <ul>
                <li>Java</li>
                <li>Python</li>
                <li>C</li>
                <li>OCaml</li>
                <li>Ruby</li>
                <li>R</li>
                <li>SQL</li>
                <li>Rust</li>
                <li>Javascript</li>
                <li>HTML5</li>
              </ul>
            </div>
          </div>
          <div className="row item">
            <div className="column">
              <h3>Software/Frameworks</h3>
              <ul>
                <li>React.js</li>
                <li>Node.js</li>
                <li>Express</li>
                <li>PostgreSQL</li>
                <li>Git</li>
                <li>jQuery</li>
                <li>Vercel</li>
                <li>Heroku</li>
              </ul>
            </div>
          </div>
        </div> {/* main-col end */}
      </div> {/* End skills */}
    </section>
  );
};
