import React from 'react';
import { Compass, CheckCircle2, BookOpen, BrainCircuit, Sparkles, HelpCircle, Menu, X, Gift } from 'lucide-react';
import { CareerRole } from '../types';

interface NavbarProps {
  activeTab: 'roles' | 'quiz' | 'tracker' | 'advisor' | 'deploy-guide' | 'free-vault';
  setActiveTab: (tab: 'roles' | 'quiz' | 'tracker' | 'advisor' | 'deploy-guide' | 'free-vault') => void;
  activeRole: CareerRole;
  completedCount: number;
  totalCount: number;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  setActiveTab,
  activeRole,
  completedCount,
  totalCount
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const progressPercent = totalCount > 0 ? Math.round((completedCount / totalCount) * 100) : 0;

  const navItems = [
    { id: 'roles' as const, label: 'Explore Roles', icon: Compass },
    { id: 'quiz' as const, label: 'Career Quiz', icon: BrainCircuit },
    { id: 'tracker' as const, label: 'My Progress', icon: CheckCircle2 },
    { id: 'free-vault' as const, label: 'Free Resources ($0)', icon: Gift },
    { id: 'advisor' as const, label: 'AI Advisor', icon: Sparkles },
    { id: 'deploy-guide' as const, label: 'Vercel Deployment Fix', icon: HelpCircle }
  ];

  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-800 bg-slate-950/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Brand Zone */}
        <div className="flex items-center gap-3">
          <button 
            onClick={() => setActiveTab('roles')} 
            className="flex items-center gap-2.5 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 rounded-lg p-1"
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-indigo-600/20 border border-indigo-500/30 text-indigo-400">
              <Compass className="h-5 w-5" />
            </div>
            <div>
              <span className="text-lg font-bold tracking-tight text-white flex items-center gap-1.5">
                AI CareerPath
                <span className="text-[11px] font-semibold uppercase tracking-wider text-indigo-400 bg-indigo-950/60 border border-indigo-800/50 px-1.5 py-0.5 rounded">
                  2026
                </span>
              </span>
            </div>
          </button>
        </div>

        {/* Nav Links (Desktop) */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${
                  isActive
                    ? 'bg-slate-800 text-white shadow-sm border border-slate-700/80'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900/60'
                }`}
              >
                <Icon className={`h-4 w-4 ${isActive ? 'text-indigo-400' : 'text-slate-500'}`} />
                <span className="whitespace-nowrap">{item.label}</span>
              </button>
            );
          })}
        </nav>

        {/* User Progress Pill & Primary Action */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            onClick={() => setActiveTab('tracker')}
            className="flex items-center gap-2.5 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-xs hover:border-slate-700 transition-colors text-left"
            title="Click to view learning roadmap progress"
          >
            <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <div className="flex flex-col">
              <span className="font-semibold text-slate-200 truncate max-w-[140px]">
                {activeRole.title}
              </span>
              <span className="text-[11px] text-slate-400 tabular-nums">
                {completedCount}/{totalCount} milestones ({progressPercent}%)
              </span>
            </div>
          </button>

          <button
            onClick={() => setActiveTab('quiz')}
            className="px-3.5 py-2 text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 rounded-lg shadow-sm transition-colors whitespace-nowrap"
          >
            Find My Path
          </button>
        </div>

        {/* Mobile menu toggle button */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-900"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-slate-800 bg-slate-950 px-4 pt-2 pb-4 space-y-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => {
                  setActiveTab(item.id);
                  setMobileMenuOpen(false);
                }}
                className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium ${
                  isActive
                    ? 'bg-slate-800 text-white font-semibold'
                    : 'text-slate-300 hover:bg-slate-900'
                }`}
              >
                <Icon className={`h-4 w-4 ${isActive ? 'text-indigo-400' : 'text-slate-400'}`} />
                <span>{item.label}</span>
              </button>
            );
          })}
          <div className="pt-3 border-t border-slate-800">
            <button
              onClick={() => {
                setActiveTab('tracker');
                setMobileMenuOpen(false);
              }}
              className="w-full flex items-center justify-between px-3 py-2 rounded-lg bg-slate-900 text-xs text-slate-300"
            >
              <span>Active: {activeRole.title}</span>
              <span className="text-emerald-400 font-medium tabular-nums">{progressPercent}%</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
