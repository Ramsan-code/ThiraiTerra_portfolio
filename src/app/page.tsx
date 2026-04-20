"use client";

import { useState } from "react";
import { Navbar } from "@/components/navbar";
import {
  ArrowRight,
  TrendingUp,
  Zap,
  Globe,
  Database,
  Clapperboard,
  Handshake
} from "lucide-react";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import { cn } from "@/lib/utils";

const QUICK_STATS = [
  { label: "Target Market", value: "", detail: "Global Entertainment", icon: Globe },
  { label: "Business Model", value: "SaaS", detail: "Professional Infrastructure", icon: Database },
  { label: "Focus", value: "Film Infra", detail: "Industry Standard", icon: Zap },
];

const CASE_STUDY_METRICS = [
  { label: "Partner Network", value: "125+", icon: Handshake },
];

const TEAM_MEMBERS = [
  {
    id: "ceo",
    name: "Ramsan",
    role: "Co-Founder & CEO",
    bio: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    img: "/team/ceo.png"
  },
  {
    id: "dev-m",
    name: "Sabesan",
    role: "Digital Marketer",
    bio: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    img: "/team/dev-marketer.png"
  },

];

function TeamMemberCard({ member }: { member: typeof TEAM_MEMBERS[0] }) {
  const [isActive, setIsActive] = useState(false);

  return (
    <SpotlightCard
      className="overflow-hidden group cursor-pointer"
      onClick={() => setIsActive(!isActive)}
    >
      <div className="flex flex-col h-full">
        <div className="aspect-square relative overflow-hidden bg-black">
          <Image
            src={member.img}
            alt={member.name}
            fill
            className={cn(
              "object-cover transition-all duration-700 ease-in-out",
              isActive ? "grayscale-0" : "grayscale"
            )}
          />
        </div>

        <div className="p-8 flex flex-col justify-center flex-1">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-display-section !text-xl">{member.name}</h3>
            <div className={cn(
              "w-2 h-2 rounded-full transition-colors duration-500",
              isActive ? "bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)]" : "bg-foreground/10"
            )} />
          </div>
          <p className="text-label-stats text-[10px] text-foreground/40 mb-6 uppercase tracking-widest">{member.role}</p>
          <p className="text-body-narrative !text-[13px] text-foreground/60 leading-relaxed italic">
            "{member.bio}"
          </p>
        </div>
      </div>
    </SpotlightCard>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden selection:bg-foreground selection:text-background">
      <Navbar />

      <main>
        {/* Slide 1: Venture Overview (Hero) */}
        <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden border-b border-foreground/5">
          <div className="absolute inset-0 z-0">
            <video
              src="https://assets.mixkit.co/videos/preview/mixkit-cinematographer-working-with-his-camera-4028-large.mp4"
              autoPlay
              muted
              loop
              className="w-full h-full object-cover opacity-20 grayscale"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background" />
          </div>

          <div className="container mx-auto relative z-10 px-6 pt-20 pb-32">
            <div className="text-center mb-24">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-foreground/10 bg-foreground/5 glimmer-badge mb-8">
                  <span className="text-label-stats text-foreground/60">Proposal Cover Letter</span>
                </div>
                <h1 className="text-display-hero max-w-5xl mx-auto mb-8 tracking-[-0.03em] break-words">
                  Professional <span className="text-foreground underline decoration-foreground/20 underline-offset-[12px]">Networking & Hiring</span>  Marketplace for the Film Industry
                </h1>
                <p className="text-body-narrative text-muted-foreground max-w-3xl mx-auto mb-12">
                  The platform connects Artists, Technicians, Directors, Producers, and Investors in a centralized digital ecosystem that simplifies talent discovery, collaboration, and project investment.
                </p>
              </motion.div>
            </div>

            {/* Quick-Stats Bento Row */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {QUICK_STATS.map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + i * 0.1 }}
                >
                  <SpotlightCard className="p-8 group hover:border-foreground/20">
                    <div className="flex items-start justify-between mb-6">
                      <div className="p-3 rounded-xl bg-foreground/5 border border-foreground/10 group-hover:border-foreground/30 transition-colors">
                        <stat.icon className="w-5 h-5 text-foreground" />
                      </div>
                    </div>
                    <h3 className="text-label-stats text-foreground/60 mb-1">{stat.label}</h3>
                    <div className="text-display-section !text-4xl text-foreground mb-2">{stat.value}</div>
                    <p className="text-[11px] text-foreground/40 uppercase tracking-widest">{stat.detail}</p>
                  </SpotlightCard>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 animate-bounce opacity-40">
            <span className="text-label-stats text-[10px]">Scroll Narrative</span>
            <div className="w-[1px] h-12 bg-gradient-to-b from-foreground to-transparent" />
          </div>
        </section>



        {/* Slide 2: Project Case Study (ThiraiTerra Spotlight) */}
        <section className="py-40 bg-background blueprint border-b border-foreground/5">
          <div className="container mx-auto px-6">
            <div className="flex flex-col gap-20 items-center">
              <div className="w-full max-w-4xl mx-auto text-center">
                <Badge className="bg-foreground/5 text-foreground/60 mb-6 border-foreground/10 px-4 py-1.5 uppercase tracking-[0.2em] text-[10px]">Lorem Ipsum is simply dummy text of the printing and typesetting industry</Badge>
                <h2 className="text-display-section !text-5xl text-foreground mb-8 leading-tight">Lorem Ipsum is simply dummy <span className="text-foreground/40 italic">DOMINANCE</span></h2>
                <p className="text-body-narrative text-muted-foreground mb-12">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-32">
              <SpotlightCard className="p-10 border-foreground/10">
                <h4 className="text-label-stats text-foreground/40 mb-6 flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-red-500" />
                  The Problem
                </h4>
                <p className="text-foreground leading-relaxed font-medium"> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, .</p>
              </SpotlightCard>
              <SpotlightCard className="p-10 border-foreground/10">
                <h4 className="text-label-stats text-foreground/40 mb-6 flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                  The Solution
                </h4>
                <p className="text-foreground leading-relaxed font-medium"> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, .</p>
              </SpotlightCard>
              <SpotlightCard className="p-10 border-foreground/10">
                <h4 className="text-label-stats text-foreground/40 mb-6 flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  The Outcome
                </h4>
                <p className="text-foreground leading-relaxed font-medium"> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, .</p>
              </SpotlightCard>
            </div>
          </div>
        </section>

        {/* Slide 3: Leadership (Venture Architects) */}
        <section className="py-40 bg-secondary/10 border-b border-foreground/5 relative overflow-hidden">
          <div className="container mx-auto px-6">
            <div className="mb-20">
              <Badge className="bg-foreground/5 text-foreground/60 mb-6 border-foreground/10 px-4 py-1.5 uppercase tracking-[0.2em] text-[10px]">Our Team</Badge>
              <h2 className="text-display-section !text-5xl text-foreground mb-6">The Core <span className="text-foreground/40 italic">TEAM</span></h2>
              <p className="text-body-narrative text-muted-foreground max-w-2xl">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {TEAM_MEMBERS.map((member) => (
                <TeamMemberCard key={member.id} member={member} />
              ))}
            </div>
          </div>
        </section>

        {/* Strategic Call to Action */}
        <section className="py-40 bg-background relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-foreground/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />

          <div className="container mx-auto px-6 relative z-10 text-center">
            <h2 className="text-display-section !text-6xl mb-12 max-w-4xl mx-auto leading-tight">Lorem Ipsum is simply dummy <span className="text-foreground/40 italic">INFRASTRUCTURE ERA</span></h2>
            <p className="text-body-narrative text-muted-foreground max-w-3xl mx-auto mb-16">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. .
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Button className="h-16 px-12 bg-foreground text-background font-bold uppercase tracking-widest text-xs rounded-full hover:bg-foreground/90 transition-all hover:scale-105">
               Lorem Ipsum is simply dummy text
              </Button>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-background py-24 border-t border-foreground/5">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-20">
            <div>
              <span className="text-display-section !text-2xl text-foreground block mb-4 tracking-[-0.03em]">THIRAI<span className="text-foreground/40 italic">TERRA</span></span>
              <p className="text-label-stats text-[10px] text-foreground/40">loream</p>
            </div>
            <div className="flex gap-16">
              <div className="space-y-6">
                <h5 className="text-label-stats text-[10px] text-foreground">loream</h5>
                <ul className="space-y-3 text-label-stats text-[10px] text-foreground/40">
                  <li className="hover:text-foreground cursor-pointer transition-colors">loream</li>
                  <li className="hover:text-foreground cursor-pointer transition-colors">loream</li>
                  <li className="hover:text-foreground cursor-pointer transition-colors">loream</li>
                </ul>
              </div>
              <div className="space-y-6">
                <h5 className="text-label-stats text-[10px] text-foreground">loream</h5>
                <ul className="space-y-3 text-label-stats text-[10px] text-foreground/40">
                  <li className="hover:text-foreground cursor-pointer transition-colors">loream</li>
                  <li className="hover:text-foreground cursor-pointer transition-colors">loream</li>
                  <li className="hover:text-foreground cursor-pointer transition-colors">loream</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center pt-10 border-t border-foreground/5 gap-4">
            <p className="text-label-stats text-[9px] text-foreground/20 tracking-[0.3em]">© 2026 THIRAITERRA .</p>
            <div className="flex gap-8 text-label-stats text-[9px] text-foreground/40">
              <span className="hover:text-foreground cursor-pointer transition-colors">loream</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
