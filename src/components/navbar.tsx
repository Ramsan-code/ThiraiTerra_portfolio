import Link from "next/link";

export function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-white/10 bg-background/80 backdrop-blur-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-6">
        <div className="flex items-center gap-10">
          <Link href="/" className="flex items-center gap-2 group">
            <span className="text-display-section !text-xl tracking-[-0.03em] text-white">
              THIRAI<span className="text-white/40 italic">TERRA</span>
            </span>
          </Link>
        </div>
      </div>
    </nav>
  );
}
