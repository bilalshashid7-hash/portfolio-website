import { motion } from "motion/react";
import { Sparkles, Library, Layers, ClipboardCheck, ArrowUpRight } from "lucide-react";

export default function SkillsPage() {
  const skillCategories = [
    {
      id: "content-social",
      title: "Content & Social Media",
      icon: Library,
      skills: [
        "LinkedIn",
        "Facebook",
        "Instagram",
        "Content Planning",
        "Scheduling",
        "Engagement",
        "Performance Tracking"
      ]
    },
    {
      id: "coordination",
      title: "Coordination",
      icon: Layers,
      skills: [
        "Cross-team Collaboration",
        "Client Communication",
        "Multi-tasking Under Deadlines"
      ]
    },
    {
      id: "reporting-optimisation",
      title: "Reporting & Optimisation",
      icon: ClipboardCheck,
      skills: [
        "Campaign KPIs",
        "Sales Activity Reports",
        "Client Feedback",
        "Performance Optimisation"
      ]
    }
  ];

  const tools = [
    {
      name: "Meta Ads",
      glow: "rgba(0, 129, 251, 0.2)",
      svg: (
        <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-12 h-12">
          <defs>
            <linearGradient id="meta-grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0064E0" />
              <stop offset="50%" stopColor="#0081FB" />
              <stop offset="100%" stopColor="#CC33FF" />
            </linearGradient>
          </defs>
          <path
            d="M74.5 35.5C68.5 35.5 63.5 39.5 60.5 44.5C57.5 39.5 52.5 35.5 46.5 35.5C34.5 35.5 25 45 25 57C25 69 34.5 78.5 46.5 78.5C52.5 78.5 57.5 74.5 60.5 69.5C63.5 74.5 68.5 78.5 74.5 78.5C86.5 78.5 96 69 96 57C96 45 86.5 35.5 74.5 35.5ZM46.5 69.5C39.5 69.5 34 64 34 57C34 50 39.5 44.5 46.5 44.5C52.5 44.5 57.5 49 58.5 55H39C38 55 37.5 56 37.5 57C37.5 58 38 59 39 59H58.8C58.3 64.5 53 69.5 46.5 69.5ZM74.5 69.5C68 69.5 62.7 64.5 62.2 59H82C83 59 83.5 58 83.5 57C83.5 56 83 55 82 55H62.5C63.5 49 68.5 44.5 74.5 44.5C81.5 44.5 87 50 87 57C87 64 81.5 69.5 74.5 69.5Z"
            fill="url(#meta-grad)"
          />
        </svg>
      )
    },
    {
      name: "Google Ads",
      glow: "rgba(66, 133, 244, 0.2)",
      svg: (
        <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-12 h-12">
          <path
            d="M25 75 L55 23 C56.5 20 60.5 20 62 23 L92 75 C93.5 78 91 82 87.5 82 L30.5 82 C27 82 23.5 78 25 75 Z"
            fill="#4285F4"
          />
          <path
            d="M25 75 L42.5 45 L57.5 71 L30.5 82 C27.5 82 25 78 25 75 Z"
            fill="#F4B400"
          />
          <path
            d="M57.5 71 L42.5 45 L50 32 L87.5 82 L57.5 71 Z"
            fill="#DB4437"
          />
        </svg>
      )
    },
    {
      name: "Google Analytics",
      glow: "rgba(244, 180, 0, 0.2)",
      svg: (
        <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-12 h-12">
          <path d="M22 75C22 78.5 19.5 81 16 81C12.5 81 10 78.5 10 75C10 71.5 12.5 69 16 69C19.5 69 22 71.5 22 75Z" fill="#F4B400" />
          <path d="M48 72C48 77 44 81 39 81C34 81 30 77 30 72V47C30 42 34 38 39 38C44 38 48 42 48 47V72Z" fill="#F97316" />
          <path d="M74 72C74 77 70 81 65 81C60 81 56 77 56 72V24C56 19 60 15 65 15C70 15 74 19 74 24V72Z" fill="#E11D48" />
          <path d="M96 75C96 78.5 93.5 81 90 81C86.5 81 84 78.5 84 75C84 71.5 86.5 69 90 69C93.5 69 96 71.5 96 75Z" fill="#F4B400" />
        </svg>
      )
    },
    {
      name: "Google Tag Manager",
      glow: "rgba(36, 193, 224, 0.2)",
      svg: (
        <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-12 h-12">
          <path d="M50 15 L85 50 L50 85 L15 50 Z" fill="#24C1E0" className="opacity-90" />
          <path d="M50 30 L70 50 L50 70 L30 50 Z" fill="#1A73E8" />
          <circle cx="50" cy="50" r="10" fill="#FFFFFF" />
          <line x1="15" y1="50" x2="30" y2="50" stroke="#FFFFFF" strokeWidth="3" />
          <line x1="70" y1="50" x2="85" y2="50" stroke="#FFFFFF" strokeWidth="3" />
        </svg>
      )
    },
    {
      name: "Microsoft Clarity",
      glow: "rgba(22, 163, 74, 0.2)",
      svg: (
        <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-12 h-12">
          <rect x="15" y="15" width="70" height="70" rx="12" fill="#111827" stroke="#2F4F4E" strokeWidth="2" />
          <circle cx="45" cy="55" r="28" fill="#16A34A" className="opacity-30" />
          <circle cx="65" cy="40" r="20" fill="#EA580C" className="opacity-45" />
          <path d="M25 45 L40 35 L60 65 L75 45" stroke="#FFFFFF" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="75" cy="45" r="5" fill="#FFFFFF" />
        </svg>
      )
    },
    {
      name: "Looker Studio",
      glow: "rgba(168, 85, 247, 0.2)",
      svg: (
        <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-12 h-12">
          <circle cx="34" cy="30" r="14" fill="#4285F4" />
          <circle cx="66" cy="30" r="14" fill="#EA4335" />
          <circle cx="50" cy="70" r="18" fill="#34A853" />
          <path d="M34 30 L50 70 M66 30 L50 70" stroke="#FFFFFF" strokeWidth="3" strokeDasharray="3 3" />
          <circle cx="50" cy="70" r="8" fill="#FBBC05" />
        </svg>
      )
    },
    {
      name: "Buffer",
      glow: "rgba(255, 255, 255, 0.1)",
      svg: (
        <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-12 h-12">
          <path d="M15 25 L50 12 L85 25 L50 38 Z" fill="#FFFEFF" />
          <path d="M15 45 L50 32 L85 45 L50 58 Z" fill="#FFFEFF" className="opacity-75" />
          <path d="M15 65 L50 52 L85 65 L50 78 Z" fill="#FFFEFF" className="opacity-45" />
        </svg>
      )
    },
    {
      name: "ManyChat",
      glow: "rgba(59, 130, 246, 0.2)",
      svg: (
        <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-12 h-12">
          <circle cx="50" cy="50" r="40" fill="#0073FF" />
          <path d="M45 28 L35 52 L48 52 L43 72 L62 44 L49 44 Z" fill="#FBBF24" />
          <circle cx="50" cy="50" r="34" stroke="#FFFFFF" strokeWidth="3" className="opacity-30" />
        </svg>
      )
    }
  ];

  return (
    <div className="w-full min-h-screen bg-[#0E1314] text-[#FFFEFF] font-sans pb-24 pt-28 px-6 sm:px-12 md:px-16 overflow-x-hidden selection:bg-[#2F4F4E]/40">
      
      {/* ===================== SECTION HEADER WITH PREMIUM ACCENT BLOCK ===================== */}
      <div className="max-w-7xl mx-auto mb-16 relative">
        {/* Premium accent block at top using #2F4F4E */}
        <div className="absolute top-0 left-0 w-16 h-1 bg-[#2F4F4E] rounded-full" />
        
        {/* Subtle abstract geometric texture representing architecture and structural blueprint layers */}
        <div className="absolute top-[-30px] right-0 sm:right-10 pointer-events-none opacity-20">
          <svg width="200" height="80" viewBox="0 0 200 80" fill="none" className="text-[#2F4F4E]">
            <path d="M0 10 H200 M0 30 H200 M0 50 H200 M0 70 H200" stroke="currentColor" strokeWidth="0.5" strokeDasharray="4 4" />
            <path d="M20 0 V80 M60 0 V80 M100 0 V80 M140 0 V80 M180 0 V80" stroke="currentColor" strokeWidth="0.5" strokeOpacity="0.5" />
          </svg>
        </div>

        <div className="pt-6">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-xs sm:text-sm font-mono tracking-[0.4em] text-[#2F4F4E] uppercase font-bold"
          >
            EXPERTISE
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.1 }}
            className="text-4xl sm:text-6xl md:text-7xl font-sans font-black tracking-wider text-[#FFFEFF] uppercase mt-2 leading-none"
          >
            SKILLS & TOOLS
          </motion.h1>
        </div>
      </div>

      {/* ===================== CONTENT SPLIT GRID ===================== */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        
        {/* ===================== LEFT SIDE: SKILLS STACK ===================== */}
        <div className="lg:col-span-6 flex flex-col space-y-8">
          <div className="flex items-center justify-between pb-3 border-b border-[#2F4F4E]/25">
            <h2 className="text-lg sm:text-xl font-bold tracking-[0.25em] text-[#2F4F4E] uppercase font-sans flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-[#2F4F4E]" />
              SKILLS
            </h2>
            <span className="text-[10px] font-mono text-neutral-500 tracking-wider">STRUCTURED_STRIKES</span>
          </div>

          <div className="space-y-6">
            {skillCategories.map((category, index) => {
              const CategoryIcon = category.icon;
              return (
                <motion.div
                  key={category.id}
                  initial={{ opacity: 0, y: 25 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.15 }}
                  className="p-6 rounded-xl border border-white/5 bg-black/30 hover:border-[#2F4F4E]/30 hover:bg-[#2F4F4E]/5 transition-all duration-300 group"
                >
                  <div className="flex items-center gap-3 mb-4 select-none">
                    <div className="w-10 h-10 rounded-lg bg-black border border-[#2F4F4E]/30 flex items-center justify-center text-[#2F4F4E] group-hover:text-white group-hover:border-[#2F4F4E] transition-all duration-300">
                      <CategoryIcon className="w-5 h-5" />
                    </div>
                    <h3 className="text-sm sm:text-base font-bold tracking-wider text-white uppercase">
                      {category.title}
                    </h3>
                  </div>

                  <div className="flex flex-wrap gap-2.5">
                    {category.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="px-3.5 py-1.5 rounded-lg text-xs font-sans tracking-wide text-neutral-300 bg-black/40 border border-white/[0.04] hover:border-[#2F4F4E]/40 hover:text-white transition-colors duration-250 cursor-default"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* ===================== RIGHT SIDE: TOOLS GRID ===================== */}
        <div className="lg:col-span-6 flex flex-col space-y-8">
          <div className="flex items-center justify-between pb-3 border-b border-[#2F4F4E]/25">
            <h2 className="text-lg sm:text-xl font-bold tracking-[0.25em] text-[#2F4F4E] uppercase font-sans flex items-center gap-2">
              <Layers className="w-5 h-5 text-[#2F4F4E]" />
              TOOLS
            </h2>
            <span className="text-[10px] font-mono text-neutral-500 tracking-wider">INTEGRATION_GRID</span>
          </div>

          {/* Luxury Floating Grid of Colorful Brand SVGs */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
            {tools.map((tool, index) => (
              <motion.div
                key={tool.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                whileHover={{ 
                  y: -6, 
                  boxShadow: `0 10px 30px -10px ${tool.glow}`,
                  borderColor: "rgba(47, 79, 78, 0.45)"
                }}
                className="relative bg-black/30 border border-white/5 rounded-xl aspect-square flex flex-col items-center justify-center space-y-4 p-4 cursor-pointer transition-all duration-300 group"
              >
                {/* Micro Ambient Glow Backdrop */}
                <div 
                  className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-350 blur-xl pointer-events-none" 
                  style={{ backgroundColor: tool.glow }}
                />

                {/* Pixel-perfect Customized SVG Logo */}
                <div className="relative z-10 transition-transform duration-500 group-hover:scale-110 filter hover:brightness-110">
                  {tool.svg}
                </div>

                {/* Floating Meta Identifier */}
                <div className="text-[10px] sm:text-[11px] font-mono font-medium tracking-widest text-[#2F4F4E]/70 group-hover:text-white transition-colors duration-300 text-center uppercase relative z-10">
                  {tool.name}
                </div>

                {/* Subtle Arrow Visual Decor representing link/connectivity */}
                <div className="absolute top-2.5 right-2.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#2F4F4E]" />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Minimal Bottom Abstract Decorative Accent to match high-end agency layouts */}
          <div className="pt-8 relative select-none">
            <div className="p-6 rounded-xl border border-[#2F4F4E]/20 bg-black/10 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#2F4F4E]/5 rounded-bl-full pointer-events-none" />
              <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed font-light font-sans inline-block">
                This comprehensive suite allows for full-funnel <span className="text-white font-medium">campaign optimization, tracking integrity,</span> and <span className="text-white font-medium">automated lead capture diagnostics</span>. Every execution is audited at the highest metric-standard granularity.
              </p>
              <div className="mt-4 flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-[#2F4F4E] animate-ping" />
                <span className="text-[9px] font-mono text-neutral-500 uppercase tracking-widest">REAL-TIME CONVERSION AUDITING SERVICE</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
