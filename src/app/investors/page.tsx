"use client";

import { Navbar } from "@/components/navbar";
import { 
  ShieldCheck, 
  TrendingUp, 
  Zap, 
  DollarSign, 
  Download,
  Globe,
  PieChart,
  Target,
  FileText,
  Rocket
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card";
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
import { Input } from "@/components/ui/input";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { toast } from "sonner";
import { motion } from "framer-motion";

const GROWTH_PROJECTION = [
  { year: "2024", revenue: 0.5 },
  { year: "2025", revenue: 1.8 },
  { year: "2026", revenue: 5.2 },
  { year: "2027", revenue: 14.5 },
  { year: "2028", revenue: 42.0 },
];

const downloadSchema = z.object({
  email: z.string().email("Invalid corporate email address"),
});

export default function InvestorDashboard() {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(downloadSchema),
  });

  const onDownload = (data: { email: string }) => {
    toast.success("Access link sent to " + data.email);
  };

  return (
    <div className="min-h-screen bg-background selection:bg-white selection:text-black">
      <Navbar />
      
      <main className="container mx-auto px-6 py-12 lg:py-24">
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 mb-16 pb-12 border-b border-white/5">
           <div>
             <h1 className="text-display-section !text-4xl mb-2">VENTURE <span className="text-white/40 italic">DASHBOARD</span></h1>
             <p className="text-label-stats text-[10px] text-white/40 font-bold uppercase tracking-[0.3em]">ThiraiTerra • Investor Relations Management v2.0</p>
           </div>
           <div className="flex items-center gap-6">
              <div className="flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10">
                 <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                 <span className="text-label-stats text-[10px] text-white/60">Live Market Feed Active</span>
              </div>
              <Badge className="bg-white/10 text-white border-white/20 px-4 py-1.5 uppercase tracking-[0.1em] text-[10px]">Accredited Only</Badge>
           </div>
        </div>

        {/* Anchoring Section: High Impact Metrics */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-20">
          <div className="lg:col-span-4 space-y-8">
            <SpotlightCard className="p-10 border-white/20 bg-white/5">
              <p className="text-label-stats text-[10px] text-white/40 mb-4 tracking-[0.2em]">Global Addressable Market (TAM)</p>
              <h2 className="text-display-section !text-6xl text-white mb-2 tracking-tighter">$400B+</h2>
              <p className="text-body-narrative !text-sm text-white/60 mb-8">Unaddressed Production Infrastructure Leakage</p>
              
              <div className="space-y-4 pt-8 border-t border-white/5">
                <div className="flex justify-between items-center text-[10px] font-bold uppercase tracking-widest">
                  <span className="text-gray-500">Inefficiency Benchmark</span>
                  <span className="text-white">15.4% Margin Gap</span>
                </div>
                <div className="viewfinder h-1.5 bg-white/5">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: "75%" }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="h-full bg-white" 
                  />
                </div>
              </div>
            </SpotlightCard>

            <div className="grid grid-cols-2 gap-6">
              {[
                { label: "Target IRR", val: "28%", icon: TrendingUp },
                { label: "Exit Path", val: "M&A", icon: Zap },
              ].map((stat, i) => (
                <SpotlightCard key={i} className="p-6 bg-secondary/20">
                  <stat.icon className="w-4 h-4 text-white/40 mb-4" />
                  <p className="text-label-stats text-[9px] text-white/40 mb-1">{stat.label}</p>
                  <p className="text-display-section !text-2xl text-white">{stat.val}</p>
                </SpotlightCard>
              ))}
            </div>
          </div>

          <div className="lg:col-span-8">
            <SpotlightCard className="h-full p-10 blueprint">
              <div className="flex justify-between items-center mb-12">
                <div>
                  <h3 className="text-display-section !text-2xl mb-1">Growth Projection</h3>
                  <p className="text-label-stats text-[10px] text-white/40">Revenue Scaling via Infra Adoption (USD M)</p>
                </div>
                <Tabs defaultValue="revenue" className="hidden sm:block">
                  <TabsList className="bg-white/5 border border-white/10">
                    <TabsTrigger value="revenue" className="text-[10px] font-bold px-4">REVENUE</TabsTrigger>
                    <TabsTrigger value="users" disabled className="text-[10px] font-bold px-4 opacity-30">ADOPTION</TabsTrigger>
                  </TabsList>
                </Tabs>
              </div>
              <div className="h-[360px] w-full mt-10">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={GROWTH_PROJECTION}>
                    <defs>
                      <linearGradient id="colorRev" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#FFFFFF" stopOpacity={0.15}/>
                        <stop offset="95%" stopColor="#FFFFFF" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.03)" vertical={false} />
                    <XAxis 
                      dataKey="year" 
                      stroke="rgba(255,255,255,0.2)" 
                      fontSize={10} 
                      tickLine={false} 
                      axisLine={false} 
                      dy={10}
                    />
                    <YAxis 
                      stroke="rgba(255,255,255,0.2)" 
                      fontSize={10} 
                      tickLine={false} 
                      axisLine={false} 
                      tickFormatter={(v) => `$${v}M`} 
                    />
                    <Tooltip 
                      contentStyle={{ backgroundColor: "#000", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "8px" }}
                      itemStyle={{ color: "#FFF", fontSize: "12px", fontWeight: "bold" }}
                      labelStyle={{ color: "#666", fontSize: "10px", textTransform: "uppercase" }}
                    />
                    <Area type="monotone" dataKey="revenue" stroke="#FFF" fillOpacity={1} fill="url(#colorRev)" strokeWidth={2} />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </SpotlightCard>
          </div>
        </div>

        {/* The Ask Slide: Funding & Proceeds */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          <SpotlightCard className="lg:col-span-2 p-10 relative overflow-hidden group">
            <div className="absolute -top-12 -right-12 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
              <DollarSign className="w-64 h-64 text-white" />
            </div>
            
            <Badge className="bg-white/10 text-white mb-8 border-white/20 uppercase tracking-[0.2em] text-[9px] px-3">Series A Opportunity</Badge>
            <h2 className="text-display-section !text-4xl mb-8">THE STRATEGIC ASK</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 relative z-10">
              <div>
                <p className="text-display-section !text-2xl text-white mb-4">$8.5M Investment Target</p>
                <p className="text-body-narrative text-white/50 mb-10 leading-relaxed">
                  Focusing on engineering velocity and infrastructure hub acquisition in the APJ and European sectors.
                </p>
                
                <Dialog>
                  <DialogTrigger asChild>
                    <Button className="h-14 px-10 bg-white text-black font-bold uppercase tracking-widest text-[10px] rounded-[8px] hover:scale-105 transition-all">
                      <Download className="w-4 h-4 mr-3" />
                      Download Pitch Deck
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="bg-black border border-white/10 max-w-md p-10">
                    <DialogHeader className="mb-8">
                      <DialogTitle className="text-display-section !text-xl text-white">SECURE ACCESS</DialogTitle>
                      <DialogDescription className="text-label-stats text-[10px] text-white/40 uppercase tracking-widest">Enter corporate email to receive investor manifest</DialogDescription>
                    </DialogHeader>
                    <form onSubmit={handleSubmit(onDownload)} className="space-y-6">
                      <div className="space-y-2">
                        <label className="text-label-stats text-[9px] text-white/40">Corporate Identity</label>
                        <Input 
                          {...register("email")}
                          placeholder="v.partner@firm.com" 
                          className="h-14 bg-white/5 border-white/10 rounded-[8px] focus:ring-1 focus:ring-white/20 transition-all"
                        />
                        {errors.email && <p className="text-[10px] text-red-400 font-bold uppercase tracking-widest">{errors.email.message as string}</p>}
                      </div>
                      <Button type="submit" className="w-full h-14 bg-white text-black font-bold uppercase tracking-widest text-[10px] rounded-[8px]">
                        Request Manifest
                      </Button>
                      <p className="text-[9px] text-center text-white/20 uppercase tracking-[0.2em]">Validated by ThiraiTerra Secure Infrastructure</p>
                    </form>
                  </DialogContent>
                </Dialog>
              </div>
              
              <div className="space-y-4">
                {[
                  { label: "Round Structure", val: "Priced Round • $45M Post" },
                  { label: "Lead Status", val: "Anchor Committed (30%)" },
                  { label: "Target Closing", val: "Q4 2026" },
                ].map((item, i) => (
                  <div key={i} className="p-5 rounded-[12px] bg-white/5 border border-white/5 flex flex-col gap-1">
                    <span className="text-label-stats text-[9px] text-white/30">{item.label}</span>
                    <span className="text-body-narrative !text-sm text-white font-medium">{item.val}</span>
                  </div>
                ))}
              </div>
            </div>
          </SpotlightCard>

          <SpotlightCard className="p-10 flex flex-col justify-between">
            <div>
              <h4 className="text-label-stats text-[11px] text-white mb-10 tracking-[0.2em]">Allocation of Proceeds</h4>
              <div className="space-y-8">
                {[
                  { l: "Cloud Engineering", p: "45%", w: "w-[45%]" },
                  { l: "Global Expansion", p: "30%", w: "w-[30%]" },
                  { l: "IP Acquisition", p: "15%", w: "w-[15%]" },
                  { l: "Operations", p: "10%", w: "w-[10%]" }
                ].map((item, i) => (
                  <div key={i} className="space-y-3">
                    <div className="flex justify-between text-label-stats text-[10px] uppercase font-bold tracking-widest">
                      <span className="text-white/40">{item.l}</span>
                      <span className="text-white">{item.p}</span>
                    </div>
                    <div className="viewfinder h-1.5 bg-white/5">
                      <div className={`h-full bg-white/40 ${item.w}`} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="mt-12 pt-8 border-t border-white/5">
              <div className="flex items-center gap-4">
                 <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                    <PieChart className="w-4 h-4 text-white/60" />
                 </div>
                 <span className="text-label-stats text-[9px] text-white/40 leading-relaxed uppercase tracking-[0.1em]">
                    Efficiency Optimized Deployment Protocol v1.2
                 </span>
              </div>
            </div>
          </SpotlightCard>
        </div>

        {/* Execution Roadmap Table */}
        <SpotlightCard className="overflow-hidden">
          <div className="p-10 border-b border-white/5 bg-white/[0.02]">
            <div className="flex justify-between items-center">
               <div>
                  <h3 className="text-display-section !text-2xl mb-1">Execution Roadmap</h3>
                  <p className="text-label-stats text-[10px] text-white/40">Phase-by-phase industry disruption schedule (2025-2027)</p>
               </div>
               <Badge className="bg-white/5 border-white/10 text-white/60 text-[9px] tracking-[0.2em] font-bold">Venture Sequence Alpha</Badge>
            </div>
          </div>
          <div className="overflow-x-auto">
             <table className="w-full text-left">
               <thead>
                  <tr className="bg-white/[0.01] border-b border-white/5">
                     <th className="px-10 py-6 text-label-stats text-[10px] text-white/30 uppercase tracking-[0.3em]">Phase</th>
                     <th className="px-10 py-6 text-label-stats text-[10px] text-white/30 uppercase tracking-[0.3em]">Core Objective</th>
                     <th className="px-10 py-6 text-label-stats text-[10px] text-white/30 uppercase tracking-[0.3em]">Market Signal</th>
                     <th className="px-10 py-6 text-label-stats text-[10px] text-white/30 uppercase tracking-[0.3em]">Status</th>
                  </tr>
               </thead>
               <tbody className="divide-y divide-white/5">
                 {[
                   { phase: "Structure Build", obj: "Meritocracy Alpha Layer", signal: "Feasibility", status: "Done" },
                   { phase: "Pilot (APJ)", obj: "Secure 5 Anchor Hubs", signal: "Market-Fit", status: "Active" },
                   { phase: "Ecosystem Cap", obj: "Rights Automation Protocol", signal: "Velocity", status: "Wait" },
                   { phase: "Dominance", obj: "Institutional Standard v1", signal: "Moat", status: "Project" }
                 ].map((row, i) => (
                   <tr key={i} className="group hover:bg-white/5 transition-colors">
                      <td className="px-10 py-8">
                         <span className="text-display-section !text-lg text-white mb-1 block">{row.phase}</span>
                         <span className="text-[10px] text-white/20 uppercase tracking-widest font-bold">Protocol Stage {i+1}</span>
                      </td>
                      <td className="px-10 py-8">
                         <p className="text-body-narrative !text-sm text-white/60">{row.obj}</p>
                      </td>
                      <td className="px-10 py-8">
                         <Badge className="bg-white/5 border-white/10 text-white/40 text-[9px] px-3">{row.signal}</Badge>
                      </td>
                      <td className="px-10 py-8">
                         <div className="flex items-center gap-3">
                            <div className={`w-1.5 h-1.5 rounded-full ${row.status === 'Done' ? 'bg-white' : row.status === 'Active' ? 'bg-white animate-pulse' : 'bg-white/10'}`} />
                            <span className="text-label-stats text-[10px] text-white tracking-widest">{row.status}</span>
                         </div>
                      </td>
                   </tr>
                 ))}
               </tbody>
             </table>
          </div>
        </SpotlightCard>
      </main>
    </div>
  );
}
