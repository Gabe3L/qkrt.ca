import type { Metadata } from "next";
import Image from "next/image";
import competition1 from "@/app/assets/competition/competition1.webp";
import isowater from "@/app/assets/sponsors/isowater.webp";
import mgChemicals from "@/app/assets/sponsors/mg_chemicals.webp";
import queensEngineering from "@/app/assets/sponsors/queens.webp";
import studica from "@/app/assets/sponsors/studica.webp";
import { PageHero } from "../components/PageHero";
import { focusRing, heading, sectionPadding, siteContainer } from "../tailwind";

export const metadata: Metadata = {
  title: "Sponsors",
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

const sponsorshipTiers = [
  {
    name: "Platinum",
    amount: "$5,000+",
    spanClass: "col-span-3",
    benefits: [
      "Large logo placement on the robot, team apparel, and website",
      "Featured sponsor profile on the website",
      "Dedicated sponsor recognition on social media",
      "Robot demonstration at a company event, where practical and within reasonable travel distance",
      "Personalized season-impact video",
      "Team apparel package",
      "All Gold benefits",
    ],
  },
  {
    name: "Gold",
    amount: "$2,500–$4,999",
    spanClass: "col-span-3",
    benefits: [
      "Prominent logo placement on the robot",
      "Prominent logo placement on team apparel and website",
      "Featured sponsor profile",
      "Sponsor recognition on social media",
      "Opportunity for a team visit, presentation, or other sponsor engagement",
      "Two team shirts",
      "All Silver benefits",
    ],
  },
  {
    name: "Silver",
    amount: "$1,000–$2,499",
    spanClass: "col-span-2",
    benefits: [
      "Larger logo placement on team apparel and website",
      "Logo placement on the robot",
      "Company profile on the website",
      "Sponsor recognition on social media",
      "All Bronze benefits",
    ],
  },
  {
    name: "Bronze",
    amount: "$500–$999",
    spanClass: "col-span-2",
    benefits: [
      "Logo on team apparel",
      "Logo on the sponsor section of the website",
      "Sponsor recognition on social media",
      "All Base benefits",
    ],
  },
  {
    name: "Base",
    amount: "$100–$499",
    spanClass: "col-span-2",
    benefits: [
      "Recognition on Team Documents",
      "Sponsor thank-you post",
      "Digital team thank-you photo",
    ],
  },
];

export default function SponsorshipPage() {
  return (
    <main className="bg-qk-base">
      <PageHero
        eyebrow="Build the future with us"
        title="Sponsors"
        description="Our partners give student engineers the tools, materials, and opportunities to turn ambitious ideas into competition-ready robots."
        image={competition1}
        imageAlt="QKRT members supporting their robots at ARCC 2026"
      />

      <section className={`${sectionPadding} bg-qk-base`}>
        <div
          className={`${siteContainer} grid grid-cols-[minmax(520px,.8fr)_minmax(0,1.2fr)] items-start gap-[clamp(42px,6vw,80px)] max-[1080px]:grid-cols-1 max-[1080px]:gap-7`}
        >
          <div>
            <p
              className={`${heading} mb-0 max-w-130 text-[clamp(32px,4.5vw,54px)] leading-[1.08] max-[1080px]:max-w-[min(520px,100%)] max-[1080px]:text-[clamp(24px,8vw,44px)]`}
            >
              Partnership powers progress.
            </p>
          </div>
          <div>
            <p className="mb-4 text-[17px] leading-[1.7] text-qk-muted">
              Our team brings together students to develop competition-ready
              robotic systems from the ground up. Sponsorship directly expands
              what our students are able to design, manufacture, test and learn.
            </p>
            <p className="mb-4 text-[17px] leading-[1.7] text-qk-muted">
              ARCC attracts students who voluntarily spend hundreds of
              hours each year applying engineering, programming, manufacturing,
              leadership, and project-management skills beyond the classroom.
              Sponsorship gives organizations an opportunity to build
              relationships with these students before they enter the workforce.
            </p>
          </div>
        </div>
      </section>

      <section
        className={`${sectionPadding} bg-qk-base`}
        aria-labelledby="sponsorship-tiers-title"
      >
        <div className={siteContainer}>
          <div className="grid grid-cols-6 gap-5 max-[1080px]:grid-cols-2 max-[700px]:grid-cols-1">
            {sponsorshipTiers.map((tier) => (
              <article
                className={`relative overflow-hidden border border-qk-border bg-qk-surface p-[clamp(26px,3vw,36px)] before:absolute before:inset-x-0 before:top-0 before:h-1 before:bg-qk-red before:content-[''] max-[1080px]:col-span-1 ${tier.spanClass}`}
                key={tier.name}
              >
                <div className="mb-6.5 flex items-start justify-between gap-6 border-b border-qk-border pb-6">
                  <div>
                    <h3
                      className={`${heading} mb-1 text-[clamp(28px,3vw,38px)]`}
                    >
                      {tier.name}
                    </h3>
                    <p className="mb-0 font-brand text-[13px] tracking-[.05em] text-qk-red uppercase">
                      {tier.amount}
                    </p>
                  </div>
                </div>
                <ul className="grid gap-3.25">
                  {tier.benefits.map((benefit) => (
                    <li
                      className="relative pl-5.5 text-[15px] leading-[1.55] text-qk-muted before:absolute before:top-[.62em] before:left-0 before:h-1.75 before:w-1.75 before:rotate-45 before:bg-qk-red before:content-['']"
                      key={benefit}
                    >
                      {benefit}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={`${sectionPadding} bg-qk-base`}>
        <div className={siteContainer}>
          <div className="grid grid-cols-4 gap-5 max-[820px]:grid-cols-3 max-[560px]:grid-cols-2 max-[560px]:gap-3">
            {sponsors.map((sponsor) => (
              <a
                className={`${focusRing} grid h-40 place-items-center border border-qk-border bg-qk-surface p-7 transition-[border-color,transform] duration-150 hover:-translate-y-0.75 hover:border-qk-red motion-reduce:transition-none max-[560px]:h-32.5 max-[560px]:p-5`}
                href={sponsor.href}
                target="_blank"
                rel="noreferrer"
                aria-label={sponsor.name}
                key={sponsor.name}
              >
                <span className="relative h-full min-h-0 w-full min-w-0">
                  <Image
                    className="object-contain"
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

      <section className={`${sectionPadding} bg-qk-base`}>
        <div
          className={`${siteContainer} grid grid-cols-[.8fr_1.2fr] items-start gap-20 max-[820px]:grid-cols-1 max-[820px]:gap-11`}
        >
          <div>
            <h2 className={`${heading} mb-5.5 text-[clamp(36px,5vw,54px)]`}>
              Become a Partner?
            </h2>
            <p className="mb-4 text-[17px] text-qk-muted">
              Queen&apos;s Knights Robotics deeply values each and every
              sponsor. Every contribution plays an important role in aiding the
              growth of our team.
            </p>
          </div>
          <a
            className={`${focusRing} flex min-h-57.5 flex-col justify-between border border-qk-border bg-qk-surface p-8.5 transition-[border-color,transform] duration-150 hover:-translate-y-0.75 hover:border-qk-red motion-reduce:transition-none max-[560px]:px-5.5 max-[560px]:py-6.5`}
            href="mailto:sponsorship@qkrt.ca?subject=Sponsorship%20and%20partnership%20inquiry"
          >
            <span className="font-brand text-xs tracking-[.08em] text-qk-red uppercase">
              Partnership inquiries
            </span>
            <strong className="text-[clamp(20px,3vw,30px)] wrap-anywhere">
              sponsorship@qkrt.ca
            </strong>
            <b className="font-brand text-xs font-normal tracking-[.08em] uppercase">
              Start a conversation →
            </b>
          </a>
        </div>
      </section>
    </main>
  );
}
