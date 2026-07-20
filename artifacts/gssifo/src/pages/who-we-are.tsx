export default function WhoWeAre() {
  return (
    <div className="py-24">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-5xl font-bold mb-8">Who We Are</h1>
        <p className="text-xl text-muted-foreground leading-relaxed mb-12">
          The Global Sustainability and Social Impact Foundation (GSSIFO) was founded in 1995 with a singular vision: to address the world's most pressing challenges through coordinated, science-based, and community-led interventions.
        </p>
        
        <div className="space-y-12 text-foreground/80">
          <div>
            <h2 className="text-5xl font-bold mb-6 text-foreground">Our Mission</h2>
            <p className="text-lg leading-relaxed">
              We exist to empower communities, protect vulnerable populations, and advocate for sustainable policies on a global scale. Operating in over 140 countries, our staff and volunteers work tirelessly to deliver health, education, and economic programs where they are needed most.
            </p>
          </div>

          <div>
            <h2 className="text-5xl font-bold mb-6 text-foreground">Our History</h2>
            <p className="text-lg leading-relaxed">
              What began as a coalition of independent researchers and field workers has grown into a major international NGO. Throughout the early 2000s, GSSIFO pioneered community-managed water systems in sub-Saharan Africa. Today, we are a leading voice in global policy, advising governments and intergovernmental bodies on sustainable development goals.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
