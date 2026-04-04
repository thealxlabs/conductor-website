import { CodeBlock } from "@/components/code-block";
import {
  ArrowLeftRight,
  ArrowRight,
  Settings,
  Server,
  Shield,
} from "lucide-react";

export default function MigrationPage() {
  return (
    <div>
      <div className="mb-12">
        <div className="flex items-center gap-2 text-sm text-[#ff6b2b] mb-4">
          <ArrowLeftRight className="h-4 w-4" />
          Resources
        </div>
        <h1 className="text-4xl font-bold mb-4">Migration</h1>
        <p className="text-lg text-white/50 max-w-2xl">
          Migration guides for upgrading between Conductor versions.
        </p>
      </div>
      <div className="prose prose-invert max-w-none">
        <h2 className="text-2xl font-semibold mt-12 mb-4">v1.x to v2.0</h2>
        <p className="text-white/60 leading-relaxed">
          Version 2.0 introduces breaking changes to the plugin interface and
          configuration format. Follow these steps to migrate:
        </p>
        <CodeBlock
          code={`# 1. Backup your config
cp ~/.conductor/config.json ~/.conductor/config.json.bak

# 2. Update Conductor
npm update -g @thealxlabs/conductor

# 3. Run migration
conductor migrate

# 4. Verify migration
conductor doctor

# 5. Re-enter secrets (encryption key may change)
conductor config setup github
conductor config setup slack`}
          language="bash"
          filename="migration.sh"
        />
        <h3 className="text-xl font-semibold mt-8 mb-3">Breaking Changes</h3>
        <div className="space-y-3">
          {[
            "Plugin interface: initialize() now receives Conductor instance",
            "Config format: plugin configs moved under plugins.<name> namespace",
            "Secret storage: migrated from file-based to OS keychain",
            "MCP protocol: updated to 2024-11-05 spec",
          ].map((change) => (
            <div
              key={change}
              className="flex items-start gap-2 text-sm text-white/50"
            >
              <span className="text-[#ff6b2b] mt-0.5">-</span>
              {change}
            </div>
          ))}
        </div>
        <h2 className="text-2xl font-semibold mt-12 mb-4">v0.x to v1.0</h2>
        <p className="text-white/60 leading-relaxed">
          The first stable release introduced the plugin system and MCP server.
          Migration requires a fresh install:
        </p>
        <CodeBlock
          code={`# 1. Uninstall old version
npm uninstall -g conductor

# 2. Remove old config
rm -rf ~/.conductor

# 3. Install new version
npm install -g @thealxlabs/conductor

# 4. Initialize
conductor init

# 5. Reconfigure plugins
conductor plugins enable shell
conductor plugins enable filesystem`}
          language="bash"
          filename="migration-v1.sh"
        />
      </div>
    </div>
  );
}
