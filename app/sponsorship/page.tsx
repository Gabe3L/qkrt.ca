import type { Metadata } from "next";
import Image from "next/image";
import competition1 from "@/app/assets/competition/competition1.webp";
import isowater from "@/app/assets/sponsors/isowater.webp";
import mgChemicals from "@/app/assets/sponsors/mg_chemicals.webp";
import queensEngineering from "@/app/assets/sponsors/queens.webp";
import studica from "@/app/assets/sponsors/studica.webp";
import { PageHero } from "../components/PageHero";

export const metadata: Metadata = {
  title: "Sponsorship",
};

const sponsors = [
  {
    name: "MG Chemicals",
    href: "https://mgchemicals.com/",
    image: mgChemicals,
  },
  {
    name: "Isowater Corp.",
    href: "https://www.isowater.com/",
    image: isowater,
  },
  {
    name: "Smith Engineering",
    href: "https://www.queensu.ca/",
    image: queensEngineering,
  },
  {
    name: "Studica Robotics",
    href: "https://www.studica.co/",
    image: studica,
  },
];

export default function SponsorshipPage() {
  return (
    <main className="standard-page sponsorship-page">
      <PageHero
        eyebrow="Build the future with us"
        title="Sponsors"
        description="Our partners give student engineers the tools, materials, and opportunities to turn ambitious ideas into competition-ready robots."
        image={competition1}
        imageAlt="QKRT members supporting their robots at RoboMaster"
      />

      <section className="sponsor-intro section-pad">
        <div className="site-container sponsor-intro__copy">
          <div className="sponsor-intro__lead">
            <p>Partnership powers progress.</p>
          </div>
          <div>
            <p>
              Our team brings together students to develop competition-ready robotic 
              systems from the ground up. Sponsorship directly expands what our students 
              are able to design, manufacture, test and learn.
            </p>
            <br />
            <p>
              RoboMaster attracts students who voluntarily spend hundreds of hours 
              each year applying engineering, programming, manufacturing, leadership, 
              and project-management skills beyond the classroom. Sponsorship gives 
              organizations an opportunity to build relationships with these students 
              before they enter the workforce.
            </p>
          </div>
        </div>
      </section>

      <section className="sponsor-grid-section section-pad">
        <div className="site-container">
          <div className="sponsor-grid">
            {sponsors.map((sponsor) => (
              <a
                href={sponsor.href}
                target="_blank"
                rel="noreferrer"
                aria-label={sponsor.name}
                key={sponsor.name}
              >
                <span className="sponsor-grid__logo">
                  <Image
                    src={sponsor.image}
                    alt={sponsor.name}
                    fill
                    sizes="(max-width: 620px) 50vw, (max-width: 900px) 33vw, 25vw"
                  />
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="sponsor-contact section-pad">
        <div className="site-container sponsor-contact__grid">
          <div>
            <h2>Become a Partner?</h2>
            <p>
              Queen&apos;s Knights Robotics deeply values each and every 
              sponsor. Every contribution plays an important role in aiding
              the growth of our team.
            </p>
          </div>
          <a
            className="sponsor-contact__email"
            href="mailto:sponsorship@qkrt.ca?subject=Sponsorship%20and%20partnership%20inquiry"
          >
            <span>Partnership inquiries</span>
            <strong>sponsorship@qkrt.ca</strong>
            <b>Start a conversation →</b>
          </a>
        </div>
      </section>
    </main>
  );
}
