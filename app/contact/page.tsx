import type { Metadata } from "next";
import { focusRing, heading, siteContainer } from "../tailwind";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Connect with Queen's Knights Robotics about sponsorships, collaborations, media, or joining the team.",
};

export default function ContactPage() {
  return (
    <main className="bg-qk-base pt-25 max-[820px]:pt-21.5 max-[620px]:pt-19.5">
      <section className="relative grid min-h-162.5 items-center overflow-hidden bg-qk-base bg-[linear-gradient(90deg,rgb(237_28_36/8%)_1px,transparent_1px),linear-gradient(rgb(237_28_36/8%)_1px,transparent_1px),radial-gradient(circle_at_78%_44%,rgb(237_28_36/20%),transparent_28%)] bg-size-[64px_64px,64px_64px,auto] after:pointer-events-none after:absolute after:right-[-5vw] after:-bottom-47.5 after:h-125 after:w-[38vw] after:-skew-x-18 after:border after:border-qk-red/40 after:content-[''] max-[620px]:min-h-0 max-[620px]:bg-size-[42px_42px,42px_42px,auto]">
        <div
          className={`${siteContainer} relative z-10 grid grid-cols-[minmax(0,1.2fr)_minmax(300px,.8fr)] items-center gap-[clamp(40px,7vw,110px)] py-22 max-[900px]:grid-cols-1 max-[620px]:py-16`}
        >
          <div>
            <p className="mb-4.5 font-brand text-xs tracking-[.18em] text-qk-red uppercase">
              Start a conversation
            </p>
            <h1
              className={`${heading} mb-6.5 max-w-195 text-[clamp(52px,7.5vw,94px)] tracking-[-.035em] max-[620px]:text-[clamp(43px,14.5vw,62px)]`}
            >
              Get in
              <span className="block text-qk-red">Contact</span>
            </h1>
            <p className="mb-0 max-w-155 text-[clamp(17px,1.8vw,20px)] text-qk-muted">
              Have an idea, an opportunity, or a question for the team? Send us
              an email. We&apos;ll make sure your message gets to the right
              Knight.
            </p>
          </div>

          <a
            className={`${focusRing} group relative flex min-h-62.5 flex-col justify-between overflow-hidden bg-qk-red p-[clamp(28px,4vw,48px)] transition-[filter,transform] duration-150 after:absolute after:-right-6 after:-bottom-19 after:font-body after:text-[250px] after:font-bold after:leading-none after:text-black/10 after:content-['@'] hover:-translate-y-1 hover:brightness-90 motion-reduce:transition-none max-[620px]:min-h-55`}
            href="mailto:contact@qkrt.ca"
          >
            <span className="relative z-10 font-brand text-xs tracking-[.12em] uppercase">
              Email QKRT
            </span>
            <strong className="relative z-10 text-[clamp(21px,3vw,34px)] wrap-anywhere">
              contact@qkrt.ca
            </strong>
            <span className="relative z-10 font-brand text-xs tracking-[.12em] uppercase">
              Open your email app{" "}
              <b className="ml-2 text-lg" aria-hidden="true">
                ↗
              </b>
            </span>
          </a>
        </div>
      </section>
    </main>
  );
}
