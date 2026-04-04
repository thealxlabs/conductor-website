"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface MagneticDockProps {
  children: React.ReactNode;
  className?: string;
  items: Array<{
    icon: React.ReactNode;
    label: string;
    href?: string;
    onClick?: () => void;
  }>;
}

export function MagneticDock({
  children,
  className,
  items,
}: MagneticDockProps) {
  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.5, duration: 0.5, ease: "easeOut" }}
      className={cn(
        "fixed bottom-6 left-1/2 -translate-x-1/2 z-50",
        "bg-[#111]/80 backdrop-blur-xl border border-white/10 rounded-2xl px-4 py-3",
        "shadow-2xl shadow-black/50",
        className,
      )}
    >
      <div className="flex items-center gap-2">
        {items.map((item, i) => (
          <motion.a
            key={item.label}
            href={item.href}
            onClick={item.onClick}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.6 + i * 0.05 }}
            whileHover={{ scale: 1.2, y: -4 }}
            className="flex flex-col items-center gap-1 px-3 py-2 rounded-xl hover:bg-white/5 transition-colors cursor-pointer"
          >
            <span className="text-white/70">{item.icon}</span>
            <span className="text-[10px] text-white/50 whitespace-nowrap">
              {item.label}
            </span>
          </motion.a>
        ))}
      </div>
    </motion.div>
  );
}
