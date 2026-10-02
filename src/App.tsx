import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { RoleDirectory } from './components/RoleDirectory';
import { CareerQuiz } from './components/CareerQuiz';
import { LearningTracker } from './components/LearningTracker';
import { AIAdvisor } from './components/AIAdvisor';
import { VercelFixGuide } from './components/VercelFixGuide';
import { FreeResourcesVault } from './components/FreeResourcesVault';
import { AI_ROLES } from './data/rolesData';
import { CareerRole } from './types';
import { Compass, Sparkles, CheckCircle2, Github, ExternalLink, HelpCircle, Gift } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<'roles' | 'quiz' | 'tracker' | 'advisor' | 'deploy-guide' | 'free-vault'>('roles');
  const [activeRole, setActiveRole] = useState<CareerRole>(AI_ROLES[0]);
  const [completedMilestones, setCompletedMilestones] = useState<string[]>([]);

  // Load saved state from localStorage on initial render
  useEffect(() => {
    try {
      const savedRoleId = localStorage.getItem('ai_careerpath_active_role');
      if (savedRoleId) {
        const found = AI_ROLES.find((r) => r.id === savedRoleId);
        if (found) setActiveRole(found);
      }

      const savedMilestones = localStorage.getItem('ai_careerpath_completed_milestones');
      if (savedMilestones) {
        const parsed = JSON.parse(savedMilestones);
        if (Array.isArray(parsed)) {
          setCompletedMilestones(parsed);
        }
      }
    } catch (e) {
      console.error('Error loading saved state:', e);
    }
  }, []);

  // Save active role to localStorage
  const handleSetActiveRole = (role: CareerRole) => {
    setActiveRole(role);
    try {
      localStorage.setItem('ai_careerpath_active_role', role.id);
    } catch (e) {
      console.error('Error saving active role:', e);
    }
  };

  // Toggle milestone checkbox
  const handleToggleMilestone = (milestoneId: string) => {
    setCompletedMilestones((prev) => {
      const updated = prev.includes(milestoneId)
        ? prev.filter((id) => id !== milestoneId)
        : [...prev, milestoneId];
      try {
        localStorage.setItem('ai_careerpath_completed_milestones', JSON.stringify(updated));
      } catch (e) {
        console.error('Error saving milestones:', e);
      }
      return updated;
    });
  };

  // Reset active track milestones
  const handleResetProgress = () => {
    const activeMilestoneIds = activeRole.milestones.map((m) => m.id);
    setCompletedMilestones((prev) => {
      const updated = prev.filter((id) => !activeMilestoneIds.includes(id));
      try {
        localStorage.setItem('ai_careerpath_completed_milestones', JSON.stringify(updated));
      } catch (e) {
        console.error('Error resetting milestones:', e);
      }
      return updated;
    });
  };

  // Import milestones from JSON backup
  const handleImportProgress = (milestoneIds: string[]) => {
    setCompletedMilestones(milestoneIds);
    try {
      localStorage.setItem('ai_careerpath_completed_milestones', JSON.stringify(milestoneIds));
    } catch (e) {
      console.error('Error importing milestones:', e);
    }
  };

  // Jump from Quiz to Tracker with selected role
  const handleSelectRoleAndTrack = (role: CareerRole) => {
    handleSetActiveRole(role);
    setActiveTab('tracker');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const totalMilestonesInActive = activeRole.milestones.length;
  const completedInActive = activeRole.milestones.filter((m) =>
    completedMilestones.includes(m.id)
  ).length;

  return (
    <div className="min-h-screen flex flex-col bg-slate-950 text-slate-100 font-sans antialiased selection:bg-indigo-600 selection:text-white">
      {/* Top Fixed Header */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        activeRole={activeRole}
        completedCount={completedInActive}
        totalCount={totalMilestonesInActive}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* Hero Section shown on the primary view */}
        {activeTab === 'roles' && (
          <HeroSection
            onStartQuiz={() => {
              setActiveTab('quiz');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onBrowseRoles={() => {
              const el = document.getElementById('roles-directory');
              el?.scrollIntoView({ behavior: 'smooth' });
            }}
            onOpenTracker={() => {
              setActiveTab('tracker');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onOpenFreeVault={() => {
              setActiveTab('free-vault');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          />
        )}

        <div id="roles-directory">
          {activeTab === 'roles' && (
            <RoleDirectory
              activeRole={activeRole}
              onSelectRoleAsActive={handleSetActiveRole}
              onNavigateToTracker={() => {
                setActiveTab('tracker');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            />
          )}

          {activeTab === 'quiz' && (
            <CareerQuiz onSelectRoleAndTrack={handleSelectRoleAndTrack} />
          )}

          {activeTab === 'tracker' && (
            <LearningTracker
              activeRole={activeRole}
              setActiveRole={handleSetActiveRole}
              completedMilestoneIds={completedMilestones}
              onToggleMilestone={handleToggleMilestone}
              onResetProgress={handleResetProgress}
              onImportProgress={handleImportProgress}
            />
          )}

          {activeTab === 'free-vault' && <FreeResourcesVault />}

          {activeTab === 'advisor' && (
            <AIAdvisor
              activeRole={activeRole}
              completedCount={completedInActive}
            />
          )}

          {activeTab === 'deploy-guide' && <VercelFixGuide />}
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-800/80 bg-slate-950 py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-slate-400">
          <div className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-600/20 border border-indigo-500/30 text-indigo-400">
              <Compass className="h-4 w-4" />
            </div>
            <div>
              <span className="font-bold text-white text-sm">AI CareerPath</span>
              <p className="text-slate-400 mt-0.5">
                The Complete Roadmap from Beginner to AI Professional (2026 Edition)
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-4 sm:gap-6">
            <button
              onClick={() => {
                setActiveTab('roles');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="hover:text-slate-200 transition-colors"
            >
              Explore Roles
            </button>
            <button
              onClick={() => {
                setActiveTab('quiz');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="hover:text-slate-200 transition-colors"
            >
              Career Quiz
            </button>
            <button
              onClick={() => {
                setActiveTab('tracker');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="hover:text-slate-200 transition-colors"
            >
              Progress Tracker
            </button>
            <button
              onClick={() => {
                setActiveTab('free-vault');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="text-emerald-400 hover:text-emerald-300 font-semibold transition-colors flex items-center gap-1"
            >
              <Gift className="w-3.5 h-3.5" />
              <span>Free Resources ($0)</span>
            </button>
            <button
              onClick={() => {
                setActiveTab('advisor');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="hover:text-slate-200 transition-colors"
            >
              AI Advisor
            </button>
            <button
              onClick={() => {
                setActiveTab('deploy-guide');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="text-indigo-400 hover:text-indigo-300 font-semibold transition-colors flex items-center gap-1"
            >
              <HelpCircle className="w-3.5 h-3.5" />
              <span>Vercel Fix Guide</span>
            </button>
          </div>

          <div className="text-slate-400 text-center md:text-right">
            <span>Built for AI engineers, data scientists & researchers.</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
