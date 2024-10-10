import React from "react";
import "./Achievements.css";

const achievements = [
  {
    id: 1,
    title: "NASA Space Apps Challenge 2024",
    dates: "2024",
    description: `
      Selected as one of the top 50 physical participants worldwide. Our team, Green Gladiators, received recognition from companies, mentors, and U.S. Ambassadors for developing an innovative agricultural solution leveraging NASA data to empower farmers with real-time insights.
      - Built an IoT system to monitor crop conditions and provide actionable insights for better decision-making.
    `,
    link: "https://www.linkedin.com/feed/update/urn:li:activity:1234567890123456/",
    projectLinks: [
      {
        name: "Project Presentation",
        url: "https://www.youtube.com/watch?v=zCoGuD7HUaU",
      },
      {
        name: "Project Repo",
        url: "https://github.com/motiullahsajit/crops-armor",
      },
    ],
  },
  ,
  {
    id: 2,
    title: "Code Samurai Finalist 2024",
    dates: "2024",
    description: `
      Led the team to 16th place out of 400 teams in Phase 1 and represented DIU in Phase 2 as the sole representative among 91 teams. Developed web and mobile solutions for efficient waste management.
      - Web App (EcoSync): Streamlined waste management and environmental data tracking.
      - Mobile App (Eco Connect): Built with React Native for reporting waste issues, creating events, and volunteering.
    `,
    link: "https://www.linkedin.com/feed/update/urn:li:activity:7196532501861875714/",
    projectLinks: [
      {
        name: "EcoSync (Web App)",
        url: "https://github.com/motiullahsajit/cs24-p2-untitled",
      },
      {
        name: "Eco Connect (Mobile App)",
        url: "https://github.com/motiullahsajit/eco-connect",
      },
    ],
  },
  {
    id: 3,
    title: "Take Off Programming Contest 2023",
    dates: "2023",
    description: `
      Ranked 9th in Phase 1 (400 participants) and 35th in the final round (400 participants) out of 1600 in the Take Off Programming Contest organized by DIU.
    `,
  },
  {
    id: 4,
    title: "Fun with Code Programming Contest 2022",
    dates: "2022",
    description: `
      Secured 1st place in the CIS department's programming contest, showcasing coding skills and problem-solving abilities.
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
              <p className="achievement-description">
                {achievement.description}
              </p>
              {achievement.projectLinks &&
                achievement.projectLinks.map((project, index) => (
                  <>
                    <a
                      key={index}
                      href={project.url}
                      className="achievement-link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {project.name}
                    </a>
                    <br />
                  </>
                ))}
              {achievement.link && (
                <>
                  <a
                    href={achievement.link}
                    className="achievement-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    LinkedIn Post
                  </a>
                  <br />
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
