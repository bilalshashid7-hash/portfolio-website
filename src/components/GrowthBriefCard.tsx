import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { CheckCircle2, TrendingUp, Mail, Copy, Check } from "lucide-react";
import { GrowthBrief } from "../data/briefs";

interface GrowthBriefCardProps {
  brief: GrowthBrief;
  email: string;
}

export default function GrowthBriefCard({ brief, email }: GrowthBriefCardProps) {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.4 } },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="relative z-10 w-full min-h-[340px] flex flex-col justify-between rounded-xl border border-white/10 bg-[#0A0A0A]/90 p-6 md:p-8 shadow-[0_0_50px_-12px_rgba(255,107,53,0.15)] backdrop-blur-xl"
    >
      {/* Decorative Top Accent Glow */}
      <div className="absolute -top-[1px] left-10 right-10 h-[1px] bg-gradient-to-r from-transparent via-brand-orange to-transparent opacity-80" />

      <div>
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/5 pb-4">
          <div>
            <span className="text-[10px] font-mono tracking-[0.2em] text-brand-orange uppercase bg-brand-orange/10 px-2 py-0.5 rounded-sm">
              {brief.badge}
            </span>
            <h3 className="mt-2 text-xl font-display font-medium text-white">
              {brief.sector} Strategies
            </h3>
          </div>

          <div className="flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-lg">
            <TrendingUp className="h-4 w-4 text-brand-orange" />
            <div className="text-right">
              <div className="text-sm font-mono font-bold text-white leading-none">
                {brief.roiMetric}
              </div>
              <div className="text-[9px] font-mono text-gray-500 uppercase tracking-wider mt-0.5">
                {brief.roiLabel}
              </div>
            </div>
          </div>
        </div>

        <p className="mt-4 text-sm text-gray-400 font-sans leading-relaxed">
          {brief.description}
        </p>

        {/* High-impact framework checkpoints */}
        <div className="mt-6 space-y-2.5">
          <p className="text-[10px] font-mono text-gray-500 uppercase tracking-widest font-semibold">
            Primary Tactical Directives:
          </p>
          {brief.frameworkSteps.map((step, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="flex items-start gap-2.5"
            >
              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-orange/80" />
              <span className="text-xs text-gray-300 font-sans font-medium">
                {step}
              </span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Responsive Call to Action Footer */}
      <div className="mt-8 flex flex-col sm:flex-row gap-3">
        <button
          onClick={handleCopyEmail}
          id="btn-copy-brief"
          className="flex-1 flex items-center justify-center gap-2 rounded-lg border border-white/10 hover:border-brand-orange/50 px-4 py-2 bg-white/5 hover:bg-brand-orange/5 text-xs font-mono font-medium tracking-wider text-white hover:text-brand-orange transition-all duration-300 active:scale-95"
        >
          {copied ? (
            <>
              <Check className="h-4.5 w-4.5" />
              COPIED TO CLIPBOARD
            </>
          ) : (
            <>
              <Copy className="h-4.5 w-4.5" />
              COPY EMAIL ({email.toUpperCase()})
            </>
          )}
        </button>

        <a
          href={`mailto:${email}?subject=Inquiry regarding Growth Strategy: ${brief.sector}&body=Hello Bilal,%0A%0AI visited your portfolio and was reviewing your ${brief.sector} tactics. Let's arrange a brief synchronization session.`}
          id="lnk-email-brief"
          className="flex-1 flex items-center justify-center gap-2 rounded-lg bg-brand-orange hover:bg-brand-orange-light px-4 py-2 text-xs font-mono font-bold tracking-wider text-black transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,107,53,0.4)] active:scale-95"
        >
          <Mail className="h-4.5 w-4.5" />
          INITIATE BRIEFING
        </a>
      </div>
    </motion.div>
  );
}
