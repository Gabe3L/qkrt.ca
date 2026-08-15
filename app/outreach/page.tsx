import type { Metadata } from "next";
import Image from "next/image";
import infantry1 from "@/app/assets/robots/infantry1.webp";
import sentry1 from "@/app/assets/robots/sentry1.webp";
import team1 from "@/app/assets/team/team1.webp";
import { PageHero } from "../components/PageHero";

export const metadata: Metadata = {
  title: "Outreach",
};

export default function OutreachPage() {
  return (
    <main className="standard-page outreach-page">
      <PageHero
        eyebrow="Robotics beyond the arena"
        title="Outreach"
        description="We nurture an early interest in science, technology, engineering, and mathematics through welcoming, hands-on robotics experiences."
        image={team1}
        imageAlt="QKRT members at a robotics outreach event"
        imagePosition="top"
      />

      <section className="outreach-project section-pad">
        <div className="site-container outreach-project__grid">
          <div>
            <h2>QKRT x Queen&apos;s Science &amp; Engineering Academy</h2>
            <p>
              We partnered with QSEA to deliver an interactive workshop
              experience for students in grades 7–12 to broaden their knowledge
              of robotics and the potential career paths robotics can provide.
            </p>
            <p>
              We participated in the QGEM science fair to inspire youth about
              possibilities within STEM-related fields and introduce robotics in
              a friendly and engaging way fit for ages 8–10.
            </p>
            <a className="red-button" href="/contact">
              Interested in partnering?
            </a>
          </div>
          <Image
            src={team1}
            alt="QKRT members at a robotics outreach event"
            sizes="(max-width: 900px) 100vw, 50vw"
          />
        </div>
      </section>

      <section className="outreach-project outreach-project--reverse section-pad">
        <div className="site-container outreach-project__grid">
          <div className="outreach-project__robot-pair">
            <Image
              src={sentry1}
              alt="QKRT sentry robot"
              sizes="(max-width: 900px) 50vw, 25vw"
            />
            <Image
              src={infantry1}
              alt="QKRT infantry robot"
              sizes="(max-width: 900px) 50vw, 25vw"
            />
          </div>
          <div>
            <h2>QKRT x Science Quest</h2>
            <p>
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
