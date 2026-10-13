import type { Metadata, Viewport } from "next";
import "./globals.css";

const basePath = process.env.GITHUB_PAGES === "true" ? "/Bookofkings" : "";

export const metadata: Metadata = {
  title: {
    default: "Book of Kings · The Private Codex",
    template: "%s · Book of Kings",
  },
  description:
    "A private daily ritual inspired by Persian storytelling—three choices, one mirror, and a chronicle that stays yours.",
  applicationName: "Book of Kings",
  manifest: `${basePath}/manifest.webmanifest`,
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "Book of Kings",
  },
  formatDetection: {
    telephone: false,
  },
  openGraph: {
    type: "website",
    siteName: "Book of Kings",
    title: "Book of Kings · The Private Codex",
    description:
      "A two-minute private ritual for the inner kingdom, inspired by Persian storytelling.",
  },
  twitter: {
    card: "summary",
    title: "Book of Kings · The Private Codex",
    description:
      "A two-minute private ritual for the inner kingdom, inspired by Persian storytelling.",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  viewportFit: "cover",
  themeColor: "#05080d",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
