import { QuizQuestion, QuizResult } from '../types';
import { AI_ROLES } from './rolesData';

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 1,
    question: 'What is your current background and technical foundation?',
    subtext: 'Select the option closest to your current experience level.',
    options: [
      {
        label: 'Software Engineering / Web / Backend',
        description: 'Comfortable with programming, APIs, Git, databases, and system design.',
        roleWeights: {
          'ml-engineer': 3,
          'genai-engineer': 4,
          'mlops-engineer': 5,
          'cv-engineer': 2
        }
      },
      {
        label: 'Data Analysis / Statistics / Mathematics',
        description: 'Strong with quantitative thinking, SQL, Excel, probability, or basic Python.',
        roleWeights: {
          'data-scientist': 5,
          'ml-engineer': 3,
          'ai-researcher': 4,
          'nlp-specialist': 2
        }
      },
      {
        label: 'Product, Business, Design, or Domain Specialist',
        description: 'Experienced in scoping features, user needs, business strategy, or operations.',
        roleWeights: {
          'ai-pm': 5,
          'prompt-engineer': 4,
          'data-scientist': 2
        }
      },
      {
        label: 'Academic, Research, or Physics / Pure Math',
        description: 'Passionate about theoretical proofs, experimental rigor, and reading arXiv preprints.',
        roleWeights: {
          'ai-researcher': 5,
          'ai-safety': 4,
          'ml-engineer': 2
        }
      }
    ]
  },
  {
    id: 2,
    question: 'What type of AI work excites you the most day-to-day?',
    subtext: 'What would make you look forward to opening your laptop every morning?',
    options: [
      {
        label: 'Building LLM Apps, Autonomous Agents & RAG',
        description: 'Orchestrating agents, connecting vector databases, prompt systems, and generative tools.',
        roleWeights: {
          'genai-engineer': 5,
          'prompt-engineer': 4,
          'ai-pm': 2
        }
      },
      {
        label: 'Training Neural Networks & Computer Perception',
        description: 'Training deep neural networks on images, video, speech, and complex multi-modal data.',
        roleWeights: {
          'cv-engineer': 5,
          'nlp-specialist': 4,
          'ml-engineer': 3
        }
      },
      {
        label: 'Infrastructure, Scalable Systems & GPU Clusters',
        description: 'Kubernetes, Docker, CI/CD pipelines, low latency inference, and monitoring models in production.',
        roleWeights: {
          'mlops-engineer': 5,
          'ml-engineer': 3
        }
      },
      {
        label: 'Statistical Modeling & Finding Hidden Business Truths',
        description: 'A/B testing, exploratory data analysis, predictive customer behavior, and stakeholder impact.',
        roleWeights: {
          'data-scientist': 5,
          'ai-pm': 3
        }
      },
      {
        label: 'Model Safety, Alignment & Mechanistic Probing',
        description: 'Red-teaming, preventing toxic or deceptive outputs, alignment algorithms (RLHF/DPO), and ethics.',
        roleWeights: {
          'ai-safety': 5,
          'ai-researcher': 3
        }
      }
    ]
  },
  {
    id: 3,
    question: 'How do you feel about mathematics versus systems coding?',
    subtext: 'Be honest about your appetite for abstract math versus practical engineering.',
    options: [
      {
        label: 'Love Deep Math & Theoretical Proofs',
        description: 'Excited by calculus gradients, linear algebra transformations, and probability bounds.',
        roleWeights: {
          'ai-researcher': 5,
          'ml-engineer': 4,
          'data-scientist': 3,
          'ai-safety': 3
        }
      },
      {
        label: 'Prefer Practical Coding, APIs & System Architecture',
        description: 'Prefer building fast software, microservices, databases, and connecting components together.',
        roleWeights: {
          'mlops-engineer': 5,
          'genai-engineer': 4,
          'prompt-engineer': 3
        }
      },
      {
        label: 'Balanced: Pragmatic Math Applied to Code',
        description: 'Happy using libraries like PyTorch or Scikit-Learn without deriving proofs by hand.',
        roleWeights: {
          'ml-engineer': 4,
          'cv-engineer': 4,
          'nlp-specialist': 4,
          'data-scientist': 3
        }
      },
      {
        label: 'Prefer High-Level Logic, Communication & Strategy',
        description: 'Prefer natural language, workflow design, and problem framing over raw math or low-level C++.',
        roleWeights: {
          'ai-pm': 5,
          'prompt-engineer': 4
        }
      }
    ]
  },
  {
    id: 4,
    question: 'What is your target work environment and team culture?',
    subtext: 'Different AI specializations thrive in different team dynamics.',
    options: [
      {
        label: 'Fast-Paced Startup or Product Innovation Lab',
        description: 'Shipping customer-facing generative features quickly, pivoting fast, high autonomy.',
        roleWeights: {
          'genai-engineer': 4,
          'prompt-engineer': 4,
          'ai-pm': 3
        }
      },
      {
        label: 'Enterprise Cloud, FinTech, or Big Tech Infrastructure',
        description: 'Robust reliability, massive scale, high throughput, Kubernetes clusters, and security.',
        roleWeights: {
          'mlops-engineer': 5,
          'ml-engineer': 4,
          'data-scientist': 3
        }
      },
      {
        label: 'Frontier AI Research Lab or Academic Institute',
        description: 'Publishing preprints, testing novel architectures, pushing theoretical boundaries.',
        roleWeights: {
          'ai-researcher': 5,
          'ai-safety': 4
        }
      },
      {
        label: 'Specialized Hardware, Robotics, or Autonomous Tech',
        description: 'Real-time perception, edge deployment on robots, drones, vehicles, or medical devices.',
        roleWeights: {
          'cv-engineer': 5,
          'ml-engineer': 3
        }
      }
    ]
  },
  {
    id: 5,
    question: 'How much time can you commit to mastering your chosen track?',
    subtext: 'Helps balance between high-prerequisite research roles and fast-start industry tracks.',
    options: [
      {
        label: 'Intensive Full-Time (30+ hours/week)',
        description: 'Ready to dive deep into multi-month rigorous study and build production capstone systems.',
        roleWeights: {
          'ml-engineer': 4,
          'ai-researcher': 4,
          'mlops-engineer': 4,
          'cv-engineer': 3
        }
      },
      {
        label: 'Focused Transition (10-15 hours/week alongside job)',
        description: 'Targeted high-leverage roadmaps with immediate career pivot potential.',
        roleWeights: {
          'genai-engineer': 5,
          'data-scientist': 4,
          'prompt-engineer': 4,
          'ai-pm': 4
        }
      },
      {
        label: 'Fast-Track Explorer (5-10 hours/week)',
        description: 'Want immediate hands-on wins, practical tools, and swift portfolio proof.',
        roleWeights: {
          'prompt-engineer': 5,
          'ai-pm': 4,
          'genai-engineer': 3
        }
      }
    ]
  }
];

export function calculateQuizResults(answers: Record<number, number>): QuizResult[] {
  const scores: Record<string, number> = {};

  // Initialize scores
  AI_ROLES.forEach(r => {
    scores[r.id] = 0;
  });

  // Accumulate weights
  QUIZ_QUESTIONS.forEach(q => {
    const selectedOptionIndex = answers[q.id];
    if (selectedOptionIndex !== undefined) {
      const option = q.options[selectedOptionIndex];
      if (option && option.roleWeights) {
        Object.entries(option.roleWeights).forEach(([roleId, weight]) => {
          if (scores[roleId] !== undefined) {
            scores[roleId] += weight;
          }
        });
      }
    }
  });

  // Calculate highest score for percentage scaling
  const maxPossibleScore = 24; // theoretical maximum achievable score

  const sortedRoles = Object.entries(scores)
    .sort((a, b) => b[1] - a[1])
    .map(([roleId, score]) => {
      const role = AI_ROLES.find(r => r.id === roleId)!;
      const percentage = Math.min(98, Math.max(45, Math.round((score / maxPossibleScore) * 100)));
      
      const matchReasons: string[] = [];
      if (role.category === 'GenAI & LLMs') {
        matchReasons.push('Aligns with your interest in autonomous agents, RAG, and fast-paced application building.');
      } else if (role.category === 'MLOps & Cloud') {
        matchReasons.push('Strongly matches your aptitude for software engineering, system architecture, and production pipelines.');
      } else if (role.category === 'Data & Analytics') {
        matchReasons.push('Fits your quantitative analytical mindset, business problem solving, and hypothesis testing.');
      } else if (role.id === 'ai-researcher') {
        matchReasons.push('Reflects your passion for advanced mathematics, theoretical algorithms, and breakthrough preprints.');
      } else if (role.id === 'ai-pm') {
        matchReasons.push('Leverages your strategic communication, product intuition, and business-value focus.');
      } else {
        matchReasons.push('Balanced match for practical coding, machine learning frameworks, and production deployment.');
      }

      return {
        roleId,
        roleTitle: role.title,
        score,
        percentage,
        matchReasons
      };
    });

  return sortedRoles;
}
