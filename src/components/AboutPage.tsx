import { motion } from "motion/react";
import { Compass, TrendingUp, Cpu, Target } from "lucide-react";
import aboutPhotoImg from "../assets/images/about-photo.jpg";

const AboutImage = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="relative w-full aspect-[4/5] max-w-[420px] mx-auto rounded-2xl border border-[#2F4F4E]/20 bg-black/40 overflow-hidden flex flex-col items-center justify-center p-3 select-none group shadow-[0_0_30px_rgba(47,79,78,0.05)] hover:shadow-[0_0_45px_rgba(47,79,78,0.2)] transition-shadow duration-500"
    >
      <div className="w-full h-full rounded-xl overflow-hidden relative bg-[#040607] flex items-center justify-center border border-[#2F4F4E]/15">
        <img
          src={aboutPhotoImg}
          alt="Bilal Shahid Professional Photograph"
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover filter brightness-[1.02] contrast-[1.04] transition-transform duration-700 group-hover:scale-105 will-change-transform"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(47,79,78,0.04)_1px,transparent_1px)] bg-[size:16px_16px] pointer-events-none" />
      </div>

      {/* Decorative premium corner frames */}
      <div className="absolute top-5 left-5 w-4 h-4 border-t border-l border-[#2F4F4E]/40 group-hover:border-[#2F4F4E] transition-colors duration-300" />
      <div className="absolute top-5 right-5 w-4 h-4 border-t border-r border-[#2F4F4E]/40 group-hover:border-[#2F4F4E] transition-colors duration-300" />
      <div className="absolute bottom-5 left-5 w-4 h-4 border-b border-l border-[#2F4F4E]/40 group-hover:border-[#2F4F4E] transition-colors duration-300" />
      <div className="absolute bottom-5 right-5 w-4 h-4 border-b border-r border-[#2F4F4E]/40 group-hover:border-[#2F4F4E] transition-colors duration-300" />
    </motion.div>
  );
};

export default function AboutPage() {
  const hobbies = [
    {
      id: "marketing",
      title: "Learning Digital Marketing",
      icon: Compass,
      description: "Continuously analyzing performance-driven execution channels and digital marketing innovations."
    },
    {
      id: "skills",
      title: "Skill Upgradation",
      icon: TrendingUp,
      description: "Refining measurement capabilities, campaign tracking frameworks, and growth mechanics."
    },
    {
      id: "tech",
      title: "Exploring New Technologies",
      icon: Cpu,
      description: "Experimenting with modern growth stacks, tracking APIs, and data analysis integrations."
    },
    {
      id: "strategy",
      title: "Creativity & Strategy",
      icon: Target,
      description: "Synthesizing full-funnel activation strategies to maximize acquisition scaling."
    }
  ];

  return (
    <div className="w-full min-h-screen bg-black text-[#FFFEFF] font-sans pb-24 pt-28 px-6 sm:px-12 md:px-16 overflow-x-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        
        {/* ===================== LEFT COLUMN: TYPOGRAPHY, BUTTONS & ABOUT TEXT ===================== */}
        <div className="lg:col-span-7 flex flex-col space-y-8 sm:space-y-10">
          
          {/* Header text with premium outlined treatment */}
          <div className="space-y-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="flex flex-col sm:flex-row sm:items-baseline sm:gap-4 select-none leading-none"
            >
              <h1 className="text-5xl sm:text-7xl md:text-8xl font-sans font-black tracking-wider text-[#FFFEFF] uppercase select-none">
                ABOUT
              </h1>
              <h1 
                className="text-5xl sm:text-7xl md:text-8xl font-sans font-black tracking-wider text-transparent uppercase select-none"
                style={{ WebkitTextStroke: "1.5px #2F4F4E" }}
              >
                ME
              </h1>
            </motion.div>

            {/* Rounded Label / Button */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-block"
            >
              <span className="inline-flex items-center px-4 py-2 rounded-full border border-[#2F4F4E]/30 bg-[#2F4F4E]/10 text-[#2F4F4E] text-xs sm:text-sm font-semibold tracking-widest uppercase cursor-default">
                GROWTH MARKETING SPECIALIST
              </span>
            </motion.div>
          </div>

          {/* Mobile Image Section: Visible only on mobile/tablet viewports, above the bio text */}
          <div className="block lg:hidden w-full max-w-sm mx-auto mb-2">
            <AboutImage />
          </div>

          {/* About Text Area with Exact requested copy */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
            className="space-y-6 text-neutral-300 font-sans tracking-wide leading-relaxed font-light text-base sm:text-lg text-justify selection:bg-[#2F4F4E]/30"
          >
            <p className="text-xl sm:text-2xl font-normal text-white tracking-normal font-sans">
              Hi there! I'm Bilal Shahid.
            </p>
            <p>
              With <span className="text-white font-medium">3 years of experience</span> across Marketing and Business Development, I focus on combining strategy, creativity, and performance-driven execution to support business growth and meaningful customer engagement.
            </p>
            <p>
              I have hands-on experience in campaign execution, performance tracking, and analyzing key marketing metrics such as <span className="text-white font-medium border-b border-[#2F4F4E]/50 pb-0.5">CTR and CPA</span> to drive informed decisions and improve outcomes.
            </p>
            <p>
              I have also completed a <span className="text-[#FFFEFF] font-medium italic underline decoration-[#2F4F4E] decoration-2">Diploma in Digital Marketing from IBA</span>, strengthening my foundation in growth strategy, digital campaigns, and data-driven marketing.
            </p>
          </motion.div>

          {/* ===================== HOBBIES SECTION ===================== */}
          <div className="pt-8 space-y-6 select-none">
            <motion.h3 
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-lg sm:text-xl font-sans font-bold tracking-[0.3em] text-[#2F4F4E] uppercase"
            >
              HOBBIES:
            </motion.h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {hobbies.map((hobby, index) => {
                const IconComponent = hobby.icon;
                return (
                  <motion.div
                    key={hobby.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                    className="flex items-center gap-4 p-4 rounded-xl border border-white/5 bg-neutral-950/40 hover:border-[#2F4F4E]/40 hover:bg-[#2F4F4E]/5 transition-all duration-300 group cursor-default"
                  >
                    {/* Modern dark circular icon background */}
                    <div className="w-12 h-12 rounded-full flex items-center justify-center bg-black border border-white/10 group-hover:border-[#2F4F4E]/45 transition-all duration-300 group-hover:shadow-[0_0_15px_rgba(47,79,78,0.2)]">
                      <IconComponent className="w-5 h-5 text-[#2F4F4E] group-hover:text-white transition-colors duration-300" />
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <h4 className="text-sm font-semibold text-white tracking-wider uppercase group-hover:text-white transition-colors">
                        {hobby.title}
                      </h4>
                      <p className="text-xs text-neutral-400 mt-1 leading-normal line-clamp-2">
                        {hobby.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

        </div>

        {/* ===================== RIGHT COLUMN: PROFESSIONAL ABOUT PHOTO ===================== */}
        <div className="lg:col-span-5 hidden lg:flex items-center justify-center h-full min-h-[500px]">
          <AboutImage />
        </div>

      </div>
    </div>
  );
}
