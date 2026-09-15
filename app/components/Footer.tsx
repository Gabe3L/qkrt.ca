import Image from "next/image";
import Link from "next/link";
import { focusRing, siteContainer } from "../tailwind";
import { ArrowUpRightIcon } from "./LinkIcons";

const footerNavigation = [
  { label: "Home", href: "/" },
  { label: "Our Team", href: "/our-team" },
  { label: "Robots", href: "/robots" },
  { label: "Outreach", href: "/outreach" },
  { label: "Sponsorship", href: "/sponsorship" },
  { label: "Contact", href: "/contact" },
];

export function Footer() {
  const footerLinkClass = `${focusRing} transition-colors duration-150 hover:text-qk-red motion-reduce:transition-none`;
  const socialLinkClass = `${footerLinkClass} inline-flex items-center gap-1.5`;

  return (
    <footer className="mt-16 bg-qk-surface pt-10 pb-7 max-[560px]:mt-12">
      <div className={`${siteContainer} flex items-end justify-between gap-7.5 max-[820px]:items-start max-[560px]:flex-col`}>
        <div className="flex items-center gap-6 max-[560px]:gap-4">
          <Image className="h-18.5 w-18.5" src="/favicon.svg" alt="" width={100} height={100} />
          <div>
            <h2 className="mb-2 font-brand text-base leading-[1.1] uppercase">Queen&apos;s Knights Robotics</h2>
            <p className="mb-0 text-sm leading-[1.55] text-qk-muted">
              45 Union St., Kingston,
              <br />
              Ontario, Canada
              <br />
              K7L 3N6
            </p>
          </div>
        </div>
        <div
          className="flex min-w-0 flex-1 flex-wrap items-center justify-end gap-x-5 gap-y-1.5 text-sm text-qk-muted max-[560px]:w-full max-[560px]:gap-x-3"
          aria-label="Social media"
        >
          <a
            className={socialLinkClass}
            href="https://www.facebook.com/queensrobomaster/"
            target="_blank"
            rel="noreferrer"
          >
            Facebook
            <ArrowUpRightIcon className="size-3.5 shrink-0" />
          </a>
          <a
            className={socialLinkClass}
            href="https://www.instagram.com/qkrt_robotics/"
            target="_blank"
            rel="noreferrer"
          >
            Instagram
            <ArrowUpRightIcon className="size-3.5 shrink-0" />
          </a>
          <a
            className={socialLinkClass}
            href="https://www.linkedin.com/company/qkrt/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
            <ArrowUpRightIcon className="size-3.5 shrink-0" />
          </a>
          <a
            className={socialLinkClass}
            href="https://github.com/qkrt-rm"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
            <ArrowUpRightIcon className="size-3.5 shrink-0" />
          </a>
        </div>
      </div>
      <div className={`${siteContainer} mt-6 flex items-start justify-between gap-9 border-t border-qk-border pt-6 max-[820px]:block`}>
        <div className="shrink-0 text-left max-[820px]:text-center">
          <p className="m-0 text-xs text-qk-muted">
            © 2026 Queen&apos;s Knights Robotics
          </p>
          <p className="mt-1.5 mb-0 text-xs text-qk-muted">
            Website by{" "}
            <a
              className={footerLinkClass}
              href="https://www.gabelynch.com"
              target="_blank"
              rel="noreferrer"
            >
              Gabe Lynch
            </a>
          </p>
        </div>

        <nav
          className="flex flex-col items-end gap-1.5 text-xs text-qk-muted max-[820px]:hidden"
          aria-label="Footer navigation"
        >
          <div className="flex flex-wrap justify-end gap-x-5 gap-y-1.5">
            {footerNavigation.map((item) => (
              <Link className={footerLinkClass} href={item.href} key={item.href}>
                {item.label}
              </Link>
            ))}
          </div>
          <div className="flex gap-x-5">
            <Link className={footerLinkClass} href="/privacy">Privacy Policy</Link>
            <Link className={footerLinkClass} href="/terms">Terms of Service</Link>
          </div>
        </nav>
      </div>
    </footer>
  );
}
