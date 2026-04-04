import { CodeBlock } from "@/components/code-block";
import { Cpu, ArrowRight, Code2, Terminal, Package } from "lucide-react";

export default function SDKsPage() {
  return (
    <div>
      <div className="mb-12">
        <div className="flex items-center gap-2 text-sm text-[#ff6b2b] mb-4">
          <Cpu className="h-4 w-4" />
          Integration
        </div>
        <h1 className="text-4xl font-bold mb-4">SDKs</h1>
        <p className="text-lg text-white/50 max-w-2xl">
          Official SDKs for integrating with Conductor programmatically.
          Available for TypeScript, Python, and more.
        </p>
      </div>
      <div className="prose prose-invert max-w-none">
        <h2 className="text-2xl font-semibold mt-12 mb-4">TypeScript SDK</h2>
        <CodeBlock
          code={`import { ConductorClient } from '@thealxlabs/conductor-sdk';

const client = new ConductorClient({
  transport: 'http',
  baseUrl: 'http://localhost:3000',
});

// List available tools
const tools = await client.tools.list();

// Call a tool
const result = await client.tools.call('shell', {
  command: 'ls -la',
  workingDir: '/home/user',
});

// Get metrics
const metrics = await client.metrics.get('shell');

// Subscribe to events
client.on('tool.complete', (event) => {
  console.log('Tool completed:', event.data.tool);
});`}
          language="typescript"
          filename="sdk-typescript.ts"
        />
        <h2 className="text-2xl font-semibold mt-12 mb-4">Python SDK</h2>
        <CodeBlock
          code={`from conductor_sdk import ConductorClient

client = ConductorClient(
    transport="http",
    base_url="http://localhost:3000",
)

# List available tools
tools = client.tools.list()

# Call a tool
result = client.tools.call("shell", {
    "command": "ls -la",
    "workingDir": "/home/user",
})

# Get metrics
metrics = client.metrics.get("shell")

# Subscribe to events
@client.on("tool.complete")
def on_tool_complete(event):
    print(f"Tool completed: {event.data.tool}")`}
          language="python"
          filename="sdk-python.py"
        />
        <h2 className="text-2xl font-semibold mt-12 mb-4">Installation</h2>
        <CodeBlock
          code={`# TypeScript / JavaScript
npm install @thealxlabs/conductor-sdk

# Python
pip install conductor-sdk

# Go
go get github.com/thealxlabs/conductor-sdk/go

# Rust
cargo add conductor-sdk`}
          language="bash"
          filename="Terminal"
        />
        <h2 className="text-2xl font-semibold mt-12 mb-4">SDK Features</h2>
        <div className="grid md:grid-cols-2 gap-4 my-6">
          {[
            {
              title: "Type Safety",
              desc: "Full TypeScript types for all API responses",
            },
            {
              title: "Auto Retry",
              desc: "Built-in retry logic matching server config",
            },
            {
              title: "Event Streaming",
              desc: "SSE client for real-time event subscriptions",
            },
            { title: "Health Checks", desc: "Programmatic health monitoring" },
          ].map((feature) => (
            <div
              key={feature.title}
              className="p-4 rounded-xl border border-white/5 bg-[#0a0a0a]"
            >
              <h3 className="text-sm font-semibold mb-1">{feature.title}</h3>
              <p className="text-xs text-white/40">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
