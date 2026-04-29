import Link from "next/link";

import { ThemeToggle } from "@/components/theme-toggle";

export function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-foreground/10 bg-background/80 backdrop-blur-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-6">
        <div className="flex items-center gap-10">
          <Link href="/" className="flex items-center gap-2 group">
            <span className="text-display-section !text-xl tracking-[-0.03em] text-foreground">
              THIRAI<span className="text-foreground/40 italic">TERRA</span>
            </span>
          </Link>
          <div className="hidden md:flex items-center gap-6">
            <Link href="/blog" className="text-[11px] font-bold uppercase tracking-widest text-foreground/60 hover:text-foreground transition-colors">
              Blog
            </Link>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}
