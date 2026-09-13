"use client";

import { useEffect, useState } from "react";
import { focusRing } from "../tailwind";

const HIRING_START = new Date("2026-09-09T00:00:00-04:00").getTime();
const HIRING_END = new Date("2026-09-24T00:00:00-04:00").getTime();
const DISMISSED_KEY = "qkrt-hiring-popup-dismissed-2026";

export function HiringPopup() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const now = Date.now();
    const isHiringPeriod = now >= HIRING_START && now < HIRING_END;
    const wasDismissed = sessionStorage.getItem(DISMISSED_KEY) === "true";

    const showPopup = window.setTimeout(() => {
      setIsOpen(isHiringPeriod && !wasDismissed);
    }, 0);

    return () => window.clearTimeout(showPopup);
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        sessionStorage.setItem(DISMISSED_KEY, "true");
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  const dismiss = () => {
    sessionStorage.setItem(DISMISSED_KEY, "true");
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <aside
      className="fixed right-6 bottom-6 z-60 w-[min(390px,calc(100vw-3rem))] overflow-hidden border border-qk-red/70 bg-qk-surface shadow-[0_18px_60px_rgb(0_0_0/65%)] max-[560px]:right-5 max-[560px]:bottom-5 max-[560px]:w-[calc(100vw-2.5rem)]"
      role="dialog"
      aria-labelledby="hiring-popup-title"
      aria-describedby="hiring-popup-description"
    >
      <div className="h-1 bg-qk-red" />
      <div className="relative px-7 pt-7 pb-6 max-[560px]:px-6 max-[560px]:pt-6">
        <button
          type="button"
          className={`${focusRing} absolute top-3.5 right-3.5 grid h-9 w-9 cursor-pointer place-items-center text-2xl leading-none text-qk-muted transition-colors hover:text-white motion-reduce:transition-none`}
          aria-label="Dismiss hiring announcement"
          onClick={dismiss}
        >
          <span aria-hidden="true">&times;</span>
        </button>

        <p className="mb-2 font-brand text-xs tracking-[.12em] text-qk-red uppercase">
          September 9th–23rd
        </p>
        <h2
          id="hiring-popup-title"
          className="mb-3 pr-7 font-display text-[clamp(25px,7vw,32px)] leading-[1.05] uppercase"
        >
          Hiring is open!
        </h2>
        <p
          id="hiring-popup-description"
          className="mb-5 text-[16px] leading-[1.55] text-qk-muted"
        >
          Join Queen&apos;s Knights Robotics and help us build the next generation
          of competition robots.
        </p>
        <a
          className={`${focusRing} inline-flex min-h-12 items-center justify-center bg-qk-red px-6 py-3 font-brand text-sm uppercase transition-[filter,transform] duration-150 hover:-translate-y-0.5 hover:brightness-90 motion-reduce:transition-none`}
          href="https://linktr.ee/qkrt"
          target="_blank"
          rel="noreferrer"
        >
          View open positions
        </a>
      </div>
    </aside>
  );
}
