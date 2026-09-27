import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ChatToPR — Turn Slack Incidents into GitHub PRs Automatically",
  description:
    "ChatToPR uses IBM Bob AI to read your Slack triage threads, generate hotfix patches with regression tests, and open pull requests on GitHub — in seconds, not hours.",
  keywords: ["IBM Bob", "AI", "Slack", "GitHub", "incident response", "automation", "pull request"],
  openGraph: {
    title: "ChatToPR — From Slack Thread to Merged PR in Seconds",
    description:
      "Stop context-switching between Slack and GitHub. ChatToPR connects IBM Bob AI to your incident channels and automates the entire triage-to-PR workflow.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased" style={{ fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" }}>
        {children}
      </body>
    </html>
  );
}
