"use client";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import { BorderBeam } from "@/components/ui/border-beam";
import { NoiseTexture } from "@/components/ui/noise-texture";
import {
  Search,
  Terminal,
  GitBranch,
  Globe,
  Database,
  Cloud,
  MessageSquare,
  Bot,
  Clock,
  Bell,
  BarChart3,
  Shield,
  FileSearch,
  Settings,
  Download,
  Star,
  Filter,
  Grid3X3,
  List,
  ArrowRight,
  CheckCircle2,
  Package,
  Code2,
  Layers,
  Server,
  Webhook,
  Cpu,
  KeyRound,
  Eye,
  Activity,
  Zap,
  Lock,
  FolderTree,
  Mail,
  Phone,
  Video,
  Calendar,
  CreditCard,
  MapPin,
  Image,
  Music,
  FileType,
  Archive,
  Rss,
  Atom,
  Hash,
  Percent,
} from "lucide-react";
import { useState } from "react";
import Link from "next/link";

const allPlugins = [
  {
    icon: Terminal,
    name: "Shell",
    desc: "Execute shell commands with approval gates and allowlists",
    category: "Core",
    downloads: 12400,
    rating: 4.9,
  },
  {
    icon: FileSearch,
    name: "Filesystem",
    desc: "Read, write, search, and manage files and directories",
    category: "Core",
    downloads: 11800,
    rating: 4.8,
  },
  {
    icon: GitBranch,
    name: "Git",
    desc: "Repository operations, diffs, branches, and commits",
    category: "Development",
    downloads: 10200,
    rating: 4.9,
  },
  {
    icon: Globe,
    name: "Web Search",
    desc: "Search the web with multiple providers",
    category: "Data",
    downloads: 9800,
    rating: 4.7,
  },
  {
    icon: Database,
    name: "SQLite",
    desc: "SQL database queries and management",
    category: "Data",
    downloads: 8500,
    rating: 4.8,
  },
  {
    icon: Cloud,
    name: "AWS",
    desc: "EC2, S3, Lambda, and 50+ AWS services",
    category: "Cloud",
    downloads: 7200,
    rating: 4.6,
  },
  {
    icon: MessageSquare,
    name: "Slack",
    desc: "Send messages, read channels, manage workspaces",
    category: "Communication",
    downloads: 6800,
    rating: 4.7,
  },
  {
    icon: Bot,
    name: "Telegram",
    desc: "Bot management and message handling",
    category: "Communication",
    downloads: 5400,
    rating: 4.5,
  },
  {
    icon: Clock,
    name: "Cron",
    desc: "Scheduled tasks and recurring jobs",
    category: "Automation",
    downloads: 4900,
    rating: 4.6,
  },
  {
    icon: Bell,
    name: "Notifications",
    desc: "Push, email, and in-app notifications",
    category: "Communication",
    downloads: 4200,
    rating: 4.4,
  },
  {
    icon: BarChart3,
    name: "Analytics",
    desc: "Metrics, dashboards, and reporting",
    category: "Data",
    downloads: 3800,
    rating: 4.5,
  },
  {
    icon: Shield,
    name: "Security",
    desc: "Security scanning and vulnerability detection",
    category: "Security",
    downloads: 3500,
    rating: 4.8,
  },
  {
    icon: Settings,
    name: "Jira",
    desc: "Issue tracking, sprints, and project management",
    category: "Development",
    downloads: 3200,
    rating: 4.5,
  },
  {
    icon: Code2,
    name: "GitHub",
    desc: "Issues, PRs, repos, and GitHub Actions",
    category: "Development",
    downloads: 11500,
    rating: 4.9,
  },
  {
    icon: Layers,
    name: "Docker",
    desc: "Container management, images, and compose",
    category: "Development",
    downloads: 6100,
    rating: 4.7,
  },
  {
    icon: Server,
    name: "Kubernetes",
    desc: "Cluster management, pods, and deployments",
    category: "Cloud",
    downloads: 4800,
    rating: 4.6,
  },
  {
    icon: Webhook,
    name: "Webhooks",
    desc: "Custom webhook endpoints and event routing",
    category: "Automation",
    downloads: 3100,
    rating: 4.4,
  },
  {
    icon: Cpu,
    name: "Terraform",
    desc: "Infrastructure as code management",
    category: "Cloud",
    downloads: 2900,
    rating: 4.5,
  },
  {
    icon: KeyRound,
    name: "Vault",
    desc: "Secret management and rotation",
    category: "Security",
    downloads: 2600,
    rating: 4.7,
  },
  {
    icon: Eye,
    name: "Datadog",
    desc: "Monitoring, APM, and log management",
    category: "Data",
    downloads: 2400,
    rating: 4.5,
  },
  {
    icon: Activity,
    name: "Grafana",
    desc: "Dashboards and alerting",
    category: "Data",
    downloads: 2100,
    rating: 4.4,
  },
  {
    icon: Zap,
    name: "Vercel",
    desc: "Deployments, domains, and serverless functions",
    category: "Cloud",
    downloads: 3600,
    rating: 4.6,
  },
  {
    icon: Lock,
    name: "Auth0",
    desc: "Authentication and user management",
    category: "Security",
    downloads: 1800,
    rating: 4.5,
  },
  {
    icon: FolderTree,
    name: "Notion",
    desc: "Pages, databases, and workspace management",
    category: "Data",
    downloads: 4100,
    rating: 4.6,
  },
  {
    icon: Mail,
    name: "Email",
    desc: "Send and receive emails via SMTP/IMAP",
    category: "Communication",
    downloads: 3700,
    rating: 4.3,
  },
  {
    icon: Phone,
    name: "Twilio",
    desc: "SMS, voice, and WhatsApp messaging",
    category: "Communication",
    downloads: 2200,
    rating: 4.5,
  },
  {
    icon: Video,
    name: "Zoom",
    desc: "Meeting management and recordings",
    category: "Communication",
    downloads: 1500,
    rating: 4.2,
  },
  {
    icon: Calendar,
    name: "Google Calendar",
    desc: "Event management and scheduling",
    category: "Automation",
    downloads: 2800,
    rating: 4.4,
  },
  {
    icon: CreditCard,
    name: "Stripe",
    desc: "Payments, subscriptions, and invoices",
    category: "Data",
    downloads: 2500,
    rating: 4.7,
  },
  {
    icon: MapPin,
    name: "Google Maps",
    desc: "Geocoding, directions, and places",
    category: "Data",
    downloads: 1900,
    rating: 4.3,
  },
  {
    icon: Image,
    name: "Cloudinary",
    desc: "Image and video management",
    category: "Data",
    downloads: 1400,
    rating: 4.4,
  },
  {
    icon: Music,
    name: "Spotify",
    desc: "Playback control and playlist management",
    category: "Entertainment",
    downloads: 2700,
    rating: 4.2,
  },
  {
    icon: FileType,
    name: "Linear",
    desc: "Issue tracking and project management",
    category: "Development",
    downloads: 2300,
    rating: 4.6,
  },
  {
    icon: Archive,
    name: "Redis",
    desc: "Cache, pub/sub, and data structures",
    category: "Data",
    downloads: 3300,
    rating: 4.7,
  },
  {
    icon: Rss,
    name: "RSS",
    desc: "Feed parsing and aggregation",
    category: "Data",
    downloads: 1100,
    rating: 4.1,
  },
  {
    icon: Hash,
    name: "Discord",
    desc: "Server management and messaging",
    category: "Communication",
    downloads: 4500,
    rating: 4.5,
  },
  {
    icon: Percent,
    name: "GCP",
    desc: "Google Cloud Platform services",
    category: "Cloud",
    downloads: 2800,
    rating: 4.4,
  },
  {
    icon: Terminal,
    name: "Azure",
    desc: "Microsoft Azure cloud services",
    category: "Cloud",
    downloads: 2400,
    rating: 4.3,
  },
  {
    icon: Globe,
    name: "Cloudflare",
    desc: "DNS, CDN, Workers, and R2 storage",
    category: "Cloud",
    downloads: 2100,
    rating: 4.5,
  },
  {
    icon: Database,
    name: "PostgreSQL",
    desc: "Advanced SQL queries and migrations",
    category: "Data",
    downloads: 5200,
    rating: 4.8,
  },
  {
    icon: GitBranch,
    name: "GitLab",
    desc: "CI/CD, issues, and merge requests",
    category: "Development",
    downloads: 3100,
    rating: 4.5,
  },
  {
    icon: Cloud,
    name: "DigitalOcean",
    desc: "Droplets, databases, and networking",
    category: "Cloud",
    downloads: 1600,
    rating: 4.3,
  },
  {
    icon: Server,
    name: "Netlify",
    desc: "Site deployments and serverless functions",
    category: "Cloud",
    downloads: 1800,
    rating: 4.4,
  },
  {
    icon: Code2,
    name: "Heroku",
    desc: "App deployments and add-ons",
    category: "Cloud",
    downloads: 1200,
    rating: 4.2,
  },
  {
    icon: Layers,
    name: "Railway",
    desc: "Infrastructure and deployments",
    category: "Cloud",
    downloads: 1400,
    rating: 4.3,
  },
  {
    icon: Zap,
    name: "Fly.io",
    desc: "Edge deployments and databases",
    category: "Cloud",
    downloads: 1100,
    rating: 4.2,
  },
  {
    icon: Lock,
    name: "Supabase",
    desc: "Database, auth, and storage",
    category: "Cloud",
    downloads: 2600,
    rating: 4.6,
  },
  {
    icon: FolderTree,
    name: "Neon",
    desc: "Serverless PostgreSQL",
    category: "Cloud",
    downloads: 900,
    rating: 4.4,
  },
  {
    icon: Mail,
    name: "Teams",
    desc: "Microsoft Teams messaging",
    category: "Communication",
    downloads: 2000,
    rating: 4.2,
  },
  {
    icon: Phone,
    name: "WhatsApp",
    desc: "Business messaging API",
    category: "Communication",
    downloads: 1700,
    rating: 4.1,
  },
  {
    icon: Video,
    name: "Signal",
    desc: "Encrypted messaging",
    category: "Communication",
    downloads: 800,
    rating: 4.5,
  },
  {
    icon: Calendar,
    name: "Zapier",
    desc: "Automation workflows",
    category: "Automation",
    downloads: 2200,
    rating: 4.3,
  },
  {
    icon: CreditCard,
    name: "Make",
    desc: "Visual automation platform",
    category: "Automation",
    downloads: 1500,
    rating: 4.2,
  },
  {
    icon: MapPin,
    name: "n8n",
    desc: "Workflow automation",
    category: "Automation",
    downloads: 1800,
    rating: 4.4,
  },
  {
    icon: Image,
    name: "GitHub Actions",
    desc: "CI/CD workflow management",
    category: "Automation",
    downloads: 4200,
    rating: 4.7,
  },
  {
    icon: Music,
    name: "MongoDB",
    desc: "NoSQL database operations",
    category: "Data",
    downloads: 3400,
    rating: 4.5,
  },
  {
    icon: FileType,
    name: "Elasticsearch",
    desc: "Full-text search and analytics",
    category: "Data",
    downloads: 2100,
    rating: 4.4,
  },
  {
    icon: Archive,
    name: "BigQuery",
    desc: "Data warehouse queries",
    category: "Data",
    downloads: 1600,
    rating: 4.3,
  },
  {
    icon: Rss,
    name: "Snowflake",
    desc: "Cloud data platform",
    category: "Data",
    downloads: 1300,
    rating: 4.4,
  },
  {
    icon: Hash,
    name: "Databricks",
    desc: "Data engineering and ML",
    category: "Data",
    downloads: 1100,
    rating: 4.3,
  },
  {
    icon: Percent,
    name: "Airtable",
    desc: "Spreadsheet-database hybrid",
    category: "Data",
    downloads: 2400,
    rating: 4.5,
  },
];

const categories = [
  "All",
  "Core",
  "Development",
  "Cloud",
  "Data",
  "Communication",
  "Automation",
  "Security",
  "Entertainment",
];

export default function MarketplacePage() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const filtered = allPlugins.filter((p) => {
    const matchesSearch =
      p.name.toLowerCase().includes(search.toLowerCase()) ||
      p.desc.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = category === "All" || p.category === category;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-[#050505] text-white">
      <Navbar />
      <div className="pt-16">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="mb-12">
            <h1 className="text-4xl font-bold mb-4">Plugin Marketplace</h1>
            <p className="text-lg text-white/50 max-w-2xl">
              Browse and discover plugins for every use case. All built-in
              plugins are free and open source.
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-white/30" />
              <input
                type="text"
                placeholder="Search plugins..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 bg-[#0a0a0a] border border-white/10 rounded-xl text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-[#ff6b2b]/30 transition-colors"
              />
            </div>
            <div className="flex gap-2 overflow-x-auto pb-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setCategory(cat)}
                  className={`px-3 py-2 text-xs rounded-lg whitespace-nowrap transition-colors ${
                    category === cat
                      ? "bg-[#ff6b2b] text-white"
                      : "bg-[#0a0a0a] text-white/50 border border-white/10 hover:text-white/70"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {filtered.map((plugin) => (
              <SpotlightCard key={plugin.name} className="p-5">
                <div className="flex items-start justify-between mb-3">
                  <div className="w-10 h-10 rounded-lg bg-[#ff6b2b]/10 flex items-center justify-center">
                    <plugin.icon className="h-5 w-5 text-[#ff6b2b]" />
                  </div>
                  <span className="text-xs text-white/20 px-2 py-0.5 rounded-full bg-white/5">
                    {plugin.category}
                  </span>
                </div>
                <h3 className="text-sm font-semibold mb-1">{plugin.name}</h3>
                <p className="text-xs text-white/35 leading-relaxed mb-3">
                  {plugin.desc}
                </p>
                <div className="flex items-center justify-between text-xs text-white/25">
                  <div className="flex items-center gap-1">
                    <Download className="h-3 w-3" />
                    {(plugin.downloads / 1000).toFixed(1)}k
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="h-3 w-3 text-yellow-500/60" />
                    {plugin.rating}
                  </div>
                </div>
              </SpotlightCard>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-16">
              <Search className="h-8 w-8 text-white/20 mx-auto mb-3" />
              <p className="text-white/40">
                No plugins found matching your search.
              </p>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}
