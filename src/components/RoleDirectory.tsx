import React, { useState, useMemo } from 'react';
import { Search, Compass, ArrowRight, DollarSign, BarChart2, Check, Sparkles, Filter } from 'lucide-react';
import { CareerRole, RoleCategory } from '../types';
import { AI_ROLES } from '../data/rolesData';
import { RoleDetailModal } from './RoleDetailModal';

interface RoleDirectoryProps {
  activeRole: CareerRole;
  onSelectRoleAsActive: (role: CareerRole) => void;
  onNavigateToTracker: () => void;
}

export const RoleDirectory: React.FC<RoleDirectoryProps> = ({
  activeRole,
  onSelectRoleAsActive,
  onNavigateToTracker
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<RoleCategory>('All Roles');
  const [inspectingRole, setInspectingRole] = useState<CareerRole | null>(null);

  const categories: RoleCategory[] = [
    'All Roles',
    'Engineering',
    'Data & Analytics',
    'GenAI & LLMs',
    'MLOps & Cloud',
    'Beginner Friendly'
  ];

  const filteredRoles = useMemo(() => {
    return AI_ROLES.filter((role) => {
      // Category filter
      const matchesCategory =
        selectedCategory === 'All Roles'
          ? true
          : selectedCategory === 'Beginner Friendly'
          ? role.difficulty === 'Beginner Friendly'
          : role.category === selectedCategory;

      // Search filter
      const query = searchQuery.toLowerCase().trim();
      if (!query) return matchesCategory;

      const matchesTitle = role.title.toLowerCase().includes(query);
      const matchesDesc = role.description.toLowerCase().includes(query);
      const matchesTech = role.coreTech.some((t) => t.toLowerCase().includes(query));
      const matchesSkills = role.prerequisites.some((p) => p.toLowerCase().includes(query));

      return matchesCategory && (matchesTitle || matchesDesc || matchesTech || matchesSkills);
    });
  }, [searchQuery, selectedCategory]);

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="mb-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Explore AI Career Specializations
            </h2>
            <p className="text-sm sm:text-base text-slate-400 mt-1 max-w-2xl">
              Click on any role to inspect full learning roadmaps, required tools, project ideas, and salary expectations.
            </p>
          </div>

          {/* Quick Active Track Status */}
          <div className="flex items-center gap-2 text-xs bg-slate-900 border border-slate-800 px-3 py-2 rounded-lg self-start md:self-auto">
            <span className="text-slate-400">Current Track:</span>
            <span className="font-semibold text-indigo-400">{activeRole.title}</span>
            <button
              onClick={onNavigateToTracker}
              className="text-xs text-slate-300 hover:text-white underline ml-2"
            >
              Open Tracker
            </button>
          </div>
        </div>

        {/* Search & Filter Controls */}
        <div className="mt-6 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
          {/* Search Box */}
          <div className="relative flex-1">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by role or skill (e.g. PyTorch, NLP, MLOps, SQL, LangChain)..."
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 text-sm text-white placeholder-slate-500 transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-white"
              >
                Clear
              </button>
            )}
          </div>

          {/* Segmented Category Filter Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-2 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors ${
                  selectedCategory === cat
                    ? 'bg-indigo-600 text-white shadow-sm'
                    : 'bg-slate-900 text-slate-400 hover:text-slate-200 border border-slate-800/80 hover:bg-slate-800'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Grid of AI Career Cards */}
      {filteredRoles.length === 0 ? (
        <div className="text-center py-16 px-4 rounded-2xl bg-slate-900/50 border border-slate-800">
          <Compass className="w-8 h-8 text-slate-500 mx-auto mb-3" />
          <h3 className="text-base font-bold text-white">No specializations match "{searchQuery}"</h3>
          <p className="text-xs text-slate-400 mt-1">Try searching for keywords like "Python", "Kubernetes", "PyTorch", or "RAG".</p>
          <button
            onClick={() => {
              setSearchQuery('');
              setSelectedCategory('All Roles');
            }}
            className="mt-4 px-4 py-2 text-xs font-medium text-indigo-400 bg-indigo-950/60 border border-indigo-800 rounded-lg hover:bg-indigo-900/80"
          >
            Reset Filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredRoles.map((role) => {
            const isActive = activeRole.id === role.id;
            return (
              <div
                key={role.id}
                onClick={() => setInspectingRole(role)}
                className={`group relative flex flex-col justify-between p-6 rounded-2xl bg-slate-900/80 border transition-all duration-200 cursor-pointer hover:translate-y-[-2px] hover:shadow-xl ${
                  isActive
                    ? 'border-indigo-500/80 ring-1 ring-indigo-500/40 bg-gradient-to-b from-slate-900 to-indigo-950/20'
                    : 'border-slate-800 hover:border-slate-700'
                }`}
              >
                <div>
                  {/* Top metadata tags */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-indigo-400 bg-indigo-950/80 border border-indigo-800/60 px-2 py-0.5 rounded">
                      {role.category}
                    </span>
                    <span className="text-xs font-medium text-emerald-400 tabular-nums">
                      {role.salaryRange.split('-')[0].trim()}+
                    </span>
                  </div>

                  {/* Title & Tagline */}
                  <h3 className="text-xl font-bold text-white group-hover:text-indigo-300 transition-colors">
                    {role.title}
                  </h3>
                  <p className="text-xs text-indigo-200/80 font-medium mt-1">
                    {role.tagline}
                  </p>
                  <p className="text-xs text-slate-300 mt-2.5 line-clamp-3 leading-relaxed">
                    {role.description}
                  </p>

                  {/* Tech stack highlights */}
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {role.coreTech.slice(0, 4).map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-[11px] font-mono text-slate-300 bg-slate-950 px-2 py-0.5 rounded border border-slate-800"
                      >
                        {tech}
                      </span>
                    ))}
                    {role.coreTech.length > 4 && (
                      <span className="text-[11px] text-slate-500 px-1 py-0.5">
                        +{role.coreTech.length - 4} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Footer Controls */}
                <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-xs text-slate-400">
                    <span>{role.milestones.length} Phases</span>
                    <span>·</span>
                    <span className="capitalize">{role.difficulty}</span>
                  </div>

                  <div className="flex items-center gap-2">
                    {isActive ? (
                      <span className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-400 bg-emerald-950/60 px-2.5 py-1 rounded-md border border-emerald-800/60">
                        <Check className="w-3.5 h-3.5" />
                        Active Track
                      </span>
                    ) : (
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          onSelectRoleAsActive(role);
                        }}
                        className="text-xs font-medium text-slate-300 hover:text-white px-2.5 py-1 rounded hover:bg-slate-800 transition-colors"
                      >
                        Set Active
                      </button>
                    )}

                    <span className="text-xs font-semibold text-indigo-400 group-hover:translate-x-0.5 transition-transform flex items-center gap-0.5">
                      Roadmap <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Role Deep-Dive Modal */}
      <RoleDetailModal
        role={inspectingRole}
        onClose={() => setInspectingRole(null)}
        onSelectActiveTrack={(r) => {
          onSelectRoleAsActive(r);
          onNavigateToTracker();
        }}
        isActiveTrack={inspectingRole ? activeRole.id === inspectingRole.id : false}
      />
    </section>
  );
};
