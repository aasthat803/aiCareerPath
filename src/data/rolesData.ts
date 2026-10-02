import { CareerRole } from '../types';

export const AI_ROLES: CareerRole[] = [
  {
    id: 'ml-engineer',
    title: 'Machine Learning Engineer',
    category: 'Engineering',
    tagline: 'Design, train, and productionize predictive and statistical models at scale.',
    description: 'Master mathematical foundations, supervised and unsupervised algorithms, deep neural networks, and scalable deployment pipelines to transform raw data into intelligent software systems.',
    salaryRange: '$140,000 - $220,000 / yr',
    difficulty: 'Intermediate',
    marketDemand: 'Very High',
    prerequisites: ['Python proficiency', 'Linear Algebra & Calculus', 'Data Structures & Algorithms', 'Basic SQL'],
    coreTech: ['Python', 'PyTorch', 'TensorFlow', 'Scikit-Learn', 'NumPy & Pandas', 'Docker', 'FastAPI', 'MLflow'],
    dailyTasks: [
      'Architecting neural network topologies and baseline machine learning pipelines',
      'Engineering high-impact tabular, text, or multi-modal feature representations',
      'Optimizing hyperparameter tuning sweeps with Optuna or Ray Tune',
      'Benchmarking inference latency, memory footprints, and quantization tradeoffs',
      'Containerizing models into production microservices with automated rollback policies'
    ],
    milestones: [
      {
        id: 'ml-1',
        phase: 1,
        phaseTitle: 'Phase 1: Foundations & Scientific Computing',
        title: 'Python, NumPy & Scientific Computing Stack',
        description: 'Deepen Python idioms, vectorization with NumPy, and structured dataframe manipulation with Pandas.',
        duration: '3-4 Weeks',
        skills: ['Python 3.12+', 'NumPy Array Vectorization', 'Pandas Data Wrangling', 'Matplotlib / Seaborn'],
        resources: [
          { name: 'Python for Data Analysis (Wes McKinney)', type: 'Book', url: 'https://wesmckinney.com/book/' },
          { name: 'NumPy Official User Guide', type: 'Docs', url: 'https://numpy.org/doc/stable/user/' }
        ],
        projectIdea: 'Build an automated exploratory data analysis (EDA) pipeline for complex datasets.'
      },
      {
        id: 'ml-2',
        phase: 1,
        phaseTitle: 'Phase 1: Foundations & Scientific Computing',
        title: 'Applied Mathematics: Linear Algebra, Calculus & Stats',
        description: 'Understand eigenvalues, gradients, chain rule, Hessian approximations, and hypothesis testing.',
        duration: '4 Weeks',
        skills: ['Matrix Factorization (SVD, PCA)', 'Multivariate Calculus & Gradients', 'Bayesian Probability & Distributions'],
        resources: [
          { name: 'Mathematics for Machine Learning (Deisenroth)', type: 'Book', url: 'https://mml-book.github.io/' },
          { name: '3Blue1Brown Linear Algebra', type: 'Course', url: 'https://www.youtube.com/playlist?list=PLZHQObOWTQDPD3MizzM2xVFitgF8hE_ab' }
        ],
        projectIdea: 'Implement linear regression and logistic regression with batch gradient descent from scratch using only NumPy.'
      },
      {
        id: 'ml-3',
        phase: 2,
        phaseTitle: 'Phase 2: Core Machine Learning Algorithms',
        title: 'Classical Machine Learning with Scikit-Learn',
        description: 'Master supervised classification, regression, tree ensembles (XGBoost, LightGBM), and unsupervised clustering.',
        duration: '4-5 Weeks',
        skills: ['Random Forests & Gradient Boosting', 'Cross-Validation & Metric Selection (ROC-AUC, F1)', 'Feature Imputation & Encoding'],
        resources: [
          { name: 'Hands-On Machine Learning (Aurélien Géron)', type: 'Book', url: 'https://www.oreilly.com/library/view/hands-on-machine-learning/9781098125967/' },
          { name: 'Scikit-Learn Documentation', type: 'Docs', url: 'https://scikit-learn.org/stable/' }
        ],
        projectIdea: 'Build an end-to-end customer churn prediction pipeline with cross-validated ensemble models.'
      },
      {
        id: 'ml-4',
        phase: 3,
        phaseTitle: 'Phase 3: Deep Learning Architectures',
        title: 'Deep Learning with PyTorch',
        description: 'Learn autograd computational graphs, Multi-Layer Perceptrons, Convolutional Networks, and Transfer Learning.',
        duration: '5-6 Weeks',
        skills: ['PyTorch Tensors & nn.Module', 'Custom Dataset Loaders & Augmentation', 'Loss Functions & Optimizers (AdamW)', 'Model Checkpointing'],
        resources: [
          { name: 'PyTorch Official Tutorials', type: 'Docs', url: 'https://pytorch.org/tutorials/' },
          { name: 'Fast.ai Practical Deep Learning', type: 'Course', url: 'https://course.fast.ai/' }
        ],
        projectIdea: 'Train and fine-tune a multi-class image classifier with custom PyTorch data loaders and TensorBoard tracking.'
      },
      {
        id: 'ml-5',
        phase: 4,
        phaseTitle: 'Phase 4: Production Deployment & Systems',
        title: 'Model Serving, Containerization & CI/CD',
        description: 'Package models as microservices using FastAPI, Docker, and experiment tracking with MLflow.',
        duration: '4 Weeks',
        skills: ['FastAPI REST & Async endpoints', 'Docker Multi-Stage Builds', 'MLflow Experiment & Model Registry', 'Inference Latency Optimization'],
        resources: [
          { name: 'Full Stack Deep Learning', type: 'Course', url: 'https://fullstackdeeplearning.com/' },
          { name: 'FastAPI High Performance Documentation', type: 'Docs', url: 'https://fastapi.tiangolo.com/' }
        ],
        projectIdea: 'Deploy a containerized real-time inference microservice with Prometheus metrics and Docker Compose.'
      }
    ],
    portfolioProjects: [
      {
        title: 'High-Throughput Fraud Detection Engine',
        difficulty: 'Advanced',
        description: 'Real-time financial fraud classification pipeline handling unbalanced distributions with SMOTE, XGBoost, and sub-30ms REST inference.',
        techStack: ['Python', 'XGBoost', 'FastAPI', 'Docker', 'Redis'],
        deliverable: 'Tested microservice repository with benchmark scripts, stress tests, and automated Docker container.'
      },
      {
        title: 'Multimodal Product Categorizer',
        difficulty: 'Intermediate',
        description: 'Combines product title embeddings with product image features using PyTorch to classify e-commerce catalog items into 100+ categories.',
        techStack: ['PyTorch', 'Hugging Face Transformers', 'ResNet', 'Scikit-Learn'],
        deliverable: 'Jupyter notebook with ablation studies and a Streamlit demo for live image + text inference.'
      }
    ]
  },
  {
    id: 'genai-engineer',
    title: 'Generative AI & LLM Engineer',
    category: 'GenAI & LLMs',
    tagline: 'Build production agentic systems, RAG architectures, and fine-tuned LLM workflows.',
    description: 'Specialize in Transformer architectures, retrieval-augmented generation (RAG), vector embeddings, agentic function calling, prompt engineering frameworks, and parameter-efficient fine-tuning (LoRA/QLoRA).',
    salaryRange: '$160,000 - $250,000 / yr',
    difficulty: 'Intermediate',
    marketDemand: 'Critical',
    prerequisites: ['Python proficiency', 'Basic NLP concepts', 'API integration experience', 'Vector math'],
    coreTech: ['Python', 'LangChain', 'LlamaIndex', 'Hugging Face', 'vLLM', 'Chroma/Pinecone/pgvector', 'Ollama', 'FastAPI'],
    dailyTasks: [
      'Engineering enterprise hybrid RAG search with rerankers and contextual compression',
      'Implementing multi-agent workflows with tool use, structured outputs, and human-in-the-loop controls',
      'Fine-tuning open weights models using QLoRA and Unsloth for domain-specific tasks',
      'Establishing automated evaluation benchmarks with RAGAS, DeepEval, or G-Eval',
      'Optimizing inference throughput and GPU memory with vLLM, TensorRT-LLM, and speculative decoding'
    ],
    milestones: [
      {
        id: 'genai-1',
        phase: 1,
        phaseTitle: 'Phase 1: Foundations of LLMs & Attention',
        title: 'Transformer Architecture & Tokenization',
        description: 'Understand self-attention, multi-head attention, rotary positional embeddings (RoPE), and byte-pair encoding.',
        duration: '3 Weeks',
        skills: ['Self-Attention Mechanism', 'Tokenizer Algorithms (BPE, WordPiece)', 'KV-Cache Dynamics', 'Context Windows'],
        resources: [
          { name: 'The Illustrated Transformer (Jay Alammar)', type: 'Docs', url: 'https://jalammar.github.io/illustrated-transformer/' },
          { name: 'Let\'s build GPT from scratch (Andrej Karpathy)', type: 'Course', url: 'https://www.youtube.com/watch?v=kCc8FmEb1nY' }
        ],
        projectIdea: 'Code a miniature decoder-only GPT from scratch in PyTorch generating Shakespeare text.'
      },
      {
        id: 'genai-2',
        phase: 2,
        phaseTitle: 'Phase 2: RAG & Vector Search',
        title: 'Production Retrieval Augmented Generation (RAG)',
        description: 'Build robust retrieval systems using chunking strategies, dense/sparse embeddings, hybrid search, and cross-encoder reranking.',
        duration: '4 Weeks',
        skills: ['Hierarchical & Semantic Chunking', 'Vector Databases (pgvector, Qdrant)', 'Hybrid BM25 + Vector Search', 'Cohere/BGE Reranking'],
        resources: [
          { name: 'LlamaIndex Production RAG Guide', type: 'Docs', url: 'https://docs.llamaindex.ai/' },
          { name: 'LangChain Retrieval Concepts', type: 'Docs', url: 'https://python.langchain.com/' }
        ],
        projectIdea: 'Build an internal knowledge retrieval engine with cited PDF sources and hallucination detection.'
      },
      {
        id: 'genai-3',
        phase: 3,
        phaseTitle: 'Phase 3: Agentic Systems & Function Calling',
        title: 'Autonomous Agents & Tool Execution',
        description: 'Architect agents that reason, plan, execute multi-step tool calls, and manage structured memory.',
        duration: '4-5 Weeks',
        skills: ['ReAct Pattern & Planning', 'Structured JSON Schema Output', 'LangGraph / Agent Orchestration', 'Session & Working Memory'],
        resources: [
          { name: 'LangGraph Multi-Agent Workflows', type: 'Docs', url: 'https://langchain-ai.github.io/langgraph/' },
          { name: 'Building Effective Agents (Anthropic)', type: 'Docs', url: 'https://www.anthropic.com/research/building-effective-agents' }
        ],
        projectIdea: 'Create an autonomous research agent that crawls live web APIs, summarizes findings, and generates verified markdown reports.'
      },
      {
        id: 'genai-4',
        phase: 4,
        phaseTitle: 'Phase 4: Fine-Tuning & Production Serving',
        title: 'LoRA Fine-Tuning & vLLM Serving',
        description: 'Train models with supervised instruction tuning (SFT) and Direct Preference Optimization (DPO), and serve with vLLM.',
        duration: '5 Weeks',
        skills: ['PEFT & QLoRA with Unsloth', 'Dataset Formatting (ChatML, Alpaca)', 'vLLM PagedAttention Serving', 'RAGAS Metric Evaluation'],
        resources: [
          { name: 'Hugging Face Alignment Handbook', type: 'Repo', url: 'https://github.com/huggingface/alignment-handbook' },
          { name: 'vLLM Fast LLM Inference', type: 'Docs', url: 'https://docs.vllm.ai/' }
        ],
        projectIdea: 'Fine-tune an open-source 8B model on specialized customer support conversations and deploy it on a GPU cluster.'
      }
    ],
    portfolioProjects: [
      {
        title: 'Enterprise Technical Documentation RAG with Hybrid Reranking',
        difficulty: 'Advanced',
        description: 'End-to-end RAG system indexing 50,000+ technical API docs with Reciprocal Rank Fusion (RRF), cross-encoder rerankers, and sub-second cited answers.',
        techStack: ['Python', 'pgvector', 'FastAPI', 'LlamaIndex', 'Cohere Rerank', 'React'],
        deliverable: 'Full-stack application with interactive chat UI, source citations preview, and latency tracking dashboard.'
      },
      {
        title: 'Autonomous SQL Analytics Copilot',
        difficulty: 'Intermediate',
        description: 'An agentic natural language to SQL generator with schema validation, query execution sandbox, and automated chart rendering.',
        techStack: ['Python', 'LangGraph', 'DuckDB', 'FastAPI', 'TailwindCSS'],
        deliverable: 'GitHub repository with sample e-commerce database, automated test suite, and interactive dashboard.'
      }
    ]
  },
  {
    id: 'mlops-engineer',
    title: 'MLOps & AI Platform Engineer',
    category: 'MLOps & Cloud',
    tagline: 'Automate model training pipelines, CI/CD, cluster orchestration, and monitoring.',
    description: 'Bridge data science and DevOps by building continuous integration, automated retraining triggers, model registries, Kubernetes GPU clusters, and drift-detection observability stacks.',
    salaryRange: '$150,000 - $235,000 / yr',
    difficulty: 'Advanced',
    marketDemand: 'Critical',
    prerequisites: ['Linux & Bash scripting', 'Docker containerization', 'Cloud basics (AWS/GCP)', 'Python'],
    coreTech: ['Kubernetes', 'Docker', 'KServe', 'MLflow', 'Kubeflow / Airflow', 'Terraform', 'Prometheus & Grafana', 'DVC'],
    dailyTasks: [
      'Maintaining Kubernetes clusters with NVIDIA GPU operator plugins and auto-scaling rules',
      'Building GitOps continuous delivery pipelines for model deployment',
      'Configuring automated data and concept drift detection with Evidently AI or WhyLogs',
      'Managing feature stores (Feast) and artifact versioning with DVC and S3',
      'Designing blue-green and shadow canary deployment architectures for zero-downtime rollouts'
    ],
    milestones: [
      {
        id: 'ops-1',
        phase: 1,
        phaseTitle: 'Phase 1: DevOps & Infrastructure Foundations',
        title: 'Linux Systems, Docker & Cloud Infrastructure',
        description: 'Master containerization, multi-stage image optimization, Linux networking, and Infrastructure as Code with Terraform.',
        duration: '4 Weeks',
        skills: ['Linux Kernel & Performance Tools', 'Docker Image Optimization', 'Terraform Provisioning (AWS/GCP)', 'Bash Automation'],
        resources: [
          { name: 'Docker Deep Dive (Nigel Poulton)', type: 'Book', url: 'https://nigelpoulton.com/' },
          { name: 'Terraform Up & Running', type: 'Book', url: 'https://www.terraformupandrunning.com/' }
        ],
        projectIdea: 'Provision a cloud VPC, GPU instance, and secure container registry using Terraform scripts.'
      },
      {
        id: 'ops-2',
        phase: 2,
        phaseTitle: 'Phase 2: Data & Experiment Lineage',
        title: 'Data Versioning (DVC) & Experiment Tracking (MLflow)',
        description: 'Implement immutable artifact versioning, dataset hashing, and centralized experiment metric tracking.',
        duration: '3-4 Weeks',
        skills: ['DVC Remote Storage & Pipelines', 'MLflow Model Registry', 'Experiment Hyperparameter Tracking', 'GitOps Integration'],
        resources: [
          { name: 'DVC Documentation & Tutorials', type: 'Docs', url: 'https://dvc.org/doc' },
          { name: 'MLflow Tracking Guide', type: 'Docs', url: 'https://mlflow.org/docs/latest/index.html' }
        ],
        projectIdea: 'Build a reproducible machine learning pipeline where code and large dataset versions are synchronized across Git and S3.'
      },
      {
        id: 'ops-3',
        phase: 3,
        phaseTitle: 'Phase 3: Pipeline Orchestration & Kubernetes',
        title: 'Kubernetes (K8s) & Workflow Orchestration (Airflow/Kubeflow)',
        description: 'Manage production container fleets, GPU scheduling, Helm charts, and directed acyclic graph (DAG) pipelines.',
        duration: '5 Weeks',
        skills: ['Kubernetes Deployments & Services', 'Helm Chart Packaging', 'Apache Airflow / Prefect DAGs', 'GPU Resource Allocations'],
        resources: [
          { name: 'Kubernetes Up & Running', type: 'Book', url: 'https://www.oreilly.com/library/view/kubernetes-up-and/9781098120320/' },
          { name: 'KServe Cloud-Native Serving', type: 'Docs', url: 'https://kserve.github.io/website/' }
        ],
        projectIdea: 'Orchestrate an automated weekly retraining DAG in Airflow that pushes versioned models to a Kubernetes inference cluster.'
      },
      {
        id: 'ops-4',
        phase: 4,
        phaseTitle: 'Phase 4: Monitoring, Observability & Canary Rollouts',
        title: 'Model Observability, Drift Detection & Canary Deployments',
        description: 'Set up real-time telemetry, Prometheus exporters, Grafana dashboards, and automated rollback upon feature drift.',
        duration: '4 Weeks',
        skills: ['Evidently AI Drift Metrics', 'Prometheus & Grafana Alerting', 'Canary & Shadow Deployments', 'Cost Optimization on Cloud GPUs'],
        resources: [
          { name: 'Designing Machine Learning Systems (Chip Huyen)', type: 'Book', url: 'https://www.oreilly.com/library/view/designing-machine-learning/9781098107956/' },
          { name: 'Evidently AI Documentation', type: 'Docs', url: 'https://docs.evidentlyai.com/' }
        ],
        projectIdea: 'Build an observability dashboard alerting on data distribution shifts with automated traffic re-routing to baseline models.'
      }
    ],
    portfolioProjects: [
      {
        title: 'Production ML GitOps CI/CD Platform',
        difficulty: 'Advanced',
        description: 'Complete GitHub Actions pipeline that triggers automated unit tests, model performance checks, Docker builds, and deployment to a local Minikube cluster.',
        techStack: ['Kubernetes', 'GitHub Actions', 'Docker', 'MLflow', 'FastAPI'],
        deliverable: 'Fully functional open-source GitHub repository with automated workflow files and architecture diagram.'
      },
      {
        title: 'Automated Drift Detector & Alerting Service',
        difficulty: 'Intermediate',
        description: 'Microservice monitoring streaming inference payloads against training baselines, computing Kolmogorov-Smirnov statistics and publishing Prometheus metrics.',
        techStack: ['Python', 'Evidently AI', 'Prometheus', 'Grafana', 'FastAPI'],
        deliverable: 'Docker Compose setup with mock data generator and preconfigured Grafana dashboards.'
      }
    ]
  },
  {
    id: 'data-scientist',
    title: 'Data Scientist (AI/ML Focus)',
    category: 'Data & Analytics',
    tagline: 'Extract causal insights, formulate business hypotheses, and construct predictive models.',
    description: 'Combine advanced statistical inference, experimental A/B testing design, exploratory data storytelling, and machine learning to drive high-impact strategic product and business decisions.',
    salaryRange: '$125,000 - $190,000 / yr',
    difficulty: 'Beginner Friendly',
    marketDemand: 'High',
    prerequisites: ['Analytical thinking', 'Curiosity for business metrics', 'Basic math/statistics', 'Basic coding'],
    coreTech: ['Python', 'SQL (PostgreSQL/BigQuery)', 'Pandas & NumPy', 'Scikit-Learn', 'Statsmodels', 'Tableau / Looker', 'Git'],
    dailyTasks: [
      'Querying large-scale multi-terabyte data warehouses using complex SQL joins and window functions',
      'Designing and analyzing randomized controlled trials (A/B testing) with statistical rigor',
      'Formulating hypothesis tests, power calculations, and causal regression models',
      'Synthesizing complex technical findings into scannable executive presentations',
      'Developing production propensity, retention, and lifetime value (LTV) models'
    ],
    milestones: [
      {
        id: 'ds-1',
        phase: 1,
        phaseTitle: 'Phase 1: Advanced SQL & Data Manipulation',
        title: 'Advanced SQL, Window Functions & CTEs',
        description: 'Master analytical SQL queries, cohort analyses, retention funnels, and data warehouse patterns.',
        duration: '3-4 Weeks',
        skills: ['Window Functions (LEAD, LAG, NTILE)', 'Common Table Expressions (CTEs)', 'Partitioning & Indexing', 'Database Schema Modeling'],
        resources: [
          { name: 'Mode Analytics SQL Tutorial', type: 'Docs', url: 'https://mode.com/sql-tutorial/' },
          { name: 'PostgreSQL Official Documentation', type: 'Docs', url: 'https://www.postgresql.org/docs/' }
        ],
        projectIdea: 'Analyze a 500,000+ row transactional database to compute monthly active cohorts and retention curves.'
      },
      {
        id: 'ds-2',
        phase: 2,
        phaseTitle: 'Phase 2: Statistics & Experimental Design',
        title: 'Applied Statistics, Hypothesis Testing & A/B Experiments',
        description: 'Understand p-values, Type I/II errors, sample size power calculations, and multi-armed bandit approaches.',
        duration: '4-5 Weeks',
        skills: ['Hypothesis Testing (t-tests, ANOVA, Chi-Square)', 'Statistical Power & Minimum Detectable Effect', 'Bootstrapping & Non-parametric Tests'],
        resources: [
          { name: 'Practical Statistics for Data Scientists', type: 'Book', url: 'https://www.oreilly.com/library/view/practical-statistics-for/9781492072935/' },
          { name: 'Trustworthy Online Controlled Experiments (Kohavi)', type: 'Book', url: 'https://experimentguide.com/' }
        ],
        projectIdea: 'Design, simulate, and statistically evaluate a synthetic e-commerce checkout A/B experiment.'
      },
      {
        id: 'ds-3',
        phase: 3,
        phaseTitle: 'Phase 3: Predictive Modeling & Causal Inference',
        title: 'Supervised Modeling & Causal Inference',
        description: 'Build predictive regression, classification, and propensity score matching systems.',
        duration: '4-5 Weeks',
        skills: ['Linear & Logistic Regression Diagnostics', 'Decision Trees & Ensembles', 'Propensity Score Matching & Causal Trees', 'SHAP & Feature Importance'],
        resources: [
          { name: 'Causal Inference: What If (Hernán & Robins)', type: 'Book', url: 'https://www.hsph.harvard.edu/miguel-hernan/causal-inference-book/' },
          { name: 'Scikit-Learn Guide', type: 'Docs', url: 'https://scikit-learn.org/' }
        ],
        projectIdea: 'Build an interpretable customer lifetime value prediction model using SHAP values for business drivers.'
      },
      {
        id: 'ds-4',
        phase: 4,
        phaseTitle: 'Phase 4: Executive Storytelling & Production Analytics',
        title: 'Interactive Dashboards, Storytelling & Presentation',
        description: 'Translate raw mathematical findings into executive visual artifacts and automated dashboard apps.',
        duration: '3 Weeks',
        skills: ['Streamlit & Plotly Interactive Viz', 'Executive Summary Framing', 'Automated Analytical Reports', 'Git Version Control for Analytics'],
        resources: [
          { name: 'Storytelling with Data (Cole Nussbaumer)', type: 'Book', url: 'https://www.storytellingwithdata.com/' },
          { name: 'Streamlit Documentation', type: 'Docs', url: 'https://docs.streamlit.io/' }
        ],
        projectIdea: 'Create an interactive executive dashboard web app allowing business stakeholders to simulate marketing campaign ROI.'
      }
    ],
    portfolioProjects: [
      {
        title: 'End-to-End Subscription Retention & Churn Analysis',
        difficulty: 'Intermediate',
        description: 'Comprehensive analysis of 100k subscriber lifecycle, identifying churn triggers via survival analysis and delivering actionable mitigation strategies.',
        techStack: ['Python', 'Lifelines', 'SQL', 'Seaborn', 'Streamlit'],
        deliverable: 'Interactive web dashboard with automated cohort survival curves and executive slide deck.'
      },
      {
        title: 'Causal Impact Study on Product Redesign',
        difficulty: 'Advanced',
        description: 'Using synthetic control methods and difference-in-differences to quantify true incremental revenue gains from a major product launch.',
        techStack: ['Python', 'Statsmodels', 'CausalImpact', 'Pandas'],
        deliverable: 'Reproducible Jupyter notebook and peer-reviewed style white paper summary.'
      }
    ]
  },
  {
    id: 'ai-researcher',
    title: 'AI Research Scientist',
    category: 'Engineering',
    tagline: 'Invent novel neural network architectures and publish breakthroughs.',
    description: 'Push the scientific frontier of artificial intelligence by studying theoretical loss landscapes, designing novel attention variants, self-supervised representation learning, and submitting papers to NeurIPS, ICML, and ICLR.',
    salaryRange: '$180,000 - $350,000 / yr',
    difficulty: 'Advanced',
    marketDemand: 'High',
    prerequisites: ['Rigorous Linear Algebra & Real Analysis', 'PyTorch internals', 'Scientific reading skills', 'Research methodology'],
    coreTech: ['PyTorch', 'JAX & Flax', 'CUDA C/C++', 'Weights & Biases', 'LaTeX', 'Triton (OpenAI)', 'Hugging Face'],
    dailyTasks: [
      'Reading and critiquing latest preprints on arXiv daily',
      'Implementing novel loss formulations and architectural layers in PyTorch or JAX',
      'Conducting large-scale compute sweeps across 64+ H100 GPUs',
      'Analyzing inductive biases, generalization bounds, and mechanistic interpretability',
      'Writing mathematical proofs and experimental sections for academic paper submissions'
    ],
    milestones: [
      {
        id: 'res-1',
        phase: 1,
        phaseTitle: 'Phase 1: Advanced Theoretical Mathematics',
        title: 'Information Theory, Optimization & Stochastic Processes',
        description: 'Study Kullback-Leibler divergence, convex optimization, stochastic gradient Langevin dynamics, and measure theory.',
        duration: '5 Weeks',
        skills: ['Convex & Non-Convex Optimization', 'Information Theory & Entropy', 'Stochastic Differential Equations (SDEs)'],
        resources: [
          { name: 'Convex Optimization (Boyd & Vandenberghe)', type: 'Book', url: 'https://web.stanford.edu/~boyd/cvxbook/' },
          { name: 'Deep Learning (Goodfellow, Bengio, Courville)', type: 'Book', url: 'https://www.deeplearningbook.org/' }
        ],
        projectIdea: 'Analyze convergence rates of AdamW versus novel optimization schemes across ill-conditioned loss surfaces.'
      },
      {
        id: 'res-2',
        phase: 2,
        phaseTitle: 'Phase 2: JAX, Flax & Custom Hardware Kernels',
        title: 'High-Performance Research in JAX & Triton',
        description: 'Leverage functional transformations (vmap, grad, pjit) in JAX and write custom GPU kernels using OpenAI Triton.',
        duration: '5 Weeks',
        skills: ['JAX XLA Functional Programming', 'Multi-GPU Parallelism (TP, PP, FSDP)', 'Custom Triton Kernel Writing'],
        resources: [
          { name: 'JAX 101 Documentation', type: 'Docs', url: 'https://jax.readthedocs.io/en/latest/jax-101/' },
          { name: 'Triton GPU Programming Tutorial', type: 'Docs', url: 'https://triton-lang.org/' }
        ],
        projectIdea: 'Implement a custom FlashAttention forward and backward pass kernel in Triton and benchmark against PyTorch native.'
      },
      {
        id: 'res-3',
        phase: 3,
        phaseTitle: 'Phase 3: Generative Modeling Foundations',
        title: 'Diffusion Models, Flow Matching & Self-Supervision',
        description: 'Understand continuous-time diffusion, score-based generative modeling, and contrastive representation learning.',
        duration: '6 Weeks',
        skills: ['Score-Based SDE Formulations', 'Flow Matching & Optimal Transport', 'Contrastive Representation Learning (SimCLR, DINO)'],
        resources: [
          { name: 'Understanding Diffusion Models: A Unified Perspective', type: 'Docs', url: 'https://arxiv.org/abs/2208.11970' },
          { name: 'Stanford CS236: Deep Generative Models', type: 'Course', url: 'https://deepgenerativemodels.github.io/' }
        ],
        projectIdea: 'Implement a minimal score-based continuous diffusion model in JAX on CIFAR-10 with DDIM sampling.'
      },
      {
        id: 'res-4',
        phase: 4,
        phaseTitle: 'Phase 4: Scientific Paper Writing & Publication',
        title: 'arXiv Paper Replication & Novel Contribution',
        description: 'Replicate a top-tier conference paper from scratch, identify an experimental weakness, and propose an improvement.',
        duration: '6 Weeks',
        skills: ['LaTeX Academic Formatting', 'Reproducible Experimentation Suite', 'Rigorous Ablation Studies', 'Weights & Biases Artifact Logging'],
        resources: [
          { name: 'Papers With Code', type: 'Repo', url: 'https://paperswithcode.com/' },
          { name: 'ArXiv Machine Learning (cs.LG)', type: 'Docs', url: 'https://arxiv.org/list/cs.LG/recent' }
        ],
        projectIdea: 'Replicate and improve an efficient attention variant paper with complete ablation tables and submitted LaTeX manuscript.'
      }
    ],
    portfolioProjects: [
      {
        title: 'Efficient State Space Model (Mamba) Implementation & Benchmark',
        difficulty: 'Advanced',
        description: 'From-scratch implementation of selective state space models (SSMs) in PyTorch with custom scan algorithms and linear time complexity verification.',
        techStack: ['PyTorch', 'CUDA', 'Triton', 'WandB'],
        deliverable: 'Clean academic GitHub repository with benchmark plots and reproducible training logs.'
      },
      {
        title: 'Mechanistic Interpretability of Induction Heads in Small Transformers',
        difficulty: 'Advanced',
        description: 'Probing 2-layer attention-only models to localize induction circuits, causal intervention on attention weights, and visualizing circuit graphs.',
        techStack: ['Python', 'TransformerLens', 'PyTorch', 'Plotly'],
        deliverable: 'Interactive research blog post with live circuit explorer and downloadable datasets.'
      }
    ]
  },
  {
    id: 'cv-engineer',
    title: 'Computer Vision Engineer',
    category: 'Engineering',
    tagline: 'Enable machines to perceive, segment, reconstruct, and interpret visual data.',
    description: 'Work with convolutional neural networks, vision transformers (ViT), real-time object detection (YOLO), semantic segmentation, 3D neural radiance fields (NeRFs), and edge hardware acceleration.',
    salaryRange: '$140,000 - $215,000 / yr',
    difficulty: 'Intermediate',
    marketDemand: 'Very High',
    prerequisites: ['Python / C++', 'Linear Algebra & 2D/3D Geometry', 'PyTorch basics', 'OpenCV'],
    coreTech: ['PyTorch', 'OpenCV', 'Ultralytics YOLO', 'ONNX Runtime', 'TensorRT', 'Albumentations', 'MediaPipe'],
    dailyTasks: [
      'Annotating, curating, and augmenting domain-specific image and video datasets',
      'Training and fine-tuning Vision Transformers (ViT) and CNN backbones',
      'Optimizing object detection models for 60+ FPS edge inference on Jetson / Mobile',
      'Implementing multi-camera geometric calibration and stereo vision depth estimation',
      'Exporting models to ONNX and compiling TensorRT engines for sub-10ms latency'
    ],
    milestones: [
      {
        id: 'cv-1',
        phase: 1,
        phaseTitle: 'Phase 1: Digital Image Processing & OpenCV',
        title: 'Pixel Manipulation, Filtering & Geometric Transforms',
        description: 'Master color spaces, spatial convolution filters, edge detection (Canny, Sobel), homography, and perspective transforms.',
        duration: '3-4 Weeks',
        skills: ['OpenCV Core Operations', 'Color Space Transformations', 'Fourier Transforms in Images', 'Affine & Homography Mapping'],
        resources: [
          { name: 'Learning OpenCV 4 (Bradski & Kaehler)', type: 'Book', url: 'https://www.oreilly.com/library/view/learning-opencv-4/9781491937983/' },
          { name: 'OpenCV Tutorials', type: 'Docs', url: 'https://docs.opencv.org/4.x/d9/df8/tutorial_root.html' }
        ],
        projectIdea: 'Build an automated document scanner and perspective straightener with adaptive thresholding.'
      },
      {
        id: 'cv-2',
        phase: 2,
        phaseTitle: 'Phase 2: Deep Learning for Vision',
        title: 'CNNs, Residual Networks & Vision Transformers',
        description: 'Master ResNet, EfficientNet, MobileNet, and Vision Transformers (ViT) with patch projection and attention maps.',
        duration: '5 Weeks',
        skills: ['Conv2d Mathematical Mechanics', 'Feature Pyramid Networks (FPN)', 'Vision Transformers (ViT)', 'CutMix / MixUp Augmentation'],
        resources: [
          { name: 'Stanford CS231n: Deep Learning for Computer Vision', type: 'Course', url: 'https://cs231n.stanford.edu/' },
          { name: 'Timm (PyTorch Image Models) Documentation', type: 'Docs', url: 'https://huggingface.co/docs/timm/index' }
        ],
        projectIdea: 'Fine-tune a Swin Transformer backbone on fine-grained visual classification with Albumentations.'
      },
      {
        id: 'cv-3',
        phase: 3,
        phaseTitle: 'Phase 3: Detection, Segmentation & Tracking',
        title: 'Real-Time Object Detection (YOLO) & Mask R-CNN',
        description: 'Understand anchor-free and anchor-based detectors, Intersection over Union (IoU), non-maximum suppression (NMS), and DeepSORT tracking.',
        duration: '4-5 Weeks',
        skills: ['YOLOv8/v11 Architectures', 'mAP Evaluation Metrics', 'Instance Segmentation Masks', 'Multi-Object Tracking (ByteTrack)'],
        resources: [
          { name: 'Ultralytics Documentation', type: 'Docs', url: 'https://docs.ultralytics.com/' },
          { name: 'Roboflow Computer Vision Guides', type: 'Docs', url: 'https://roboflow.com/learn' }
        ],
        projectIdea: 'Build a multi-camera traffic monitoring system counting vehicles and estimating pedestrian velocity in real time.'
      },
      {
        id: 'cv-4',
        phase: 4,
        phaseTitle: 'Phase 4: Edge Optimization & Embedded Vision',
        title: 'ONNX Export, TensorRT & Edge Acceleration',
        description: 'Quantize weights to FP16/INT8, fuse layers, and benchmark inference on NVIDIA TensorRT and edge hardware.',
        duration: '4 Weeks',
        skills: ['ONNX Model Graph Surgery', 'TensorRT INT8 Calibration', 'OpenVINO / CoreML Conversion', 'Low-Latency Camera Pipeline'],
        resources: [
          { name: 'NVIDIA TensorRT Developer Guide', type: 'Docs', url: 'https://developer.nvidia.com/tensorrt' },
          { name: 'ONNX Runtime Optimization Docs', type: 'Docs', url: 'https://onnxruntime.ai/' }
        ],
        projectIdea: 'Export a segmentation model to INT8 TensorRT and achieve 90+ FPS on an edge GPU device.'
      }
    ],
    portfolioProjects: [
      {
        title: 'Industrial Defect Inspection System',
        difficulty: 'Advanced',
        description: 'Real-time assembly line anomaly detection detecting surface scratches and assembly defects at 60 FPS using an optimized custom YOLO + UNet pipeline.',
        techStack: ['Python', 'OpenCV', 'PyTorch', 'TensorRT', 'FastAPI'],
        deliverable: 'Complete repo with industrial synthetic defect dataset, model weights, and benchmark latency logs.'
      },
      {
        title: 'Real-Time Pose & Ergonomics Tracker',
        difficulty: 'Intermediate',
        description: 'Browser and webcam pose estimation evaluating spine alignment and ergonomic posture with real-time feedback audio cues.',
        techStack: ['MediaPipe', 'OpenCV', 'WebSockets', 'React', 'Python'],
        deliverable: 'Interactive live web application demo with instant posture scoring.'
      }
    ]
  },
  {
    id: 'ai-pm',
    title: 'AI Product Manager',
    category: 'Beginner Friendly',
    tagline: 'Translate cutting-edge AI capabilities into viable, high-ROI user products.',
    description: 'Bridge engineering, design, and executive leadership by framing problem statements, defining model acceptance criteria, evaluating accuracy vs cost tradeoffs, and managing ethical and UX risks.',
    salaryRange: '$150,000 - $230,000 / yr',
    difficulty: 'Beginner Friendly',
    marketDemand: 'Very High',
    prerequisites: ['Product management basics', 'Strong communication', 'Data literacy', 'Curiosity for AI workflows'],
    coreTech: ['Product Requirement Docs (PRDs)', 'Figma', 'Amplitude / Mixpanel', 'SQL & Metabase', 'Evaluation Benchmarks', 'Jira'],
    dailyTasks: [
      'Scoping AI features and defining offline vs online evaluation metrics',
      'Calculating token cost economics and latency budgets per active user session',
      'Conducting user research on AI confidence, hallucination tolerance, and affordances',
      'Collaborating with engineering on guardrails, content moderation, and fallbacks',
      'Building roadmap trade-off frameworks (Fine-Tuning vs RAG vs Prompting)'
    ],
    milestones: [
      {
        id: 'pm-1',
        phase: 1,
        phaseTitle: 'Phase 1: AI Mechanics for Non-Engineers',
        title: 'Understanding Foundation Models, Latency & Economics',
        description: 'Learn how LLMs, embeddings, and vision models function conceptually, plus token pricing economics.',
        duration: '3 Weeks',
        skills: ['Foundation Model Capabilities & Limits', 'Token Economics & Unit Pricing', 'Latency vs Quality Trade-offs', 'Hallucination Dynamics'],
        resources: [
          { name: 'AI for Everyone (Andrew Ng)', type: 'Course', url: 'https://www.coursera.org/learn/ai-for-everyone' },
          { name: 'State of AI Report', type: 'Docs', url: 'https://www.stateof.ai/' }
        ],
        projectIdea: 'Write a comprehensive Unit Economics Tear-down of an enterprise AI assistant serving 100k daily queries.'
      },
      {
        id: 'pm-2',
        phase: 2,
        phaseTitle: 'Phase 2: AI UX & Human-AI Interaction',
        title: 'Designing Trust, Feedback Loops & Graceful Degradation',
        description: 'Master UX affordances for non-deterministic software: confidence meters, citation links, inline feedback, and fallback UI.',
        duration: '3 Weeks',
        skills: ['Human-AI Interaction Guidelines (PAIRS)', 'Explicit & Implicit Feedback Signals', 'Error Handling & Graceful Fallbacks', 'Figma Prototyping'],
        resources: [
          { name: 'People + AI Guidebook (Google PAIR)', type: 'Docs', url: 'https://pair.withgoogle.com/guidebook/' },
          { name: 'Design Guidelines for Generative AI (Microsoft)', type: 'Docs', url: 'https://www.microsoft.com/en-us/research/project/guidelines-for-human-ai-interaction/' }
        ],
        projectIdea: 'Create a high-fidelity Figma spec for an AI-powered legal document review tool with confidence thresholds.'
      },
      {
        id: 'pm-3',
        phase: 3,
        phaseTitle: 'Phase 3: Evaluation Metrics & PRD Crafting',
        title: 'Writing Technical PRDs & Establishing Golden Datasets',
        description: 'Define precision/recall requirements, create human-in-the-loop validation flows, and build golden test sets.',
        duration: '4 Weeks',
        skills: ['PRD Writing for Probabilistic Systems', 'Golden Test Set Curation', 'Human Evaluation Rubrics', 'A/B Testing AI Features'],
        resources: [
          { name: 'Product Management in the AI Era', type: 'Book', url: 'https://www.reforge.com/' },
          { name: 'How to Evaluate LLM Applications', type: 'Docs', url: 'https://hamel.dev/blog/posts/evals/' }
        ],
        projectIdea: 'Produce an end-to-end Product Requirement Document (PRD) for an enterprise AI ticket routing agent.'
      },
      {
        id: 'pm-4',
        phase: 4,
        phaseTitle: 'Phase 4: Regulatory, Safety & Ethics Governance',
        title: 'Compliance, Copyright & Safety Guardrails',
        description: 'Navigate the EU AI Act, risk tiers, data privacy (GDPR/HIPAA), red-teaming protocols, and corporate governance.',
        duration: '3 Weeks',
        skills: ['EU AI Act & Risk Categorization', 'Data Privacy & PII Scrubbing Policy', 'Safety Guardrail Integration', 'Stakeholder Alignment'],
        resources: [
          { name: 'NIST AI Risk Management Framework', type: 'Docs', url: 'https://www.nist.gov/itl/ai-risk-management-framework' },
          { name: 'EU AI Act Regulatory Summary', type: 'Docs', url: 'https://artificialintelligenceact.eu/' }
        ],
        projectIdea: 'Author an Enterprise AI Governance & Acceptable Use Policy framework for a regulated healthcare provider.'
      }
    ],
    portfolioProjects: [
      {
        title: 'Complete Product Requirement Document (PRD) for Clinical AI Assistant',
        difficulty: 'Intermediate',
        description: 'Comprehensive 15-page PRD defining problem statements, persona journeys, latency SLOs, fallback states, and human-in-the-loop review criteria.',
        techStack: ['PRD Framework', 'Figma', 'Mixpanel Spec', 'Risk Matrix'],
        deliverable: 'Polished PDF PRD document and accompanying Figma user journey map.'
      },
      {
        title: 'Enterprise GenAI ROI & Evaluation Framework',
        difficulty: 'Beginner',
        description: 'Financial business case model and qualitative evaluation matrix comparing build vs buy for customer support AI automation.',
        techStack: ['Google Sheets / Excel Financial Modeling', 'Benchmarking Matrix', 'Slide Deck'],
        deliverable: 'Downloadable dynamic financial model and 10-slide executive pitch deck.'
      }
    ]
  },
  {
    id: 'prompt-engineer',
    title: 'Prompt & Context Engineer',
    category: 'Beginner Friendly',
    tagline: 'Optimize LLM context windows, metaprompts, few-shot examples, and DSPy pipelines.',
    description: 'Transform ambiguous natural language instructions into reliable, deterministic software workflows through structured JSON schema enforcement, DSPy algorithmic optimization, chain-of-thought protocols, and automated evaluation suites.',
    salaryRange: '$110,000 - $175,000 / yr',
    difficulty: 'Beginner Friendly',
    marketDemand: 'High',
    prerequisites: ['Analytical writing', 'Basic Python/JSON knowledge', 'Logic puzzles', 'Attention to edge cases'],
    coreTech: ['Python', 'DSPy', 'Pydantic', 'OpenAI / Anthropic APIs', 'Promptfoo', 'JSON Schema', 'LangSmith'],
    dailyTasks: [
      'Designing robust metaprompts with comprehensive edge-case handling',
      'Enforcing strict JSON outputs using Pydantic models and instructor libraries',
      'Automating prompt optimization using DSPy compile steps and teleprompters',
      'Building regression test suites with Promptfoo across 100+ prompt variants',
      'Analyzing token usage patterns and optimizing context compression'
    ],
    milestones: [
      {
        id: 'pe-1',
        phase: 1,
        phaseTitle: 'Phase 1: Foundational Prompting Techniques',
        title: 'Zero-Shot, Few-Shot & Chain-of-Thought (CoT)',
        description: 'Master system vs user prompts, in-context exemplars, least-to-most prompting, and chain-of-thought reasoning.',
        duration: '2-3 Weeks',
        skills: ['Role-Prompting & Personas', 'Dynamic Exemplar Selection', 'Step-by-Step Chain-of-Thought', 'Negative Constraint Handling'],
        resources: [
          { name: 'Learn Prompting Official Course', type: 'Course', url: 'https://learnprompting.org/' },
          { name: 'Anthropic Prompt Engineering Interactive Tutorial', type: 'Docs', url: 'https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/overview' }
        ],
        projectIdea: 'Create a library of 20 verified zero-shot and few-shot templates for extracting unstructured legal contract clauses.'
      },
      {
        id: 'pe-2',
        phase: 2,
        phaseTitle: 'Phase 2: Structured Outputs & Function Calling',
        title: 'Pydantic, Instructor & Schema Enforcement',
        description: 'Guarantee 100% deterministic JSON outputs conforming to strict Pydantic data schemas.',
        duration: '3 Weeks',
        skills: ['Pydantic V2 Validators', 'Instructor Python Library', 'Function Calling & Tool Definitions', 'Retry Loops upon Parse Error'],
        resources: [
          { name: 'Instructor Python Docs', type: 'Docs', url: 'https://python.useinstructor.com/' },
          { name: 'OpenAI Structured Outputs Guide', type: 'Docs', url: 'https://platform.openai.com/docs/guides/structured-outputs' }
        ],
        projectIdea: 'Build an automated resume-to-database parser extracting skills, degrees, and work history with zero schema violations.'
      },
      {
        id: 'pe-3',
        phase: 3,
        phaseTitle: 'Phase 3: Programmatic Prompting with DSPy',
        title: 'DSPy: Programming LLMs Instead of Prompting',
        description: 'Replace brittle manual prompt tweaking with parameterized modules, teleprompters, and automatic metric compilation.',
        duration: '4 Weeks',
        skills: ['DSPy Signatures & Modules', 'BootstrapFewShot Teleprompter', 'MIPROv2 Optimizer', 'Custom Assertion Handlers'],
        resources: [
          { name: 'DSPy Documentation & Tutorials (Stanford NLP)', type: 'Docs', url: 'https://dspy-docs.vercel.app/' },
          { name: 'DSPy Explained by Omar Khattab', type: 'Course', url: 'https://www.youtube.com/watch?v=dtJ_gI2z3hM' }
        ],
        projectIdea: 'Compile a multi-hop question answering pipeline in DSPy that boosts accuracy by 25% over zero-shot baselines.'
      },
      {
        id: 'pe-4',
        phase: 4,
        phaseTitle: 'Phase 4: Automated CI/CD Benchmarking',
        title: 'Automated Evaluation with Promptfoo & CI/CD',
        description: 'Build CI/CD pipelines that test prompt changes across 200+ test cases before merging to production.',
        duration: '3 Weeks',
        skills: ['Promptfoo CLI & Configs', 'Semantic Similarity Metrics', 'Red-Teaming & Jailbreak Tests', 'GitHub Actions Prompt CI'],
        resources: [
          { name: 'Promptfoo Official Docs', type: 'Docs', url: 'https://www.promptfoo.dev/docs/getting-started/' },
          { name: 'DeepEval Unit Testing Framework', type: 'Docs', url: 'https://confident-ai.com/' }
        ],
        projectIdea: 'Set up an automated GitHub Action that evaluates customer email classification accuracy on every pull request.'
      }
    ],
    portfolioProjects: [
      {
        title: 'Automated Financial Document Extraction Suite with DSPy & Pydantic',
        difficulty: 'Intermediate',
        description: 'End-to-end extraction pipeline taking unstructured earnings call transcripts, verifying financial metrics against balance sheets, and outputting validated JSON.',
        techStack: ['Python', 'DSPy', 'Instructor', 'Pydantic', 'Promptfoo'],
        deliverable: 'Tested Python package with test suites, synthetic data generator, and Promptfoo benchmark reports.'
      },
      {
        title: 'Prompt Regression Testing Harness for Customer Service Bots',
        difficulty: 'Beginner',
        description: 'Comprehensive 150-test-case validation suite verifying tonal adherence, anti-jailbreak safety, and policy compliance.',
        techStack: ['Promptfoo', 'YAML', 'GitHub Actions', 'OpenAI API'],
        deliverable: 'Reproducible CI/CD repository with automated HTML test run visualizer.'
      }
    ]
  },
  {
    id: 'ai-safety',
    title: 'AI Safety & Alignment Specialist',
    category: 'Engineering',
    tagline: 'Ensure frontier models behave safely, truthfully, and align with human intentions.',
    description: 'Specialize in Reinforcement Learning from Human Feedback (RLHF), Direct Preference Optimization (DPO), red-teaming, mechanistic interpretability, jailbreak defense, and bias mitigation.',
    salaryRange: '$140,000 - $210,000 / yr',
    difficulty: 'Advanced',
    marketDemand: 'High',
    prerequisites: ['PyTorch proficiency', 'Probability & game theory', 'Ethics & policy interest', 'NLP basics'],
    coreTech: ['PyTorch', 'TRL (Transformer Reinforcement Learning)', 'TransformerLens', 'Garak / Promptfoo', 'Hugging Face', 'Python'],
    dailyTasks: [
      'Formulating reward modeling datasets and annotator agreement guidelines',
      'Training preference optimization pipelines using DPO and KTO algorithms',
      'Probing neural representations for deception and sycophancy using activation patching',
      'Red-teaming frontier models against sophisticated multi-turn jailbreaks',
      'Drafting technical safety cases and risk reports for external regulators'
    ],
    milestones: [
      {
        id: 'safe-1',
        phase: 1,
        phaseTitle: 'Phase 1: Alignment Foundations & Preference Modeling',
        title: 'RLHF, DPO & Reward Modeling',
        description: 'Understand the Bradley-Terry preference model, PPO in language models, and Direct Preference Optimization (DPO).',
        duration: '4 Weeks',
        skills: ['Bradley-Terry Preference Math', 'PPO Mechanics in Transformers', 'Direct Preference Optimization (DPO)', 'TRL Library'],
        resources: [
          { name: 'TRL (Transformer Reinforcement Learning)', type: 'Docs', url: 'https://huggingface.co/docs/trl/index' },
          { name: 'Direct Preference Optimization Paper (Rafailov et al.)', type: 'Docs', url: 'https://arxiv.org/abs/2305.18290' }
        ],
        projectIdea: 'Fine-tune a 1B language model using DPO on helpfulness vs harmlessness preference datasets.'
      },
      {
        id: 'safe-2',
        phase: 2,
        phaseTitle: 'Phase 2: Red-Teaming & Vulnerability Discovery',
        title: 'Jailbreak Attacks & Automated Red-Teaming',
        description: 'Study prefix injection, adversarial suffixes (GCG attacks), roleplay persuasion, and automated fuzzing with Garak.',
        duration: '4 Weeks',
        skills: ['Adversarial Suffix Optimization (GCG)', 'Garak LLM Vulnerability Scanner', 'Multi-Turn Persuasion Attacks', 'Jailbreak Defense Layers'],
        resources: [
          { name: 'Garak LLM Vulnerability Scanner', type: 'Repo', url: 'https://github.com/leondz/garak' },
          { name: 'Universal and Transferable Adversarial Attacks on Aligned Language Models', type: 'Docs', url: 'https://arxiv.org/abs/2307.15043' }
        ],
        projectIdea: 'Conduct a systematic red-teaming audit of open-source models using automated attack suites and document findings.'
      },
      {
        id: 'safe-3',
        phase: 3,
        phaseTitle: 'Phase 3: Mechanistic Interpretability',
        title: 'Probing Activations & Circuit Discovery',
        description: 'Analyze internal residual streams, attention head behaviors, and dictionary learning with sparse autoencoders (SAEs).',
        duration: '5 Weeks',
        skills: ['Residual Stream Probing', 'Activation Patching & Causal Tracing', 'Sparse Autoencoders (SAEs)', 'TransformerLens'],
        resources: [
          { name: 'Anthropic Towards Monosemanticity', type: 'Docs', url: 'https://transformer-circuits.pub/2023/monosemantic-features/index.html' },
          { name: 'TransformerLens Library (Neel Nanda)', type: 'Repo', url: 'https://github.com/TransformerLensOrg/TransformerLens' }
        ],
        projectIdea: 'Locate and intervene on internal neurons that correlate with model truthfulness using activation patching.'
      },
      {
        id: 'safe-4',
        phase: 4,
        phaseTitle: 'Phase 4: Safety Guardrails & Compliance Audits',
        title: 'Inference Guardrails (Llama Guard, NeMo) & Policy',
        description: 'Deploy real-time moderation classifiers, input/output sanitizers, and audit compliance against regulatory standards.',
        duration: '3 Weeks',
        skills: ['Llama Guard 3 Integration', 'NeMo Guardrails Architecture', 'Bias & Toxicity Benchmark Metrics', 'Compliance Documentation'],
        resources: [
          { name: 'NVIDIA NeMo Guardrails', type: 'Docs', url: 'https://github.com/NVIDIA/NeMo-Guardrails' },
          { name: 'Meta Llama Guard Documentation', type: 'Docs', url: 'https://llama.meta.com/docs/model-cards-and-prompt-formats/llama-guard-3/' }
        ],
        projectIdea: 'Build an open-source inference proxy that inspects prompts with Llama Guard 3 and blocks harmful content in sub-50ms.'
      }
    ],
    portfolioProjects: [
      {
        title: 'Automated Red-Teaming & Vulnerability Scanner for Enterprise LLMs',
        difficulty: 'Advanced',
        description: 'Python framework that generates 500+ polymorphic adversarial test prompts to evaluate model safety barriers and output comprehensive vulnerability reports.',
        techStack: ['Python', 'TRL', 'Garak', 'Plotly', 'Docker'],
        deliverable: 'Auditing toolkit repository with command-line interface and HTML vulnerability scorecard.'
      },
      {
        title: 'Sparse Autoencoder (SAE) Feature Visualizer',
        difficulty: 'Advanced',
        description: 'Web application allowing researchers to inspect monosemantic concepts discovered in a transformer residual stream.',
        techStack: ['PyTorch', 'TransformerLens', 'FastAPI', 'React', 'TailwindCSS'],
        deliverable: 'Interactive web visualization tool with interactive feature search.'
      }
    ]
  },
  {
    id: 'nlp-specialist',
    title: 'Natural Language Processing Specialist',
    category: 'Data & Analytics',
    tagline: 'Engineer multilingual translation, speech-to-text, and conversational AI models.',
    description: 'Master computational linguistics, subword tokenizers, embedding spaces, sequence-to-sequence architectures, speech processing (Whisper), and domain-adapted text mining pipelines.',
    salaryRange: '$140,000 - $215,000 / yr',
    difficulty: 'Intermediate',
    marketDemand: 'Very High',
    prerequisites: ['Python proficiency', 'Basic linguistics knowledge', 'Linear algebra', 'PyTorch / Hugging Face'],
    coreTech: ['PyTorch', 'Hugging Face Transformers', 'spaCy', 'Whisper', 'FastText', 'NLTK', 'scikit-learn'],
    dailyTasks: [
      'Training tokenizers and embedding representations for low-resource languages',
      'Fine-tuning BERT, RoBERTa, and DeBERTa for named entity recognition (NER)',
      'Integrating speech-to-text (Whisper) and text-to-speech audio pipelines',
      'Building information extraction workflows from messy unstructured text',
      'Optimizing multilingual cross-lingual transfer learning'
    ],
    milestones: [
      {
        id: 'nlp-1',
        phase: 1,
        phaseTitle: 'Phase 1: Linguistics & Traditional NLP',
        title: 'Text Preprocessing, Regex, spaCy & N-grams',
        description: 'Master lemmatization, dependency parsing, part-of-speech tagging, and statistical language modeling.',
        duration: '3 Weeks',
        skills: ['spaCy Industrial NLP Pipelines', 'Regex Pattern Matching', 'TF-IDF & N-Gram Vectors', 'Word2Vec & GloVe Embeddings'],
        resources: [
          { name: 'Speech and Language Processing (Jurafsky & Martin)', type: 'Book', url: 'https://web.stanford.edu/~jurafsky/slp3/' },
          { name: 'spaCy 101 Guide', type: 'Docs', url: 'https://spacy.io/usage/spacy-101' }
        ],
        projectIdea: 'Build an information extraction pipeline parsing thousands of clinical pathology summaries into structured entities.'
      },
      {
        id: 'nlp-2',
        phase: 2,
        phaseTitle: 'Phase 2: Bidirectional Encoders (BERT) & Sequence Labeling',
        title: 'BERT, RoBERTa & Token Classification',
        description: 'Understand masked language modeling (MLM), fine-tuning encoders for sentiment, NER, and question answering.',
        duration: '4-5 Weeks',
        skills: ['Hugging Face Trainer API', 'Named Entity Recognition (NER)', 'Sequence Classification & Calibration', 'Cross-Validation on Imbalanced Text'],
        resources: [
          { name: 'Hugging Face NLP Course', type: 'Course', url: 'https://huggingface.co/learn/nlp-course/' },
          { name: 'BERT Paper (Devlin et al.)', type: 'Docs', url: 'https://arxiv.org/abs/1810.04805' }
        ],
        projectIdea: 'Fine-tune a DeBERTa model for custom legal entity extraction with BIO tagging and 90%+ F1 score.'
      },
      {
        id: 'nlp-3',
        phase: 3,
        phaseTitle: 'Phase 3: Speech & Multimodal Audio Processing',
        title: 'Audio Representations, Whisper & Speech Recognition',
        description: 'Process audio spectrograms, Mel-frequency cepstral coefficients (MFCCs), and fine-tune Whisper for speech transcription.',
        duration: '4 Weeks',
        skills: ['Audio Spectrogram Transforms', 'OpenAI Whisper Architecture', 'Connectionist Temporal Classification (CTC)', 'Speech Alignment'],
        resources: [
          { name: 'Hugging Face Audio Course', type: 'Course', url: 'https://huggingface.co/learn/audio-course/' },
          { name: 'OpenAI Whisper GitHub Repository', type: 'Repo', url: 'https://github.com/openai/whisper' }
        ],
        projectIdea: 'Build an automated meeting transcription and speaker diarization pipeline with timestamps.'
      },
      {
        id: 'nlp-4',
        phase: 4,
        phaseTitle: 'Phase 4: Multilingual & Cross-Lingual NLP',
        title: 'Cross-Lingual Transfer & Low-Resource Language NLP',
        description: 'Leverage multilingual models (mBERT, XLM-RoBERTa) to build applications that translate and understand 50+ languages.',
        duration: '3-4 Weeks',
        skills: ['XLM-RoBERTa Multilingual Embeddings', 'Machine Translation (NLLB)', 'Zero-Shot Cross-Lingual Transfer', 'Tokenization Bias Auditing'],
        resources: [
          { name: 'Meta NLLB (No Language Left Behind)', type: 'Docs', url: 'https://ai.meta.com/research/no-language-left-behind/' },
          { name: 'Stanford CS224N: Natural Language Processing with Deep Learning', type: 'Course', url: 'https://web.stanford.edu/class/cs224n/' }
        ],
        projectIdea: 'Train a zero-shot cross-lingual customer sentiment classifier that trains in English and tests across Spanish, Hindi, and Japanese.'
      }
    ],
    portfolioProjects: [
      {
        title: 'Multilingual Clinical NER & Entity Normalizer',
        difficulty: 'Advanced',
        description: 'End-to-end medical entity recognition parsing medications, dosages, and diagnoses from unstructured notes with UMLS ontology linkage.',
        techStack: ['Python', 'PyTorch', 'Hugging Face', 'spaCy', 'FastAPI'],
        deliverable: 'Tested microservice with containerized deployment and automated evaluation reports.'
      },
      {
        title: 'Podcast Speech Transcription & Topic Search Engine',
        difficulty: 'Intermediate',
        description: 'Processes long-form podcast audio, generates word-level timestamps using Whisper, indexes transcripts with vector embeddings, and enables semantic search.',
        techStack: ['Python', 'Whisper', 'ChromaDB', 'FastAPI', 'React'],
        deliverable: 'Interactive audio player web application with synchronized transcript highlighting.'
      }
    ]
  }
];
