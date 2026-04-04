import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Conductor — One connection. Every tool.",
  description:
    "The universal MCP plugin system for AI agents. Connect Claude, Cursor, Cline, and every AI client to 100+ tools with a single configuration.",
  keywords: ["MCP", "AI", "Claude", "Cursor", "plugins", "AI agents"],
  authors: [{ name: "TheAlxLabs" }],
  openGraph: {
    title: "Conductor — One connection. Every tool.",
    description: "The universal MCP plugin system for AI agents.",
    type: "website",
    url: "https://conductor.thealxlabs.com",
    siteName: "Conductor",
  },
  twitter: {
    card: "summary_large_image",
    title: "Conductor — One connection. Every tool.",
    description: "The universal MCP plugin system for AI agents.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
