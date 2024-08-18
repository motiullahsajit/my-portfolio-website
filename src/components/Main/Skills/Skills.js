import React from "react";
import "./Skills.css";

const skillsData = [
  {
    category: "Languages",
    skills: ["TypeScript", "JavaScript", "C", "C++", "Java"],
  },
  {
    category: "Frameworks & Libraries",
    skills: [
      "Next.js",
      "React.js",
      "React Native",
      "Redux",
      "Tailwind",
      "shadcn/ui",
      "Node.js",
      "Express.js",
    ],
  },
  {
    category: "Databases",
    skills: ["MongoDB", "MySql"],
  },
  {
    category: "Tools & Platforms",
    skills: ["Git", "GitHub", "Docker", "Adobe XD", "Figma"],
  },
];

const Skills = () => {
  return (
    <section className="skills" id="skills">
      <div className="skills-header">
        <h2>Areas Where I Shine</h2>
      </div>
      <div className="skills-grid">
        {skillsData.map((categoryData, index) => (
          <div key={index} className="skills-card">
            <h3>{categoryData.category}</h3>
            <div className="skills-list">
              {categoryData.skills.map((skill, skillIndex) => (
                <span key={skillIndex} className="skill-item">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
