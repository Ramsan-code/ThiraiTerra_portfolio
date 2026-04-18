"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";


export function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-white/10 bg-background/80 backdrop-blur-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-6">
        <div className="flex items-center gap-10">
          <Link href="/" className="flex items-center gap-2 group">
            <span className="text-display-section !text-xl tracking-[-0.03em] text-white">
              THIRAI<span className="text-white/40 italic">TERRA</span>
            </span>
          </Link>
          
          <div className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-label-stats text-[10px] text-white/60 hover:text-white transition-colors">Venture</Link>
            <Link href="/discover" className="text-label-stats text-[10px] text-white/60 hover:text-white transition-colors">Discovery</Link>
            <Link href="/investors" className="text-label-stats text-[10px] text-white/60 hover:text-white transition-colors">Investors</Link>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <Link href="/investors">
            <Button variant="outline" className="h-9 px-5 border-white/10 bg-white/5 text-[9px] font-bold uppercase tracking-widest rounded-full hover:bg-white/10">
              Partner Access
            </Button>
          </Link>
        </div>


      </div>
    </nav>
  );
}
