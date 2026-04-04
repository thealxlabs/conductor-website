"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import {
  BookOpen,
  Rocket,
  Server,
  Puzzle,
  Shield,
  Webhook,
  Code2,
  BookMarked,
  Cpu,
  FileQuestion,
  Network,
  ListChecks,
  AlertTriangle,
  ArrowLeftRight,
  CheckCircle2,
} from "lucide-react";

const docsNav = [
  {
    section: "Getting Started",
    items: [
      { href: "/docs", label: "Overview", icon: BookOpen },
      { href: "/docs/quickstart", label: "Quick Start", icon: Rocket },
      { href: "/docs/install", label: "Installation", icon: Code2 },
    ],
  },
  {
    section: "Core Concepts",
    items: [
      { href: "/docs/mcp-server", label: "MCP Server", icon: Server },
      { href: "/docs/mcp-protocol", label: "MCP Protocol", icon: Network },
      { href: "/docs/plugins", label: "Plugins", icon: Puzzle },
      {
        href: "/docs/plugin-reference",
        label: "Plugin Reference",
        icon: ListChecks,
      },
    ],
  },
  {
    section: "Integration",
    items: [
      { href: "/docs/webhooks", label: "Webhooks", icon: Webhook },
      { href: "/docs/security", label: "Security", icon: Shield },
      { href: "/docs/api-reference", label: "API Reference", icon: Code2 },
      { href: "/docs/sdks", label: "SDKs", icon: Cpu },
    ],
  },
  {
    section: "Resources",
    items: [
      { href: "/docs/guides", label: "Guides", icon: BookMarked },
      {
        href: "/docs/best-practices",
        label: "Best Practices",
        icon: CheckCircle2,
      },
      { href: "/docs/migration", label: "Migration", icon: ArrowLeftRight },
      {
        href: "/docs/troubleshooting",
        label: "Troubleshooting",
        icon: AlertTriangle,
      },
      { href: "/docs/faq", label: "FAQ", icon: FileQuestion },
    ],
  },
];

export function DocsSidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 shrink-0 border-r border-white/5 bg-[#080808]">
      <div className="sticky top-16 max-h-[calc(100vh-4rem)] overflow-y-auto py-6 px-4">
        <div className="mb-4 px-2">
          <Link
            href="/docs"
            className="flex items-center gap-2 text-sm text-white/60 hover:text-white transition-colors"
          >
            <BookOpen className="h-4 w-4" />
            Documentation
          </Link>
        </div>

        {docsNav.map((group) => (
          <div key={group.section} className="mb-6">
            <h3 className="text-xs font-semibold text-white/40 uppercase tracking-wider px-2 mb-2">
              {group.section}
            </h3>
            <ul className="space-y-0.5">
              {group.items.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={cn(
                        "flex items-center gap-2 px-2 py-1.5 text-sm rounded-md transition-all",
                        isActive
                          ? "bg-[#ff6b2b]/10 text-[#ff6b2b] font-medium"
                          : "text-white/50 hover:text-white/80 hover:bg-white/5",
                      )}
                    >
                      <item.icon className="h-3.5 w-3.5 shrink-0" />
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>
    </aside>
  );
}
