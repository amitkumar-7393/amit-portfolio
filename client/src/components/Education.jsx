import { motion } from "framer-motion";
import {
  GraduationCap,
  CalendarDays,
  MapPin,
  BookOpen,
} from "lucide-react";

const education = [
  {
    period: "2024 — 2026",
    degree: "Master of Computer Applications (MCA)",
    institution: "Bundelkhand University, Jhansi",
    location: "Jhansi, Uttar Pradesh, India",
    description:
      "Pursuing MCA with a focus on software development, web technologies, programming, databases and modern application development.",
  },
  {
    period: "Completed",
    degree: "Bachelor's Degree in Computer Applications",
    institution: "Computer Applications",
    location: "India",
    description:
      "Built a foundation in programming, computer science concepts, web development and software applications.",
  },
];

function Education() {
  return (
    <section id="education" className="section education">
      <div className="section-heading center">
        <p className="eyebrow">EDUCATION</p>

        <h2>My academic journey.</h2>

        <p>
          My academic background has helped me build a strong foundation
          in computer applications and software development.
        </p>
      </div>

      <div className="timeline">
        {education.map((item, index) => (
          <motion.article
            className="timeline-item"
            key={`${item.degree}-${index}`}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.6,
              delay: index * 0.15,
            }}
          >
            <div className="timeline-dot" />

            <div className="timeline-content">
              <div className="education-meta">
                <span>
                  <CalendarDays size={15} />
                  {item.period}
                </span>

                <span>
                  <MapPin size={15} />
                  {item.location}
                </span>
              </div>

              <div className="education-title">
                <GraduationCap size={27} />

                <div>
                  <h3>{item.degree}</h3>

                  <p className="institution">
                    {item.institution}
                  </p>
                </div>
              </div>

              <p className="education-description">
                {item.description}
              </p>

              <div className="education-tag">
                <BookOpen size={15} />
                Computer Applications & Software Development
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

export default Education;
