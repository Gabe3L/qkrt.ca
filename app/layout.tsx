import type { Metadata } from "next";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://qkrt.gabelynch.com"),
  title: {
    default: "Queen's Knights",
    template: "%s | Queen's Knights",
  },
  description:
    "Queen's Knights Robotics Team empowers students to design, fabricate, and program advanced RoboMaster robots.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
  openGraph: {
    title: "Queen's Knights Robotics Team",
    description: "Fostering excellence in robotics since 2018.",
    type: "website",
    images: [
      {
        url: "/social.webp",
        width: 1792,
        height: 896,
        alt: "Queen's Knights Robotics Team robot",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Queen's Knights Robotics Team",
    description: "Fostering excellence in robotics since 2018.",
    images: ["/social.webp"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
