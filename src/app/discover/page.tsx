"use client";

import { Navbar } from "@/components/navbar";
import { DiscoveryGrid } from "@/components/discovery-grid";
import { SlidersHorizontal, Search, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

export default function DiscoverPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="container mx-auto px-6 py-12">
        <div className="flex flex-col gap-8 mb-12">
          <div>
            <h1 className="text-display-lg mb-2">DISCOVER <span className="text-accent underline decoration-accent/20 underline-offset-8">TALENT</span></h1>
            <p className="text-label-sm text-muted-foreground uppercase tracking-[0.2em]">Verified Credentials & Showreels</p>
          </div>

          <div className="flex flex-col lg:flex-row gap-4 items-center">
            <div className="relative flex-1 group w-full">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground group-focus-within:text-accent transition-colors" />
              <Input 
                placeholder="Search by role, equipment (Arri, Alexa), or specific skill..." 
                className="h-14 pl-12 bg-secondary/30 border-white/5 rounded-2xl focus-visible:ring-accent/50 focus-visible:border-accent/50"
              />
            </div>
            <div className="flex gap-3 w-full lg:w-auto">
               <Button variant="outline" className="h-14 px-8 border-white/10 bg-white/5 rounded-2xl gap-2 font-bold uppercase tracking-widest text-[10px] flex-1 lg:flex-initial">
                 <SlidersHorizontal className="w-4 h-4" />
                 All Filters
               </Button>
               <Button className="h-14 px-8 bg-accent text-white rounded-2xl font-bold uppercase tracking-widest text-[10px] flex-1 lg:flex-initial shadow-lg shadow-accent/20">
                 Apply Search
               </Button>
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
             <span className="text-xs text-muted-foreground self-center mr-2">Active Filters:</span>
             <Badge className="bg-accent/10 text-accent border-accent/20 px-3 py-1 flex items-center gap-2">
               Verified Only <X className="w-3 h-3 cursor-pointer" />
             </Badge>
             <Badge className="bg-white/5 text-gray-400 border-white/10 px-3 py-1 flex items-center gap-2">
               Mumbai <X className="w-3 h-3 cursor-pointer" />
             </Badge>
             <Badge className="bg-white/5 text-gray-400 border-white/10 px-3 py-1 flex items-center gap-2">
               Cinematographer <X className="w-3 h-3 cursor-pointer" />
             </Badge>
             <Button variant="ghost" className="text-[10px] h-auto p-0 text-muted-foreground hover:text-white uppercase tracking-widest ml-2">Clear All</Button>
          </div>
        </div>

        <div className="bg-secondary/10 border border-white/5 rounded-3xl p-8 backdrop-blur-sm">
           <DiscoveryGrid />
        </div>
      </main>
    </div>
  );
}
