import { motion } from "framer-motion";
import { GraduationCap, CalendarDays } from "lucide-react";
import education from "../data/education";

function Education() {
  return (
    <section id="education" className="section">
      <div className="section-heading">
        <p className="eyebrow">EDUCATION</p>

        <h2>Education & learning.</h2>

        <p>
          My academic background and the foundation behind my
          development journey.
        </p>
      </div>

      <div className="timeline">
        {education.map((item, index) => (
          <motion.article
            className="timeline-item"
            key={item.id}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.5,
              delay: index * 0.1,
            }}
          >
            <div className="timeline-dot" />

            <div className="timeline-content">
              <div className="education-meta">
                <span>
                  <CalendarDays size={14} />
                  {item.duration}
                </span>

                <span>
                  Result: <strong>{item.result}</strong>
                </span>
              </div>

              <div className="education-title">
                <GraduationCap size={23} />

                <div>
                  <h3>{item.degree}</h3>
                  <p className="institution">{item.institution}</p>
                </div>
              </div>

              <p className="education-description">
                {item.description}
              </p>

              {item.subjects?.length > 0 && (
                <div className="tech-list">
                  {item.subjects.map((subject) => (
                    <span key={subject}>{subject}</span>
                  ))}
                </div>
              )}

              <div className="education-tag">
                <GraduationCap size={14} />
                Academic Qualification
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

export default Education;
