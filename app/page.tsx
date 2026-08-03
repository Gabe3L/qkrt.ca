import type { Metadata } from "next";
import Image from "next/image";
import competition1 from "@/app/assets/competition/competition1.webp";
import robots1 from "@/app/assets/robots/robots1.webp";
import robots2 from "@/app/assets/robots/robots2.webp";
import team1 from "@/app/assets/team/team1.webp";
import team2 from "@/app/assets/team/team2.webp";

export const metadata: Metadata = {
  title: "Home",
};

const discoveryCards = [
  {
    title: "Our Team",
    href: "/our-team",
    image: team2,
    alt: "Queen's Knights team members with their robot",
  },
  {
    title: "Robots",
    href: "/robots",
    image: robots2,
    alt: "Queen's Knights robots in the lab",
  },
  {
    title: "Outreach",
    href: "/outreach",
    image: team1,
    alt: "Queen's Knights members sharing robotics with the community",
  },
];

export default function Home() {
  return (
    <main className="home-page">
      <section className="home-hero">
        <Image
          className="home-hero__image"
          src={robots1}
          alt="Queen's Knights robot in a RoboMaster arena"
          sizes="100vw"
          priority
        />
        <div className="home-hero__overlay">
          <h1>Queen&apos;s Knights Robotics Team</h1>
          <p>Fostering excellence in robotics since 2018</p>
        </div>
      </section>

      <section className="mission-section section-pad">
        <div className="mission-section__inner">
          <div className="mission-section__copy">
            <h2>Our Misson</h2>
            <p>
              Empowering students to develop in-demand robotics skills by
              fostering excellence in the design, fabrication, and programming
              of advanced robots.
            </p>
            <h3>Competition Goals:</h3>
            <p>
              We design high-performance robots, make thoughtful strategic
              decisions, and continuously improve through testing, leadership,
              and learning from each match.
            </p>
            <h3>Inclusion:</h3>
            <p>
              We foster a welcoming culture that values diversity and ensures
              equal access to training, mentorship, and leadership.
            </p>
          </div>
          <Image
            src={competition1}
            alt="QKRT members watching a RoboMaster match"
            sizes="(max-width: 900px) 100vw, 50vw"
          />
        </div>
      </section>

      <section className="discovery-section section-pad">
        <div className="site-container">
          <h2>Discover the Queen&apos;s Knights</h2>
          <div className="discovery-grid">
            {discoveryCards.map((card) => (
              <a className="discovery-card" href={card.href} key={card.href}>
                <Image
                  src={card.image}
                  alt={card.alt}
                  sizes="(max-width: 760px) 100vw, 33vw"
                />
                <span>{card.title}</span>
              </a>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
