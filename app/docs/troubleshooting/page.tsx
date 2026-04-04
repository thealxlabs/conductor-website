import { CodeBlock } from "@/components/code-block";
import {
  AlertTriangle,
  ArrowRight,
  Search,
  Terminal,
  Settings,
  Server,
  Puzzle,
  Shield,
} from "lucide-react";

export default function TroubleshootingPage() {
  return (
    <div>
      <div className="mb-12">
        <div className="flex items-center gap-2 text-sm text-[#ff6b2b] mb-4">
          <AlertTriangle className="h-4 w-4" />
          Resources
        </div>
        <h1 className="text-4xl font-bold mb-4">Troubleshooting</h1>
        <p className="text-lg text-white/50 max-w-2xl">
          Common issues and their solutions. If you can't find what you're
          looking for, check GitHub issues or start a discussion.
        </p>
      </div>
      <div className="prose prose-invert max-w-none space-y-6">
        {[
          {
            title: "MCP server won't start",
            solution: `# Check if port is already in use
lsof -i :3000

# Kill existing process
kill -9 <PID>

# Start with verbose logging
conductor mcp start --verbose

# Check config file syntax
conductor config show`,
          },
          {
            title: "Plugin not found",
            solution: `# List all available plugins
conductor plugins list

# Enable the plugin
conductor plugins enable <plugin-name>

# Check plugin status
conductor plugins status <plugin-name>

# Reinstall if corrupted
conductor plugins disable <plugin-name>
conductor plugins enable <plugin-name>`,
          },
          {
            title: "AI client can't connect",
            solution: `# Verify MCP config in your AI client
# Check that the command path is correct
which conductor

# Test stdio connection manually
echo '{"jsonrpc":"2.0","id":0,"method":"initialize","params":{}}' | conductor mcp start

# Check logs
conductor doctor`,
          },
          {
            title: "Shell commands failing",
            solution: `# Check if shell plugin is enabled
conductor plugins status shell

# Verify command is in allowlist
# The shell plugin uses a strict allowlist
# Add commands to the allowed list in config

# Check approval settings
# Some commands require explicit approval`,
          },
          {
            title: "Database errors",
            solution: `# Check database file exists
ls -la ~/.conductor/conductor.db

# Backup and recreate
cp ~/.conductor/conductor.db ~/.conductor/conductor.db.bak
rm ~/.conductor/conductor.db
conductor init

# Check SQLite integrity
sqlite3 ~/.conductor/conductor.db "PRAGMA integrity_check;"`,
          },
          {
            title: "Encryption key issues",
            solution: `# Check if key file exists
ls -la ~/.conductor/.key

# Regenerate key (WARNING: will lose encrypted secrets)
rm ~/.conductor/.key
conductor init

# Re-enter all secret credentials after key regeneration`,
          },
        ].map((issue) => (
          <div
            key={issue.title}
            className="p-5 rounded-xl border border-white/5 bg-[#0a0a0a]"
          >
            <h3 className="text-base font-semibold mb-3 flex items-center gap-2">
              <AlertTriangle className="h-4 w-4 text-[#ff6b2b]" />
              {issue.title}
            </h3>
            <CodeBlock
              code={issue.solution}
              language="bash"
              filename="Solution"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
