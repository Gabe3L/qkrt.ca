import type { Metadata } from "next";
import { LegalPage } from "../components/LegalPage";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms governing use of the Queen's Knights Robotics website and services.",
};

const sections = [
  {
    title: "Acceptance of Terms",
    content: (
      <p>
        <strong className="font-bold text-white">
          By accessing or using this site, you agree to these terms. If you do
          not agree, please do not use the website.
        </strong>
      </p>
    ),
  },
  {
    title: "Limitation of Liability",
    content: (
      <p>
        <strong className="font-bold text-white">
          To the maximum extent permitted by law, we are not liable for indirect,
          incidental, or consequential damages arising from use of the site or
          services.
        </strong>
      </p>
    ),
  },
  {
    title: "Changes to Terms",
    content: (
      <p>
        <strong className="font-bold text-white">
          Terms may update periodically. Continued use of the site after updates
          indicates acceptance of the revised terms.
        </strong>
      </p>
    ),
  },
];

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms of Service"
      description="These terms govern your use of our website and services."
      sections={sections}
    />
  );
}
