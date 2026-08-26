import type { Metadata } from "next";
import Image from "next/image";
import team2 from "@/app/assets/team/team2.webp";
import teamStructure from "@/app/assets/team/team_structure.webp";
import { PageHero } from "../components/PageHero";
import { heading, sectionPadding, siteContainer } from "../tailwind";

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
    <main className="bg-qk-base">
      <PageHero
        eyebrow="The people behind the machines"
        title="Our Team"
        description="A close-knit, interdisciplinary group of Queen's students building advanced robots and the skills to lead beyond the arena."
        image={team2}
        imageAlt="Queen's Knights Robotics at competition"
        imagePosition="top"
      />

      <section className={`${sectionPadding} bg-qk-base`}>
        <div className={siteContainer}>
          <div className="grid grid-cols-2 gap-5 max-[560px]:grid-cols-1">
            {visionItems.map((item) => (
              <article className="relative min-h-62.5 overflow-hidden border border-qk-border bg-qk-surface p-9.5 max-[560px]:min-h-0 max-[560px]:px-6.5 max-[560px]:py-7.5" key={item.number}>
                <span className="absolute top-1.5 right-4.5 font-display text-[112px] leading-none text-qk-muted/10">{item.number}</span>
                <h3 className={`${heading} relative mb-5 text-[26px] text-qk-red`}>{item.title}</h3>
                <p className="relative mb-0 text-[17px] text-qk-muted">{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={`${sectionPadding} bg-qk-base pt-0`}>
        <div className={siteContainer}>
          <div className="border border-qk-border bg-qk-surface p-9.5 max-[560px]:px-6 max-[560px]:py-7">
            <h2 className={`${heading} mb-3.5 text-[clamp(34px,4vw,48px)]`}>Sub-Teams:</h2>
            <p className="mb-6 text-[17px]">The 2025–26 team structure consists of six sub-teams:</p>
            <div className="grid grid-cols-2 gap-x-11 gap-y-5.5 max-[820px]:grid-cols-1">
              {subteams.map((team) => (
                <article className="border-l-2 border-qk-red pl-5" key={team.name}>
                  <h3 className="mb-0.75 font-body text-lg leading-[1.1] normal-case">{team.name}</h3>
                  <p className="mb-0 text-[15px] leading-[1.35]">
                    <strong>Focus:</strong> {team.focus}
                  </p>
                  <p className="mb-0 text-[15px] leading-[1.35]">{team.detail}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className={`${sectionPadding} bg-qk-base`}>
        <div className={siteContainer}>
          <Image
            className="mt-11 w-full bg-white"
            src={teamStructure}
            alt="QKRT 2025–2026 team structure"
            sizes="(max-width: 1200px) 100vw, 1200px"
          />
        </div>
      </section>
    </main>
  );
}
