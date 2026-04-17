"use client";

import { Navbar } from "@/components/navbar";
import { 
  Clapperboard, 
  Users, 
  Calendar, 
  ShieldCheck, 
  ArrowLeft,
  Share2,
  Heart,
  ExternalLink,
  PlayCircle,
  Lock
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Image from "next/image";
import Link from "next/link";

export default function ProjectShowcase() {

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="container mx-auto px-6 py-12">
        <Link href="/" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-muted-foreground hover:text-accent mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4" />
          Back to Discovery
        </Link>

        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
          <div className="lg:col-span-8 space-y-8">
            <div className="relative aspect-video rounded-3xl overflow-hidden border border-white/5 group bg-secondary/20">
              <Image 
                src="https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=1200&h=675&auto=format&fit=crop" 
                alt="Project Mood"
                fill
                className="object-cover grayscale-[0.3] group-hover:grayscale-0 transition-all duration-1000"
              />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-background/40 backdrop-blur-sm cursor-pointer">
                <div className="w-20 h-20 rounded-full bg-accent flex items-center justify-center shadow-2xl shadow-accent/50 scale-90 group-hover:scale-100 transition-transform">
                  <PlayCircle className="w-10 h-10 text-white fill-current" />
                </div>
              </div>
              <div className="absolute top-6 left-6 flex gap-3">
                <Badge className="bg-accent text-white px-3 py-1 font-bold">Featured Pitch</Badge>
                <Badge className="bg-background/80 backdrop-blur-md border-white/10 text-white px-3 py-1 font-bold">Concept</Badge>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
               {["Psychological Thriller", "English", "Pre-Production", "VFX Focus"].map(tag => (
                 <Badge key={tag} variant="outline" className="border-white/10 bg-white/5 px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest text-gray-400">
                   {tag}
                 </Badge>
               ))}
            </div>
          </div>

          <div className="lg:col-span-4 space-y-8">
            <div>
              <h1 className="text-display-lg leading-tight mb-4">NEON <span className="text-accent">DISTRICT</span></h1>
              <p className="text-title-md text-muted-foreground mb-6">In a world where memories are currency, one technician discovers a corrupted file that could collapse the economy.</p>
              
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-secondary/30 p-4 rounded-2xl border border-white/5">
                  <p className="text-[10px] uppercase font-bold text-muted-foreground mb-1">Director</p>
                  <p className="text-xs font-bold text-white flex items-center gap-1.5">
                    Ramsan <ShieldCheck className="w-3 h-3 text-status-mint" />
                  </p>
                </div>
                <div className="bg-secondary/30 p-4 rounded-2xl border border-white/5">
                  <p className="text-[10px] uppercase font-bold text-muted-foreground mb-1">Timeline</p>
                  <p className="text-xs font-bold text-white">Fall 2026</p>
                </div>
              </div>

               <div className="flex gap-3">
                 <Button className="flex-1 bg-accent hover:bg-accent/90 text-white h-12 rounded-xl font-bold uppercase tracking-widest shadow-xl shadow-accent/20">
                   Contact for Rights
                 </Button>
                 <Button variant="outline" size="icon" className="h-12 w-12 border-white/10 bg-white/5 rounded-xl">
                   <Heart className="w-5 h-5" />
                 </Button>
                 <Button variant="outline" size="icon" className="h-12 w-12 border-white/10 bg-white/5 rounded-xl">
                   <Share2 className="w-5 h-5" />
                 </Button>
               </div>
            </div>

            <div className="p-6 rounded-3xl bg-accent/5 border border-accent/20">
               <div className="flex justify-between items-center mb-4">
                 <h4 className="text-xs font-bold uppercase tracking-widest text-accent">Investor Ask</h4>
                 <Badge className="bg-status-mint text-white text-[9px]">Verified Deck</Badge>
               </div>
               <div className="space-y-4">
                  <div className="flex justify-between items-end">
                    <span className="text-display-lg !text-3xl font-bold">$1.2M</span>
                    <span className="text-xs text-muted-foreground">/ $3.5M Budget</span>
                  </div>
                  <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
                    <div className="h-full bg-accent w-[35%]" />
                  </div>
                  
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="outline" className="w-full border-accent/30 text-accent hover:bg-accent hover:text-white h-10 text-[10px] uppercase tracking-widest font-bold rounded-xl transition-all">
                        Request Financials
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[700px] bg-secondary border-white/5 glass shadow-2xl">
                      <DialogHeader>
                        <DialogTitle className="text-headline-lg !text-2xl text-accent">SECURE PROJECT DATA ROOM</DialogTitle>
                        <DialogDescription className="text-muted-foreground flex items-center gap-2">
                          <Lock className="w-3 h-3 text-status-mint" />
                          256-bit Encrypted Session • Verified Investor Status Required
                        </DialogDescription>
                      </DialogHeader>
                      <div className="py-12 flex flex-col items-center justify-center space-y-6 text-center">
                        <div className="w-24 h-24 rounded-full bg-accent/10 flex items-center justify-center border border-accent/20 animate-pulse">
                          <ShieldCheck className="w-12 h-12 text-accent" />
                        </div>
                        <div>
                          <h4 className="text-xl font-bold text-white mb-2">Request Access to Financials</h4>
                          <p className="text-sm text-muted-foreground max-w-sm">
                            Full budget sheets, P&A breakdown, and revenue projections are restricted to authenticated investors.
                          </p>
                        </div>
                        <div className="flex gap-4 w-full max-w-xs">
                          <Button className="flex-1 bg-accent text-white font-bold uppercase tracking-widest h-12 rounded-xl">
                            Request Data Loop
                          </Button>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>

               </div>
            </div>
          </div>
        </div>

        {/* Project Details Tabs */}
        <div className="max-w-4xl">
          <Tabs defaultValue="look" className="w-full">
            <TabsList className="bg-transparent border-b border-white/5 w-full justify-start h-auto p-0 mb-12 rounded-none">
              <TabsTrigger value="look" className="bg-transparent data-[state=active]:bg-transparent data-[state=active]:border-b-2 data-[state=active]:border-accent rounded-none px-8 py-4 text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground data-[state=active]:text-white transition-all">
                Look & Feel
              </TabsTrigger>
              <TabsTrigger value="story" className="bg-transparent data-[state=active]:bg-transparent data-[state=active]:border-b-2 data-[state=active]:border-accent rounded-none px-8 py-4 text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground data-[state=active]:text-white transition-all">
                Story World
              </TabsTrigger>
              <TabsTrigger value="team" className="bg-transparent data-[state=active]:bg-transparent data-[state=active]:border-b-2 data-[state=active]:border-accent rounded-none px-8 py-4 text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground data-[state=active]:text-white transition-all">
                The Team
              </TabsTrigger>
              <TabsTrigger value="investor" className="bg-transparent data-[state=active]:bg-transparent data-[state=active]:border-b-2 data-[state=active]:border-accent rounded-none px-8 py-4 text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground data-[state=active]:text-white transition-all flex items-center gap-2">
                <Lock className="w-3 h-3" />
                Investor Only
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="look" className="animate-in fade-in slide-in-from-bottom-4 duration-700">
               <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
                  <div className="col-span-2 md:col-span-3 h-64 relative rounded-2xl overflow-hidden group">
                    <img src="https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=600&h=400&auto=format&fit=crop" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <span className="absolute bottom-4 left-4 text-[10px] font-bold uppercase tracking-[0.2em]">Lighting Mood</span>
                  </div>
                  <div className="col-span-2 md:col-span-3 h-64 relative rounded-2xl overflow-hidden group">
                    <img src="https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?q=80&w=600&h=400&auto=format&fit=crop" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <span className="absolute bottom-4 left-4 text-[10px] font-bold uppercase tracking-[0.2em]">Color Palette</span>
                  </div>
                  <div className="col-span-1 md:col-span-2 h-48 relative rounded-2xl overflow-hidden group">
                    <img src="https://images.unsplash.com/photo-1520034475321-cbe63696469a?q=80&w=600&h=400&auto=format&fit=crop" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
                  </div>
                  <div className="col-span-1 md:col-span-2 h-48 relative rounded-2xl overflow-hidden group">
                    <img src="https://images.unsplash.com/photo-1510511459019-5dee99c4fd56?q=80&w=600&h=400&auto=format&fit=crop" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
                  </div>
                  <div className="col-span-2 h-48 relative rounded-2xl overflow-hidden group">
                    <img src="https://images.unsplash.com/photo-1478720568477-152d9b164e26?q=80&w=600&h=400&auto=format&fit=crop" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
                  </div>
               </div>
            </TabsContent>

            <TabsContent value="story" className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
               <div className="prose prose-invert max-w-none">
                 <h3 className="text-headline-lg !text-2xl text-white mb-4 italic">"Memory is the ultimate currency. Until it's stolen."</h3>
                 <p className="text-gray-400 text-lg leading-relaxed">
                   Set in the neon-drenched landscapes of 2088 Kochi, Neon District exploring the intersection of biological identity and digital capitalism. Our protagonist, K, is a memory architect who discovers a hidden sector of memories that shouldn't exist.
                 </p>
               </div>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                 <div className="p-8 rounded-3xl bg-secondary/20 border border-white/5">
                    <Clapperboard className="w-8 h-8 text-accent mb-6" />
                    <h4 className="text-xl font-bold mb-3">Cinematic Language</h4>
                    <p className="text-sm text-gray-400">High contrast, anamorphic lenses, and an integration of classical South Indian aesthetics with cyberpunk brutalism.</p>
                 </div>
                 <div className="p-8 rounded-3xl bg-secondary/30 border border-white/5">
                    <Users className="w-8 h-8 text-status-mint mb-6" />
                    <h4 className="text-xl font-bold mb-3">Character Archetypes</h4>
                    <p className="text-sm text-gray-400">Complex, morally ambiguous characters struggling with the loss of their biological heritage in a synthetic world.</p>
                 </div>
               </div>
            </TabsContent>

            <TabsContent value="team" className="animate-in fade-in slide-in-from-bottom-4 duration-700">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { name: "Ramsan", role: "Director / Writer", verified: true, avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&h=200&auto=format&fit=crop" },
                  { name: "Madurika", role: "Digital Strategy / Marketing", verified: true, avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&h=200&auto=format&fit=crop" },
                  { name: "Aarav Sharma", role: "Cinematographer", verified: true, avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&h=200&auto=format&fit=crop" }
                ].map((member, i) => (
                  <div key={i} className="flex items-center gap-4 p-4 rounded-2xl bg-secondary/30 border border-white/5">
                    <div className="w-12 h-12 rounded-full overflow-hidden border border-white/10">
                      <img src={member.avatar} className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <p className="text-sm font-bold flex items-center gap-1.5">
                        {member.name}
                        {member.verified && <ShieldCheck className="w-3 h-3 text-status-mint" />}
                      </p>
                      <p className="text-[10px] text-muted-foreground uppercase font-bold tracking-widest">{member.role}</p>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="investor" className="animate-in fade-in slide-in-from-bottom-4 duration-700">
               <div className="p-12 rounded-3xl bg-secondary/30 border border-white/5 flex flex-col items-center justify-center text-center space-y-6">
                  <div className="w-20 h-20 rounded-full bg-accent/10 flex items-center justify-center">
                    <Lock className="w-10 h-10 text-accent" />
                  </div>
                  <h3 className="text-2xl font-bold">Secure Investor Room</h3>
                  <p className="text-gray-400 max-w-sm">To access financial breakdowns, market analysis, and the full pitch deck, you must be a verified investor.</p>
                  <Button className="bg-accent text-white px-8 rounded-xl font-bold uppercase tracking-widest">
                    Request Secure Access
                  </Button>
                  <p className="text-[10px] text-muted-foreground italic">Verification usually takes 24-48 hours.</p>
               </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  );
}
