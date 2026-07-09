import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight, Globe2, BookOpen, Droplets, HeartHandshake, Sprout, Coins, Shield, Flame } from "lucide-react";
import heroImage from "@/assets/images/hero-community.jpg";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* 1. Hero Banner */}
      <section className="relative bg-primary text-primary-foreground pt-32 pb-40 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={heroImage} 
            alt="GSSIO field team working with a local community" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-primary/40" />
        </div>
        
        <div className="container relative z-10 mx-auto px-4 max-w-5xl">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 leading-[1.1] animate-in fade-in slide-in-from-bottom-8 duration-1000">
            Empowering communities.<br />Sustaining our future.
          </h1>
          <p className="text-xl md:text-2xl font-medium text-primary-foreground/90 max-w-3xl mb-12 leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-150">
            We work globally to eradicate poverty, advance health equity, and protect the planet through systemic, community-led action.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300">
            <Link href="/what-we-do">
              <Button size="lg" className="h-14 px-8 text-lg bg-secondary hover:bg-secondary/90 text-white rounded-sm border-0">
                Explore Our Work
              </Button>
            </Link>
            <Link href="/donate">
              <Button size="lg" className="h-14 px-8 text-lg bg-accent hover:bg-accent/90 text-accent-foreground font-bold rounded-sm border-0">
                Make a Donation
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* 2. Mission Strip */}
      <section className="bg-white py-16 border-b">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-medium text-foreground leading-relaxed">
            The Global Sustainability and Social Impact Organisation (GSSIO) is dedicated to building a resilient, equitable world where every human life is valued and our natural resources are fiercely protected.
          </h2>
        </div>
      </section>

      {/* 3. "Our 7 Pillars" Grid */}
      <section className="bg-muted py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold tracking-widest text-secondary uppercase mb-4">Programme Areas</h2>
            <h3 className="text-4xl font-bold text-foreground">Our 7 Pillars of Impact</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {[
              { icon: Globe2, title: "Global Health", desc: "Strengthening healthcare systems and fighting infectious diseases.", link: "/what-we-do#health" },
              { icon: BookOpen, title: "Education For All", desc: "Ensuring inclusive, equitable quality education for children.", link: "/what-we-do#education" },
              { icon: Sprout, title: "Climate Action", desc: "Combating climate change and promoting sustainable ecosystems.", link: "/what-we-do#climate" },
              { icon: Coins, title: "Economic Equity", desc: "Eradicating extreme poverty and driving sustainable economic growth.", link: "/what-we-do#equity" },
              { icon: Droplets, title: "Clean Water", desc: "Providing universal access to safe, affordable drinking water.", link: "/what-we-do#water" },
              { icon: Shield, title: "Human Rights", desc: "Defending fundamental freedoms and promoting peaceful societies.", link: "/what-we-do#rights" },
              { icon: HeartHandshake, title: "Disaster Relief", desc: "Delivering rapid, life-saving assistance in humanitarian crises.", link: "/what-we-do#relief" },
            ].map((pillar, i) => (
              <Link key={i} href={pillar.link} className="group bg-white p-8 rounded-sm shadow-sm hover:shadow-md transition-all duration-300 border border-transparent hover:border-secondary/20 flex flex-col items-start text-left">
                <div className="w-14 h-14 bg-muted rounded-full flex items-center justify-center mb-6 group-hover:bg-secondary/10 group-hover:text-secondary transition-colors text-primary">
                  <pillar.icon className="w-7 h-7" />
                </div>
                <h4 className="text-xl font-bold mb-3 group-hover:text-secondary transition-colors">{pillar.title}</h4>
                <p className="text-muted-foreground leading-relaxed mb-6 flex-grow">{pillar.desc}</p>
                <span className="inline-flex items-center text-sm font-bold text-primary group-hover:text-secondary mt-auto">
                  Learn more <ArrowRight className="ml-2 w-4 h-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Impact Stats Row */}
      <section className="bg-secondary text-secondary-foreground py-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 -mt-20 -mr-20 w-96 h-96 bg-white/10 rounded-full blur-3xl mix-blend-overlay"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-center divide-y md:divide-y-0 md:divide-x divide-white/20">
            <div className="pt-8 md:pt-0">
              <div className="text-5xl md:text-6xl font-bold mb-2 text-white">142</div>
              <div className="text-lg font-medium text-white/90">Countries Reached</div>
            </div>
            <div className="pt-8 md:pt-0">
              <div className="text-5xl md:text-6xl font-bold mb-2 text-white">50M+</div>
              <div className="text-lg font-medium text-white/90">Lives Improved</div>
            </div>
            <div className="pt-8 md:pt-0">
              <div className="text-5xl md:text-6xl font-bold mb-2 text-white">12K</div>
              <div className="text-lg font-medium text-white/90">Active Volunteers</div>
            </div>
            <div className="pt-8 md:pt-0">
              <div className="text-5xl md:text-6xl font-bold mb-2 text-accent">89%</div>
              <div className="text-lg font-medium text-white/90">Funds to Programs</div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Latest Stories Grid */}
      <section className="bg-white py-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <h2 className="text-sm font-bold tracking-widest text-secondary uppercase mb-4">Latest Updates</h2>
              <h3 className="text-4xl font-bold text-foreground">Stories from the Field</h3>
            </div>
            <Link href="/stories">
              <Button variant="outline" className="rounded-sm font-semibold border-primary text-primary hover:bg-primary hover:text-white">
                View All Stories
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { img: "/src/assets/images/story-1.jpg", tag: "Health", date: "Oct 12, 2023", title: "New Mobile Clinics Reach Remote Villages in Sub-Saharan Africa" },
              { img: "/src/assets/images/story-2.jpg", tag: "Water", date: "Sep 28, 2023", title: "Clean Water Initiative Brings Hope to 50,000 Families" },
              { img: "/src/assets/images/story-3.jpg", tag: "Education", date: "Sep 15, 2023", title: "Empowering the Next Generation: Girls' Education Program Expands" }
            ].map((story, i) => (
              <Link key={i} href={`/stories/${i}`} className="group flex flex-col bg-white rounded-sm overflow-hidden border hover:shadow-lg transition-shadow">
                <div className="aspect-[4/3] overflow-hidden bg-muted">
                  <img src={story.img} alt={story.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center gap-3 mb-4 text-xs font-semibold uppercase tracking-wider">
                    <span className="text-secondary">{story.tag}</span>
                    <span className="text-muted-foreground/50">•</span>
                    <span className="text-muted-foreground">{story.date}</span>
                  </div>
                  <h4 className="text-xl font-bold mb-4 group-hover:text-primary transition-colors line-clamp-3">{story.title}</h4>
                  <div className="mt-auto pt-4 flex items-center text-sm font-bold text-primary">
                    Read Story <ArrowRight className="ml-2 w-4 h-4" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Spotlight Campaign */}
      <section className="bg-primary text-primary-foreground py-24">
        <div className="container mx-auto px-4">
          <div className="bg-white/5 border border-white/10 rounded-sm overflow-hidden flex flex-col lg:flex-row">
            <div className="lg:w-1/2">
              <img src="/src/assets/images/campaign.jpg" alt="Campaign Spotlight" className="w-full h-full object-cover min-h-[400px]" />
            </div>
            <div className="lg:w-1/2 p-10 lg:p-16 flex flex-col justify-center">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-accent/20 text-accent font-bold text-sm uppercase tracking-widest rounded-full w-fit mb-6">
                <Flame className="w-4 h-4" /> Featured Campaign
              </div>
              <h3 className="text-3xl lg:text-5xl font-bold mb-6 leading-tight">The 2025 Global Food Security Initiative</h3>
              <p className="text-lg text-primary-foreground/80 mb-8 leading-relaxed">
                We are launching our largest initiative yet to support local farmers, optimize supply chains, and build climate-resilient agricultural systems across three continents.
              </p>
              <div className="flex gap-4">
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold rounded-sm h-12 px-8">
                  Support Campaign
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary rounded-sm h-12 px-8">
                  Learn Details
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Newsletter Banner */}
      <section className="bg-secondary text-white py-16">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Stay informed on global impact</h2>
          <p className="text-lg text-white/90 mb-8">Join 500,000+ supporters receiving our monthly dispatches from the frontlines of our global programs.</p>
          <form className="flex flex-col sm:flex-row gap-3 max-w-xl mx-auto" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="Enter your email address" 
              className="flex-grow bg-white text-foreground px-6 py-4 rounded-sm outline-none focus:ring-2 focus:ring-primary shadow-sm"
              required
            />
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white font-bold h-[56px] px-8 rounded-sm whitespace-nowrap">
              Subscribe Now
            </Button>
          </form>
        </div>
      </section>
    </div>
  );
}
