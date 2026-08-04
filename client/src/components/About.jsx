import { motion } from "framer-motion";
import { ArrowUpRight, Globe, Server, Code2, Database } from "lucide-react";

function About() {
  return (
    <section id="about" className="section about">
      <div className="section-heading">
        <p className="eyebrow">ABOUT ME</p>

        <h2>Building useful digital experiences with modern technology.</h2>
      </div>

      <div className="about-grid">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="large-text">
            I'm Amit Kumar, a Full Stack Web Developer and MCA student
            passionate about building modern, responsive and user-friendly
            web applications.
          </p>

          <p>
            I enjoy turning ideas and real-world requirements into
            practical software solutions. My interests include frontend
            development, backend APIs, databases and creating polished
            user experiences.
          </p>

          <p>
            I work with technologies such as HTML, CSS, JavaScript,
            React.js, Node.js, Express.js and PostgreSQL, while continuously
            improving my development and problem-solving skills.
          </p>

          <a href="#contact" className="text-link">
            Let's work together
            <ArrowUpRight size={17} />
          </a>
        </motion.div>

        <motion.div
          className="about-cards"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="info-card">
            <Globe size={25} />

            <h3>Frontend Development</h3>

            <p>
              Responsive, accessible and modern interfaces using
              React and contemporary web technologies.
            </p>
          </div>

          <div className="info-card">
            <Server size={25} />

            <h3>Backend Development</h3>

            <p>
              REST APIs and server-side applications designed for
              reliable and scalable web projects.
            </p>
          </div>

          <div className="info-card">
            <Database size={25} />

            <h3>Database Development</h3>

            <p>
              Structured data management with PostgreSQL and
              backend database integration.
            </p>
          </div>

          <div className="info-card">
            <Code2 size={25} />

            <h3>Clean Code</h3>

            <p>
              Organized, maintainable and reusable code with a focus
              on performance and long-term scalability.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default About;
