import React from 'react';
import { X, ExternalLink, CheckCircle, ArrowRight, DollarSign, BarChart3, Clock, Sparkles, BookOpen } from 'lucide-react';
import { CareerRole } from '../types';

interface RoleDetailModalProps {
  role: CareerRole | null;
  onClose: () => void;
  onSelectActiveTrack: (role: CareerRole) => void;
  isActiveTrack: boolean;
}

export const RoleDetailModal: React.FC<RoleDetailModalProps> = ({
  role,
  onClose,
  onSelectActiveTrack,
  isActiveTrack
}) => {
  if (!role) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-4xl max-h-[90vh] flex flex-col rounded-2xl bg-slate-900 border border-slate-700/80 shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="flex items-start justify-between p-6 border-b border-slate-800 bg-slate-950/50">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="text-xs font-semibold uppercase tracking-wider text-indigo-400 bg-indigo-950/80 border border-indigo-800 px-2 py-0.5 rounded">
                {role.category}
              </span>
              <span className="text-xs text-slate-400">·</span>
              <span className="text-xs text-slate-400 font-medium">Difficulty: {role.difficulty}</span>
              <span className="text-xs text-slate-400">·</span>
              <span className="text-xs text-emerald-400 font-medium">Demand: {role.marketDemand}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              {role.title}
            </h2>
            <p className="text-sm text-slate-300 mt-1 max-w-2xl leading-relaxed">
              {role.description}
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="overflow-y-auto p-6 space-y-8 flex-1">
          {/* Key Quick Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800">
              <div className="flex items-center gap-2 text-xs text-slate-400 font-medium mb-1">
                <DollarSign className="w-4 h-4 text-emerald-400" />
                <span>Estimated Compensation</span>
              </div>
              <p className="text-base font-bold text-white tabular-nums">{role.salaryRange}</p>
            </div>

            <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800">
              <div className="flex items-center gap-2 text-xs text-slate-400 font-medium mb-1">
                <BarChart3 className="w-4 h-4 text-sky-400" />
                <span>Market Demand</span>
              </div>
              <p className="text-base font-bold text-white">{role.marketDemand} Hiring Urgency</p>
            </div>

            <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800">
              <div className="flex items-center gap-2 text-xs text-slate-400 font-medium mb-1">
                <Clock className="w-4 h-4 text-amber-400" />
                <span>Estimated Mastery Timeline</span>
              </div>
              <p className="text-base font-bold text-white">4 - 6 Months Dedicated</p>
            </div>
          </div>

          {/* Daily Responsibilities */}
          <div>
            <h3 className="text-base font-semibold text-white mb-3 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-indigo-400" />
              What You'll Actually Do on the Job
            </h3>
            <ul className="space-y-2 text-sm text-slate-300">
              {role.dailyTasks.map((task, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <span className="text-indigo-400 mt-1">✓</span>
                  <span>{task}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Core Tech Stack */}
          <div>
            <h3 className="text-base font-semibold text-white mb-3">Core Tech Stack & Frameworks</h3>
            <div className="flex flex-wrap gap-2">
              {role.coreTech.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded-lg text-xs font-medium bg-slate-800 text-slate-200 border border-slate-700"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Roadmap Milestones Breakdown */}
          <div>
            <h3 className="text-base font-semibold text-white mb-4">Complete 4-Phase Roadmap</h3>
            <div className="space-y-4">
              {role.milestones.map((m) => (
                <div
                  key={m.id}
                  className="p-4 rounded-xl bg-slate-950/70 border border-slate-800 hover:border-slate-700 transition-colors"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                    <span className="text-xs font-semibold text-indigo-400 uppercase tracking-wide">
                      {m.phaseTitle}
                    </span>
                    <span className="text-xs text-slate-400 font-medium tabular-nums">{m.duration}</span>
                  </div>
                  <h4 className="text-base font-bold text-white">{m.title}</h4>
                  <p className="text-sm text-slate-300 mt-1 leading-relaxed">{m.description}</p>
                  
                  {/* Skills Learned */}
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {m.skills.map((s, sIdx) => (
                      <span key={sIdx} className="text-xs text-slate-300 bg-slate-900 border border-slate-800 px-2 py-0.5 rounded">
                        {s}
                      </span>
                    ))}
                  </div>

                  {/* Curated Resources */}
                  <div className="mt-3 pt-3 border-t border-slate-800/80 flex flex-wrap items-center gap-3">
                    <span className="text-xs font-medium text-slate-400">Curated Resources:</span>
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

                  {m.projectIdea && (
                    <div className="mt-2.5 text-xs text-emerald-300/90 bg-emerald-950/30 border border-emerald-900/40 p-2 rounded">
                      <span className="font-semibold text-emerald-400">Milestone Exercise: </span>
                      {m.projectIdea}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Standout Portfolio Projects */}
          <div>
            <h3 className="text-base font-semibold text-white mb-3">Hiring Portfolio Projects</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {role.portfolioProjects.map((proj, pIdx) => (
                <div key={pIdx} className="p-4 rounded-xl bg-slate-950/70 border border-slate-800 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-xs font-semibold text-sky-400 uppercase tracking-wide">
                        {proj.difficulty} Project
                      </span>
                    </div>
                    <h4 className="text-sm font-bold text-white">{proj.title}</h4>
                    <p className="text-xs text-slate-300 mt-1.5 leading-relaxed">{proj.description}</p>
                  </div>
                  <div className="mt-3 pt-3 border-t border-slate-800/80">
                    <div className="text-[11px] text-slate-400">
                      <span className="font-semibold text-slate-300">Deliverable:</span> {proj.deliverable}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Bottom Action Bar */}
        <div className="p-4 sm:p-6 border-t border-slate-800 bg-slate-950/80 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="text-xs text-slate-400">
            {isActiveTrack ? (
              <span className="text-emerald-400 font-semibold flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4" /> Currently selected as your active learning path
              </span>
            ) : (
              <span>Select this track to track milestones in your Learning Tracker.</span>
            )}
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="w-1/2 sm:w-auto px-4 py-2 text-xs font-medium text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors"
            >
              Close
            </button>
            <button
              onClick={() => {
                onSelectActiveTrack(role);
                onClose();
              }}
              className="w-1/2 sm:w-auto px-4 py-2 text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-500 rounded-lg shadow-sm transition-colors flex items-center justify-center gap-1.5"
            >
              <span>{isActiveTrack ? 'Go to Tracker' : 'Set as Active Learning Track'}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
