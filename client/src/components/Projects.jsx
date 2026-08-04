import { ExternalLink, Github, ArrowUpRight } from "lucide-react";
import projects from "../data/projects";

const Projects = () => {
  return (
    <section id="projects" className="section">
      <div className="section-heading">
        <span className="eyebrow">PROJECTS</span>

        <h2>Things I've built.</h2>

        <p>
          A selection of projects demonstrating my experience with
          responsive design, JavaScript, React and modern web
          development.
        </p>
      </div>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <article className="project-card" key={project.id}>
            <div className="project-top">
              <span className="project-number">
                {String(index + 1).padStart(2, "0")}
              </span>

              <span>{project.category}</span>
            </div>

            <div className="project-content">
              <h3>{project.title}</h3>

              <p>{project.description}</p>

              <div className="tech-list">
                {project.technologies.map((technology) => (
                  <span key={technology}>{technology}</span>
                ))}
              </div>
            </div>

            <div className="project-actions">
              {project.liveUrl && (
                <a
                  className="project-link"
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live Demo
                  <ExternalLink size={14} />
                </a>
              )}

              {project.githubUrl && (
                <a
                  className="project-link"
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                  <Github size={14} />
                </a>
              )}

              {project.liveUrl && (
                <a
                  className="project-arrow"
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Open ${project.title}`}
                >
                  <ArrowUpRight size={17} />
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Projects;
