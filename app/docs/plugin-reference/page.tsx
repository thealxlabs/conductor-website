import { CodeBlock } from "@/components/code-block";
import {
  ListChecks,
  ArrowRight,
  Terminal,
  Globe,
  Database,
  Cloud,
  MessageSquare,
  Bot,
  GitBranch,
  FileSearch,
  Shield,
  Zap,
  Settings,
  Bell,
  Clock,
  BarChart3,
  Eye,
  KeyRound,
  Webhook,
  Cpu,
  Server,
} from "lucide-react";

const allPlugins = [
  {
    icon: Terminal,
    name: "Shell",
    desc: "Execute shell commands with approval gates and allowlists",
    tools: ["execute", "exec_with_approval"],
  },
  {
    icon: FileSearch,
    name: "Filesystem",
    desc: "Read, write, search, and manage files and directories",
    tools: ["read", "write", "list", "search"],
  },
  {
    icon: GitBranch,
    name: "Git",
    desc: "Repository operations, diffs, branches, and commits",
    tools: ["status", "diff", "log", "branch", "commit"],
  },
  {
    icon: Globe,
    name: "Web Search",
    desc: "Search the web with multiple providers",
    tools: ["search", "fetch_page"],
  },
  {
    icon: Database,
    name: "SQLite",
    desc: "SQL database queries and management",
    tools: ["query", "schema", "tables"],
  },
  {
    icon: Cloud,
    name: "AWS",
    desc: "EC2, S3, Lambda, and 50+ AWS services",
    tools: ["ec2_list", "s3_list", "lambda_invoke"],
  },
  {
    icon: MessageSquare,
    name: "Slack",
    desc: "Send messages, read channels, manage workspaces",
    tools: ["send_message", "list_channels", "get_history"],
  },
  {
    icon: Bot,
    name: "Telegram",
    desc: "Bot management and message handling",
    tools: ["send_message", "get_updates"],
  },
  {
    icon: Clock,
    name: "Cron",
    desc: "Scheduled tasks and recurring jobs",
    tools: ["create", "list", "delete"],
  },
  {
    icon: Bell,
    name: "Notifications",
    desc: "Push, email, and in-app notifications",
    tools: ["send_push", "send_email"],
  },
  {
    icon: BarChart3,
    name: "Analytics",
    desc: "Metrics, dashboards, and reporting",
    tools: ["get_metrics", "get_report"],
  },
  {
    icon: Shield,
    name: "Security",
    desc: "Security scanning and vulnerability detection",
    tools: ["scan", "audit"],
  },
];

export default function PluginReferencePage() {
  return (
    <div>
      <div className="mb-12">
        <div className="flex items-center gap-2 text-sm text-[#ff6b2b] mb-4">
          <ListChecks className="h-4 w-4" />
          Core Concepts
        </div>
        <h1 className="text-4xl font-bold mb-4">Plugin Reference</h1>
        <p className="text-lg text-white/50 max-w-2xl">
          Complete reference for all built-in plugins. Each plugin provides one
          or more tools that your AI agent can use.
        </p>
      </div>
      <div className="prose prose-invert max-w-none">
        <div className="grid gap-4">
          {allPlugins.map((plugin) => (
            <div
              key={plugin.name}
              className="p-5 rounded-xl border border-white/5 bg-[#0a0a0a] hover:border-[#ff6b2b]/20 transition-colors"
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-[#ff6b2b]/10 flex items-center justify-center shrink-0">
                  <plugin.icon className="h-5 w-5 text-[#ff6b2b]" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="text-sm font-semibold">{plugin.name}</h3>
                    <span className="text-xs text-white/30">
                      {plugin.tools.length} tools
                    </span>
                  </div>
                  <p className="text-xs text-white/40 mb-3">{plugin.desc}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {plugin.tools.map((tool) => (
                      <code
                        key={tool}
                        className="text-xs px-2 py-0.5 rounded bg-white/5 text-white/50 font-mono"
                      >
                        {tool}
                      </code>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-8 p-4 rounded-xl border border-[#ff6b2b]/20 bg-[#ff6b2b]/5">
          <p className="text-sm text-[#ff6b2b]">
            This page shows 12 of 100+ plugins. Visit the marketplace for the
            complete list and community plugins.
          </p>
        </div>
      </div>
    </div>
  );
}
