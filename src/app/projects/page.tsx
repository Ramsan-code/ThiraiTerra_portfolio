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
          Back to Venture
        </Link>

        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
          <div className="lg:col-span-8 space-y-8">
            <div className="relative aspect-video rounded-3xl overflow-hidden border border-foreground/5 group bg-secondary/20">
              <Image 
                src="https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=1200&h=675&auto=format&fit=crop" 
                alt="Project Mood"
                fill
                className="object-cover grayscale-[0.3] group-hover:grayscale-0 transition-all duration-1000"
              />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-background/40 backdrop-blur-sm cursor-pointer">
                <div className="w-20 h-20 rounded-full bg-accent flex items-center justify-center shadow-2xl shadow-accent/50 scale-90 group-hover:scale-100 transition-transform">
                  <PlayCircle className="w-10 h-10 text-accent-foreground fill-current" />
                </div>
              </div>
              <div className="absolute top-6 left-6 flex gap-3">
                <Badge className="bg-accent text-accent-foreground px-3 py-1 font-bold">Featured Pitch</Badge>
                <Badge className="bg-background/80 backdrop-blur-md border-foreground/10 text-foreground px-3 py-1 font-bold">Concept</Badge>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
               {["Psychological Thriller", "English", "Pre-Production", "VFX Focus"].map(tag => (
                 <Badge key={tag} variant="outline" className="border-foreground/10 bg-foreground/5 px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
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
                <div className="bg-secondary/30 p-4 rounded-2xl border border-foreground/5">
                  <p className="text-[10px] uppercase font-bold text-muted-foreground mb-1">Director</p>
                  <p className="text-xs font-bold text-foreground flex items-center gap-1.5">
                    Ramsan <ShieldCheck className="w-3 h-3 text-status-mint" />
                  </p>
                </div>
                <div className="bg-secondary/30 p-4 rounded-2xl border border-foreground/5">
                  <p className="text-[10px] uppercase font-bold text-muted-foreground mb-1">Timeline</p>
                  <p className="text-xs font-bold text-foreground">Fall 2026</p>
                </div>
              </div>

               <div className="flex gap-3">
                 <Button className="flex-1 bg-accent hover:bg-accent/90 text-foreground h-12 rounded-xl font-bold uppercase tracking-widest shadow-xl shadow-accent/20">
                   Contact for Rights
                 </Button>
                 <Button variant="outline" size="icon" className="h-12 w-12 border-foreground/10 bg-foreground/5 rounded-xl">
                   <Heart className="w-5 h-5" />
                 </Button>
                 <Button variant="outline" size="icon" className="h-12 w-12 border-foreground/10 bg-foreground/5 rounded-xl">
                   <Share2 className="w-5 h-5" />
                 </Button>
               </div>
            </div>

          </div>
        </div>

        {/* Project Details Tabs */}
        <div className="max-w-4xl">
          <Tabs defaultValue="look" className="w-full">
            <TabsList className="bg-transparent border-b border-foreground/5 w-full justify-start h-auto p-0 mb-12 rounded-none">
              <TabsTrigger value="look" className="bg-transparent data-[state=active]:bg-transparent data-[state=active]:border-b-2 data-[state=active]:border-accent rounded-none px-8 py-4 text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground data-[state=active]:text-foreground transition-all">
                Look & Feel
              </TabsTrigger>
              <TabsTrigger value="story" className="bg-transparent data-[state=active]:bg-transparent data-[state=active]:border-b-2 data-[state=active]:border-accent rounded-none px-8 py-4 text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground data-[state=active]:text-foreground transition-all">
                Story World
              </TabsTrigger>
              <TabsTrigger value="team" className="bg-transparent data-[state=active]:bg-transparent data-[state=active]:border-b-2 data-[state=active]:border-accent rounded-none px-8 py-4 text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground data-[state=active]:text-foreground transition-all">
                The Team
              </TabsTrigger>
            </TabsList>

            <TabsContent value="story" className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
               <div className="prose prose-invert max-w-none">
                 <h3 className="text-headline-lg !text-2xl text-foreground mb-4 italic">"Memory is the ultimate currency. Until it's stolen."</h3>
                 <p className="text-muted-foreground text-lg leading-relaxed">
                   Set in the neon-drenched landscapes of 2088 Kochi, Neon District exploring the intersection of biological identity and digital capitalism. Our protagonist, K, is a memory architect who discovers a hidden sector of memories that shouldn't exist.
                 </p>
               </div>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                 <div className="p-8 rounded-3xl bg-secondary/20 border border-foreground/5">
                    <Clapperboard className="w-8 h-8 text-accent mb-6" />
                    <h4 className="text-xl font-bold mb-3">Cinematic Language</h4>
                    <p className="text-sm text-muted-foreground">High contrast, anamorphic lenses, and an integration of classical South Indian aesthetics with cyberpunk brutalism.</p>
                 </div>
                 <div className="p-8 rounded-3xl bg-secondary/30 border border-foreground/5">
                    <Users className="w-8 h-8 text-status-mint mb-6" />
                    <h4 className="text-xl font-bold mb-3">Character Archetypes</h4>
                    <p className="text-sm text-muted-foreground">Complex, morally ambiguous characters struggling with the loss of their biological heritage in a synthetic world.</p>
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
                  <div key={i} className="flex items-center gap-4 p-4 rounded-2xl bg-secondary/30 border border-foreground/5">
                    <div className="w-12 h-12 rounded-full overflow-hidden border border-foreground/10">
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

          </Tabs>
        </div>
      </main>
    </div>
  );
}
