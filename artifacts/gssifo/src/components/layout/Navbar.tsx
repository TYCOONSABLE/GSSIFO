import { Link, useLocation } from "wouter";
import { Menu, X, ChevronDown, Smile } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import logoImage from "@/assets/images/gssifo-combined-horizontal.png";

const pillars = [
  { name: "Community Health", path: "/what-we-do#community-health" },
  { name: "Youth Education", path: "/what-we-do#youth-education" },
  { name: "Nutrition", path: "/what-we-do#nutrition" },
  { name: "Climate Action", path: "/what-we-do#climate-action" },
  { name: "Women empowerment", path: "/what-we-do#women-empowerment" },
  { name: "Water Conservation", path: "/what-we-do#water-conservation" },
  { name: "Human Rights", path: "/what-we-do#human-rights" },
  { name: "Drug Awareness", path: "/what-we-do#drug-awareness" },
];

export function Navbar() {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [banner, setBanner] = useState({
    text: "Join our upcoming Responsive Youth Program",
    linkText: "Register now.",
    linkUrl: "/summit"
  });

  useEffect(() => {
    const apiBase = import.meta.env.VITE_API_URL || "";
    fetch(`${apiBase}/api/banner`)
      .then(res => res.json())
      .then(data => {
        if (data && data.text) {
          const text = data.text.includes("Global Sustainability Summit")
            ? "Join our upcoming Responsive Youth Program"
            : data.text;
          setBanner({ ...data, text });
        }
      })
      .catch(() => {});
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      // Trigger sticky header when scrolled past the main header area (approx 160px)
      if (window.scrollY > 160) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (path: string) => location === path;

  const handleLogoClick = (e: React.MouseEvent) => {
    if (location === "/") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <>
      {/* ========================================================================= */}
      {/* 1. MAIN HEADER (3 Parts / Rows as shown in the reference image) */}
      {/* ========================================================================= */}
      <div className="w-full relative bg-white animate-fade-in">
        {/* Part 1 (Banner): Blue banner with white text */}
        <div className="bg-[#0c57cf] text-white py-2.5 px-4 text-center text-sm font-medium tracking-wide">
          {banner.text} <Link href={banner.linkUrl} className="underline font-bold ml-1 hover:text-slate-100 transition-colors">{banner.linkText}</Link>
        </div>

        {/* Part 2 (Logo Row): White full-width background with centered logo */}
        <div className="w-full bg-white border-b border-slate-100/50 py-3 sm:py-4 flex items-center justify-center relative">
          <Link href="/" onClick={handleLogoClick} className="flex items-center justify-center h-12 sm:h-16 lg:h-20 w-auto select-none cursor-pointer">
            <img 
              src={logoImage} 
              alt="GSSIFO Logo" 
              className="h-full w-auto object-contain" 
            />
          </Link>

          {/* Mobile hamburger menu (Aligned to the right side of the Logo Row) */}
          <div className="absolute right-4 top-1/2 -translate-y-1/2 lg:hidden">
            <button
              className="p-2 text-slate-800 hover:bg-slate-100 rounded-md transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Part 3 (Navigation & Volunteer Row): Solid blue background with centered nav and absolute right Volunteer button */}
        <div className="hidden lg:flex w-full bg-[#0c57cf] text-white py-2.5 relative items-center justify-center">
          {/* Centered Navigation Links */}
          <div className="container mx-auto px-4 max-w-[1280px] flex items-center justify-center">
            <nav className="flex items-center gap-8 xl:gap-12">
              {/* WHAT WE DO Dropdown */}
              <div className="group relative py-2">
                <Link
                  href="/what-we-do"
                  className={`text-sm font-semibold uppercase tracking-wider transition-colors hover:text-slate-200 flex items-center gap-1.5 ${
                    isActive("/what-we-do") ? "text-white border-b-2 border-white pb-1" : "text-white/95"
                  }`}
                >
                  What We Do <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
                </Link>
                
                {/* Mini Popover (Dropdown) */}
                <div className="absolute top-full left-1/2 -translate-x-1/2 w-[540px] bg-white border border-slate-100 shadow-xl rounded-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 grid grid-cols-2 p-5 gap-4 text-slate-800 z-50 mt-1">
                  <div className="col-span-2 pb-3 border-b border-slate-100">
                    <h3 className="font-bold text-base text-[#0c57cf] tracking-wide">Our 8 Programme Pillars</h3>
                    <p className="text-[11px] text-slate-400 mt-0.5 font-medium normal-case tracking-normal">Comprehensive action across global challenges.</p>
                  </div>
                  <div className="flex flex-col gap-2.5">
                    {pillars.slice(0, 4).map((pillar) => (
                      <Link key={pillar.name} href={pillar.path} className="text-xs font-semibold hover:text-[#0c57cf] hover:underline normal-case tracking-normal text-slate-600 transition-colors">
                        {pillar.name}
                      </Link>
                    ))}
                  </div>
                  <div className="flex flex-col gap-2.5">
                    {pillars.slice(4).map((pillar) => (
                      <Link key={pillar.name} href={pillar.path} className="text-xs font-semibold hover:text-[#0c57cf] hover:underline normal-case tracking-normal text-slate-600 transition-colors">
                        {pillar.name}
                      </Link>
                    ))}
                    <Link href="/what-we-do" className="text-xs font-bold text-[#0c57cf] hover:text-[#206ef2] mt-1.5 normal-case tracking-normal flex items-center">
                      View All Programmes &rarr;
                    </Link>
                  </div>
                </div>
              </div>

              {/* WHO WE ARE */}
              <Link
                href="/who-we-are"
                className={`text-sm font-semibold uppercase tracking-wider transition-colors hover:text-slate-200 py-2 ${
                  isActive("/who-we-are") ? "text-white border-b-2 border-white pb-1" : "text-white/95"
                }`}
              >
                Who We Are
              </Link>

              {/* GET INVOLVED */}
              <Link
                href="/get-involved"
                className={`text-sm font-semibold uppercase tracking-wider transition-colors hover:text-slate-200 py-2 ${
                  isActive("/get-involved") ? "text-white border-b-2 border-white pb-1" : "text-white/95"
                }`}
              >
                Get Involved
              </Link>
            </nav>
          </div>

          {/* Volunteer Button independently positioned on the far right (~40px from right edge) */}
          <div className="absolute right-8 xl:right-10 top-1/2 -translate-y-1/2">
            <Link href="/get-involved/opportunities">
              <Button 
                className="group font-bold rounded-lg px-5 h-9 bg-white text-[#0c57cf] hover:bg-slate-50 border border-transparent shadow-sm flex items-center gap-1.5 transition-all duration-300 text-xs uppercase tracking-wider"
              >
                <Smile className="w-4 h-4 transition-all duration-300 group-hover:scale-125 group-hover:rotate-12 group-hover:animate-bounce text-[#0c57cf]" />
                <span>Volunteer</span>
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 2. COMPACT STICKY HEADER (Slides down when scrolled, completely glitch-free) */}
      {/* ========================================================================= */}
      <div 
        className={`fixed top-0 left-0 right-0 z-[100] bg-white text-slate-800 shadow-md transition-all duration-300 transform ${
          scrolled ? "translate-y-0 opacity-100 pointer-events-auto" : "-translate-y-full opacity-0 pointer-events-none"
        }`}
      >
        <div className="w-full relative h-16 flex items-center justify-center px-4">
          {/* Logo on the left */}
          <div className="absolute left-8 xl:left-10 top-1/2 -translate-y-1/2">
            <Link href="/" onClick={handleLogoClick} className="flex items-center h-10 sm:h-12 w-auto select-none cursor-pointer">
              <img src={logoImage} alt="GSSIFO Logo" className="h-full w-auto object-contain" />
            </Link>
          </div>

          {/* Navigation links centered (Desktop) */}
          <nav className="hidden lg:flex items-center gap-8 xl:gap-12 absolute left-1/2 -translate-x-1/2">
            <div className="group relative py-3.5">
              <Link
                href="/what-we-do"
                className={`text-sm font-semibold uppercase tracking-wider transition-colors hover:text-[#0c57cf] flex items-center gap-1.5 ${
                  isActive("/what-we-do") ? "text-[#0c57cf] border-b-2 border-[#0c57cf] pb-1" : "text-slate-600"
                }`}
              >
                What We Do <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
              </Link>
              
              {/* Dropdown Menu */}
              <div className="absolute top-full left-1/2 -translate-x-1/2 w-[540px] bg-white border border-slate-100 shadow-xl rounded-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 grid grid-cols-2 p-5 gap-4 text-slate-800 z-50 mt-1">
                <div className="col-span-2 pb-3 border-b border-slate-100">
                  <h3 className="font-bold text-base text-[#0c57cf] tracking-wide">Our 8 Programme Pillars</h3>
                  <p className="text-[11px] text-slate-400 mt-0.5 font-medium normal-case tracking-normal">Comprehensive action across global challenges.</p>
                </div>
                <div className="flex flex-col gap-2.5">
                  {pillars.slice(0, 4).map((pillar) => (
                    <Link key={pillar.name} href={pillar.path} className="text-xs font-semibold hover:text-[#0c57cf] hover:underline normal-case tracking-normal text-slate-600 transition-colors">
                      {pillar.name}
                    </Link>
                  ))}
                </div>
                <div className="flex flex-col gap-2.5">
                  {pillars.slice(4).map((pillar) => (
                    <Link key={pillar.name} href={pillar.path} className="text-xs font-semibold hover:text-[#0c57cf] hover:underline normal-case tracking-normal text-slate-600 transition-colors">
                      {pillar.name}
                    </Link>
                  ))}
                  <Link href="/what-we-do" className="text-xs font-bold text-[#0c57cf] hover:text-[#206ef2] mt-1.5 normal-case tracking-normal flex items-center">
                    View All Programmes &rarr;
                  </Link>
                </div>
              </div>
            </div>

            <Link
              href="/who-we-are"
              className={`text-sm font-semibold uppercase tracking-wider transition-colors hover:text-[#0c57cf] py-3.5 ${
                isActive("/who-we-are") ? "text-[#0c57cf] border-b-2 border-[#0c57cf] pb-1" : "text-slate-600"
              }`}
            >
              Who We Are
            </Link>
            <Link
              href="/get-involved"
              className={`text-sm font-semibold uppercase tracking-wider transition-colors hover:text-[#0c57cf] py-3.5 ${
                isActive("/get-involved") ? "text-[#0c57cf] border-b-2 border-[#0c57cf] pb-1" : "text-slate-600"
              }`}
            >
              Get Involved
            </Link>
          </nav>

          {/* Volunteer Button on the Far Right */}
          <div className="absolute right-8 xl:right-10 top-1/2 -translate-y-1/2 flex items-center gap-4">
            <Link href="/get-involved/opportunities" className="hidden lg:inline-flex">
              <Button 
                className="group font-bold rounded-lg px-5 h-9 bg-[#0c57cf] text-white hover:bg-[#0c57cf]/90 border border-transparent shadow-sm flex items-center gap-1.5 transition-all duration-300 text-xs uppercase tracking-wider"
              >
                <Smile className="w-4 h-4 transition-all duration-300 group-hover:scale-125 group-hover:rotate-12 group-hover:animate-bounce group-hover:text-amber-300" />
                <span>Volunteer</span>
              </Button>
            </Link>

            {/* Mobile hamburger menu on scroll right side */}
            <button
              className="lg:hidden p-2 text-slate-800 hover:bg-slate-100 rounded-md transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 3. MOBILE MENU DRAWER (Responsive overlay) */}
      {/* ========================================================================= */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-14 bg-white z-[90] overflow-y-auto shadow-xl text-slate-800 animate-fade-in">
          <nav className="flex flex-col p-6 gap-6">
            <div className="flex flex-col gap-4">
              <Link href="/what-we-do" onClick={() => setMobileMenuOpen(false)} className="text-lg font-medium text-foreground uppercase tracking-wide">
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
            <Link href="/who-we-are" onClick={() => setMobileMenuOpen(false)} className="text-lg font-medium text-foreground uppercase tracking-wide">
              Who We Are
            </Link>
            <Link href="/get-involved" onClick={() => setMobileMenuOpen(false)} className="text-lg font-medium text-foreground uppercase tracking-wide">
              Get Involved
            </Link>
            <div className="mt-4 flex flex-col gap-3">
              <Link href="/get-involved/opportunities" onClick={() => setMobileMenuOpen(false)}>
                <Button variant="secondary" className="w-full rounded-lg h-12 text-lg flex items-center justify-center gap-2 bg-[#0c57cf] text-white">
                  <Smile className="w-5 h-5" />
                  <span>Volunteer</span>
                </Button>
              </Link>
            </div>
          </nav>
        </div>
      )}
    </>
  );
}
