import React from 'react';
import { Sparkles, ArrowRight, Compass, BrainCircuit, CheckCircle2, TrendingUp } from 'lucide-react';

interface HeroSectionProps {
  onStartQuiz: () => void;
  onBrowseRoles: () => void;
  onOpenTracker: () => void;
  onOpenFreeVault: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onStartQuiz,
  onBrowseRoles,
  onOpenTracker,
  onOpenFreeVault
}) => {
  return (
    <section className="relative overflow-hidden pt-12 pb-16 lg:pt-16 lg:pb-20 border-b border-slate-800/80 bg-gradient-to-b from-slate-900/60 via-slate-950 to-slate-950">
      {/* Background glow accents */}
      <div 
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-tr from-indigo-500/10 via-purple-500/10 to-transparent blur-3xl -z-10 pointer-events-none"
        aria-hidden="true" 
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-6">
          {/* Editorial Kicker */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-950/80 border border-indigo-700/50 text-indigo-300 text-xs font-semibold shadow-inner">
            <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
            <span>The Complete Roadmap from Beginner to AI Professional</span>
          </div>

          {/* Primary Balanced Headline */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white text-balance leading-tight">
            Navigate Your Career in <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 via-sky-300 to-emerald-300">
              Artificial Intelligence
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            From Machine Learning and Data Science to Generative AI and MLOps. Discover personalized step-by-step roadmaps, essential skills, curated projects, and track your progress to industry readiness.
          </p>

          {/* CTA Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-3">
            <button
              onClick={onStartQuiz}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 text-white font-semibold text-sm shadow-lg shadow-indigo-600/20 transition-all hover:translate-y-[-1px]"
            >
              <BrainCircuit className="w-4 h-4 text-indigo-200" />
              <span>Take Career Match Quiz</span>
              <ArrowRight className="w-4 h-4 ml-1 opacity-70" />
            </button>

            <button
              onClick={onBrowseRoles}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 active:bg-slate-950 text-slate-200 hover:text-white font-semibold text-sm border border-slate-700/80 transition-all hover:translate-y-[-1px]"
            >
              <Compass className="w-4 h-4 text-slate-400" />
              <span>Browse All 10+ AI Roles</span>
            </button>
          </div>

          {/* Value Proof Bar */}
          <div className="pt-8 grid grid-cols-2 md:grid-cols-4 gap-4 border-t border-slate-800/80 max-w-4xl mx-auto text-left">
            <div className="p-3.5 rounded-lg bg-slate-900/50 border border-slate-800/80">
              <span className="block text-xl font-bold text-white tabular-nums">10 Tracks</span>
              <span className="text-xs text-slate-400">GenAI, MLOps, Research & More</span>
            </div>
            <div className="p-3.5 rounded-lg bg-slate-900/50 border border-slate-800/80">
              <span className="block text-xl font-bold text-white tabular-nums">40+ Milestones</span>
              <span className="text-xs text-slate-400">Curated, step-by-step phases</span>
            </div>
            <div className="p-3.5 rounded-lg bg-slate-900/50 border border-slate-800/80">
              <span className="block text-xl font-bold text-white tabular-nums">20+ Projects</span>
              <span className="text-xs text-slate-400">Production portfolio ideas</span>
            </div>
            <div 
              onClick={onOpenFreeVault}
              className="p-3.5 rounded-lg bg-emerald-950/20 border border-emerald-900/60 hover:border-emerald-500/50 cursor-pointer transition-colors"
            >
              <span className="block text-xl font-bold text-emerald-400 tabular-nums">100% Free</span>
              <span className="text-xs text-emerald-300/80">Zero paywalls · Free courses & GPUs →</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
