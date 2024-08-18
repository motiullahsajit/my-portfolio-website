import React from "react";
import "./VolunteerWork.css";

const volunteerExperiences = [
  {
    id: 1,
    title: "Golden Vault",
    dates: "June 2024 - Present",
    description: `
      I am currently volunteering with the Software Engineering Club at DIU on a project called Golden Vault. This platform is designed to facilitate mentorship programs where university alumni mentor current students in skill development and career planning.
    `,
  },
  {
    id: 2,
    title: "Career Development Center (CDC-DIU)",
    dates: "Feb 2023 - Feb 2024",
    description: `
      As a Career Ambassador at CDC DIU, I dedicated my time to supporting individuals in their professional development. My role involved providing insights, guidance, and resources to help students navigate their career paths. I also played a key role in the successful organization of the DIU Job Utsob, working with the management team on two occasions.
    `,
  },
];

const VolunteerWork = () => {
  return (
    <section id="volunteering" className="volunteer-section">
      <div className="container">
        <h2 className="section-title">Community Involvement</h2>
        <div className="v-experience-list">
          {volunteerExperiences.map((experience) => (
            <div key={experience.id} className="v-experience-card">
              <h3 className="v-experience-title">{experience.title}</h3>
              <p className="v-experience-dates">{experience.dates}</p>
              <p className="v-experience-description">
                {experience.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VolunteerWork;
