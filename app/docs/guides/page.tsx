import { CodeBlock } from "@/components/code-block";
import {
  BookMarked,
  ArrowRight,
  Terminal,
  Settings,
  Puzzle,
  Cloud,
  Server,
  Shield,
} from "lucide-react";

export default function GuidesPage() {
  return (
    <div>
      <div className="mb-12">
        <div className="flex items-center gap-2 text-sm text-[#ff6b2b] mb-4">
          <BookMarked className="h-4 w-4" />
          Resources
        </div>
        <h1 className="text-4xl font-bold mb-4">Guides</h1>
        <p className="text-lg text-white/50 max-w-2xl">
          Step-by-step guides for common tasks, workflows, and integrations with
          Conductor.
        </p>
      </div>
      <div className="prose prose-invert max-w-none">
        <h2 className="text-2xl font-semibold mt-12 mb-4">
          Getting Started Guides
        </h2>
        <div className="space-y-4">
          {[
            {
              title: "Set up Conductor with Claude Code",
              desc: "Connect Conductor to Claude Code for full tool access",
              level: "Beginner",
            },
            {
              title: "Set up Conductor with Cursor",
              desc: "Configure Cursor to use Conductor as an MCP server",
              level: "Beginner",
            },
            {
              title: "Set up Conductor with Cline",
              desc: "Enable Cline to access 100+ tools through Conductor",
              level: "Beginner",
            },
            {
              title: "Set up Conductor with Aider",
              desc: "Configure Aider to use Conductor for tool access",
              level: "Beginner",
            },
          ].map((guide) => (
            <div
              key={guide.title}
              className="p-4 rounded-xl border border-white/5 bg-[#0a0a0a] hover:border-[#ff6b2b]/20 transition-colors"
            >
              <div className="flex items-center justify-between mb-1">
                <h3 className="text-sm font-semibold">{guide.title}</h3>
                <span className="text-xs px-2 py-0.5 rounded-full bg-green-500/10 text-green-500/70">
                  {guide.level}
                </span>
              </div>
              <p className="text-xs text-white/40">{guide.desc}</p>
            </div>
          ))}
        </div>
        <h2 className="text-2xl font-semibold mt-12 mb-4">
          Integration Guides
        </h2>
        <div className="space-y-4">
          {[
            {
              title: "Connect to GitHub",
              desc: "Configure the GitHub plugin for PR and issue management",
            },
            {
              title: "Connect to Slack",
              desc: "Set up Slack integration for team notifications",
            },
            {
              title: "Connect to AWS",
              desc: "Configure AWS credentials and service access",
            },
            {
              title: "Connect to Jira",
              desc: "Set up Jira integration for issue tracking",
            },
          ].map((guide) => (
            <div
              key={guide.title}
              className="p-4 rounded-xl border border-white/5 bg-[#0a0a0a] hover:border-[#ff6b2b]/20 transition-colors"
            >
              <h3 className="text-sm font-semibold mb-1">{guide.title}</h3>
              <p className="text-xs text-white/40">{guide.desc}</p>
            </div>
          ))}
        </div>
        <h2 className="text-2xl font-semibold mt-12 mb-4">Advanced Guides</h2>
        <CodeBlock
          code={`# Build a custom plugin
conductor plugin-create my-plugin

# Deploy Conductor as a service
sudo systemctl enable conductor
sudo systemctl start conductor

# Set up monitoring with webhooks
conductor webhooks add https://hooks.slack.com/services/xxx \\
  --events tool.error,health.degraded

# Configure backup for audit logs
conductor audit export --format json \\
  --output /backup/audit-$(date +%Y%m%d).json`}
          language="bash"
          filename="advanced.sh"
        />
      </div>
    </div>
  );
}
