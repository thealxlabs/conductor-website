import { CodeBlock } from "@/components/code-block";
import {
  Shield,
  Lock,
  KeyRound,
  ShieldCheck,
  Eye,
  FileCheck,
  AlertTriangle,
  CheckCircle2,
  XCircle,
} from "lucide-react";

export default function SecurityPage() {
  return (
    <div>
      <div className="mb-12">
        <div className="flex items-center gap-2 text-sm text-[#ff6b2b] mb-4">
          <Shield className="h-4 w-4" />
          Integration
        </div>
        <h1 className="text-4xl font-bold mb-4">Security</h1>
        <p className="text-lg text-white/50 max-w-2xl">
          Conductor is built with security as a first-class concern. Every layer
          of the stack includes protections against misuse, data leaks, and
          unauthorized access.
        </p>
      </div>

      <div className="prose prose-invert max-w-none">
        <h2 className="text-2xl font-semibold mt-12 mb-4">
          Security Model Overview
        </h2>
        <p className="text-white/60 leading-relaxed">
          Conductor follows a defense-in-depth strategy with multiple layers of
          security controls. No single point of failure can compromise the
          system.
        </p>

        <div className="grid md:grid-cols-2 gap-4 my-8">
          <div className="p-5 rounded-xl border border-white/5 bg-[#0a0a0a]">
            <div className="flex items-center gap-2 mb-3">
              <Lock className="h-4 w-4 text-[#ff6b2b]" />
              <h3 className="text-sm font-semibold">Encryption at Rest</h3>
            </div>
            <p className="text-xs text-white/40 leading-relaxed">
              All secrets are encrypted with AES-256-GCM. The encryption key is
              derived from the machine ID and stored in the OS keychain.
            </p>
          </div>
          <div className="p-5 rounded-xl border border-white/5 bg-[#0a0a0a]">
            <div className="flex items-center gap-2 mb-3">
              <ShieldCheck className="h-4 w-4 text-[#ff6b2b]" />
              <h3 className="text-sm font-semibold">Approval Gates</h3>
            </div>
            <p className="text-xs text-white/40 leading-relaxed">
              Dangerous tools require explicit user approval before execution.
              The shell plugin uses a strict allowlist — no eval() or exec().
            </p>
          </div>
          <div className="p-5 rounded-xl border border-white/5 bg-[#0a0a0a]">
            <div className="flex items-center gap-2 mb-3">
              <Eye className="h-4 w-4 text-[#ff6b2b]" />
              <h3 className="text-sm font-semibold">Audit Logging</h3>
            </div>
            <p className="text-xs text-white/40 leading-relaxed">
              Tamper-evident audit chain with SHA-256 hashing. Every tool call
              is logged and chained to the previous entry.
            </p>
          </div>
          <div className="p-5 rounded-xl border border-white/5 bg-[#0a0a0a]">
            <div className="flex items-center gap-2 mb-3">
              <AlertTriangle className="h-4 w-4 text-[#ff6b2b]" />
              <h3 className="text-sm font-semibold">Circuit Breakers</h3>
            </div>
            <p className="text-xs text-white/40 leading-relaxed">
              Per-tool circuit breakers prevent cascading failures and protect
              against runaway tool calls.
            </p>
          </div>
        </div>

        <h2 className="text-2xl font-semibold mt-12 mb-4">Secret Management</h2>
        <p className="text-white/60 leading-relaxed">
          Secrets (API keys, tokens, passwords) are never stored in plain text.
          Conductor uses a multi-layered approach:
        </p>

        <CodeBlock
          code={`// Secret fields in config schema
{
  key: "api_key",
  label: "API Key", 
  type: "string",
  secret: true,  // Automatically encrypted
  required: true,
}

// Secrets are stored in:
// - OS Keychain (macOS Keychain, Windows Credential Manager, Linux libsecret)
// - Encrypted with AES-256-GCM
// - Key derived from machine-specific identifier`}
          language="json"
          filename="secret-config.json"
        />

        <h2 className="text-2xl font-semibold mt-12 mb-4">
          Shell Plugin Security
        </h2>
        <p className="text-white/60 leading-relaxed">
          The shell plugin is the most security-sensitive component. It uses a
          strict allowlist approach:
        </p>

        <div className="my-6">
          <div className="flex items-center gap-2 mb-3">
            <CheckCircle2 className="h-4 w-4 text-green-500" />
            <span className="text-sm text-green-500 font-medium">
              Allowed by default
            </span>
          </div>
          <div className="grid md:grid-cols-2 gap-2 mb-6">
            {[
              "ls",
              "cat",
              "grep",
              "find",
              "git",
              "npm",
              "node",
              "curl",
              "wget",
              "mkdir",
              "cp",
              "mv",
            ].map((cmd) => (
              <code
                key={cmd}
                className="text-xs px-2 py-1 rounded bg-green-500/10 text-green-500/80 font-mono"
              >
                {cmd}
              </code>
            ))}
          </div>

          <div className="flex items-center gap-2 mb-3">
            <XCircle className="h-4 w-4 text-red-500" />
            <span className="text-sm text-red-500 font-medium">
              Requires approval
            </span>
          </div>
          <div className="grid md:grid-cols-2 gap-2">
            {[
              "rm",
              "chmod",
              "chown",
              "sudo",
              "kill",
              "dd",
              "mkfs",
              "shutdown",
            ].map((cmd) => (
              <code
                key={cmd}
                className="text-xs px-2 py-1 rounded bg-red-500/10 text-red-500/80 font-mono"
              >
                {cmd}
              </code>
            ))}
          </div>
        </div>

        <h2 className="text-2xl font-semibold mt-12 mb-4">
          Audit Log Verification
        </h2>
        <p className="text-white/60 leading-relaxed">
          The audit log is a chained, append-only file. Each entry includes the
          SHA-256 hash of the previous entry, making tampering detectable.
        </p>

        <CodeBlock
          code={`// Verify audit log integrity
conductor audit verify

// Output:
// ✓ Audit log verified: 1,247 entries
// ✓ Chain integrity: VALID
// ✓ No tampering detected
// Last entry hash: a3f2b8c9...`}
          language="bash"
          filename="Terminal"
        />

        <h2 className="text-2xl font-semibold mt-12 mb-4">Rate Limiting</h2>
        <p className="text-white/60 leading-relaxed">
          All HTTP endpoints are protected by rate limiting to prevent abuse:
        </p>

        <CodeBlock
          code={`// Rate limiting configuration
{
  "rateLimit": {
    "windowMs": 60000,     // 1 minute window
    "maxRequests": 100,     // Max 100 requests per window
    "message": "Too many requests, please try again later"
  }
}`}
          language="json"
          filename="rate-limit.json"
        />

        <h2 className="text-2xl font-semibold mt-12 mb-4">
          Security Best Practices
        </h2>
        <ul className="space-y-3 text-white/60">
          <li className="flex items-start gap-2">
            <CheckCircle2 className="h-4 w-4 text-[#ff6b2b] mt-0.5 shrink-0" />{" "}
            Keep Conductor updated to the latest version
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle2 className="h-4 w-4 text-[#ff6b2b] mt-0.5 shrink-0" />{" "}
            Use the minimum set of plugins needed for your workflow
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle2 className="h-4 w-4 text-[#ff6b2b] mt-0.5 shrink-0" />{" "}
            Enable approval gates for all destructive operations
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle2 className="h-4 w-4 text-[#ff6b2b] mt-0.5 shrink-0" />{" "}
            Regularly review the audit log for unusual activity
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle2 className="h-4 w-4 text-[#ff6b2b] mt-0.5 shrink-0" />{" "}
            Rotate API keys and tokens periodically
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle2 className="h-4 w-4 text-[#ff6b2b] mt-0.5 shrink-0" />{" "}
            Never share your ~/.conductor/.key file
          </li>
        </ul>
      </div>
    </div>
  );
}
