"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

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
  const headerRef = useRef<HTMLElement>(null);
  const lastScrollY = useRef(0);

  useEffect(() => {
    lastScrollY.current = window.scrollY;
    const header = headerRef.current;

    if (menuOpen) {
      header?.classList.remove("site-header--hidden");
    }

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const scrollDifference = currentScrollY - lastScrollY.current;

      if (currentScrollY <= 16 || menuOpen) {
        header?.classList.remove("site-header--hidden");
        lastScrollY.current = currentScrollY;
      } else if (scrollDifference > 6) {
        header?.classList.add("site-header--hidden");
        lastScrollY.current = currentScrollY;
      } else if (scrollDifference < -6) {
        header?.classList.remove("site-header--hidden");
        lastScrollY.current = currentScrollY;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, [menuOpen]);

  const closeMenus = () => {
    setMenuOpen(false);
  };

  const isActive = (href: string) => {
    if (href === "/our-team") {
      return pathname === "/our-team";
    }
    return pathname === href;
  };

  return (
    <header className="site-header" ref={headerRef}>
      <div className="site-header__inner">
        <Link
          className="site-header__brand"
          href="/"
          aria-label="Queen's Knights Robotics Team home"
          onClick={closeMenus}
        >
          <Image
            src="/favicon.svg"
            alt="QKRT helmet logo"
            width={100}
            height={100}
            priority
          />
        </Link>

        <button
          type="button"
          className="site-header__toggle"
          aria-label="Main Menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav
          className={`site-nav ${menuOpen ? "site-nav--open" : ""}`}
          aria-label="Primary site navigation"
        >
          <Link
            className={isActive("/") ? "active" : ""}
            href="/"
            onClick={closeMenus}
          >
            Home
          </Link>
          {navigation.slice(1).map((item) =>
            <Link
              className={isActive(item.href) ? "active" : ""}
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
