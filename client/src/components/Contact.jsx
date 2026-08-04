import { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  MapPin,
  Send,
  Github,
  Linkedin,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";

const initialForm = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

function Contact() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState("idle");
  const [message, setMessage] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;

    setForm((previous) => ({
      ...previous,
      [name]: value,
    }));

    if (status !== "idle") {
      setStatus("idle");
      setMessage("");
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!form.name || !form.email || !form.message) {
      setStatus("error");
      setMessage("Please fill in your name, email and message.");
      return;
    }

    setStatus("sending");
    setMessage("");

    try {
      const apiUrl =
        import.meta.env.VITE_API_URL || "http://localhost:5000/api";

      const response = await fetch(`${apiUrl}/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.message || "Unable to send your message."
        );
      }

      setStatus("success");
      setMessage(
        "Your message has been sent successfully. Thank you!"
      );

      setForm(initialForm);
    } catch (error) {
      setStatus("error");
      setMessage(
        error.message ||
          "Something went wrong. Please try again later."
      );
    }
  };

  return (
    <section id="contact" className="section contact">
      <div className="section-heading center">
        <p className="eyebrow">GET IN TOUCH</p>

        <h2>Let's build something great.</h2>

        <p>
          Have a project, internship opportunity or collaboration in
          mind? Send me a message and I'll get back to you.
        </p>
      </div>

      <div className="contact-box">
        <motion.div
          className="contact-content"
          initial={{ opacity: 0, x: -25 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="contact-intro">
            <h3>Let's talk.</h3>

            <p>
              I'm interested in web development opportunities,
              internships, freelance work and meaningful
              collaborations.
            </p>
          </div>

          <div className="contact-details">
            <div className="contact-detail">
              <div className="contact-detail-icon">
                <Mail size={19} />
              </div>

              <div>
                <span>Email</span>

                <a href="mailto:your-email@example.com">
                  your-email@example.com
                </a>
              </div>
            </div>

            <div className="contact-detail">
              <div className="contact-detail-icon">
                <MapPin size={19} />
              </div>

              <div>
                <span>Location</span>

                <p>Noida, Uttar Pradesh, India</p>
              </div>
            </div>
          </div>

          <div className="contact-socials">
            <a
              href="https://github.com/amitkumar-7393"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <Github size={19} />
            </a>

            <a
              href="https://www.linkedin.com/in/amit-kumar-8a12b1352"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <Linkedin size={19} />
            </a>
          </div>
        </motion.div>

        <motion.form
          className="contact-form"
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 25 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="name">Name</label>

              <input
                id="name"
                name="name"
                type="text"
                placeholder="Your name"
                value={form.name}
                onChange={handleChange}
                autoComplete="name"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>

              <input
                id="email"
                name="email"
                type="email"
                placeholder="your@email.com"
                value={form.email}
                onChange={handleChange}
                autoComplete="email"
                required
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="subject">Subject</label>

            <input
              id="subject"
              name="subject"
              type="text"
              placeholder="How can I help?"
              value={form.subject}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>

            <textarea
              id="message"
              name="message"
              rows="6"
              placeholder="Tell me about your project or opportunity..."
              value={form.message}
              onChange={handleChange}
              required
            />
          </div>

          {status === "success" && (
            <div className="form-status success" role="status">
              <CheckCircle2 size={18} />
              <span>{message}</span>
            </div>
          )}

          {status === "error" && (
            <div className="form-status error" role="alert">
              <AlertCircle size={18} />
              <span>{message}</span>
            </div>
          )}

          <button
            type="submit"
            className="btn primary submit-btn"
            disabled={status === "sending"}
          >
            {status === "sending" ? (
              "Sending..."
            ) : (
              <>
                Send Message
                <Send size={17} />
              </>
            )}
          </button>
        </motion.form>
      </div>
    </section>
  );
}

export default Contact;
