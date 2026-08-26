import Image, { type StaticImageData } from "next/image";
import { heading, siteContainer } from "../tailwind";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  image: StaticImageData;
  imageAlt: string;
  imagePosition?: "center" | "top" | "bottom";
};

export function PageHero({
  eyebrow,
  title,
  description,
  image,
  imageAlt,
  imagePosition = "center",
}: PageHeroProps) {
  const imagePositionClass = {
    center: "object-center max-[560px]:object-[58%_center]",
    top: "object-[center_20%] max-[560px]:object-[58%_20%]",
    bottom: "object-[center_78%] max-[560px]:object-[58%_78%]",
  }[imagePosition];

  return (
    <section className="relative isolate min-h-[clamp(540px,62vw,680px)] overflow-hidden bg-qk-base after:pointer-events-none after:absolute after:right-[clamp(20px,5vw,76px)] after:bottom-0 after:h-[30%] after:w-0.5 after:origin-bottom after:-skew-x-18 after:bg-linear-to-b after:from-transparent after:to-qk-red after:content-[''] max-[820px]:min-h-140 max-[560px]:min-h-130">
      <Image
        className={`absolute inset-0 z-[-3] h-full w-full object-cover saturate-[.88] contrast-[1.06] ${imagePositionClass}`}
        src={image}
        alt={imageAlt}
        sizes="100vw"
        priority
      />
      <div className="absolute inset-0 z-[-2] bg-[linear-gradient(90deg,rgb(9_10_15/94%)_0%,rgb(9_10_15/72%)_46%,rgb(9_10_15/24%)_78%),linear-gradient(180deg,rgb(237_28_36/7%)_0%,rgb(9_10_15/12%)_54%,#090a0f_100%)] max-[820px]:bg-[linear-gradient(90deg,rgb(9_10_15/88%)_0%,rgb(9_10_15/54%)_72%,rgb(9_10_15/25%)_100%),linear-gradient(180deg,rgb(237_28_36/6%)_0%,rgb(9_10_15/18%)_46%,#090a0f_100%)]" />
      <div
        className={`${siteContainer} flex min-h-[inherit] flex-col justify-end pt-40 pb-[clamp(76px,10vw,112px)] max-[820px]:pt-33 max-[820px]:pb-18.5`}
      >
        <p className="mb-5.5 flex items-center gap-3 font-brand text-[13px] tracking-[.12em] text-qk-muted uppercase before:h-0.75 before:w-8.5 before:bg-qk-red before:content-[''] max-[560px]:mb-4.5 max-[560px]:text-[11px]">
          {eyebrow}
        </p>
        <h1
          className={`${heading} mb-5.5 max-w-230 text-[clamp(48px,7vw,84px)] tracking-[.01em] text-balance max-[820px]:max-w-[calc(100%-32px)] max-[820px]:text-[clamp(42px,10vw,64px)] max-[560px]:mb-4.5 max-[560px]:text-[clamp(38px,12vw,52px)]`}
        >
          {title}
        </h1>
        <p className="mb-0 max-w-165 text-[clamp(17px,1.8vw,21px)] leading-[1.55] text-pretty text-qk-muted max-[820px]:max-w-[calc(100%-44px)] max-[820px]:text-[17px] max-[560px]:text-base max-[560px]:leading-[1.48]">
          {description}
        </p>
      </div>
      <p
        className="absolute right-[clamp(36px,7vw,110px)] bottom-8.5 m-0 rotate-180 font-brand text-[11px] tracking-[.08em] text-qk-muted/60 uppercase [writing-mode:vertical-rl] max-[820px]:right-4.5 max-[820px]:bottom-6 max-[560px]:hidden"
        aria-hidden="true"
      >
        QKRT <span className="text-qk-red">/</span> Queen&apos;s University
      </p>
    </section>
  );
}
