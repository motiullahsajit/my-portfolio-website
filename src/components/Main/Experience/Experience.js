import React, { useState } from "react";
import "./Experience.css";

const experienceData = [
  {
    company: "GadgetsAllBd",
    companyLink: "https://gadgetsallbd.com/",
    role: "Developer",
    workType: "Part-Time",
    duration: "Jan 2024 – Present",
    description: `
    <ul>
        <li>Developed GadgetsAllBd, an e-commerce platform for gadgets, contributing to significant business success in Bangladesh.</li>
        <li>Achieved revenue generation of approximately 5 million BDT, with the platform handling up to 7k users on a good day.</li>
        <li>Applied full-stack development skills in a real-world environment, enhancing the online marketplace's functionality and user experience.</li>
    </ul>
    `,
    techStack: ["WordPress"],
  },
  {
    company: "Shikkha",
    companyLink: "https://dev.shikkha.dev/",
    role: "Developer & Operations Manager",
    workType: "Full-time",
    duration: "Mar 2024 – May 2024",
    description: `
    <ul>
        <li>Joined Shikkha, a startup focused on creating an e-learning platform for skill development courses.</li>
        <li>Despite the project's closure due to funding challenges, gained valuable insights into the startup ecosystem and the complexities of bringing innovative ideas to fruition.</li>
    </ul>
    `,
    techStack: ["TypeScript", "Next.js", "Google Cloud Platform"],
  },
  {
    company: "Justice AI",
    role: "Front-end Developer",
    companyLink: "https://justice-frontend-v3.vercel.app/",
    workType: "Contract",
    duration: "Nov 2023 – Dec 2023",
    description: `
      <ul>
        <li>Collaborated with a startup to develop Jstice AI, a platform aimed at connecting freelance lawyers with clients through an AI-powered chatbot.</li>
        <li>Gained valuable experience in the legal tech domain despite the project facing funding challenges.</li>
      </ul>
    `,
    techStack: ["TypeScript", "React"],
  },
  {
    company: "Wellavi",
    companyLink: "https://wellavi.com/",
    role: "Contract Developer",
    workType: "Contract",
    duration: "Jul 2023 – Nov 2023",
    description: `
    <ul>
        <li>Developed a comprehensive Admin Dashboard for Wellavi’s CEO and the Management team.</li>
        <li>Addressed the need for effective management of users and coaches, content tracking, and data analysis.</li>
        <li>Delivered a powerful tool that enabled the management team to:
        <ul>
            <li>Monitor user and coach growth.</li>
            <li>Track activities and content created by coaches.</li>
            <li>Onboard new coaches efficiently.</li>
            <li>Gain a comprehensive overview of platform dynamics.</li>
        </ul>
        </li>
        <li>Secured the contract through Upwork: <a target="_blank" href="https://www.upwork.com/freelancers/~01f38a315bc53adc2b">Link</a></li>
    </ul>
    `,
    techStack: [
      "JavaScript",
      "React",
      "Redux",
      "MUI",
      "Node.js",
      "Express",
      "MongoDB",
    ],
  },
  {
    company: "Team Codemars",
    companyLink: "https://team-codemars.web.app/",
    role: "Founder",
    workType: "Full-Time",
    duration: "Jan 2023 – Mar 2023",
    description: `
    <ul>
        <li>Initiated Team Codemars, an e-learning platform aimed at teaching coding skills.</li>
        <li>Despite the project being paused due to low student enrollment, gained insights into the challenges of scaling educational platforms.</li>
    </ul>
    `,
    techStack: [
      "JavaScript",
      "React",
      "Redux",
      "MUI",
      "Node.js",
      "Express",
      "MongoDB",
    ],
  },
  {
    company: "Quality Life",
    role: "MERN Stack Developer",
    workType: "Contract",
    duration: "Jan 2022 – Sep 2022",
    description: `
    <ul>
        <li>Developed and maintained a mental health app for Quality Life, addressing client requirements and resolving technical challenges.</li>
        <li>Implemented key features, including:
          <ul>
            <li>Taking user input about their mental condition.</li>
            <li>Suggesting videos based on user inputs.</li>
            <li>Facilitating communication between users and professional counselors.</li>
            <li>Fixing counselor appointments.</li>
            <li>Tracking user activities and onboarding professional counselors through the web app admin panel.</li>
          </ul>
        </li>
    </ul>
    `,
    techStack: [
      "JavaScript",
      "React",
      "React Native",
      "Redux",
      "MUI",
      "Node.js",
      "Express",
      "MongoDB",
    ],
  },
  {
    company: "Onethread",
    companyLink: "https://www.onethreadapp.com/",
    role: "Full-Stack Intern",
    workType: "Internship",
    duration: "Jun 2021 – Sep 2021",
    description: `
    <ul>
        <li>Secured an internship at Onethread through LinkedIn and contributed to enhancing their company management tool.</li>
        <li>Focused on developing the admin dashboard, including:
          <ul>
            <li>Tracking user activities and growth.</li>
            <li>Tracking companies and updating subscriptions.</li>
            <li>Providing a comprehensive overview of the platform.</li>
          </ul>
        </li>
    </ul>
    `,
    techStack: [
      "TypeScript",
      "React",
      "Redux",
      "Node.js",
      "Express",
      "MongoDB",
      "AWS S3",
    ],
  },
  {
    company: "Isolpro",
    companyLink: "https://isolpro.in/",
    role: "JavaScript Developer Intern",
    workType: "Internship",
    duration: "May 2021 – Jun 2021",
    description: `
    <ul>
        <li>Launched my tech career as a JavaScript Developer intern at Isolpro, contributing to an <a target="_blank" href="https://tradecondowntown.shop/">e-commerce platform.</a></li>
        <li>Developed key front-end components, including the landing page, product pages, search, cart, and checkout functionalities.</li>
        <li>View my <a target="_blank" href="https://drive.google.com/file/d/1OnFN0A5VhDd37pcSKEtqMw5M6XPg19kB/view?usp=sharing">Internship Certificate</a>.</li>
    </ul>
    `,
    techStack: ["JavaScript", "JQuery", "HTML", "SCSS", "PHP"],
  },
];

const Experience = () => {
  const [visibleExperiences, setVisibleExperiences] = useState(3);

  const handleShowMore = () => {
    setVisibleExperiences(experienceData.length);
  };

  return (
    <section className="experience container-fluid" id="experience">
      <div className="experience-content container">
        <h2 className="experience-title">Professional Milestones</h2>
        <div className="experience-list">
          {experienceData.slice(0, visibleExperiences).map((item, index) => (
            <div key={index} className="experience-item">
              <div className="experience-header">
                <h3 className="company-name">
                  <a
                    href={item.companyLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {item.company}
                  </a>
                </h3>
                <h4 className="role">{item.role}</h4>
                <span className="work-type">{item.workType}</span>
                <span className="duration">{item.duration}</span>
              </div>
              <div
                className="description"
                dangerouslySetInnerHTML={{ __html: item.description }}
              />
              <div className="tech-stack">
                <p>Technology Stack:</p>
                <div>
                  {item.techStack.map((tech, techIndex) => (
                    <span key={techIndex} className="tech">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        {visibleExperiences < experienceData.length && (
          <div className="show-more-container">
            <button
              onClick={handleShowMore}
              className="btn btn-danger"
              style={{ background: "#353353", border: "none" }}
            >
              Show More
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Experience;
