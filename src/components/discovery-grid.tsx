"use client";

import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { ShieldCheck, Video, MapPin, Star } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useSpotlight } from "@/hooks/use-spotlight";


const TALENT_DATA = [
  {
    id: 1,
    name: "Aarav Sharma",
    role: "Director of Photography",
    location: "Mumbai, IND",
    verified: true,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&h=400&auto=format&fit=crop",
    video: "https://assets.mixkit.co/videos/preview/mixkit-cinematographer-working-with-his-camera-4028-large.mp4",
    availability: "Immediate",
    tags: ["Anamorphic", "Arri Alexa", "Low Light"],
    size: "large",
  },
  {
    id: 2,
    name: "Meera Nair",
    role: "Creative Director",
    location: "Chennai, IND",
    verified: true,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400&h=400&auto=format&fit=crop",
    availability: "June 2024",
    tags: ["Narrative", "Post-Modern"],
    size: "medium",
  },
  {
    id: 3,
    name: "Vikram Seth",
    role: "Prosthetic Artist",
    location: "Kochi, IND",
    verified: false,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&h=400&auto=format&fit=crop",
    availability: "Limited",
    tags: ["SFX", "High-Fantasy"],
    size: "small",
  },
  {
    id: 4,
    name: "Sanya Malhotra",
    role: "Lead Actress",
    location: "Delhi, IND",
    verified: true,
    rating: 5.0,
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400&h=400&auto=format&fit=crop",
    video: "https://assets.mixkit.co/videos/preview/mixkit-woman-walking-in-a-field-of-flowers-4258-large.mp4",
    availability: "Immediate",
    tags: ["Method Acting", "Dance"],
    size: "medium",
  },
  {
    id: 5,
    name: "Rohan Das",
    role: "Sound Designer",
    location: "Bangalore, IND",
    verified: true,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400&h=400&auto=format&fit=crop",
    availability: "In Production",
    tags: ["Dolby Atmos", "Foley"],
    size: "small",
  },
  {
    id: 6,
    name: "Priya Varma",
    role: "Script Writer",
    location: "Hyderabad, IND",
    verified: true,
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&h=400&auto=format&fit=crop",
    availability: "Available",
    tags: ["Sci-Fi", "Dialog Heavy"],
    size: "large",
  },
];

export function DiscoveryGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-6">
      {TALENT_DATA.map((talent) => (
        <TalentCard key={talent.id} talent={talent} />
      ))}
    </div>
  );
}

function TalentCard({ talent }: { talent: any }) {
  const [isHovered, setIsHovered] = useState(false);
  const spotlight = useSpotlight();

  return (
    <Card 
      className={cn(
        "group relative overflow-hidden border-white/5 bg-secondary/30 transition-all duration-500 hover:shadow-active hover:shadow-accent/10 spotlight",
        talent.size === "large" ? "md:row-span-2 md:col-span-2" : "",
        talent.size === "medium" ? "md:col-span-1" : ""
      )}
      style={spotlight.style}
      onMouseMove={(e) => {
        spotlight.onMouseMove(e);
      }}
      onMouseEnter={() => {
        setIsHovered(true);
        spotlight.onMouseEnter();
      }}
      onMouseLeave={() => {
        setIsHovered(false);
        spotlight.onMouseLeave();
      }}
    >
      <div className="aspect-[4/5] relative w-full overflow-hidden">
        {talent.video && isHovered ? (
          <video 
            src={talent.video} 
            autoPlay 
            muted 
            loop 
            playsInline
            className="h-full w-full object-cover grayscale-[0.5] group-hover:grayscale-0 transition-all duration-700"
          />
        ) : (
          <Image 
            src={talent.image || "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=400&h=400&auto=format&fit=crop"} 
            alt={talent.name}
            fill
            className="object-cover grayscale-[0.8] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
          />
        )}
        
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-80" />
        
        <div className="absolute top-4 left-4 flex flex-col gap-2">
          {talent.verified && (
            <Badge className="bg-status-mint/20 text-status-mint border-status-mint/30 backdrop-blur-md px-2 py-0.5 flex items-center gap-1 glimmer-badge !relative overflow-hidden">
              <ShieldCheck className="w-3 h-3" />
              <span className="text-[10px] font-bold uppercase tracking-widest">Verified</span>
            </Badge>
          )}

          {talent.video && (
            <Badge className="bg-white/10 text-white border-white/20 backdrop-blur-md px-2 py-0.5 flex items-center gap-1">
              <Video className="w-3 h-3" />
              <span className="text-[10px] font-bold uppercase tracking-widest">Showreel</span>
            </Badge>
          )}
        </div>

        <div className="absolute bottom-4 left-4 right-4 text-white">
          <div className="flex items-center justify-between mb-1">
            <h3 className="text-headline-lg !text-xl leading-tight truncate">{talent.name}</h3>
            <div className="flex items-center gap-1 text-golden font-bold">
              <Star className="w-3 h-3 fill-current" />
              <span className="text-xs">{talent.rating}</span>
            </div>
          </div>
          <p className="text-label-sm text-gray-400 mb-2">{talent.role}</p>
          <div className="flex items-center gap-1 text-xs text-gray-400 mb-3">
            <MapPin className="w-3 h-3" />
            <span>{talent.location}</span>
          </div>
          
          <div className="flex flex-wrap gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {talent.tags.map((tag: string) => (
              <span key={tag} className="text-[9px] px-2 py-0.5 rounded-full border border-white/20 bg-white/5 text-white/70">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
      
      <div className="p-4 flex items-center justify-between bg-card text-card-foreground">
        <div className="flex flex-col">
          <span className="text-[9px] uppercase tracking-widest text-muted-foreground">Status</span>
          <span className={cn(
            "text-xs font-bold",
            talent.availability === "Immediate" ? "text-status-mint" : "text-golden"
          )}>{talent.availability}</span>
        </div>
        <Button size="sm" variant="outline" className="h-8 text-[10px] uppercase tracking-widest border-white/10 hover:bg-accent hover:text-white transition-all">
          View Portfolio
        </Button>
      </div>
    </Card>
  );
}
