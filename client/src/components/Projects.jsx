import { motion } from "framer-motion";
import {
  ArrowUpRight,
  ExternalLink,
  Github,
  FolderCode,
} from "lucide-react";

const projects = [
  {
    number: "01",
    title: "CODSOFT Portfolio",
    description:
      "A responsive personal portfolio website developed to showcase frontend development skills, projects and professional information.",
    technologies: ["HTML", "CSS", "JavaScript"],
    liveUrl: "https://amitkumar-7393.github.io/CODSOFT/",
    githubUrl: "https://github.com/amitkumar-7393/CODSOFT",
  },
  {
    number: "02",
    title: "Cloud QR Attendance Management System",
    description:
      "A cloud-based attendance management application designed to simplify attendance tracking with a modern digital workflow.",
    technologies: ["HTML", "CSS", "JavaScript", "Firebase"],
    liveUrl: "https://cloud-attendance-system-24c76.web.app/",
    githubUrl: "https://github.com/amitkumar-7393",
  },
  {
    number: "03",
    title: "CODSOFT Landing Page",
    description:
      "A modern responsive landing page built with a clean layout, structured sections and responsive frontend design.",
    technologies: ["HTML", "CSS", "JavaScript"],
    liveUrl:
      "https://amitkumar-7393.github.io/CODSOFT--Landing--Page/#contact",
    githubUrl: "https://github.com/amitkumar-7393/CODSOFT--Landing--Page",
  },
  {
    number: "04",
    title: "CODSOFT Calculator",
    description:
      "A responsive calculator application with an interactive interface and JavaScript-powered calculation functionality.",
    technologies: ["HTML", "CSS", "JavaScript"],
    liveUrl: "https://amitkumar-7393.github.io/CODSOFT-Calculator.App/",
    githubUrl: "https://github.com/amitkumar-7393/CODSOFT-Calculator.App",
  },
  {
    number: "05",
    title: "Bus Pass Portal",
    description:
      "A digital bus pass portal designed to provide users with a simple and convenient web-based pass management experience.",
    technologies: ["HTML", "CSS", "JavaScript"],
    liveUrl: "https://bus-pass-portal.vercel.app/",
    githubUrl: "https://github.com/amitkumar-7393/bus-pass-portal",
  },
  {
    number: "06",
    title: "Event Ticket Booking",
    description:
      "A responsive event ticket booking website featuring an interactive interface and user-friendly event browsing experience.",
    technologies: ["HTML", "CSS", "JavaScript"],
    liveUrl: "https://amitkumar-7393.github.io/Event-ticket-booking-/",
    githubUrl: "https://github.com/amitkumar-7393/Event-ticket-booking-",
  },
  {
    number: "07",
    title: "TCONGS",
    description:
      "A deployed web project demonstrating responsive frontend development and a production-ready web experience.",
    technologies: ["Web Development"],
    liveUrl: "https://tcongs-six.vercel.app/",
    githubUrl: "https://github.com/amitkumar-7393",
  },
  {
    number: "08",
    title: "Lead Desk",
    description:
      "A lead management web application designed around organizing and handling lead information through a structured interface.",
    technologies: ["Web Development"],
    liveUrl: "https://lead-desk-mini-phi-pied.vercel.app/#leadForm",
    githubUrl: "https://github.com/amitkumar-7393",
  },
];

function Projects() {
  return (
    <section id="projects" className="section projects">
      <div className="section-heading">
        <p className="eyebrow">SELECTED WORK</p>

        <h2>Projects I've built.</h2>

        <p>
          A collection of my web development projects, deployed applications
          and practical development work.
        </p>
      </div>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <motion.article
            className="project-card"
            key={project.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{
              duration: 0.55,
              delay: index * 0.06,
            }}
          >
            <div className="project-top">
              <div className="project-number">{project.number}</div>

              <FolderCode size={23} />
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
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                <ExternalLink size={17} />
                Live Demo
              </a>

              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                <Github size={17} />
                Code
              </a>

              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="project-arrow"
                aria-label={`Open ${project.title}`}
              >
                <ArrowUpRight size={19} />
              </a>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

export default Projects;
