import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ChatToPR — IBM Bob Hackathon",
  description:
    "Turn a Slack triage thread into a GitHub pull request with one click, powered by IBM Bob.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-100 antialiased">{children}</body>
    </html>
  );
}
