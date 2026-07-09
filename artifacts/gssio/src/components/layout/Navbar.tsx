import { Link, useLocation } from "wouter";
import { Menu, X, ChevronDown } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const pillars = [
  { name: "Global Health", path: "/what-we-do#health" },
  { name: "Education For All", path: "/what-we-do#education" },
  { name: "Climate Action", path: "/what-we-do#climate" },
  { name: "Economic Equity", path: "/what-we-do#equity" },
  { name: "Clean Water", path: "/what-we-do#water" },
  { name: "Human Rights", path: "/what-we-do#rights" },
  { name: "Disaster Relief", path: "/what-we-do#relief" },
];

export function Navbar() {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isActive = (path: string) => location === path;

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 z-50">
          <div className="w-10 h-10 bg-primary text-white flex items-center justify-center rounded-sm font-bold text-xl tracking-tighter">
            GS
          </div>
          <span className="font-bold text-xl tracking-tight text-primary hidden sm:inline-block">
            GSSIO
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          <Link
            href="/who-we-are"
            className={`text-sm font-medium transition-colors hover:text-secondary ${
              isActive("/who-we-are") ? "text-primary" : "text-foreground/80"
            }`}
          >
            Who We Are
          </Link>
          
          <div className="group relative py-8">
            <Link
              href="/what-we-do"
              className={`text-sm font-medium flex items-center gap-1 transition-colors hover:text-secondary ${
                isActive("/what-we-do") ? "text-primary" : "text-foreground/80"
              }`}
            >
              What We Do <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
            </Link>
            
            <div className="absolute top-full left-1/2 -translate-x-1/2 w-[600px] bg-white border shadow-xl rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 grid grid-cols-2 p-6 gap-6">
              <div className="col-span-2 pb-4 border-b">
                <h3 className="font-semibold text-lg text-primary">Our 7 Programme Pillars</h3>
                <p className="text-sm text-muted-foreground mt-1">Comprehensive action across global challenges.</p>
              </div>
              <div className="flex flex-col gap-3">
                {pillars.slice(0, 4).map((pillar) => (
                  <Link key={pillar.name} href={pillar.path} className="text-sm font-medium hover:text-secondary hover:underline">
                    {pillar.name}
                  </Link>
                ))}
              </div>
              <div className="flex flex-col gap-3">
                {pillars.slice(4).map((pillar) => (
                  <Link key={pillar.name} href={pillar.path} className="text-sm font-medium hover:text-secondary hover:underline">
                    {pillar.name}
                  </Link>
                ))}
                <Link href="/what-we-do" className="text-sm font-bold text-primary hover:text-secondary mt-2">
                  View All Programmes &rarr;
                </Link>
              </div>
            </div>
          </div>

          <Link
            href="/impact-reports"
            className={`text-sm font-medium transition-colors hover:text-secondary ${
              isActive("/impact-reports") ? "text-primary" : "text-foreground/80"
            }`}
          >
            Impact & Reports
          </Link>
          
          <Link
            href="/stories"
            className={`text-sm font-medium transition-colors hover:text-secondary ${
              isActive("/stories") ? "text-primary" : "text-foreground/80"
            }`}
          >
            Stories
          </Link>
          
          <Link
            href="/get-involved"
            className={`text-sm font-medium transition-colors hover:text-secondary ${
              isActive("/get-involved") ? "text-primary" : "text-foreground/80"
            }`}
          >
            Get Involved
          </Link>
        </nav>

        {/* CTA & Mobile Toggle */}
        <div className="flex items-center gap-4">
          <Link href="/donate" className="hidden sm:inline-flex">
            <Button className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold px-8 h-11 rounded-sm shadow-sm transition-all hover:scale-105 active:scale-95">
              Donate
            </Button>
          </Link>
          
          <button
            className="lg:hidden p-2 text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-20 bg-white z-40 overflow-y-auto border-t">
          <nav className="flex flex-col p-6 gap-6">
            <Link href="/who-we-are" onClick={() => setMobileMenuOpen(false)} className="text-lg font-medium text-foreground">
              Who We Are
            </Link>
            <div className="flex flex-col gap-4">
              <Link href="/what-we-do" onClick={() => setMobileMenuOpen(false)} className="text-lg font-medium text-foreground">
                What We Do
              </Link>
              <div className="pl-4 flex flex-col gap-3 border-l-2 border-muted">
                {pillars.map((pillar) => (
                  <Link key={pillar.name} href={pillar.path} onClick={() => setMobileMenuOpen(false)} className="text-muted-foreground">
                    {pillar.name}
                  </Link>
                ))}
              </div>
            </div>
            <Link href="/impact-reports" onClick={() => setMobileMenuOpen(false)} className="text-lg font-medium text-foreground">
              Impact & Reports
            </Link>
            <Link href="/stories" onClick={() => setMobileMenuOpen(false)} className="text-lg font-medium text-foreground">
              Stories
            </Link>
            <Link href="/get-involved" onClick={() => setMobileMenuOpen(false)} className="text-lg font-medium text-foreground">
              Get Involved
            </Link>
            <Link href="/donate" onClick={() => setMobileMenuOpen(false)} className="mt-4">
              <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-bold h-12 rounded-sm text-lg">
                Donate Now
              </Button>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
