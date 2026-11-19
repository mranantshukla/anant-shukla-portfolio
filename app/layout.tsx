import type { Metadata } from "next";
import "@fontsource/barlow-condensed/latin-800.css";
import "@fontsource/ibm-plex-mono/latin-400.css";
import "@fontsource-variable/manrope";
import "./globals.css";
import { Navigation } from "../components/Navigation";

const title = "Anant Shukla | Applied AI, Analytics & Strategy";
const description =
  "Explore Anant Shukla’s work in applied AI, transport research, customer analytics and campus leadership at IIT Roorkee.";
export const metadata: Metadata = {
  title: { default: title, template: "%s | Anant Shukla" },
  description,
  openGraph: { title, description, type: "website" },
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <a className="skip" href="#main">
          Skip to content
        </a>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
