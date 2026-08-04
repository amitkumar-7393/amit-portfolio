import { GraduationCap, CalendarDays } from "lucide-react";
import education from "../data/education";

const Education = () => {
  return (
    <section id="education" className="section">
      <div className="section-heading">
        <span className="eyebrow">EDUCATION</span>

        <h2>Education & learning.</h2>

        <p>
          My academic background and the foundation behind my
          development journey.
        </p>
      </div>

      <div className="education-grid">
        {education.map((item) => (
          <article className="education-card" key={item.id}>
            <div className="education-icon">
              <GraduationCap size={22} />
            </div>

            <div className="education-content">
              <div className="education-duration">
                <CalendarDays size={15} />
                <span>{item.duration}</span>
              </div>

              <h3>{item.degree}</h3>

              <h4>{item.institution}</h4>

              <p>{item.description}</p>

              {item.subjects?.length > 0 && (
                <div className="tech-list">
                  {item.subjects.map((subject) => (
                    <span key={subject}>{subject}</span>
                  ))}
                </div>
              )}

              <div className="education-result">
                Result: <strong>{item.result}</strong>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Education;
