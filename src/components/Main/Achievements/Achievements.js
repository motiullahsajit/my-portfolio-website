import React from "react";
import "./Achievements.css";

const achievements = [
  {
    id: 1,
    title: "Code Samurai Finalist 2024",
    dates: "2024",
    description: `
      Code Samurai is a national inter-university hackathon that occurs in three phases. Our team, UNTITLED, secured 16th position in Phase 1 out of 400 teams. In Phase 2, we emerged as the sole representative from Daffodil International University among 91 teams. Throughout the competition, I led the coding efforts, shaped our web application, and developed a mobile app in the final round.
    `,
    link: "https://www.linkedin.com/feed/update/urn:li:activity:7196532501861875714/",
  },
  {
    id: 2,
    title: "Fun with Code Programming Contest 2022",
    dates: "2022",
    description: `
      In the programming contest organized by the CIS department, I secured first position. This contest was an excellent opportunity to demonstrate my coding skills and problem-solving abilities.
    `,
    link: "https://www.linkedin.com/feed/update/urn:li:activity:6968183101676027904/",
  },
];

const Achievements = () => {
  return (
    <section id="achievements" className="achievements-section">
      <div className="container">
        <h2 className="section-title">Recognition</h2>
        <div className="achievements-list">
          {achievements.map((achievement) => (
            <div key={achievement.id} className="achievement-card">
              <h3 className="achievement-title">{achievement.title}</h3>
              <p className="achievement-dates">{achievement.dates}</p>
              <p className="achievement-description">
                {achievement.description}
              </p>
              <a
                href={achievement.link}
                className="achievement-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn Post
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
