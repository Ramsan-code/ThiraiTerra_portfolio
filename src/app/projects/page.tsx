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
import Image from "next/image";
import Link from "next/link";

export default function ProjectShowcase() {

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="container mx-auto px-6 py-12">
        <Link href="/" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-muted-foreground hover:text-foreground mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4" />
          Back to Venture
        </Link>

        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
          <div className="lg:col-span-8 space-y-8">
            <div className="relative aspect-video rounded-3xl overflow-hidden border border-foreground/5 group bg-secondary/20">
              <Image 
                src="https://images.unsplash.com/photo-1590011502446-27663f7362a1?q=80&w=1200&h=675&auto=format&fit=crop" 
                alt="The Ancient Harbor Mood"
                fill
                className="object-cover grayscale-[0.3] group-hover:grayscale-0 transition-all duration-1000"
              />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-background/40 backdrop-blur-sm cursor-pointer">
                <div className="w-20 h-20 rounded-full bg-foreground flex items-center justify-center shadow-2xl shadow-foreground/50 scale-90 group-hover:scale-100 transition-transform">
                  <PlayCircle className="w-10 h-10 text-background fill-current" />
                </div>
              </div>
              <div className="absolute top-6 left-6 flex gap-3">
                <Badge className="bg-foreground text-background px-3 py-1 font-bold">Featured Pitch</Badge>
                <Badge className="bg-background/80 backdrop-blur-md border-foreground/10 text-foreground px-3 py-1 font-bold">Pre-Production</Badge>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
               {["Historical Drama", "Sinhala / English", "Period Piece", "International Appeal"].map(tag => (
                 <Badge key={tag} variant="outline" className="border-foreground/10 bg-foreground/5 px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
                   {tag}
                 </Badge>
               ))}
            </div>
          </div>

          <div className="lg:col-span-4 space-y-8">
            <div>
              <h1 className="text-display-lg leading-tight mb-4 uppercase tracking-tighter">THE ANCIENT <span className="text-foreground/40 italic">HARBOR</span></h1>
              <p className="text-title-md text-muted-foreground mb-6">In the 19th-century Galle Fort, a young mapmaker discovers a secret trade route that could change the fate of the island.</p>
              
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-secondary/30 p-4 rounded-2xl border border-foreground/5">
                  <p className="text-[10px] uppercase font-bold text-muted-foreground mb-1">Director</p>
                  <p className="text-xs font-bold text-foreground flex items-center gap-1.5">
                    Ramsan Thaventhiran <ShieldCheck className="w-3 h-3 text-emerald-500" />
                  </p>
                </div>
                <div className="bg-secondary/30 p-4 rounded-2xl border border-foreground/5">
                  <p className="text-[10px] uppercase font-bold text-muted-foreground mb-1">Budget Tier</p>
                  <p className="text-xs font-bold text-foreground">Mid-Scale Indie</p>
                </div>
              </div>

               <div className="flex gap-3">
                 <Button className="flex-1 bg-foreground text-background h-12 rounded-xl font-bold uppercase tracking-widest text-[10px]">
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
              <TabsTrigger value="look" className="bg-transparent data-[state=active]:bg-transparent data-[state=active]:border-b-2 data-[state=active]:border-foreground rounded-none px-8 py-4 text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground data-[state=active]:text-foreground transition-all">
                Look & Feel
              </TabsTrigger>
              <TabsTrigger value="story" className="bg-transparent data-[state=active]:bg-transparent data-[state=active]:border-b-2 data-[state=active]:border-foreground rounded-none px-8 py-4 text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground data-[state=active]:text-foreground transition-all">
                Story World
              </TabsTrigger>
              <TabsTrigger value="team" className="bg-transparent data-[state=active]:bg-transparent data-[state=active]:border-b-2 data-[state=active]:border-foreground rounded-none px-8 py-4 text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground data-[state=active]:text-foreground transition-all">
                The Team
              </TabsTrigger>
            </TabsList>

            <TabsContent value="story" className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
               <div className="prose prose-invert max-w-none">
                 <h3 className="text-headline-lg !text-2xl text-foreground mb-4 italic">"History is written by those who controlled the tides."</h3>
                 <p className="text-muted-foreground text-lg leading-relaxed">
                   Set against the backdrop of colonial Ceylon, 'The Ancient Harbor' explores themes of identity, exploration, and the clash between tradition and progress. We follow Aruni, a cartographer who finds more than just land on her maps.
                 </p>
               </div>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                 <div className="p-8 rounded-3xl bg-secondary/20 border border-foreground/5">
                    <Clapperboard className="w-8 h-8 text-foreground mb-6" />
                    <h4 className="text-xl font-bold mb-3">Cinematic Language</h4>
                    <p className="text-sm text-muted-foreground">Warm, golden-hour aesthetics capturing the coastal beauty of Galle, paired with tight, suspenseful interior shots of the Fort's architecture.</p>
                 </div>
                 <div className="p-8 rounded-3xl bg-secondary/30 border border-foreground/5">
                    <Users className="w-8 h-8 text-foreground mb-6" />
                    <h4 className="text-xl font-bold mb-3">Character Depth</h4>
                    <p className="text-sm text-muted-foreground">A diverse cast reflecting the multicultural history of the island—Dutch, Portuguese, and native Ceylonese perspectives.</p>
                 </div>
               </div>
            </TabsContent>

            <TabsContent value="team" className="animate-in fade-in slide-in-from-bottom-4 duration-700">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { name: "Ramsan Thaventhiran", role: "Director / Writer", verified: true, avatar: "/team/ceo.png" },
                  { name: "Sabesan Thaventhiran", role: "Executive Producer", verified: true, avatar: "/team/dev-marketer.png" },
                  { name: "Lajeeban Jeyakodi", role: "Technical Director", verified: true, avatar: "/team/senior-dev.png" }
                ].map((member, i) => (
                  <div key={i} className="flex items-center gap-4 p-4 rounded-2xl bg-secondary/30 border border-foreground/5">
                    <div className="w-12 h-12 rounded-full overflow-hidden border border-foreground/10 bg-black">
                      <img src={member.avatar} className="w-full h-full object-cover grayscale" alt={member.name} />
                    </div>
                    <div>
                      <p className="text-sm font-bold flex items-center gap-1.5">
                        {member.name}
                        {member.verified && <ShieldCheck className="w-3 h-3 text-emerald-500" />}
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
