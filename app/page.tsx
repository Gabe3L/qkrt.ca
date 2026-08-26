import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import competition1 from "@/app/assets/competition/competition1.webp";
import robots1 from "@/app/assets/robots/robots1.webp";
import robots2 from "@/app/assets/robots/robots2.webp";
import team1 from "@/app/assets/team/team1.webp";
import team2 from "@/app/assets/team/team2.webp";
import { focusRing, heading, siteContainer } from "./tailwind";

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
    <main className="bg-qk-base">
      <section className="relative mx-auto h-dvh w-full overflow-hidden bg-qk-base before:pointer-events-none before:absolute before:inset-x-0 before:-bottom-px before:z-10 before:h-[clamp(60px,12vh,120px)] before:bg-[linear-gradient(180deg,transparent_0%,rgb(9_10_15/36%)_28%,#090a0f_100%)] before:backdrop-blur-[10px] before:mask-[linear-gradient(180deg,transparent_0%,black_55%)] before:content-[''] after:absolute after:inset-0 after:bg-[linear-gradient(180deg,rgb(9_10_15/14%)_0%,rgb(237_28_36/5%)_48%,rgb(9_10_15/68%)_100%)] after:content-['']">
        <Image
          className="h-full w-full object-cover object-[center_54%] brightness-75 saturate-[1.2] max-[820px]:object-[center_60%]"
          src={robots1}
          alt="Queen's Knights robot in a RoboMaster arena"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center px-7 py-10 text-center [text-shadow:0_3px_18px_rgb(0_0_0/70%)] max-[820px]:px-6 max-[820px]:py-7 max-[560px]:px-5">
          <h1
            className={`${heading} mb-8.5 max-w-295 text-[clamp(34px,3.5vw,45px)] tracking-[.015em] max-[820px]:mb-10.5 max-[820px]:max-w-87.5 max-[820px]:text-[clamp(42px,12vw,58px)] max-[820px]:leading-[.97]`}
          >
            Queen&apos;s Knights Robotics
          </h1>
          <p className="mb-0 font-brand text-[clamp(17px,2.2vw,26px)] uppercase max-[820px]:max-w-87.5 max-[820px]:text-[23px] max-[820px]:leading-[1.35]">
            Fostering excellence in robotics since 2018
          </p>
        </div>
      </section>

      <section className="bg-qk-base py-[clamp(64px,8vw,104px)] max-[560px]:pt-14 max-[560px]:pb-16">
        <div
          className={`${siteContainer} grid grid-cols-[minmax(280px,.85fr)_minmax(0,1.15fr)] items-center gap-[clamp(40px,6vw,80px)] max-[820px]:grid-cols-1`}
        >
          <div className="max-[820px]:px-1.5">
            <h2
              className={`${heading} mb-5.5 text-4xl whitespace-nowrap max-[820px]:text-[clamp(32px,9vw,42px)]`}
            >
              Our Mission
            </h2>
            <p className="mb-0 text-[17px] leading-[1.62] text-qk-muted">
              Empowering students to develop in-demand robotics skills by
              fostering excellence in the design, fabrication, and programming
              of advanced robots.
            </p>
            <h3
              className={`${heading} mt-7.5 mb-2.5 text-[clamp(20px,2vw,25px)]`}
            >
              Competition Goals:
            </h3>
            <p className="mb-0 text-[17px] leading-[1.62] text-qk-muted">
              We design high-performance robots, make thoughtful strategic
              decisions, and continuously improve through testing, leadership,
              and learning from each match.
            </p>
            <h3
              className={`${heading} mt-7.5 mb-2.5 text-[clamp(20px,2vw,25px)]`}
            >
              Inclusion:
            </h3>
            <p className="mb-0 text-[17px] leading-[1.62] text-qk-muted">
              We foster a welcoming culture that values diversity and ensures
              equal access to training, mentorship, and leadership.
            </p>
          </div>
          <Image
            className="h-[clamp(420px,43vw,520px)] w-full object-cover max-[820px]:mt-1.5 max-[820px]:h-auto max-[820px]:max-h-120"
            src={competition1}
            alt="QKRT members watching a RoboMaster match"
            sizes="(max-width: 900px) 100vw, 50vw"
          />
        </div>
      </section>

      <section className="bg-qk-base py-[clamp(72px,8vw,104px)] max-[560px]:pt-16 max-[560px]:pb-18">
        <div className={siteContainer}>
          <h2
            className={`${heading} mb-10 text-[clamp(28px,3.2vw,40px)] max-[560px]:mb-7`}
          >
            Discover the Queen&apos;s Knights
          </h2>
          <div className="grid grid-cols-3 gap-[clamp(20px,2.5vw,32px)] max-[1050px]:gap-6.5 max-[820px]:grid-cols-1 max-[820px]:gap-4.5">
            {discoveryCards.map((card) => (
              <Link
                className={`${focusRing} group relative min-h-76.5 overflow-hidden rounded border border-qk-border bg-qk-surface shadow-[0_4px_16px_rgb(0_0_0/22%)] transition-[border-color,box-shadow] duration-200 after:absolute after:inset-0 after:bg-[linear-gradient(180deg,rgb(0_0_0/4%)_25%,rgb(0_0_0/80%)_100%)] after:content-[''] hover:border-qk-red hover:shadow-[0_12px_28px_rgb(237_28_36/14%)] motion-reduce:transition-none max-[820px]:min-h-0`}
                href={card.href}
                key={card.href}
              >
                <Image
                  className="h-76.5 w-full object-cover transition-transform duration-300 group-hover:scale-[1.045] motion-reduce:transition-none max-[820px]:h-80"
                  src={card.image}
                  alt={card.alt}
                  sizes="(max-width: 760px) 100vw, 33vw"
                />
                <span className="absolute inset-x-6 bottom-5.5 z-10 text-center font-display text-[25px] uppercase transition-colors duration-200 group-hover:text-white motion-reduce:transition-none">
                  {card.title}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
