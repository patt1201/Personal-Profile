import React from 'react';

function education() {
  const education = [
    {
      school: "University of Cabuyao",
      degree: "Bachelor of Science in Information Technology",
      year: "2018 - 2022"
    },
    {
      school: "High School Name",
      degree: "High School Diploma",
      year: "2014 - 2018"
    }
  ];

  return (
    <section className="education-section">
      <h2>Education</h2>
      <div className="education-list">
        {education.map((edu, index) => (
          <div className="education-item" key={index}>
            <h3>{edu.school}</h3>
            <p className="degree">{edu.degree}</p>
            <p className="year">{edu.year}</p>
            <div className="courses">
              <h4>Key Courses:</h4>
              <ul>
                {edu.courses.map((course, courseIndex) => (
                  <li key={courseIndex}>{course}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default education;