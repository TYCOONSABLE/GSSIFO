import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import logoImage from "@/assets/images/gssifo-logo.webp";

export default function LaunchingSoon() {
  return (
    <div className="min-h-screen bg-[#f8fafc] flex flex-col items-center justify-center relative overflow-hidden font-sans text-slate-800">
      {/* Background gradients and effects for a premium light theme */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <div className="absolute -top-[10%] -left-[10%] w-[50%] h-[50%] rounded-full bg-blue-100/50 blur-[100px]" />
        <div className="absolute top-[20%] -right-[10%] w-[50%] h-[50%] rounded-full bg-indigo-100/40 blur-[100px]" />
        <div className="absolute -bottom-[10%] left-[20%] w-[50%] h-[50%] rounded-full bg-slate-100/60 blur-[100px]" />
        
        {/* Soft floating particles */}
        <motion.div 
          animate={{ y: [0, -15, 0], opacity: [0.4, 0.7, 0.4] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-1/4 w-2 h-2 rounded-full bg-blue-300"
        />
        <motion.div 
          animate={{ y: [0, 20, 0], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute top-1/3 right-1/3 w-3 h-3 rounded-full bg-indigo-300"
        />
        <motion.div 
          animate={{ x: [0, 15, 0], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-1/4 left-1/3 w-2 h-2 rounded-full bg-sky-200"
        />
      </div>

      <div className="z-10 w-full max-w-4xl px-4 py-8 flex flex-col items-center">
        {/* Logo */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8 flex items-center gap-2"
        >
          <img src={logoImage} alt="GSSIFO Logo" className="h-16 w-auto object-contain" />
          <span className="font-bold text-2xl sm:text-3xl tracking-tight text-[#0d55d1] -ml-1">
            GSSIFO
          </span>
        </motion.div>

        {/* Main Card */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="w-full max-w-xl bg-white/70 backdrop-blur-md border border-slate-200/60 p-8 md:p-12 rounded-3xl shadow-xl shadow-slate-100/50 flex flex-col items-center text-center relative overflow-hidden"
        >
          {/* Subtle top border gradient matching brand colors */}
          <div className="absolute top-0 left-0 w-full h-[4px] bg-gradient-to-r from-blue-500 via-indigo-500 to-sky-400"></div>
          
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-55 border border-blue-100 text-xs font-semibold text-[#0d55d1] mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-[#0d55d1] animate-pulse"></span>
            Website under construction
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4 text-slate-900"
          >
            Launching Soon
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-base md:text-lg text-slate-500 mb-8 max-w-md leading-relaxed"
          >
            We're building something amazing. Our website will be available soon.
          </motion.p>

          {/* Progress Indicator */}
          <motion.div 
            initial={{ opacity: 0, width: "0%" }}
            animate={{ opacity: 1, width: "100%" }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="w-full max-w-sm mb-4"
          >
            <div className="flex justify-between text-xs text-slate-500 mb-2 font-semibold">
              <span>Development Progress</span>
              <span>85%</span>
            </div>
            <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden border border-slate-200/30">
              <motion.div 
                initial={{ width: "0%" }}
                animate={{ width: "85%" }}
                transition={{ duration: 1.2, delay: 0.8, ease: "easeOut" }}
                className="h-full bg-[#0d55d1] rounded-full"
              />
            </div>
          </motion.div>
        </motion.div>
        
        {/* Footer / Contact */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-12 flex flex-col items-center gap-4 text-sm text-slate-400 font-medium"
        >
          <a href="mailto:info@gssifo.org" className="flex items-center gap-2 text-slate-500 hover:text-[#0d55d1] transition-colors">
            <Mail className="w-4 h-4" />
            info@gssifo.org
          </a>
          <p>&copy; {new Date().getFullYear()} GSSIFO. All rights reserved.</p>
        </motion.div>
      </div>
    </div>
  );
}
