import { useState } from "react";
import { Link } from "wouter";
import { ArrowLeft, Calendar, MapPin, CheckCircle2, Tag, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

export default function Summit() {
  const { toast } = useToast();
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [registrationId, setRegistrationId] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    about: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const generatedId = "EVT-" + Math.floor(100000 + Math.random() * 900000);
    setRegistrationId(generatedId);

    const subject = encodeURIComponent(`Event Registration: ${generatedId}`);
    const body = encodeURIComponent(
      `Reference ID: ${generatedId}\n` +
      `Full Name: ${formData.name}\n` +
      `Email Address: ${formData.email}\n` +
      `About You: ${formData.about}`
    );
    window.location.href = `mailto:info@gssifo.org?subject=${subject}&body=${body}`;

    setFormSubmitted(true);
    toast({
      title: "Registration Confirmed!",
      description: `Your registration reference ${generatedId} for upcoming GSSIFO events has been received.`,
    });
  };

  const events = [
    {
      date: "31 JUL",
      title: "Responsive Youth Program",
      category: "Youth Development • Reading • Teamwork • Public Hygiene",
      desc: "An interactive youth development program that encourages leadership, teamwork, reading habits, and community service through public hygiene initiatives.",
    },
    {
      date: "14 AUG",
      title: "GSSIFO Sports Summit (Trichy)",
      location: "Trichy",
      desc: "Join our flagship sports event featuring competitions, teamwork, leadership, and community participation.",
    },
    {
      date: "30 AUG",
      title: "Job Fair",
      subtitle: "Providing Employment Opportunities",
      desc: "Connect job seekers with employers, explore career opportunities, receive career guidance, and participate in recruitment drives.",
    },
    {
      date: "10 SEP",
      title: "GSSIFO Sports Summit (Coimbatore)",
      location: "Coimbatore",
      desc: "Participate in our flagship sports summit that brings together youth through sports, fitness, and leadership activities.",
    },
    {
      date: "05 OCT",
      title: "GSSIFO Sports Summit (Madurai)",
      location: "Madurai",
      desc: "Celebrate sportsmanship and community engagement at the GSSIFO Sports Summit in Madurai.",
    },
  ];

  return (
    <div className="py-16 bg-muted/10 min-h-screen">
      <div className="container mx-auto px-4 max-w-5xl">
        <Link href="/" className="inline-flex items-center text-primary font-bold hover:underline mb-8 group">
          <ArrowLeft className="mr-2 w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Back to Home
        </Link>

        {/* Hero Section */}
        <div className="bg-primary text-white rounded-2xl p-8 sm:p-12 shadow-xl mb-16 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl pointer-events-none"></div>
          <div className="relative z-10 max-w-3xl">
            <span className="inline-block px-3 py-1 bg-accent/20 text-accent-foreground text-xs font-bold uppercase tracking-widest rounded mb-6">
              Responsive Youth Event
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-6">
              Responsive Youth Program
            </h1>
            <p className="text-lg text-primary-foreground/95 mb-8 leading-relaxed">
              Empowering young people through leadership, teamwork, reading habits, public hygiene initiatives, sports, career opportunities, and community engagement. Join GSSIFO events designed to inspire responsible and active youth across Tamil Nadu.
            </p>
            
            <div className="flex flex-wrap gap-6 text-sm font-semibold text-white/90">
              <span className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-accent" />
                Multiple Events Throughout 2024
              </span>
              <span className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-accent" />
                Various Cities Across Tamil Nadu
              </span>
            </div>
          </div>
        </div>

        {/* Upcoming Events Section */}
        <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-foreground text-center">Upcoming Events</h2>
        <div className="space-y-6 mb-16 max-w-3xl mx-auto">
          {events.map((event, idx) => (
            <div key={idx} className="bg-white border rounded-xl p-6 shadow-sm flex flex-col sm:flex-row gap-4 sm:gap-6 items-start hover:shadow-md transition-shadow">
              <div className="bg-primary/10 text-primary font-extrabold text-sm shrink-0 w-24 sm:w-28 py-3 rounded-lg text-center">
                {event.date}
              </div>
              <div className="space-y-2 flex-1">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h3 className="font-bold text-lg text-foreground">{event.title}</h3>
                  {event.location && (
                    <span className="inline-flex items-center gap-1 text-xs font-semibold text-primary bg-primary/10 px-2.5 py-1 rounded-full">
                      <MapPin className="w-3 h-3" />
                      {event.location}
                    </span>
                  )}
                </div>

                {event.category && (
                  <p className="text-xs font-semibold text-secondary flex items-center gap-1.5">
                    <Tag className="w-3.5 h-3.5" />
                    {event.category}
                  </p>
                )}

                {event.subtitle && (
                  <p className="text-xs font-semibold text-secondary flex items-center gap-1.5">
                    <Briefcase className="w-3.5 h-3.5" />
                    {event.subtitle}
                  </p>
                )}

                <p className="text-sm text-muted-foreground leading-relaxed">{event.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Event Registration Section */}
        <div className="bg-white border rounded-xl p-8 sm:p-12 shadow-lg max-w-2xl mx-auto">
          {formSubmitted ? (
            <div className="text-center py-12">
              <CheckCircle2 className="w-16 h-16 text-emerald-500 mx-auto mb-6" />
              <h3 className="text-3xl font-bold mb-4">Registration Confirmed</h3>
              <p className="text-muted-foreground text-lg mb-8">
                Thank you for registering. Your reference ID is <strong className="text-primary">{registrationId}</strong>. Our team will contact you shortly with event details and schedules.
              </p>
              <Button 
                onClick={() => setFormSubmitted(false)} 
                className="bg-primary hover:bg-primary/90 text-white font-bold"
              >
                Register Another Participant
              </Button>
            </div>
          ) : (
            <>
              <h2 className="text-3xl font-bold mb-4 text-center">Event Registration</h2>
              <p className="text-muted-foreground text-center mb-10">
                Register your interest to participate in upcoming GSSIFO events. Fill out the form below and our team will contact you with event details.
              </p>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-bold mb-2">Full Name</label>
                  <input 
                    type="text" 
                    name="name" 
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Enter your full name"
                    className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary" 
                    required 
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold mb-2">Email Address</label>
                  <input 
                    type="email" 
                    name="email" 
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Enter your email address"
                    className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary" 
                    required 
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold mb-2">About You</label>
                  <textarea 
                    name="about" 
                    rows={4}
                    value={formData.about}
                    onChange={handleInputChange}
                    placeholder="Tell us about yourself, your interests, or why you'd like to participate..."
                    className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary resize-y" 
                    required 
                  />
                </div>

                <Button type="submit" size="lg" className="w-full h-14 bg-primary hover:bg-primary/90 text-white font-bold rounded-lg shadow-sm text-base">
                  Register for Event
                </Button>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
