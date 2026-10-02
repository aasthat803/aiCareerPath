export type RoleCategory = 
  | 'All Roles'
  | 'Engineering'
  | 'Data & Analytics'
  | 'GenAI & LLMs'
  | 'MLOps & Cloud'
  | 'Beginner Friendly';

export interface RoadmapResource {
  name: string;
  type: 'Course' | 'Docs' | 'Book' | 'Repo' | 'Tool';
  url: string;
  cost?: '100% Free' | 'Open Source';
  platform?: string;
}

export interface RoadmapMilestone {
  id: string;
  phase: number;
  phaseTitle: string;
  title: string;
  description: string;
  duration: string;
  skills: string[];
  resources: RoadmapResource[];
  projectIdea?: string;
}

export interface PortfolioProject {
  title: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  description: string;
  techStack: string[];
  deliverable: string;
}

export interface CareerRole {
  id: string;
  title: string;
  category: RoleCategory;
  tagline: string;
  description: string;
  salaryRange: string;
  difficulty: 'Beginner Friendly' | 'Intermediate' | 'Advanced';
  marketDemand: 'High' | 'Very High' | 'Critical';
  prerequisites: string[];
  coreTech: string[];
  dailyTasks: string[];
  milestones: RoadmapMilestone[];
  portfolioProjects: PortfolioProject[];
}

export interface QuizQuestion {
  id: number;
  question: string;
  subtext: string;
  options: {
    label: string;
    description: string;
    roleWeights: Record<string, number>;
  }[];
}

export interface QuizResult {
  roleId: string;
  roleTitle: string;
  score: number;
  percentage: number;
  matchReasons: string[];
}

export interface AdvisorMessage {
  id: string;
  sender: 'user' | 'assistant';
  text: string;
  timestamp: string;
  suggestions?: string[];
}
