import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, Eye } from "lucide-react";
import { Analytics } from "@vercel/analytics/react";
import AboutPage from "./components/AboutPage";
import EducationPage from "./components/EducationPage";
import ExperiencePage from "./components/ExperiencePage";
import SkillsPage from "./components/SkillsPage";
import WorkPage from "./components/WorkPage";
import ContactPage from "./components/ContactPage";
import profilePhotoImg from "./assets/images/profile-photo.png";

export default function App() {
  const [activeTab, setActiveTab] = useState<"home" | "about" | "education" | "experience" | "skills" | "work" | "contact">("home");
  const [isProfileLightboxOpen, setIsProfileLightboxOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const profileImage = profilePhotoImg;

  return (
    <div 
      className={`relative w-screen min-h-screen text-[#FFFEFF] overflow-x-hidden font-sans transition-colors duration-1000 select-none ${
        activeTab === "home" ? "bg-[#0E1314]" : "bg-black"
      }`}
    >
      
      {/* ===================== FLOATING LUXURY METADATA NAV BAR ===================== */}
      <header className="fixed top-0 left-0 w-full z-50 px-6 sm:px-12 py-6 flex items-center justify-between pointer-events-none">
        
        {/* Top Left Signature */}
        <div className="text-[10px] sm:text-[11px] font-mono text-[#2F4F4E] font-medium tracking-[0.25em] sm:tracking-[0.3em] uppercase block pointer-events-auto cursor-default">
          BS // PORTFOLIO
        </div>

        {/* Center Navigation Capsule - Desktop Large screens only */}
        <div className="hidden lg:flex mx-auto items-center bg-black/55 backdrop-blur-md border border-[#2F4F4E]/25 p-1 sm:p-1.5 rounded-full pointer-events-auto shadow-[0_4px_24px_rgba(0,0,0,0.5)]">
          <button
            onClick={() => setActiveTab("home")}
            className={`relative px-2.5 sm:px-4 md:px-5 py-2 rounded-full text-[10px] sm:text-xs font-mono tracking-wider transition-colors duration-500 uppercase shrink-0 ${
              activeTab === "home" ? "text-white font-semibold" : "text-neutral-500 hover:text-neutral-300"
            }`}
          >
            {activeTab === "home" && (
              <motion.div
                layoutId="activeTabGlow"
                className="absolute inset-0 bg-[#2F4F4E]/25 rounded-full border border-[#2F4F4E]/40"
                transition={{ type: "spring", stiffness: 380, damping: 30 }}
              />
            )}
            Home
          </button>
          
          <button
            onClick={() => setActiveTab("about")}
            className={`relative px-2.5 sm:px-4 md:px-5 py-2 rounded-full text-[10px] sm:text-xs font-mono tracking-wider transition-colors duration-500 uppercase shrink-0 ${
              activeTab === "about" ? "text-white font-semibold" : "text-neutral-500 hover:text-neutral-300"
            }`}
          >
            {activeTab === "about" && (
              <motion.div
                layoutId="activeTabGlow"
                className="absolute inset-0 bg-[#2F4F4E]/25 rounded-full border border-[#2F4F4E]/40"
                transition={{ type: "spring", stiffness: 380, damping: 30 }}
              />
            )}
            About Me
          </button>

          <button
            onClick={() => setActiveTab("education")}
            className={`relative px-2.5 sm:px-4 md:px-5 py-2 rounded-full text-[10px] sm:text-xs font-mono tracking-wider transition-colors duration-500 uppercase shrink-0 ${
              activeTab === "education" ? "text-white font-semibold" : "text-neutral-500 hover:text-neutral-300"
            }`}
          >
            {activeTab === "education" && (
              <motion.div
                layoutId="activeTabGlow"
                className="absolute inset-0 bg-[#2F4F4E]/25 rounded-full border border-[#2F4F4E]/40"
                transition={{ type: "spring", stiffness: 380, damping: 30 }}
              />
            )}
            Education
          </button>

          <button
            onClick={() => setActiveTab("experience")}
            className={`relative px-2.5 sm:px-4 md:px-5 py-2 rounded-full text-[10px] sm:text-xs font-mono tracking-wider transition-colors duration-500 uppercase shrink-0 ${
              activeTab === "experience" ? "text-white font-semibold" : "text-neutral-500 hover:text-neutral-300"
            }`}
          >
            {activeTab === "experience" && (
              <motion.div
                layoutId="activeTabGlow"
                className="absolute inset-0 bg-[#2F4F4E]/25 rounded-full border border-[#2F4F4E]/40"
                transition={{ type: "spring", stiffness: 380, damping: 30 }}
              />
            )}
            Experience
          </button>

          <button
            onClick={() => setActiveTab("skills")}
            className={`relative px-2.5 sm:px-4 md:px-5 py-2 rounded-full text-[10px] sm:text-xs font-mono tracking-wider transition-colors duration-500 uppercase shrink-0 ${
              activeTab === "skills" ? "text-white font-semibold" : "text-neutral-500 hover:text-neutral-300"
            }`}
          >
            {activeTab === "skills" && (
              <motion.div
                layoutId="activeTabGlow"
                className="absolute inset-0 bg-[#2F4F4E]/25 rounded-full border border-[#2F4F4E]/40"
                transition={{ type: "spring", stiffness: 380, damping: 30 }}
              />
            )}
            Skills & Tools
          </button>

          <button
            onClick={() => setActiveTab("work")}
            className={`relative px-2.5 sm:px-4 md:px-5 py-2 rounded-full text-[10px] sm:text-xs font-mono tracking-wider transition-colors duration-500 uppercase shrink-0 ${
              activeTab === "work" ? "text-white font-semibold" : "text-neutral-500 hover:text-neutral-300"
            }`}
          >
            {activeTab === "work" && (
              <motion.div
                layoutId="activeTabGlow"
                className="absolute inset-0 bg-[#2F4F4E]/25 rounded-full border border-[#2F4F4E]/40"
                transition={{ type: "spring", stiffness: 380, damping: 30 }}
              />
            )}
            My Work
          </button>

          <button
            onClick={() => setActiveTab("contact")}
            className={`relative px-2.5 sm:px-4 md:px-5 py-2 rounded-full text-[10px] sm:text-xs font-mono tracking-wider transition-colors duration-500 uppercase shrink-0 ${
              activeTab === "contact" ? "text-white font-semibold" : "text-neutral-500 hover:text-neutral-300"
            }`}
          >
            {activeTab === "contact" && (
              <motion.div
                layoutId="activeTabGlow"
                className="absolute inset-0 bg-[#2F4F4E]/25 rounded-full border border-[#2F4F4E]/40"
                transition={{ type: "spring", stiffness: 380, damping: 30 }}
              />
            )}
            Contact
          </button>
        </div>

        {/* Mobile Menu Toggle button - Visible below lg */}
        <div className="lg:hidden pointer-events-auto flex items-center">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="flex items-center gap-2 bg-black/75 backdrop-blur-md border border-[#2F4F4E]/30 px-3.5 py-1.5 rounded-full text-[10px] font-mono tracking-widest text-[#FFFEFF] uppercase transition-all duration-300 hover:border-[#2F4F4E] hover:shadow-[0_0_15px_rgba(47,79,78,0.2)] active:scale-95 cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            <div className="flex flex-col gap-1 w-3.5 items-end justify-center">
              <span className={`h-[1px] bg-[#FFFEFF] rounded-full transition-all duration-300 ${isMobileMenuOpen ? "w-3.5 rotate-45 translate-y-[5px]" : "w-3.5"}`} />
              <span className={`h-[1px] bg-[#FFFEFF] rounded-full transition-all duration-300 ${isMobileMenuOpen ? "opacity-0 w-0" : "w-2.5"}`} />
              <span className={`h-[1px] bg-[#FFFEFF] rounded-full transition-all duration-300 ${isMobileMenuOpen ? "w-3.5 -rotate-45 -translate-y-[5px]" : "w-3.5"}`} />
            </div>
            <span>{isMobileMenuOpen ? "Close" : "Menu"}</span>
          </button>
        </div>

        {/* Top Right Label - Desktop Only */}
        <div className="text-[11px] font-mono text-[#2F4F4E] font-medium tracking-[0.3em] uppercase hidden lg:block pointer-events-auto cursor-default">
          STAGE_02 // SYSTEM
        </div>
      </header>

      {/* ===================== VIEWS CONTENT RENDERER ===================== */}
      <AnimatePresence mode="wait">
        {activeTab === "home" ? (
          
          // HOME LANDING HERO VIEW WITH PROFESSIONAL PROFILE PHOTOGRAPH INTEGRATION
          <motion.div
            key="home-hero"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="relative w-full h-screen flex items-center justify-center overflow-hidden"
          >
            {/* Geometric accents in primary accent #2F4F4E */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
              <div className="relative w-full max-w-[1200px] h-full max-h-[800px] flex items-center justify-center">
                {/* Extremely thin structural lines */}
                <div className="absolute w-screen h-[1px] bg-[#2F4F4E]/20" />
                <div className="absolute h-screen w-[1px] bg-[#2F4F4E]/20" />
                
                {/* Subtle concentric circles */}
                <div className="absolute w-[400px] h-[400px] rounded-full border border-[#2F4F4E]/15 animate-[pulse_8s_ease-in-out_infinite]" />
                <div className="absolute w-[600px] h-[600px] rounded-full border border-dashed border-[#2F4F4E]/10" />
                <div className="absolute w-[800px] h-[800px] rounded-full border border-[#2F4F4E]/5" />
              </div>
            </div>

            {/* Typography and Profile Photo Split Grid */}
            <div className="relative z-10 w-full max-w-6xl px-6 sm:px-12 flex flex-col-reverse lg:flex-row items-center justify-center gap-12 lg:gap-16 pt-16">
              
              {/* Left Column: Premium Digital Marketing brand statement */}
              <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                  className="flex flex-col items-center lg:items-start justify-center"
                >
                  <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-sans font-black tracking-[0.18em] text-[#FFFEFF] uppercase leading-none">
                    DIGITAL MARKETING
                  </h1>
                  <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-sans font-light tracking-[0.25em] text-[#FFFEFF]/80 uppercase leading-none mt-3 sm:mt-5">
                    PORTFOLIO
                  </h2>
                </motion.div>

                {/* Elegant horizontal gradient border */}
                <motion.div
                  initial={{ width: 0, opacity: 0 }}
                  animate={{ width: "240px", opacity: 1 }}
                  transition={{ duration: 1.4, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                  className="h-[1px] bg-gradient-to-r from-transparent via-[#2F4F4E] to-transparent lg:from-[#2F4F4E] lg:to-transparent my-6 sm:my-8"
                />

                {/* Name designation tag */}
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="text-lg sm:text-xl font-sans font-light tracking-[0.5em] text-[#FFFEFF] uppercase"
                >
                  BILAL SHAHID
                </motion.div>
              </div>

               {/* Right Column: Premium Personal Branding Circle Frame */}
              <motion.div
                initial={{ opacity: 0, scale: 0.85, y: -20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 1.3, ease: [0.16, 1, 0.3, 1] }}
                className="relative"
              >
                {/* Concentric high-end tech borders enclosing the avatar */}
                <div className="absolute inset-0 -m-3 border border-[#2F4F4E]/20 rounded-full pointer-events-none select-none animate-[pulse_6s_ease-in-out_infinite]" />
                <div className="absolute inset-0 -m-6 border border-dashed border-[#2F4F4E]/10 rounded-full pointer-events-none select-none animate-[spin_60s_linear_infinite]" />

                <div
                  onClick={() => setIsProfileLightboxOpen(true)}
                  className="group relative w-44 h-44 sm:w-56 sm:h-56 rounded-full border border-[#2F4F4E]/30 bg-neutral-950/40 overflow-hidden transition-all duration-500 hover:border-[#2F4F4E] hover:shadow-[0_0_35px_rgba(47,79,78,0.4)] flex items-center justify-center select-none cursor-zoom-in"
                >
                  <div className="absolute inset-0 w-full h-full font-sans">
                    <img
                      src={profileImage}
                      alt="Bilal Shahid"
                      decoding="async"
                      className="w-full h-full object-cover transform scale-100 group-hover:scale-[1.05] transition-transform duration-700 ease-out will-change-transform"
                      referrerPolicy="no-referrer"
                    />
                  </div>

                  {/* Elegant micro hover indicator (resembles a lens aperture or crosshair focus) */}
                  <div className="absolute inset-0 bg-[#2F4F4E]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="w-10 h-10 rounded-full bg-black/60 border border-[#2F4F4E]/40 flex items-center justify-center text-[#2F4F4E]">
                      <Eye className="w-4 h-4" />
                    </div>
                  </div>

                </div>
              </motion.div>

            </div>
          </motion.div>


        ) : activeTab === "about" ? (
          
          // ABOUT ME IMPREGNATED WEB VIEW
          <motion.div
            key="about-view"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
          >
            <AboutPage />
          </motion.div>

        ) : activeTab === "education" ? (

          // EDUCATION SYSTEM WEB VIEW
          <motion.div
            key="education-view"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
          >
            <EducationPage />
          </motion.div>

        ) : activeTab === "experience" ? (

          // WORK EXPERIENCE SYSTEM WEB VIEW
          <motion.div
            key="experience-view"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
          >
            <ExperiencePage />
          </motion.div>

        ) : activeTab === "skills" ? (

          // SKILLS & TOOLS SYSTEM WEB VIEW
          <motion.div
            key="skills-view"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
          >
            <SkillsPage />
          </motion.div>

        ) : activeTab === "work" ? (

          // MY WORK SUITE GRAPHIC VIEW
          <motion.div
            key="work-view"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
          >
            <WorkPage />
          </motion.div>

        ) : (

          // CONTACT ME GRAPHIC VIEW
          <motion.div
            key="contact-view"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
          >
            <ContactPage />
          </motion.div>

        )}
      </AnimatePresence>

      {/* ===================== MOBILE FULL-SCREEN MENU OVERLAY ===================== */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="fixed inset-0 z-40 bg-black/98 backdrop-blur-xl flex flex-col justify-between p-8 pt-32 lg:hidden selection:bg-[#2F4F4E]/40"
          >
            {/* Glowing cosmic highlight in the background */}
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 rounded-full bg-[#2F4F4E]/10 blur-[80px] pointer-events-none" />
            <div className="absolute inset-0 bg-[linear-gradient(rgba(47,79,78,0.02)_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

            {/* Navigation Options list */}
            <div className="flex flex-col space-y-6 sm:space-y-8 my-auto max-w-md mx-auto w-full z-10">
              {[
                { id: "home", label: "Home", num: "01" },
                { id: "about", label: "About Me", num: "02" },
                { id: "education", label: "Education", num: "03" },
                { id: "experience", label: "Experience", num: "04" },
                { id: "skills", label: "Skills & Tools", num: "05" },
                { id: "work", label: "My Work", num: "06" },
                { id: "contact", label: "Contact", num: "07" },
              ].map((tab, idx) => {
                const isActive = activeTab === tab.id;
                return (
                  <motion.button
                    key={tab.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05, duration: 0.3 }}
                    onClick={() => {
                      setActiveTab(tab.id as any);
                      setIsMobileMenuOpen(false);
                    }}
                    className="flex items-center gap-6 group text-left w-full focus:outline-none"
                  >
                    <span className="font-mono text-[10px] text-[#2F4F4E] font-semibold tracking-widest">
                      {tab.num} //
                    </span>
                    <span 
                      className={`text-2xl sm:text-3xl font-sans font-black tracking-widest uppercase transition-all duration-300 relative ${
                        isActive ? "text-white" : "text-neutral-500 hover:text-white"
                      }`}
                    >
                      {tab.label}
                      {isActive && (
                        <motion.span 
                          layoutId="mobileActiveTabLine"
                          className="absolute -bottom-1.5 left-0 w-12 h-[2px] bg-[#2F4F4E]" 
                        />
                      )}
                    </span>
                  </motion.button>
                );
              })}
            </div>

            {/* Mobile Drawer Footer info */}
            <div className="flex items-center justify-between border-t border-[#2F4F4E]/20 pt-6 font-mono text-[9px] text-[#2F4F4E]/80 uppercase tracking-[0.2em] z-10 max-w-md mx-auto w-full">
              <span>BS // v1.2</span>
              <span>© 2026 DIGITAL INTELLIGENCE</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ===================== PROFILE IMAGE LIGHTBOX ===================== */}
      <AnimatePresence>
        {isProfileLightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsProfileLightboxOpen(false)}
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-md flex flex-col items-center justify-center p-4 sm:p-12 cursor-zoom-out select-none"
          >
            {/* Close trigger button */}
            <button
              onClick={() => setIsProfileLightboxOpen(false)}
              className="absolute top-6 right-6 p-2 rounded-full bg-neutral-900 border border-white/10 text-white/70 hover:text-white hover:border-[#2F4F4E]/40 transition-all shadow-[0_4px_20px_rgba(0,0,0,0.5)] cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Title / Info card */}
            <div className="absolute top-6 left-6 max-w-sm hidden sm:block pointer-events-none text-left">
              <span className="text-[10px] font-mono tracking-widest text-[#2F4F4E] uppercase font-bold text-left block">
                PROFILE IMAGE
              </span>
              <h3 className="text-xs sm:text-sm font-semibold text-white tracking-widest uppercase mt-1">
                BILAL SHAHID
              </h3>
            </div>

            {/* Static layout container */}
            <div 
              onClick={(e) => e.stopPropagation()} 
              className="relative max-w-[450px] max-h-[80vh] aspect-square w-full flex items-center justify-center p-2 border border-white/5 rounded-full bg-gradient-to-br from-neutral-950 to-neutral-900 shadow-[0_10px_50px_rgba(0,0,0,0.8)] overflow-hidden cursor-default"
            >
              <img
                src={profileImage}
                alt="Bilal Shahid"
                className="w-full h-full object-cover rounded-full"
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ===================== FLOATING FIXED FOOTER CORNERS ===================== */}
      <footer className="fixed bottom-0 left-0 w-full z-50 px-6 sm:px-12 py-6 flex items-center justify-between pointer-events-none select-none text-[#2F4F4E]/70">
        
        {/* Bottom Left Badge */}
        <div className="text-[9px] font-mono tracking-[0.3em] uppercase hidden sm:block">
          DESIGN ENGINE v1.2
        </div>

        {/* Bottom Right Copyright */}
        <div className="text-[9px] font-mono tracking-[0.3em] uppercase hidden sm:block">
          © 2026 ALL RIGHTS RESERVED
        </div>

      </footer>

      <Analytics />
    </div>
  );
}
