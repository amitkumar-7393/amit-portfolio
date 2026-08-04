import { motion } from "framer-motion";
import { ExternalLink, Award, Briefcase, CalendarDays } from "lucide-react";
import experience from "../data/experience";

function Experience() {
  return (
    <section id="experience" className="section">
      <div className="section-heading">
        <p className="eyebrow">EXPERIENCE</p>

        <h2>Experience & certifications.</h2>

        <p>
          My practical experience, internships and professional
          certifications.
        </p>
      </div>

      <div className="experience-wrapper">
        {experience.map((item, index) => {
          const isCertification = item.type === "Certification";

          return (
            <motion.article
              className="experience-card"
              key={item.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
            >
              <div className="experience-icon">
                {isCertification ? (
                  <Award size={21} />
                ) : (
                  <Briefcase size={21} />
                )}
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
                    <CalendarDays size={14} />
                    {item.duration}
                  </span>
                </div>

                <p className="experience-description">
                  {item.description}
                </p>

                {item.skills?.length > 0 && (
                  <div className="experience-skills">
                    {item.skills.map((skill) => (
                      <span key={skill}>{skill}</span>
                    ))}
                  </div>
                )}

                {item.verificationUrl && (
                  <a
                    href={item.verificationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="certificate-link"
                  >
                    <Award size={15} />
                    Verify Certificate
                    <ExternalLink size={14} />
                  </a>
                )}
              </div>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}

export default Experience;
