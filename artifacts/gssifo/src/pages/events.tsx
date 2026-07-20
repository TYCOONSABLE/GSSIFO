import { useEffect, useState } from "react";
import { Link } from "wouter";
import { ArrowLeft, MapPin } from "lucide-react";

const MONTH_MAP: Record<string, number> = {
  JAN: 1, FEB: 2, MAR: 3, APR: 4, MAY: 5, JUN: 6,
  JUL: 7, AUG: 8, SEP: 9, OCT: 10, NOV: 11, DEC: 12
};

export default function EventsPage() {
  const defaultEvents = [
    { date: "14", month: "AUG", title: "GSSIFO Sports Summit (Trichy)", loc: "Trichy", desc: "Join our flagship sports event featuring competitions, teamwork, leadership, and community participation." },
    { date: "10", month: "SEP", title: "GSSIFO Sports Summit (Coimbatore)", loc: "Coimbatore", desc: "Participate in our flagship sports summit that brings together youth through sports, fitness, and leadership activities." },
    { date: "05", month: "OCT", title: "GSSIFO Sports Summit (Madurai)", loc: "Madurai", desc: "Celebrate sportsmanship and community engagement at the GSSIFO Sports Summit in Madurai." },
    { date: "31", month: "JUL", title: "Responsive Youth Program", loc: "Youth Development, Reading, Teamwork, Public Hygiene", desc: "An interactive youth development program that encourages leadership, teamwork, reading habits, and community service through public hygiene initiatives." },
    { date: "30", month: "AUG", title: "Job Fair", loc: "Providing Employment Opportunities", desc: "Connect job seekers with employers, explore career opportunities, receive career guidance, and participate in recruitment drives." }
  ];
  const [eventsList, setEventsList] = useState(defaultEvents);

  useEffect(() => {
    const apiBase = import.meta.env.VITE_API_URL || "";
    fetch(`${apiBase}/api/events`)
      .then(res => res.json())
      .then(data => {
        if (Array.isArray(data) && data.length > 0) {
          setEventsList(data);
        }
      })
      .catch(() => {});
  }, []);

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

  return (
    <div className="py-24 bg-slate-50/50 min-h-screen">
      <div className="container mx-auto px-4 max-w-4xl">
        <Link href="/" className="inline-flex items-center text-primary font-bold hover:underline mb-8 group">
          <ArrowLeft className="mr-2 w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Back to Home
        </Link>

        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4">GSSIFO Events Calendar</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Stay updated with our ongoing and upcoming programs, workshops, and community events across Asia.
          </p>
        </div>

        <div className="flex flex-col gap-6">
          {sortedEvents.map((event, i) => (
            <div key={i} className="flex flex-col sm:flex-row bg-white rounded-xl border border-slate-100 hover:shadow-md transition-shadow overflow-hidden min-h-[120px] shadow-sm">
              {/* Date Section (Fixed width, centered text, equal sizing) */}
              <div className="bg-slate-50/80 sm:w-36 flex-shrink-0 flex flex-row sm:flex-col items-center justify-center p-6 border-b sm:border-b-0 sm:border-r border-slate-100">
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
      </div>
    </div>
  );
}
