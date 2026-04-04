import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { CodeBlock } from "@/components/code-block";
import { NoiseTexture } from "@/components/ui/noise-texture";
import { BorderBeam } from "@/components/ui/border-beam";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import {
  Terminal,
  Download,
  Apple,
  Monitor,
  CheckCircle2,
  ArrowRight,
  Copy,
  Shield,
  Zap,
  Server,
  Package,
  Globe,
  Cpu,
} from "lucide-react";
import Link from "next/link";

function Penguin({ className }: { className?: string }) {
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
      <path d="M12 2a8 8 0 0 0-8 8v2a2 2 0 0 0-2 2v2h20v-2a2 2 0 0 0-2-2v-2a8 8 0 0 0-8-8z" />
      <circle cx="9" cy="10" r="1" fill="currentColor" />
      <circle cx="15" cy="10" r="1" fill="currentColor" />
      <path d="M8 16h8v4H8z" />
    </svg>
  );
}

const installMethods = [
  {
    icon: Terminal,
    title: "npm (Recommended)",
    description:
      "Install globally via npm. Works on all platforms with Node.js 18+.",
    command: "npm install -g @thealxlabs/conductor",
    language: "bash",
  },
  {
    icon: Package,
    title: "npx (No Install)",
    description:
      "Run without installing. Useful for trying Conductor before committing.",
    command: "npx @thealxlabs/conductor --help",
    language: "bash",
  },
  {
    icon: Cpu,
    title: "Homebrew (macOS)",
    description:
      "Install via Homebrew for automatic updates and system integration.",
    command: "brew install thealxlabs/tap/conductor",
    language: "bash",
  },
];

const osInstructions = [
  {
    icon: Apple,
    os: "macOS",
    steps: [
      "Install Node.js via brew: brew install node",
      "Install Conductor: npm install -g @thealxlabs/conductor",
      "Initialize: conductor init",
      "Verify: conductor doctor",
    ],
  },
  {
    icon: Penguin,
    os: "Linux",
    steps: [
      "Install Node.js via your package manager",
      "Install Conductor: npm install -g @thealxlabs/conductor",
      "Initialize: conductor init",
      "Verify: conductor doctor",
    ],
  },
  {
    icon: Monitor,
    os: "Windows",
    steps: [
      "Install Node.js from nodejs.org",
      "Install Conductor: npm install -g @thealxlabs/conductor",
      "Initialize: conductor init",
      "Verify: conductor doctor",
    ],
  },
];

export default function InstallPage() {
  return (
    <div className="min-h-screen bg-[#050505] text-white">
      <Navbar />
      <div className="pt-16">
        {/* Hero */}
        <section className="relative py-24 overflow-hidden">
          <NoiseTexture opacity={0.02} />
          <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#ff6b2b]/20 bg-[#ff6b2b]/5 mb-8">
              <Download className="h-3.5 w-3.5 text-[#ff6b2b]" />
              <span className="text-sm text-[#ff6b2b] font-medium">
                Install in seconds
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Get <span className="text-gradient">Conductor</span>
            </h1>
            <p className="text-lg text-white/50 max-w-2xl mx-auto mb-12">
              One command to install. One command to connect. Your AI agent will
              have access to 100+ tools.
            </p>
            <CodeBlock
              code="npm install -g @thealxlabs/conductor"
              language="bash"
              filename="Terminal"
              className="max-w-xl mx-auto"
            />
          </div>
        </section>

        {/* Install Methods */}
        <section className="max-w-7xl mx-auto px-6 py-16">
          <h2 className="text-2xl font-bold mb-8">Installation Methods</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {installMethods.map((method) => (
              <SpotlightCard key={method.title} className="p-6">
                <BorderBeam size={120} duration={12} />
                <div className="relative z-10">
                  <div className="w-10 h-10 rounded-lg bg-[#ff6b2b]/10 flex items-center justify-center mb-4">
                    <method.icon className="h-5 w-5 text-[#ff6b2b]" />
                  </div>
                  <h3 className="text-base font-semibold mb-2">
                    {method.title}
                  </h3>
                  <p className="text-sm text-white/40 mb-4">
                    {method.description}
                  </p>
                  <CodeBlock code={method.command} language={method.language} />
                </div>
              </SpotlightCard>
            ))}
          </div>
        </section>

        {/* OS Instructions */}
        <section className="border-t border-white/5 bg-[#080808]">
          <div className="max-w-7xl mx-auto px-6 py-16">
            <h2 className="text-2xl font-bold mb-8">Platform Guides</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {osInstructions.map((os) => (
                <div
                  key={os.os}
                  className="p-6 rounded-xl border border-white/5 bg-[#0a0a0a]"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <os.icon className="h-5 w-5 text-[#ff6b2b]" />
                    <h3 className="text-base font-semibold">{os.os}</h3>
                  </div>
                  <ol className="space-y-3">
                    {os.steps.map((step, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-sm text-white/50"
                      >
                        <CheckCircle2 className="h-4 w-4 text-[#ff6b2b] mt-0.5 shrink-0" />
                        {step}
                      </li>
                    ))}
                  </ol>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Requirements */}
        <section className="max-w-7xl mx-auto px-6 py-16">
          <h2 className="text-2xl font-bold mb-8">Requirements</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl border border-white/5 bg-[#0a0a0a]">
              <h3 className="text-base font-semibold mb-4">
                System Requirements
              </h3>
              <ul className="space-y-2">
                {[
                  "Node.js 18 or later",
                  "npm, yarn, or pnpm",
                  "2GB RAM minimum",
                  "50MB disk space",
                  "Internet connection for plugin downloads",
                ].map((req) => (
                  <li
                    key={req}
                    className="flex items-center gap-2 text-sm text-white/50"
                  >
                    <CheckCircle2 className="h-4 w-4 text-[#ff6b2b] shrink-0" />
                    {req}
                  </li>
                ))}
              </ul>
            </div>
            <div className="p-6 rounded-xl border border-white/5 bg-[#0a0a0a]">
              <h3 className="text-base font-semibold mb-4">
                Supported AI Clients
              </h3>
              <ul className="space-y-2">
                {[
                  "Claude Code",
                  "Cursor",
                  "Cline",
                  "Aider",
                  "Windsurf",
                  "Continue",
                  "Roo Code",
                  "GitHub Copilot",
                ].map((client) => (
                  <li
                    key={client}
                    className="flex items-center gap-2 text-sm text-white/50"
                  >
                    <CheckCircle2 className="h-4 w-4 text-[#ff6b2b] shrink-0" />
                    {client}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Next Steps */}
        <section className="border-t border-white/5 bg-[#080808]">
          <div className="max-w-7xl mx-auto px-6 py-16">
            <h2 className="text-2xl font-bold mb-8">Next Steps</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Link
                href="/docs/quickstart"
                className="group p-6 rounded-xl border border-white/5 bg-[#0a0a0a] hover:border-[#ff6b2b]/20 transition-all"
              >
                <Zap className="h-5 w-5 text-[#ff6b2b] mb-3" />
                <h3 className="text-sm font-semibold mb-1">Quick Start</h3>
                <p className="text-xs text-white/40">
                  Get connected in 5 minutes
                </p>
              </Link>
              <Link
                href="/docs"
                className="group p-6 rounded-xl border border-white/5 bg-[#0a0a0a] hover:border-[#ff6b2b]/20 transition-all"
              >
                <Server className="h-5 w-5 text-[#ff6b2b] mb-3" />
                <h3 className="text-sm font-semibold mb-1">Documentation</h3>
                <p className="text-xs text-white/40">Read the full docs</p>
              </Link>
              <Link
                href="/marketplace"
                className="group p-6 rounded-xl border border-white/5 bg-[#0a0a0a] hover:border-[#ff6b2b]/20 transition-all"
              >
                <Globe className="h-5 w-5 text-[#ff6b2b] mb-3" />
                <h3 className="text-sm font-semibold mb-1">Marketplace</h3>
                <p className="text-xs text-white/40">Browse 100+ plugins</p>
              </Link>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}
