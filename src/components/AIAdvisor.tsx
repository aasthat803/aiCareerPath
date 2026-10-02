import React, { useState } from 'react';
import { Sparkles, Send, Bot, User, BookOpen, Lightbulb, Compass, ArrowRight, Loader2 } from 'lucide-react';
import { CareerRole, AdvisorMessage } from '../types';

interface AIAdvisorProps {
  activeRole: CareerRole;
  completedCount: number;
}

export const AIAdvisor: React.FC<AIAdvisorProps> = ({ activeRole, completedCount }) => {
  const [messages, setMessages] = useState<AdvisorMessage[]>([
    {
      id: 'welcome',
      sender: 'assistant',
      text: `Hello! I'm your dedicated AI Career Mentor. I see you're currently exploring the **${activeRole.title}** track with ${completedCount} milestones tracked. What would you like guidance on today?`,
      timestamp: 'Just now',
      suggestions: [
        `How do I break into ${activeRole.title} with no prior AI title?`,
        'What portfolio projects impress tech recruiters most in 2026?',
        'Which math concepts are strictly required vs skippable?',
        'How should I structure my AI resume and GitHub repo?'
      ]
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const getKnowledgeResponse = (query: string, currentRole: CareerRole): string => {
    const q = query.toLowerCase();

    if (q.includes('portfolio') || q.includes('project')) {
      return `### 💡 2026 AI Portfolio Strategy for ${currentRole.title}

Hiring managers in 2026 have moved beyond toy Kaggle notebooks (e.g. Titanic or MNIST). Here is the formula that guarantees interviews:

1. **Production System Over Standalone Notebook**:
   - Don't just show a Jupyter notebook. Package your model into a containerized microservice with a **FastAPI** backend and automated Docker build.
   - Example deliverable: \`${currentRole.portfolioProjects[0]?.title || 'End-to-End Inference API'}\`.

2. **Benchmarking & Latency Metrics**:
   - Include a latency benchmark table in your GitHub README: p50/p95/p99 latency (ms), GPU VRAM footprint, and throughput (tokens/sec or queries/sec).

3. **Handling Failure Modes**:
   - Add error boundaries, fallbacks (e.g., graceful degradation when confidence is below 70%), and drift monitoring.

4. **Live Interactive Demo**:
   - Host a lightweight frontend (Streamlit, Hugging Face Spaces, or React + Vercel) where recruiters can test live inferences.`;
    }

    if (q.includes('math') || q.includes('calculus') || q.includes('linear algebra')) {
      return `### 📐 Math Foundations: Essential vs. Optional for ${currentRole.title}

Many aspiring AI engineers get stuck in "math tutorial paralysis". Here is the pragmatic breakdown:

**Strictly Essential:**
- **Linear Algebra**: Matrix multiplications, vector dot products, embeddings, cosine similarity, eigenvalues, and rank reduction.
- **Multivariate Calculus**: Gradients, partial derivatives, chain rule (how backpropagation actually propagates error through computational graphs).
- **Probability & Statistics**: Distributions, Bayes Theorem, expected value, precision/recall, ROC-AUC, confidence intervals.

**Can Be Learned Just-in-Time:**
- Real analysis and formal delta-epsilon proofs (only required if doing PhD-level AI research).
- Manual stochastic calculus derivation.

*Rule of thumb:* Understand the geometric intuition of tensors and gradients, then use PyTorch's \`loss.backward()\` to handle the heavy lifting!`;
    }

    if (q.includes('transition') || q.includes('break into') || q.includes('no prior')) {
      return `### 🚀 Transitioning to ${currentRole.title}

If your current title is Software Engineer, Data Analyst, or Student, here is how to bridge the gap:

1. **Leverage Your Asymmetric Advantage**:
   - If you're a Software Engineer: Highlight your GitOps, API design, Docker, and distributed systems experience. MLOps and LLM engineering desperately need clean software architecture!
   - If you're an Analyst: Emphasize SQL, statistical rigor, and business translation.

2. **Anchor to 1 Open-Source Contribution**:
   - Submit documentation fixes, benchmarks, or small bug fixes to active libraries (\`vllm\`, \`transformers\`, \`langchain\`, or \`scikit-learn\`). A merged PR into a known AI repo is stronger than 5 generic certificates.

3. **Target Immediate Step-stone Roles**:
   - Transitioning internally within your current company (applying AI to existing product data) is 5x easier than an external cold job switch.`;
    }

    if (q.includes('resume') || q.includes('github') || q.includes('interview')) {
      return `### 📄 Structuring Your AI Resume & Technical GitHub

Recruiters spend under 8 seconds reviewing technical profiles. Ensure you have:

- **Impact-First Bullet Points**:
  - ❌ *"Trained a language model with PyTorch."*
  - ✅ *"Engineered a hybrid RAG search pipeline using Qdrant and cross-encoder reranking, reducing hallucination rate by 34% and cutting inference latency to 180ms."*
- **Clean GitHub Repositories**:
  - Architecture diagram at the very top of your README.
  - Reproducible 1-command startup: \`docker compose up\`.
  - Continuous integration badge showing passing pytest tests.`;
    }

    // Default specialized advice based on role
    return `### 🎯 Targeted Advice for ${currentRole.title}

For the **${currentRole.title}** track (${currentRole.category}):
- **Next High-Priority Skill**: Deep dive into ${currentRole.coreTech.slice(0, 3).join(', ')}.
- **Market Reality**: Demand is currently rated as **${currentRole.marketDemand}**, with typical compensation ranging between **${currentRole.salaryRange}**.
- **Action Step**: Complete **"${currentRole.milestones[0]?.title}"** in your Learning Tracker.

Feel free to ask about specific frameworks, coding interview preparation, or system design!`;
  };

  const handleSendMessage = (textToSend?: string) => {
    const query = textToSend || inputText;
    if (!query.trim()) return;

    const userMsg: AdvisorMessage = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text: query,
      timestamp: 'Just now'
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputText('');
    setIsTyping(true);

    setTimeout(() => {
      const responseText = getKnowledgeResponse(query, activeRole);
      const assistantMsg: AdvisorMessage = {
        id: `assistant-${Date.now()}`,
        sender: 'assistant',
        text: responseText,
        timestamp: 'Just now',
        suggestions: [
          'What are the most common interview questions for this role?',
          'How do I build a production RAG system?',
          'What are the best free resources to master PyTorch?'
        ]
      };
      setMessages((prev) => [...prev, assistantMsg]);
      setIsTyping(false);
    }, 600);
  };

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
      <div className="rounded-2xl bg-slate-900 border border-slate-800 shadow-xl overflow-hidden flex flex-col h-[700px]">
        {/* Header */}
        <div className="p-5 border-b border-slate-800 bg-slate-950/80 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-600/20 border border-indigo-500/30 text-indigo-400">
              <Bot className="h-5 w-5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                AI Career Mentor & Advisor
                <span className="flex h-2 w-2 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>
              </h3>
              <p className="text-xs text-slate-400">
                Contextual guidance for <span className="text-indigo-400 font-semibold">{activeRole.title}</span>
              </p>
            </div>
          </div>

          <div className="hidden sm:block text-right">
            <span className="text-xs text-slate-400">Track:</span>
            <span className="block text-xs font-semibold text-slate-200">{activeRole.title}</span>
          </div>
        </div>

        {/* Chat History */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4">
          {messages.map((m) => {
            const isUser = m.sender === 'user';
            return (
              <div
                key={m.id}
                className={`flex gap-3 ${isUser ? 'justify-end' : 'justify-start'}`}
              >
                {!isUser && (
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-indigo-600/20 border border-indigo-500/30 text-indigo-400">
                    <Sparkles className="h-4 w-4" />
                  </div>
                )}

                <div
                  className={`max-w-[85%] rounded-2xl p-4 text-xs sm:text-sm leading-relaxed ${
                    isUser
                      ? 'bg-indigo-600 text-white rounded-tr-none'
                      : 'bg-slate-950/90 text-slate-200 border border-slate-800 rounded-tl-none'
                  }`}
                >
                  <div className="whitespace-pre-line space-y-2 prose prose-invert prose-sm max-w-none">
                    {m.text}
                  </div>

                  {/* Suggestion Chips */}
                  {m.suggestions && (
                    <div className="mt-4 pt-3 border-t border-slate-800/80 space-y-1.5">
                      <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block">
                        Suggested Inquiries:
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {m.suggestions.map((sug, sIdx) => (
                          <button
                            key={sIdx}
                            onClick={() => handleSendMessage(sug)}
                            className="text-left text-xs text-indigo-300 hover:text-white bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 px-2.5 py-1 rounded-md transition-colors"
                          >
                            {sug}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  <span className="block text-[10px] text-slate-400 mt-2 text-right">
                    {m.timestamp}
                  </span>
                </div>

                {isUser && (
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-slate-800 text-slate-300">
                    <User className="h-4 w-4" />
                  </div>
                )}
              </div>
            );
          })}

          {isTyping && (
            <div className="flex gap-3 justify-start items-center text-xs text-slate-400">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-600/20 border border-indigo-500/30 text-indigo-400">
                <Loader2 className="h-4 w-4 animate-spin" />
              </div>
              <span>Advisor is synthesizing technical recommendations...</span>
            </div>
          )}
        </div>

        {/* Input Bar */}
        <div className="p-4 border-t border-slate-800 bg-slate-950/90">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSendMessage();
            }}
            className="flex items-center gap-2"
          >
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder={`Ask anything about transitioning, projects, or interviews for ${activeRole.title}...`}
              className="flex-1 py-2.5 px-4 rounded-xl bg-slate-900 border border-slate-800 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition-colors"
            />
            <button
              type="submit"
              disabled={!inputText.trim()}
              className="p-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 disabled:bg-slate-800 disabled:text-slate-600 text-white font-medium transition-colors"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
