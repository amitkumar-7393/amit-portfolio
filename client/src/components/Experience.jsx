import { motion } from "framer-motion";
import {
  BriefcaseBusiness,
  CalendarDays,
  Award,
  ExternalLink,
  CheckCircle2,
} from "lucide-react";

const experiences = [
  {
    period: "01 Jul 2026 — 31 Jul 2026",
    role: "Web Development Intern",
    company: "CODSOFT",
    type: "Virtual Internship · 4 Weeks",
    credential: "C.I.D: 920eedf",
    description:
      "Successfully completed a 4-week virtual internship program in Web Development, contributing to practical tasks and projects while developing hands-on frontend development skills.",
    skills: [
      "Web Development",
      "Frontend Development",
      "Responsive Design",
      "JavaScript",
      "Project Development",
    ],
  },
];

const certifications = [
  {
    title: "React and Redux",
    issuer: "KnowledgeGate",
    date: "July 5, 2026",
    score: "90%",
    certificateId: "CERT-1783268475042-2E0765E0",
    verificationUrl:
      "https://knowledgegate.in/certificate/842C7A86",
  },
];

function Experience() {
  return (
    <section id="experience" className="section experience">
      <div className="section-heading center">
        <p className="eyebrow">EXPERIENCE & CERTIFICATIONS</p>

        <h2>Learning, building and growing.</h2>

        <p>
          Practical experience and certifications that represent my
          continuous journey in software and web development.
        </p>
      </div>

      <div className="experience-wrapper">
        <div className="experience-list">
          {experiences.map((item, index) => (
            <motion.article
              className="experience-card"
              key={`${item.company}-${item.role}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
            >
              <div className="experience-icon">
                <BriefcaseBusiness size={23} />
              </div>

              <div className="experience-content">
                <div className="experience-top">
                  <div>
                    <p className="experience-company">
                      {item.company}
                    </p>

                    <h3>{item.role}</h3>
                  </div>

                  <span className="experience-type">
                    {item.type}
                  </span>
                </div>

                <div className="experience-meta">
                  <span>
                    <CalendarDays size={15} />
                    {item.period}
                  </span>

                  <span>
                    <Award size={15} />
                    {item.credential}
                  </span>
                </div>

                <p className="experience-description">
                  {item.description}
                </p>

                <div className="experience-skills">
                  {item.skills.map((skill) => (
                    <span key={skill}>
                      <CheckCircle2 size={14} />
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="certifications">
          <div className="subsection-heading">
            <p className="eyebrow">CERTIFICATIONS</p>

            <h3>Professional learning.</h3>
          </div>

          <div className="certification-grid">
            {certifications.map((certificate, index) => (
              <motion.article
                className="certification-card"
                key={certificate.certificateId}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
              >
                <div className="certificate-icon">
                  <Award size={25} />
                </div>

                <div className="certificate-content">
                  <p className="certificate-issuer">
                    {certificate.issuer}
                  </p>

                  <h4>{certificate.title}</h4>

                  <div className="certificate-details">
                    <span>Score: {certificate.score}</span>
                    <span>{certificate.date}</span>
                  </div>

                  <p className="certificate-id">
                    Certificate ID:
                    <br />
                    {certificate.certificateId}
                  </p>

                  <a
                    href={certificate.verificationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="certificate-link"
                  >
                    Verify Certificate
                    <ExternalLink size={15} />
                  </a>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
