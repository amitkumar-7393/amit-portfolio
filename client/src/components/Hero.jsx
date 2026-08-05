import { motion } from "framer-motion";
import { ArrowUpRight, Github, Linkedin, Mail, Code2, Database } from "lucide-react";

function Hero() {
  return (
    <section id="home" className="hero section">
      <div className="hero-content">
        <motion.p
          className="eyebrow"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          AVAILABLE FOR OPPORTUNITIES
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Hi, I'm <span>Amit Kumar</span>.
          <br />
          I build digital experiences.
        </motion.h1>

        <motion.p
          className="hero-description"
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Full Stack Web Developer focused on building clean,
          responsive and scalable web applications with modern
          technologies.
        </motion.p>

        <motion.div
          className="hero-buttons"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <a href="#projects" className="btn primary">
            View My Work
            <ArrowUpRight size={18} />
          </a>

          <a href="#contact" className="btn secondary">
            Let's Talk
          </a>
        </motion.div>

        <motion.div
          className="socials"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <a
            href="https://github.com/amitkumar-7393"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <Github size={20} />
          </a>

          <a
            href="https://www.linkedin.com/in/amit-kumar-8a12b1352"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <Linkedin size={20} />
          </a>

          <a
            href="mailto: kamit948954@gmail.com"
            aria-label="Email"
          >
            <Mail size={20} />
          </a>
        </motion.div>
      </div>

      <motion.div
        className="hero-card"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >

<motion.div
  className="profile-3d"
  animate={{ rotateY: [0, 360] }}
  transition={{
    duration: 8,
    repeat: Infinity,
    ease: "linear",
  }}
>
  <div className="profile-face profile-front">
    <img src="/profile.jpg" alt="Amit Kumar" />
  </div>

  <div className="profile-face profile-back">
    <span>AK</span>
  </div>

  <div className="profile-face profile-right"></div>
  <div className="profile-face profile-left"></div>
  <div className="profile-face profile-top"></div>
  <div className="profile-face profile-bottom"></div>
</motion.div>
        

        <motion.div
          className="floating-card card-one"
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          <Code2 size={18} />
          <span>Frontend</span>
        </motion.div>

        <motion.div
          className="floating-card card-two"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
        >
          <Database size={18} />
          <span>Backend</span>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Hero;
