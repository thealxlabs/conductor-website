import { CodeBlock } from "@/components/code-block";
import {
  ArrowRight,
  CheckCircle2,
  Terminal,
  Download,
  Settings,
  MessageSquare,
  Server,
  Puzzle,
} from "lucide-react";
import Link from "next/link";

export default function QuickStartPage() {
  return (
    <div>
      <div className="mb-12">
        <div className="flex items-center gap-2 text-sm text-[#ff6b2b] mb-4">
          <Terminal className="h-4 w-4" />
          Getting Started
        </div>
        <h1 className="text-4xl font-bold mb-4">Quick Start</h1>
        <p className="text-lg text-white/50 max-w-2xl">
          Get Conductor installed, configured, and connected to your AI client
          in under 5 minutes.
        </p>
      </div>

      <div className="prose prose-invert max-w-none">
        <h2 className="text-2xl font-semibold mt-12 mb-4">Prerequisites</h2>
        <p className="text-white/60 leading-relaxed">
          Before you begin, ensure you have the following installed on your
          system:
        </p>
        <ul className="space-y-2 text-white/60">
          <li className="flex items-center gap-2">
            <CheckCircle2 className="h-4 w-4 text-[#ff6b2b] shrink-0" /> Node.js
            18 or later
          </li>
          <li className="flex items-center gap-2">
            <CheckCircle2 className="h-4 w-4 text-[#ff6b2b] shrink-0" /> npm,
            yarn, or pnpm
          </li>
          <li className="flex items-center gap-2">
            <CheckCircle2 className="h-4 w-4 text-[#ff6b2b] shrink-0" /> An
            MCP-compatible AI client (Claude Code, Cursor, Cline, etc.)
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mt-12 mb-4">
          Step 1: Install Conductor
        </h2>
        <p className="text-white/60 leading-relaxed">
          Install Conductor globally using your preferred package manager. This
          gives you the{" "}
          <code className="px-1.5 py-0.5 bg-white/5 rounded text-sm font-mono text-[#ff6b2b]">
            conductor
          </code>{" "}
          CLI command.
        </p>
        <CodeBlock
          code="npm install -g @thealxlabs/conductor"
          language="bash"
          filename="Terminal"
        />
        <p className="text-white/60 leading-relaxed mt-4">
          Verify the installation by checking the version:
        </p>
        <CodeBlock
          code="conductor --version"
          language="bash"
          filename="Terminal"
        />

        <h2 className="text-2xl font-semibold mt-12 mb-4">
          Step 2: Initialize Configuration
        </h2>
        <p className="text-white/60 leading-relaxed">
          Run the init command to create your configuration directory at{" "}
          <code className="px-1.5 py-0.5 bg-white/5 rounded text-sm font-mono text-[#ff6b2b]">
            ~/.conductor/
          </code>
          . This creates the config file, SQLite database, and encryption key.
        </p>
        <CodeBlock
          code={`conductor init

# This creates:
# ~/.conductor/config.json    - Your configuration
# ~/.conductor/conductor.db   - SQLite database
# ~/.conductor/.key           - Encryption key`}
          language="bash"
          filename="Terminal"
        />

        <h2 className="text-2xl font-semibold mt-12 mb-4">
          Step 3: Enable Plugins
        </h2>
        <p className="text-white/60 leading-relaxed">
          Enable the plugins you need. Each plugin provides a set of tools that
          your AI agent can use.
        </p>
        <CodeBlock
          code={`# Enable essential plugins
conductor plugins enable shell
conductor plugins enable filesystem
conductor plugins enable git
conductor plugins enable github

# List all enabled plugins
conductor plugins list`}
          language="bash"
          filename="Terminal"
        />
        <p className="text-white/60 leading-relaxed mt-4">
          You can also configure plugin-specific settings:
        </p>
        <CodeBlock
          code={`# Configure GitHub plugin
conductor config setup github

# This will prompt you for:
# - GitHub Personal Access Token
# - Default repository
# - Webhook URL (optional)`}
          language="bash"
          filename="Terminal"
        />

        <h2 className="text-2xl font-semibold mt-12 mb-4">
          Step 4: Connect Your AI Client
        </h2>
        <p className="text-white/60 leading-relaxed">
          Add the MCP server configuration to your AI client. Conductor uses
          stdio transport by default.
        </p>

        <h3 className="text-xl font-semibold mt-8 mb-3">Claude Code</h3>
        <CodeBlock
          code={`# Add to your Claude Code MCP config
{
  "mcpServers": {
    "conductor": {
      "command": "conductor",
      "args": ["mcp", "start"]
    }
  }
}`}
          language="json"
          filename="claude_desktop_config.json"
        />

        <h3 className="text-xl font-semibold mt-8 mb-3">Cursor</h3>
        <CodeBlock
          code={`# In Cursor settings, add MCP server:
{
  "mcpServers": {
    "conductor": {
      "command": "npx",
      "args": ["-y", "@thealxlabs/conductor", "mcp", "start"]
    }
  }
}`}
          language="json"
          filename="Cursor MCP Config"
        />

        <h3 className="text-xl font-semibold mt-8 mb-3">Cline</h3>
        <CodeBlock
          code={`# In Cline settings, add MCP configuration:
{
  "mcpServers": {
    "conductor": {
      "command": "conductor",
      "args": ["mcp", "start"]
    }
  }
}`}
          language="json"
          filename="Cline MCP Config"
        />

        <h2 className="text-2xl font-semibold mt-12 mb-4">
          Step 5: Verify Connection
        </h2>
        <p className="text-white/60 leading-relaxed">
          Start the MCP server and verify it's working:
        </p>
        <CodeBlock
          code={`# Start the MCP server
conductor mcp start

# Check health
conductor doctor

# Expected output:
# ✓ Conductor is running
# ✓ 4 plugins enabled
# ✓ MCP server listening on stdio
# ✓ Database connected
# ✓ Encryption key loaded`}
          language="bash"
          filename="Terminal"
        />

        <h2 className="text-2xl font-semibold mt-12 mb-4">What's Next?</h2>
        <div className="grid md:grid-cols-2 gap-4 mt-6">
          <Link
            href="/docs/mcp-server"
            className="group flex items-start gap-3 p-4 rounded-xl border border-white/5 hover:border-[#ff6b2b]/20 hover:bg-[#ff6b2b]/5 transition-all"
          >
            <Server className="h-5 w-5 text-[#ff6b2b] mt-0.5 shrink-0" />
            <div>
              <div className="text-sm font-medium text-white/80 group-hover:text-white">
                MCP Server
              </div>
              <div className="text-xs text-white/35 mt-1">
                Learn how the MCP server works
              </div>
            </div>
          </Link>
          <Link
            href="/docs/plugins"
            className="group flex items-start gap-3 p-4 rounded-xl border border-white/5 hover:border-[#ff6b2b]/20 hover:bg-[#ff6b2b]/5 transition-all"
          >
            <Puzzle className="h-5 w-5 text-[#ff6b2b] mt-0.5 shrink-0" />
            <div>
              <div className="text-sm font-medium text-white/80 group-hover:text-white">
                Plugins
              </div>
              <div className="text-xs text-white/35 mt-1">
                Explore the plugin system
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
