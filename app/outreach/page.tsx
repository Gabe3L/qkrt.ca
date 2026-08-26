import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import infantry1 from "@/app/assets/robots/infantry1.webp";
import sentry1 from "@/app/assets/robots/sentry1.webp";
import team1 from "@/app/assets/team/team1.webp";
import { PageHero } from "../components/PageHero";
import { focusRing, heading, redButton, sectionPadding, siteContainer } from "../tailwind";

export const metadata: Metadata = {
  title: "Outreach",
};

export default function OutreachPage() {
  return (
    <main className="bg-qk-base">
      <PageHero
        eyebrow="Robotics beyond the arena"
        title="Outreach"
        description="We nurture an early interest in science, technology, engineering, and mathematics through welcoming, hands-on robotics experiences."
        image={team1}
        imageAlt="QKRT members at a robotics outreach event"
        imagePosition="top"
      />

      <section className={`${sectionPadding} bg-qk-base`}>
        <div className={`${siteContainer} grid grid-cols-[1.25fr_.75fr] items-center gap-18 max-[820px]:grid-cols-1 max-[820px]:gap-8.5`}>
          <div>
            <h2 className={`${heading} mb-6 text-[clamp(28px,3vw,41px)]`}>QKRT x Queen&apos;s Science &amp; Engineering Academy</h2>
            <p className="mb-4 text-[17px] text-qk-muted">
              We partnered with QSEA to deliver an interactive workshop
              experience for students in grades 7–12 to broaden their knowledge
              of robotics and the potential career paths robotics can provide.
            </p>
            <p className="mb-4 text-[17px] text-qk-muted">
              We participated in the QGEM science fair to inspire youth about
              possibilities within STEM-related fields and introduce robotics in
              a friendly and engaging way fit for ages 8–10.
            </p>
            <Link className={`${focusRing} ${redButton}`} href="/contact">
              Interested in partnering?
            </Link>
          </div>
          <Image
            className="aspect-square w-full object-cover"
            src={team1}
            alt="QKRT members at a robotics outreach event"
            sizes="(max-width: 900px) 100vw, 50vw"
          />
        </div>
      </section>

      <section className={`${sectionPadding} bg-qk-base`}>
        <div className={`${siteContainer} grid grid-cols-[.8fr_1.2fr] items-center gap-18 max-[820px]:grid-cols-1 max-[820px]:gap-8.5`}>
          <div className="grid grid-cols-2 gap-3 max-[820px]:order-2">
            <Image
              className="aspect-square w-full object-cover"
              src={sentry1}
              alt="QKRT sentry robot"
              sizes="(max-width: 900px) 50vw, 25vw"
            />
            <Image
              className="aspect-square w-full object-cover"
              src={infantry1}
              alt="QKRT infantry robot"
              sizes="(max-width: 900px) 50vw, 25vw"
            />
          </div>
          <div>
            <h2 className={`${heading} mb-6 text-[clamp(28px,3vw,41px)]`}>QKRT x Science Quest</h2>
            <p className="mb-4 text-[17px] text-qk-muted">
              Over the summer of 2023 we partnered with Science Quest to deliver
              an engaging and interactive workshop with grade 4–9 students in
              the Robotics Camp. Students learned about the fundamental systems
              in robotics, CAD, current research, and career opportunities.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
