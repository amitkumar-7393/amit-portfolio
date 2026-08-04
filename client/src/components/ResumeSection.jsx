import { motion } from "framer-motion";
import {
  Download,
  FileText,
  ArrowUpRight,
  CheckCircle2,
} from "lucide-react";

const highlights = [
  "MCA — Bundelkhand University, Jhansi",
  "Full Stack Web Development",
  "React.js & JavaScript",
  "Git & GitHub",
  "Web Development Internship — CODSOFT",
  "Multiple deployed web projects",
];

function ResumeSection() {
  return (
    <section id="resume" className="section resume">
      <motion.div
        className="resume-box"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="resume-icon">
          <FileText size={30} />
        </div>

        <div className="resume-content">
          <p className="eyebrow">MY RESUME</p>

          <h2>Explore my professional profile.</h2>

          <p>
            Discover my education, technical skills, internship
            experience, certifications and web development projects.
          </p>

          <div className="resume-highlights">
            {highlights.map((item) => (
              <span key={item}>
                <CheckCircle2 size={15} />
                {item}
              </span>
            ))}
          </div>

          <div className="resume-actions">
            <a
              href="/resume.pdf"
              download="Amit-Kumar-Resume.pdf"
              className="btn primary"
            >
              Download Resume
              <Download size={17} />
            </a>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn secondary"
            >
              View Resume
              <ArrowUpRight size={17} />
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default ResumeSection;
