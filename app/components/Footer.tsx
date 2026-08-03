import Image from "next/image";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <div className="site-footer__identity">
          <Image src="/favicon.svg" alt="" width={100} height={100} />
          <div>
            <h2>Queen&apos;s Knights Robotics Team</h2>
            <p>
              45 Union St., Kingston,
              <br />
              Ontario, Canada
              <br />
              K7L 3N6
            </p>
          </div>
        </div>
        <div className="site-footer__socials" aria-label="Social media">
          <a
            href="https://www.facebook.com/queensrobomaster/"
            target="_blank"
            rel="noreferrer"
            aria-label="Facebook"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path
                fill="currentColor"
                d="M13.5 21v-8h2.75l.4-3.1H13.5V7.92c0-.9.25-1.51 1.58-1.51h1.68V3.64a22.4 22.4 0 0 0-2.45-.13c-2.43 0-4.1 1.49-4.1 4.22V9.9H7.47V13h2.74v8h3.29Z"
              />
            </svg>
          </a>
          <a
            href="https://www.instagram.com/qkrt_robotics/"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path
                fill="currentColor"
                d="M7.2 2h9.6A5.2 5.2 0 0 1 22 7.2v9.6a5.2 5.2 0 0 1-5.2 5.2H7.2A5.2 5.2 0 0 1 2 16.8V7.2A5.2 5.2 0 0 1 7.2 2Zm-.18 1.8A3.22 3.22 0 0 0 3.8 7.02v9.96a3.22 3.22 0 0 0 3.22 3.22h9.96a3.22 3.22 0 0 0 3.22-3.22V7.02a3.22 3.22 0 0 0-3.22-3.22H7.02Zm10.73 1.35a1.1 1.1 0 1 1 0 2.2 1.1 1.1 0 0 1 0-2.2ZM12 6.87A5.13 5.13 0 1 1 12 17.13 5.13 5.13 0 0 1 12 6.87Zm0 1.8A3.33 3.33 0 1 0 12 15.33 3.33 3.33 0 0 0 12 8.67Z"
              />
            </svg>
          </a>
          <a
            href="mailto:qkrt@engsoc.queensu.ca"
            aria-label="Email QKRT"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path
                fill="currentColor"
                d="M3.75 4.5h16.5A2.75 2.75 0 0 1 23 7.25v9.5a2.75 2.75 0 0 1-2.75 2.75H3.75A2.75 2.75 0 0 1 1 16.75v-9.5A2.75 2.75 0 0 1 3.75 4.5Zm-.8 3.12v9.13c0 .44.36.8.8.8h16.5a.8.8 0 0 0 .8-.8V7.62l-8.48 6.12a.98.98 0 0 1-1.14 0L2.95 7.62Zm1.28-1.17L12 12.06l7.77-5.61H4.23Z"
              />
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/company/qkrt/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path
                fill="currentColor"
                d="M5.34 7.23A2.17 2.17 0 1 1 5.34 2.9a2.17 2.17 0 0 1 0 4.33ZM3.46 8.9h3.76V21H3.46V8.9Zm5.81 0h3.6v1.65h.05c.5-.95 1.73-1.96 3.56-1.96 3.8 0 4.51 2.5 4.51 5.76V21h-3.75v-5.9c0-1.4-.03-3.22-1.96-3.22-1.96 0-2.26 1.53-2.26 3.12v6H9.27V8.9Z"
              />
            </svg>
          </a>
        </div>
      </div>
      <p className="site-footer__copyright">
        Copyright © 2026 Queen&apos;s Knights Robotics Team
      </p>
    </footer>
  );
}
