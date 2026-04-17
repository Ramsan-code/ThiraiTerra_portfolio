"use client";

import { Navbar } from "@/components/navbar";
import { 
  ShieldCheck, 
  TrendingUp, 
  Zap, 
  DollarSign, 
  Lock, 
  Download,
  ArrowUpRight,
  ChevronRight,
  LineChart as LineIcon,
  Globe,
  PieChart
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
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  AreaChart,
  Area
} from "recharts";

const GROWTH_PROJECTION = [
  { year: "2024", users: 1200, revenue: 0.5 },
  { year: "2025", users: 4500, revenue: 1.8 },
  { year: "2026", users: 15600, revenue: 5.2 },
  { year: "2027", users: 42000, revenue: 14.5 },
  { year: "2028", users: 120000, revenue: 42.0 },
];

export default function VenturePortal() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="container mx-auto px-6 py-12">
        {/* Top Branding Bar */}
        <div className="flex items-center justify-between mb-16 pb-8 border-b border-white/5">
           <div>
             <h1 className="text-headline-lg !text-4xl">VENTURE <span className="text-accent underline decoration-accent/20 underline-offset-8">PORTAL</span></h1>
             <p className="text-label-sm text-muted-foreground uppercase tracking-[0.3em] font-bold mt-2">ThiraiTerra • Investor Relations Management</p>
           </div>
           <div className="flex items-center gap-4">
              <Badge className="bg-status-mint/10 text-status-mint border-status-mint/30 px-3 py-1 font-bold">Verified Accredited</Badge>
              <div className="w-10 h-10 rounded-full bg-secondary border border-white/10 flex items-center justify-center">
                 <ShieldCheck className="w-5 h-5 text-accent" />
              </div>
           </div>
        </div>

        {/* Anchoring Effect Section: Most Impressive Metrics Top Left */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          <div className="lg:col-span-4 space-y-6">
            <Card className="bg-accent/10 border-accent/20 spotlight group">
              <CardContent className="p-10 text-center lg:text-left">
                <p className="text-label-sm uppercase font-bold text-accent mb-4 tracking-widest">Global TAM</p>
                <h2 className="text-display-lg !text-5xl text-white mb-2">$420B</h2>
                <p className="text-[10px] text-accent/80 font-bold uppercase tracking-[0.2em] mb-8">Unaddressed Production Inefficiency</p>
                
                <div className="space-y-4">
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-gray-400">Inefficiency Leakage</span>
                    <span className="font-bold text-white">15.4% / Project</span>
                  </div>
                  <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full bg-accent w-[75%]" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="grid grid-cols-2 gap-6">
              {[
                { label: "Target IRR", val: "28%", icon: TrendingUp },
                { label: "Exit Path", val: "IPO/M&A", icon: Zap },
              ].map((stat, i) => (
                <Card key={i} className="bg-secondary/40 border-white/5 p-6 hover:border-accent/20 transition-all">
                  <div className="p-3 rounded-xl bg-background w-fit mb-4">
                    <stat.icon className="w-4 h-4 text-accent" />
                  </div>
                  <p className="text-[9px] uppercase font-bold text-muted-foreground mb-1">{stat.label}</p>
                  <p className="text-xl font-bold text-white">{stat.val}</p>
                </Card>
              ))}
            </div>
          </div>

          <div className="lg:col-span-8">
            <Card className="h-full bg-secondary/30 border-white/5 p-8 relative blueprint">
              <CardHeader className="px-0 pt-0 mb-8">
                <div className="flex justify-between items-center">
                  <div>
                    <CardTitle className="text-headline-lg !text-2xl mb-1">Growth Projection (2024 - 2028)</CardTitle>
                    <CardDescription className="text-xs font-medium text-gray-400">Revenue scaling through architected infrastructure adoption (USD Millions)</CardDescription>
                  </div>
                  <Tabs value="revenue" className="bg-background/40 p-1 rounded-lg border border-white/5 hidden sm:flex">
                     <span className="px-3 py-1 text-[10px] font-bold rounded-md bg-accent text-white">REVENUE</span>
                  </Tabs>
                </div>
              </CardHeader>
              <div className="h-[350px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={GROWTH_PROJECTION}>
                    <defs>
                      <linearGradient id="colorRev" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#D88A4A" stopOpacity={0.3}/>
                        <stop offset="95%" stopColor="#D88A4A" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" />
                    <XAxis dataKey="year" stroke="rgba(255,255,255,0.3)" fontSize={10} tickLine={false} axisLine={false} />
                    <YAxis stroke="rgba(255,255,255,0.3)" fontSize={10} tickLine={false} axisLine={false} tickFormatter={(v) => `$${v}M`} />
                    <Tooltip 
                      contentStyle={{ backgroundColor: "#081624", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "12px" }}
                      labelStyle={{ color: "#F5F5F5", fontSize: "12px", fontWeight: "bold" }}
                    />
                    <Area type="monotone" dataKey="revenue" stroke="#D88A4A" fillOpacity={1} fill="url(#colorRev)" strokeWidth={3} />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </Card>
          </div>
        </div>

        {/* The "Ask" Slide Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
           <Card className="lg:col-span-2 bg-secondary/30 border-white/5 relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:scale-110 transition-transform">
                 <DollarSign className="w-32 h-32" />
              </div>
              <CardContent className="p-8">
                 <Badge className="bg-accent text-white mb-6 font-bold uppercase tracking-widest text-[9px]">Series A Offering</Badge>
                 <h2 className="text-display-lg !text-4xl mb-6">THE STRATEGIC ASK</h2>
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                   <div>
                     <p className="text-title-md text-white mb-4">$8.5M Investment Target</p>
                     <p className="text-body-reg text-muted-foreground mb-8">Expanding engineering velocity and acquiring regional hub rights in the APJ and European sectors.</p>
                     

                   </div>
                   
                   <div className="space-y-6">
                      <div className="p-4 rounded-xl bg-background/50 border border-white/5">
                        <p className="text-[10px] font-bold text-accent uppercase mb-2">Round Structure</p>
                        <p className="text-sm font-medium text-white">Priced Round • Post-Money VAL: $45M</p>
                      </div>
                      <div className="p-4 rounded-xl bg-background/50 border border-white/5">
                        <p className="text-[10px] font-bold text-accent uppercase mb-2">Lead Status</p>
                        <p className="text-sm font-medium text-white">Anchor Committed (30% Fill)</p>
                      </div>
                      <div className="p-4 rounded-xl bg-background/50 border border-white/5">
                        <p className="text-[10px] font-bold text-accent uppercase mb-2">Round Closing</p>
                        <p className="text-sm font-medium text-white">Target Date: Q4 2026</p>
                      </div>
                   </div>
                 </div>
              </CardContent>
           </Card>

           <Card className="bg-secondary/40 border-white/5 p-8 flex flex-col justify-between">
              <div>
                <h4 className="text-headline-lg !text-xl mb-4">ALLOCATION OF PROCEEDS</h4>
                <div className="space-y-4">
                  {[
                    { l: "R&D / Cloud Engineering", p: "45%", w: "w-[45%]" },
                    { l: "Global Market Expansion", p: "30%", w: "w-[30%]" },
                    { l: "Strategic IP Acquisition", p: "15%", w: "w-[15%]" },
                    { l: "Operations & Admin", p: "10%", w: "w-[10%]" }
                  ].map((item, i) => (
                    <div key={i} className="space-y-1">
                      <div className="flex justify-between text-[11px] font-bold">
                        <span className="text-gray-400">{item.l}</span>
                        <span className="text-white">{item.p}</span>
                      </div>
                      <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
                        <div className={`h-full bg-accent ${item.w}`} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-8">
                <p className="text-[10px] text-muted-foreground italic mb-4">"Deployment focused on scaling the verified meritocracy layer across 4 key regional unions."</p>
                <div className="flex items-center gap-3 p-3 rounded-lg bg-accent/5 border border-accent/20">
                   <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center">
                     <PieChart className="w-4 h-4 text-white" />
                   </div>
                   <span className="text-[10px] font-bold uppercase tracking-widest text-accent">Efficiency Optimized Deployment</span>
                </div>
              </div>
           </Card>
        </div>

        {/* Venture Roadmap Table View */}
        <Card className="bg-secondary/30 border-white/5 overflow-hidden">
          <CardHeader className="p-8 border-b border-white/5 bg-background/20">
            <div className="flex justify-between items-center">
               <div>
                  <CardTitle className="text-headline-lg !text-2xl mb-1">Execution Roadmap</CardTitle>
                  <CardDescription className="text-xs">Phase-by-phase disruption schedule (2025-2027)</CardDescription>
               </div>
               <Badge variant="outline" className="border-accent/30 text-accent">Venture Sequence Alpha</Badge>
            </div>
          </CardHeader>
          <CardContent className="p-0">
             <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead>
                     <tr className="bg-white/5 border-b border-white/5">
                        <th className="px-8 py-5 text-[10px] uppercase font-bold tracking-[0.3em] text-gray-500">Milestone Phase</th>
                        <th className="px-8 py-5 text-[10px] uppercase font-bold tracking-[0.3em] text-gray-500">Core Objective</th>
                        <th className="px-8 py-5 text-[10px] uppercase font-bold tracking-[0.3em] text-gray-500">Venture Signal</th>
                        <th className="px-8 py-5 text-[10px] uppercase font-bold tracking-[0.3em] text-gray-500">Status</th>
                        <th className="px-8 py-5 text-[10px] uppercase font-bold tracking-[0.3em] text-gray-500 text-right">Schedule</th>
                     </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5">
                    {[
                      { phase: "Infrastructure Build", obj: "Launch Meritocracy Alpha Layer", signal: "Technical Feasibility", status: "Completed", date: "Q2 2025" },
                      { phase: "Regional Pilot (APJ)", obj: "Secure 5 Anchor Studios", signal: "Product-Market Fit", status: "Active", date: "Q1 2026" },
                      { phase: "Ecosystem Expansion", obj: "Automation of Multi-Currency Rights", signal: "Revenue Velocity", status: "Upcoming", date: "Q3 2026" },
                      { phase: "Market Dominance", obj: "Series B Growth Trajectory", signal: "Defensibility / Moat", status: "Projected", date: "Q2 2027" }
                    ].map((row, i) => (
                      <tr key={i} className="group hover:bg-white/5 transition-colors">
                         <td className="px-8 py-6">
                            <p className="text-sm font-bold text-white mb-0.5">{row.phase}</p>
                            <div className="flex items-center gap-1.5 opacity-40">
                               <Globe className="w-3 h-3" />
                               <span className="text-[10px]">Global Priority</span>
                            </div>
                         </td>
                         <td className="px-8 py-6 text-xs text-gray-400 font-medium">
                            {row.obj}
                         </td>
                         <td className="px-8 py-6">
                            <Badge className="bg-accent/10 text-accent text-[9px] uppercase tracking-tighter">{row.signal}</Badge>
                         </td>
                         <td className="px-8 py-6">
                            <div className="flex items-center gap-2">
                               <div className={`w-1.5 h-1.5 rounded-full ${row.status === 'Completed' ? 'bg-status-mint' : row.status === 'Active' ? 'bg-blue-400 animate-pulse' : 'bg-gray-600'}`} />
                               <span className="text-[10px] font-bold text-white uppercase">{row.status}</span>
                            </div>
                         </td>
                         <td className="px-8 py-6 text-right">
                             <span className="text-xs font-mono text-gray-400">{row.date}</span>
                         </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
             </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
