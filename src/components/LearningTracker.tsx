import React, { useState, useRef } from 'react';
import { 
  CheckCircle2, 
  Circle, 
  RotateCcw, 
  Download, 
  Upload, 
  Share2, 
  ExternalLink, 
  Sparkles, 
  Check, 
  ChevronDown,
  Layers,
  Award
} from 'lucide-react';
import { CareerRole, RoadmapMilestone } from '../types';
import { AI_ROLES } from '../data/rolesData';

interface LearningTrackerProps {
  activeRole: CareerRole;
  setActiveRole: (role: CareerRole) => void;
  completedMilestoneIds: string[];
  onToggleMilestone: (milestoneId: string) => void;
  onResetProgress: () => void;
  onImportProgress: (milestoneIds: string[]) => void;
}

export const LearningTracker: React.FC<LearningTrackerProps> = ({
  activeRole,
  setActiveRole,
  completedMilestoneIds,
  onToggleMilestone,
  onResetProgress,
  onImportProgress
}) => {
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const totalMilestones = activeRole.milestones.length;
  const completedInActiveRole = activeRole.milestones.filter((m) =>
    completedMilestoneIds.includes(m.id)
  ).length;
  const progressPercent = totalMilestones > 0 ? Math.round((completedInActiveRole / totalMilestones) * 100) : 0;

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  };

  const handleExportJSON = () => {
    const data = {
      app: 'AI CareerPath Tracker',
      version: '2026.1',
      exportDate: new Date().toISOString(),
      activeRoleId: activeRole.id,
      completedMilestoneIds
    };
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `ai-careerpath-progress-${activeRole.id}.json`;
    link.click();
    URL.revokeObjectURL(url);
    showToast('Progress exported to JSON successfully!');
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const parsed = JSON.parse(event.target?.result as string);
        if (Array.isArray(parsed.completedMilestoneIds)) {
          onImportProgress(parsed.completedMilestoneIds);
          if (parsed.activeRoleId) {
            const role = AI_ROLES.find((r) => r.id === parsed.activeRoleId);
            if (role) setActiveRole(role);
          }
          showToast('Progress restored from backup file!');
        } else {
          showToast('Invalid backup file format.');
        }
      } catch (err) {
        showToast('Error reading backup file.');
      }
    };
    reader.readAsText(file);
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  const handleShare = () => {
    const summary = `🚀 AI CareerPath Progress: I've completed ${completedInActiveRole} of ${totalMilestones} milestones (${progressPercent}%) on the ${activeRole.title} roadmap!`;
    navigator.clipboard.writeText(summary);
    showToast('Progress copied to clipboard!');
  };

  // Group milestones by phase
  const groupedPhases: Record<string, RoadmapMilestone[]> = {};
  activeRole.milestones.forEach((m) => {
    if (!groupedPhases[m.phaseTitle]) {
      groupedPhases[m.phaseTitle] = [];
    }
    groupedPhases[m.phaseTitle].push(m);
  });

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
      {/* Toast alert */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 flex items-center gap-2 px-4 py-3 rounded-xl bg-slate-900 border border-indigo-500 text-white text-xs shadow-2xl animate-in fade-in slide-in-from-bottom-2">
          <Check className="w-4 h-4 text-emerald-400" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Main Card */}
      <div className="rounded-2xl bg-slate-900 border border-slate-800 shadow-xl overflow-hidden">
        {/* Header with Title & Role Selector */}
        <div className="p-6 sm:p-8 border-b border-slate-800 bg-slate-950/70">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-indigo-400 bg-indigo-950/80 border border-indigo-800 px-2.5 py-1 rounded mb-2">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Interactive Learning Tracker</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                Roadmap Progress & Checklist
              </h2>
              <p className="text-xs sm:text-sm text-slate-400 mt-1">
                Track completed milestones. Your progress is saved automatically in your browser.
              </p>
            </div>

            {/* Role Switcher Dropdown */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-2">
              <span className="text-xs text-slate-400 font-medium">Select Active Path:</span>
              <div className="relative">
                <select
                  value={activeRole.id}
                  onChange={(e) => {
                    const found = AI_ROLES.find((r) => r.id === e.target.value);
                    if (found) setActiveRole(found);
                  }}
                  className="appearance-none pl-3 pr-9 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs sm:text-sm font-semibold text-white focus:outline-none focus:border-indigo-500 cursor-pointer shadow-sm"
                >
                  {AI_ROLES.map((role) => (
                    <option key={role.id} value={role.id}>
                      {role.title}
                    </option>
                  ))}
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
              </div>
            </div>
          </div>

          {/* Active Role Quick Banner & Progress Bar */}
          <div className="mt-6 p-5 rounded-xl bg-slate-900 border border-slate-800">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
              <div>
                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                  {activeRole.title}
                  {progressPercent === 100 && (
                    <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-400 bg-emerald-950/80 border border-emerald-800 px-2 py-0.5 rounded">
                      <Award className="w-3 h-3" /> Track Completed!
                    </span>
                  )}
                </h3>
                <p className="text-xs text-slate-400 mt-0.5">{activeRole.description}</p>
              </div>

              <div className="text-left sm:text-right shrink-0">
                <span className="text-sm font-bold text-white tabular-nums">
                  {completedInActiveRole} of {totalMilestones} milestones completed ({progressPercent}%)
                </span>
                <span className="block text-xs text-slate-400">
                  {progressPercent === 100
                    ? 'All requirements satisfied!'
                    : `~${(totalMilestones - completedInActiveRole) * 3} weeks estimated to completion`}
                </span>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="w-full bg-slate-950 h-3 rounded-full overflow-hidden p-0.5 border border-slate-800 mt-3">
              <div
                className="bg-gradient-to-r from-indigo-500 via-sky-400 to-emerald-400 h-full rounded-full transition-all duration-300"
                style={{ width: `${progressPercent}%` }}
              />
            </div>

            {/* Utility Action Buttons */}
            <div className="mt-4 pt-3 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                <button
                  onClick={() => {
                    if (window.confirm(`Are you sure you want to reset all milestones for ${activeRole.title}?`)) {
                      onResetProgress();
                      showToast('Progress reset for active track.');
                    }
                  }}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-950 hover:bg-slate-800 border border-slate-800 text-xs font-medium text-slate-300 hover:text-white transition-colors"
                >
                  <RotateCcw className="w-3.5 h-3.5 text-slate-400" />
                  <span>Reset Progress</span>
                </button>

                <button
                  onClick={handleExportJSON}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-950 hover:bg-slate-800 border border-slate-800 text-xs font-medium text-slate-300 hover:text-white transition-colors"
                >
                  <Download className="w-3.5 h-3.5 text-slate-400" />
                  <span>Export Progress (JSON)</span>
                </button>

                <input
                  type="file"
                  ref={fileInputRef}
                  onChange={handleFileChange}
                  accept=".json"
                  className="hidden"
                />
                <button
                  onClick={() => fileInputRef.current?.click()}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-950 hover:bg-slate-800 border border-slate-800 text-xs font-medium text-slate-300 hover:text-white transition-colors"
                >
                  <Upload className="w-3.5 h-3.5 text-slate-400" />
                  <span>Import Progress</span>
                </button>
              </div>

              <button
                onClick={handleShare}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-indigo-950/60 hover:bg-indigo-900 border border-indigo-800/80 text-xs font-semibold text-indigo-300 transition-colors"
              >
                <Share2 className="w-3.5 h-3.5" />
                <span>Share Progress</span>
              </button>
            </div>
          </div>
        </div>

        {/* Milestones Phases List */}
        <div className="p-6 sm:p-8 space-y-8">
          {Object.entries(groupedPhases).map(([phaseTitle, milestones]) => {
            const phaseCompleted = milestones.every((m) => completedMilestoneIds.includes(m.id));
            const phaseCompletedCount = milestones.filter((m) =>
              completedMilestoneIds.includes(m.id)
            ).length;

            return (
              <div key={phaseTitle} className="space-y-4">
                <div className="flex items-center justify-between pb-2 border-b border-slate-800">
                  <div className="flex items-center gap-2">
                    <Layers className="w-4 h-4 text-indigo-400" />
                    <h4 className="text-base font-bold text-white">{phaseTitle}</h4>
                  </div>
                  <span className="text-xs font-semibold text-slate-400 tabular-nums">
                    {phaseCompletedCount} / {milestones.length} completed
                  </span>
                </div>

                <div className="space-y-3">
                  {milestones.map((m) => {
                    const isChecked = completedMilestoneIds.includes(m.id);
                    return (
                      <div
                        key={m.id}
                        onClick={() => onToggleMilestone(m.id)}
                        className={`group p-4 sm:p-5 rounded-xl border transition-all cursor-pointer ${
                          isChecked
                            ? 'bg-slate-950/40 border-emerald-900/40 opacity-90'
                            : 'bg-slate-950/70 border-slate-800 hover:border-slate-700 hover:bg-slate-950'
                        }`}
                      >
                        <div className="flex items-start gap-3.5">
                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              onToggleMilestone(m.id);
                            }}
                            className={`mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-md border text-xs transition-colors ${
                              isChecked
                                ? 'border-emerald-500 bg-emerald-600 text-white'
                                : 'border-slate-700 bg-slate-900 text-transparent group-hover:border-slate-500'
                            }`}
                          >
                            <Check className="w-3.5 h-3.5 stroke-[3]" />
                          </button>

                          <div className="flex-1">
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1">
                              <h5
                                className={`text-base font-bold transition-colors ${
                                  isChecked ? 'text-slate-400 line-through' : 'text-white'
                                }`}
                              >
                                {m.title}
                              </h5>
                              <span className="text-xs text-slate-400 font-mono tabular-nums">
                                Duration: {m.duration}
                              </span>
                            </div>

                            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-3">
                              {m.description}
                            </p>

                            {/* Skills badges */}
                            <div className="flex flex-wrap gap-1.5 mb-3">
                              {m.skills.map((s, idx) => (
                                <span
                                  key={idx}
                                  className="text-[11px] font-mono text-slate-300 bg-slate-900 border border-slate-800 px-2 py-0.5 rounded"
                                >
                                  {s}
                                </span>
                              ))}
                            </div>

                            {/* Milestone Exercise / Practical project */}
                            {m.projectIdea && (
                              <div className="p-2.5 rounded-lg bg-slate-900/80 border border-slate-800 text-xs text-slate-300 mb-2">
                                <span className="font-semibold text-emerald-400">
                                  Practical Exercise:{' '}
                                </span>
                                {m.projectIdea}
                              </div>
                            )}

                            {/* Recommended Links */}
                            <div
                              className="pt-2 flex flex-wrap items-center gap-3"
                              onClick={(e) => e.stopPropagation()}
                            >
                              <span className="text-xs text-slate-400 font-medium">Resources:</span>
                              {m.resources.map((res, rIdx) => (
                                <a
                                  key={rIdx}
                                  href={res.url}
                                  target="_blank"
                                  rel="noreferrer"
                                  className="inline-flex items-center gap-1 text-xs text-indigo-400 hover:text-indigo-300 hover:underline"
                                >
                                  <span>{res.name}</span>
                                  <ExternalLink className="w-3 h-3" />
                                </a>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
