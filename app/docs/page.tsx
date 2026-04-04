import Link from "next/link";
import {
  ArrowRight,
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

const docSections = [
  {
    title: "Getting Started",
    icon: Rocket,
    description: "Get up and running with Conductor in minutes.",
    pages: [
      {
        href: "/docs/quickstart",
        title: "Quick Start",
        description:
          "Install Conductor and connect your first AI client in under 5 minutes.",
      },
      {
        href: "/docs/mcp-server",
        title: "MCP Server",
        description:
          "Understand how the MCP server works and how to configure it.",
      },
    ],
  },
  {
    title: "Core Concepts",
    icon: Server,
    description: "Deep dive into Conductor's architecture and plugin system.",
    pages: [
      {
        href: "/docs/plugins",
        title: "Plugins",
        description:
          "Learn how plugins work, how to configure them, and how to build your own.",
      },
      {
        href: "/docs/plugin-reference",
        title: "Plugin Reference",
        description: "Complete reference for all 100+ built-in plugins.",
      },
      {
        href: "/docs/mcp-protocol",
        title: "MCP Protocol",
        description:
          "Technical specification of the Model Context Protocol implementation.",
      },
    ],
  },
  {
    title: "Integration",
    icon: Webhook,
    description: "Connect Conductor to your existing tools and infrastructure.",
    pages: [
      {
        href: "/docs/webhooks",
        title: "Webhooks",
        description: "Set up webhook endpoints for real-time event streaming.",
      },
      {
        href: "/docs/security",
        title: "Security",
        description:
          "Encryption, approval gates, circuit breakers, and audit logging.",
      },
      {
        href: "/docs/api-reference",
        title: "API Reference",
        description:
          "Complete API reference for all endpoints and data structures.",
      },
      {
        href: "/docs/sdks",
        title: "SDKs",
        description:
          "Official SDKs for TypeScript, Python, and other languages.",
      },
    ],
  },
  {
    title: "Resources",
    icon: BookMarked,
    description: "Guides, best practices, and troubleshooting.",
    pages: [
      {
        href: "/docs/guides",
        title: "Guides",
        description: "Step-by-step guides for common tasks and workflows.",
      },
      {
        href: "/docs/best-practices",
        title: "Best Practices",
        description: "Recommended patterns for production deployments.",
      },
      {
        href: "/docs/migration",
        title: "Migration",
        description: "Migration guides from previous versions.",
      },
      {
        href: "/docs/troubleshooting",
        title: "Troubleshooting",
        description: "Common issues and their solutions.",
      },
      {
        href: "/docs/faq",
        title: "FAQ",
        description: "Frequently asked questions about Conductor.",
      },
    ],
  },
];

export default function DocsPage() {
  return (
    <div>
      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-4">Documentation</h1>
        <p className="text-lg text-white/50 max-w-2xl">
          Everything you need to know about Conductor. From quick start to
          advanced configuration.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {docSections.map((section) => (
          <div key={section.title}>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 rounded-lg bg-[#ff6b2b]/10 flex items-center justify-center">
                <section.icon className="h-4 w-4 text-[#ff6b2b]" />
              </div>
              <h2 className="text-xl font-semibold">{section.title}</h2>
            </div>
            <p className="text-sm text-white/40 mb-4">{section.description}</p>
            <div className="space-y-2">
              {section.pages.map((page) => (
                <Link
                  key={page.href}
                  href={page.href}
                  className="group flex items-start gap-3 p-3 rounded-lg border border-white/5 hover:border-[#ff6b2b]/20 hover:bg-[#ff6b2b]/5 transition-all"
                >
                  <ArrowRight className="h-4 w-4 text-white/20 group-hover:text-[#ff6b2b] mt-0.5 shrink-0 transition-colors" />
                  <div>
                    <div className="text-sm font-medium text-white/80 group-hover:text-white transition-colors">
                      {page.title}
                    </div>
                    <div className="text-xs text-white/35 mt-0.5">
                      {page.description}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 p-6 rounded-xl border border-white/10 bg-[#0a0a0a]">
        <h3 className="text-lg font-semibold mb-2">
          Can't find what you're looking for?
        </h3>
        <p className="text-sm text-white/40 mb-4">
          Check our GitHub issues or start a discussion. We're always happy to
          help.
        </p>
        <div className="flex gap-3">
          <a
            href="https://github.com/thealxlabs/conductor/issues"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-[#ff6b2b] hover:text-[#ff8550] transition-colors"
          >
            Browse Issues
          </a>
          <span className="text-white/20">|</span>
          <a
            href="https://github.com/thealxlabs/conductor/discussions"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-[#ff6b2b] hover:text-[#ff8550] transition-colors"
          >
            Start a Discussion
          </a>
        </div>
      </div>
    </div>
  );
}
