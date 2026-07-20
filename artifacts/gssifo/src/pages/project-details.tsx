import { useEffect } from "react";
import { Link, useParams } from "wouter";
import { 
  Laptop, Sprout, Coins, Heart, Trophy, Activity, 
  Users, Bot, Briefcase, ArrowRight, CheckCircle2, ChevronRight, Home as HomeIcon, MapPin, Tag, Info
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

interface ProjectContent {
  title: string;
  tag: string;
  icon: any;
  img: string;
  overview: string;
  color: string;
  badgeColor: string;
  ctaText: string;
  ctaTarget: string;
  modules: { title: string; desc: string }[];
  gallery: string[];
}

const projectsMap: Record<string, ProjectContent> = {
  "digital-literacy": {
    title: "Digital Literacy Initiative",
    tag: "Education",
    icon: Laptop,
    img: projDigitalLiteracy,
    color: "text-[#0c57cf] bg-[#0c57cf]/10 border-[#0c57cf]/20",
    badgeColor: "bg-[#0c57cf] text-white",
    ctaText: "Join the Initiative",
    ctaTarget: "/contact?inquiry=Volunteering&project=Digital%20Literacy%20Initiative",
    overview: "Bridging the digital divide in rural and semi-urban communities by providing access to computer education, teaching coding logic, raising cyber-safety awareness, and preparing the youth for a technology-driven future.",
    modules: [
      { title: "Project Overview", desc: "Equipping municipal school students and underprivileged communities with fundamental computer and internet skills to foster equal opportunity in the digital age." },
      { title: "Objectives", desc: "To drive technical proficiency, computer confidence, and computational thinking starting from early educational stages." },
      { title: "AI Awareness Programs", desc: "Interactive sessions introducing Machine Learning, automated neural network concepts, and artificial intelligence safety for students." },
      { title: "Digital Literacy Training", desc: "Hands-on navigation of office suite systems, safe internet browsers, and operating systems." },
      { title: "Coding Fundamentals", desc: "Logical block-based learning, basic HTML/CSS building, and structured programming logic." },
      { title: "Cyber Safety & Responsible Technology Usage", desc: "Teaching online privacy preservation, threat recognition, and digital safety practices." },
      { title: "School & College Outreach", desc: "Direct integration with regional schools to construct digital training labs and conduct workshops." },
      { title: "Community Impact", desc: "Targeted digital cohorts for adults and local senior citizens to enable digital payments and access public services." }
    ],
    gallery: [projDigitalLiteracy, volunteerAction, projAIWorkshop]
  },
  "green-valley": {
    title: "Green Valley",
    tag: "Environment",
    icon: Sprout,
    img: projGreenValley,
    color: "text-emerald-600 bg-emerald-50 border-emerald-100",
    badgeColor: "bg-emerald-600 text-white",
    ctaText: "Volunteer Now",
    ctaTarget: "/contact?inquiry=Volunteering&project=Green%20Valley",
    overview: "A nationwide environmental initiative focused on cleaning ponds, lakes, and rivers while leading tree plantation drives across India to create cleaner, greener, and more resilient communities.",
    modules: [
      { title: "Project Overview", desc: "Targeting water-body revitalisation, carbon-neutrality campaigns, and local ecological restoration projects with direct citizen participation." },
      { title: "Pond, Lake & River Cleaning Drives", desc: "Clearing solid wastes, hazardous weeds, and pollutants from water reservoirs to replenish local water supplies." },
      { title: "Tree Plantation Campaigns", desc: "Promoting biodiversity by planting native tree saplings across urban and rural sites, ensuring long-term maintenance." },
      { title: "Environmental Awareness Programs", desc: "Educational workshops and sessions in educational and corporate hubs on sustainable water usage, recycling, and waste segregation." },
      { title: "Community Participation", desc: "Mobilizing local residents to actively safeguard restored ecological assets and adopt eco-conscious lifestyles." },
      { title: "Sustainability Goals", desc: "Aligning all cleanup and plantation programs with national and global sustainability benchmarks." },
      { title: "Impact Statistics", desc: "Over 120 water bodies successfully cleaned, 60,000+ trees planted, and 15,000+ community volunteers engaged." }
    ],
    gallery: [projGreenValley, volunteerAction, projCommunityHealthcare]
  },
  "women-empowerment": {
    title: "Women empowerment",
    tag: "Empowerment",
    icon: Coins,
    img: projWomenEmpowerment,
    color: "text-amber-600 bg-amber-50 border-amber-100",
    badgeColor: "bg-amber-600 text-white",
    ctaText: "Become a Mentor",
    ctaTarget: "/contact?inquiry=Partnership&project=Women%20Empowerment",
    overview: "Supporting women through entrepreneurship, mentorship, financial literacy, and microfinance opportunities to help them achieve economic independence and sustainable livelihoods.",
    modules: [
      { title: "Project Overview", desc: "Removing structural financial barriers for women by offering soft capital resources, enterprise incubation, and leadership circles." },
      { title: "Microfinance Support", desc: "Providing soft micro-grants and interest-free loans to kickstart village-level women-led enterprises." },
      { title: "Entrepreneurship Development", desc: "Guidance on business plan generation, supply chains, packaging, and digital marketplaces." },
      { title: "Financial Literacy", desc: "Educating cohorts on savings accounts, mobile bank systems, credit management, and micro-savings programs." },
      { title: "Mentorship Programs", desc: "Linking successful women leaders and industry executives with upcoming grassroots entrepreneurs." },
      { title: "Skill Development", desc: "Vocational courses in tailoring, craft manufacturing, digital administration, and food processing." },
      { title: "Success Stories", desc: "Spotlighting our beneficiaries who scaled micro tailors shops and organic food stalls into profitable ventures." }
    ],
    gallery: [projWomenEmpowerment, projJobFair, projDigitalLiteracy]
  },
  "community-healthcare": {
    title: "Community Healthcare",
    tag: "Healthcare",
    icon: Heart,
    img: projCommunityHealthcare,
    color: "text-rose-600 bg-rose-50 border-rose-100",
    badgeColor: "bg-rose-600 text-white",
    ctaText: "Participate",
    ctaTarget: "/contact?inquiry=Volunteering&project=Community%20Healthcare",
    overview: "Providing essential healthcare services across India through blood donation drives, free dental camps, health awareness programs, and community wellness initiatives.",
    modules: [
      { title: "Project Overview", desc: "Setting up healthcare checkpoints to provide diagnostics, consults, and primary checkups directly to underserved rural regions." },
      { title: "Blood Donation Drives", desc: "Organizing state-wide voluntary blood donation events in collaboration with recognized blood banks." },
      { title: "Dental Care Camps", desc: "Providing free pediatric and adult dental screenings, minor fillings, and oral hygiene supplies." },
      { title: "Health Awareness Campaigns", desc: "Informing communities about chronic disease prevention, sanitisation practices, and childhood nutrition." },
      { title: "Preventive Healthcare", desc: "Conducting regular health screenings for vital indicators such as blood pressure, glucose, and oxygen level monitoring." },
      { title: "Community Medical Outreach", desc: "Operating mobile primary care vans that visit remote, rural populations periodically." },
      { title: "Upcoming Camps", desc: "Calendar listings of upcoming weekend medical and diagnostic camps across high-priority districts." }
    ],
    gallery: [projCommunityHealthcare, volunteerAction, projWomenEmpowerment]
  },
  "talent-hunt": {
    title: "Talent Hunt",
    tag: "Youth",
    icon: Trophy,
    img: projTalentHunt,
    color: "text-indigo-600 bg-indigo-50 border-indigo-100",
    badgeColor: "bg-indigo-600 text-white",
    ctaText: "Partner with Us",
    ctaTarget: "/contact?inquiry=Partnership&project=Talent%20Hunt",
    overview: "Identifying and nurturing talented students and young individuals through competitions, workshops, mentoring, and recognition programs.",
    modules: [
      { title: "Project Overview", desc: "Searching for hidden potential in creative and analytical areas among underprivileged student populations." },
      { title: "Student Competitions", desc: "Hosting debate tournaments, science project exhibitions, art contests, and creative writing pools." },
      { title: "Talent Identification", desc: "Working with public school teachers to find outstanding logical, artistic, and musical abilities." },
      { title: "Workshops", desc: "Intense weekend training modules led by professional musicians, painters, developers, and educators." },
      { title: "Mentorship", desc: "Providing high-potential youth with specialized mentors to guide their career paths and scholarship options." },
      { title: "Recognition Programs", desc: "Awarding certificate plates, learning tech kits, and academic scholarships to exceptional students." }
    ],
    gallery: [projTalentHunt, projDigitalLiteracy, projAIWorkshop]
  },
  "sports-meet": {
    title: "Sports Meet",
    tag: "Sports",
    icon: Activity,
    img: projSportsMeet,
    color: "text-cyan-600 bg-cyan-50 border-cyan-100",
    badgeColor: "bg-cyan-600 text-white",
    ctaText: "Sponsor an Event",
    ctaTarget: "/contact?inquiry=Partnership&project=Sports%20Meet",
    overview: "Organizing sports events that promote teamwork, leadership, physical fitness, discipline, and community participation among youth.",
    modules: [
      { title: "Project Overview", desc: "Harnessing athletics as a constructive development tool to teach sportsmanship, teamwork, and health." },
      { title: "Sports Competitions", desc: "Arranging multi-sport events encompassing football tournaments, track events, kabaddi, and cricket matches." },
      { title: "Youth Engagement", desc: "Using sports to provide safe spaces and support networks, steering youth away from social vulnerabilities." },
      { title: "Leadership Through Sports", desc: "Structuring captaincy and event management responsibilities to teach leadership, discipline, and grit." },
      { title: "Community Events", desc: "Organizing family running meets, community fitness workshops, and inclusive sports meets." }
    ],
    gallery: [projSportsMeet, volunteerAction, projGreenValley]
  },
  "responsible-youth": {
    title: "Responsible Youth",
    tag: "Youth",
    icon: Users,
    img: volunteerAction,
    color: "text-teal-600 bg-teal-50 border-teal-100",
    badgeColor: "bg-teal-600 text-white",
    ctaText: "Get Involved",
    ctaTarget: "/contact?inquiry=Volunteering&project=Responsible%20Youth",
    overview: "Building responsible future leaders through civic awareness, leadership development, volunteering, life skills training, and social responsibility initiatives.",
    modules: [
      { title: "Project Overview", desc: "Educating young citizens on democratic ideals, administrative systems, and community service models." },
      { title: "Leadership Programs", desc: "Bootcamps providing training in strategic communications, project management, and public system navigation." },
      { title: "Civic Awareness", desc: "Classes and field events exploring urban governance, administrative protocols, and citizen rights." },
      { title: "Volunteering", desc: "Engaging youth groups in municipal cleaning drives, tutoring programs, and local disaster relief." },
      { title: "Life Skills Training", desc: "Sessions covering emotional regulation, critical thinking, speaking skills, and basic career guidance." },
      { title: "Responsible Citizenship", desc: "Encouraging digital hygiene, waste responsibility, and active engagement in neighborhood issues." }
    ],
    gallery: [volunteerAction, projDigitalLiteracy, projGreenValley]
  },
  "ai-awareness": {
    title: "AI Awareness Workshop",
    tag: "Technology",
    icon: Bot,
    img: projAIWorkshop,
    color: "text-violet-600 bg-violet-50 border-violet-100",
    badgeColor: "bg-violet-600 text-white",
    ctaText: "Request a Workshop",
    ctaTarget: "/contact?inquiry=General%20Information&project=AI%20Awareness%20Workshop",
    overview: "Conducting AI awareness workshops that introduce students and communities to Artificial Intelligence, ethical AI, digital safety, and emerging technologies.",
    modules: [
      { title: "Project Overview", desc: "Unpacking artificial intelligence tools to empower local school educators, students, and businesses." },
      { title: "Introduction to Artificial Intelligence", desc: "Demystifying AI history, data structures, machine learning basics, and industrial automation." },
      { title: "AI Ethics", desc: "Crucial discussions on AI bias, deepfakes, privacy concerns, and plagiarism." },
      { title: "Digital Safety", desc: "Teaching safe password setups, protection against digital scams, and cyber safety practices." },
      { title: "Hands-on Workshops", desc: "Structured sessions practicing prompt design, AI productivity helpers, and creative text/image generation tools." },
      { title: "Future Skills", desc: "Career guidance mapping indicating where human creativity merges with technological toolsets." }
    ],
    gallery: [projAIWorkshop, projDigitalLiteracy, projTalentHunt]
  },
  "job-fair": {
    title: "Job Fair Across India",
    tag: "Employment",
    icon: Briefcase,
    img: projJobFair,
    color: "text-sky-600 bg-sky-50 border-sky-100",
    badgeColor: "bg-sky-600 text-white",
    ctaText: "Register Now",
    ctaTarget: "/contact?inquiry=Career%20Opportunities&project=Job%20Fair%20Across%20India",
    overview: "Connecting job seekers with employers through nationwide job fairs, career guidance sessions, recruitment drives, and employability skill development.",
    modules: [
      { title: "Project Overview", desc: "Facilitating hiring cycles to place urban and rural youth into structured corporate, logistics, retail, and tech positions." },
      { title: "Career Guidance", desc: "Group counseling and individual mapping sessions to guide candidates toward suitable roles." },
      { title: "Employer Networking", desc: "Connecting local job seekers directly with hiring managers and corporate recruiters." },
      { title: "Recruitment Drives", desc: "Live on-site screening, interview rooms, and immediate selection announcements." },
      { title: "Resume Building", desc: "Clinics detailing resume edits, format structures, cover letters, and keyword placement." },
      { title: "Interview Preparation", desc: "Mock interviews, elevator pitches, body language training, and speaking bootcamps." },
      { title: "Employment Opportunities", desc: "Access to remote roles, regional gig roles, and traditional corporate pathways." }
    ],
    gallery: [projJobFair, projWomenEmpowerment, volunteerAction]
  }
};

export default function ProjectDetails() {
  const { slug } = useParams<{ slug?: string }>();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  const project = slug ? projectsMap[slug] : null;

  if (!project) {
    return (
      <div className="py-24 text-center min-h-screen bg-slate-50 flex items-center justify-center font-sans">
        <div className="container mx-auto px-4 max-w-md">
          <div className="w-16 h-16 bg-rose-100 text-rose-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <Info className="w-8 h-8" />
          </div>
          <h2 className="text-3xl font-bold mb-4 text-slate-800 tracking-tight">Project Not Found</h2>
          <p className="text-slate-500 mb-8 leading-relaxed">The project you are looking for does not exist or has been moved.</p>
          <Link href="/projects">
            <Button className="bg-[#0c57cf] hover:bg-[#0c57cf]/90 text-white font-bold h-12 px-6 rounded-xl">
              Back to Projects
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  const Icon = project.icon;

  return (
    <div className="bg-slate-50/50 min-h-screen font-sans">
      {/* Page Header Banner */}
      <section className="bg-gradient-to-r from-slate-900 via-slate-800 to-[#0c57cf] text-white py-16 px-4">
        <div className="max-w-[1280px] mx-auto px-4 lg:px-16">
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-2 text-white/60 text-xs sm:text-sm font-medium mb-6 uppercase tracking-wider">
            <Link href="/" className="hover:text-white transition-colors flex items-center gap-1">
              <HomeIcon className="w-3.5 h-3.5" />
              <span>Home</span>
            </Link>
            <ChevronRight className="w-4 h-4" />
            <Link href="/projects" className="hover:text-white transition-colors">
              Projects
            </Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white font-semibold truncate max-w-[200px] sm:max-w-none">
              {project.title}
            </span>
          </nav>

          <span className={`inline-block text-[10px] font-bold px-3 py-1 rounded-md uppercase tracking-wider mb-4 ${project.badgeColor}`}>
            {project.tag}
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4 text-white leading-tight">
            {project.title}
          </h1>
          <p className="text-base sm:text-lg max-w-3xl text-slate-200/90 leading-relaxed">
            {project.overview}
          </p>
        </div>
      </section>

      {/* Main Grid Content */}
      <section className="py-16 max-w-[1280px] mx-auto px-4 lg:px-16 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column - Core Modules & Details */}
          <div className="lg:col-span-8 space-y-12">
            {/* Core Modules / Details List */}
            <div className="bg-white p-8 sm:p-10 rounded-2xl border border-slate-100 shadow-sm">
              <h2 className="text-2xl font-bold text-slate-800 tracking-tight mb-8 pb-4 border-b border-slate-100 flex items-center gap-3">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${project.color}`}>
                  <Icon className="w-5 h-5" />
                </div>
                <span>Key Core Modules & Details</span>
              </h2>

              <div className="space-y-8">
                {project.modules.map((mod, index) => (
                  <div key={index} className="flex gap-4 items-start group">
                    <div className="mt-1 shrink-0 text-emerald-500 bg-emerald-50 p-1.5 rounded-lg border border-emerald-100 group-hover:scale-105 transition-transform duration-200">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="text-base sm:text-lg font-bold text-slate-800 mb-1 tracking-tight">
                        {mod.title}
                      </h3>
                      <p className="text-slate-600 text-sm leading-relaxed">
                        {mod.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Other Projects Section */}
            <div className="bg-white p-8 sm:p-10 rounded-none border border-slate-100 shadow-sm">
              <h2 className="text-2xl font-bold text-slate-800 tracking-tight mb-8">Other Projects</h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {Object.entries(projectsMap)
                  .filter(([key]) => key !== slug)
                  .slice(0, 3)
                  .map(([key, otherProj]) => (
                    <Link 
                      key={key} 
                      href={`/projects/${key}`}
                      className="group flex flex-col bg-slate-50 border border-slate-200/80 rounded-none overflow-hidden hover:shadow-lg hover:border-primary/40 transition-all cursor-pointer"
                    >
                      <div className="h-44 overflow-hidden relative rounded-none">
                        <img 
                          src={otherProj.img} 
                          alt={otherProj.title} 
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 rounded-none"
                        />
                        <span className={`absolute top-3 right-3 text-[10px] font-bold px-2.5 py-1 rounded-sm shadow-sm ${otherProj.badgeColor}`}>
                          {otherProj.tag}
                        </span>
                      </div>
                      <div className="p-5 flex-1 flex flex-col justify-between">
                        <div>
                          <h3 className="font-bold text-slate-800 group-hover:text-primary transition-colors text-base line-clamp-1">
                            {otherProj.title}
                          </h3>
                          <p className="text-xs text-slate-500 mt-2 line-clamp-2 leading-relaxed">
                            {otherProj.overview}
                          </p>
                        </div>
                        <span className="text-xs font-bold text-primary mt-4 inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                          Learn More &rarr;
                        </span>
                      </div>
                    </Link>
                  ))}
              </div>
            </div>
          </div>

          {/* Right Column - Factsheet & CTA */}
          <div className="lg:col-span-4 space-y-8 lg:sticky lg:top-24">
            {/* Factsheet Card */}
            <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm">
              <h3 className="text-lg font-bold text-slate-800 mb-6 pb-2 border-b border-slate-100">Project Factsheet</h3>
              <ul className="space-y-4">
                <li className="flex justify-between items-center text-sm">
                  <span className="text-slate-400 font-medium">Category</span>
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wider ${project.badgeColor}`}>
                    {project.tag}
                  </span>
                </li>
                <li className="flex justify-between items-center text-sm">
                  <span className="text-slate-400 font-medium">Status</span>
                  <span className="text-amber-600 font-bold bg-amber-50 px-2.5 py-0.5 rounded border border-amber-100">Soon</span>
                </li>
                <li className="flex justify-between items-center text-sm">
                  <span className="text-slate-400 font-medium">Location</span>
                  <span className="text-slate-800 font-semibold flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-[#0c57cf]" /> India / Nationwide
                  </span>
                </li>
              </ul>
            </div>

            {/* CTA Card */}
            <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-[#0c57cf] text-white p-8 rounded-2xl shadow-lg border border-slate-700/30">
              <h3 className="text-xl font-bold mb-4 tracking-tight">Make a Difference Today</h3>
              <p className="text-slate-200 text-sm leading-relaxed mb-6">
                Your support directly fuels local operations, volunteer actions, and materials required to sustain the positive impact of this initiative.
              </p>
              <Link href={project.ctaTarget}>
                <Button className="w-full h-12 bg-white hover:bg-slate-100 text-[#0c57cf] font-bold rounded-xl text-sm flex items-center justify-center gap-2 shadow-md transition-all duration-300">
                  <span>{project.ctaText}</span>
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
