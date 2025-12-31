import React, { useState } from "react";

const Practicum = ({ data }) => {
  const [expandedItem, setExpandedItem] = useState(null);

  const toggleExpanded = (id) => {
    setExpandedItem(expandedItem === id ? null : id);
  };

  return (
    <div className="practicum-container">
      <div className="practicum-header">
        <h2>Practicum & Training</h2>
        <p>Hands-on learning experiences and intensive training programs</p>
      </div>

      <div className="practicum-timeline">
        {data.map((item, index) => (
          <div key={item.id} className="practicum-item">
            <div className="timeline-marker">
              <span className="marker-number">{index + 1}</span>
            </div>

            <div className="practicum-card">
              <div
                className="card-header"
                onClick={() => toggleExpanded(item.id)}
              >
                <div className="header-content">
                  <h3>{item.title}</h3>
                  <div className="institution-info">
                    <span className="institution">{item.institution}</span>
                    {item.duration && (
                      <span className="duration">{item.duration}</span>
                    )}
                  </div>
                </div>
                <button
                  className="expand-btn"
                  aria-label={
                    expandedItem === item.id
                      ? "Collapse details"
                      : "Expand details"
                  }
                  aria-expanded={expandedItem === item.id}
                >
                  {expandedItem === item.id ? "−" : "+"}
                </button>
              </div>

              <div
                className={`card-content ${
                  expandedItem === item.id ? "expanded" : ""
                }`}
              >
                {item.description && (
                  <p className="description">{item.description}</p>
                )}

                {item.skills && item.skills.length > 0 && (
                  <div className="skills-learned">
                    <h4>Skills Acquired:</h4>
                    <div className="skill-tags">
                      {item.skills.map((skill, skillIndex) => (
                        <span key={skillIndex} className="skill-tag">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {item.projects && item.projects.length > 0 && (
                  <div className="projects-completed">
                    <h4>Key Projects:</h4>
                    <ul>
                      {item.projects.map((project, projectIndex) => (
                        <li key={projectIndex}>{project}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {item.certificate && (
                  <div className="certificate-section">
                    <img
                      src={item.certificate}
                      alt={`${item.title} Certificate`}
                      className="certificate-image"
                      loading="lazy"
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Practicum;
