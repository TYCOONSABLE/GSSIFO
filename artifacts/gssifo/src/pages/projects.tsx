import { Link } from "wouter";
import { 
  Laptop, Sprout, Coins, Heart, Trophy, Activity, 
  Users, Bot, Briefcase, ArrowRight
} from "lucide-react";
import { Button } from "@/components/ui/button";

// Images imports
import projDigitalLiteracy from "@/assets/images/project-digital-literacy.jpg";
import projGreenValley from "@/assets/images/project-green-valley.jpg";
import projWomenEmpowerment from "@/assets/images/project-women-empowerment.jpg";
import projCommunityHealthcare from "@/assets/images/project-community-healthcare.png";
import projTalentHunt from "@/assets/images/project-talent-hunt.jpg";
import projSportsMeet from "@/assets/images/project-sports-meet.jpg";
import volunteerAction from "@/assets/images/volunteer-action.webp";
import projAIWorkshop from "@/assets/images/project-ai-workshop.jpg";
import projJobFair from "@/assets/images/project-job-fair.jpg";

const projectsData = [
  {
    title: "Digital Literacy Initiative",
    slug: "digital-literacy",
    desc: "Empowering students and communities through digital literacy, AI awareness, coding fundamentals, and responsible technology usage.",
    icon: Laptop,
    img: projDigitalLiteracy,
    color: "text-[#0c57cf] bg-[#0c57cf]/10 border-[#0c57cf]/20",
    badgeColor: "bg-[#0c57cf] text-white",
    tag: "Education"
  },
  {
    title: "Green Valley",
    slug: "green-valley",
    desc: "Community-driven environmental conservation through pond, lake, and river restoration, tree plantation drives, and sustainability awareness programs across India.",
    icon: Sprout,
    img: projGreenValley,
    color: "text-emerald-600 bg-emerald-50 border-emerald-100",
    badgeColor: "bg-emerald-600 text-white",
    tag: "Environment"
  },
  {
    title: "Women empowerment",
    slug: "women-empowerment",
    desc: "Empowering women with mentorship, entrepreneurship support, financial literacy, and microfinance opportunities to build successful businesses and sustainable livelihoods.",
    icon: Coins,
    img: projWomenEmpowerment,
    color: "text-amber-600 bg-amber-50 border-amber-100",
    badgeColor: "bg-amber-600 text-white",
    tag: "Empowerment"
  },
  {
    title: "Community Healthcare",
    slug: "community-healthcare",
    desc: "Providing essential healthcare services across India through blood donation drives, free dental camps, health awareness programs, and community wellness initiatives.",
    icon: Heart,
    img: projCommunityHealthcare,
    color: "text-rose-600 bg-rose-50 border-rose-100",
    badgeColor: "bg-rose-600 text-white",
    tag: "Healthcare"
  },
  {
    title: "Talent Hunt",
    slug: "talent-hunt",
    desc: "Identifying and nurturing talented students and young individuals through competitions, workshops, mentoring, and recognition programs.",
    icon: Trophy,
    img: projTalentHunt,
    color: "text-indigo-600 bg-indigo-50 border-indigo-100",
    badgeColor: "bg-indigo-600 text-white",
    tag: "Youth"
  },
  {
    title: "Sports Meet",
    slug: "sports-meet",
    desc: "Organizing sports events that promote teamwork, leadership, physical fitness, discipline, and community participation.",
    icon: Activity,
    img: projSportsMeet,
    color: "text-cyan-600 bg-cyan-50 border-cyan-100",
    badgeColor: "bg-cyan-600 text-white",
    tag: "Sports"
  },
  {
    title: "Responsible Youth",
    slug: "responsible-youth",
    desc: "Building responsible future leaders through civic awareness, leadership development, volunteering, life skills training, and social responsibility initiatives.",
    icon: Users,
    img: volunteerAction,
    color: "text-teal-600 bg-teal-50 border-teal-100",
    badgeColor: "bg-teal-600 text-white",
    tag: "Youth"
  },
  {
    title: "AI Awareness Workshop",
    slug: "ai-awareness",
    desc: "Conducting AI awareness workshops that introduce students and communities to Artificial Intelligence, ethical AI, digital safety, and emerging technologies.",
    icon: Bot,
    img: projAIWorkshop,
    color: "text-violet-600 bg-violet-50 border-violet-100",
    badgeColor: "bg-violet-600 text-white",
    tag: "Technology"
  },
  {
    title: "Job Fair Across India",
    slug: "job-fair",
    desc: "Connecting job seekers with employers through nationwide job fairs, career guidance sessions, recruitment drives, and employability skill development.",
    icon: Briefcase,
    img: projJobFair,
    color: "text-sky-600 bg-sky-50 border-sky-100",
    badgeColor: "bg-sky-600 text-white",
    tag: "Employment"
  }
];

export default function Projects() {
  return (
    <div className="flex flex-col font-sans min-h-screen bg-slate-50/50">
      {/* Page Header */}
      <section className="bg-gradient-to-r from-slate-900 via-slate-800 to-[#0c57cf] text-white py-20 px-4">
        <div className="max-w-[1280px] mx-auto px-4 lg:px-16 text-center">
          <span className="text-white/60 font-semibold text-sm uppercase tracking-widest block mb-3">Our Initiatives</span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6">
            Global Suite of Projects
          </h1>
          <p className="text-lg sm:text-xl max-w-2xl mx-auto text-slate-200/90 leading-relaxed">
            Empowering communities and building a sustainable future through our diverse, impact-driven programs across India.
          </p>
        </div>
      </section>

      {/* Projects Grid Section */}
      <section className="py-20 lg:py-24 max-w-[1500px] w-[95%] mx-auto px-4 sm:px-6 lg:px-8 w-full animate-fade-in">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {projectsData.map((project, index) => {
            const Icon = project.icon;
            return (
              <div 
                key={project.title}
                className="bg-white rounded-none border border-slate-200/90 shadow-sm hover:shadow-2xl transition-all duration-300 flex flex-col h-full hover:-translate-y-1.5 overflow-hidden group"
                style={{
                  animation: `fadeInUp 0.6s ease-out ${index * 0.05}s both`
                }}
              >
                {/* Project Image */}
                <div className="h-64 sm:h-72 relative bg-slate-100 flex-shrink-0 overflow-hidden rounded-none">
                  <img 
                    src={project.img} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 rounded-none" 
                  />
                  <span className="absolute top-5 left-5 text-xs font-bold px-3.5 py-1.5 rounded-sm uppercase tracking-wider bg-slate-950 text-white shadow-md">
                    {project.tag}
                  </span>
                </div>

                <div className="p-8 sm:p-10 flex flex-col flex-grow">
                  {/* Title and Icon */}
                  <div className="flex items-start gap-4 mb-4">
                    <div className={`w-11 h-11 rounded-sm flex items-center justify-center border flex-shrink-0 mt-0.5 ${project.color}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-extrabold text-slate-800 tracking-tight leading-snug group-hover:text-[#0c57cf] transition-colors">
                      {project.title}
                    </h3>
                  </div>

                  {/* Project Description */}
                  <p className="text-slate-600 leading-relaxed text-[15px] sm:text-base flex-grow">
                    {project.desc}
                  </p>

                  {/* Action Link */}
                  <div className="mt-8 pt-5 border-t border-slate-100 flex items-center justify-between">
                    <Link 
                      href={`/projects/${project.slug}`}
                      className="text-[#0c57cf] font-bold hover:underline inline-flex items-center group/link text-[15px] sm:text-base"
                    >
                      <span>Learn More</span>
                      <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover/link:translate-x-1.5" />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
