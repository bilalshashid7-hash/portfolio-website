import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { GraduationCap, Award, Calendar, Eye, X } from "lucide-react";
import degreeCertificateImg from "../assets/images/degree-certificate.jfif";

export default function EducationPage() {
  const [lightbox, setLightbox] = useState<{ src: string; title: string; sectionName: string } | null>(null);
  const localDegreeImage = degreeCertificateImg;

  return (
    <div className="w-full min-h-screen bg-[#0E1314] text-[#FFFEFF] font-sans pb-24 pt-28 px-6 sm:px-12 md:px-16 overflow-x-hidden selection:bg-[#2F4F4E]/40">
      
      {/* ===================== SECTION HEADER WITH PREMIUM ACCENT BLOCK ===================== */}
      <div className="max-w-7xl mx-auto mb-16 relative">
        {/* Premium accent block at top using #2F4F4E */}
        <div className="absolute top-0 left-0 w-16 h-1 bg-[#2F4F4E] rounded-full" />
        
        {/* Subtle abstract geometric frame texture representing a brush / architectural reference lines */}
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
            EDUCATION
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.1 }}
            className="text-4xl sm:text-6xl md:text-7xl font-sans font-black tracking-wider text-[#FFFEFF] uppercase mt-2 leading-none"
          >
            BACKGROUND
          </motion.h1>
        </div>
      </div>

      {/* ===================== CONTENT GRID STRUCTURE ===================== */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        
        {/* ===================== LEFT SIDE: DEDICATED PERMANENT DEGREE SHOWCASE ===================== */}
        <div className="lg:col-span-6 flex flex-col justify-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, delay: 0.2 }}
            className="w-full flex flex-col space-y-4"
          >
            {/* Header tag for frame */}
            <div className="flex items-center justify-between px-2 text-[10px] font-mono tracking-widest text-[#2F4F4E]">
              <span>[ REGISTRATION_DOC // DIPLOMA ]</span>
              <span>VERIFIED IQRA UNIVERSITY BBA</span>
            </div>

            {/* Custom High-End Polished Showcase Frame Container */}
            <div className="relative w-full aspect-[4/5] rounded-xl border border-[#2F4F4E]/20 bg-black/40 overflow-hidden flex flex-col items-center justify-center p-3 select-none group">
              {/* EXQUISITE REAL DEPLOYED DEGREE */}
              <div 
                onClick={() => setLightbox({ src: localDegreeImage, title: "Bachelor of Business Administration (BBA)", sectionName: "Iqra University" })}
                className="w-full h-full rounded-lg overflow-hidden relative bg-[#040607] flex items-center justify-center border border-[#2F4F4E]/15 cursor-zoom-in group/img"
              >
                <img
                  src={localDegreeImage}
                  alt="Iqra University Degree Certificate"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-contain filter brightness-[1.03] contrast-[1.05] transition-transform duration-700 group-hover/img:scale-[1.03] will-change-transform"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-[linear-gradient(rgba(47,79,78,0.05)_1px,transparent_1px)] bg-[size:16px_16px] pointer-events-none" />
                
                {/* Subtle Interactive Hover Indicator */}
                <div className="absolute inset-0 bg-black/70 opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-[#2F4F4E]/10 border border-[#2F4F4E]/40 flex items-center justify-center text-[#2F4F4E]">
                    <Eye className="w-4 h-4" />
                  </div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-300 font-medium">Click to Zoom</span>
                </div>
              </div>

              {/* Aesthetic corners decoration of outer showcase */}
              <div className="absolute top-3 left-3 w-4 h-4 border-t border-l border-[#2F4F4E]/30" />
              <div className="absolute top-3 right-3 w-4 h-4 border-t border-r border-[#2F4F4E]/30" />
              <div className="absolute bottom-3 left-3 w-4 h-4 border-b border-l border-[#2F4F4E]/30" />
              <div className="absolute bottom-3 right-3 w-4 h-4 border-b border-r border-[#2F4F4E]/30" />
            </div>
          </motion.div>
        </div>

        {/* ===================== RIGHT SIDE: VERTICAL TIMELINE OF HIGHER EDUCATION ===================== */}
        <div className="lg:col-span-6 flex flex-col justify-center">
          <div className="relative pl-6 sm:pl-8 border-l border-[#2F4F4E]/20 space-y-12">
            
            {/* Entry 01: IQRA UNIVERSITY */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="relative group"
            >
              {/* Timeline Connector node indicator */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-[#0E1314] border border-[#2F4F4E] flex items-center justify-center group-hover:border-white transition-colors duration-350">
                <div className="w-1.5 h-1.5 rounded-full bg-[#2F4F4E] group-hover:bg-white transition-colors" />
              </div>

              {/* Card Container block representing exquisite layout design */}
              <div className="bg-black/20 p-6 rounded-xl border border-white/5 group-hover:border-[#2F4F4E]/40 group-hover:bg-[#2F4F4E]/5 transition-all duration-300">
                
                {/* Year Badge & Institution */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                  <h3 className="text-lg sm:text-xl font-bold tracking-wider text-white uppercase">
                    IQRA UNIVERSITY <span className="text-[10px] sm:text-xs font-mono text-[#2F4F4E] block sm:inline sm:ml-1 font-normal">(Official)</span>
                  </h3>
                  
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-black border border-[#2F4F4E]/20 text-[#2F4F4E] text-[10px] sm:text-xs font-mono rounded-full font-medium">
                    <Calendar className="w-3 h-3" />
                    Jan 2018 – Dec 2023
                  </span>
                </div>

                {/* Degree Major Heading */}
                <h4 className="text-base font-semibold tracking-wide text-white/95 uppercase mb-3">
                  Bachelor of Business Administration – BBA (H)
                </h4>

                {/* Key focus areas/highlights descriptor elements for growth marketing portfolio */}
                <p className="text-xs sm:text-sm text-neutral-400 font-light leading-relaxed">
                  Specialized in structured administration workflows, performance framework planning, and institutional strategy modules. Designed foundational campaign and organizational management metrics.
                </p>

              </div>
            </motion.div>

            {/* Separator Line */}
            <div className="h-[1px] bg-gradient-to-r from-[#2F4F4E]/25 to-transparent my-4 pointer-events-none" />

            {/* Entry 02: IBA */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="relative group"
            >
              {/* Timeline Connector node indicator */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-[#0E1314] border border-[#2F4F4E] flex items-center justify-center group-hover:border-white transition-colors duration-350">
                <div className="w-1.5 h-1.5 rounded-full bg-[#2F4F4E] group-hover:bg-white transition-colors" />
              </div>

              {/* Card Container block */}
              <div className="bg-black/20 p-6 rounded-xl border border-white/5 group-hover:border-[#2F4F4E]/40 group-hover:bg-[#2F4F4E]/5 transition-all duration-300">
                
                {/* Year Badge & Institution */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                  <h3 className="text-lg sm:text-xl font-bold tracking-wider text-white uppercase">
                    Institute of Business Administration (IBA)
                  </h3>
                  
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-black border border-[#2F4F4E]/20 text-[#2F4F4E] text-[10px] sm:text-xs font-mono rounded-full font-medium">
                    <Calendar className="w-3 h-3" />
                    Nov 2025 – Apr 2026
                  </span>
                </div>

                {/* Degree Major Heading */}
                <div className="flex items-center justify-between gap-4 mb-3 flex-wrap">
                  <h4 className="text-base font-semibold tracking-wide text-white/95 uppercase">
                    Diploma in Digital Marketing
                  </h4>
                  <span className="inline-flex items-center gap-1 px-2.5 py-0.5 bg-[#2F4F4E]/10 border border-[#2F4F4E]/50 text-white text-[10px] sm:text-xs font-semibold rounded uppercase">
                    <Award className="w-3 h-3 text-[#2F4F4E] mr-1" />
                    Grade: A
                  </span>
                </div>

                {/* Key focus areas/highlights descriptor elements for growth marketing portfolio */}
                <p className="text-xs sm:text-sm text-neutral-400 font-light leading-relaxed">
                  Advanced studies focused on full-funnel digital campaigns, data-driven optimization, acquisition diagnostics, and practical measurements including CTR, CPA, and ROI maximization tactics.
                </p>

              </div>
            </motion.div>

          </div>
        </div>

      </div>

      {/* Lightbox Component Overlay */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightbox(null)}
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-md flex flex-col items-center justify-center p-4 sm:p-12 cursor-zoom-out select-none"
          >
            {/* Close trigger button */}
            <button
              onClick={() => setLightbox(null)}
              className="absolute top-6 right-6 p-2 rounded-full bg-neutral-900 border border-white/10 text-white/70 hover:text-white hover:border-[#2F4F4E]/40 transition-all shadow-[0_4px_20px_rgba(0,0,0,0.5)] cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Title / Info card */}
            <div className="absolute top-6 left-6 max-w-sm hidden sm:block pointer-events-none text-left">
              <span className="text-[10px] font-mono tracking-widest text-[#2F4F4E] uppercase font-bold text-left block">
                {lightbox.sectionName}
              </span>
              <h3 className="text-xs sm:text-sm font-semibold text-white tracking-widest uppercase mt-1">
                {lightbox.title}
              </h3>
            </div>

            {/* Static layout container */}
            <div 
              onClick={(e) => e.stopPropagation()} 
              className="relative max-w-5xl max-h-[80vh] w-full h-full flex items-center justify-center p-2 border border-white/5 rounded-2xl bg-gradient-to-br from-neutral-950 to-neutral-900 shadow-[0_10px_50px_rgba(0,0,0,0.8)] overflow-hidden cursor-default"
            >
              <img
                src={lightbox.src}
                alt={lightbox.title}
                className="max-w-full max-h-full object-contain rounded-lg p-2 filter brightness-[1.02] contrast-[1.03]"
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
