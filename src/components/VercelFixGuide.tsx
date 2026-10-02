import React, { useState } from 'react';
import { Check, Copy, AlertTriangle, ShieldCheck, Terminal, FileCode, CheckCircle2, ArrowRight } from 'lucide-react';

export const VercelFixGuide: React.FC = () => {
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const copyToClipboard = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2500);
  };

  const vercelJsonContent = `{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "framework": "vite",
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}`;

  const indexHtmlContent = `<!doctype html>
<html lang="en" class="dark">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>AI CareerPath - Interactive AI Career Roadmap & Advisor</title>
    <meta name="description" content="Navigate your career in artificial intelligence with interactive roadmaps, career fit quiz, skill tracker, and AI mentor guidance." />
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600&display=swap" rel="stylesheet">
  </head>
  <body class="bg-slate-950 text-slate-100 font-sans antialiased min-h-screen">
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>`;

  const indexCssContent = `@import "tailwindcss";

@layer base {
  :root {
    --font-sans: 'Plus Jakarta Sans', system-ui, -apple-system, sans-serif;
    --font-mono: 'JetBrains Mono', monospace;
  }

  body {
    font-family: var(--font-sans);
    background-color: #090d16;
    color: #f1f5f9;
  }
}`;

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto space-y-8">
      {/* Overview Banner */}
      <div className="rounded-2xl bg-gradient-to-r from-indigo-950/80 via-slate-900 to-slate-900 border border-indigo-500/40 p-6 sm:p-8 shadow-xl">
        <div className="flex items-start gap-4">
          <div className="p-3 rounded-xl bg-indigo-600/20 border border-indigo-500/30 text-indigo-400 shrink-0">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              Why Your Vercel App Rendered Without Styling (Root Cause Diagnostic)
            </h2>
            <p className="text-sm text-slate-300 mt-2 leading-relaxed">
              When inspecting your screenshot, the page was rendering standard HTML tags (Times New Roman font, unstyled gray form buttons, vertical stacked links) without any Tailwind CSS or React components mounted.
            </p>
          </div>
        </div>

        {/* 3 Root Causes List */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800">
            <span className="text-xs font-bold text-amber-400 uppercase tracking-wider block mb-1">
              Root Cause #1: Vercel Static Serving
            </span>
            <p className="text-xs text-slate-300 leading-relaxed">
              In your GitHub repo, Vercel was configured to serve the root folder directly instead of running the Vite build pipeline (<code className="text-indigo-300">npm run build</code>) and serving the generated <code className="text-indigo-300">dist/</code> directory.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800">
            <span className="text-xs font-bold text-amber-400 uppercase tracking-wider block mb-1">
              Root Cause #2: Raw HTML in index.html
            </span>
            <p className="text-xs text-slate-300 leading-relaxed">
              In Vite React apps, <code className="text-indigo-300">index.html</code> must strictly be a mount host with <code className="text-indigo-300">&lt;div id="root"&gt;&lt;/div&gt;</code> and <code className="text-indigo-300">&lt;script type="module" src="/src/main.tsx"&gt;</code>. Pasting raw HTML into index.html bypasses Tailwind compilation.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800">
            <span className="text-xs font-bold text-amber-400 uppercase tracking-wider block mb-1">
              Root Cause #3: Tailwind 4 Vite Plugin
            </span>
            <p className="text-xs text-slate-300 leading-relaxed">
              Tailwind CSS v4 uses <code className="text-indigo-300">@tailwindcss/vite</code> in <code className="text-indigo-300">vite.config.ts</code> and <code className="text-indigo-300">@import "tailwindcss";</code> in <code className="text-indigo-300">src/index.css</code>. Vite must bundle and link the compiled CSS hash in production.
            </p>
          </div>
        </div>
      </div>

      {/* 3 Step Fix Guide */}
      <div className="rounded-2xl bg-slate-900 border border-slate-800 p-6 sm:p-8 space-y-6">
        <h3 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2">
          <Terminal className="w-5 h-5 text-indigo-400" />
          How to Push These Fixes to Your GitHub Repo (<code className="text-indigo-300">aasthat803/AI-Career-Path</code>)
        </h3>

        <div className="space-y-4">
          <div className="flex items-start gap-3 p-4 rounded-xl bg-slate-950 border border-slate-800">
            <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-indigo-600 text-xs font-bold text-white">
              1
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">Ensure <code className="text-indigo-400">vercel.json</code> exists in the root</h4>
              <p className="text-xs text-slate-400 mt-1">
                This tells Vercel to run <code className="text-slate-200">npm run build</code> and serve files out of the <code className="text-slate-200">dist/</code> directory.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3 p-4 rounded-xl bg-slate-950 border border-slate-800">
            <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-indigo-600 text-xs font-bold text-white">
              2
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">Check Vercel Dashboard Build & Output Settings</h4>
              <p className="text-xs text-slate-400 mt-1">
                In Vercel: Project Settings → Build & Development Settings:
                <br />
                • <strong>Framework Preset:</strong> Vite
                <br />
                • <strong>Build Command:</strong> <code className="text-slate-200">npm run build</code>
                <br />
                • <strong>Output Directory:</strong> <code className="text-slate-200">dist</code>
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3 p-4 rounded-xl bg-slate-950 border border-slate-800">
            <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-indigo-600 text-xs font-bold text-white">
              3
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">Git Commit & Push</h4>
              <p className="text-xs text-slate-400 mt-1">
                Push your updated <code className="text-slate-200">vercel.json</code>, <code className="text-slate-200">src/App.tsx</code>, and <code className="text-slate-200">index.html</code>. Vercel will trigger a new build and deploy with full Tailwind styling and high-fidelity interactivity!
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Copyable File 1: vercel.json */}
      <div className="rounded-2xl bg-slate-900 border border-slate-800 overflow-hidden">
        <div className="flex items-center justify-between p-4 bg-slate-950 border-b border-slate-800">
          <div className="flex items-center gap-2">
            <FileCode className="w-4 h-4 text-indigo-400" />
            <span className="text-xs font-mono font-bold text-white">vercel.json</span>
            <span className="text-[11px] text-slate-500">(Place in root directory of repository)</span>
          </div>
          <button
            onClick={() => copyToClipboard(vercelJsonContent, 'vercelJson')}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs font-medium text-slate-200 transition-colors"
          >
            {copiedKey === 'vercelJson' ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                <span className="text-emerald-400">Copied!</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5" />
                <span>Copy File</span>
              </>
            )}
          </button>
        </div>
        <pre className="p-4 text-xs font-mono text-indigo-200 bg-slate-950/80 overflow-x-auto">
          <code>{vercelJsonContent}</code>
        </pre>
      </div>

      {/* Copyable File 2: index.html */}
      <div className="rounded-2xl bg-slate-900 border border-slate-800 overflow-hidden">
        <div className="flex items-center justify-between p-4 bg-slate-950 border-b border-slate-800">
          <div className="flex items-center gap-2">
            <FileCode className="w-4 h-4 text-indigo-400" />
            <span className="text-xs font-mono font-bold text-white">index.html</span>
            <span className="text-[11px] text-slate-500">(Clean shell for Vite React mount)</span>
          </div>
          <button
            onClick={() => copyToClipboard(indexHtmlContent, 'indexHtml')}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs font-medium text-slate-200 transition-colors"
          >
            {copiedKey === 'indexHtml' ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                <span className="text-emerald-400">Copied!</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5" />
                <span>Copy File</span>
              </>
            )}
          </button>
        </div>
        <pre className="p-4 text-xs font-mono text-indigo-200 bg-slate-950/80 overflow-x-auto">
          <code>{indexHtmlContent}</code>
        </pre>
      </div>

      {/* Copyable File 3: src/index.css */}
      <div className="rounded-2xl bg-slate-900 border border-slate-800 overflow-hidden">
        <div className="flex items-center justify-between p-4 bg-slate-950 border-b border-slate-800">
          <div className="flex items-center gap-2">
            <FileCode className="w-4 h-4 text-indigo-400" />
            <span className="text-xs font-mono font-bold text-white">src/index.css</span>
            <span className="text-[11px] text-slate-500">(Tailwind v4 base imports)</span>
          </div>
          <button
            onClick={() => copyToClipboard(indexCssContent, 'indexCss')}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs font-medium text-slate-200 transition-colors"
          >
            {copiedKey === 'indexCss' ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                <span className="text-emerald-400">Copied!</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5" />
                <span>Copy File</span>
              </>
            )}
          </button>
        </div>
        <pre className="p-4 text-xs font-mono text-indigo-200 bg-slate-950/80 overflow-x-auto">
          <code>{indexCssContent}</code>
        </pre>
      </div>
    </section>
  );
};
