import { CodeBlock } from "@/components/code-block";
import {
  FileQuestion,
  ArrowRight,
  Shield,
  Puzzle,
  Server,
  Zap,
} from "lucide-react";

export default function FAQPage() {
  return (
    <div>
      <div className="mb-12">
        <div className="flex items-center gap-2 text-sm text-[#ff6b2b] mb-4">
          <FileQuestion className="h-4 w-4" />
          Resources
        </div>
        <h1 className="text-4xl font-bold mb-4">FAQ</h1>
        <p className="text-lg text-white/50 max-w-2xl">
          Frequently asked questions about Conductor.
        </p>
      </div>
      <div className="prose prose-invert max-w-none space-y-6">
        {[
          {
            q: "What is Conductor?",
            a: "Conductor is a universal MCP (Model Context Protocol) plugin system for AI agents. It acts as a bridge between AI clients like Claude Code, Cursor, and Cline, and 100+ tools including shell commands, GitHub, Slack, AWS, and more.",
          },
          {
            q: "Which AI clients are supported?",
            a: "Any MCP-compatible client works with Conductor. This includes Claude Code, Cursor, Cline, Aider, Windsurf, Continue, Roo Code, GitHub Copilot, and any other client that supports the MCP stdio or HTTP transport.",
          },
          {
            q: "Is Conductor free?",
            a: "Yes, Conductor is open source and released under the MIT License. You can use it for personal and commercial projects without any cost.",
          },
          {
            q: "How does Conductor handle security?",
            a: "Conductor uses AES-256-GCM encryption for secrets, stores them in the OS keychain, implements circuit breakers per tool, requires approval for dangerous operations, and maintains a tamper-evident audit log.",
          },
          {
            q: "Can I build custom plugins?",
            a: "Yes. Use conductor plugin-create to scaffold a new plugin. Custom plugins are JavaScript files that implement the standard Plugin interface. They can be placed in ~/.conductor/plugins/.",
          },
          {
            q: "Where is data stored?",
            a: "All state lives in ~/.conductor/: config.json for settings, conductor.db (SQLite) for history, audit.log for tamper-evident logging, .key for the encryption key, and plugins/ for external plugins.",
          },
          {
            q: "How do I update Conductor?",
            a: "Run npm update -g @thealxlabs/conductor to get the latest version. Check the migration guide for breaking changes between major versions.",
          },
          {
            q: "Can I run Conductor on a server?",
            a: "Yes. Use conductor mcp start --transport http --port 3000 to run as an HTTP server. You can then connect remote AI clients to it.",
          },
        ].map((faq) => (
          <div
            key={faq.q}
            className="p-5 rounded-xl border border-white/5 bg-[#0a0a0a]"
          >
            <h3 className="text-base font-semibold mb-2">{faq.q}</h3>
            <p className="text-sm text-white/50 leading-relaxed">{faq.a}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
