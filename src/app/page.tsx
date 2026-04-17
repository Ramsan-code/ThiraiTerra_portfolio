"use client";

import { Navbar } from "@/components/navbar";
import { 
  ArrowRight, 
  TrendingUp, 
  Target, 
  Puzzle, 
  Rocket, 
  BarChart4, 
  DollarSign, 
  Presentation,
  ShieldCheck,
  Zap,
  ChevronRight
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

const PILLARS = [
  { name: "Problem Validation", icon: Target, desc: "Testing market assumptions via data-driven user research and gap analysis." },
  { name: "Value Proposition", icon: Zap, desc: "Architecting the core reason why your infrastructure is inevitable." },
  { name: "BMC", icon: Puzzle, desc: "Business Model Canvas: mapping the unit economics of industry disruption." },
  { name: "MVP", icon: Rocket, desc: "Minimum Viable Product: shipping the fundamental trust layer for feedback." },
  { name: "Marketing Strategies", icon: TrendingUp, desc: "Strategic positioning for high-stakes enterprise discovery." },
  { name: "Financial Modelling", icon: BarChart4, desc: "Stress-testing scalability through rigorous data architecture." },
  { name: "Pricing Strategy", icon: DollarSign, desc: "Value-based monetization of industry efficiencies." },
  { name: "Pitch Deck Creation", icon: Presentation, desc: "Securing capital through visionary narrative and financial rigor." }
];

export default function Home() {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />
      
      <main>
        {/* Venture Overview (Hero Slide) */}
        <section className="relative min-h-[85vh] flex flex-col items-center justify-center overflow-hidden border-b border-white/5">
          <div className="absolute inset-0 z-0">
            <video 
              src="https://assets.mixkit.co/videos/preview/mixkit-cinematographer-working-with-his-camera-4028-large.mp4" 
              autoPlay 
              muted 
              loop 
              className="w-full h-full object-cover opacity-10 grayscale"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
          </div>

          <div className="container relative z-10 text-center px-6 py-20">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
            >

              <h1 className="text-display-lg max-w-5xl mx-auto mb-8 tracking-tighter">
                ENGINEERING THE <span className="text-accent underline decoration-accent/30 underline-offset-8">VENTURE STANDARDS</span> OF MODERN CINEMA
              </h1>
              <p className="text-title-md text-muted-foreground max-w-3xl mx-auto mb-12">
                ThiraiTerra provides the definitive incubation framework for film infrastructure innovators. We move from theory to market dominance through structured venture design.
              </p>


            </motion.div>
          </div>
        </section>

        {/* Incubation Pillars (Venture Design Framework) */}
        <section className="py-32 bg-background relative">
           <div className="container px-6">
              <div className="text-center mb-20">
                <Badge className="bg-white/5 text-gray-400 mb-4 border-white/10">Venture Design Framework</Badge>
                <h2 className="text-display-lg !text-5xl text-white">THE 8 PILLARS OF <span className="text-accent">INCUBATION</span></h2>
                <div className="h-1 w-24 bg-accent/30 mx-auto mt-6 rounded-full" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                 {PILLARS.map((pillar, i) => (
                   <motion.div
                     key={i}
                     initial={{ opacity: 0, y: 30 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     viewport={{ once: true }}
                     transition={{ delay: i * 0.1 }}
                   >
                     <Card className="h-full bg-secondary/30 border-white/5 hover:border-accent/30 transition-all duration-500 group spotlight overflow-hidden cursor-default">
                        <CardContent className="p-8 relative h-full flex flex-col justify-between">
                           <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 group-hover:scale-110 transition-all">
                              <pillar.icon className="w-16 h-16 text-accent" />
                           </div>
                           <div>
                             <div className="w-10 h-10 rounded-xl bg-background/50 border border-white/5 flex items-center justify-center mb-6 group-hover:border-accent/50 transition-colors">
                                <pillar.icon className="w-5 h-5 text-accent" />
                             </div>
                             <h3 className="text-headline-lg !text-xl text-white mb-4 leading-tight">{pillar.name}</h3>
                             <p className="text-sm text-gray-400 leading-relaxed">{pillar.desc}</p>
                           </div>
                           <div className="mt-8 pt-6 border-t border-white/5 flex items-center justify-between">
                              <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground group-hover:text-accent transition-colors">Module 0{i+1}</span>
                              <ArrowRight className="w-3 h-3 text-white/20 group-hover:text-accent group-hover:translate-x-1 transition-all" />
                           </div>
                        </CardContent>
                     </Card>
                   </motion.div>
                 ))}
              </div>
           </div>
        </section>

        {/* Strategic CTA Section */}
        <section className="py-32 border-y border-white/5 blueprint relative">
           <div className="container px-6 relative z-10">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                 <div>
                    <h2 className="text-display-lg !text-5xl mb-8 leading-tight">MOVE FROM CONCEPT TO <span className="text-accent">INEVITABILITY</span></h2>
                    <p className="text-title-md text-muted-foreground mb-12">Our incubation process isn't just about building. It's about architecting a disruption that the market cannot ignore.</p>

                 </div>
                 <Card className="bg-background/80 backdrop-blur-xl border-accent/20 p-10 rounded-3xl spotlight">
                    <h3 className="text-headline-lg !text-2xl text-accent mb-8">SECURE PARTNER ACCESS</h3>
                    <form className="space-y-6">
                       <div className="space-y-2">
                          <label className="text-[10px] uppercase font-bold tracking-widest text-gray-400">Professional Identity</label>
                          <input type="text" placeholder="Your Name" className="w-full bg-secondary/50 border border-white/10 rounded-xl h-12 px-4 focus:border-accent/50 outline-none" />
                       </div>
                       <div className="space-y-2">
                          <label className="text-[10px] uppercase font-bold tracking-widest text-gray-400">Venture Email</label>
                          <input type="email" placeholder="name@venture.com" className="w-full bg-secondary/50 border border-white/10 rounded-xl h-12 px-4 focus:border-accent/50 outline-none" />
                       </div>
                       <Button className="w-full bg-accent text-accent-foreground font-bold rounded-xl h-14 uppercase tracking-widest text-xs">
                          Request Partner Access
                       </Button>

                       <p className="text-[10px] text-center text-muted-foreground uppercase tracking-wider">
                          <ShieldCheck className="w-3 h-3 inline mr-2 text-status-mint" />
                          Validated by ThiraiTerra Infrastructure Protocols
                       </p>
                    </form>
                 </Card>
              </div>
           </div>
        </section>
      </main>

      <footer className="bg-background py-20 border-t border-white/5">
         <div className="container px-6">
            <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-16">
               <div>
                  <span className="text-display-lg !text-2xl text-accent block mb-4 tracking-tighter">THIRAI<span className="text-white">TERRA</span></span>
                  <p className="text-[10px] uppercase font-bold tracking-[0.3em] text-muted-foreground">Professional Venture Incubation</p>

               </div>
               <div className="grid grid-cols-2 sm:grid-cols-3 gap-12">
                  <div className="space-y-4">
                     <h5 className="text-[10px] uppercase font-bold tracking-widest text-white">Governance</h5>
                     <ul className="space-y-2 text-[10px] uppercase font-bold tracking-widest text-muted-foreground">
                        <li className="hover:text-accent cursor-pointer transition-colors">Investor Agreement</li>
                        <li className="hover:text-accent cursor-pointer transition-colors">Confidentiality</li>
                     </ul>
                  </div>


               </div>
            </div>
            <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5 gap-4">
               <p className="text-[9px] uppercase tracking-[0.2em] text-muted-foreground">© 2026 THIRAITERRA INFRASTRUCTURE INC.</p>
               <div className="flex gap-6 text-[9px] uppercase tracking-[0.2em] text-muted-foreground font-bold">
                  <span className="hover:text-white cursor-pointer transition-colors">Privacy Policy</span>
                  <span className="hover:text-white cursor-pointer transition-colors">Security Manifest</span>
               </div>
            </div>
         </div>
      </footer>
    </div>
  );
}
