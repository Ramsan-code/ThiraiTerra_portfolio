"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";


export function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-white/10 bg-background/80 backdrop-blur-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-6">
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="relative h-10 w-40 flex items-center">
              <Image
                src=""
                alt="ThiraiTerra Logo"
                width={160}
                height={40}
                className="object-contain transition-all duration-500 group-hover:scale-105 brightness-0 invert"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
              <span className="text-display-lg !text-2xl tracking-tighter text-accent group-hover:text-white transition-colors">
                THIRAI<span className="text-white">TERRA</span>
              </span>
            </div>
          </Link>
        </div>


        <div className="flex items-center gap-4">
        </div>


      </div>
    </nav>
  );
}
