import React from "react";

const About = ({ data, personal }) => {
  return (
    <div className="about-container">
      <div className="about-hero">
        <div className="hero-content">
          <div className="hero-text">
            <h2>About Me</h2>
            <p className="summary">{data.summary}</p>
            <div className="contact-info">
              <div className="contact-item">
                <span className="contact-icon">📧</span>
                <span>{personal.email}</span>
              </div>
              <div className="contact-item">
                <span className="contact-icon">📍</span>
                <span>{personal.location}</span>
              </div>
              <div className="contact-item">
                <span className="contact-icon">📱</span>
                <span>{personal.phone}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="skills-section">
        <h3>Technical Skills</h3>
        <div className="skills-grid">
          {data.skills.map((skillCategory, index) => (
            <div key={index} className="skill-category">
              <h4>{skillCategory.category}</h4>
              <div className="skill-tags">
                {skillCategory.items.map((skill, skillIndex) => (
                  <span key={skillIndex} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="experience-section">
        <h3>Work Experience</h3>
        <div className="experience-timeline">
          {data.experience.map((exp, index) => (
            <div key={index} className="experience-item">
              <div className="experience-header">
                <h4>{exp.position}</h4>
                <span className="duration">{exp.duration}</span>
              </div>
              <h5 className="company">{exp.company}</h5>
              <p className="description">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
