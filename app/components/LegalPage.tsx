import type { ReactNode } from "react";
import { heading, siteContainer } from "../tailwind";

type LegalSection = {
  title: string;
  content: ReactNode;
};

type LegalPageProps = {
  title: string;
  description: string;
  sections: LegalSection[];
};

const effectiveDate = "August 26, 2026";

export function LegalPage({ title, description, sections }: LegalPageProps) {
  return (
    <main className="bg-qk-base pt-25 max-[820px]:pt-21.5">
      <header className="relative isolate">
        <div
          className="absolute inset-x-0 top-0 -bottom-20 -z-10 bg-[linear-gradient(90deg,rgb(237_28_36/7%)_1px,transparent_1px),linear-gradient(rgb(237_28_36/7%)_1px,transparent_1px),radial-gradient(circle_at_85%_20%,rgb(237_28_36/18%),transparent_30%)] bg-size-[64px_64px,64px_64px,auto] [mask-image:linear-gradient(to_bottom,black_0%,black_68%,transparent_100%)]"
          aria-hidden="true"
        />
        <div className={`${siteContainer} py-[clamp(52px,7vw,84px)]`}>
          <p className="mb-4 flex items-center gap-3 font-brand text-xs tracking-[.16em] text-qk-red uppercase before:h-0.75 before:w-8 before:bg-qk-red before:content-['']">
            Legal
          </p>
          <h1
            className={`${heading} max-w-225 text-[clamp(38px,5.5vw,64px)] tracking-[-.02em] text-balance`}
          >
            {title}
          </h1>
        </div>
      </header>

      <article className={`${siteContainer} grid grid-cols-[220px_minmax(0,760px)] gap-[clamp(48px,8vw,112px)] py-[clamp(64px,9vw,112px)] max-[760px]:grid-cols-1 max-[760px]:gap-10`}>
        <aside className="self-start border-l-3 border-qk-red pl-5 max-[760px]:max-w-90">
          <p className="mb-1.5 font-brand text-[11px] tracking-[.14em] text-qk-muted uppercase">
            Effective date
          </p>
          <time className="text-sm font-bold text-white" dateTime="2026-08-26">
            {effectiveDate}
          </time>
        </aside>

        <div>
          <p className="mb-12 text-[clamp(18px,2vw,21px)] leading-[1.6] text-qk-muted">
            {description}
          </p>

          <div className="divide-y divide-qk-border border-y border-qk-border">
            {sections.map((section, index) => (
              <section className="py-8" key={section.title}>
                <div className="mb-4 flex items-baseline gap-4">
                  <span className="font-brand text-[10px] tracking-[.12em] text-qk-red" aria-hidden="true">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h2 className="font-brand text-[clamp(17px,2vw,21px)] leading-tight tracking-[.02em] uppercase">
                    {section.title}
                  </h2>
                </div>
                <div className="pl-10 text-[17px] leading-[1.75] text-qk-muted max-[560px]:pl-0">
                  {section.content}
                </div>
              </section>
            ))}
          </div>
        </div>
      </article>
    </main>
  );
}
