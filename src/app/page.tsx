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
  Handshake,
  Loader2
} from "lucide-react";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { Footer } from "@/components/footer";

const QUICK_STATS = [
  { label: "Market Opportunity", value: "", detail: "Global Film & Media", icon: Globe },
  { label: "Revenue Model", value: "SaaS", detail: "Tiered Subscriptions", icon: Database },
  { label: "Target Growth", value: "", detail: "Annual Talent Acquisition", icon: TrendingUp },
];

const TEAM_MEMBERS = [
  {
    id: "ceo",
    name: "Ramsan Thaventhiran",
    role: "Co-Founder & CEO",
    bio: "Visionary strategist focused on bridging the gap between traditional cinema workflows and modern digital infrastructure.",
    img: "/team/ceo.png"
  },
  {
    id: "marketer",
    name: "Sabesan Thaventhiran",
    role: "Digital Marketer",
    bio: "Growth specialist with expertise in building niche community ecosystems and high-conversion digital campaigns.",
    img: "/team/dev-marketer.png"
  },
  {
    id: "developer",
    name: "Lajeeban Jeyakodi",
    role: "Full Stack Web Developer",
    bio: "Systems architect specializing in high-performance marketplace platforms and secure API integrations.",
    img: "/team/senior-dev.png"
  },
  {
    id: "business-analyst",
    name: "Dilaksi Jeyakumar",
    role: "Business Analyst",
    bio: "Data-driven strategist with expertise in analyzing market trends and optimizing business processes.",
    img: "/team/business-analyst.png"
  },
];

const REVENUE_TIERS = [
  {
    title: "Talent",
    price: "1 USD / Month",
    features: ["Digital Portfolio", "Project Discovery", "Public Profile"],
    cta: "Start Building",
    isPrimary: false
  },
  {
    title: "Pro Creator",
    price: "Coming Soon",
    features: ["Verified Badge", "Featured Placement", "Early Access to Jobs", "Analytics Dashboard"],
    cta: "Go Pro",
    isPrimary: true
  },
  {
    title: "Studio/Agency",
    price: "Coming Soon",
    features: ["Unlimited Job Postings", "Advanced Talent Filters", "Team Collaboration", "Priority Support"],
    cta: "Contact Sales",
    isPrimary: false
  }
];

const MILESTONES = [
  { period: " 2026", title: "Beta Launch", detail: "Initial directory launch for talent and production houses." },
  { period: " 2026", title: "Monetization", detail: "Rollout of Pro tiers and integrated payment gateway for local and USD payments." },
  { period: " 2026", title: "Expansion", detail: "Partnership with regional film corporations and regional talent hubs." },
  { period: " 2026", title: "Project Escrow", detail: "Implementation of secure project bidding and payment escrow systems." },
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

function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast.success("Inquiry sent successfully. Our team will contact you soon.");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        const data = await response.json();
        toast.error(data.message || "Failed to send inquiry. Please try again.");
      }
    } catch (err) {
      toast.error("An unexpected error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-40 bg-background relative overflow-hidden" id="contact">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-foreground/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-foreground/5 blur-[120px] rounded-full translate-y-1/2 -translate-x-1/2" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="bg-foreground/5 text-foreground/60 mb-6 border-foreground/10 px-4 py-1.5 uppercase tracking-[0.2em] text-[10px]">Get In Touch</Badge>
            <h2 className="text-display-section !text-6xl mb-6 leading-tight">Connect  <span className="text-foreground/40 italic"></span></h2>
            <p className="text-body-narrative text-muted-foreground max-w-2xl mx-auto">
            </p>
          </div>

          <SpotlightCard className="p-8 md:p-12 border-foreground/10 bg-background/50 backdrop-blur-sm">
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <Label htmlFor="name" className="text-label-stats text-[10px] uppercase tracking-widest text-foreground/60">Full Name</Label>
                  <Input
                    id="name"
                    placeholder="Enter your name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="bg-foreground/5 border-foreground/10 focus:border-foreground/30 transition-all h-12"
                  />
                </div>
                <div className="space-y-3">
                  <Label htmlFor="email" className="text-label-stats text-[10px] uppercase tracking-widest text-foreground/60">Email Address</Label>
                  <Input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="bg-foreground/5 border-foreground/10 focus:border-foreground/30 transition-all h-12"
                  />
                </div>
              </div>

              <div className="space-y-3">
                <Label htmlFor="subject" className="text-label-stats text-[10px] uppercase tracking-widest text-foreground/60">Subject</Label>
                <Input
                  id="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="bg-foreground/5 border-foreground/10 focus:border-foreground/30 transition-all h-12"
                />
              </div>

              <div className="space-y-3">
                <Label htmlFor="message" className="text-label-stats text-[10px] uppercase tracking-widest text-foreground/60">Strategic Message</Label>
                <Textarea
                  id="message"
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="bg-foreground/5 border-foreground/10 focus:border-foreground/30 transition-all min-h-[150px] resize-none"
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full h-16 bg-foreground text-background font-bold uppercase tracking-widest text-xs rounded-full hover:bg-foreground/90 transition-all hover:scale-[1.02] flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Processing...
                  </>
                ) : (
                  <>
                    Submit 
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </Button>
            </form>
          </SpotlightCard>
        </div>
      </div>
    </section>
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
                  <span className="text-xs text-foreground/80 uppercase tracking-tighter">Investment Proposal 2026</span>
                </div>
                <h1 className="text-display-hero max-w-5xl mx-auto mb-8 tracking-[-0.03em] break-words">
                  The Digital Infrastructure for the <span className="text-foreground underline decoration-foreground/20 underline-offset-[12px]">Future of Cinema</span>
                </h1>
                <p className="text-body-narrative text-muted-foreground max-w-3xl mx-auto mb-12">
                  ThiraiTerra is a Networking and hiring marketplace designed exclusively for the film industry—connecting talent, producers, and investors in a high-efficiency digital ecosystem.
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
            <span className="text-label-stats text-[10px]">Strategic Roadmap</span>
            <div className="w-[1px] h-12 bg-gradient-to-b from-foreground to-transparent" />
          </div>
        </section>

        {/* Slide 2: The Core Problem & Solution */}
        <section className="py-40 bg-background blueprint border-b border-foreground/5">
          <div className="container mx-auto px-6">
            <div className="flex flex-col gap-20 items-center">
              <div className="w-full max-w-4xl mx-auto text-center">
                <Badge className="bg-foreground/5 text-foreground/60 mb-6 border-foreground/10 px-4 py-1.5 uppercase tracking-[0.2em] text-[10px]">Strategic Analysis</Badge>
                <h2 className="text-display-section !text-5xl text-foreground mb-8 leading-tight">Solving the Fragmentation of <span className="text-foreground/40 italic">FILM PRODUCTION</span></h2>
                <p className="text-body-narrative text-muted-foreground mb-12">
                  The industry relies on fragmented word-of-mouth networks and offline directories. This inefficiency leads to delayed productions, talent invisibility, and high friction for international co-productions.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-32">
              <SpotlightCard className="p-10 border-foreground/10">
                <h4 className="text-label-stats text-foreground/40 mb-6 flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-red-500" />
                  The Problem
                </h4>
                <p className="text-foreground leading-relaxed font-medium">Opaque talent discovery processes and lack of verified portfolios make hiring skilled technicians a time-consuming risk for producers.</p>
              </SpotlightCard>
              <SpotlightCard className="p-10 border-foreground/10">
                <h4 className="text-label-stats text-foreground/40 mb-6 flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                  The Solution
                </h4>
                <p className="text-foreground leading-relaxed font-medium">A centralized digital directory with cinematic-grade portfolios, verified credentials, and direct hiring workflows.</p>
              </SpotlightCard>
              <SpotlightCard className="p-10 border-foreground/10">
                <h4 className="text-label-stats text-foreground/40 mb-6 flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  The Impact
                </h4>
                <p className="text-foreground leading-relaxed font-medium">70% reduction in talent sourcing time and increased visibility for local talent on a global stage.</p>
              </SpotlightCard>
            </div>
          </div>
        </section>

        {/* Slide 3: Revenue Model & Unit Economics */}
        <section className="py-40 bg-secondary/5 border-b border-foreground/5">
          <div className="container mx-auto px-6">
            <div className="mb-20 text-center">
              <Badge className="bg-foreground/5 text-foreground/60 mb-6 border-foreground/10 px-4 py-1.5 uppercase tracking-[0.2em] text-[10px]">Business Model</Badge>
              <h2 className="text-display-section !text-5xl text-foreground mb-6">Sustainable <span className="text-foreground/40 italic">MONETIZATION</span></h2>
              <p className="text-body-narrative text-muted-foreground max-w-2xl mx-auto">
                Our subscription-led model ensures consistent cash flow while lowering the barrier to entry for emerging artists .
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {REVENUE_TIERS.map((tier, i) => (
                <SpotlightCard key={i} className={cn("p-10 flex flex-col h-full", tier.isPrimary ? "border-foreground/30 bg-foreground/[0.02]" : "border-foreground/5")}>
                  <h3 className="text-xl font-bold mb-2 tracking-tight">{tier.title}</h3>
                  <div className="text-3xl font-bold mb-8 text-foreground/80">{tier.price}</div>
                  <ul className="space-y-4 mb-12 flex-1">
                    {tier.features.map((feat, j) => (
                      <li key={j} className="flex items-center gap-3 text-sm text-foreground/60">
                        <div className="w-1 h-1 rounded-full bg-foreground/40" />
                        {feat}
                      </li>
                    ))}
                  </ul>

                  <Button
                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                    variant={tier.isPrimary ? "default" : "outline"}
                    className={cn(
                      "w-full rounded-full uppercase tracking-widest text-[10px] h-12 font-bold transition-all",
                      tier.isPrimary ? "bg-foreground text-background hover:bg-foreground/90" : "border-foreground/20 hover:bg-foreground/5"
                    )}
                  >
                    {tier.cta}
                  </Button>
                </SpotlightCard>
              ))}
            </div>
          </div>
        </section>

        {/* Slide 4: User Workflows (How it Works) */}
        <section className="py-40 bg-secondary/5 border-b border-foreground/5">
          <div className="container mx-auto px-6">
            <div className="mb-20 text-center">
              <Badge className="bg-foreground/5 text-foreground/60 mb-6 border-foreground/10 px-4 py-1.5 uppercase tracking-[0.2em] text-[10px]">Operational Excellence</Badge>
              <h2 className="text-display-section !text-5xl text-foreground mb-6">Streamlined <span className="text-foreground/40 italic">WORKFLOWS</span></h2>
              <p className="text-body-narrative text-muted-foreground max-w-2xl mx-auto">
                Designed to minimize friction at every stage of the production lifecycle—from initial discovery to final contract.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="space-y-6">
                <div className="w-12 h-12 rounded-full bg-foreground/10 flex items-center justify-center text-foreground font-bold">1</div>
                <h4 className="text-xl font-bold">For Talent</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">Create a cinematic profile, upload your reel, and get discovered by producers looking for your specific skill set and equipment.</p>
              </div>
              <div className="space-y-6">
                <div className="w-12 h-12 rounded-full bg-foreground/10 flex items-center justify-center text-foreground font-bold">2</div>
                <h4 className="text-xl font-bold">For Producers</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">Post requirements, filter through verified talent, and manage applicants through a centralized dashboard without leaving the platform.</p>
              </div>
              <div className="space-y-6">
                <div className="w-12 h-12 rounded-full bg-foreground/10 flex items-center justify-center text-foreground font-bold">3</div>
                <h4 className="text-xl font-bold">For Investors</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">Review vetted project pitches, analyze team credentials, and track production milestones with real-time data transparency.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Slide 5: Competitive Edge & Differentiation */}
        <section className="py-40 bg-background border-b border-foreground/5 relative overflow-hidden">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <div>
                <Badge className="bg-foreground/5 text-foreground/60 mb-6 border-foreground/10 px-4 py-1.5 uppercase tracking-[0.2em] text-[10px]">Market Positioning</Badge>
                <h2 className="text-display-section !text-5xl text-foreground mb-8">Our <span className="text-foreground/40 italic">COMPETITIVE EDGE</span></h2>
                <div className="space-y-8">

                  <div className="flex gap-6">
                    <div className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-foreground mt-2" />
                    <div>
                      <h5 className="font-bold mb-2 uppercase tracking-widest text-[10px]">Verified Network</h5>
                      <p className="text-sm text-muted-foreground">Every profile is vetted by industry veterans to ensure data authenticity, reducing hiring risks for major studios.</p>
                    </div>
                  </div>
                  <div className="flex gap-6">
                    <div className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-foreground mt-2" />
                    <div>
                      <h5 className="font-bold mb-2 uppercase tracking-widest text-[10px]">End-to-End Escrow</h5>
                      <p className="text-sm text-muted-foreground">Future-proof payment systems designed to handle both LKR and USD, facilitating international co-productions seamlessly.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-8 rounded-3xl bg-foreground/5 border border-foreground/10 text-center">
                  <div className="text-3xl font-bold mb-1">0%</div>
                  <div className="text-[10px] text-muted-foreground uppercase tracking-widest">Commission for Indie Talent</div>
                </div>
                <div className="p-8 rounded-3xl bg-foreground/5 border border-foreground/10 text-center">
                  <div className="text-3xl font-bold mb-1">24h</div>
                  <div className="text-[10px] text-muted-foreground uppercase tracking-widest">Verification Turnaround</div>
                </div>
                <div className="p-8 rounded-3xl bg-foreground/5 border border-foreground/10 text-center">
                  <div className="text-3xl font-bold mb-1">100%</div>
                  <div className="text-[10px] text-muted-foreground uppercase tracking-widest">Focused on Sri Lankan Talent</div>
                </div>
                <div className="p-8 rounded-3xl bg-foreground/5 border border-foreground/10 text-center">
                  <div className="text-3xl font-bold mb-1">SaaS</div>
                  <div className="text-[10px] text-muted-foreground uppercase tracking-widest">Infrastructure as a Service</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Slide 6: Go-To-Market & Roadmap */}
        <section className="py-40 bg-background border-b border-foreground/5 relative overflow-hidden">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
              <div>
                <Badge className="bg-foreground/5 text-foreground/60 mb-6 border-foreground/10 px-4 py-1.5 uppercase tracking-[0.2em] text-[10px]">Execution Strategy</Badge>
                <h2 className="text-display-section !text-5xl text-foreground mb-12">The Path to <span className="text-foreground/40 italic">MARKET DOMINANCE</span></h2>
                <div className="space-y-12">
                  <div className="group">
                    <h4 className="text-label-stats text-foreground mb-2 flex items-center gap-3">
                      <span className="text-foreground/20">01</span> Market Penetration
                    </h4>
                    <p className="text-body-narrative text-muted-foreground text-sm">Focusing on high-density production hubs in Colombo to build initial liquidity of 500+ verified profiles.</p>
                  </div>
                  <div className="group">
                    <h4 className="text-label-stats text-foreground mb-2 flex items-center gap-3">
                      <span className="text-foreground/20">02</span> Community Integration
                    </h4>
                    <p className="text-body-narrative text-muted-foreground text-sm">Direct partnerships with film schools and technical associations (DOPs, Editors) to ensure data authenticity.</p>
                  </div>
                  <div className="group">
                    <h4 className="text-label-stats text-foreground mb-2 flex items-center gap-3">
                      <span className="text-foreground/20">03</span> Scaling Network Effects
                    </h4>
                    <p className="text-body-narrative text-muted-foreground text-sm">Launching the project bidding engine to facilitate full-cycle production hiring and secure payments.</p>
                  </div>
                </div>
              </div>

              <div className="bg-foreground/5 border border-foreground/10 p-12 rounded-3xl">
                <h3 className="text-label-stats text-foreground/40 mb-10 uppercase tracking-[0.2em] text-[10px]">2026 Roadmap</h3>
                <div className="space-y-10 relative">
                  <div className="absolute left-[7px] top-2 bottom-2 w-[1px] bg-foreground/10" />
                  {MILESTONES.map((m, i) => (
                    <div key={i} className="relative pl-10">
                      <div className="absolute left-0 top-1.5 w-[15px] h-[15px] rounded-full bg-background border-2 border-foreground/40" />
                      <div className="text-[10px] text-foreground/40 font-bold mb-1">{m.period}</div>
                      <h5 className="text-foreground font-bold mb-1">{m.title}</h5>
                      <p className="text-xs text-foreground/50">{m.detail}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Slide 7: Leadership (Venture Architects) */}
        <section className="py-40 bg-secondary/10 border-b border-foreground/5 relative overflow-hidden">
          <div className="container mx-auto px-6">
            <div className="mb-20">
              <Badge className="bg-foreground/5 text-foreground/60 mb-6 border-foreground/10 px-4 py-1.5 uppercase tracking-[0.2em] text-[10px]">Our Team</Badge>
              <h2 className="text-display-section !text-5xl text-foreground mb-6">The Core <span className="text-foreground/40 italic">ARCHITECTURE</span></h2>
              <p className="text-body-narrative text-muted-foreground max-w-2xl">
                Combining expertise in strategic business development, digital marketing, and full-stack engineering to build the future of film infrastructure.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {TEAM_MEMBERS.map((member) => (
                <TeamMemberCard key={member.id} member={member} />
              ))}
            </div>
          </div>
        </section>

        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}
