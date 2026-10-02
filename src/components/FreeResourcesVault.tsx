import React, { useState } from 'react';
import { Gift, ExternalLink, BookOpen, Video, Terminal, Cpu, Search, CheckCircle2, Sparkles, ShieldCheck } from 'lucide-react';

interface FreeResourceItem {
  id: string;
  title: string;
  category: 'Course' | 'Book' | 'Compute' | 'Tools & Datasets';
  authorOrHost: string;
  description: string;
  url: string;
  tags: string[];
  highlight: string;
}

export const FREE_RESOURCES: FreeResourceItem[] = [
  {
    id: 'fast-ai',
    title: 'Practical Deep Learning for Coders',
    category: 'Course',
    authorOrHost: 'Jeremy Howard & fast.ai',
    description: 'The legendary top-down, hands-on deep learning curriculum. Teaches PyTorch, computer vision, NLP, and modern architectures with zero paywalls.',
    url: 'https://course.fast.ai/',
    tags: ['PyTorch', 'Computer Vision', 'Deep Learning'],
    highlight: '100% Free Video & Jupyter Notebooks'
  },
  {
    id: 'karpathy-series',
    title: 'Neural Networks: Zero to Hero',
    category: 'Course',
    authorOrHost: 'Andrej Karpathy (former Tesla AI & OpenAI)',
    description: 'From micrograd (autograd engine from scratch) to building GPT-2 tokenizer, attention mechanisms, and backprop derivations line by line.',
    url: 'https://karpathy.ai/zero-to-hero.html',
    tags: ['From Scratch', 'Transformers', 'Autograd'],
    highlight: 'Top-Rated Free YouTube Masterclass'
  },
  {
    id: 'huggingface-courses',
    title: 'Hugging Face Open Curriculum (NLP, Audio, RL)',
    category: 'Course',
    authorOrHost: 'Hugging Face',
    description: 'Official free interactive courses covering Transformer fine-tuning, audio models, reinforcement learning, and diffusion models with free Colab support.',
    url: 'https://huggingface.co/learn',
    tags: ['Transformers', 'NLP', 'Diffusion', 'RL'],
    highlight: 'Includes Free Certificates & Quizzes'
  },
  {
    id: 'stanford-cs229',
    title: 'Stanford CS229: Machine Learning',
    category: 'Course',
    authorOrHost: 'Stanford University (Andrew Ng)',
    description: 'The foundational university machine learning syllabus covering mathematical derivations, SVMs, kernels, PCA, and EM algorithms with lecture notes.',
    url: 'https://cs229.stanford.edu/',
    tags: ['Mathematics', 'Supervised Learning', 'Theory'],
    highlight: 'Full Lecture Notes & Video Recordings'
  },
  {
    id: 'fullstack-deeplearning',
    title: 'Full Stack Deep Learning & LLM Bootcamp',
    category: 'Course',
    authorOrHost: 'UC Berkeley faculty & Industry Practitioners',
    description: 'Teaches everything needed to ship production AI systems: data pipelines, testing, model monitoring, Docker, FastAPI, and GPU deployment.',
    url: 'https://fullstackdeeplearning.com/',
    tags: ['MLOps', 'Deployment', 'FastAPI', 'Docker'],
    highlight: 'Industry Production Standard'
  },
  {
    id: 'mml-book',
    title: 'Mathematics for Machine Learning',
    category: 'Book',
    authorOrHost: 'Marc Peter Deisenroth, A. Aldo Faisal, Cheng Soon Ong',
    description: 'The definitive text on the 4 mathematical pillars of AI: Linear Algebra, Analytic Geometry, Matrix Decompositions, and Vector Calculus.',
    url: 'https://mml-book.github.io/',
    tags: ['Linear Algebra', 'Calculus', 'Probability'],
    highlight: 'Free Legal PDF & Exercises'
  },
  {
    id: 'wes-mckinney-python',
    title: 'Python for Data Analysis (3rd Edition)',
    category: 'Book',
    authorOrHost: 'Wes McKinney (Creator of Pandas)',
    description: 'The creator of Pandas provides the full, up-to-date textbook on data manipulation, NumPy arrays, time series, and practical data science.',
    url: 'https://wesmckinney.com/book/',
    tags: ['Pandas', 'NumPy', 'Python', 'Data Wrangling'],
    highlight: 'Complete Open Access Web Book'
  },
  {
    id: 'deep-learning-book',
    title: 'Deep Learning ("The MIT Bible")',
    category: 'Book',
    authorOrHost: 'Ian Goodfellow, Yoshua Bengio & Aaron Courville',
    description: 'Comprehensive theoretical foundation of deep learning cited over 100,000 times by academic and industry researchers worldwide.',
    url: 'https://www.deeplearningbook.org/',
    tags: ['Foundations', 'Optimization', 'Neural Networks'],
    highlight: 'Free Web Edition Online'
  },
  {
    id: 'kaggle-notebooks',
    title: 'Kaggle GPU Notebooks',
    category: 'Compute',
    authorOrHost: 'Google / Kaggle',
    description: '30 hours of free weekly GPU compute (NVIDIA Tesla T4 / P100) with 100,000+ public datasets and pre-installed AI environments.',
    url: 'https://www.kaggle.com/code',
    tags: ['Free GPU', 'Datasets', 'Competitions'],
    highlight: '30 Free GPU Hours / Week'
  },
  {
    id: 'google-colab',
    title: 'Google Colab Free Tier',
    category: 'Compute',
    authorOrHost: 'Google Research',
    description: 'Zero-configuration cloud Jupyter environment with free T4 GPU access for prototyping neural networks and fine-tuning small models.',
    url: 'https://colab.research.google.com/',
    tags: ['Free GPU', 'Jupyter', 'Cloud'],
    highlight: 'Zero Installation Required'
  },
  {
    id: 'hf-spaces',
    title: 'Hugging Face Spaces (Free CPU & Demo Hosting)',
    category: 'Compute',
    authorOrHost: 'Hugging Face',
    description: 'Host your portfolio apps (Gradio, Streamlit, Docker) completely free with public shareable URLs to include in your resume.',
    url: 'https://huggingface.co/spaces',
    tags: ['Hosting', 'Gradio', 'Streamlit', 'Portfolio'],
    highlight: 'Free Permanent Portfolio Hosting'
  },
  {
    id: 'promptfoo-tool',
    title: 'Promptfoo (Open Source LLM Testing & Red-Teaming)',
    category: 'Tools & Datasets',
    authorOrHost: 'Open Source Community',
    description: 'CLI and test harness to benchmark LLM outputs, detect regressions, evaluate accuracy, and perform automated red-teaming locally.',
    url: 'https://www.promptfoo.dev/',
    tags: ['LLM Testing', 'Security', 'CI/CD'],
    highlight: '100% Free & Open-Source'
  }
];

export const FreeResourcesVault: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<'All' | 'Course' | 'Book' | 'Compute' | 'Tools & Datasets'>('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filtered = FREE_RESOURCES.filter((res) => {
    const matchesCat = selectedFilter === 'All' || res.category === selectedFilter;
    const q = searchQuery.toLowerCase().trim();
    if (!q) return matchesCat;
    return (
      matchesCat &&
      (res.title.toLowerCase().includes(q) ||
        res.description.toLowerCase().includes(q) ||
        res.tags.some((t) => t.toLowerCase().includes(q)))
    );
  });

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-8">
      {/* Banner */}
      <div className="rounded-2xl bg-gradient-to-r from-emerald-950/60 via-slate-900 to-indigo-950/60 border border-emerald-500/40 p-6 sm:p-8 shadow-xl">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950 border border-emerald-800 text-emerald-400 text-xs font-semibold mb-3">
              <Gift className="w-3.5 h-3.5" />
              <span>100% Free of Cost — Zero Paywalls Ever</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Zero-Cost AI Learning Vault
            </h2>
            <p className="text-sm text-slate-300 mt-1 max-w-2xl leading-relaxed">
              Every course, textbook, cloud GPU tier, and tool listed here is verified to be 100% free of charge. You do not need to pay a single dollar or enter credit card details to become an industry-ready AI engineer.
            </p>
          </div>

          <div className="flex items-center gap-3 self-start md:self-auto">
            <div className="p-3 rounded-xl bg-slate-950/80 border border-emerald-500/30 text-center">
              <span className="block text-xl font-bold text-emerald-400 tabular-nums">$0.00</span>
              <span className="text-[11px] text-slate-400 font-medium">Total Cost to Learn</span>
            </div>
            <div className="p-3 rounded-xl bg-slate-950/80 border border-indigo-500/30 text-center">
              <span className="block text-xl font-bold text-indigo-400 tabular-nums">12+</span>
              <span className="text-[11px] text-slate-400 font-medium">Verified Free Assets</span>
            </div>
          </div>
        </div>

        {/* Filter & Search Bar */}
        <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
          <div className="relative flex-1">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search free courses, books, GPU tools (e.g. PyTorch, Karpathy, Colab)..."
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500 transition-colors"
            />
          </div>

          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0 scrollbar-none">
            {(['All', 'Course', 'Book', 'Compute', 'Tools & Datasets'] as const).map((filter) => (
              <button
                key={filter}
                onClick={() => setSelectedFilter(filter)}
                className={`px-3 py-2 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors ${
                  selectedFilter === filter
                    ? 'bg-emerald-600 text-white shadow-sm'
                    : 'bg-slate-900 text-slate-400 hover:text-slate-200 border border-slate-800'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Grid of Free Resources */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {filtered.map((item) => (
          <div
            key={item.id}
            className="flex flex-col justify-between p-5 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-emerald-500/50 transition-all hover:translate-y-[-2px] hover:shadow-lg"
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-2">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-emerald-400 bg-emerald-950/80 border border-emerald-800/80 px-2 py-0.5 rounded">
                  {item.category}
                </span>
                <span className="text-xs font-semibold text-emerald-400 bg-emerald-950/40 px-2 py-0.5 rounded border border-emerald-900/60">
                  {item.highlight}
                </span>
              </div>

              <h3 className="text-base font-bold text-white mt-1">{item.title}</h3>
              <p className="text-xs text-indigo-300 font-medium mt-0.5">{item.authorOrHost}</p>
              <p className="text-xs text-slate-300 mt-2.5 leading-relaxed">{item.description}</p>
            </div>

            <div className="mt-5 pt-3 border-t border-slate-800/80 flex items-center justify-between">
              <div className="flex flex-wrap gap-1">
                {item.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="text-[10px] font-mono text-slate-400 bg-slate-950 px-1.5 py-0.5 rounded border border-slate-800"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <a
                href={item.url}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-emerald-950/80 hover:bg-emerald-900 border border-emerald-800 text-xs font-semibold text-emerald-300 hover:text-white transition-colors"
              >
                <span>Access Free</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
