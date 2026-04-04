import { CodeBlock } from "@/components/code-block";
import {
  Server,
  ArrowRight,
  Shield,
  Zap,
  Layers,
  Network,
  Settings,
  KeyRound,
  Database,
  Activity,
  Bell,
  Webhook,
  Lock,
  Puzzle,
} from "lucide-react";
import Link from "next/link";

export default function MCPServerPage() {
  return (
    <div>
      <div className="mb-12">
        <div className="flex items-center gap-2 text-sm text-[#ff6b2b] mb-4">
          <Server className="h-4 w-4" />
          Core Concepts
        </div>
        <h1 className="text-4xl font-bold mb-4">MCP Server</h1>
        <p className="text-lg text-white/50 max-w-2xl">
          The Model Context Protocol server is the heart of Conductor. It
          exposes all plugin tools through a standardized interface that any
          MCP-compatible AI client can consume.
        </p>
      </div>

      <div className="prose prose-invert max-w-none">
        <h2 className="text-2xl font-semibold mt-12 mb-4">
          Architecture Overview
        </h2>
        <p className="text-white/60 leading-relaxed">
          The MCP server in Conductor acts as a bridge between AI clients and
          your system's capabilities. When an AI agent needs to perform an
          action — like reading a file, running a command, or querying a
          database — it sends a tool call request through the MCP protocol.
          Conductor receives this request, routes it to the appropriate plugin,
          and returns the result.
        </p>
        <p className="text-white/60 leading-relaxed mt-4">
          The server is built on a layered architecture that ensures
          reliability, security, and observability at every level:
        </p>

        <div className="grid md:grid-cols-2 gap-4 my-8">
          <div className="p-5 rounded-xl border border-white/5 bg-[#0a0a0a]">
            <div className="flex items-center gap-2 mb-3">
              <Network className="h-4 w-4 text-[#ff6b2b]" />
              <h3 className="text-sm font-semibold">Transport Layer</h3>
            </div>
            <p className="text-xs text-white/40 leading-relaxed">
              Supports stdio for local AI clients and HTTP/SSE for remote
              connections. The transport layer handles JSON-RPC 2.0 message
              framing and connection lifecycle.
            </p>
          </div>
          <div className="p-5 rounded-xl border border-white/5 bg-[#0a0a0a]">
            <div className="flex items-center gap-2 mb-3">
              <Shield className="h-4 w-4 text-[#ff6b2b]" />
              <h3 className="text-sm font-semibold">Security Layer</h3>
            </div>
            <p className="text-xs text-white/40 leading-relaxed">
              Circuit breakers prevent cascading failures. Retry logic with
              exponential backoff handles transient errors. Zod validation
              ensures all inputs match expected schemas.
            </p>
          </div>
          <div className="p-5 rounded-xl border border-white/5 bg-[#0a0a0a]">
            <div className="flex items-center gap-2 mb-3">
              <Layers className="h-4 w-4 text-[#ff6b2b]" />
              <h3 className="text-sm font-semibold">Plugin Layer</h3>
            </div>
            <p className="text-xs text-white/40 leading-relaxed">
              Each plugin implements a standard interface with tool definitions,
              input validation, and execution handlers. Plugins are lazily
              initialized on first use.
            </p>
          </div>
          <div className="p-5 rounded-xl border border-white/5 bg-[#0a0a0a]">
            <div className="flex items-center gap-2 mb-3">
              <Activity className="h-4 w-4 text-[#ff6b2b]" />
              <h3 className="text-sm font-semibold">Observability Layer</h3>
            </div>
            <p className="text-xs text-white/40 leading-relaxed">
              Every tool call is logged to the audit chain with SHA-256 hashing.
              Metrics track call counts, latency, and error rates per tool.
            </p>
          </div>
        </div>

        <h2 className="text-2xl font-semibold mt-12 mb-4">
          Starting the Server
        </h2>
        <p className="text-white/60 leading-relaxed">
          The MCP server can be started in several ways depending on your use
          case:
        </p>

        <CodeBlock
          code={`# Start with stdio transport (default for AI clients)
conductor mcp start

# Start with HTTP/SSE transport (for dashboard)
conductor mcp start --transport http --port 3000

# Start in development mode with verbose logging
conductor mcp start --verbose

# Start with a specific config file
conductor mcp start --config /path/to/config.json`}
          language="bash"
          filename="Terminal"
        />

        <h2 className="text-2xl font-semibold mt-12 mb-4">
          Transport Protocols
        </h2>
        <p className="text-white/60 leading-relaxed">
          Conductor supports two transport protocols for the MCP server:
        </p>

        <h3 className="text-xl font-semibold mt-8 mb-3">Stdio Transport</h3>
        <p className="text-white/60 leading-relaxed">
          The default transport for local AI clients. Communication happens over
          standard input/output streams using JSON-RPC 2.0 messages. This is the
          most common configuration for tools like Claude Code, Cursor, and
          Cline.
        </p>
        <CodeBlock
          code={`// MCP config for stdio transport
{
  "mcpServers": {
    "conductor": {
      "command": "conductor",
      "args": ["mcp", "start"]
    }
  }
}`}
          language="json"
          filename="stdio-config.json"
        />

        <h3 className="text-xl font-semibold mt-8 mb-3">HTTP/SSE Transport</h3>
        <p className="text-white/60 leading-relaxed">
          For remote connections and the dashboard interface. Uses HTTP POST for
          tool calls and Server-Sent Events for streaming responses. Includes
          rate limiting and authentication.
        </p>
        <CodeBlock
          code={`// Start HTTP server
conductor mcp start --transport http --port 3000

// The server exposes these endpoints:
// POST /mcp/tools/call    - Execute a tool
// GET  /mcp/tools/list    - List available tools
// GET  /mcp/health        - Health check
// GET  /sse               - Server-Sent Events stream`}
          language="bash"
          filename="Terminal"
        />

        <h2 className="text-2xl font-semibold mt-12 mb-4">Circuit Breaker</h2>
        <p className="text-white/60 leading-relaxed">
          Each plugin tool has its own circuit breaker that tracks failure
          rates. When a tool fails repeatedly, the circuit opens and prevents
          further calls until the tool recovers.
        </p>
        <CodeBlock
          code={`// Circuit breaker configuration
{
  "circuitBreaker": {
    "failureThreshold": 5,      // Open after 5 consecutive failures
    "recoveryTimeout": 30000,   // Try again after 30 seconds
    "halfOpenMaxCalls": 3       // Allow 3 test calls in half-open state
  }
}`}
          language="json"
          filename="circuit-breaker-config.json"
        />

        <h2 className="text-2xl font-semibold mt-12 mb-4">Retry Logic</h2>
        <p className="text-white/60 leading-relaxed">
          Transient failures are automatically retried with exponential backoff
          and jitter. This handles network timeouts, rate limits, and temporary
          service unavailability.
        </p>
        <CodeBlock
          code={`// Retry configuration
{
  "retry": {
    "maxAttempts": 3,
    "baseDelay": 1000,      // 1 second
    "maxDelay": 10000,      // 10 seconds max
    "jitter": true          // Add random jitter to prevent thundering herd
  }
}`}
          language="json"
          filename="retry-config.json"
        />

        <h2 className="text-2xl font-semibold mt-12 mb-4">Zod Validation</h2>
        <p className="text-white/60 leading-relaxed">
          Every tool input is validated against its Zod schema before execution.
          This prevents malformed inputs from reaching plugin handlers and
          provides clear error messages to the AI client.
        </p>
        <CodeBlock
          code={`// Example: Shell plugin tool validation
const shellToolSchema = z.object({
  command: z.string()
    .min(1, "Command cannot be empty")
    .max(10000, "Command too long"),
  workingDir: z.string().optional(),
  timeout: z.number().min(1000).max(60000).default(30000),
  requiresApproval: z.boolean().default(true),
})`}
          language="typescript"
          filename="validation.ts"
        />

        <h2 className="text-2xl font-semibold mt-12 mb-4">Audit Logging</h2>
        <p className="text-white/60 leading-relaxed">
          Every tool call is logged to an append-only audit chain at{" "}
          <code className="px-1.5 py-0.5 bg-white/5 rounded text-sm font-mono text-[#ff6b2b]">
            ~/.conductor/audit.log
          </code>
          . Each entry is SHA-256 hashed and chained to the previous entry,
          creating a tamper-evident log.
        </p>
        <CodeBlock
          code={`// View audit log
conductor audit view

// Verify audit log integrity
conductor audit verify

// Export audit log
conductor audit export --format json --output audit-export.json`}
          language="bash"
          filename="Terminal"
        />

        <h2 className="text-2xl font-semibold mt-12 mb-4">Metrics</h2>
        <p className="text-white/60 leading-relaxed">
          The server maintains in-memory metrics for every tool: call counts,
          success rates, latency percentiles, and error distributions. These are
          exposed through the dashboard and health endpoints.
        </p>
        <CodeBlock
          code={`// Get metrics for all tools
conductor metrics list

// Get metrics for a specific tool
conductor metrics get shell

// Reset metrics
conductor metrics reset`}
          language="bash"
          filename="Terminal"
        />

        <h2 className="text-2xl font-semibold mt-12 mb-4">
          Configuration Reference
        </h2>
        <p className="text-white/60 leading-relaxed">
          The full MCP server configuration lives in{" "}
          <code className="px-1.5 py-0.5 bg-white/5 rounded text-sm font-mono text-[#ff6b2b]">
            ~/.conductor/config.json
          </code>
          :
        </p>
        <CodeBlock
          code={`{
  "mcp": {
    "transport": "stdio",
    "port": 3000,
    "cors": {
      "origin": "*",
      "methods": ["GET", "POST"],
      "allowedHeaders": ["Content-Type", "Authorization"]
    },
    "rateLimit": {
      "windowMs": 60000,
      "maxRequests": 100
    },
    "timeout": {
      "toolCall": 30000,
      "initialization": 10000
    }
  },
  "plugins": {
    "shell": { "enabled": true },
    "filesystem": { "enabled": true },
    "git": { "enabled": true },
    "github": { "enabled": false }
  },
  "security": {
    "encryption": "aes-256-gcm",
    "keyDerivation": "machine-id",
    "approvalRequired": ["shell", "exec"]
  }
}`}
          language="json"
          filename="~/.conductor/config.json"
        />

        <h2 className="text-2xl font-semibold mt-12 mb-4">Next Steps</h2>
        <div className="grid md:grid-cols-2 gap-4 mt-6">
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
                Learn about the plugin system
              </div>
            </div>
          </Link>
          <Link
            href="/docs/security"
            className="group flex items-start gap-3 p-4 rounded-xl border border-white/5 hover:border-[#ff6b2b]/20 hover:bg-[#ff6b2b]/5 transition-all"
          >
            <Lock className="h-5 w-5 text-[#ff6b2b] mt-0.5 shrink-0" />
            <div>
              <div className="text-sm font-medium text-white/80 group-hover:text-white">
                Security
              </div>
              <div className="text-xs text-white/35 mt-1">
                Understand the security model
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
