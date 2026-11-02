} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

// --- Data Structures ---

const skills = [
  { name: "React", icon: <Code2 className="w-5 h-5" />, category: "Frontend", level: 92 },
  { name: "TypeScript", icon: <Code2 className="w-5 h-5" />, category: "Frontend", level: 90 },
  { name: "Tailwind CSS", icon: <MonitorSmartphone className="w-5 h-5" />, category: "Frontend", level: 92 },
  { name: "Node.js", icon: <Terminal className="w-5 h-5" />, category: "Backend", level: 90 },
  { name: "Express.js", icon: <Globe className="w-5 h-5" />, category: "Backend", level: 88 },
  { name: "Python", icon: <Terminal className="w-5 h-5" />, category: "Programming", level: 95 },
  { name: "SQL", icon: <Database className="w-5 h-5" />, category: "Database", level: 90 },
  { name: "Prisma", icon: <Database className="w-5 h-5" />, category: "Database", level: 85 },
  { name: "OpenRouter API", icon: <BrainCircuit className="w-5 h-5" />, category: "AI", level: 92 },
  { name: "Machine Learning", icon: <BrainCircuit className="w-5 h-5" />, category: "AI", level: 88 }
];

const projects = [
  {
    title: "Promptora - AI Gateway Platform",
    description:
      "A production-ready AI Gateway Platform that allows users to access multiple AI models from one dashboard. Built with secure authentication, API management, intelligent routing, usage tracking, and a modern developer experience.",
    tech: [
      "React",
      "TypeScript",
      "Node.js", 
      "Express",
      "OpenRouter",
      "Prisma",
      "SQLite",
      "Tailwind CSS"
    ],
    icon: <Sparkles className="w-6 h-6" />,
    color: "cyan"
  },

  {
    title: "Nemon AI Assistant",
    description:
      "An intelligent AI assistant featuring conversational AI, secure authentication, chat history, prompt management, responsive UI, and scalable backend architecture for future SaaS deployment.",
    tech: [
      "React",
      "TypeScript",
      "Node.js",
      "Express",
      "OpenRouter",
      "Clerk",
      "Tailwind CSS",
      "Vercel"
    ],
    icon: <Bot className="w-6 h-6" />,
    color: "purple"
  },

  {
    title: "OTT Movie Discovery Platform",
    description:
      "Movie and TV discovery platform that gathers entertainment data using APIs and automation, stores it in MySQL, and provides advanced search and filtering capabilities.",
    tech: [
      "Python",
      "MySQL",
      "REST API",
      "Selenium"
    ],
    icon: <MonitorSmartphone className="w-6 h-6" />,
    color: "blue"
  },

  {
    title: "AI Resume Analyzer",
    description:
      "ATS resume analysis platform that evaluates resumes using NLP, extracts important information, calculates resume scores, and recommends improvements.",
    tech: [
      "Python",
      "NLP",
      "Streamlit",
      "PDF Processing"
    ],
    icon: <Search className="w-6 h-6" />,
    color: "emerald"
  },

  {
    title: "Automation Testing Framework",
    description:
      "Enterprise automation testing framework using Selenium and Python with reusable test architecture, reporting, and cross-browser automation.",
    tech: [
      "Python",
      "Selenium",
      "PyTest",
      "Automation"
    ],
    icon: <Layers className="w-6 h-6" />,
    color: "indigo"
  },

  {
    title: "Data Analytics Dashboard",
    description:
      "Interactive business intelligence dashboard visualizing KPIs, trends, and insights from enterprise datasets.",
    tech: [
      "Power BI",
      "Python",
      "SQL"
    ],
    icon: <BarChart3 className="w-6 h-6" />,
    color: "cyan"
  }
];

const experiences = [
  {
    role: "Data Science Intern",
    company: "Orvionar Tech Pvt Limited",
    period: "DEC 2025 - APR 2026",
    description: "Architecting predictive models and automated data extraction pipelines to solve complex business bottlenecks.",
    details: [
      "Process Automation: Reduced data pipeline latency by 45%.",
      "Analysis: Implemented SQL-based reporting frameworks.",
      "AI Strategy: Leveraged Gemini for intelligent document parsing."
    ]
  },
  {
    role: "Automation Developer",
    company: "Freelance",
    period: "2025 - Present",
    description: "Developing robust web-crawling ecosystems and custom script solutions for international clients.",
    details: [
      "Architecture: Built scalable Selenium-based cloud scrapers.",
      "Integration: Developed custom API middleware for ERP systems."
    ]
  }
];

// --- Components ---

const GlowingIcon = ({ icon, color = "blue" }: { icon: ReactNode; color?: string }) => {
  const colors: Record<string, string> = {
    blue: "bg-blue-500/10 text-blue-400 group-hover:bg-blue-500 group-hover:text-black",
    cyan: "bg-cyan-500/10 text-cyan-400 group-hover:bg-cyan-500 group-hover:text-black",
    indigo: "bg-indigo-500/10 text-indigo-400 group-hover:bg-indigo-500 group-hover:text-black",
    emerald: "bg-emerald-500/10 text-emerald-400 group-hover:bg-emerald-500 group-hover:text-black",
    purple: "bg-purple-500/10 text-purple-400 group-hover:bg-purple-500 group-hover:text-black",
  };
  
  return (
    <div className={`p-3 rounded-2xl transition-all duration-300 ${colors[color] || colors.blue}`}>
      {icon}
    </div>
  );
};

const SectionHeading = ({ children, subtitle }: { children: string; subtitle?: string }) => (
  <div className="mb-16">
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      className="flex items-center gap-4 mb-4"
    >
      <div className="h-0.5 w-12 bg-cyan-500"></div>
      <span className="text-cyan-400 font-mono text-xs uppercase tracking-[0.3em] font-bold">{subtitle || "Experience"}</span>
    </motion.div>
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.1 }}
      className="text-4xl md:text-5xl font-black text-white tracking-tight"
    >
      {children}
    </motion.h2>
  </div>
);

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      setShowBackToTop(window.scrollY > 500);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
