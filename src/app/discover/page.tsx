"use client";

import { Navbar } from "@/components/navbar";
import { DiscoveryGrid } from "@/components/discovery-grid";
import { SlidersHorizontal, Search, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

export default function DiscoverPage() {
  return (
    <div className="min-h-screen bg-background selection:bg-white selection:text-black">
      <Navbar />
      
      <main className="container mx-auto px-6 py-12 lg:py-24">
        <div className="flex flex-col gap-12 mb-16">
          <div className="border-b border-white/5 pb-12">
            <h1 className="text-display-section !text-4xl mb-4 uppercase tracking-tight">DISCOVERY <span className="text-white/40 italic">PROTOCOL</span></h1>
            <p className="text-label-stats text-[10px] text-white/40 uppercase tracking-[0.3em]">Verified Infrastructure Talent & Global Showreels</p>
          </div>

          <div className="flex flex-col lg:flex-row gap-6 items-center">
            <div className="relative flex-1 group w-full">
              <Search className="absolute left-6 top-1/2 -translate-y-1/2 w-4 h-4 text-white/20 group-focus-within:text-white transition-colors" />
              <Input 
                placeholder="Search by protocol, ecosystem, or verified credential..." 
                className="h-16 pl-14 bg-white/5 border-white/5 rounded-xl focus-visible:ring-1 focus-visible:ring-white/10 focus-visible:border-white/10 text-xs font-medium"
              />
            </div>
            <div className="flex gap-4 w-full lg:w-auto">
               <Button variant="outline" className="h-16 px-10 border-white/10 bg-white/5 rounded-xl gap-3 text-label-stats text-[10px] font-bold flex-1 lg:flex-initial hover:bg-white/10 transition-all">
                 <SlidersHorizontal className="w-4 h-4" />
                 Protocols
               </Button>
               <Button className="h-16 px-10 bg-white !text-black rounded-xl text-label-stats text-[10px] font-bold flex-1 lg:flex-initial shadow-lg shadow-white/5 hover:scale-105 transition-all">
                 Apply Logic
               </Button>
            </div>
          </div>

          <div className="flex flex-wrap gap-3">
             <span className="text-label-stats text-[9px] text-white/20 self-center mr-4 uppercase tracking-[0.2em]">Active Filters</span>
             {[
               "Verified Only", "Infrastructure", "Global Access"
             ].map((filter, i) => (
               <Badge key={i} className="bg-white/5 text-white/60 border-white/10 px-4 py-2 flex items-center gap-3 rounded-full hover:border-white/30 transition-all cursor-pointer">
                 {filter} <X className="w-3 h-3 text-white/20" />
               </Badge>
             ))}
             <Button variant="ghost" className="text-label-stats text-[9px] h-auto p-0 text-white/20 hover:text-white uppercase tracking-widest ml-4 transition-colors">Reset Architecture</Button>
          </div>
        </div>

        <div className="bg-secondary/20 border border-white/5 rounded-[24px] p-1 blueprint overflow-hidden">
           <div className="bg-background/80 backdrop-blur-3xl rounded-[22px] p-8 lg:p-12">
              <DiscoveryGrid />
           </div>
        </div>
      </main>
    </div>
  );
}
