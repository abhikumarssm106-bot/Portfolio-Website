import React from "react";
import "./styles/Work.css";
import { projectsData, Project } from "../data/projectsData";
import { FaGithub } from "react-icons/fa6";
import { MdArrowOutward } from "react-icons/md";

const Work: React.FC = () => {
  return (
    <section className="work-section" id="work" aria-label="My Work">
      <div className="work-container section-container">
        <div className="work-header">
          <h2>
            My <span>Work</span>
          </h2>
          <p className="work-subtitle">
            Selected projects showcasing my work in Data Analytics, Machine
            Learning, and Web Development.
          </p>
        </div>

        <div className="work-grid">
          {projectsData.map((project: Project) => {
            const hasActions = Boolean(project.githubUrl || project.liveUrl);

            return (
              <article className="work-card" key={project.id}>
                {/* Project Image & Thumbnail */}
                <div className="work-card-media">
                  <img
                    src={project.image}
                    alt={`${project.title} Preview`}
                    loading="lazy"
                    className="work-card-img"
                  />
                  <div className="work-card-number">{project.number}</div>
                  <div className="work-card-overlay"></div>
                </div>

                {/* Card Content Body */}
                <div className="work-card-body">
                  {/* Category Badge */}
                  <div className="work-card-meta">
                    <span className="work-category-badge">
                      {project.category}
                    </span>
                    {project.date && (
                      <span className="work-date-badge">{project.date}</span>
                    )}
                  </div>

                  {/* Title */}
                  <h3 className="work-card-title">{project.title}</h3>

                  {/* Short Description */}
                  <p className="work-card-desc">{project.description}</p>

                  {/* Tech Tags */}
                  <div
                    className="work-tech-tags"
                    aria-label="Technologies used"
                  >
                    {project.technologies.map((tech, idx) => (
                      <span className="work-tech-tag" key={idx}>
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Key Highlights */}
                  <div className="work-highlights-container">
                    <h4 className="work-highlights-heading">Key Highlights</h4>
                    <ul className="work-highlights-list">
                      {project.highlights.map((highlight, idx) => (
                        <li className="work-highlight-item" key={idx}>
                          <span className="work-highlight-bullet" aria-hidden="true">
                            ✦
                          </span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Action Buttons (Rendered only if valid URL exists) */}
                  {hasActions && (
                    <div className="work-card-actions">
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="work-btn work-btn-secondary"
                          data-cursor="disable"
                          aria-label={`View GitHub repository for ${project.title}`}
                        >
                          <FaGithub className="work-btn-icon" />
                          <span>GitHub</span>
                          <MdArrowOutward className="work-btn-arrow" />
                        </a>
                      )}
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="work-btn work-btn-primary"
                          data-cursor="disable"
                          aria-label={`Open live demo for ${project.title}`}
                        >
                          <span>Live Demo</span>
                          <MdArrowOutward className="work-btn-arrow" />
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Work;
