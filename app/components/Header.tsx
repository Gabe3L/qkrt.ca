"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { focusRing, siteContainer } from "../tailwind";

const navigation = [
  { label: "Home", href: "/" },
  { label: "Our Team", href: "/our-team" },
  { label: "Robots", href: "/robots" },
  { label: "Outreach", href: "/outreach" },
  { label: "Sponsorship", href: "/sponsorship" },
  { label: "Contact", href: "/contact" },
];

export function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [headerHidden, setHeaderHidden] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    lastScrollY.current = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const scrollDifference = currentScrollY - lastScrollY.current;

      if (currentScrollY <= 16 || menuOpen) {
        setHeaderHidden(false);
        lastScrollY.current = currentScrollY;
      } else if (scrollDifference > 6) {
        setHeaderHidden(true);
        lastScrollY.current = currentScrollY;
      } else if (scrollDifference < -6) {
        setHeaderHidden(false);
        lastScrollY.current = currentScrollY;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, [menuOpen]);

  const closeMenus = () => {
    setMenuOpen(false);
  };

  const toggleMenu = () => {
    const nextMenuOpen = !menuOpen;
    setMenuOpen(nextMenuOpen);
    if (nextMenuOpen) {
      setHeaderHidden(false);
    }
  };

  const navLinkClass = (href: string) =>
    `${focusRing} block py-[18px] whitespace-nowrap transition-colors duration-150 hover:text-qk-red motion-reduce:transition-none max-[820px]:w-full max-[820px]:border-b max-[820px]:border-qk-border max-[820px]:px-3 max-[820px]:py-[15px] ${
      isActive(href) ? "text-qk-red" : "text-white"
    }`;

  const isActive = (href: string) => {
    if (href === "/our-team") {
      return pathname === "/our-team";
    }
    return pathname === href;
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-qk-base/80 backdrop-blur-2xl transition-transform duration-200 will-change-transform motion-reduce:transition-none ${
        headerHidden ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      <div className={`${siteContainer} flex h-25 items-center justify-between max-[820px]:h-21.5`}>
        <Link
          className={`${focusRing} grid h-20 w-17 shrink-0 place-items-center max-[820px]:h-16.5 max-[820px]:w-14`}
          href="/"
          aria-label="Queen's Knights Robotics home"
          onClick={closeMenus}
        >
          <Image
            className="h-17 w-17 max-[820px]:h-14 max-[820px]:w-14"
            src="/favicon.svg"
            alt="QKRT helmet logo"
            width={100}
            height={100}
            priority
          />
        </Link>

        <button
          type="button"
          className={`${focusRing} hidden h-9 w-9 cursor-pointer bg-transparent px-1.5 py-2 max-[820px]:block`}
          aria-label="Main Menu"
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          onClick={toggleMenu}
        >
          <span
            className={`my-1 block h-0.75 rounded-sm bg-white transition-transform ${
              menuOpen ? "translate-y-1.75 rotate-45" : ""
            }`}
          />
          <span
            className={`my-1 block h-0.75 rounded-sm bg-white transition-opacity ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`my-1 block h-0.75 rounded-sm bg-white transition-transform ${
              menuOpen ? "-translate-y-1.75 -rotate-45" : ""
            }`}
          />
        </button>

        <nav
          id="primary-navigation"
          className={`flex items-center gap-8 font-brand text-sm leading-none uppercase max-[1050px]:gap-5 max-[1050px]:text-xs max-[820px]:absolute max-[820px]:inset-x-0 max-[820px]:top-21.5 max-[820px]:flex-col max-[820px]:items-stretch max-[820px]:gap-0 max-[820px]:border-t max-[820px]:border-qk-border max-[820px]:bg-qk-base max-[820px]:px-6 max-[820px]:pt-4.5 max-[820px]:pb-7 max-[820px]:text-sm max-[820px]:shadow-[0_18px_34px_rgb(0_0_0/50%)] max-[560px]:px-5 max-[820px]:transition-[opacity,transform,visibility] max-[820px]:duration-200 motion-reduce:transition-none ${
            menuOpen
              ? "max-[820px]:visible max-[820px]:pointer-events-auto max-[820px]:translate-y-0 max-[820px]:opacity-100"
              : "max-[820px]:invisible max-[820px]:pointer-events-none max-[820px]:-translate-y-3 max-[820px]:opacity-0"
          }`}
          aria-label="Primary site navigation"
        >
          <Link
            className={navLinkClass("/")}
            href="/"
            onClick={closeMenus}
          >
            Home
          </Link>
          {navigation.slice(1).map((item) =>
            <Link
              className={navLinkClass(item.href)}
              href={item.href}
              key={item.href}
              onClick={closeMenus}
            >
              {item.label}
            </Link>
          )}
        </nav>
      </div>
    </header>
  );
}
