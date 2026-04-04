import { CodeBlock } from "@/components/code-block";
import {
  Webhook,
  Bell,
  ArrowRight,
  Server,
  Filter,
  Shield,
  Activity,
  Zap,
} from "lucide-react";

export default function WebhooksPage() {
  return (
    <div>
      <div className="mb-12">
        <div className="flex items-center gap-2 text-sm text-[#ff6b2b] mb-4">
          <Webhook className="h-4 w-4" />
          Integration
        </div>
        <h1 className="text-4xl font-bold mb-4">Webhooks</h1>
        <p className="text-lg text-white/50 max-w-2xl">
          Set up webhook endpoints to receive real-time events from Conductor
          and external services. Build reactive automation pipelines that
          respond to tool calls, plugin events, and system changes.
        </p>
      </div>
      <div className="prose prose-invert max-w-none">
        <h2 className="text-2xl font-semibold mt-12 mb-4">Overview</h2>
        <p className="text-white/60 leading-relaxed">
          Webhooks allow external services to notify Conductor of events, and
          allow Conductor to notify external services about tool executions,
          plugin state changes, and system events.
        </p>
        <h2 className="text-2xl font-semibold mt-12 mb-4">Event Types</h2>
        <CodeBlock
          code={`// Available webhook events
const EVENTS = {
  'tool.call':       // A tool was called
  'tool.complete',   // A tool call completed
  'tool.error',      // A tool call failed
  'plugin.enable',   // A plugin was enabled
  'plugin.disable',  // A plugin was disabled
  'plugin.init',     // A plugin was initialized
  'config.change',   // Configuration was modified
  'health.degraded', // System health degraded
  'audit.entry',     // New audit log entry
}`}
          language="typescript"
          filename="events.ts"
        />
        <h2 className="text-2xl font-semibold mt-12 mb-4">
          Configuring Webhooks
        </h2>
        <CodeBlock
          code={`# Add a webhook endpoint
conductor webhooks add https://example.com/hook \
  --events tool.call,tool.complete,tool.error

# List all webhooks
conductor webhooks list

# Test a webhook
conductor webhooks test <webhook-id>

# Remove a webhook
conductor webhooks remove <webhook-id>`}
          language="bash"
          filename="Terminal"
        />
        <h2 className="text-2xl font-semibold mt-12 mb-4">Webhook Payload</h2>
        <CodeBlock
          code={`{
  "id": "evt_1a2b3c4d",
  "type": "tool.complete",
  "timestamp": "2026-04-04T12:00:00Z",
  "data": {
    "tool": "shell",
    "action": "execute",
    "status": "success",
    "duration_ms": 245,
    "result": { "output": "done" }
  },
  "signature": "sha256=abc123..."
}`}
          language="json"
          filename="webhook-payload.json"
        />
        <h2 className="text-2xl font-semibold mt-12 mb-4">
          Signature Verification
        </h2>
        <p className="text-white/60 leading-relaxed">
          All webhook payloads are signed with HMAC-SHA256. Verify the signature
          using the secret provided when the webhook was created.
        </p>
        <CodeBlock
          code={`// Verify webhook signature
const crypto = require('crypto');

function verifyWebhook(payload, signature, secret) {
  const expected = crypto
    .createHmac('sha256', secret)
    .update(payload)
    .digest('hex');
  
  return crypto.timingSafeEqual(
    Buffer.from(signature),
    Buffer.from(\`sha256=\${expected}\`)
  );
}`}
          language="javascript"
          filename="verify.js"
        />
        <h2 className="text-2xl font-semibold mt-12 mb-4">Event Filtering</h2>
        <p className="text-white/60 leading-relaxed">
          You can filter which events are sent to each webhook endpoint using
          the --events flag or by configuring filters in the webhook config.
        </p>
        <CodeBlock
          code={`# Only receive error events
conductor webhooks add https://example.com/errors \
  --events tool.error,health.degraded

# Receive all events
conductor webhooks add https://example.com/all \
  --events '*'`}
          language="bash"
          filename="Terminal"
        />
        <h2 className="text-2xl font-semibold mt-12 mb-4">Retry Policy</h2>
        <p className="text-white/60 leading-relaxed">
          Failed webhook deliveries are retried with exponential backoff. After
          5 failed attempts, the webhook is automatically disabled.
        </p>
        <CodeBlock
          code={`{
  "webhookRetry": {
    "maxAttempts": 5,
    "baseDelay": 1000,
    "maxDelay": 300000,
    "jitter": true
  }
}`}
          language="json"
          filename="webhook-retry.json"
        />
      </div>
    </div>
  );
}
