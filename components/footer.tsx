import Link from "next/link";
import { Terminal, BookOpen, Grid3X3, Shield, Webhook } from "lucide-react";

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

const footerLinks = {
  Product: [
    { label: "Features", href: "/#features" },
    { label: "Plugins", href: "/marketplace" },
    { label: "Install", href: "/install" },
    { label: "Changelog", href: "/docs" },
  ],
  Resources: [
    { label: "Documentation", href: "/docs" },
    { label: "API Reference", href: "/docs/api-reference" },
    { label: "Guides", href: "/docs/guides" },
    { label: "Troubleshooting", href: "/docs/troubleshooting" },
  ],
  Community: [
    { label: "GitHub", href: "https://github.com/thealxlabs/conductor" },
    { label: "Issues", href: "https://github.com/thealxlabs/conductor/issues" },
    {
      label: "Discussions",
      href: "https://github.com/thealxlabs/conductor/discussions",
    },
  ],
  Legal: [
    { label: "Privacy", href: "/privacy" },
    { label: "Terms", href: "/terms" },
    {
      label: "License",
      href: "https://github.com/thealxlabs/conductor/blob/main/LICENSE",
    },
  ],
};

export function Footer() {
  return (
    <footer className="border-t border-white/5 bg-[#050505]">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Terminal className="h-5 w-5 text-[#ff6b2b]" />
              <span className="text-base font-semibold text-white">
                Conductor
              </span>
            </Link>
            <p className="text-sm text-white/40 leading-relaxed">
              The universal MCP plugin system for AI agents.
            </p>
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="text-sm font-medium text-white/80 mb-3">
                {title}
              </h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/40 hover:text-[#ff6b2b] transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/30">
            Built by TheAlxLabs. Released under the MIT License.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/thealxlabs/conductor"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/30 hover:text-white/60 transition-colors"
            >
              <GithubIcon className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
