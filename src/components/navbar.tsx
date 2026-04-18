import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { 
  Sheet, 
  SheetContent, 
  SheetHeader, 
  SheetTitle, 
  SheetTrigger 
} from "@/components/ui/sheet";

export function Navbar() {
  const navLinks = [
    { href: "/discover", label: "Discovery" },
    { href: "/investors", label: "Investors" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-white/10 bg-background/80 backdrop-blur-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-6">
        <div className="flex items-center gap-10">
          <Link href="/" className="flex items-center gap-2 group">
            <span className="text-display-section !text-xl tracking-[-0.03em] text-white">
              THIRAI<span className="text-white/40 italic">TERRA</span>
            </span>
          </Link>
          
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="text-label-stats text-[10px] text-white/60 hover:text-white transition-colors">
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="hidden sm:block">
            <Link href="/investors">
              <Button variant="outline" className="h-9 px-5 border-white/10 bg-white/5 text-[9px] font-bold uppercase tracking-widest rounded-full hover:bg-white/10">
                Partner Access
              </Button>
            </Link>
          </div>

          {/* Mobile Menu */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-white">
                  <Menu className="w-5 h-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="bg-black border-white/10 p-10 flex flex-col justify-between">
                <div>
                  <SheetHeader className="mb-12 text-left">
                    <SheetTitle className="text-display-section !text-lg text-white">Navigation</SheetTitle>
                  </SheetHeader>
                  <div className="flex flex-col gap-8">
                    {navLinks.map((link) => (
                      <Link key={link.href} href={link.href} className="text-display-section !text-2xl text-white/60 hover:text-white transition-colors">
                        {link.label}
                      </Link>
                    ))}
                  </div>
                </div>
                <div className="pt-10 border-t border-white/5">
                  <Link href="/investors">
                    <Button className="w-full h-14 bg-white text-black font-bold uppercase tracking-widest text-[10px] rounded-full">
                      Partner Access
                    </Button>
                  </Link>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}
