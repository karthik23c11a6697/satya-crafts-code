export const profile = {
  name: "Satya Karthik",
  role: "Aspiring Machine Learning Engineer | Python Developer | Data Analyst",
  tagline:
    "Turning data into decisions and building intelligent, automation-first solutions.",
  summary:
    "Python and Machine Learning enthusiast with hands-on experience in data analysis, automation, and ML model implementation. Proficient in NumPy, Pandas, and Matplotlib. Seeking an internship to contribute to real-world AI and data science projects.",
  about:
    "I'm a Computer Science (AI & ML) undergraduate at Anurag College of Engineering with a strong passion for Python, machine learning, and data-driven problem solving. I love building automation scripts that eliminate repetitive work, designing ML models from raw datasets, and turning numbers into clear visual stories. Driven by continuous learning, I'm currently sharpening my skills through real projects, certifications, and academic internships — and I'm actively looking for opportunities where I can contribute to meaningful AI, data, and software engineering work.",
  location: "Kodad, Telangana, India",
  phone: "+91 8121080557",
  email: "karthikdomain97@gmail.com",
  github: "https://github.com/karthik23c11a6697",
  linkedin: "https://www.linkedin.com/in/satya-karthik-555aa930b",
  githubUsername: "karthik23c11a6697",
  availability: "Open to Internships & Full-Time Opportunities",
};

export const typewriterRoles = [
  "Machine Learning Engineer",
  "Python Developer",
  "Data Analyst",
  "AI Enthusiast",
];

export const highlights = [
  "Problem Solver",
  "Automation-First",
  "Data-Driven Thinker",
  "Continuous Learner",
  "Team Collaborator",
];

export const stats = [
  { label: "Projects Built", value: 6 },
  { label: "GitHub Repositories", value: 15 },
  { label: "Technologies", value: 12 },
  { label: "Certifications", value: 1 },
];

export const skills = [
  {
    category: "Programming Languages",
    items: ["Python", "SQL"],
  },
  {
    category: "Data Science & ML",
    items: [
      "NumPy",
      "Pandas",
      "Matplotlib",
      "Machine Learning",
      "Artificial Intelligence",
      "Data Analysis",
      "Data Visualization",
    ],
  },
  {
    category: "Core CS Concepts",
    items: ["Data Structures", "Operating Systems", "Problem Solving"],
  },
  {
    category: "Tools & Platforms",
    items: ["Git", "GitHub", "Jupyter Notebook", "VS Code"],
  },
];

export type ProjectCategory = "Data Analysis" | "Machine Learning" | "Automation";

export const projectCategories: ProjectCategory[] = [
  "Data Analysis",
  "Machine Learning",
  "Automation",
];

export const projects: {
  title: string;
  description: string;
  problem: string;
  solution: string;
  impact: string;
  tech: string[];
  features: string[];
  github: string;
  demo?: string;
  category: ProjectCategory;
  period?: string;
}[] = [
  {
    title: "Automated Data Cleaning & Reporting",
    description:
      "A Python automation pipeline that cleans raw datasets, handles missing values, removes duplicates, validates schema, and auto-generates analytical visual reports.",
    problem:
      "Analysts waste hours every week on repetitive data preparation and manual reporting before any real insight work begins.",
    solution:
      "Built a reusable preprocessing workflow with Pandas & NumPy plus a Matplotlib reporting layer that turns any CSV into a clean, validated dataset with publication-ready charts.",
    impact:
      "Cuts manual reporting effort significantly and produces consistent, repeatable data-quality outputs across multiple datasets.",
    tech: ["Python", "Pandas", "NumPy", "Matplotlib"],
    features: [
      "Automated missing value handling",
      "Deduplication & schema validation",
      "Reusable preprocessing pipeline",
      "Auto-generated visual reports",
    ],
    github:
      "https://github.com/karthik23c11a6697/data-cleaning-reporting-automation",
    category: "Automation",
    period: "May 2026 – Jun 2026",
  },
  {
    title: "House Price Prediction",
    description:
      "Regression-based ML model that predicts house prices from historical real-estate features.",
    problem:
      "Pricing a home from raw attributes is noisy — buyers and sellers need a data-backed estimate.",
    solution:
      "Engineered features, trained and compared regression models with Scikit-learn, and evaluated performance with standard metrics.",
    impact:
      "Delivers an interpretable model with measurable accuracy on unseen data and clear feature-importance insights.",
    tech: ["Python", "Scikit-learn", "Pandas", "Matplotlib"],
    features: [
      "Data preprocessing",
      "Feature engineering",
      "Regression modeling",
      "Performance evaluation",
    ],
    github:
      "https://github.com/karthik23c11a6697/Thiranex_Task3_House_Price_Prediction",
    category: "Machine Learning",
  },
  {
    title: "Sentiment Analysis",
    description:
      "NLP system that classifies text into positive, negative, and neutral sentiment.",
    problem:
      "Brands and creators receive thousands of comments — manually reading them doesn't scale.",
    solution:
      "Built a text-preprocessing + classification pipeline that vectorises text and predicts sentiment in real time, with a small visualization dashboard.",
    impact:
      "Surfaces sentiment trends from large text corpora in seconds instead of hours.",
    tech: ["Python", "NLP", "Scikit-learn", "Pandas"],
    features: [
      "Text preprocessing",
      "Sentiment classification",
      "Visualization dashboard",
      "Model evaluation",
    ],
    github:
      "https://github.com/karthik23c11a6697/HorizonTechX_Sentiment_Analysis",
    category: "Machine Learning",
  },
  {
    title: "Customer Segmentation",
    description:
      "Unsupervised clustering to segment customers based on behaviour and purchasing patterns.",
    problem:
      "Generic marketing wastes spend — businesses need to know who their customers actually are.",
    solution:
      "Applied clustering algorithms to behavioural data, profiled each segment, and visualised cluster differences for non-technical stakeholders.",
    impact:
      "Enables targeted campaigns and clearer business insights from raw transactional data.",
    tech: ["Python", "Scikit-learn", "Pandas", "Matplotlib"],
    features: [
      "Customer clustering",
      "Behavioural pattern analysis",
      "Data visualization",
      "Actionable business insights",
    ],
    github: "https://github.com/karthik23c11a6697/Customer-Segmentation",
    category: "Machine Learning",
  },
  {
    title: "Sales Revenue Analysis",
    description:
      "Data analysis project uncovering revenue trends, sales patterns, and growth opportunities.",
    problem:
      "Sales teams have rich data but no clear view of which products, regions, or periods are driving revenue.",
    solution:
      "Performed end-to-end EDA, built revenue dashboards with Pandas + Seaborn, and translated patterns into business recommendations.",
    impact:
      "Highlights top-performing segments and growth windows that inform sales strategy.",
    tech: ["Python", "Pandas", "Matplotlib", "Seaborn"],
    features: [
      "Revenue trend analysis",
      "Interactive sales dashboards",
      "Visual reporting",
      "Business insights",
    ],
    github: "https://github.com/karthik23c11a6697/Sales-Revenue-Analysis",
    category: "Data Analysis",
  },
  {
    title: "Exploratory Data Analysis",
    description:
      "Comprehensive EDA workflow that uncovers correlations, outliers, and hidden insights in datasets.",
    problem:
      "Raw datasets hide their structure — without proper EDA, modelling decisions are guesswork.",
    solution:
      "Built a templated EDA notebook covering statistical summaries, correlation matrices, and rich visual exploration.",
    impact:
      "Speeds up the discovery phase of any data project and produces shareable insight reports.",
    tech: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn"],
    features: [
      "Statistical analysis",
      "Correlation analysis",
      "Outlier detection",
      "Insight generation",
    ],
    github: "https://github.com/karthik23c11a6697/HorizonTechX_EDA",
    category: "Data Analysis",
  },
];

export const experience = [
  {
    role: "Academic Project Intern",
    company: "Anurag College of Engineering",
    period: "Aug 2025 – Present",
    location: "Hyderabad, India",
    bullets: [
      "Built and analyzed academic projects using Python and core machine learning concepts.",
      "Applied data analysis and problem-solving techniques to derive meaningful insights from real datasets.",
      "Collaborated with peers to design solutions and presented project outcomes to faculty.",
    ],
  },
  {
    role: "Marketing Campaign Simulation Lead",
    company: "College Project",
    period: "Aug 2025 – Nov 2025",
    location: "Anurag College of Engineering",
    bullets: [
      "Designed an end-to-end mock marketing plan covering budgeting, promotion, and distribution for a new product launch.",
      "Translated business requirements into a structured strategy document and pitch presentation.",
    ],
  },
];

export const education = [
  {
    degree: "B.Tech – Computer Science (AI & ML)",
    institution: "Anurag College of Engineering",
    year: "2023 – 2027",
    score: "Pursuing",
    coursework: [
      "Data Structures",
      "Operating Systems",
      "Machine Learning",
      "Artificial Intelligence",
      "Python Programming",
      "DBMS",
    ],
    achievements: [
      "Active GitHub contributor with 6+ published projects",
      "Hands-on ML & automation projects beyond curriculum",
    ],
  },
  {
    degree: "Senior Secondary (Class XII)",
    institution: "Sri Chaitanya Techno HS, Kodad, Suryapet",
    year: "2023",
    score: "CGPA: 8.00 / 10",
    coursework: ["Mathematics", "Physics", "Chemistry"],
    achievements: ["Strong foundation in analytical and quantitative reasoning"],
  },
  {
    degree: "Secondary (Class X)",
    institution: "Sri Chaitanya Techno HS, Kodad, Suryapet",
    year: "2020",
    score: "CGPA: 10.00 / 10",
    coursework: [],
    achievements: ["Perfect 10 CGPA"],
  },
];

export const certifications = [
  {
    title: "Python for Data Science & Machine Learning",
    issuer: "Online / Virtual",
    period: "Jun 2025 – Present",
    description:
      "Mastered Python fundamentals, data handling and applied ML using NumPy, Pandas and Matplotlib. Implemented ML models and solved practice problems to strengthen applied programming skills.",
  },
];

export const achievements = [
  {
    title: "Winner – Business Quiz Contest",
    year: "2023",
    description:
      "Awarded first place in an inter-college business quiz contest, demonstrating quick analytical thinking and broad awareness.",
  },
  {
    title: "6+ Open-Source Projects on GitHub",
    year: "Ongoing",
    description:
      "Consistent contributor with public ML, EDA, and automation repositories used as learning references.",
  },
  {
    title: "Academic Project Internship",
    year: "2025",
    description:
      "Selected for an academic internship to build and present applied ML projects to faculty reviewers.",
  },
];

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Achievements", href: "#achievements" },
  { label: "Resume", href: "#resume" },
  { label: "Contact", href: "#contact" },
];
