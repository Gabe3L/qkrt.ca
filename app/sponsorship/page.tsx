import type { Metadata } from "next";
import Image from "next/image";
import competition1 from "@/app/assets/competition/competition1.webp";
import agile from "@/app/assets/sponsors/agile.webp";
import att from "@/app/assets/sponsors/att.webp";
import cvs from "@/app/assets/sponsors/cvs.webp";
import exxon from "@/app/assets/sponsors/exxon.webp";
import isowater from "@/app/assets/sponsors/isowater.webp";
import kenesto from "@/app/assets/sponsors/kenesto.webp";
import mgChemicals from "@/app/assets/sponsors/mg_chemicals.webp";
import oracle from "@/app/assets/sponsors/oracle.webp";
import queensEngineering from "@/app/assets/sponsors/queens.webp";
import redbull from "@/app/assets/sponsors/red_bull.webp";
import solidworks from "@/app/assets/sponsors/solidworks.webp";
import studica from "@/app/assets/sponsors/studica.webp";
import { PageHero } from "../components/PageHero";

export const metadata: Metadata = {
  title: "Sponsorship",
};

const sponsors = [
  { name: "AT&T", href: "https://www.att.jobs/", image: att },
  {
    name: "SolidWorks",
    href: "https://www.solidworks.com/",
    image: solidworks,
  },
  { name: "Red Bull", href: "https://www.redbull.com/ca-en", image: redbull },
  { name: "Oracle", href: "https://www.oracle.com/", image: oracle },
  { name: "CVS Health", href: "https://www.cvshealth.com/", image: cvs },
  {
    name: "ExxonMobil",
    href: "https://corporate.exxonmobil.com/",
    image: exxon,
  },
  {
    name: "Agile Manufacturing",
    href: "https://agile-manufacturing.com/",
    image: agile,
  },
  { name: "Kenesto", href: "https://www.kenesto.com/", image: kenesto },
  {
    name: "MG Chemicals",
    href: "https://mgchemicals.com/",
    image: mgChemicals,
  },
  { name: "Studica", href: "https://www.studica.co/", image: studica },
  {
    name: "Queen's Smith Engineering",
    href: "https://www.queensu.ca/",
    image: queensEngineering,
  },
  { name: "Isowater", href: "https://www.isowater.com/", image: isowater },
];

export default function SponsorshipPage() {
  return (
    <main className="standard-page sponsorship-page">
      <PageHero
        eyebrow="Build the future with us"
        title="Our Sponsors"
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
              The team receives generous aid from its sponsors, creating a space
              that encourages creativity with reduced financial stress with
              consideration to competition, equipment, and design programs.
            </p>
            <br />
            <p>
              Every contribution is greatly appreciated. The team actively works
              toward producing at the level that represents the encouragement
              its sponsors have shown.
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
              Queen&apos;s Knights Robotics Team values each and every sponsor
              immensely. Every contribution is greatly appreciated.
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
