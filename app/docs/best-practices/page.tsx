import { CodeBlock } from "@/components/code-block";
import {
  CheckCircle2,
  ArrowRight,
  Shield,
  Zap,
  Server,
  Puzzle,
  Settings,
  Layers,
  Eye,
} from "lucide-react";

export default function BestPracticesPage() {
  return (
    <div>
      <div className="mb-12">
        <div className="flex items-center gap-2 text-sm text-[#ff6b2b] mb-4">
          <CheckCircle2 className="h-4 w-4" />
          Resources
        </div>
        <h1 className="text-4xl font-bold mb-4">Best Practices</h1>
        <p className="text-lg text-white/50 max-w-2xl">
          Recommended patterns and practices for production deployments of
          Conductor.
        </p>
      </div>
      <div className="prose prose-invert max-w-none">
        <h2 className="text-2xl font-semibold mt-12 mb-4">Plugin Management</h2>
        <div className="space-y-4">
          {[
            {
              title: "Enable only what you need",
              desc: "Each enabled plugin increases the attack surface. Only enable plugins you actively use.",
            },
            {
              title: "Use approval gates for dangerous tools",
              desc: "Always require approval for shell commands, file deletions, and API mutations.",
            },
            {
              title: "Rotate API keys regularly",
              desc: "Set a calendar reminder to rotate all plugin API keys every 90 days.",
            },
            {
              title: "Monitor plugin health",
              desc: "Check conductor doctor regularly and set up webhook alerts for degraded health.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="p-4 rounded-xl border border-white/5 bg-[#0a0a0a]"
            >
              <h3 className="text-sm font-semibold mb-1">{item.title}</h3>
              <p className="text-xs text-white/40">{item.desc}</p>
            </div>
          ))}
        </div>
        <h2 className="text-2xl font-semibold mt-12 mb-4">
          Security Practices
        </h2>
        <CodeBlock
          code={`# Recommended security config
{
  "security": {
    "approvalRequired": ["shell", "exec", "delete"],
    "maxCommandLength": 5000,
    "allowedDirectories": ["/workspace", "/tmp"],
    "blockCommands": ["rm -rf /", "sudo", "chmod 777"],
    "auditLogEnabled": true,
    "rateLimitPerTool": 60
  }
}`}
          language="json"
          filename="security-config.json"
        />
        <h2 className="text-2xl font-semibold mt-12 mb-4">Performance</h2>
        <div className="space-y-4">
          {[
            {
              title: "Use lazy initialization",
              desc: "Plugins are lazily initialized by default. Don't override this behavior.",
            },
            {
              title: "Set appropriate timeouts",
              desc: "Configure tool-specific timeouts based on expected operation duration.",
            },
            {
              title: "Monitor circuit breakers",
              desc: "Frequent circuit breaker trips indicate underlying issues that need investigation.",
            },
            {
              title: "Clean up old audit logs",
              desc: "Export and archive audit logs periodically to prevent unbounded growth.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="p-4 rounded-xl border border-white/5 bg-[#0a0a0a]"
            >
              <h3 className="text-sm font-semibold mb-1">{item.title}</h3>
              <p className="text-xs text-white/40">{item.desc}</p>
            </div>
          ))}
        </div>
        <h2 className="text-2xl font-semibold mt-12 mb-4">
          Production Deployment
        </h2>
        <CodeBlock
          code={`# Run as a systemd service
sudo tee /etc/systemd/system/conductor.service << 'EOF'
[Unit]
Description=Conductor MCP Server
After=network.target

[Service]
Type=simple
User=conductor
ExecStart=/usr/bin/conductor mcp start --transport http --port 3000
Restart=on-failure
RestartSec=5

[Install]
WantedBy=multi-user.target
EOF

sudo systemctl daemon-reload
sudo systemctl enable conductor
sudo systemctl start conductor`}
          language="bash"
          filename="systemd-service.sh"
        />
      </div>
    </div>
  );
}
