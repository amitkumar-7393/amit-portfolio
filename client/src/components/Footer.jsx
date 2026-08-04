import { Github, Linkedin, ArrowUp } from "lucide-react";

function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="footer">
      <div className="footer-main">
        <div className="footer-brand">
          <a href="#home" className="logo">
            AK<span>.</span>
          </a>

          <p>
            Full Stack Web Developer building modern,
            responsive and user-friendly web applications.
          </p>
        </div>

        <div className="footer-links">
          <div>
            <h4>Navigation</h4>

            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#experience">Experience</a>
            <a href="#contact">Contact</a>
          </div>

          <div>
            <h4>Connect</h4>

            <a
              href="https://github.com/amitkumar-7393"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github size={16} />
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/amit-kumar-8a12b1352"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin size={16} />
              LinkedIn
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          © {currentYear} Amit Kumar. All rights reserved.
        </p>

        <button
          type="button"
          className="back-to-top"
          onClick={scrollToTop}
          aria-label="Back to top"
        >
          Back to top
          <ArrowUp size={16} />
        </button>
      </div>
    </footer>
  );
}

export default Footer;
