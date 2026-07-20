import { Link } from "wouter";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  ArrowRight, Globe2, BookOpen, Droplets, HeartHandshake, Sprout,
  Coins, Shield, ChevronLeft, ChevronRight, Globe, Mail, MapPin,
  AlertCircle, AlertTriangle, Smile, Heart, Utensils, Award
} from "lucide-react";

import heroCarousel1 from "@/assets/images/hero-carousel-1.jpg";
import heroCarousel2 from "@/assets/images/hero-carousel-2.jpg";
import heroCarousel3 from "@/assets/images/hero-carousel-3.jpg";
import mapImage from "@/assets/images/asian-map.jpg";
import coverUrbanMigration from "@/assets/images/cover-urban-migration.webp";
import coverClimateResilience from "@/assets/images/cover-climate-resilience.webp";
import coverGenderParity from "@/assets/images/cover-gender-parity.webp";
import coverSustainabilityIndex from "@/assets/images/cover-sustainability-index.webp";
import projDigitalLiteracy from "@/assets/images/project-digital-literacy.jpg";
import projGreenValley from "@/assets/images/project-green-valley.jpg";
import projWomenEmpowerment from "@/assets/images/project-women-empowerment.jpg";
import storyPortrait from "@/assets/images/story-portrait.webp";
import news1 from "@/assets/images/news_1.webp";
import news2 from "@/assets/images/news_2.webp";
import news3 from "@/assets/images/news_3.webp";
import spotlightBg from "@/assets/images/spotlight-bg.webp";
import volunteerAction from "@/assets/images/volunteer-action.webp";

const defaultSlides = [
  { src: heroCarousel1, alt: "GSSIFO community team and volunteers" },
  { src: heroCarousel2, alt: "GSSIFO clean energy initiatives and solar panels" },
  { src: heroCarousel3, alt: "GSSIFO community learning and garden programs" },
];

const MONTH_MAP: Record<string, number> = {
  JAN: 1, FEB: 2, MAR: 3, APR: 4, MAY: 5, JUN: 6,
  JUL: 7, AUG: 8, SEP: 9, OCT: 10, NOV: 11, DEC: 12
};

export default function Home() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [heroSlidesList, setHeroSlidesList] = useState(defaultSlides);

  const defaultNews = [
    { title: "GSSIFO announces $50M expansion to clean energy initiatives across Sub-Saharan Africa", img: news1, date: "Oct 12, 2024" },
    { title: "New partnership with global health organizations to deliver 1M vaccines", img: news2, date: "Oct 05, 2024" },
    { title: "Annual Sustainability Summit concludes with historic climate pledge from 20 nations", img: news3, date: "Sep 28, 2024" }
  ];
  const [newsList, setNewsList] = useState(defaultNews);

  const defaultEvents = [
    { date: "14", month: "AUG", title: "GSSIFO Sports Summit (Trichy)", loc: "Trichy", desc: "Join our flagship sports event featuring competitions, teamwork, leadership, and community participation." },
    { date: "10", month: "SEP", title: "GSSIFO Sports Summit (Coimbatore)", loc: "Coimbatore", desc: "Participate in our flagship sports summit that brings together youth through sports, fitness, and leadership activities." },
    { date: "05", month: "OCT", title: "GSSIFO Sports Summit (Madurai)", loc: "Madurai", desc: "Celebrate sportsmanship and community engagement at the GSSIFO Sports Summit in Madurai." },
    { date: "31", month: "JUL", title: "Responsive Youth Program", loc: "Youth Development, Reading, Teamwork, Public Hygiene", desc: "An interactive youth development program that encourages leadership, teamwork, reading habits, and community service through public hygiene initiatives." },
    { date: "30", month: "AUG", title: "Job Fair", loc: "Providing Employment Opportunities", desc: "Connect job seekers with employers, explore career opportunities, receive career guidance, and participate in recruitment drives." }
  ];
  const [eventsList, setEventsList] = useState(defaultEvents);

  const sortedEvents = [...eventsList].sort((a, b) => {
    const getWeight = (e: any) => {
      const m = (e.month || "").toUpperCase();
      const dStr = e.date || "";
      if (m in MONTH_MAP) {
        const d = parseInt(dStr, 10);
        if (!isNaN(d)) {
          return MONTH_MAP[m] * 100 + d;
        }
      }
      return 9999;
    };
    return getWeight(a) - getWeight(b);
  });

  useEffect(() => {
    const apiBase = import.meta.env.VITE_API_URL || "";
    fetch(`${apiBase}/api/hero`)
      .then(res => res.json())
      .then(data => {
        if (Array.isArray(data) && data.length > 0) {
          setHeroSlidesList(data.map((src: string) => ({ src, alt: "GSSIFO Community Slider" })));
        }
      })
      .catch(() => { });

    fetch(`${apiBase}/api/news`)
      .then(res => res.json())
      .then(data => {
        if (Array.isArray(data) && data.length > 0) {
          setNewsList(data);
        }
      })
      .catch(() => { });

    fetch(`${apiBase}/api/events`)
      .then(res => res.json())
      .then(data => {
        if (Array.isArray(data) && data.length > 0) {
          setEventsList(data);
        }
      })
      .catch(() => { });
  }, []);

  useEffect(() => {
    if (heroSlidesList.length === 0) return;
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % heroSlidesList.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [heroSlidesList]);

  return (
    <div className="flex flex-col font-sans">
      {/* 1. Hero Banner */}
      <section className="relative h-[500px] sm:h-[650px] lg:h-[870px] w-full overflow-hidden">
        <div className="absolute inset-0 z-0">
          {heroSlidesList.map((slide, index) => (
            <img
              key={slide.src}
              src={slide.src}
              alt={slide.alt}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${index === activeSlide ? "opacity-70 z-10" : "opacity-0 z-0"
                }`}
            />
          ))}
          <div className="absolute inset-0 bg-foreground/25 z-20" />
        </div>

        <div className="relative z-30 h-full max-w-[1280px] mx-auto px-4 lg:px-16 flex flex-col justify-center text-white">
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight max-w-4xl mb-4 sm:mb-6 leading-[1.1] animate-in slide-in-from-bottom-8 duration-700">
            Empowering People. Transforming Communities. Sustaining the Future.
          </h1>
          <p className="text-base sm:text-lg md:text-xl max-w-2xl mb-6 sm:mb-10 opacity-90 leading-relaxed animate-in slide-in-from-bottom-8 duration-700 delay-150">
            GSSIFO is a global catalyst for sustainable development, dedicated to foster resilience and equity across India through data-driven humanitarian initiatives.
          </p>
          <div className="flex flex-wrap gap-6 animate-in slide-in-from-bottom-8 duration-700 delay-300">
            <Link href="/what-we-do">
              <Button size="lg" className="h-14 px-8 text-base bg-primary hover:bg-primary/90 text-white rounded-lg border-0 shadow-lg">
                Explore Our Programs
              </Button>
            </Link>
            <Link href="/get-involved">
              <Button size="lg" variant="outline" className="h-14 px-8 text-base bg-transparent hover:bg-white hover:text-primary text-white border-2 border-white rounded-lg">
                Get Involved
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* 2. Mobile-only Stats */}
      <section className="md:hidden py-10 px-4 bg-background">
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white p-6 rounded-xl shadow-[0_4px_20px_rgba(10,35,66,0.08)] text-center border border-border">
            <span className="text-3xl font-bold text-primary block">120+</span>
            <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">Projects</span>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-[0_4px_20px_rgba(10,35,66,0.08)] text-center border border-border">
            <span className="text-3xl font-bold text-secondary block">35</span>
            <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">Countries</span>
          </div>
        </div>
      </section>

      {/* 3. Focus Areas */}
      <section className="py-24 bg-background">
        <div className="max-w-[1280px] mx-auto px-4 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-4 lg:sticky lg:top-[90px] self-start z-10 flex flex-col lg:justify-between lg:h-[480px]">
              <div>
                <span className="text-primary font-medium text-sm uppercase tracking-widest block mb-2">Our Mission</span>
                <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-foreground leading-tight">Comprehensive Focus Areas</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  We address interconnected global challenges through specialized departments designed for systemic change.
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-4 p-4 bg-muted rounded-lg border-l-4 border-primary">
                  <Shield className="text-primary w-6 h-6" />
                  <span className="font-bold text-foreground">Institutional Excellence</span>
                </div>
                <div className="flex items-center gap-4 p-4 bg-muted/50 rounded-lg border-l-4 border-transparent">
                  <Globe2 className="text-muted-foreground w-6 h-6" />
                  <span className="font-bold text-foreground">Global Accountability</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { icon: Heart, title: "Community Health", desc: "Improving community health through accessible healthcare services, preventive awareness, and humanitarian support." },
                { icon: BookOpen, title: "Youth Education", desc: "Empowering students with knowledge, digital skills, and strong values to become responsible, confident, and future-ready citizens." },
                { icon: Utensils, title: "Nutrition", desc: "Promoting healthier communities by improving access to nutritious food and encouraging balanced dietary habits." },
                { icon: Sprout, title: "Climate Action", desc: "Protecting the environment through sustainable practices, community engagement, and environmental education." },
                { icon: Award, title: "Women empowerment", desc: "Empowering women through financial inclusion, entrepreneurship, and leadership opportunities." },
                { icon: Droplets, title: "Water Conservation", desc: "Promoting responsible water management and environmental stewardship through conservation initiatives and public awareness." },
                { icon: Shield, title: "Human Rights", desc: "Promoting equality, dignity, and social justice by educating communities about their rights and responsibilities." },
                { icon: AlertCircle, title: "Drug Awareness", desc: "Promoting a healthy, substance-free lifestyle by educating the community on the dangers of drug addiction and providing support networks." }
              ].map((pillar, i) => (
                <div key={i} className="bg-white p-8 rounded-2xl border border-border hover:shadow-xl transition-all">
                  <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mb-6">
                    <pillar.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-foreground">{pillar.title}</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">{pillar.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. Global Impact Map */}
      <section className="py-24 bg-muted">
        <div className="max-w-[1280px] mx-auto px-4 lg:px-16">
          <div className="text-center mb-4">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-foreground">Global Footprint</h2>
            <p className="text-sm lg:text-base text-muted-foreground max-w-2xl mx-auto">Operating across asian continents, GSSIFO provides mission-critical support where it's needed most.</p>
          </div>

          <div className="relative bg-muted/50 rounded-3xl px-8 pt-3 pb-8 lg:px-12 lg:pt-4 lg:pb-10 border border-border overflow-hidden">
            {/* Top Row: Map (centered and constrained with dark border card) */}
            <div className="max-w-4xl mx-auto mb-10 relative flex items-center justify-center overflow-hidden rounded-2xl border border-[#0c57cf]/20 shadow-md bg-slate-950 p-4">
              <img src={mapImage} alt="Asian connectivity map showing GSSIFO's network" className="h-[450px] w-auto object-contain rounded-xl" />
            </div>

            {/* Bottom Row: 3-column stats list */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
              <div className="bg-white p-6 rounded-xl border border-border shadow-sm flex flex-col justify-between">
                <div>
                  <p className="text-primary text-4xl font-bold">12</p>
                  <p className="text-muted-foreground text-xs uppercase font-medium tracking-widest mt-1">Regional Hubs</p>
                </div>
                <p className="text-sm mt-3 text-foreground/80">Strategic offices established across Asia.</p>
              </div>

              <div className="bg-white p-6 rounded-xl border border-border shadow-sm flex flex-col justify-between">
                <div>
                  <p className="text-indigo-600 text-4xl font-bold">1,400+</p>
                  <p className="text-muted-foreground text-xs uppercase font-medium tracking-widest mt-1">Field Staff</p>
                </div>
                <p className="text-sm mt-3 text-foreground/80">Dedicated professionals embedded within local communities.</p>
              </div>

              <div className="bg-white p-6 rounded-xl border border-border shadow-sm flex flex-col justify-between">
                <div>
                  <p className="text-emerald-600 text-4xl font-bold">10,000+</p>
                  <p className="text-muted-foreground text-xs uppercase font-medium tracking-widest mt-1">Lives Impacted</p>
                </div>
                <p className="text-sm mt-3 text-foreground/80">Beneficiaries reached since our founding in 2025.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Featured Projects */}
      <section className="py-24 bg-background">
        <div className="max-w-[1500px] w-[95%] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-primary font-medium text-sm uppercase tracking-widest block mb-2">Our Work</span>
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground">Featured Projects</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
            {[
              {
                tag: "EDUCATION", color: "bg-primary text-white", loc: "INDIA",
                title: "Digital Literacy Initiative",
                slug: "digital-literacy",
                desc: "Empowering students and communities with digital literacy, AI awareness, responsible technology usage, and future-ready skills through interactive learning programs.",
                img: projDigitalLiteracy
              },
              {
                tag: "ENVIRONMENT", color: "bg-secondary text-white", loc: "INDIA",
                title: "Green Valley",
                slug: "green-valley",
                desc: "A nationwide environmental initiative focused on cleaning ponds, lakes, and rivers while leading tree plantation drives across India to create cleaner and greener communities.",
                img: projGreenValley
              },
              {
                tag: "EMPOWERMENT", color: "bg-accent text-white", loc: "INDIA",
                title: "Women empowerment",
                slug: "women-empowerment",
                desc: "Supporting women through entrepreneurship, mentorship, financial literacy, and microfinance opportunities to help them achieve economic independence and sustainable livelihoods.",
                img: projWomenEmpowerment
              }
            ].map((p, i) => (
              <div key={i} className="bg-white rounded-none border border-border shadow-sm hover:shadow-2xl transition-all duration-300 flex flex-col h-full hover:-translate-y-1.5 overflow-hidden group">
                <div className="h-64 sm:h-72 relative bg-muted flex-shrink-0 rounded-none">
                  <img src={p.img} alt={p.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 rounded-none" />
                  <span className={`absolute top-5 left-5 text-xs font-bold px-3.5 py-1.5 rounded-sm shadow-md ${p.color}`}>
                    {p.tag}
                  </span>
                </div>
                <div className="p-8 sm:p-10 flex flex-col flex-grow">
                  <div className="flex items-center text-muted-foreground text-xs font-medium tracking-wide mb-3">
                    <MapPin className="w-3.5 h-3.5 mr-1.5" /> {p.loc}
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors">{p.title}</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed text-[15px] sm:text-base flex-grow">{p.desc}</p>

                  <div className="pt-4 border-t border-slate-100">
                    <Link href={`/projects/${p.slug}`} className="text-primary font-bold hover:underline inline-flex items-center group/link">
                      <span>Learn More</span>
                      <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover/link:translate-x-1.5" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-14 text-center">
            <Link href="/projects">
              <Button size="lg" className="h-14 px-8 text-base bg-[#0c57cf] hover:bg-[#0c57cf]/90 text-white font-bold rounded-none border-0 shadow-lg inline-flex items-center gap-2">
                <span>View All Projects</span>
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* 6. Impact Story Spotlight - Hidden for now
      <section className="py-24 bg-muted/50">
        <div className="max-w-[1280px] mx-auto px-4 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative group">
              <div className="aspect-square rounded-3xl overflow-hidden bg-muted relative">
                <img src={storyPortrait} alt="Portrait of community leader" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute -bottom-6 -right-6 bg-primary p-8 rounded-2xl hidden lg:block text-white shadow-xl border-4 border-muted">
                  <svg className="w-12 h-12 fill-current" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="lg:pl-8">
              <span className="text-primary font-medium text-sm uppercase tracking-widest block mb-4">Human Impact</span>
              <h2 className="text-3xl lg:text-4xl font-bold mb-8 text-foreground leading-snug">
                "GSSIFO didn't just give us resources; they gave us our voice back."
              </h2>
              <p className="text-lg lg:text-xl text-muted-foreground italic mb-10 leading-relaxed">
                "Before the program, our village struggled with basic infrastructure. Today, we manage our own clean water systems and our daughters are in university. The transformation is permanent."
              </p>
              <div>
                <p className="font-bold text-xl text-foreground">Samuel Mbeki</p>
                <p className="text-muted-foreground text-sm mt-1">Community Council Lead, District 4</p>
              </div>
              <div className="mt-10 flex gap-4">
                <button className="w-12 h-12 rounded-full border border-border flex items-center justify-center hover:bg-primary hover:text-white transition-all text-foreground bg-white">
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button className="w-12 h-12 rounded-full border border-border flex items-center justify-center hover:bg-primary hover:text-white transition-all text-foreground bg-white">
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      */}

      {/* 7. Research & Publications - Hidden for now
      <section id="research" className="py-24 bg-background">
        <div className="max-w-[1280px] mx-auto px-4 lg:px-16">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-foreground">Evidence-Based Research</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Access our latest insights, policy recommendations, and analytical reports on global sustainability.</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { title: "Sustainability Index 2024", img: coverSustainabilityIndex }, 
              { title: "Urban Migration Patterns 2030", img: coverUrbanMigration }, 
              { title: "Gender Parity in Emerging Economies", img: coverGenderParity }, 
              { title: "Climate Resilience Framework", img: coverClimateResilience }
            ].map((report, i) => (
              <div key={i} className="group cursor-pointer">
                <div className="aspect-[3/4] bg-muted border border-border shadow-sm rounded-lg overflow-hidden mb-4 relative flex items-center justify-center">
                  <img src={report.img} alt={report.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-foreground/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[2px]">
                    <Link href="/impact-reports">
                      <Button variant="secondary" className="bg-white text-primary hover:bg-gray-50 font-semibold shadow-xl">Download PDF</Button>
                    </Link>
                  </div>
                </div>
                <h4 className="font-bold text-sm lg:text-base leading-tight group-hover:text-primary transition-colors text-foreground">{report.title}</h4>
                <p className="text-xs text-muted-foreground mt-1 uppercase tracking-wide">Research Report</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      */}

      {/* 8. Latest News - Hidden for now
      <section className="py-24 bg-background border-t border-border">
        <div className="max-w-[1280px] mx-auto px-4 lg:px-16">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-16 gap-6">
            <div>
              <span className="text-primary font-medium text-sm uppercase tracking-widest block mb-2">Updates</span>
              <h2 className="text-4xl lg:text-5xl font-bold text-foreground">Latest News</h2>
            </div>
            <Link href="/stories" className="text-primary border-b-2 border-primary font-medium text-sm pb-1 hover:opacity-70 transition-opacity">
              View All News
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {newsList.map((news, i) => (
              <div key={i} className="group">
                <div className="aspect-video bg-muted rounded-xl overflow-hidden mb-6 border border-border">
                  <img src={news.img} alt={news.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="flex gap-4 text-xs font-bold text-muted-foreground uppercase tracking-widest mb-3">
                  <span className="text-primary">Press Release</span>
                  <span>{news.date}</span>
                </div>
                <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors text-foreground leading-snug">
                  {news.title}
                </h3>
                <Link href="/stories" className="text-primary font-bold hover:underline flex items-center">
                  Read More <ArrowRight className="ml-1 w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
      */}

      {/* 9. Spotlight Banner */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 z-0 bg-foreground">
          <img src={spotlightBg} alt="Spotlight background" className="w-full h-full object-cover opacity-60" />
        </div>
        <div className="relative z-10 max-w-[1280px] mx-auto px-4 lg:px-16">
          <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-10 lg:p-16 rounded-3xl max-w-3xl text-white shadow-2xl">
            <span className="inline-block px-3 py-1 bg-accent/20 text-accent-foreground text-xs font-bold uppercase tracking-widest rounded mb-6">
              Responsive Youth Event
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">Responsive Youth Program</h2>
            <p className="text-lg text-white/90 mb-8 leading-relaxed">
              Empowering young people through leadership, teamwork, reading habits, public hygiene initiatives, sports, career opportunities, and community engagement across Tamil Nadu.
            </p>
            <Link href="/summit">
              <Button size="lg" className="bg-white text-primary hover:bg-gray-100 font-bold px-8 h-14 rounded-lg">
                Register for Event
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* 10. Upcoming Events */}
      <section className="py-24 bg-background">
        <div className="max-w-[1280px] mx-auto px-4 lg:px-16">
          <div className="text-center mb-16">
            <span className="text-primary font-medium text-sm uppercase tracking-widest block mb-2">Get Involved</span>
            <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-foreground">Upcoming Events</h2>
          </div>

          <div className="max-w-4xl mx-auto flex flex-col gap-6">
            {sortedEvents.slice(0, 3).map((event, i) => (
              <div key={i} className="flex flex-col sm:flex-row bg-white rounded-xl border border-border hover:shadow-md transition-shadow overflow-hidden min-h-[120px]">
                {/* Date Section (Fixed width, centered text, equal sizing) */}
                <div className="bg-slate-50/80 sm:w-36 flex-shrink-0 flex flex-row sm:flex-col items-center justify-center p-6 border-b sm:border-b-0 sm:border-r border-border">
                  <span className="text-3xl font-extrabold text-[#0c57cf] mr-2 sm:mr-0 tracking-tight">{event.date}</span>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-widest mt-1">{event.month}</span>
                </div>

                {/* Content Section (Flexible width, consistent internal margins) */}
                <div className="p-6 flex-grow flex flex-col justify-center gap-1.5">
                  <h3 className="text-xl font-bold text-foreground leading-snug">{event.title}</h3>
                  <div className="flex items-center text-sm text-muted-foreground font-medium">
                    <MapPin className="w-4 h-4 mr-1.5 text-primary/80 flex-shrink-0" />
                    <span>{event.loc}</span>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed mt-1">{event.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link href="/events" className="text-primary font-bold hover:underline inline-flex items-center">
              View Full Calendar <ArrowRight className="ml-1 w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 10.5. Get Involved Section */}
      <section className="py-24 bg-muted/30 border-t border-b border-border">
        <div className="max-w-[1280px] mx-auto px-4 lg:px-16">
          <div className="text-center mb-16">
            <span className="text-primary font-medium text-sm uppercase tracking-widest block mb-2">Get Involved</span>
            <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-foreground">Volunteer Opportunities</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Join our community-led initiatives and make a direct impact on the ground.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Dental Camp */}
            <div className="bg-white border border-border rounded-xl p-8 flex flex-col items-center text-center hover:shadow-md transition-shadow relative">
              <span className="absolute top-4 right-4 px-3 py-1 bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest rounded">
                Every Weekend
              </span>
              <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center text-primary mb-6">
                <Smile className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-foreground">Dental Camp</h3>
              <p className="text-muted-foreground mb-8 flex-grow leading-relaxed">
                Join our free community dental camps to help promote oral health through checkups, awareness, and basic dental care.
              </p>
              <Link href="/get-involved/opportunities" className="w-full">
                <Button className="w-full bg-primary hover:bg-primary/90 text-white font-bold h-12 rounded-lg">
                  Volunteer Now
                </Button>
              </Link>
            </div>

            {/* Blood Donor Camp */}
            <div className="bg-white border border-border rounded-xl p-8 flex flex-col items-center text-center hover:shadow-md transition-shadow relative">
              <span className="absolute top-4 right-4 px-3 py-1 bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest rounded">
                Every Weekend
              </span>
              <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center text-primary mb-6">
                <HeartHandshake className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-foreground">Blood Donor Camp</h3>
              <p className="text-muted-foreground mb-8 flex-grow leading-relaxed">
                Participate in our blood donation camps held every weekend to help save lives and support local hospitals.
              </p>
              <Link href="/get-involved/opportunities" className="w-full">
                <Button className="w-full bg-primary hover:bg-primary/90 text-white font-bold h-12 rounded-lg">
                  Volunteer Now
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 11. Dual Action */}
      <section className="py-24 bg-background">
        <div className="max-w-[1280px] mx-auto px-4 lg:px-16 flex justify-center">
          <div className="bg-muted p-12 lg:p-16 rounded-3xl relative overflow-hidden flex flex-col justify-center min-h-[400px] max-w-3xl w-full">
            <div className="absolute inset-0 bg-foreground/60 z-0">
              <img src={volunteerAction} alt="Volunteers taking action" className="w-full h-full object-cover mix-blend-overlay" />
            </div>
            <div className="relative z-10 text-white">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">Be the Change</h2>
              <p className="text-lg text-white/90 mb-8 max-w-md leading-relaxed">Join our global network of volunteers. Your skills can directly impact communities in need.</p>
              <Link href="/get-involved/opportunities">
                <Button variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-foreground bg-transparent font-bold h-14 px-8 rounded-lg">
                  Volunteer
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 12. Newsletter */}
      <section className="py-24 bg-muted/50">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm border border-border">
            <Mail className="w-8 h-8 text-primary" />
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-foreground">Stay Informed</h2>
          <p className="text-lg text-muted-foreground mb-10">Subscribe to our monthly briefing for the latest updates on our global initiatives.</p>

          <form className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-grow bg-white border border-border text-foreground px-6 py-4 rounded-lg outline-none focus:ring-2 focus:ring-primary shadow-sm"
              required
            />
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white font-bold h-[58px] px-8 rounded-lg whitespace-nowrap">
              Subscribe
            </Button>
          </form>
        </div>
      </section>
    </div>
  );
}
