import React, { useState } from 'react';
import { BrainCircuit, Check, ArrowRight, ArrowLeft, RotateCcw, Sparkles, CheckCircle2, ChevronRight } from 'lucide-react';
import { QUIZ_QUESTIONS, calculateQuizResults } from '../data/quizData';
import { AI_ROLES } from '../data/rolesData';
import { CareerRole, QuizResult } from '../types';

interface CareerQuizProps {
  onSelectRoleAndTrack: (role: CareerRole) => void;
}

export const CareerQuiz: React.FC<CareerQuizProps> = ({ onSelectRoleAndTrack }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, number>>({});
  const [quizResults, setQuizResults] = useState<QuizResult[] | null>(null);

  const currentQ = QUIZ_QUESTIONS[currentQuestionIndex];
  const hasSelectedCurrent = selectedAnswers[currentQ.id] !== undefined;
  const isLastQuestion = currentQuestionIndex === QUIZ_QUESTIONS.length - 1;

  const handleSelectOption = (optionIndex: number) => {
    setSelectedAnswers((prev) => ({
      ...prev,
      [currentQ.id]: optionIndex
    }));
  };

  const handleNext = () => {
    if (isLastQuestion) {
      // Calculate results
      const results = calculateQuizResults(selectedAnswers);
      setQuizResults(results);
    } else {
      setCurrentQuestionIndex((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex((prev) => prev - 1);
    }
  };

  const handleRestart = () => {
    setSelectedAnswers({});
    setCurrentQuestionIndex(0);
    setQuizResults(null);
  };

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
      {/* Assessment Container */}
      <div className="rounded-2xl bg-slate-900 border border-slate-800 shadow-xl overflow-hidden">
        {/* Top Header */}
        <div className="p-6 border-b border-slate-800 bg-slate-950/60">
          <div className="flex items-center justify-between mb-2">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-indigo-400 bg-indigo-950/80 border border-indigo-800/80 px-2.5 py-1 rounded">
              <BrainCircuit className="w-3.5 h-3.5" />
              <span>AI Diagnostic Assessment</span>
            </div>
            {!quizResults && (
              <span className="text-xs font-medium text-slate-400 tabular-nums">
                Question {currentQuestionIndex + 1} of {QUIZ_QUESTIONS.length}
              </span>
            )}
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            {quizResults ? 'Your Optimal AI Career Matches' : 'Find Your Best-Fit AI Career Track'}
          </h2>
          <p className="text-sm text-slate-300 mt-1 max-w-2xl leading-relaxed">
            {quizResults
              ? 'Based on your background, math preferences, and career goals, here are your top recommended AI specializations.'
              : 'Answer 5 quick questions about your background and interests. Our recommendation engine will compute your optimal path.'}
          </p>

          {/* Stepper Progress Bar (Only during quiz) */}
          {!quizResults && (
            <div className="mt-4 w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
              <div
                className="bg-indigo-500 h-full transition-all duration-300 rounded-full"
                style={{
                  width: `${((currentQuestionIndex + (hasSelectedCurrent ? 1 : 0.5)) / QUIZ_QUESTIONS.length) * 100}%`
                }}
              />
            </div>
          )}
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8">
          {!quizResults ? (
            /* Active Question State */
            <div className="space-y-6">
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-white">
                  {currentQ.question}
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 mt-1">
                  {currentQ.subtext}
                </p>
              </div>

              {/* Options List */}
              <div className="space-y-3">
                {currentQ.options.map((option, idx) => {
                  const isSelected = selectedAnswers[currentQ.id] === idx;
                  return (
                    <div
                      key={idx}
                      onClick={() => handleSelectOption(idx)}
                      className={`flex items-start gap-4 p-4 rounded-xl border cursor-pointer transition-all ${
                        isSelected
                          ? 'bg-indigo-950/40 border-indigo-500 shadow-md ring-1 ring-indigo-500/50'
                          : 'bg-slate-950/60 border-slate-800 hover:border-slate-700 hover:bg-slate-950'
                      }`}
                    >
                      <div
                        className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border text-xs transition-colors ${
                          isSelected
                            ? 'border-indigo-500 bg-indigo-600 text-white'
                            : 'border-slate-700 bg-slate-900 text-transparent'
                        }`}
                      >
                        <Check className="w-3 h-3 stroke-[3]" />
                      </div>

                      <div className="flex-1">
                        <p className="text-sm font-semibold text-white">
                          {option.label}
                        </p>
                        <p className="text-xs text-slate-400 mt-0.5 leading-relaxed">
                          {option.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Quiz Navigation Buttons */}
              <div className="pt-4 flex items-center justify-between border-t border-slate-800/80">
                <button
                  onClick={handlePrev}
                  disabled={currentQuestionIndex === 0}
                  className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-medium transition-colors ${
                    currentQuestionIndex === 0
                      ? 'text-slate-600 cursor-not-allowed'
                      : 'text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700'
                  }`}
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>Previous</span>
                </button>

                <button
                  onClick={handleNext}
                  disabled={!hasSelectedCurrent}
                  className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs font-semibold shadow-sm transition-all ${
                    hasSelectedCurrent
                      ? 'bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 text-white'
                      : 'bg-slate-800 text-slate-500 cursor-not-allowed'
                  }`}
                >
                  <span>{isLastQuestion ? 'Compute My Optimal Track' : 'Next Question'}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ) : (
            /* Results View State */
            <div className="space-y-6">
              <div className="grid grid-cols-1 gap-4">
                {quizResults.slice(0, 3).map((res, idx) => {
                  const roleObj = AI_ROLES.find((r) => r.id === res.roleId);
                  if (!roleObj) return null;

                  const isTopMatch = idx === 0;

                  return (
                    <div
                      key={res.roleId}
                      className={`relative p-5 sm:p-6 rounded-xl border transition-all ${
                        isTopMatch
                          ? 'bg-gradient-to-b from-indigo-950/40 via-slate-900 to-slate-900 border-indigo-500/80 shadow-lg ring-1 ring-indigo-500/30'
                          : 'bg-slate-950/70 border-slate-800'
                      }`}
                    >
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                        <div className="flex items-center gap-2">
                          <span
                            className={`text-xs font-bold px-2 py-0.5 rounded uppercase tracking-wider ${
                              isTopMatch
                                ? 'bg-indigo-600 text-white'
                                : 'bg-slate-800 text-slate-300'
                            }`}
                          >
                            #{idx + 1} Best Match
                          </span>
                          <span className="text-xs text-slate-400">·</span>
                          <span className="text-xs font-semibold text-emerald-400 tabular-nums">
                            {res.percentage}% Fit Score
                          </span>
                        </div>
                        <span className="text-xs text-slate-400 font-mono">
                          {roleObj.salaryRange}
                        </span>
                      </div>

                      <h4 className="text-xl font-bold text-white mb-1">
                        {roleObj.title}
                      </h4>
                      <p className="text-xs text-slate-300 leading-relaxed mb-3">
                        {roleObj.description}
                      </p>

                      <div className="p-3 rounded-lg bg-slate-900/90 border border-slate-800/80 text-xs text-indigo-200/90 mb-4">
                        <span className="font-semibold text-indigo-300">Why this fits you: </span>
                        {res.matchReasons.join(' ')}
                      </div>

                      {/* Tech preview */}
                      <div className="flex items-center justify-between flex-wrap gap-2 pt-2 border-t border-slate-800/80">
                        <div className="flex flex-wrap gap-1.5">
                          {roleObj.coreTech.slice(0, 4).map((tech, tIdx) => (
                            <span
                              key={tIdx}
                              className="text-[11px] font-mono text-slate-300 bg-slate-950 px-2 py-0.5 rounded border border-slate-800"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>

                        <button
                          onClick={() => onSelectRoleAndTrack(roleObj)}
                          className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-semibold transition-all ${
                            isTopMatch
                              ? 'bg-indigo-600 hover:bg-indigo-500 text-white shadow-sm'
                              : 'bg-slate-800 hover:bg-slate-700 text-slate-200'
                          }`}
                        >
                          <span>Start This Track Now</span>
                          <ChevronRight className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Restart Quiz Option */}
              <div className="pt-4 flex items-center justify-between border-t border-slate-800">
                <button
                  onClick={handleRestart}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs font-medium text-slate-300 transition-colors"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Retake Diagnostic Assessment</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
