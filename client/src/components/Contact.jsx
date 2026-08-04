import { useState } from "react";
import { Mail, MapPin, Phone, Send, Linkedin, Github } from "lucide-react";
import { submitContactForm } from "../services/api";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState({
    type: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setForm((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    setStatus({
      type: "",
      message: "",
    });

    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setStatus({
        type: "error",
        message: "Please fill in name, email and message.",
      });
      return;
    }

    setLoading(true);

    try {
      const response = await submitContactForm(form);

      setStatus({
        type: "success",
        message: response.message || "Message sent successfully.",
      });

      setForm({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      setStatus({
        type: "error",
        message:
          error.message ||
          "Something went wrong. Please try again later.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="section">
      <div className="section-heading">
        <span className="eyebrow">CONTACT</span>

        <h2>Let's work together.</h2>

        <p>
          Have a project, opportunity, or idea? Send me a message and
          I'll get back to you.
        </p>
      </div>

      <div className="contact-box">
        <div className="contact-intro">
          <h3>Get in touch</h3>

          <p>
            I'm open to internships, freelance projects, and
            frontend development opportunities.
          </p>

          <div className="contact-details">
            <div className="contact-detail">
              <div className="contact-detail-icon">
                <Mail size={18} />
              </div>

              <div>
                <span>Email</span>
                <a href="mailto:amitkumar@example.com">
                  amitkumar@example.com
                </a>
              </div>
            </div>

            <div className="contact-detail">
              <div className="contact-detail-icon">
                <MapPin size={18} />
              </div>

              <div>
                <span>Location</span>
                <p>Noida, India</p>
              </div>
            </div>

            <div className="contact-detail">
              <div className="contact-detail-icon">
                <Phone size={18} />
              </div>

              <div>
                <span>Availability</span>
                <p>Open to opportunities</p>
              </div>
            </div>
          </div>

          <div className="contact-socials">
            <a
              href="https://github.com/amitkumar-7393"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <Github size={18} />
            </a>

            <a
              href="https://www.linkedin.com/in/amit-kumar-8a12b1352/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="name">Name *</label>

              <input
                id="name"
                name="name"
                type="text"
                value={form.name}
                onChange={handleChange}
                placeholder="Your name"
                maxLength={100}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email *</label>

              <input
                id="email"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                placeholder="you@example.com"
                maxLength={255}
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
              value={form.subject}
              onChange={handleChange}
              placeholder="What is this about?"
              maxLength={200}
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message *</label>

            <textarea
              id="message"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Tell me about your project..."
              rows="7"
              maxLength={5000}
              required
            />
          </div>

          {status.message && (
            <div
              className={`form-status ${
                status.type === "success" ? "success" : "error"
              }`}
              role="alert"
            >
              {status.type === "success" && <Send size={16} />}
              {status.message}
            </div>
          )}

          <button
            type="submit"
            className="btn primary submit-btn"
            disabled={loading}
          >
            {loading ? "Sending..." : "Send Message"}
            {!loading && <Send size={16} />}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
