import React from 'react';

function about() {
  return (
    <section className="about-section">
      <h2>About Me</h2>
      <div className="about-content">
        <div className="personal-info">
          <h3>Who I Am</h3>
          <p>
            I'm a web developer with a passion for creating clean, 
            efficient, and user-friendly websites. With a background 
            in computer science, I bring technical expertise and 
            creative problem-solving to every project.
          </p>
        </div>
        
        <div className="skills">
          <h3>Skills</h3>
          <ul>
            <li>Frontend Development (React, JavaScript, HTML/CSS)</li>
            <li>Responsive Web Design</li>
            <li>UI/UX Design</li>
            <li>Backend Development (Node.js)</li>
            <li>Database Management (MongoDB, MySQL)</li>
          </ul>
        </div>
        
        <div className="hobbies">
          <h3>Hobbies & Interests</h3>
          <p>
            When I'm not coding, you can find me hiking in the mountains, 
            reading science fiction novels, or experimenting with new recipes 
            in the kitchen. I'm also passionate about photography and enjoy 
            capturing landscapes and street scenes.
          </p>
        </div>
      </div>
    </section>
  );
}

export default about;