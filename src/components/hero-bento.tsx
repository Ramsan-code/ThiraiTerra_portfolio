"use client";

import { Search, SlidersHorizontal, ArrowRight, Play, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { useSpotlight } from "@/hooks/use-spotlight";

export function HeroBento() {
  const spotlight = useSpotlight();

  return (
    <section className="container mx-auto px-6 py-12">
      <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-6">
        {/* Search Tile - Large */}
        <div 
          className="md:col-span-3 lg:col-span-4 bg-secondary/30 border border-white/5 rounded-3xl p-8 flex flex-col justify-between spotlight group transition-all duration-500 hover:border-accent/20"
          style={spotlight.style}
          onMouseMove={spotlight.onMouseMove}
          onMouseEnter={spotlight.onMouseEnter}
          onMouseLeave={spotlight.onMouseLeave}
        >

          <div>
            <Badge className="bg-accent/10 text-accent border-accent/20 mb-6 px-3 py-1">
              Verified Meritocracy
            </Badge>
            <h1 className="text-display-lg mb-6 leading-none">
              HIRE THE BEST <span className="text-accent underline decoration-accent/30 underline-offset-8">CREDENTIALS</span> IN CINEMA
            </h1>
            <p className="text-body-reg text-muted-foreground max-w-lg mb-8">
              A premium marketplace connecting verified artists, technicians, and investors through professional discovery and secure infrastructure.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1 group/search">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground group-focus-within/search:text-accent transition-colors" />
              <Input 
                placeholder="Search by role, gear, or credits..." 
                className="h-14 pl-12 bg-background/50 border-white/10 rounded-2xl focus-visible:ring-accent/50 focus-visible:border-accent/50 transition-all"
              />
              <div className="absolute right-3 top-1/2 -translate-y-1/2 flex gap-2">
                <kbd className="hidden sm:inline-flex h-6 select-none items-center gap-1 rounded border border-white/10 bg-white/5 px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
                  <span className="text-xs">⌘</span>K
                </kbd>
              </div>
            </div>
            <Button className="h-14 px-8 bg-accent hover:bg-accent/90 text-white rounded-2xl font-bold gap-2 shadow-xl shadow-accent/20">
              Find Talent
              <ArrowRight className="w-5 h-5" />
            </Button>
          </div>
        </div>

        {/* Featured Talent Tile - Mini Card */}
        <div className="md:col-span-1 lg:col-span-2 bg-gradient-to-br from-golden/20 to-secondary/50 border border-white/10 rounded-3xl p-6 relative overflow-hidden group">
          <div className="relative z-10 flex flex-col h-full justify-between">
            <div className="flex justify-between items-start">
              <div className="w-16 h-16 rounded-2xl overflow-hidden border-2 border-accent shadow-xl bg-background">
                <img 
                  src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=200&h=200&auto=format&fit=crop" 
                  alt="Talent" 
                  className="w-full h-full object-cover"
                />
              </div>
              <Badge className="bg-status-mint text-white px-2 py-0.5">Live</Badge>
            </div>
            
            <div className="mt-4">
              <div className="flex items-center gap-1.5 text-status-mint mb-1">
                <CheckCircle2 className="w-4 h-4" />
                <span className="text-[10px] font-bold uppercase tracking-widest">Top Rated Pro</span>
              </div>
              <h3 className="text-headline-lg !text-2xl">Arjun Reddy</h3>
              <p className="text-label-sm text-muted-foreground">Lead Colorist • 12 Projects</p>
            </div>

            <Button variant="outline" className="mt-6 w-full border-white/10 bg-white/5 backdrop-blur-md rounded-xl hover:bg-accent hover:text-white transition-all">
              Request Availability
            </Button>
          </div>
          <Play className="absolute bottom-24 right-4 w-12 h-12 text-white/10 group-hover:text-accent/30 transition-all duration-700 -rotate-12 group-hover:rotate-0 group-hover:scale-150" />
        </div>

        {/* Statistics Tile */}
        <div className="hidden lg:block lg:col-span-2 bg-secondary/20 border border-white/5 rounded-3xl p-6 hover:bg-secondary/40 transition-colors">
          <h4 className="text-label-sm text-muted-foreground uppercase tracking-widest mb-4">Market Stats</h4>
          <div className="space-y-6">
            <div>
              <div className="flex justify-between items-end mb-2">
                <span className="text-display-lg !text-3xl">4.2k</span>
                <span className="text-status-mint text-[10px] font-bold">+12%</span>
              </div>
              <p className="text-xs text-muted-foreground">Verified Professionals</p>
              <div className="w-full h-1 bg-white/5 rounded-full mt-2 overflow-hidden">
                <div className="h-full bg-accent w-[85%] rounded-full shadow-[0_0_8px_rgba(216,138,74,0.5)]" />
              </div>
            </div>
            <div>
              <div className="flex justify-between items-end mb-2">
                <span className="text-display-lg !text-3xl">$12M+</span>
                <span className="text-status-mint text-[10px] font-bold">Secure</span>
              </div>
              <p className="text-xs text-muted-foreground">Total Budget Under Management</p>
              <div className="w-full h-1 bg-white/5 rounded-full mt-2 overflow-hidden">
                <div className="h-full bg-status-mint w-[65%] rounded-full" />
              </div>
            </div>
          </div>
        </div>

        {/* Categories Tile */}
        <div className="md:col-span-2 lg:col-span-4 bg-secondary/50 border border-white/5 rounded-3xl p-6 flex flex-col justify-between group">
           <div className="flex justify-between items-center mb-6">
             <h4 className="text-headline-lg !text-xl">Fast Track Discovery</h4>
             <Button variant="ghost" size="sm" className="text-accent gap-1 text-xs">
               View All <ArrowRight className="w-3 h-3" />
             </Button>
           </div>
           
           <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
             {["Artists", "Directors", "Technicians", "Investors", "Producers", "Equipments", "Locations", "VFX"].map((cat) => (
               <div key={cat} className="bg-background/40 border border-white/5 p-3 rounded-2xl text-center hover:bg-accent/10 hover:border-accent/30 transition-all cursor-pointer group/cat">
                 <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground group-hover/cat:text-accent">{cat}</span>
               </div>
             ))}
           </div>
        </div>
      </div>
    </section>
  );
}
