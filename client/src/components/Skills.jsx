import { motion } from "framer-motion";
import {
  Code2,
  Palette,
  Braces,
  Atom,
  GitBranch,
  Server,
  Database,
  Layers,
} from "lucide-react";

const skills = [
  {
    name: "HTML5",
    category: "Frontend",
    icon: Code2,
    level: 95,
  },
  {
    name: "CSS3",
    category: "Frontend",
    icon: Palette,
    level: 92,
  },
  {
    name: "JavaScript",
    category: "Frontend",
    icon: Braces,
    level: 88,
  },
  {
    name: "React.js",
    category: "Frontend",
    icon: Atom,
    level: 82,
  },
  {
    name: "Git & GitHub",
    category: "Tools",
    icon: GitBranch,
    level: 85,
  },
  {
    name: "Node.js",
    category: "Backend",
    icon: Server,
    level: 72,
  },
  {
    name: "Express.js",
    category: "Backend",
    icon: Layers,
    level: 70,
  },
  {
    name: "PostgreSQL",
    category: "Database",
    icon: Database,
    level: 68,
  },
];

function Skills() {
  return (
    <section id="skills" className="section skills">
      <div className="section-heading center">
        <p className="eyebrow">TECHNICAL SKILLS</p>

        <h2>Technologies I work with.</h2>

        <p>
          A growing technology stack focused on modern frontend,
          backend and database development.
        </p>
      </div>

      <div className="skills-grid">
        {skills.map((skill, index) => {
          const Icon = skill.icon;

          return (
            <motion.div
              className="skill-card"
              key={skill.name}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.5,
                delay: index * 0.06,
              }}
            >
              <div className="skill-icon">
                <Icon size={22} />
              </div>

              <div className="skill-info">
                <div className="skill-top">
                  <div>
                    <strong>{skill.name}</strong>
                    <small>{skill.category}</small>
                  </div>

                  <span>{skill.level}%</span>
                </div>

                <div
                  className="skill-bar"
                  aria-label={`${skill.name} skill level ${skill.level}%`}
                >
                  <motion.div
                    className="skill-progress"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 1,
                      delay: 0.15 + index * 0.05,
                      ease: "easeOut",
                    }}
                  />
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

export default Skills;
