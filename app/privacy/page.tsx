import type { Metadata } from "next";
import { LegalPage } from "../components/LegalPage";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Queen's Knights Robotics handles personal information.",
};

const sections = [
  {
    title: "Information We Collect",
    content: (
      <div className="space-y-5">
        <p>
          <strong className="font-bold text-white">
            This site may collect technical information that your browser shares
            automatically, such as device type, browser type, pages visited,
            referral source, and approximate location based on IP address.
          </strong>
        </p>
        <p>
          <strong className="font-bold text-white">
            If you contact QKRT by email or through a linked service, we receive
            the information you choose to send, such as your name, email address,
            project details, and message content.
          </strong>
        </p>
      </div>
    ),
  },
  {
    title: "How We Use Information",
    content: (
      <p>
        <strong className="font-bold text-white">
          We use information to respond to messages, discuss projects, maintain
          site reliability, understand general site usage, and improve the
          content and experience of this website. Information is not sold.
        </strong>
      </p>
    ),
  },
  {
    title: "Third-Party Services",
    content: (
      <p>
        <strong className="font-bold text-white">
          This site may link to or rely on third-party services such as GitHub,
          LinkedIn, email providers, hosting providers, analytics tools, or
          embedded content. Those services may process information according to
          their own privacy policies.
        </strong>
      </p>
    ),
  },
  {
    title: "Data Retention",
    content: (
      <p>
        <strong className="font-bold text-white">
          Information is stored only as long as reasonably needed for the purpose
          it was provided, such as replying to inquiries or maintaining a
          records.
        </strong>
      </p>
    ),
  },
  {
    title: "Your Rights",
    content: (
      <p>
        <strong className="font-bold text-white">
          Depending on your location, you may have rights to request access,
          correction, or deletion of your personal data. To make a request,
          please contact us at{" "}
          <a className="text-qk-red underline decoration-qk-red/50 underline-offset-4 transition-colors hover:text-white" href="mailto:contact@qkrt.ca">
            contact@qkrt.ca
          </a>
          .
        </strong>
      </p>
    ),
  },
  {
    title: "Policy Updates",
    content: (
      <p>
        <strong className="font-bold text-white">
          We may update this policy as the site or applicable requirements
          change. The latest version will be posted on this page with the
          effective date below.
        </strong>
      </p>
    ),
  },
];

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      description="This policy explains how your personal information is handled."
      sections={sections}
    />
  );
}
