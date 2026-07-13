import { Link } from "wouter";
import { ArrowRight } from "lucide-react";

import storyMobileClinic from "@/assets/images/story-mobile-clinic.webp";
import storyCleanWater from "@/assets/images/story-clean-water.webp";
import story3 from "@/assets/images/story-3.webp";
import campaign from "@/assets/images/campaign.webp";
import storyDisasterRelief from "@/assets/images/story-disaster-relief.webp";
import volunteerAction from "@/assets/images/volunteer-action.webp";

export default function Stories() {
  const stories = [
    { img: storyMobileClinic, tag: "Health", date: "Oct 12, 2023", title: "New Mobile Clinics Reach Remote Villages in Sub-Saharan Africa", desc: "How a fleet of fully-equipped medical vehicles is changing the landscape of rural healthcare access." },
    { img: storyCleanWater, tag: "Water", date: "Sep 28, 2023", title: "Clean Water Initiative Brings Hope to 50,000 Families", desc: "A new community-managed well system provides sustainable, clean drinking water to previously drought-stricken areas." },
    { img: story3, tag: "Education", date: "Sep 15, 2023", title: "Empowering the Next Generation: Girls' Education Program Expands", desc: "Breaking down barriers to education through targeted scholarships and safe school infrastructure." },
    { img: campaign, tag: "Agriculture", date: "Aug 30, 2023", title: "Building Climate-Resilient Farms", desc: "Training local farmers in sustainable techniques to ensure long-term food security against changing weather patterns." },
    { img: storyDisasterRelief, tag: "Disaster Relief", date: "Aug 12, 2023", title: "Rapid Response in the Wake of Tropical Cyclone", desc: "Our emergency teams deployed within 24 hours to provide shelter, food, and medical aid to affected regions." },
    { img: volunteerAction, tag: "Human Rights", date: "Jul 22, 2023", title: "Protecting Vulnerable Populations in Conflict Zones", desc: "Establishing safe havens and providing legal advocacy for displaced individuals." }
  ];

  return (
    <div className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <h1 className="text-5xl font-bold mb-6 text-center">Stories from the Field</h1>
        <p className="text-xl text-muted-foreground mb-16 max-w-3xl mx-auto text-center">
          Read firsthand accounts of how our programs are making a tangible difference in communities around the world.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stories.map((story, i) => (
            <Link key={i} href={`/stories/${i}`} className="group flex flex-col bg-white rounded-sm overflow-hidden border hover:shadow-lg transition-shadow">
              <div className="aspect-[4/3] overflow-hidden bg-muted">
                <img src={story.img} alt={story.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <div className="flex items-center gap-3 mb-4 text-xs font-semibold uppercase tracking-wider">
                  <span className="text-secondary">{story.tag}</span>
                  <span className="text-muted-foreground/50">•</span>
                  <span className="text-muted-foreground">{story.date}</span>
                </div>
                <h4 className="text-xl font-bold mb-4 group-hover:text-primary transition-colors">{story.title}</h4>
                <p className="text-muted-foreground mb-6 line-clamp-3">{story.desc}</p>
                <div className="mt-auto pt-4 flex items-center text-sm font-bold text-primary">
                  Read Story <ArrowRight className="ml-2 w-4 h-4" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
