import { CodeBlock } from "@/components/code-block";
import { Network, ArrowRight, Server, Zap, Shield, Layers } from "lucide-react";

export default function MCPProtocolPage() {
  return (
    <div>
      <div className="mb-12">
        <div className="flex items-center gap-2 text-sm text-[#ff6b2b] mb-4">
          <Network className="h-4 w-4" />
          Core Concepts
        </div>
        <h1 className="text-4xl font-bold mb-4">MCP Protocol</h1>
        <p className="text-lg text-white/50 max-w-2xl">
          Technical specification of the Model Context Protocol implementation
          in Conductor. Understanding the protocol helps with debugging and
          building custom integrations.
        </p>
      </div>
      <div className="prose prose-invert max-w-none">
        <h2 className="text-2xl font-semibold mt-12 mb-4">Protocol Overview</h2>
        <p className="text-white/60 leading-relaxed">
          The Model Context Protocol (MCP) is an open standard for communication
          between AI hosts and tool servers. It uses JSON-RPC 2.0 as its message
          format and supports two transports: stdio and HTTP/SSE.
        </p>
        <h2 className="text-2xl font-semibold mt-12 mb-4">Message Format</h2>
        <CodeBlock
          code={`// JSON-RPC 2.0 request
{
  "jsonrpc": "2.0",
  "id": 1,
  "method": "tools/call",
  "params": {
    "name": "shell",
    "arguments": { "command": "ls -la" }
  }
}

// JSON-RPC 2.0 response
{
  "jsonrpc": "2.0",
  "id": 1,
  "result": {
    "content": [
      { "type": "text", "text": "total 42\ndrwxr-xr-x ..." }
    ]
  }
}`}
          language="json"
          filename="mcp-messages.json"
        />
        <h2 className="text-2xl font-semibold mt-12 mb-4">
          Initialization Flow
        </h2>
        <CodeBlock
          code={`// 1. Client sends initialize
{
  "jsonrpc": "2.0",
  "id": 0,
  "method": "initialize",
  "params": {
    "protocolVersion": "2024-11-05",
    "capabilities": {},
    "clientInfo": { "name": "claude-code", "version": "1.0.0" }
  }
}

// 2. Server responds
{
  "jsonrpc": "2.0",
  "id": 0,
  "result": {
    "protocolVersion": "2024-11-05",
    "capabilities": {
      "tools": { "listChanged": true }
    },
    "serverInfo": { "name": "conductor", "version": "2.0.0" }
  }
}

// 3. Client sends initialized notification
{
  "jsonrpc": "2.0",
  "method": "notifications/initialized"
}`}
          language="json"
          filename="init-flow.json"
        />
        <h2 className="text-2xl font-semibold mt-12 mb-4">Tool Discovery</h2>
        <p className="text-white/60 leading-relaxed">
          After initialization, the client requests the list of available tools:
        </p>
        <CodeBlock
          code={`// Request tools list
{
  "jsonrpc": "2.0",
  "id": 1,
  "method": "tools/list"
}

// Response with all plugin tools
{
  "jsonrpc": "2.0",
  "id": 1,
  "result": {
    "tools": [
      {
        "name": "shell_execute",
        "description": "Execute a shell command",
        "inputSchema": {
          "type": "object",
          "properties": {
            "command": { "type": "string" },
            "workingDir": { "type": "string" }
          },
          "required": ["command"]
        }
      }
    ]
  }
}`}
          language="json"
          filename="tools-list.json"
        />
        <h2 className="text-2xl font-semibold mt-12 mb-4">Transport Details</h2>
        <div className="grid md:grid-cols-2 gap-4 my-6">
          <div className="p-5 rounded-xl border border-white/5 bg-[#0a0a0a]">
            <h3 className="text-sm font-semibold mb-2">Stdio Transport</h3>
            <p className="text-xs text-white/40 leading-relaxed">
              Messages are sent as newline-delimited JSON over stdin/stdout.
              Each line is a complete JSON-RPC message. Used for local AI
              clients.
            </p>
          </div>
          <div className="p-5 rounded-xl border border-white/5 bg-[#0a0a0a]">
            <h3 className="text-sm font-semibold mb-2">HTTP/SSE Transport</h3>
            <p className="text-xs text-white/40 leading-relaxed">
              POST /message for sending requests. GET /sse for receiving
              streaming responses. Used for remote connections and the
              dashboard.
            </p>
          </div>
        </div>
        <h2 className="text-2xl font-semibold mt-12 mb-4">Error Handling</h2>
        <CodeBlock
          code={`// Standard JSON-RPC error
{
  "jsonrpc": "2.0",
  "id": 1,
  "error": {
    "code": -32602,
    "message": "Invalid params",
    "data": {
      "details": "Missing required field: command",
      "schema": { "command": { "type": "string", "required": true } }
    }
  }
}`}
          language="json"
          filename="error-response.json"
        />
      </div>
    </div>
  );
}
