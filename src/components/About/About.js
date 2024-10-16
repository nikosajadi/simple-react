import React from "react";
import './About.css'; // Add a CSS file to style the component

const About = () => {
  return (
    <div className="about-container">
      <h1>About Me</h1>
      <p>
        <strong>Personal Background:</strong> I am Niko, a passionate painter with a long history of participating in artistic exhibitions. My love for art has shaped the way I approach my work, and I integrate that creative mindset into my role as a frontend developer.
      </p>
      <p>
        <strong>Technologies:</strong> I have a solid background in frontend development, working extensively with React, TypeScript, and Next.js. My expertise allows me to build visually appealing and functional interfaces, merging my artistic skills with modern development tools.
      </p>
      <p>
        <strong>Combination of Art and Tech:</strong> My unique blend of skills allows me to approach coding projects with a designer's eye, ensuring that each project not only functions well but also looks aesthetically pleasing. I strive to bring creativity into every project I work on, just as I do with my art.
      </p>
    </div>
  );
};

export default About;
