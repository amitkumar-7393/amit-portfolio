import { useState } from "react";
import {
  ArrowUpRight,
  Github,
  Linkedin,
  Mail,
  Menu,
  X,
  Download,
  Code2,
  Database,
  Globe,
  Server,
} from "lucide-react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Cloud QR Attendance Management System",
    description:
      "A cloud-based attendance management platform designed to simplify QR-based attendance tracking and management.",
    tech: ["HTML", "CSS", "JavaScript", "Firebase"],
    link: "#",
  },
  {
    title: "Event Ticket Booking Website",
    description:
      "A responsive event ticket booking platform with a modern interface and interactive booking experience.",
    tech: ["HTML", "CSS", "JavaScript"],
    link: "#",
  },
  {
    title: "Bus Pass Portal",
    description:
      "A web-based bus pass management portal created to simplify pass application and management.",
    tech: ["HTML", "CSS", "JavaScript"],
    link: "#",
  },
];

const skills = [
  { name: "HTML5", level: 95 },
  { name: "CSS3", level: 92 },
  { name: "JavaScript", level: 88 },
  { name: "React.js", level: 82 },
  { name: "Git & GitHub", level: 85 },
  { name: "Node.js", level: 72 },
  { name: "Express.js", level: 70 },
  { name: "PostgreSQL", level: 68 },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dark, setDark] = useState(true);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className={dark ? "app dark" : "app light"}>
      {/* NAVBAR */}
      <header className="navbar">
        <a href="#home" className="logo" onClick={closeMenu}>
          AK<span>.</span>
        </a>

        <nav className={menuOpen ? "nav-links active" : "nav-links"}>
          <a href="#home" onClick={closeMenu}>Home</a>
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#skills" onClick={closeMenu}>Skills</a>
          <a href="#projects" onClick={closeMenu}>Projects</a>
          <a href="#education" onClick={closeMenu}>Education</a>
          <a href="#contact" onClick={closeMenu}>Contact</a>
        </nav>

        <div className="nav-actions">
          <button
            className="theme-btn"
            onClick={() => setDark(!dark)}
            aria-label="Toggle theme"
          >
            {dark ? "☀" : "☾"}
          </button>

          <button
            className="menu-btn"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Open menu"
          >
            {menuOpen ? <X size={23} /> : <Menu size={23} />}
          </button>
        </div>
      </header>

      <main>
        {/* HERO */}
        <section id="home" className="hero section">
          <div className="hero-content">
            <motion.p
              className="eyebrow"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              AVAILABLE FOR OPPORTUNITIES
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              Hi, I'm <span>Amit Kumar</span>.
              <br />
              I build digital experiences.
            </motion.h1>

            <motion.p
              className="hero-description"
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Full Stack Web Developer focused on building clean,
              responsive and scalable web applications with modern
              technologies.
            </motion.p>

            <div className="hero-buttons">
              <a href="#projects" className="btn primary">
                View My Work <ArrowUpRight size={18} />
              </a>

              <a href="#contact" className="btn secondary">
                Let's Talk
              </a>
            </div>

            <div className="socials">
              <a
                href="https://github.com/amitkumar-7393"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>

              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>

              <a href="mailto:your-email@example.com" aria-label="Email">
                <Mail size={20} />
              </a>
            </div>
          </div>

          <div className="hero-card">
            <div className="profile-placeholder">
              <div className="profile-initials">AK</div>
            </div>

            <div className="floating-card card-one">
              <Code2 size={18} />
              <span>Frontend</span>
            </div>

            <div className="floating-card card-two">
              <Database size={18} />
              <span>Database</span>
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="section about">
          <div className="section-heading">
            <p className="eyebrow">ABOUT ME</p>
            <h2>Turning ideas into useful digital products.</h2>
          </div>

          <div className="about-grid">
            <div>
              <p className="large-text">
                I'm Amit Kumar, a passionate web developer and MCA student
                interested in creating modern, responsive and user-friendly
                web applications.
              </p>

              <p>
                I enjoy working across the frontend and backend, learning
                new technologies and turning real-world requirements into
                practical software solutions.
              </p>

              <a className="text-link" href="#contact">
                Let's work together <ArrowUpRight size={17} />
              </a>
            </div>

            <div className="about-cards">
              <div className="info-card">
                <Globe size={25} />
                <h3>Web Development</h3>
                <p>Responsive and modern web experiences.</p>
              </div>

              <div className="info-card">
                <Server size={25} />
                <h3>Backend</h3>
                <p>APIs and server-side application development.</p>
              </div>
            </div>
          </div>
        </section>

        {/* SKILLS */}
        <section id="skills" className="section">
          <div className="section-heading center">
            <p className="eyebrow">TECHNICAL SKILLS</p>
            <h2>Tools I work with.</h2>
            <p>
              Technologies I use to design, develop and deploy web
              applications.
            </p>
          </div>

          <div className="skills-grid">
            {skills.map((skill) => (
              <div className="skill-card" key={skill.name}>
                <div className="skill-top">
                  <span>{skill.name}</span>
                  <span>{skill.level}%</span>
                </div>

                <div className="skill-bar">
                  <motion.div
                    className="skill-progress"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                  />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="section projects">
          <div className="section-heading">
            <p className="eyebrow">SELECTED WORK</p>
            <h2>Projects I've built.</h2>
          </div>

          <div className="projects-grid">
            {projects.map((project, index) => (
              <motion.article
                className="project-card"
                key={project.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="project-number">
                  0{index + 1}
                </div>

                <div>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>

                  <div className="tech-list">
                    {project.tech.map((tech) => (
                      <span key={tech}>{tech}</span>
                    ))}
                  </div>
                </div>

                <a href={project.link} className="project-link">
                  View Project <ArrowUpRight size={17} />
                </a>
              </motion.article>
            ))}
          </div>
        </section>

        {/* EDUCATION */}
        <section id="education" className="section education">
          <div className="section-heading center">
            <p className="eyebrow">EDUCATION</p>
            <h2>My academic journey.</h2>
          </div>

          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-dot" />

              <div className="timeline-content">
                <span>2024 — 2026</span>
                <h3>Master of Computer Applications</h3>
                <p>Bundelkhand University, Jhansi</p>
                <p>
                  Focused on computer science, software development,
                  web technologies and modern application development.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="section contact">
          <div className="contact-box">
            <div className="contact-content">
              <p className="eyebrow">GET IN TOUCH</p>

              <h2>Have a project in mind?</h2>

              <p>
                I'm open to internships, freelance opportunities and
                professional collaborations.
              </p>

              <a
                className="btn primary"
                href="mailto:your-email@example.com"
              >
                Send Me an Email <Mail size={18} />
              </a>
            </div>

            <div className="contact-details">
              <div>
                <span>Email</span>
                <a href="mailto:your-email@example.com">
                  your-email@example.com
                </a>
              </div>

              <div>
                <span>Location</span>
                <p>Noida, Uttar Pradesh, India</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="footer">
        <p>
          © {new Date().getFullYear()} Amit Kumar. All rights reserved.
        </p>

        <div>
          <a
            href="https://github.com/amitkumar-7393"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>

          <a href="#home">Back to top ↑</a>
        </div>
      </footer>
    </div>
  );
}

export default App;
