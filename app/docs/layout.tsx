import { DocsSidebar } from "@/components/docs-sidebar";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[#050505] text-white">
      <Navbar />
      <div className="flex pt-16">
        <DocsSidebar />
        <main className="flex-1 min-w-0">
          <div className="max-w-4xl mx-auto px-8 py-12">{children}</div>
        </main>
      </div>
      <Footer />
    </div>
  );
}
