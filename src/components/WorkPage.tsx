import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  X, 
  Eye, 
  Layers, 
  Sparkles, 
  TrendingUp, 
  Target, 
  ShieldCheck, 
  BarChart3, 
  ArrowUpRight, 
  LineChart, 
  Grid, 
  Settings, 
  Activity,
  FolderOpen
} from "lucide-react";

// Statically import all campaign images from project assets
import meta01Img from "../assets/images/meta-01.jpg";
import meta02Img from "../assets/images/meta-02.png";
import meta03Img from "../assets/images/meta-03.jpg";
import meta04Img from "../assets/images/meta-04.jpg";
import meta05Img from "../assets/images/meta-05.png";
import meta06Img from "../assets/images/meta-06.jpg";

import google01Img from "../assets/images/google-01.png";
import google02Img from "../assets/images/google-02.png";
import google03Img from "../assets/images/google-03.png";
import google04Img from "../assets/images/google-04.png";
import google05Img from "../assets/images/google-05.png";
import google06Img from "../assets/images/google-06.png";

import analytics01Img from "../assets/images/analytics-01.png";
import analytics02Img from "../assets/images/analytics-02.png";
import analytics03Img from "../assets/images/analytics-03.png";
import analytics04Img from "../assets/images/analytics-04.png";

import gtm01Img from "../assets/images/gtm-01.png";
import gtm02Img from "../assets/images/gtm-02.png";
import gtm03Img from "../assets/images/gtm-03.png";
import gtm04Img from "../assets/images/gtm-04.png";

import looker01Img from "../assets/images/looker-01.png";
import looker02Img from "../assets/images/looker-02.png";
import looker03Img from "../assets/images/looker-03.png";
import looker04Img from "../assets/images/looker-04.png";
import looker05Img from "../assets/images/looker-05.png";
import looker06Img from "../assets/images/looker-06.png";
import looker07Img from "../assets/images/looker-07.png";

interface SlotItem {
  id: string;
  label: string;
  imagePath: string;
  subLabel: string;
}

interface CampaignSection {
  id: string;
  title: string;
  description: string;
  badge: string;
  slots: SlotItem[];
}

export default function WorkPage() {
  const [lightbox, setLightbox] = useState<{ src: string; title: string; sectionName: string } | null>(null);
  const [imgErrors, setImgErrors] = useState<Record<string, boolean>>({});

  const handleImageError = (id: string) => {
    setImgErrors(prev => ({ ...prev, [id]: true }));
  };

  const sections: CampaignSection[] = [
    {
      id: "meta-campaigns",
      title: "META CAMPAIGNS",
      description: "Meta Ads campaign management, audience targeting, campaign optimization, and performance tracking.",
      badge: "META ADS SUITE",
      slots: [
        { id: "meta-01", label: "Campaign Structure Setup", imagePath: meta01Img, subLabel: "Ad sets & bidding curves" },
        { id: "meta-02", label: "Audience Target Mapping", imagePath: meta02Img, subLabel: "Behavioral & interest overlap" },
        { id: "meta-03", label: "Lead Funnel Optimization", imagePath: meta03Img, subLabel: "Instant form conversion flow" },
        { id: "meta-04", label: "Daily Delivery Sprints", imagePath: meta04Img, subLabel: "Live budget optimization" },
        { id: "meta-05", label: "A/B Creative Control", imagePath: meta05Img, subLabel: "Dynamic copy & CTA variations" },
        { id: "meta-06", label: "Performance Overview Consolidation", imagePath: meta06Img, subLabel: "Aggregate accounts summary" }
      ]
    },
    {
      id: "google-ads",
      title: "GOOGLE ADS",
      description: "Campaign creation, video advertising, audience targeting, performance monitoring, and optimization.",
      badge: "GOOGLE ADS MANAGER",
      slots: [
        { id: "google-01", label: "Search Network Performance", imagePath: google01Img, subLabel: "Query thresholds & CPC caps" },
        { id: "google-02", label: "Performance Max Campaign", imagePath: google02Img, subLabel: "Cross-network asset delivery" },
        { id: "google-03", label: "YouTube Video Ad Funnel", imagePath: google03Img, subLabel: "In-stream placement mapping" },
        { id: "google-04", label: "Audience Segment Isolation", imagePath: google04Img, subLabel: "Demographics & affinity filters" },
        { id: "google-05", label: "Conversion Tracking Sync", imagePath: google05Img, subLabel: "Dynamic trigger integrations" },
        { id: "google-06", label: "Smart Bidding Operations", imagePath: google06Img, subLabel: "CPA & ROAS algorithmic constraints" }
      ]
    },
    {
      id: "google-analytics",
      title: "GOOGLE ANALYTICS",
      description: "Analytics setup, event tracking, reporting, and performance insights.",
      badge: "GA4 CORE PLATFORM",
      slots: [
        { id: "analytics-01", label: "Data Stream Operations", imagePath: analytics01Img, subLabel: "Real-time user stream flow" },
        { id: "analytics-02", label: "Custom Event Tracking Framework", imagePath: analytics02Img, subLabel: "Scroll & interaction triggers" },
        { id: "analytics-03", label: "Acquisition & Channel Mapping", imagePath: analytics03Img, subLabel: "UTM tracking & source isolation" },
        { id: "analytics-04", label: "User Retention Funnels", imagePath: analytics04Img, subLabel: "Cohort analysis & drop-offs" }
      ]
    },
    {
      id: "google-tag-manager",
      title: "GOOGLE TAG MANAGER",
      description: "Tag implementation, trigger creation, event configuration, and tracking setup.",
      badge: "GTM CONSOLE ENGINE",
      slots: [
        { id: "gtm-01", label: "Universal Variable Directory", imagePath: gtm01Img, subLabel: "User-defined lookup registers" },
        { id: "gtm-02", label: "Trigger Configuration Console", imagePath: gtm02Img, subLabel: "DOM ready & click event flags" },
        { id: "gtm-03", label: "Conversational Tag Integrations", imagePath: gtm03Img, subLabel: "Facebook Pixel & GA4 bridges" },
        { id: "gtm-04", label: "Container Versioning & Debugging", imagePath: gtm04Img, subLabel: "Workspace publish audit checks" }
      ]
    },
    {
      id: "looker-studio",
      title: "LOOKER STUDIO",
      description: "Marketing dashboards, custom reports, KPI visualization, and performance reporting.",
      badge: "DATA VISUALIZATION HUB",
      slots: [
        { id: "looker-01", label: "Executive paid campaigns ROI", imagePath: looker01Img, subLabel: "Cross-network ROI metrics dashboard" },
        { id: "looker-02", label: "Geographical Reach Analysis", imagePath: looker02Img, subLabel: "Multi-region performance heatmaps" },
        { id: "looker-03", label: "Acquisition Channel Overview", imagePath: looker03Img, subLabel: "Visual breakdown of organic vs paid" },
        { id: "looker-04", label: "Lead Capture Funnel Report", imagePath: looker04Img, subLabel: "Conversion volume progression tracker" },
        { id: "looker-05", label: "Client-facing KPI Grid", imagePath: looker05Img, subLabel: "Clean weekly performance briefings" },
        { id: "looker-06", label: "Cost & Budget Variance Graph", imagePath: looker06Img, subLabel: "Dynamic CPC vs budget boundaries" },
        { id: "looker-07", label: "Custom Domain Reporting Node", imagePath: looker07Img, subLabel: "Aggregate brand intelligence dashboard" }
      ]
    }
  ];

  return (
    <div 
      id="work-page-container"
      className="w-full min-h-screen bg-black text-[#FFFEFF] font-sans pb-32 pt-28 px-6 sm:px-12 md:px-16 overflow-x-hidden selection:bg-[#2F4F4E]/40"
    >
      
      {/* ===================== SECTION HEADER ===================== */}
      <div id="work-page-header" className="max-w-7xl mx-auto mb-20 relative">
        <div className="absolute top-0 left-0 w-16 h-[3px] bg-[#2F4F4E] rounded-full" />
        
        {/* Subtle decorative tech lines matching other pages */}
        <div className="absolute top-[-30px] right-0 sm:right-10 pointer-events-none opacity-20 hidden md:block">
          <svg width="240" height="90" viewBox="0 0 240 90" fill="none" className="text-[#2F4F4E]">
            <rect x="2" y="2" width="236" height="86" rx="6" stroke="currentColor" strokeWidth="0.5" strokeDasharray="3 3" />
            <path d="M40 0 V90 M80 0 V90 M120 0 V90 M160 0 V90 M200 0 V90" stroke="currentColor" strokeWidth="0.5" strokeOpacity="0.4" />
            <path d="M0 30 H240 M0 60 H240" stroke="currentColor" strokeWidth="0.5" strokeOpacity="0.4" />
          </svg>
        </div>

        <div className="pt-6 text-center md:text-left">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-[10px] sm:text-xs font-mono tracking-[0.4em] text-[#2F4F4E] uppercase font-bold"
          >
            PORTFOLIO SHOWCASE • ACQUISITION & INTEL
          </motion.p>
          
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.1 }}
            className="text-5xl sm:text-7xl md:text-8xl font-sans font-black tracking-wider text-[#FFFEFF] uppercase mt-3 leading-none select-none"
          >
            MY WORK
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="mt-6 max-w-3xl text-sm sm:text-base text-neutral-450 font-light leading-relaxed tracking-wide text-justify md:text-left pb-6 border-b border-white/5"
          >
            An elite showcase of operational marketing blueprints, performance analytics setups, and paid campaign structures. Each asset slot serves as an absolute window into professional client work—proving high-budget control, accurate tagging, and client ROI reporting.
          </motion.div>
        </div>
      </div>

      {/* ===================== DIRECT MARKETING COMPENDIUM ===================== */}
      <div className="max-w-7xl mx-auto space-y-28">
        {sections.map((section, secIdx) => (
          <motion.section 
            id={`section-${section.id}`}
            key={section.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.05 }}
            className="space-y-8"
          >
            {/* Minimalist Section Banner */}
            <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-[#2F4F4E]/15 pb-4 gap-4">
              <div className="space-y-2 max-w-2xl">
                <span className="inline-flex items-center gap-2 text-[10px] font-mono tracking-[0.25em] text-[#2F4F4E] font-bold uppercase py-1 px-3 rounded bg-[#2F4F4E]/5 border border-[#2F4F4E]/25">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#2F4F4E] animate-pulse" />
                  {section.badge}
                </span>
                <h2 className="text-2xl sm:text-3.5xl font-sans font-black tracking-widest text-[#FFFEFF]">
                  {section.title}
                </h2>
                <p className="text-xs sm:text-sm text-neutral-450 font-light leading-relaxed">
                  {section.description}
                </p>
              </div>
              <div className="text-[10px] font-mono text-neutral-500 tracking-wider">
                SYS_REGIST_0{secIdx + 1} // COUNT: {section.slots.length}
              </div>
            </div>

            {/* Screenshots Grid layout */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {section.slots.map((slot, slIdx) => {
                const imgFailed = imgErrors[slot.id];
                return (
                  <motion.div
                    id={`card-${slot.id}`}
                    key={slot.id}
                    initial={{ opacity: 0, scale: 0.98 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: slIdx * 0.05 }}
                    className="group relative rounded-xl border border-white/5 bg-neutral-950/20 hover:border-[#2F4F4E]/40 hover:bg-[#2F4F4E]/5 hover:shadow-[0_0_20px_rgba(47,79,78,0.15)] transition-all duration-400 overflow-hidden"
                  >
                    
                    {/* Screenshot View Frame */}
                    <div
                      id={`container-frame-${slot.id}`}
                      onClick={() => {
                        if (!imgFailed) {
                          setLightbox({ src: slot.imagePath, title: `${section.title} # ${String(slIdx + 1).padStart(2, '0')}`, sectionName: section.title });
                        }
                      }}
                      className={`relative aspect-[16/10] bg-black/95 overflow-hidden flex items-center justify-center select-none ${!imgFailed ? "cursor-zoom-in" : "cursor-default"}`}
                    >
                      {/* Load standard layout screenshot if exists */}
                      {!imgFailed ? (
                        <img 
                          src={slot.imagePath} 
                          alt={`Screenshot ${slIdx + 1}`}
                          loading="lazy"
                          decoding="async"
                          onError={() => handleImageError(slot.id)}
                          className="w-full h-full object-contain p-2 transition-transform duration-700 group-hover:scale-[1.03] will-change-transform"
                          referrerPolicy="no-referrer"
                        />
                      ) : (
                        /* Beautiful High-Tech Minimal Vector Blueprint Fallback placeholder if file isn't uploaded yet */
                        <div className="absolute inset-0 flex flex-col items-center justify-center p-6 bg-gradient-to-br from-neutral-950 to-neutral-900 border-dashed border border-[#2F4F4E]/15">
                          {/* Tech Grid mesh decorative */}
                          <div className="absolute inset-0 bg-[linear-gradient(to_right,#141e20_1px,transparent_1px),linear-gradient(to_bottom,#141e20_1px,transparent_1px)] bg-[size:14px_14px] opacity-35" />
                          <Activity className="w-5 h-5 text-[#2F4F4E]/40 group-hover:text-[#2F4F4E] transition-colors relative z-10" />
                        </div>
                      )}

                      {/* Small subtle index marker overlay */}
                      <div className="absolute top-3 left-3 px-1.5 py-0.5 rounded bg-black/60 border border-white/5 text-[9px] font-mono text-neutral-400 select-none pointer-events-none group-hover:text-white group-hover:border-[#2F4F4E]/30 transition-colors">
                        {String(slIdx + 1).padStart(2, '0')}
                      </div>

                      {/* Interactive hover screen zoom indicator (Only if image loads) */}
                      {!imgFailed && (
                        <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-2">
                          <div className="w-8 h-8 rounded-full bg-[#2F4F4E]/10 border border-[#2F4F4E]/40 flex items-center justify-center text-[#2F4F4E]">
                            <Eye className="w-4 h-4" />
                          </div>
                        </div>
                      )}
                    </div>
                    
                  </motion.div>
                );
              })}
            </div>
          </motion.section>
        ))}
      </div>

      {/* ===================== METRIC SUMMARY BLOCK ===================== */}
      <section id="work-summary-block" className="max-w-7xl mx-auto mt-28 border-t border-[#2F4F4E]/25 pt-16">
        <div className="p-8 sm:p-12 rounded-xl border border-white/5 bg-neutral-950/20 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#2F4F4E]/5 rounded-bl-full pointer-events-none" />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <span className="text-[10px] font-mono tracking-[0.3em] text-[#2F4F4E] uppercase font-bold">
                PLATFORM CAPABILITIES OVERVIEW
              </span>
              <h3 className="text-xl sm:text-3xl font-sans font-black tracking-widest text-[#FFFEFF] uppercase">
                INTEGRATED MARKETING INTELLIGENCE
              </h3>
              <p className="text-xs sm:text-sm text-neutral-450 leading-relaxed font-light">
                Every screen slot listed represents a foundational capability in cross-channel systems management. By maintaining clean tag architectures, rigorous biddings on Meta & Google Ads, and custom Looker conversions, the portfolio presents direct, uncompromised paid media excellence.
              </p>
            </div>
            <div className="lg:col-span-4 flex items-center justify-end">
              <div className="border border-[#2F4F4E]/30 rounded-xl p-5 bg-black/40 w-full text-center space-y-1">
                <div className="text-2xl font-mono text-white font-black tracking-wider">
                  27 ACTIVE SLOTS
                </div>
                <div className="text-[9px] font-mono text-neutral-500 uppercase tracking-widest">
                  Ready to link project assets
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== HIGH-FIDELITY PREVIEW LIGHTBOX ===================== */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            id="work-lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightbox(null)}
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-md flex flex-col items-center justify-center p-4 cursor-zoom-out"
          >
            {/* Close visual helper */}
            <button 
              id="lightbox-close-btn"
              onClick={() => setLightbox(null)}
              className="absolute top-6 right-6 p-3 rounded-full bg-neutral-900 border border-white/10 text-white hover:bg-white hover:text-black transition-colors"
              title="Close Fullscreen View"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Frame view */}
            <motion.div
              initial={{ scale: 0.96, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.96, opacity: 0 }}
              transition={{ type: "spring", damping: 26 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-5xl max-h-[80vh] w-full flex items-center justify-center bg-neutral-950 border border-[#2F4F4E]/30 rounded-xl overflow-hidden p-3"
            >
              <img 
                src={lightbox.src} 
                alt={lightbox.title}
                className="max-w-full max-h-[75vh] object-contain rounded-lg shadow-2xl"
                referrerPolicy="no-referrer"
              />
            </motion.div>

            {/* Captions */}
            <div className="mt-5 text-center space-y-1 px-4">
              <span className="text-[10px] font-mono tracking-widest text-[#2F4F4E] uppercase font-bold block">
                {lightbox.sectionName}
              </span>
              <h4 className="text-sm sm:text-base font-bold text-white uppercase tracking-wider">
                {lightbox.title}
              </h4>
              <span className="text-[9px] font-mono tracking-widest text-neutral-500 uppercase block select-none">
                CLICK OUTSIDE DIRECT FRAME TO EXIT PREVIEW
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
