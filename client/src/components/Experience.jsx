import { ExternalLink, Award, Briefcase } from "lucide-react";
import experience from "../data/experience";

const Experience = () => {
  return (
    <section id="experience" className="section">
      <div className="section-heading">
        <span className="eyebrow">EXPERIENCE</span>

        <h2>Experience & certifications.</h2>

        <p>
          My practical experience, internships and professional
          certifications.
        </p>
      </div>

      <div className="experience-list">
        {experience.map((item) => {
          const isCertification = item.type === "Certification";

          return (
            <article className="experience-card" key={item.id}>
              <div className="experience-icon">
                {isCertification ? (
                  <Award size={21} />
                ) : (
                  <Briefcase size={21} />
                )}
              </div>

              <div className="experience-content">
                <div className="experience-header">
                  <div>
                    <span className="experience-type">
                      {item.type}
                    </span>

                    <h3>{item.role}</h3>

                    <h4>{item.company}</h4>
                  </div>

                  <span className="experience-duration">
                    {item.duration}
                  </span>
                </div>

                <p className="experience-description">
                  {item.description}
                </p>

                {item.skills?.length > 0 && (
                  <div className="tech-list">
                    {item.skills.map((skill) => (
                      <span key={skill}>{skill}</span>
                    ))}
                  </div>
                )}

                <div className="experience-actions">
                  {item.verificationUrl && (
                    <a
                      href={item.verificationUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                    >
                      Verify Certificate
                      <ExternalLink size={14} />
                    </a>
                  )}

                  {item.certificate && (
                    <span className="certificate-name">
                      <Award size={15} />
                      {item.certificate}
                    </span>
                  )}
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Experience;
