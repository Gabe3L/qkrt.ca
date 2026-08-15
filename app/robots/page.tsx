import type { Metadata } from "next";
import Image from "next/image";
import hero1 from "@/app/assets/robots/hero1.webp";
import hero2 from "@/app/assets/robots/hero2.webp";
import infantry1 from "@/app/assets/robots/infantry1.webp";
import infantry2 from "@/app/assets/robots/infantry2.webp";
import robots2 from "@/app/assets/robots/robots2.webp";
import sentry1 from "@/app/assets/robots/sentry1.webp";
import sentry2 from "@/app/assets/robots/sentry2.webp";
import { PageHero } from "../components/PageHero";

export const metadata: Metadata = {
  title: "Robots",
};

const robots = [
  {
    name: "Sentry",
    lead: "The Sentry is the only fully autonomous robot on the battlefield.",
    points: [
      "Equipped with a machine learning-based computer vision algorithm.",
      "Uses onboard camera images to precisely aim and fire at enemy robots.",
      "Follows a rail in front of the opposing team's base.",
    ],
    images: [sentry2, sentry1],
    imageAlts: [
      "Sentry robot facing the camera",
      "Sentry robot in the RoboMaster arena",
    ],
  },
  {
    name: "Hero",
    lead: "The Hero is the mightiest ground robot in the game.",
    points: [
      "Fires golf balls dealing tenfold damage compared to plastic pellets.",
      "Though costly and slow, it excels in attacking enemy outposts.",
      "Smaller, swifter robots can corner and overpower it due to its weight and lower speed.",
    ],
    images: [hero1, hero2],
    imageAlts: ["CAD model of the Hero robot", "Hero robot in competition"],
  },
  {
    name: "Infantry",
    lead: "The Infantry is a nimble ground robot designed for precision combat and tactical adaptability.",
    points: [
      "Fires seventeen-millimeter pellets rapidly.",
      "Proves highly vexing to opponents when controlled by a clever operator and a well-thought-out strategy.",
    ],
    images: [infantry1, infantry2],
    imageAlts: ["Infantry robot in the lab", "Infantry robot in competition"],
  },
];

export default function RobotsPage() {
  return (
    <main className="standard-page robots-page">
      <PageHero
        eyebrow="Engineered for RoboMaster"
        title="Robots"
        description="Mechanical design, embedded control, and intelligent autonomy come together in a fleet built for a fast-moving arena."
        image={robots2}
        imageAlt="QKRT robots in the lab"
      />

      <section className="robots-intro section-pad">
        <div className="site-container robots-intro__panel">
          <div className="robots-intro__copy">
            <p className="robots-intro__eyebrow">The competition</p>
            <h2>Learn the game.</h2>
            <p className="robots-intro__description">
              In the North American <em>RoboMaster Competition</em>, teams
              design and build three robots for a dynamic, paintball-like game.
              A new game each season sends every team back to the drawing board.
            </p>
            <a
              className="robots-intro__manual-link"
              href="/RoboMaster 2026 University League Rule Manual.pdf"
              target="_blank"
            >
              <span>2026 Game Manual</span>
              <span aria-hidden="true">↗</span>
            </a>
          </div>

          <div
            className="robots-intro__details"
            aria-label="Competition details"
          >
            <div>
              <strong>08</strong>
              <span>Years of Competition</span>
            </div>
            <div>
              <strong>07</strong>
              <span>3v3 World Ranking</span>
            </div>
            <div>
              <strong>05</strong>
              <span>1v1 World Ranking</span>
            </div>
          </div>
        </div>
        <div className="site-container">
          <p className="robots-intro__handoff">
            Meet the robots we created and tested last season.
          </p>
        </div>
      </section>

      <section className="robot-list">
        {robots.map((robot, index) => (
          <article
            className={`robot-feature ${
              index % 2 === 1 ? "robot-feature--reverse" : ""
            }`}
            key={robot.name}
          >
            <div className="site-container robot-feature__inner">
              <div className="robot-feature__copy">
                <p className="robot-feature__index">0{index + 1}</p>
                <h2>{robot.name}</h2>
                <p className="robot-feature__lead">{robot.lead}</p>
                <ul>
                  {robot.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
              <div className="robot-feature__images">
                {robot.images.map((image, imageIndex) => (
                  <Image
                    src={image}
                    alt={robot.imageAlts[imageIndex]}
                    key={robot.imageAlts[imageIndex]}
                    sizes="(max-width: 760px) 50vw, 25vw"
                  />
                ))}
              </div>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}
