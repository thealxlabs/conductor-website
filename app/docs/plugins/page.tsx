import { CodeBlock } from "@/components/code-block";
import {
  Puzzle,
  ArrowRight,
  Settings,
  Code2,
  Shield,
  Zap,
  Layers,
  Terminal,
  Package,
  FileCode,
  CheckCircle2,
  Wrench,
  ArrowUpRight,
  ListChecks,
} from "lucide-react";
import Link from "next/link";

const pluginCategories = [
  {
    name: "Core",
    count: 8,
    plugins: [
      "Shell",
      "Filesystem",
      "Git",
      "Editor",
      "Search",
      "Process",
      "Network",
      "System",
    ],
  },
  {
    name: "Development",
    count: 15,
    plugins: [
      "GitHub",
      "GitLab",
      "Jira",
      "Linear",
      "VS Code",
      "Docker",
      "Kubernetes",
      "Terraform",
      "Webpack",
      "Vite",
      "ESLint",
      "Prettier",
      "Jest",
      "Playwright",
      "Cypress",
    ],
  },
  {
    name: "Cloud",
    count: 12,
    plugins: [
      "AWS",
      "GCP",
      "Azure",
      "Cloudflare",
      "Vercel",
      "Netlify",
      "DigitalOcean",
      "Heroku",
      "Railway",
      "Fly.io",
      "Supabase",
      "Neon",
    ],
  },
  {
    name: "Data",
    count: 10,
    plugins: [
      "SQLite",
      "PostgreSQL",
      "MongoDB",
      "Redis",
      "Elasticsearch",
      "BigQuery",
      "Snowflake",
      "Databricks",
      "Airtable",
      "Notion",
    ],
  },
  {
    name: "Communication",
    count: 8,
    plugins: [
      "Slack",
      "Discord",
      "Telegram",
      "Email",
      "SMS",
      "Teams",
      "WhatsApp",
      "Signal",
    ],
  },
  {
    name: "Automation",
    count: 6,
    plugins: ["Cron", "Webhooks", "Zapier", "Make", "n8n", "GitHub Actions"],
  },
];

export default function PluginsPage() {
  return (
    <div>
      <div className="mb-12">
        <div className="flex items-center gap-2 text-sm text-[#ff6b2b] mb-4">
          <Puzzle className="h-4 w-4" />
          Core Concepts
        </div>
        <h1 className="text-4xl font-bold mb-4">Plugins</h1>
        <p className="text-lg text-white/50 max-w-2xl">
          Plugins are the building blocks of Conductor. Each plugin provides a
          set of tools that your AI agent can use to interact with external
          systems, services, and data sources.
        </p>
      </div>

      <div className="prose prose-invert max-w-none">
        <h2 className="text-2xl font-semibold mt-12 mb-4">
          Plugin Architecture
        </h2>
        <p className="text-white/60 leading-relaxed">
          Every plugin in Conductor implements the standard Plugin interface.
          This ensures consistent behavior across all plugins and allows the MCP
          server to manage them uniformly.
        </p>

        <CodeBlock
          code={`interface Plugin {
  name: string;
  description: string;
  version: string;
  
  // Called once when the plugin is first used
  initialize(conductor: Conductor): Promise<void>;
  
  // Returns true if the plugin has all required config
  isConfigured(): boolean;
  
  // Returns the tools this plugin provides
  getTools(): PluginTool[];
  
  // Optional: schema for 'conductor config setup <plugin>'
  configSchema?: PluginConfigSchema;
  
  // Optional: context for proactive reasoning
  getContext?(): Promise<string | null>;
}`}
          language="typescript"
          filename="plugin-interface.ts"
        />

        <h2 className="text-2xl font-semibold mt-12 mb-4">Plugin Lifecycle</h2>
        <p className="text-white/60 leading-relaxed">
          Plugins follow a well-defined lifecycle from registration to
          execution:
        </p>

        <div className="grid md:grid-cols-4 gap-4 my-8">
          <div className="p-4 rounded-xl border border-white/5 bg-[#0a0a0a]">
            <div className="text-xs font-mono text-[#ff6b2b] mb-2">01</div>
            <h3 className="text-sm font-semibold mb-1">Registration</h3>
            <p className="text-xs text-white/40">
              Plugin is registered with the PluginManager at startup
            </p>
          </div>
          <div className="p-4 rounded-xl border border-white/5 bg-[#0a0a0a]">
            <div className="text-xs font-mono text-[#ff6b2b] mb-2">02</div>
            <h3 className="text-sm font-semibold mb-1">Initialization</h3>
            <p className="text-xs text-white/40">
              Lazy initialization on first tool call or getContext()
            </p>
          </div>
          <div className="p-4 rounded-xl border border-white/5 bg-[#0a0a0a]">
            <div className="text-xs font-mono text-[#ff6b2b] mb-2">03</div>
            <h3 className="text-sm font-semibold mb-1">Configuration</h3>
            <p className="text-xs text-white/40">
              Settings loaded from config.json and keychain
            </p>
          </div>
          <div className="p-4 rounded-xl border border-white/5 bg-[#0a0a0a]">
            <div className="text-xs font-mono text-[#ff6b2b] mb-2">04</div>
            <h3 className="text-sm font-semibold mb-1">Execution</h3>
            <p className="text-xs text-white/40">
              Tool calls routed through circuit breaker and retry logic
            </p>
          </div>
        </div>

        <h2 className="text-2xl font-semibold mt-12 mb-4">Managing Plugins</h2>
        <p className="text-white/60 leading-relaxed">
          Use the CLI to manage plugins — enable, disable, configure, and list
          them.
        </p>

        <CodeBlock
          code={`# List all available plugins
conductor plugins list

# Enable a plugin
conductor plugins enable shell

# Disable a plugin
conductor plugins disable shell

# Check plugin status
conductor plugins status shell

# Configure a plugin interactively
conductor config setup github

# Install an external plugin
conductor plugins install https://example.com/my-plugin.js`}
          language="bash"
          filename="Terminal"
        />

        <h2 className="text-2xl font-semibold mt-12 mb-4">Plugin Categories</h2>
        <p className="text-white/60 leading-relaxed">
          Plugins are organized into categories to make discovery and management
          easier:
        </p>

        <div className="space-y-4 my-8">
          {pluginCategories.map((category) => (
            <div
              key={category.name}
              className="p-5 rounded-xl border border-white/5 bg-[#0a0a0a]"
            >
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-sm font-semibold">{category.name}</h3>
                <span className="text-xs text-white/30">
                  {category.count} plugins
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.plugins.map((plugin) => (
                  <span
                    key={plugin}
                    className="text-xs px-2.5 py-1 rounded-full bg-white/5 text-white/50 hover:text-[#ff6b2b] hover:bg-[#ff6b2b]/5 transition-colors cursor-default"
                  >
                    {plugin}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <h2 className="text-2xl font-semibold mt-12 mb-4">
          Building Custom Plugins
        </h2>
        <p className="text-white/60 leading-relaxed">
          You can create custom plugins to extend Conductor with your own tools.
          Use the plugin-create command to scaffold a new plugin:
        </p>

        <CodeBlock
          code={`# Scaffold a new plugin
conductor plugin-create my-custom-plugin

# This creates:
# ~/.conductor/plugins/my-custom-plugin.js
#
# The plugin file should export:
# - name: string
# - description: string
# - version: string
# - initialize(conductor): Promise<void>
# - isConfigured(): boolean
# - getTools(): PluginTool[]`}
          language="bash"
          filename="Terminal"
        />

        <CodeBlock
          code={`// Example custom plugin
export const name = "my-custom-plugin";
export const description = "My custom plugin for Conductor";
export const version = "1.0.0";

export async function initialize(conductor) {
  // Setup code here
}

export function isConfigured() {
  return true;
}

export function getTools() {
  return [
    {
      name: "greet",
      description: "Greet someone by name",
      parameters: {
        name: { type: "string", required: true },
      },
      handler: async (args) => {
        return \`Hello, \${args.name}!\`;
      },
    },
  ];
}`}
          language="javascript"
          filename="my-custom-plugin.js"
        />

        <h2 className="text-2xl font-semibold mt-12 mb-4">
          Plugin Configuration Schema
        </h2>
        <p className="text-white/60 leading-relaxed">
          Plugins can define a configuration schema that enables interactive
          setup via{" "}
          <code className="px-1.5 py-0.5 bg-white/5 rounded text-sm font-mono text-[#ff6b2b]">
            conductor config setup &lt;plugin&gt;
          </code>
          . Secret fields are automatically encrypted and stored in the OS
          keychain.
        </p>

        <CodeBlock
          code={`// Example config schema
export const configSchema = {
  fields: [
    {
      key: "api_key",
      label: "API Key",
      type: "string",
      secret: true,  // Stored in OS keychain
      required: true,
    },
    {
      key: "base_url",
      label: "Base URL",
      type: "string",
      default: "https://api.example.com",
    },
    {
      key: "timeout",
      label: "Request Timeout (ms)",
      type: "number",
      default: 5000,
    },
  ],
};`}
          language="javascript"
          filename="config-schema.js"
        />

        <h2 className="text-2xl font-semibold mt-12 mb-4">
          Proactive Reasoning
        </h2>
        <p className="text-white/60 leading-relaxed">
          Plugins can implement the optional{" "}
          <code className="px-1.5 py-0.5 bg-white/5 rounded text-sm font-mono text-[#ff6b2b]">
            getContext()
          </code>{" "}
          method to provide proactive information to the AI agent. This is
          called on a timer by the bot runtime and fed to the AI for contextual
          awareness.
        </p>

        <CodeBlock
          code={`// Example: getContext for a monitoring plugin
export async function getContext() {
  const alerts = await getActiveAlerts();
  if (alerts.length === 0) return null;
  
  return \`Active alerts: \${alerts.map(a => 
    a.message
  ).join(", ")}\`;
}`}
          language="javascript"
          filename="context-example.js"
        />

        <h2 className="text-2xl font-semibold mt-12 mb-4">Next Steps</h2>
        <div className="grid md:grid-cols-2 gap-4 mt-6">
          <Link
            href="/docs/plugin-reference"
            className="group flex items-start gap-3 p-4 rounded-xl border border-white/5 hover:border-[#ff6b2b]/20 hover:bg-[#ff6b2b]/5 transition-all"
          >
            <ListChecks className="h-5 w-5 text-[#ff6b2b] mt-0.5 shrink-0" />
            <div>
              <div className="text-sm font-medium text-white/80 group-hover:text-white">
                Plugin Reference
              </div>
              <div className="text-xs text-white/35 mt-1">
                Complete reference for all plugins
              </div>
            </div>
          </Link>
          <Link
            href="/marketplace"
            className="group flex items-start gap-3 p-4 rounded-xl border border-white/5 hover:border-[#ff6b2b]/20 hover:bg-[#ff6b2b]/5 transition-all"
          >
            <Package className="h-5 w-5 text-[#ff6b2b] mt-0.5 shrink-0" />
            <div>
              <div className="text-sm font-medium text-white/80 group-hover:text-white">
                Marketplace
              </div>
              <div className="text-xs text-white/35 mt-1">
                Browse and install community plugins
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
