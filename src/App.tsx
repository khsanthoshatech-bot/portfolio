/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, ReactNode } from "react";
import { 
  Github, 
  Linkedin, 
  Mail, 
  ExternalLink, 
  ChevronRight, 
  Code2, 
  Database, 
  BarChart3, 
  Globe, 
  Terminal, 
  Cpu, 
  Layers, 
  MonitorSmartphone,
  Menu,
  X,
  ArrowUp,
  BrainCircuit,
  PieChart,
  Bot,
  Search,
  MessageSquare,
  Sparkles,
  Download,
  Calendar,
  Briefcase
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

// --- Data Structures ---

const skills = [
  { name: "Python", icon: <Terminal className="w-5 h-5" />, category: "Core", level: 95 },
  { name: "SQL", icon: <Database className="w-5 h-5" />, category: "Database", level: 85 },
  { name: "Pandas", icon: <Layers className="w-5 h-5" />, category: "Data Science", level: 90 },
  { name: "NumPy", icon: <Cpu className="w-5 h-5" />, category: "Data Science", level: 88 },
  { name: "Selenium", icon: <Globe className="w-5 h-5" />, category: "Automation", level: 92 },
  { name: "React", icon: <Code2 className="w-5 h-5" />, category: "Frontend", level: 80 },
  { name: "Tailwind CSS", icon: <MonitorSmartphone className="w-5 h-5" />, category: "Frontend", level: 85 },
  { name: "Machine Learning", icon: <BrainCircuit className="w-5 h-5" />, category: "AI", level: 75 },
  { name: "Data Visualization", icon: <PieChart className="w-5 h-5" />, category: "Analytics", level: 85 },
  { name: "TypeScript", icon: <Code2 className="w-5 h-5" />, category: "Frontend", level: 82 },
];

const projects = [
  {
    title: "OTT Movie Discovery Platform",
    description: "A comprehensive movie and series discovery system leveraging Python and MySQL to manage entertainment data at scale.",
    tech: ["Python", "MySQL", "API Integration"],
    icon: <MonitorSmartphone className="w-6 h-6" />,
    color: "blue"
  },
  {
    title: "AI Resume Analyzer",
    description: "Intelligent career tool that parses PDF resumes using NLP to provide scoring and job matching recommendations.",
    tech: ["Python", "NLP", "Streamlit"],
    icon: <Search className="w-6 h-6" />,
    color: "cyan"
  },
  {
    title: "Data Analytics Dashboard",
    description: "Dynamic business intelligence platform visualizing KPIs and trends from complex enterprise datasets.",
    tech: ["Power BI", "Python", "SQL"],
    icon: <BarChart3 className="w-6 h-6" />,
    color: "indigo"
  },
  {
    title: "Automation Web Scraper",
    description: "High-performance Selenium-based crawler designed to extract and structure data from dynamic web sources.",
    tech: ["Selenium", "Python", "Automation"],
    icon: <Layers className="w-6 h-6" />,
    color: "emerald"
  },
  {
    title: "Movie Recommendation System",
    description: "Content-based filtering engine built with Scikit-learn to suggest personalized content to users.",
    tech: ["Scikit-learn", "Pandas", "Analytics"],
    icon: <Bot className="w-6 h-6" />,
    color: "purple"
  }
];

const experiences = [
  {
    role: "Data Science Intern",
    company: "Orvionar Tech Pvt Limited",
    period: "JAN 2024 - PRESENT",
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
    period: "2023 - 2024",
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
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <div className="min-h-screen w-full max-w-full overflow-x-clip bg-slate-950 text-slate-100 selection:bg-cyan-500/30 selection:text-white font-sans scroll-smooth relative">
      {/* --- Technical Grid Background --- */}
      <div className="fixed inset-0 z-0 opacity-20 pointer-events-none" 
        style={{ 
          backgroundImage: `linear-gradient(to right, #1e293b 1px, transparent 1px), linear-gradient(to bottom, #1e293b 1px, transparent 1px)`,
          backgroundSize: '4rem 4rem'
        }} 
      />
      
      {/* --- Ambient Aura --- */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-blue-600/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-cyan-600/5 rounded-full blur-[120px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] bg-indigo-600/5 rounded-full blur-[150px]" />
      </div>

      {/* --- Navbar --- */}
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled ? "bg-slate-950/80 backdrop-blur-xl border-b border-white/5 py-4" : "bg-transparent py-8"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3 group cursor-pointer"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center font-bold text-slate-950 text-xl shadow-lg shadow-blue-500/20 group-hover:scale-110 transition-transform">
              S
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-black tracking-tighter text-white leading-none">KH SANTHOSHA</span>
              <span className="text-[10px] font-mono text-cyan-400 tracking-widest mt-1 uppercase font-bold">Python & AI</span>
            </div>
          </motion.div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex gap-10 items-center text-[11px] font-black text-slate-400 uppercase tracking-[0.2em]">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className="hover:text-cyan-400 transition-colors relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-500 group-hover:w-full transition-all" />
              </a>
            ))}
            <a 
              href="https://wa.me/918147566850" 
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2.5 bg-white text-slate-950 rounded-xl font-black hover:bg-cyan-50 transition-all shadow-xl shadow-white/5 active:scale-95 text-xs"
            >
              HIRE ME
            </a>
          </nav>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-white p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.1 }}
            className="fixed inset-0 z-40 bg-slate-950/98 flex flex-col items-center justify-center gap-8 md:hidden p-8"
          >
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-4xl font-black text-slate-400 hover:text-white transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a 
              href="https://wa.me/918147566850"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-8 px-12 py-4 bg-cyan-500 text-black font-black rounded-2xl text-xl"
            >
              HIRE ME
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="relative z-10">
        
        {/* --- Hero Section --- */}
        <section id="home" className="min-h-screen flex flex-col justify-center px-6 md:px-12 max-w-7xl mx-auto relative overflow-hidden">
          <div className="absolute top-1/4 left-0 w-full h-full pointer-events-none opacity-20">
            <div className="absolute top-0 left-10 w-px h-64 bg-gradient-to-b from-transparent via-cyan-500 to-transparent" />
            <div className="absolute top-20 left-40 w-px h-64 bg-gradient-to-b from-transparent via-blue-500 to-transparent" />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-5xl min-w-0 relative z-10"
          >
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="flex flex-wrap items-center gap-3 sm:gap-4 mb-8 max-w-full"
            >
              <div className="inline-flex min-w-0 items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-md border border-white/10 rounded-full">
                <div className="w-2 h-2 shrink-0 bg-emerald-500 rounded-full animate-ping" />
                <span className="text-[10px] font-black uppercase tracking-[0.16em] sm:tracking-[0.2em] text-slate-300">Available for Opportunities</span>
              </div>
              <div className="hidden sm:block h-px w-12 bg-white/10" />
              <span className="text-[10px] font-mono text-cyan-500 font-bold tracking-widest uppercase break-words">Location: Bangalore, IN</span>
            </motion.div>
            
            <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-[9rem] font-black tracking-tight leading-[1] md:leading-[0.9] text-white grow mb-8 md:mb-12 break-words">
              DESIGNING <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-cyan-300 inline-block max-w-full break-words">
                INTELLIGENCE
              </span>
            </h1>
            
            <div className="grid md:grid-cols-12 gap-12 items-end min-w-0">
              <div className="md:col-span-8 min-w-0">
                <p className="text-lg sm:text-xl md:text-2xl text-slate-400 font-medium leading-relaxed mb-8 md:mb-12 max-w-2xl">
                  KH Santhosha — A <span className="text-white">Python Developer</span> & <span className="text-white">Data Science Enthusiast</span> specialized in building high-performance automation and AI-driven systems.
                </p>
                
                <div className="flex flex-col sm:flex-row flex-wrap gap-4 sm:gap-5 w-full sm:w-auto">
                  <motion.a 
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    href="https://wa.me/918147566850"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto text-center px-6 sm:px-10 py-4 sm:py-5 bg-cyan-500 text-black font-black rounded-2xl hover:shadow-[0_0_30px_rgba(6,182,212,0.4)] transition-all text-xs tracking-[0.12em] sm:tracking-[0.15em] uppercase"
                  >
                    Start a Project
                  </motion.a>
                  <motion.a 
                    whileHover={{ backgroundColor: "rgba(255,255,255,0.1)" }}
                    href="#"
                    className="w-full sm:w-auto justify-center px-6 sm:px-10 py-4 sm:py-5 border border-white/10 text-white font-black rounded-2xl transition-all flex items-center gap-3 text-xs tracking-[0.12em] sm:tracking-[0.15em] uppercase"
                  >
                    <Download className="w-4 h-4" /> Download CV
                  </motion.a>
                </div>
              </div>

              <div className="md:col-span-4 hidden md:block">
                <div className="p-8 border border-white/5 rounded-3xl bg-white/[0.02] backdrop-blur-sm">
                  <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-4">Core Focus</p>
                  <ul className="space-y-3">
                    {["Web Automation", "Predictive ML", "Data Architecture", "Full-Stack Dev"].map(item => (
                      <li key={item} className="flex items-center gap-3 text-sm font-bold text-slate-300">
                        <div className="w-1.5 h-1.5 bg-cyan-500 rounded-full" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Decorative Hero Element */}
          <motion.div 
            animate={{ 
              y: [0, -20, 0],
              rotate: [0, 5, 0]
            }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute right-0 top-1/2 -translate-y-1/2 hidden lg:block opacity-20 pointer-events-none"
          >
            <BrainCircuit className="w-[220px] h-[220px] md:w-[500px] md:h-[500px] text-cyan-500 max-w-full" />
          </motion.div>
        </section>

        {/* --- About Section --- */}
        <section id="about" className="py-32 px-6 md:px-12 max-w-7xl mx-auto relative">
          <div className="absolute top-0 right-0 w-px h-full bg-white/5" />
          <div className="grid lg:grid-cols-2 gap-32 items-center">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative group"
            >
              <div className="absolute -inset-10 bg-cyan-500/20 rounded-full blur-[100px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
              <div className="aspect-square bg-slate-900 border border-white/5 rounded-[64px] p-2 overflow-hidden relative">
                <div className="w-full h-full rounded-[56px] bg-slate-950 flex items-center justify-center relative overflow-hidden">
                   <div className="absolute inset-0 opacity-[0.02]" 
                     style={{ 
                       backgroundImage: 'radial-gradient(#fff 1px, transparent 0)',
                       backgroundSize: '20px 20px'
                     }} 
                   />
                   <div className="text-center p-12 relative z-10">
                     <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-3xl mx-auto mb-8 flex items-center justify-center shadow-2xl shadow-blue-500/40 rotate-12 group-hover:rotate-0 transition-transform duration-500">
                        <Terminal className="w-12 h-12 text-slate-950" />
                     </div>
                     <h3 className="text-4xl font-black text-white mb-6 uppercase tracking-tighter">DATA<br/>ARCHITECT</h3>
                     <div className="space-y-2">
                       <div className="h-1 w-32 bg-white/5 mx-auto rounded-full overflow-hidden">
                         <motion.div 
                           animate={{ x: ["-100%", "100%"] }}
                           transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                           className="h-full w-1/2 bg-cyan-500"
                         />
                       </div>
                       <p className="text-[10px] font-mono text-slate-500 uppercase tracking-widest mt-4">Processing Logic...</p>
                     </div>
                   </div>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-12"
            >
              <SectionHeading subtitle="Profile">The Vision</SectionHeading>
              <div className="space-y-8 text-2xl text-slate-400 font-medium leading-relaxed">
                <p>
                  Specialized in <span className="text-white">Predictive Modeling</span> and <span className="text-white">Auto-Scaling Scrapers</span>. I bridge the gap between architectural logic and real-world deployment.
                </p>
                <p className="text-lg text-slate-500">
                  Currently focused on deep-learning integration and optimizing enterprise data flows at Orvionar Tech.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-8 pt-10">
                {[
                  { label: "Systems Built", value: "12+" },
                  { label: "Efficiency Gain", value: "80%" }
                ].map(stat => (
                  <div key={stat.label} className="border-l border-white/10 pl-8">
                    <div className="text-5xl font-black text-white mb-2">{stat.value}</div>
                    <div className="text-[10px] text-slate-500 uppercase tracking-widest font-black">{stat.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* --- Skills Section --- */}
        <section id="skills" className="py-32 bg-black/40 px-6 md:px-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-px h-full bg-gradient-to-b from-transparent via-white/10 to-transparent" />
          
          <div className="max-w-7xl mx-auto">
            <SectionHeading subtitle="Expertise">Technical Stack</SectionHeading>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="bg-slate-900/50 backdrop-blur-sm border border-white/5 p-8 rounded-[32px] group flex flex-col items-center gap-6 relative overflow-hidden transition-all duration-500"
                >
                  <div className="absolute inset-0 bg-blue-500/0 group-hover:bg-blue-500/5 transition-colors" />
                  <GlowingIcon icon={skill.icon} color={index % 2 === 0 ? "blue" : "cyan"} />
                  <div className="text-center relative z-10">
                    <h4 className="text-white font-black mb-1 group-hover:text-cyan-400 transition-colors uppercase tracking-[0.2em] text-[10px]">{skill.name}</h4>
                    <p className="text-[9px] text-slate-500 uppercase tracking-tighter font-bold">{skill.category}</p>
                  </div>
                  
                  {/* Progress Line */}
                  <div className="w-full h-0.5 bg-white/5 rounded-full overflow-hidden mt-2 relative z-10">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1.5, delay: 0.5, ease: "circOut" }}
                      className="h-full bg-gradient-to-r from-blue-500 to-cyan-400 shadow-[0_0_10px_rgba(6,182,212,0.5)]"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* --- Experience Section --- */}
        <section id="experience" className="py-32 px-6 md:px-12 max-w-7xl mx-auto relative overflow-hidden">
          <SectionHeading subtitle="System Log">Professional History</SectionHeading>
          <div className="absolute top-1/2 left-0 w-full h-[500px] bg-blue-500/5 blur-[150px] -z-10" />
          
          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="group relative"
              >
                <div className="bg-white/[0.03] backdrop-blur-xl border border-white/5 hover:border-cyan-500/30 transition-all p-8 md:p-12 rounded-[48px] overflow-hidden">
                  <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                    <Briefcase className="w-48 h-48" />
                  </div>
                  
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12 relative z-10">
                    <div>
                      <div className="text-[10px] font-mono text-cyan-500 font-black tracking-[0.3em] mb-2 uppercase">{exp.period}</div>
                      <h3 className="text-3xl md:text-4xl font-black text-white tracking-tighter uppercase">{exp.role}</h3>
                      <div className="text-xl text-slate-500 font-bold tracking-wide italic mt-1">{exp.company}</div>
                    </div>
                    <div className="flex -space-x-2">
                       {[1,2,3].map(i => (
                         <div key={i} className="w-10 h-10 rounded-full border-2 border-slate-950 bg-slate-900 flex items-center justify-center text-[10px] font-bold text-slate-500">
                           {String.fromCharCode(64 + i)}
                         </div>
                       ))}
                    </div>
                  </div>
                  
                  <div className="grid lg:grid-cols-12 gap-12 relative z-10">
                    <div className="lg:col-span-12">
                      <div className="grid md:grid-cols-3 gap-6">
                        {exp.details.map((detail, idx) => (
                          <div key={idx} className="p-6 bg-white/[0.02] border border-white/5 rounded-3xl group-hover:bg-cyan-500/5 transition-colors">
                            <p className="text-sm text-slate-400 font-medium leading-relaxed">
                              {detail}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* --- Projects Section --- */}
        <section id="projects" className="py-32 bg-black/20 px-6 md:px-12">
          <div className="max-w-7xl mx-auto">
             <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 mb-20">
               <div>
                  <SectionHeading subtitle="Portfolio">Featured Projects</SectionHeading>
               </div>
               <motion.a 
                 whileHover={{ x: 10 }}
                 href="https://github.com" 
                 target="_blank"
                 className="flex items-center gap-4 text-xs font-black text-cyan-400 uppercase tracking-[0.3em]"
               >
                 Explore More on GitHub <ChevronRight className="w-5 h-5" />
               </motion.a>
             </div>

             <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
               {projects.map((project, index) => (
                 <motion.div
                   key={project.title}
                   initial={{ opacity: 0, y: 30 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   transition={{ duration: 0.6, delay: index * 0.1 }}
                   viewport={{ once: true }}
                   whileHover={{ y: -10 }}
                   className="group bg-slate-900/50 border border-slate-800 rounded-[40px] p-10 flex flex-col h-full hover:bg-slate-900/80 transition-all overflow-hidden relative border-t-blue-500/20"
                 >
                   <div className="mb-10 flex justify-between items-start">
                     <GlowingIcon icon={project.icon} color={project.color} />
                     <div className="flex gap-3">
                       <a href="#" className="p-2 bg-slate-800 rounded-lg text-slate-400 hover:text-white transition-colors"><Github className="w-4 h-4" /></a>
                       <a href="#" className="p-2 bg-slate-800 rounded-lg text-slate-400 hover:text-white transition-colors"><ExternalLink className="w-4 h-4" /></a>
                     </div>
                   </div>
                   
                   <h3 className="text-2xl font-black text-white mb-4 group-hover:text-cyan-400 transition-colors uppercase tracking-tighter">{project.title}</h3>
                   <p className="text-slate-400 font-medium mb-10 grow line-clamp-3 leading-relaxed">
                     {project.description}
                   </p>
                   
                   <div className="flex flex-wrap gap-2 mt-auto">
                     {project.tech.map(t => (
                       <span key={t} className="px-3 py-1 bg-slate-950 text-[10px] font-mono text-slate-500 rounded-lg border border-slate-800 uppercase tracking-widest font-black">
                         {t}
                       </span>
                     ))}
                   </div>

                   {/* Background Highlight */}
                   <div className="absolute bottom-0 right-0 w-32 h-32 bg-blue-500/5 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
                 </motion.div>
               ))}
             </div>
          </div>
        </section>

        {/* --- Contact Section --- */}
        <section id="contact" className="py-32 px-6 md:px-12 max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="space-y-10"
            >
              <SectionHeading subtitle="Connect">Get In Touch</SectionHeading>
              
              <div className="space-y-8">
                <div className="flex items-center gap-8 group">
                  <div className="p-4 bg-slate-900 border border-slate-800 rounded-2xl group-hover:bg-cyan-500 group-hover:text-black transition-all">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 uppercase tracking-widest font-black mb-1">Email Me</p>
                    <a href="mailto:khsanthosha.tech@gmail.com" className="text-xl sm:text-2xl font-black text-white hover:text-cyan-400 transition-colors break-all">khsanthosha.tech@gmail.com</a>
                  </div>
                </div>

                <div className="flex items-center gap-8 group">
                   <div className="p-4 bg-slate-900 border border-slate-800 rounded-2xl group-hover:bg-blue-500 group-hover:text-black transition-all">
                    <Linkedin className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 uppercase tracking-widest font-black mb-1">LinkedIn</p>
                    <a href="https://www.linkedin.com/in/kh-santhosh/" target="_blank" rel="noopener noreferrer" className="text-2xl font-black text-white hover:text-blue-400 transition-colors">KH Santhosha</a>
                  </div>
                </div>

                <div className="flex items-center gap-8 group">
                  <div className="p-4 bg-slate-900 border border-slate-800 rounded-2xl group-hover:bg-green-500 group-hover:text-black transition-all">
                    <MessageSquare className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 uppercase tracking-widest font-black mb-1">WhatsApp</p>
                    <a href="https://wa.me/918147566850" target="_blank" rel="noopener noreferrer" className="text-2xl font-black text-white hover:text-green-400 transition-colors">+91 81475 66850</a>
                  </div>
                </div>
              </div>

              <div className="flex gap-4 pt-8">
                <a href="#" className="p-4 bg-slate-900 border border-slate-800 rounded-2xl hover:border-cyan-500/50 transition-colors"><Github className="w-6 h-6 text-white" /></a>
                <a href="#" className="p-4 bg-slate-900 border border-slate-800 rounded-2xl hover:border-cyan-500/50 transition-colors"><Terminal className="w-6 h-6 text-white" /></a>
              </div>
            </motion.div>

            <motion.form 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="bg-slate-900/50 border border-slate-800 p-10 md:p-12 rounded-[48px] space-y-6"
            >
              <div className="grid md:grid-cols-2 gap-6">
                 <div className="space-y-2">
                   <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 ml-4">Full Name</label>
                   <input type="text" placeholder="John Doe" className="w-full bg-slate-950 border border-slate-800 p-5 rounded-2xl focus:border-cyan-500 outline-none transition-colors" />
                 </div>
                 <div className="space-y-2">
                   <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 ml-4">Email Address</label>
                   <input type="email" placeholder="john@example.com" className="w-full bg-slate-950 border border-slate-800 p-5 rounded-2xl focus:border-cyan-500 outline-none transition-colors" />
                 </div>
              </div>
              <div className="space-y-2">
                 <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 ml-4">Your Message</label>
                 <textarea rows={5} placeholder="How can we work together?" className="w-full bg-slate-950 border border-slate-800 p-5 rounded-2xl focus:border-cyan-500 outline-none transition-colors resize-none"></textarea>
              </div>
              <button className="w-full py-5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-black rounded-2xl hover:shadow-[0_0_20px_rgba(37,99,235,0.3)] transition-all uppercase tracking-widest text-sm flex items-center justify-center gap-3">
                Send Message <Sparkles className="w-4 h-4" />
              </button>
            </motion.form>
          </div>
        </section>

      </main>

      {/* --- Footer --- */}
      <footer className="py-20 border-t border-slate-900 bg-slate-950 px-6 md:px-12 relative z-10 overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="text-center md:text-left">
             <h2 className="text-3xl font-black tracking-tighter text-white mb-2">KH SANTHOSHA<span className="text-cyan-400">.</span></h2>
             <p className="text-slate-500 font-medium text-sm">Crafting logic and data into digital experiences.</p>
          </div>
          
          <div className="flex flex-col items-center md:items-end gap-6 text-[10px] font-black text-slate-500 uppercase tracking-widest">
            <div className="flex gap-8">
              <a href="https://github.com/KH-Santhosha" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">GitHub</a>
              <a href="https://www.linkedin.com/in/kh-santhosh/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">LinkedIn</a>
              <a href="#" className="hover:text-white transition-colors">Instagram</a>
            </div>
            <p>&copy; 2026 KH SANTHOSHA | ALL RIGHTS RESERVED</p>
          </div>
        </div>

        {/* Backdrop Glow */}
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/5 blur-[100px] -mb-48 -mr-48 pointer-events-none" />
      </footer>

      {/* --- Back To Top --- */}
      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="fixed bottom-10 right-10 z-50 p-4 bg-cyan-500 text-black rounded-2xl shadow-2xl shadow-cyan-500/20 active:scale-90 transition-transform"
          >
            <ArrowUp className="w-6 h-6" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
