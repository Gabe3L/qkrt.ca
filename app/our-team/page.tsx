import type { Metadata } from "next";
import Image from "next/image";
import team2 from "@/app/assets/team/team2.webp";
import teamStructure from "@/app/assets/team/team_structure.webp";
import { PageHero } from "../components/PageHero";

export const metadata: Metadata = {
  title: "Our Team",
};

const visionItems = [
  {
    number: "01",
    title: "Premier Team",
    body: "To emerge as the premier robotics team at Queen's University, fostering an inclusive environment for building industry-ready skills.",
  },
  {
    number: "02",
    title: "Competition Victory",
    body: "To achieve victory in the prestigious North American RoboMaster competition and showcase top-tier innovation on a global stage.",
  },
  {
    number: "03",
    title: "Education",
    body: "To empower the next generation through robotics education and hands-on workshops in our community.",
  },
  {
    number: "04",
    title: "Community Impact",
    body: "To forge a lasting legacy through meaningful outreach, inspiring future engineers and strengthening our ties with the community.",
  },
];

const subteams = [
  {
    name: "Mechanical Team",
    focus: "Designing and manufacturing two new robots for the 2025–26 season.",
    detail:
      "They bring the team's robotic visions to life by constructing and perfecting the team's robots.",
  },
  {
    name: "Software Team",
    focus: "Developing advanced autonomy and embedded control systems.",
    detail:
      "They're divided into four specialized projects working on distinct aspects of software innovation and integration.",
  },
  {
    name: "Electrical Team",
    focus:
      "Building a power management system using supercapacitors to store and release excess energy.",
    detail: "They ensure every robot runs smoothly and efficiently.",
  },
  {
    name: "Robot Academy",
    focus:
      "Introducing first-year students to hands-on robotics through guided projects.",
    detail: "Members learn basic programming that prepares them for sub-teams.",
  },
  {
    name: "The Business and Operations Team",
    focus:
      "Managing the team's finances, marketing, and sponsorship initiatives.",
    detail:
      "They handle outreach, social media, and keep the organization running smoothly.",
  },
  {
    name: "Advising Team",
    focus:
      "Providing strategic direction, mentorship, and technical feedback across all sub-teams.",
    detail:
      "Made up of experienced members who ensure continued growth and success.",
  },
];

export default function AboutPage() {
  return (
    <main className="standard-page about-page">
      <PageHero
        eyebrow="The people behind the machines"
        title="Our Team"
        description="A close-knit, interdisciplinary group of Queen's students building advanced robots and the skills to lead beyond the arena."
        image={team2}
        imageAlt="Queen's Knights Robotics Team at competition"
        imagePosition="top"
      />

      <section className="vision-section section-pad">
        <div className="site-container">
          <div className="vision-grid">
            {visionItems.map((item) => (
              <article className="vision-card" key={item.number}>
                <span>{item.number}</span>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="team-details section-pad">
        <div className="site-container">
          <div className="team-details__panel">
            <h2>Sub-Teams:</h2>
            <p>The 2025–26 team structure consists of six sub-teams:</p>
            <div className="subteam-list">
              {subteams.map((team) => (
                <article key={team.name}>
                  <h3>{team.name}</h3>
                  <p>
                    <strong>Focus:</strong> {team.focus}
                  </p>
                  <p>{team.detail}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="team-gallery-section section-pad">
        <div className="site-container">
          <Image
            className="team-structure"
            src={teamStructure}
            alt="QKRT 2025–2026 team structure"
            sizes="(max-width: 1200px) 100vw, 1200px"
          />
        </div>
      </section>
    </main>
  );
}
