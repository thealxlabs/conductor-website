import { CodeBlock } from "@/components/code-block";
import {
  Code2,
  ArrowRight,
  Server,
  Database,
  Puzzle,
  Shield,
  Activity,
  Webhook,
  Settings,
} from "lucide-react";

export default function APIReferencePage() {
  return (
    <div>
      <div className="mb-12">
        <div className="flex items-center gap-2 text-sm text-[#ff6b2b] mb-4">
          <Code2 className="h-4 w-4" />
          Integration
        </div>
        <h1 className="text-4xl font-bold mb-4">API Reference</h1>
        <p className="text-lg text-white/50 max-w-2xl">
          Complete reference for all Conductor API endpoints, data structures,
          and MCP protocol messages.
        </p>
      </div>
      <div className="prose prose-invert max-w-none">
        <h2 className="text-2xl font-semibold mt-12 mb-4">
          MCP Protocol Endpoints
        </h2>
        <p className="text-white/60 leading-relaxed">
          When running in HTTP transport mode, Conductor exposes these REST
          endpoints:
        </p>
        <CodeBlock
          code={`POST /mcp/tools/call
  Body: { name: string, arguments: object }
  Response: { result: string, isError: boolean }

GET /mcp/tools/list
  Response: { tools: ToolDefinition[] }

GET /mcp/health
  Response: { status: string, plugins: number, uptime: number }

GET /sse
  Server-Sent Events stream for real-time updates`}
          language="http"
          filename="endpoints.http"
        />
        <h2 className="text-2xl font-semibold mt-12 mb-4">CLI Commands</h2>
        <CodeBlock
          code={`# Lifecycle
conductor start              # Start MCP server
conductor stop               # Stop MCP server
conductor status             # Check server status
conductor restart            # Restart MCP server

# Plugins
conductor plugins list       # List all plugins
conductor plugins enable <n> # Enable a plugin
conductor plugins disable <n># Disable a plugin
conductor plugins install <u># Install external plugin

# Configuration
conductor init               # Initialize configuration
conductor config setup <p>   # Configure a plugin
conductor config show        # Show current config

# Diagnostics
conductor doctor             # Run health checks
conductor audit view         # View audit log
conductor audit verify       # Verify audit integrity
conductor metrics list       # List tool metrics`}
          language="bash"
          filename="cli-commands.sh"
        />
        <h2 className="text-2xl font-semibold mt-12 mb-4">Data Structures</h2>
        <CodeBlock
          code={`interface ToolDefinition {
  name: string;
  description: string;
  inputSchema: {
    type: "object";
    properties: Record<string, JsonSchema>;
    required?: string[];
  };
  requiresApproval?: boolean;
}

interface ToolCallRequest {
  id: string;
  jsonrpc: "2.0";
  method: "tools/call";
  params: {
    name: string;
    arguments: Record<string, unknown>;
  };
}

interface ToolCallResponse {
  id: string;
  jsonrpc: "2.0";
  result: {
    content: Array<{
      type: "text" | "image" | "resource";
      text?: string;
      data?: string;
      mimeType?: string;
    }>;
    isError?: boolean;
  };
}`}
          language="typescript"
          filename="types.ts"
        />
        <h2 className="text-2xl font-semibold mt-12 mb-4">Error Codes</h2>
        <CodeBlock
          code={`// MCP error codes
const ERROR_CODES = {
  PARSE_ERROR:     -32700,  // Invalid JSON
  INVALID_REQUEST: -32600,  // Invalid request format
  METHOD_NOT_FOUND:-32601,  // Unknown method
  INVALID_PARAMS:  -32602,  // Invalid parameters
  INTERNAL_ERROR:  -32603,  // Internal server error
  TOOL_NOT_FOUND:  -31001,  // Tool does not exist
  APPROVAL_REQUIRED:-31002, // User approval needed
  CIRCUIT_OPEN:    -31003,  // Circuit breaker is open
  RATE_LIMITED:    -31004,  // Rate limit exceeded
  PLUGIN_ERROR:    -31005,  // Plugin execution failed
}`}
          language="typescript"
          filename="error-codes.ts"
        />
        <h2 className="text-2xl font-semibold mt-12 mb-4">Response Format</h2>
        <CodeBlock
          code={`// Success response
{
  "jsonrpc": "2.0",
  "id": "req_123",
  "result": {
    "content": [
      { "type": "text", "text": "Command executed successfully" }
    ]
  }
}

// Error response
{
  "jsonrpc": "2.0",
  "id": "req_123",
  "error": {
    "code": -31002,
    "message": "Approval required for this tool",
    "data": { "tool": "shell", "command": "rm -rf /" }
  }
}`}
          language="json"
          filename="responses.json"
        />
      </div>
    </div>
  );
}
