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
import { focusRing, heading, sectionPadding, siteContainer } from "../tailwind";

export const metadata: Metadata = {
  title: "Robots",
  alternates: {
    canonical: "/robots/",
  },
};

const robots = [
  {
    name: "Sentry",
    lead: "The Sentry is a fully autonomous robot deployed to the battlefield.",
    points: [
      "Equipped with a machine learning-based computer vision algorithm.",
      "Uses onboard camera images to precisely aim and fire at enemy robots.",
      "Follows a rail in front of the opposing team's base.",
    ],
    images: [sentry2, sentry1],
    imageAlts: [
      "Sentry robot facing the camera",
      "Sentry robot in the ARCC arena",
    ],
  },
  {
    name: "Hero",
    lead: "The Hero is the mightiest robot in the game and shoots projectiles double the size.",
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
    <main className="bg-qk-base">
      <PageHero
        eyebrow="Engineered for ARCC"
        title="Robots"
        description="Mechanical design, embedded control, and intelligent autonomy come together in a fleet built for a fast-moving arena."
        image={robots2}
        imageAlt="QKRT robots in the lab"
      />

      <section
        className={`${sectionPadding} relative overflow-hidden bg-qk-base bg-[radial-gradient(circle_at_82%_20%,rgb(237_28_36/12%),transparent_34%)]`}
      >
        <div
          className={`${siteContainer} grid grid-cols-[minmax(0,1fr)_minmax(260px,.38fr)] items-end gap-[clamp(42px,7vw,92px)] border border-qk-border border-t-[3px] border-t-qk-red bg-qk-surface p-[clamp(38px,5vw,62px)] shadow-[0_24px_70px_rgb(0_0_0/22%)] max-[760px]:grid-cols-1 max-[760px]:gap-9.5 max-[760px]:px-6 max-[760px]:py-7.5`}
        >
          <div>
            <p className="mb-3.5 font-brand text-[13px] tracking-[.16em] text-qk-red uppercase">
              The competition
            </p>
            <h2
              className={`${heading} mb-5.5 max-w-195 text-[clamp(34px,4.5vw,58px)] leading-[1.04]`}
            >
              Learn the game.
            </h2>
            <p className="mb-0 max-w-180 text-[clamp(17px,1.8vw,20px)] leading-[1.65] text-qk-muted">
              In the North American{" "}
              <em className="text-qk-red">ARC Competition</em>,
              teams design and build three robots for a dynamic, paintball-like
              game. A new game each season sends every team back to the drawing
              board.
            </p>
            <a
              className={`${focusRing} mt-7.5 inline-flex min-w-[min(100%,280px)] items-center justify-between gap-4.5 border border-qk-red bg-qk-red px-5.5 py-4 font-brand text-sm uppercase transition-[filter,transform] duration-150 hover:-translate-y-0.5 hover:brightness-90 motion-reduce:transition-none`}
              href="/RoboMaster 2026 University League Rule Manual.pdf"
              target="_blank"
              rel="noreferrer"
            >
              <span>2026 Game Manual</span>
              <span
                className="font-body text-xl leading-none"
                aria-hidden="true"
              >
                ↗
              </span>
            </a>
          </div>

          <div
            className="border-t border-qk-border max-[760px]:grid max-[760px]:grid-cols-2 max-[420px]:grid-cols-1"
            aria-label="Competition details"
          >
            <div className="grid grid-cols-[74px_1fr] items-center gap-4.5 border-b border-qk-border px-1 py-6.5 max-[760px]:first:border-r max-[760px]:first:border-qk-border max-[760px]:grid-cols-1 max-[760px]:content-start max-[760px]:px-4 max-[760px]:py-5 max-[420px]:grid-cols-[64px_1fr] max-[420px]:px-0 max-[420px]:first:border-r-0">
              <strong className="font-display text-[42px] leading-none text-qk-red">
                08
              </strong>
              <span className="font-brand text-[13px] leading-[1.45] text-qk-muted uppercase">
                Years of Competition
              </span>
            </div>
            <div className="grid grid-cols-[74px_1fr] items-center gap-4.5 border-b border-qk-border px-1 py-6.5 max-[760px]:grid-cols-1 max-[760px]:content-start max-[760px]:px-4 max-[760px]:py-5 max-[420px]:grid-cols-[64px_1fr] max-[420px]:px-0">
              <strong className="font-display text-[42px] leading-none text-qk-red">
                07
              </strong>
              <span className="font-brand text-[13px] leading-[1.45] text-qk-muted uppercase">
                3v3 World Ranking
              </span>
            </div>
            <div className="grid grid-cols-[74px_1fr] items-center gap-4.5 border-b border-qk-border px-1 py-6.5 max-[760px]:grid-cols-1 max-[760px]:content-start max-[760px]:px-4 max-[760px]:py-5 max-[420px]:grid-cols-[64px_1fr] max-[420px]:px-0">
              <strong className="font-display text-[42px] leading-none text-qk-red">
                05
              </strong>
              <span className="font-brand text-[13px] leading-[1.45] text-qk-muted uppercase">
                1v1 World Ranking
              </span>
            </div>
          </div>
        </div>
        <div className={siteContainer}>
          <p className="mt-8.5 mb-0 text-center font-brand text-sm tracking-[.08em] text-qk-muted uppercase">
            Meet the robots we created and tested last season.
          </p>
        </div>
      </section>

      <section>
        {robots.map((robot, index) => (
          <article
            className="bg-qk-base py-20 max-[560px]:py-14.5"
            key={robot.name}
          >
            <div
              className={`${siteContainer} grid grid-cols-[.85fr_1.15fr] items-center gap-17.5 max-[820px]:grid-cols-1 max-[820px]:gap-8.5`}
            >
              <div
                className={
                  index % 2 === 1 ? "order-2 max-[820px]:order-0" : ""
                }
              >
                <p className="mb-0.5 font-display text-[17px] text-qk-red">
                  0{index + 1}
                </p>
                <h2
                  className={`${heading} mb-6 text-[clamp(42px,6vw,68px)] max-[560px]:text-5xl`}
                >
                  {robot.name}
                </h2>
                <p className="font-brand text-lg leading-[1.45] uppercase">
                  {robot.lead}
                </p>
                <ul className="mt-5 mb-0 pl-6.5 text-qk-muted">
                  {robot.points.map((point) => (
                    <li className="mb-2" key={point}>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
              <div
                className={`grid grid-cols-2 gap-3.5 max-[560px]:gap-2 ${index % 2 === 1 ? "order-1 max-[820px]:order-0" : ""}`}
              >
                {robot.images.map((image, imageIndex) => (
                  <Image
                    className="aspect-square w-full object-cover"
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
