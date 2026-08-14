import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Connect with Queen's Knights Robotics Team about sponsorships, collaborations, media, or joining the team.",
};

export default function ContactPage() {
  return (
    <main className="standard-page contact-page">
      <section className="contact-hero">
        <div className="site-container contact-hero__grid">
          <div className="contact-hero__copy">
            <p className="contact-eyebrow">Start a conversation</p>
            <h1>
              Get in
              <span>Contact</span>
            </h1>
            <p className="contact-hero__intro">
              Have an idea, an opportunity, or a question for the team? Send us
              an email. We&apos;ll make sure your message gets to the right
              Knight.
            </p>
          </div>

          <a
            className="contact-email-card"
            href="mailto:contact@qkrt.ca"
          >
            <span className="contact-email-card__label">Email QKRT</span>
            <strong>contact@qkrt.ca</strong>
            <span className="contact-email-card__action">
              Open your email app <b aria-hidden="true">↗</b>
            </span>
          </a>
        </div>
      </section>
    </main>
  );
}
