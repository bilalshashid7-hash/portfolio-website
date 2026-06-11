import { useState, useRef, ChangeEvent, MouseEvent } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Briefcase, Calendar, MapPin, Sparkles, Image, Plus, Trash2, Layers, AlertCircle } from "lucide-react";

interface VisualAssetSlot {
  id: string;
  label: string;
  category: string;
  description: string;
  image: string | null;
}

export default function ExperiencePage() {
  return (
    <div className="w-full min-h-screen bg-[#0E1314] text-[#FFFEFF] font-sans pb-24 pt-28 px-6 sm:px-12 md:px-16 overflow-x-hidden selection:bg-[#2F4F4E]/40">
      
      {/* ===================== SECTION HEADER WITH PREMIUM ACCENT BLOCK ===================== */}
      <div className="max-w-4xl mx-auto mb-16 relative">
        {/* Premium accent block at top using #2F4F4E */}
        <div className="absolute top-0 left-0 w-16 h-1 bg-[#2F4F4E] rounded-full" />
        
        {/* Subtle abstract geometric texture representing architecture and structure lines */}
        <div className="absolute top-[-30px] right-0 pointer-events-none opacity-20">
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
            PROFESSIONAL
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.1 }}
            className="text-4xl sm:text-6xl md:text-7xl font-sans font-black tracking-wider text-[#FFFEFF] uppercase mt-2 leading-none"
          >
            EXPERIENCE
          </motion.h1>
        </div>
      </div>

      {/* ===================== THE TIMELINE OF RECRUITER-FRIENDLY DETAIL BLOCKS ===================== */}
      <div className="max-w-4xl mx-auto">
        <div className="relative pl-6 sm:pl-8 border-l border-[#2F4F4E]/20 space-y-12 select-text">
          
          {/* ===================== Entry 01: ZHS Technologies (Featured) ===================== */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative group"
          >
            {/* Vertical connector badge glowing */}
            <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-[#0E1314] border border-[#2F4F4E] flex items-center justify-center group-hover:border-[#FFFEFF] transition-all duration-300 shadow-[0_0_12px_rgba(47,79,78,0.5)]">
              <div className="w-1.5 h-1.5 rounded-full bg-[#2F4F4E] group-hover:bg-[#FFFEFF]" />
            </div>

            {/* Special Featured Outline/Highlight Border Wrapper */}
            <div className="relative p-6 sm:p-8 rounded-xl border border-[#2F4F4E]/50 bg-[#2F4F4E]/5 hover:bg-[#2F4F4E]/10 group-hover:border-[#2F4F4E] transition-all duration-300 shadow-[0_4px_30px_rgba(47,79,78,0.1)] overflow-hidden">
              {/* Visual indicator corner tag for "FEATURED" */}
              <div className="absolute top-0 right-0 px-3 py-1 bg-[#2F4F4E] text-[#FFFEFF] text-[8px] sm:text-[9px] font-mono uppercase tracking-[0.25em] rounded-bl-lg font-semibold flex items-center gap-1">
                <Sparkles className="w-2.5 h-2.5 text-white" />
                Featured Roll
              </div>

              {/* Main Heading Detail */}
              <div className="space-y-2 mb-4">
                <h3 className="text-xl sm:text-2xl font-black tracking-wider text-white uppercase pr-16 leading-tight">
                  MARKETING PLANNING & DIGITAL MARKETING EXECUTIVE
                </h3>
                
                <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs sm:text-sm text-neutral-300 font-medium select-none">
                  <span className="text-[#2F4F4E] font-bold tracking-wider hover:text-white transition-colors">
                    ZHS Technologies
                  </span>
                  <span className="text-neutral-600 sm:inline hidden">•</span>
                  <span className="px-2 py-0.5 rounded bg-black/40 text-[10px] sm:text-xs font-mono tracking-widest text-neutral-400 uppercase font-semibold">
                    Full-time
                  </span>
                </div>
              </div>

              {/* Location Map Pin Info */}
              <div className="flex flex-wrap items-center gap-x-6 gap-y-2 mb-6 border-b border-white/5 pb-4 text-xs font-mono text-neutral-400 select-none">
                <span className="inline-flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5 text-[#2F4F4E]" />
                  Jan 2025 – Feb 2026
                </span>
                <span className="inline-flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-[#2F4F4E]" />
                  Karachi Division, Sindh, Pakistan
                </span>
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-[#2F4F4E]/10 border border-[#2F4F4E]/30 text-white text-[10px]">
                  On-site
                </span>
              </div>

              {/* Highlights List */}
              <ul className="space-y-3 sm:space-y-4 text-xs sm:text-sm text-neutral-300 font-light leading-relaxed">
                <li className="flex items-start gap-2 sm:gap-3 group/item">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#2F4F4E] group-hover/item:bg-white shrink-0 mt-2 transition-colors duration-200" />
                  <p>
                    Built marketing reporting systems and transformed performance data into actionable insights using <span className="text-white font-medium">CTR, Reach, ROAS,</span> and engagement tracking.
                  </p>
                </li>
                <li className="flex items-start gap-2 sm:gap-3 group/item">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#2F4F4E] group-hover/item:bg-white shrink-0 mt-2 transition-colors duration-200" />
                  <p>
                    Designed clear dashboards in <span className="text-white font-medium">Looker Studio</span> for team decision-making.
                  </p>
                </li>
                <li className="flex items-start gap-2 sm:gap-3 group/item">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#2F4F4E] group-hover/item:bg-white shrink-0 mt-2 transition-colors duration-200" />
                  <p>
                    Used <span className="text-white font-medium">Microsoft Clarity heatmaps</span> to identify conversion issues and improve user journeys.
                  </p>
                </li>
                <li className="flex items-start gap-2 sm:gap-3 group/item">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#2F4F4E] group-hover/item:bg-white shrink-0 mt-2 transition-colors duration-200" />
                  <p>
                    Integrated <span className="text-white font-medium italic">AI workflows using Claude and Canva AI</span> to improve content efficiency.
                  </p>
                </li>
                <li className="flex items-start gap-2 sm:gap-3 group/item">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#2F4F4E] group-hover/item:bg-white shrink-0 mt-2 transition-colors duration-200" />
                  <p>
                    Managed complete social media strategy across Facebook, Instagram, and LinkedIn.
                  </p>
                </li>
                <li className="flex items-start gap-2 sm:gap-3 group/item">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#2F4F4E] group-hover/item:bg-white shrink-0 mt-2 transition-colors duration-200" />
                  <p>
                    Executed <span className="text-white font-medium">Meta and Google Ads campaigns</span> from planning to optimization.
                  </p>
                </li>
              </ul>

            </div>
          </motion.div>

          {/* Separator line */}
          <div className="h-[1px] bg-gradient-to-r from-[#2F4F4E]/25 to-transparent my-4 pointer-events-none" />

          {/* ===================== Entry 02: Ossols Private Limited ===================== */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="relative group"
          >
            {/* Connector */}
            <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-[#0E1314] border border-[#2F4F4E] flex items-center justify-center group-hover:border-white transition-colors duration-300">
              <div className="w-1.5 h-1.5 rounded-full bg-[#2F4F4E] group-hover:bg-white transition-colors" />
            </div>

            {/* Standard Card Container */}
            <div className="p-6 sm:p-8 rounded-xl border border-white/5 bg-black/20 hover:border-[#2F4F4E]/40 hover:bg-[#2F4F4E]/5 transition-all duration-300">
              
              {/* Heading details */}
              <div className="space-y-2 mb-4">
                <h3 className="text-lg sm:text-xl font-bold tracking-wider text-white uppercase mt-0.5 leading-tight">
                  MARKETING EXECUTIVE
                </h3>
                <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs sm:text-sm text-neutral-300 font-medium select-none">
                  <span className="text-[#2F4F4E]/80 font-bold tracking-wider hover:text-[#2F4F4E] transition-colors">
                    Ossols Private Limited
                  </span>
                  <span className="text-neutral-700 sm:inline hidden">•</span>
                  <span className="px-2 py-0.5 rounded bg-black/40 text-[10px] sm:text-xs font-mono text-neutral-400 uppercase font-semibold">
                    Full-time
                  </span>
                </div>
              </div>

              {/* Metadata Locations */}
              <div className="flex flex-wrap items-center gap-x-6 gap-y-2 mb-6 border-b border-white/5 pb-4 text-xs font-mono text-neutral-400 select-none">
                <span className="inline-flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5 text-[#2F4F4E]/85" />
                  Jan 2024 – Dec 2024
                </span>
                <span className="inline-flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-[#2F4F4E]/85" />
                  Karachi Division, Sindh, Pakistan
                </span>
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-black border border-white/5 text-[10px]/normal text-neutral-400">
                  On-site
                </span>
              </div>

              {/* Highlights List */}
              <ul className="space-y-3 text-xs sm:text-sm text-neutral-300 font-light leading-relaxed">
                <li className="flex items-start gap-2 sm:gap-3 group/item">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#2F4F4E] shrink-0 mt-2" />
                  <p>
                    Generated <span className="text-white font-medium">30+ qualified leads monthly</span> through social outreach campaigns and structural profiling.
                  </p>
                </li>
                <li className="flex items-start gap-2 sm:gap-3 group/item">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#2F4F4E] shrink-0 mt-2" />
                  <p>
                    Managed multiple client accounts and campaign operations simultaneously with high performance metrics.
                  </p>
                </li>
                <li className="flex items-start gap-2 sm:gap-3 group/item">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#2F4F4E] shrink-0 mt-2" />
                  <p>
                    Created engaging content workflows specifically aligned to Facebook and Instagram parameters.
                  </p>
                </li>
                <li className="flex items-start gap-2 sm:gap-3 group/item">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#2F4F4E] shrink-0 mt-2" />
                  <p>
                    Improved campaign acquisition budgets and outcomes through proactive daily optimization routines.
                  </p>
                </li>
              </ul>

            </div>
          </motion.div>

          {/* Separator line */}
          <div className="h-[1px] bg-gradient-to-r from-[#2F4F4E]/25 to-transparent my-4 pointer-events-none" />

          {/* ===================== Entry 03: CodeBucketz ===================== */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="relative group"
          >
            {/* Connector */}
            <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-[#0E1314] border border-[#2F4F4E] flex items-center justify-center group-hover:border-white transition-colors duration-300">
              <div className="w-1.5 h-1.5 rounded-full bg-[#2F4F4E] group-hover:bg-white transition-colors" />
            </div>

            {/* Standard Card Container */}
            <div className="p-6 sm:p-8 rounded-xl border border-white/5 bg-black/20 hover:border-[#2F4F4E]/40 hover:bg-[#2F4F4E]/5 transition-all duration-300">
              
              {/* Heading details */}
              <div className="space-y-2 mb-4">
                <h3 className="text-lg sm:text-xl font-bold tracking-wider text-white uppercase mt-0.5 leading-tight">
                  MARKETING TRAINEE
                </h3>
                <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs sm:text-sm text-neutral-300 font-medium select-none">
                  <span className="text-[#2F4F4E]/80 font-bold tracking-wider hover:text-[#2F4F4E] transition-colors">
                    CodeBucketz
                  </span>
                  <span className="text-neutral-700 sm:inline hidden">•</span>
                  <span className="px-2 py-0.5 rounded bg-black/40 text-[10px] sm:text-xs font-mono text-neutral-400 uppercase font-semibold">
                    Full-time
                  </span>
                </div>
              </div>

              {/* Metadata Locations */}
              <div className="flex flex-wrap items-center gap-x-6 gap-y-2 mb-6 border-b border-white/5 pb-4 text-xs font-mono text-neutral-400 select-none">
                <span className="inline-flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5 text-[#2F4F4E]/85" />
                  Nov 2022 – Dec 2023
                </span>
                <span className="inline-flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-[#2F4F4E]/85" />
                  Karachi, Sindh, Pakistan
                </span>
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-black border border-white/5 text-[10px]/normal text-neutral-400">
                  On-site
                </span>
              </div>

              {/* Highlights List */}
              <ul className="space-y-3 text-xs sm:text-sm text-neutral-300 font-light leading-relaxed">
                <li className="flex items-start gap-2 sm:gap-3 group/item">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#2F4F4E] shrink-0 mt-2" />
                  <p>
                    Assisted in core planning and execution stages of digital marketing campaigns.
                  </p>
                </li>
                <li className="flex items-start gap-2 sm:gap-3 group/item">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#2F4F4E] shrink-0 mt-2" />
                  <p>
                    Monitored daily campaign performance metrics and constructed summary logs.
                  </p>
                </li>
                <li className="flex items-start gap-2 sm:gap-3 group/item">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#2F4F4E] shrink-0 mt-2" />
                  <p>
                    Managed editorial social media scheduling and interacted to drive audience engagement levels.
                  </p>
                </li>
                <li className="flex items-start gap-2 sm:gap-3 group/item">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#2F4F4E] shrink-0 mt-2" />
                  <p>
                    Conducted extensive market research and competitive indexing audits.
                  </p>
                </li>
              </ul>

            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
}
