"use client";

import Link from "next/link";
import AnimatedSection, { useCountUp } from "@/components/AnimatedSection";
import Typewriter from "@/components/Typewriter";
import { projects } from "@/lib/projects";
import { useState, useRef, useEffect } from "react";
import emailjs from "@emailjs/browser";

/* ══════════════════════════════════════════
   DATA
   ══════════════════════════════════════════ */

const codingProfiles = [
  {
    name: "LeetCode",
    url: "https://leetcode.com/u/abhaygarodi18/",
    icon: "code",
    description: "Problem Solving & DSA",
    color: "#FFA116",
  },
  {
    name: "HackerRank",
    url: "https://www.hackerrank.com/profile/abhayhgarodi365",
    icon: "terminal",
    description: "SQL Advanced Certified",
    color: "#00EA64",
  },
  {
    name: "GeeksforGeeks",
    url: "https://www.geeksforgeeks.org/profile/abhayhgat3fg",
    icon: "school",
    description: "Data Structures Practice",
    color: "#2F8D46",
  },
  {
    name: "GitHub",
    url: "https://github.com/abhaygarodi",
    icon: "account_tree",
    description: "22 Repositories • Open Source",
    color: "#8B5CF6",
  },
];

const companies = [
  { name: "Ravulapati TecHub", role: "Junior Software Developer" },
  { name: "ImpactSuite.AI", role: "Product Engineering" },
  { name: "C-DAC Hyderabad", role: "PG-DAC Graduate" },
  { name: "FUEL Pune", role: "Java Intern" },
  { name: "Zidio Development", role: "Web Dev Intern" },
];

const techStackData = [
  {
    category: "Frontend",
    color: "#61DAFB",
    items: [
      { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
      { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
      { name: "React Native", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    ],
  },
  {
    category: "Backend & Frameworks",
    color: "#00e639",
    items: [
      { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
      { name: "Spring Boot", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" },
      { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
      { name: "FastAPI", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg" },
      { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
    ],
  },
  {
    category: "Databases & DevOps",
    color: "#5979ff",
    items: [
      { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
      { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
      { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
      { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
      { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
      { name: "Kubernetes", icon: "" },
    ],
  },
  {
    category: "AI & Automation",
    color: "#8B5CF6",
    items: [
      { name: "LangChain", icon: "" },
      { name: "OpenAI", icon: "" },
      { name: "Prompt Engineering", icon: "" },
      { name: "n8n", icon: "" },
    ],
  },
];

const experienceData = [
  {
    role: "Junior Software Developer",
    period: "Mar 2026 – Present",
    company: "Ravulapati TecHub Pvt. Ltd., Hyderabad, Telangana",
    points: [
      "Developed UI components and user flows for mobile and enterprise applications using React Native and modern frontend practices.",
      "Contributed to ImpactSuite AI, a multi-service platform for field-force automation, analytics, and enterprise workflows.",
      "Built and maintained backend services using Java, Spring Boot, Python, and FastAPI for authentication, business logic, REST APIs, and integrations.",
      "Resolved bugs, improved application performance, and optimized workflows to increase reliability, maintainability, and operational efficiency.",
    ],
  },
];

const internshipData = [
  {
    role: "Core Java Training & Intern",
    period: "Jan 2025 – Feb 2025",
    company: "Friends Union For Energising Lives (FUEL), Pune",
    points: [
      "Completed intensive Java training: built hands-on OOP projects covering inheritance, polymorphism, and collections.",
      "Enhanced soft skills, teamwork, and discipline through LinkedIn Learning and internship-based activities.",
    ],
  },
  {
    role: "Web Development Intern",
    period: "Sep 2024 – Oct 2024",
    company: "Zidio Development, Bengaluru",
    points: [
      "Designed and shipped user-facing interfaces for collaborative web projects using HTML, CSS, and JavaScript.",
      "Strengthened front-end development skills while contributing to key projects and building a strong foundation.",
    ],
  },
];

const educationData = [
  {
    degree: "PG-Diploma in Advanced Computing (DAC)",
    period: "Sep 2025 – Feb 2026",
    institution: "Center for Development in Advanced Computing (CDAC), Hyderabad",
    score: "Percentage: 65/100",
  },
  {
    degree: "B.E. in Electronics and Telecommunication Engineering",
    period: "Dec 2022 – Jun 2025",
    institution: "Kavayitri Bahinabai Chaudhari North Maharashtra University, Jalgaon",
    score: "CGPA: 8.37/10",
  },
  {
    degree: "Diploma in Computer Engineering",
    period: "Aug 2019 – Jun 2022",
    institution: "Maharashtra State Board of Technical Education, Mumbai",
    score: "Percentage: 79.26/100",
  },
];

const certifications = [
  "Anthropic Claude 101 – Received certification for Anthropic Claude 101",
  "Mastering Java + Spring Boot: REST APIs and Microservices – Udemy",
  "What Is Generative AI? – LinkedIn Learning",
  "Tata Imagination Challenge 2024 – Student Track, organized by- Tata Group",
  "SQL (Advanced) - HackerRank",
];

const achievements = [
  "Participated in Tata Imagination Challenge 2024 : Student Track, organized by Tata Group.",
  "Finalist in Smart India Hackathon (SSBT College): Contributed to an innovative full-stack solution.",
  "Active GitHub profile with multiple repositories: consistently contributing to open-source and personal projects.",
  "Built and deployed a full-stack portfolio website using React and Vercel for production hosting.",
];

const leadershipActivities = [
  "Coordinated and managed all activities of the Milestone Event 2024 during a Hackathon.",
  "Completed a 5-day Soft Skills Training program by Rubicon.",
  "Actively participated in college technical fests and coding competitions.",
  "Mentored junior students on Java fundamentals and project development best practices.",
];

/* ══════════════════════════════════════════
   COUNTER COMPONENT
   ══════════════════════════════════════════ */

function AnimatedCounter({ value, suffix = "", prefix = "" }: { value: number; suffix?: string; prefix?: string }) {
  const { count, started, start } = useCountUp(value, 2000);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          start();
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [start, started]);

  return (
    <span ref={ref}>
      {prefix}{count}{suffix}
    </span>
  );
}

/* ══════════════════════════════════════════
   HOME PAGE
   ══════════════════════════════════════════ */

export default function HomePage() {
  const [formStatus, setFormStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formRef.current) return;

    setFormStatus("sending");

    try {
      await emailjs.sendForm(
        "service_52i315w",
        "template_glsz9qg",
        formRef.current,
        "r5YQ21r9SnUwrcAyv"
      );
      setFormStatus("sent");
      formRef.current.reset();
      setTimeout(() => setFormStatus("idle"), 4000);
    } catch (error) {
      console.error("EmailJS Error:", error);
      setFormStatus("error");
      setTimeout(() => setFormStatus("idle"), 4000);
    }
  };

  return (
    <>
      {/* ═══════════════════════════════════════
          HERO SECTION
          ═══════════════════════════════════════ */}
      <section className="mt-16 px-5 md:px-8 py-16 md:py-24 flex flex-col lg:flex-row gap-12 max-w-container-max mx-auto items-center min-h-[calc(100vh-4rem)] relative overflow-hidden">
        {/* Gradient Mesh Background */}
        <div className="gradient-mesh">
          <div className="blob"></div>
          <div className="blob"></div>
          <div className="blob"></div>
        </div>

        <div className="flex-1 flex flex-col gap-6 relative z-10">
          <AnimatedSection delay={0}>
            <div className="flex flex-wrap items-center gap-3">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-secondary/5 dark:bg-secondary/10 border border-secondary/20 rounded-full w-fit">
                <span className="w-2 h-2 rounded-full bg-secondary animate-pulse-glow"></span>
                <span className="font-label-caps text-label-caps text-secondary dark:text-secondary-fixed-dim">
                  OPEN TO OPPORTUNITIES
                </span>
              </div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#8B5CF6]/5 dark:bg-[#8B5CF6]/10 border border-[#8B5CF6]/20 rounded-full w-fit">
                <span className="material-symbols-outlined text-[14px] text-[#8B5CF6]">account_tree</span>
                <span className="font-label-caps text-[10px] tracking-wider text-[#8B5CF6]">
                  22 REPOS • 7+ PROJECTS
                </span>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={150}>
            <h1 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-primary dark:text-primary-fixed max-w-3xl leading-tight">
              <span className="text-gradient">Software Developer</span>
              <br />
              <Typewriter
                words={["Java | Spring Boot", "Python | FastAPI", "React Native", "Full Stack Engineering"]}
                className="text-on-surface-variant dark:text-[#7a7d7e]"
              />
            </h1>
          </AnimatedSection>

          <AnimatedSection delay={300}>
            <p className="font-body-lg text-body-lg text-on-surface-variant dark:text-[#9a9d9e] max-w-2xl">
              Software Developer with experience in <strong className="text-primary dark:text-primary-fixed">Java, Spring Boot, Python, FastAPI, React Native, Next.js, REST APIs, PostgreSQL, Git, Docker, and Kubernetes</strong>.
              Skilled in backend development, API integration, debugging, performance optimization, authentication, and enterprise application development.
              Strong interest in full-stack development, automation, and building scalable solutions for product and business applications.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={450}>
            <div className="flex flex-wrap gap-4 pt-4">
              <Link href="/projects" className="btn-primary inline-flex items-center gap-2 group">
                <span className="material-symbols-outlined text-[18px] transition-transform group-hover:rotate-12">rocket_launch</span>
                View Projects
              </Link>
              <Link href="/about" className="btn-secondary inline-flex items-center gap-2">
                <span className="material-symbols-outlined text-[18px]">person</span>
                About Me
              </Link>
              <a
                href="/resume.pdf"
                download="Abhay Garodi - Resume.pdf"
                className="inline-flex items-center gap-2 text-[14px] font-medium text-on-surface-variant dark:text-[#9a9d9e] border border-outline-variant dark:border-[#3a3d3e] px-6 py-3 rounded-lg hover:bg-surface-container-low dark:hover:bg-[#1a1d1e] hover:text-primary dark:hover:text-primary-fixed transition-all duration-200 hover:border-secondary dark:hover:border-secondary-fixed-dim"
              >
                <span className="material-symbols-outlined text-[18px]">download</span>
                Resume
              </a>
            </div>
          </AnimatedSection>
        </div>

        {/* Code Terminal */}
        <AnimatedSection animation="fade-left" delay={300} className="flex-1 w-full relative z-10">
          <div className="w-full h-[380px] md:h-[420px] relative rounded-2xl overflow-hidden border border-outline-variant dark:border-[#2a2d2e] bg-[#0d0d0d] flex flex-col group glow-hover transition-all duration-500 shadow-2xl dark:shadow-[0_25px_60px_rgba(0,0,0,0.5)]">
            {/* Terminal Header */}
            <div className="flex items-center gap-2 px-4 py-3 border-b border-[#1a1a1a] bg-[#111111]">
              <span className="w-3 h-3 rounded-full bg-[#ff5f57]"></span>
              <span className="w-3 h-3 rounded-full bg-[#febc2e]"></span>
              <span className="w-3 h-3 rounded-full bg-[#28c840]"></span>
              <span className="font-code-sm text-[12px] text-[#666] ml-3">system_init.ts</span>
              <div className="ml-auto flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#28c840]"></span>
                <span className="font-code-sm text-[10px] text-[#28c840]">LIVE</span>
              </div>
            </div>
            {/* Terminal Content */}
            <pre className="font-code-sm text-code-sm p-5 relative z-10 flex-1 overflow-hidden opacity-80 group-hover:opacity-100 transition-opacity duration-500 text-[#e0e0e0]">
              <code>{`import { CoreSystem } from '@garodi/os';

const Architecture = new CoreSystem({
  nodes: 837,
  redundancy: true,
  protocols: ['HTTP/3', 'gRPC', 'WebSockets']
});

async function initializeCluster() {
  try {
    await Architecture.boot();
    console.log('System optimized for scale.');
  } catch (error) {
    Architecture.fallback();
  }
}`}</code>
            </pre>
            {/* Glow accent */}
            <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-secondary/5 to-transparent pointer-events-none"></div>
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-[#00e639]/5 rounded-full blur-3xl pointer-events-none group-hover:bg-[#00e639]/10 transition-all duration-700"></div>
          </div>
        </AnimatedSection>
      </section>

      {/* ═══════════════════════════════════════
          PROFESSIONAL SUMMARY
          ═══════════════════════════════════════ */}
      <AnimatedSection>
        <section className="px-5 md:px-8 py-16 max-w-container-max mx-auto">
          <div className="glass-card p-8 md:p-12">
            <span className="font-label-caps text-label-caps text-secondary dark:text-secondary-fixed-dim tracking-widest">PROFESSIONAL SUMMARY</span>
            <h2 className="font-headline-md text-headline-md text-primary dark:text-primary-fixed mt-2 mb-6">About Me</h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant dark:text-[#9a9d9e] leading-relaxed max-w-4xl">
              Software Developer with experience in <strong className="text-primary dark:text-primary-fixed">Java, Spring Boot, Python, FastAPI, React Native, Next.js, REST APIs, PostgreSQL, Git, Docker, and Kubernetes</strong>.
              Skilled in backend development, API integration, debugging, performance optimization, authentication, and enterprise application development.
              Strong interest in full-stack development, automation, and building scalable solutions for product and business applications in Hyderabad and Pune.
            </p>
          </div>
        </section>
      </AnimatedSection>

      {/* ═══════════════════════════════════════
          EXPERIENCE SECTION
          ═══════════════════════════════════════ */}
      <AnimatedSection>
        <section className="px-5 md:px-8 py-16 max-w-container-max mx-auto">
          <span className="font-label-caps text-label-caps text-secondary dark:text-secondary-fixed-dim tracking-widest">EXPERIENCE</span>
          <h2 className="font-headline-md text-headline-md text-primary dark:text-primary-fixed mt-2 mb-8">Where I've Worked</h2>
          <div className="flex flex-col gap-6">
            {experienceData.map((exp, i) => (
              <AnimatedSection key={exp.role} delay={i * 100}>
                <div className="glass-card p-6 md:p-8">
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 mb-2">
                    <h3 className="font-headline-sm text-headline-sm text-primary dark:text-primary-fixed">{exp.role}</h3>
                    <span className="font-code-sm text-[12px] text-on-surface-variant dark:text-[#7a7d7e] whitespace-nowrap">{exp.period}</span>
                  </div>
                  <p className="font-code-sm text-[13px] text-secondary dark:text-secondary-fixed-dim italic mb-4">{exp.company}</p>
                  <ul className="space-y-3">
                    {exp.points.map((point, j) => (
                      <li key={j} className="flex gap-3 text-[15px] leading-relaxed text-on-surface-variant dark:text-[#9a9d9e]">
                        <span className="material-symbols-outlined text-[18px] text-secondary dark:text-secondary-fixed-dim flex-shrink-0 mt-0.5">arrow_right</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </section>
      </AnimatedSection>

      {/* ═══════════════════════════════════════
          COMPANY MARQUEE
          ═══════════════════════════════════════ */}
      <AnimatedSection>
        <section className="border-y border-outline-variant dark:border-[#2a2d2e] bg-surface-container-lowest dark:bg-[#0a0a0a] py-8 overflow-hidden">
          <div className="max-w-container-max mx-auto px-5 md:px-8 mb-4">
            <span className="font-label-caps text-[10px] tracking-[0.2em] text-on-surface-variant dark:text-[#5a5d5e] uppercase">
              Trusted by & Built for
            </span>
          </div>
          <div className="relative overflow-hidden">
            <div className="marquee-track">
              {[...companies, ...companies].map((company, i) => (
                <div
                  key={`${company.name}-${i}`}
                  className="flex-shrink-0 flex items-center gap-3 px-6 py-3 rounded-xl border border-outline-variant/50 dark:border-[#2a2d2e]/50 bg-surface dark:bg-[#111314] hover:border-secondary/30 dark:hover:border-secondary-fixed-dim/30 transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-secondary/10 to-secondary/5 dark:from-secondary/20 dark:to-secondary/5 flex items-center justify-center border border-secondary/10">
                    <span className="font-display-lg-mobile text-[14px] font-bold text-primary dark:text-primary-fixed">
                      {company.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <div className="font-headline-sm text-[14px] font-semibold text-primary dark:text-primary-fixed whitespace-nowrap">{company.name}</div>
                    <div className="font-code-sm text-[10px] text-on-surface-variant dark:text-[#7a7d7e] whitespace-nowrap">{company.role}</div>
                  </div>
                </div>
              ))}
            </div>
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-surface-container-lowest dark:from-[#0a0a0a] to-transparent z-10 pointer-events-none"></div>
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-surface-container-lowest dark:from-[#0a0a0a] to-transparent z-10 pointer-events-none"></div>
          </div>
        </section>
      </AnimatedSection>

      {/* ═══════════════════════════════════════
          INTERNSHIPS
          ═══════════════════════════════════════ */}
      <AnimatedSection>
        <section className="px-5 md:px-8 py-16 max-w-container-max mx-auto">
          <span className="font-label-caps text-label-caps text-secondary dark:text-secondary-fixed-dim tracking-widest">INTERNSHIPS</span>
          <h2 className="font-headline-md text-headline-md text-primary dark:text-primary-fixed mt-2 mb-8">Training & Experience</h2>
          <div className="flex flex-col gap-6">
            {internshipData.map((intern, i) => (
              <AnimatedSection key={intern.role} delay={i * 100}>
                <div className="glass-card p-6 md:p-8">
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 mb-2">
                    <h3 className="font-headline-sm text-headline-sm text-primary dark:text-primary-fixed">{intern.role}</h3>
                    <span className="font-code-sm text-[12px] text-on-surface-variant dark:text-[#7a7d7e] whitespace-nowrap">{intern.period}</span>
                  </div>
                  <p className="font-code-sm text-[13px] text-secondary dark:text-secondary-fixed-dim italic mb-4">{intern.company}</p>
                  <ul className="space-y-3">
                    {intern.points.map((point, j) => (
                      <li key={j} className="flex gap-3 text-[15px] leading-relaxed text-on-surface-variant dark:text-[#9a9d9e]">
                        <span className="material-symbols-outlined text-[18px] text-secondary dark:text-secondary-fixed-dim flex-shrink-0 mt-0.5">arrow_right</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </section>
      </AnimatedSection>

      {/* ═══════════════════════════════════════
          EDUCATION
          ═══════════════════════════════════════ */}
      <AnimatedSection>
        <section className="px-5 md:px-8 py-16 max-w-container-max mx-auto">
          <span className="font-label-caps text-label-caps text-secondary dark:text-secondary-fixed-dim tracking-widest">EDUCATION</span>
          <h2 className="font-headline-md text-headline-md text-primary dark:text-primary-fixed mt-2 mb-8">Academic Background</h2>
          <div className="flex flex-col gap-4">
            {educationData.map((edu, i) => (
              <AnimatedSection key={edu.degree} delay={i * 100}>
                <div className="glass-card p-6 flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
                  <div>
                    <h3 className="font-headline-sm text-[16px] font-semibold text-primary dark:text-primary-fixed">{edu.degree}</h3>
                    <p className="font-code-sm text-[12px] text-secondary dark:text-secondary-fixed-dim mt-1">{edu.institution}</p>
                  </div>
                  <div className="text-right flex-shrink-0">
                    <span className="font-code-sm text-[12px] text-on-surface-variant dark:text-[#7a7d7e] block">{edu.period}</span>
                    <span className="font-label-caps text-[11px] text-secondary dark:text-secondary-fixed-dim tracking-wider mt-1 block">{edu.score}</span>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </section>
      </AnimatedSection>

      {/* ═══════════════════════════════════════
          IMPACT METRICS
          ═══════════════════════════════════════ */}
      <AnimatedSection>
        <section className="px-5 md:px-8 py-16 max-w-container-max mx-auto">
          <div className="glass-card p-8 md:p-12">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
              {[
                { value: 7, suffix: "+", label: "Production Projects", icon: "rocket_launch", desc: "Shipped & Live" },
                { value: 22, suffix: "", label: "GitHub Repositories", icon: "account_tree", desc: "Open Source" },
                { value: 12, suffix: "+", label: "Technologies Mastered", icon: "memory", desc: "Full Stack" },
                { value: 3, suffix: "+", label: "Live Products", icon: "deployed_code", desc: "In Production" },
              ].map((metric) => (
                <div key={metric.label} className="flex flex-col items-center justify-center text-center gap-3 group">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-secondary/10 to-secondary/5 dark:from-secondary/15 dark:to-secondary/5 flex items-center justify-center border border-secondary/10 dark:border-secondary/20 group-hover:scale-110 transition-transform duration-300">
                    <span className="material-symbols-outlined text-[24px] text-secondary dark:text-secondary-fixed-dim">{metric.icon}</span>
                  </div>
                  <div>
                    <div className="font-display-lg text-display-lg text-primary dark:text-primary-fixed tracking-tighter">
                      <AnimatedCounter value={metric.value} suffix={metric.suffix} />
                    </div>
                    <div className="font-label-caps text-[10px] text-on-surface-variant dark:text-[#7a7d7e] uppercase tracking-[0.15em] mt-1">{metric.label}</div>
                    <div className="font-code-sm text-[10px] text-secondary/60 dark:text-secondary-fixed-dim/60 mt-0.5">{metric.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* ═══════════════════════════════════════
          FEATURED PROJECTS
          ═══════════════════════════════════════ */}
      <section className="px-5 md:px-8 py-16 md:py-24 max-w-container-max mx-auto">
        <AnimatedSection>
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 mb-12">
            <div>
              <span className="font-label-caps text-label-caps text-secondary dark:text-secondary-fixed-dim tracking-widest">FEATURED WORK</span>
              <h2 className="font-headline-md text-headline-md text-primary dark:text-primary-fixed mt-2">Selected Projects</h2>
              <p className="font-body-md text-[14px] text-on-surface-variant dark:text-[#7a7d7e] mt-1">Production-grade systems solving real-world problems</p>
            </div>
            <Link href="/projects" className="inline-flex items-center gap-2 text-[14px] font-medium text-on-surface-variant dark:text-[#9a9d9e] hover:text-primary dark:hover:text-primary-fixed transition-colors group">
              View all {projects.length} projects
              <span className="material-symbols-outlined text-[18px] transition-transform group-hover:translate-x-1">arrow_forward</span>
            </Link>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.slice(0, 4).map((project, i) => (
            <AnimatedSection key={project.slug} delay={i * 150} className={i === 0 ? "md:col-span-2" : ""}>
              <Link
                href={`/projects/${project.slug}`}
                className={`flex flex-col glass-card gradient-border-card p-6 md:p-8 group relative overflow-hidden h-full ${i === 0 ? "md:flex-row md:gap-8" : ""}`}
              >
                {i === 0 && (
                  <div className="featured-badge mb-4 md:mb-0 md:absolute md:top-6 md:right-6 z-10">
                    <span className="material-symbols-outlined text-[12px]">star</span>
                    FEATURED
                  </div>
                )}
                <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-secondary/5 to-transparent rounded-full -mr-16 -mt-16 pointer-events-none group-hover:from-secondary/10 transition-all duration-500"></div>
                <div className="flex-1 flex flex-col justify-between z-10">
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <h3 className={`${i === 0 ? "font-headline-md text-headline-md" : "font-headline-sm text-headline-sm"} text-primary dark:text-primary-fixed group-hover:text-secondary dark:group-hover:text-secondary-fixed-dim transition-colors`}>
                        {project.title}
                      </h3>
                      <div className="flex items-center gap-2">
                        <span className={`w-2 h-2 rounded-full ${project.status === "Live" ? "bg-secondary animate-pulse-glow" : project.status === "Stable" ? "bg-[#febc2e]" : "bg-outline"}`}></span>
                        <span className="font-code-sm text-[12px] text-on-surface-variant dark:text-[#7a7d7e]">{project.status}</span>
                      </div>
                    </div>
                    {project.subtitle && (
                      <p className="font-code-sm text-[12px] text-secondary dark:text-secondary-fixed-dim mb-2">{project.subtitle}</p>
                    )}
                    <p className="font-body-md text-body-md text-on-surface-variant dark:text-[#9a9d9e] mb-6 line-clamp-3">{project.description}</p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="tech-tag">{tag}</span>
                    ))}
                  </div>
                </div>
                <div className="mt-4 md:mt-0 flex items-center gap-1 text-on-surface-variant dark:text-[#7a7d7e] group-hover:text-secondary dark:group-hover:text-secondary-fixed-dim transition-colors self-end">
                  <span className="font-code-sm text-[13px]">Explore</span>
                  <span className="material-symbols-outlined text-[16px] transition-transform group-hover:translate-x-1">arrow_forward</span>
                </div>
              </Link>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════════
          TECHNICAL SKILLS (Resume-Style)
          ═══════════════════════════════════════ */}
      <AnimatedSection>
        <section className="px-5 md:px-8 py-16 max-w-container-max mx-auto">
          <div className="glass-card p-8 md:p-12">
            <span className="font-label-caps text-label-caps text-secondary dark:text-secondary-fixed-dim tracking-widest">TECHNICAL SKILLS</span>
            <h2 className="font-headline-md text-headline-md text-primary dark:text-primary-fixed mt-2 mb-8">Engineering Arsenal</h2>
            <div className="flex flex-col gap-4">
              <div className="flex flex-col sm:flex-row gap-2">
                <span className="font-code-sm text-[13px] text-secondary dark:text-secondary-fixed-dim font-semibold min-w-[200px]">Programming Languages:</span>
                <span className="font-body-md text-[14px] text-on-surface-variant dark:text-[#9a9d9e]">Java, Python, C, C++, C#, TypeScript, PHP, Shell Scripting</span>
              </div>
              <div className="flex flex-col sm:flex-row gap-2">
                <span className="font-code-sm text-[13px] text-secondary dark:text-secondary-fixed-dim font-semibold min-w-[200px]">Frontend & Web:</span>
                <span className="font-body-md text-[14px] text-on-surface-variant dark:text-[#9a9d9e]">React Native, Next.js, React.js, HTML5, CSS3, JavaScript, Bootstrap, jQuery, REST APIs</span>
              </div>
              <div className="flex flex-col sm:flex-row gap-2">
                <span className="font-code-sm text-[13px] text-secondary dark:text-secondary-fixed-dim font-semibold min-w-[200px]">Backend & Frameworks:</span>
                <span className="font-body-md text-[14px] text-on-surface-variant dark:text-[#9a9d9e]">Spring Boot, FastAPI, Microservices, RESTful APIs, Hibernate/JPA, JDBC, Spring Security, JWT</span>
              </div>
              <div className="flex flex-col sm:flex-row gap-2">
                <span className="font-code-sm text-[13px] text-secondary dark:text-secondary-fixed-dim font-semibold min-w-[200px]">Databases & DevOps:</span>
                <span className="font-body-md text-[14px] text-on-surface-variant dark:text-[#9a9d9e]">PostgreSQL, MySQL, Git, GitHub, Maven, Docker, Kubernetes, CI/CD, Postman</span>
              </div>
              <div className="flex flex-col sm:flex-row gap-2">
                <span className="font-code-sm text-[13px] text-secondary dark:text-secondary-fixed-dim font-semibold min-w-[200px]">Methodologies & Tools:</span>
                <span className="font-body-md text-[14px] text-on-surface-variant dark:text-[#9a9d9e]">Agile, Scrum, Jira, UML, SDLC, OOP, Design Patterns, JUnit, Selenium Basics</span>
              </div>
              <div className="flex flex-col sm:flex-row gap-2">
                <span className="font-code-sm text-[13px] text-secondary dark:text-secondary-fixed-dim font-semibold min-w-[200px]">AI & Automation:</span>
                <span className="font-body-md text-[14px] text-on-surface-variant dark:text-[#9a9d9e]">Prompt Engineering, LangChain, n8n, OpenAI API, Google Gemini, LLM Integration</span>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* ═══════════════════════════════════════
          CODING PROFILES
          ═══════════════════════════════════════ */}
      <AnimatedSection>
        <section className="px-5 md:px-8 py-16 max-w-container-max mx-auto">
          <div className="glass-card p-8 md:p-12">
            <span className="font-label-caps text-label-caps text-secondary dark:text-secondary-fixed-dim tracking-widest">COMPETITIVE CODING</span>
            <h2 className="font-headline-md text-headline-md text-primary dark:text-primary-fixed mt-2 mb-8">Coding Profiles</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {codingProfiles.map((profile, i) => (
                <AnimatedSection key={profile.name} delay={i * 100} animation="scale-in">
                  <a
                    href={profile.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center gap-3 p-6 rounded-2xl border border-outline-variant dark:border-[#2a2d2e] bg-surface/50 dark:bg-[#141617]/50 hover:border-secondary dark:hover:border-secondary-fixed-dim hover:shadow-lg transition-all duration-300 group cursor-pointer h-full backdrop-blur-sm"
                  >
                    <div
                      className="w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg"
                      style={{ backgroundColor: `${profile.color}15`, border: `1px solid ${profile.color}30` }}
                    >
                      <span
                        className="material-symbols-outlined text-[24px] transition-colors"
                        style={{ color: profile.color }}
                      >
                        {profile.icon}
                      </span>
                    </div>
                    <span className="font-headline-sm text-[16px] font-semibold text-primary dark:text-primary-fixed text-center">
                      {profile.name}
                    </span>
                    <span className="font-code-sm text-[11px] text-on-surface-variant dark:text-[#7a7d7e] text-center">
                      {profile.description}
                    </span>
                    <span className="material-symbols-outlined text-[16px] text-on-surface-variant dark:text-[#5a5d5e] group-hover:text-secondary dark:group-hover:text-secondary-fixed-dim transition-all duration-300 group-hover:translate-y-[-2px]">
                      open_in_new
                    </span>
                  </a>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* ═══════════════════════════════════════
          TECH STACK GRID
          ═══════════════════════════════════════ */}
      <AnimatedSection>
        <section className="px-5 md:px-8 py-16 max-w-container-max mx-auto">
          <div className="mb-10">
            <span className="font-label-caps text-label-caps text-secondary dark:text-secondary-fixed-dim tracking-widest">ENGINEERING ARSENAL</span>
            <h2 className="font-headline-md text-headline-md text-primary dark:text-primary-fixed mt-2">Technologies I Build With</h2>
            <p className="font-body-md text-[14px] text-on-surface-variant dark:text-[#7a7d7e] mt-1">Battle-tested stack for production systems</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {techStackData.map((group, gi) => (
              <AnimatedSection key={group.category} delay={gi * 150} animation="scale-in">
                <div className="glass-card p-6 h-full">
                  <div className="flex items-center gap-3 mb-5">
                    <div
                      className="w-3 h-3 rounded-full"
                      style={{ backgroundColor: group.color, boxShadow: `0 0 12px ${group.color}40` }}
                    ></div>
                    <h3 className="font-headline-sm text-[16px] font-semibold text-primary dark:text-primary-fixed">{group.category}</h3>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {group.items.map((tech) => (
                      <div
                        key={tech.name}
                        className="flex items-center gap-3 p-3 rounded-xl border border-outline-variant/50 dark:border-[#2a2d2e]/50 bg-surface/30 dark:bg-[#0d0f10]/30 hover:border-secondary/40 dark:hover:border-secondary-fixed-dim/40 transition-all duration-300 group/tech cursor-default"
                      >
                        {tech.icon ? (
                          <img
                            src={tech.icon}
                            alt={tech.name}
                            className="w-6 h-6 group-hover/tech:scale-110 transition-transform duration-300"
                            loading="lazy"
                          />
                        ) : (
                          <span className="material-symbols-outlined text-[20px] text-secondary dark:text-secondary-fixed-dim group-hover/tech:scale-110 transition-transform duration-300">psychology</span>
                        )}
                        <span className="font-code-sm text-[12px] text-on-surface-variant dark:text-[#9a9d9e]">{tech.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </section>
      </AnimatedSection>

      {/* ═══════════════════════════════════════
          CERTIFICATIONS
          ═══════════════════════════════════════ */}
      <AnimatedSection>
        <section className="px-5 md:px-8 py-16 max-w-container-max mx-auto">
          <span className="font-label-caps text-label-caps text-secondary dark:text-secondary-fixed-dim tracking-widest">CERTIFICATIONS</span>
          <h2 className="font-headline-md text-headline-md text-primary dark:text-primary-fixed mt-2 mb-8">Professional Credentials</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {certifications.map((cert, i) => (
              <AnimatedSection key={i} delay={i * 80} animation="scale-in">
                <div className="glass-card p-5 flex items-center gap-3">
                  <span className="material-symbols-outlined text-[20px] text-secondary dark:text-secondary-fixed-dim flex-shrink-0">workspace_premium</span>
                  <span className="font-body-md text-[14px] text-on-surface-variant dark:text-[#9a9d9e]">{cert}</span>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </section>
      </AnimatedSection>

      {/* ═══════════════════════════════════════
          ACHIEVEMENTS
          ═══════════════════════════════════════ */}
      <AnimatedSection>
        <section className="px-5 md:px-8 py-16 max-w-container-max mx-auto">
          <span className="font-label-caps text-label-caps text-secondary dark:text-secondary-fixed-dim tracking-widest">ACHIEVEMENTS</span>
          <h2 className="font-headline-md text-headline-md text-primary dark:text-primary-fixed mt-2 mb-8">Key Milestones</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {achievements.map((ach, i) => (
              <AnimatedSection key={i} delay={i * 100} animation="scale-in">
                <div className="glass-card p-5 flex items-start gap-3">
                  <span className="material-symbols-outlined text-[20px] text-secondary dark:text-secondary-fixed-dim flex-shrink-0 mt-0.5">emoji_events</span>
                  <span className="font-body-md text-[14px] text-on-surface-variant dark:text-[#9a9d9e] leading-relaxed">{ach}</span>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </section>
      </AnimatedSection>

      {/* ═══════════════════════════════════════
          LEADERSHIP & EXTRACURRICULAR
          ═══════════════════════════════════════ */}
      <AnimatedSection>
        <section className="px-5 md:px-8 py-16 max-w-container-max mx-auto">
          <span className="font-label-caps text-label-caps text-secondary dark:text-secondary-fixed-dim tracking-widest">LEADERSHIP & EXTRACURRICULAR</span>
          <h2 className="font-headline-md text-headline-md text-primary dark:text-primary-fixed mt-2 mb-8">Beyond Code</h2>
          <div className="glass-card p-6 md:p-8">
            <ul className="space-y-4">
              {leadershipActivities.map((act, i) => (
                <AnimatedSection key={i} delay={i * 80}>
                  <li className="flex gap-3 text-[15px] leading-relaxed text-on-surface-variant dark:text-[#9a9d9e]">
                    <span className="material-symbols-outlined text-[18px] text-secondary dark:text-secondary-fixed-dim flex-shrink-0 mt-0.5">arrow_right</span>
                    <span>{act}</span>
                  </li>
                </AnimatedSection>
              ))}
            </ul>
          </div>
        </section>
      </AnimatedSection>

      {/* ═══════════════════════════════════════
          WHAT I BRING — Value Propositions
          ═══════════════════════════════════════ */}
      <AnimatedSection>
        <section className="px-5 md:px-8 py-16 max-w-container-max mx-auto">
          <div className="text-center mb-12">
            <span className="font-label-caps text-label-caps text-secondary dark:text-secondary-fixed-dim tracking-widest">WHY HIRE ME</span>
            <h2 className="font-headline-md text-headline-md text-primary dark:text-primary-fixed mt-2">What I Bring to Your Team</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: "architecture",
                title: "System Design",
                desc: "Microservices, REST APIs, and scalable architectures with Spring Boot & FastAPI.",
                color: "#00e639",
              },
              {
                icon: "code",
                title: "Clean Code",
                desc: "Production-grade code following SOLID principles, design patterns, and comprehensive testing.",
                color: "#5979ff",
              },
              {
                icon: "psychology",
                title: "AI Integration",
                desc: "RAG pipelines, LangChain, document grounding, and intelligent automation tools.",
                color: "#8B5CF6",
              },
              {
                icon: "groups",
                title: "Team Player",
                desc: "Agile workflows, code reviews, mentoring juniors, and cross-functional collaboration.",
                color: "#FFA116",
              },
            ].map((prop, i) => (
              <AnimatedSection key={prop.title} delay={i * 100} animation="scale-in">
                <div className="value-card h-full">
                  <div className="icon-wrapper" style={{ background: `linear-gradient(135deg, ${prop.color}15, ${prop.color}05)`, borderColor: `${prop.color}25` }}>
                    <span className="material-symbols-outlined text-[24px]" style={{ color: prop.color }}>{prop.icon}</span>
                  </div>
                  <h3 className="font-headline-sm text-[18px] font-semibold text-primary dark:text-primary-fixed">{prop.title}</h3>
                  <p className="font-body-md text-[14px] text-on-surface-variant dark:text-[#9a9d9e] leading-relaxed">{prop.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </section>
      </AnimatedSection>

      {/* ═══════════════════════════════════════
          CONTACT SECTION
          ═══════════════════════════════════════ */}
      <section id="contact" className="px-5 md:px-8 py-16 md:py-24 max-w-container-max mx-auto relative">
        <AnimatedSection>
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-secondary/5 dark:bg-secondary/10 border border-secondary/20 rounded-full mb-4">
              <span className="w-2 h-2 rounded-full bg-secondary animate-pulse-glow"></span>
              <span className="font-label-caps text-[10px] tracking-[0.15em] text-secondary dark:text-secondary-fixed-dim">ACTIVELY LOOKING FOR OPPORTUNITIES</span>
            </div>
            <h2 className="font-headline-md text-headline-md md:font-display-lg-mobile md:text-display-lg-mobile text-primary dark:text-primary-fixed mt-2">Let's Build Something Together</h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant dark:text-[#9a9d9e] mt-4 max-w-xl mx-auto">
              Have a project in mind or want to collaborate? I'd love to hear from you.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Contact Info Cards */}
          <AnimatedSection animation="fade-right" delay={100}>
            <div className="flex flex-col gap-4">
              {[
                { icon: "mail", label: "Email", value: "abhayhgarodi365@gmail.com", href: "mailto:abhayhgarodi365@gmail.com" },
                { icon: "call", label: "Phone", value: "+91 9552281892", href: "tel:+919552281892" },
                { icon: "code", label: "GitHub", value: "github.com/abhaygarodi", href: "https://github.com/abhaygarodi" },
                { icon: "group", label: "LinkedIn", value: "linkedin.com/in/abhaygarodi", href: "https://linkedin.com/in/abhaygarodi" },
              ].map((item) => (
                <a key={item.label} href={item.href} target={item.href.startsWith("http") ? "_blank" : undefined} rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="glass-card p-5 flex items-center gap-4 group">
                  <div className="w-11 h-11 rounded-xl bg-secondary/10 dark:bg-secondary/15 flex items-center justify-center group-hover:bg-secondary/20 group-hover:scale-110 transition-all duration-300">
                    <span className="material-symbols-outlined text-[20px] text-secondary dark:text-secondary-fixed-dim">{item.icon}</span>
                  </div>
                  <div>
                    <div className="font-label-caps text-[10px] text-on-surface-variant dark:text-[#7a7d7e] tracking-widest">{item.label}</div>
                    <div className="font-body-md text-[14px] text-primary dark:text-primary-fixed mt-0.5">{item.value}</div>
                  </div>
                </a>
              ))}
            </div>
          </AnimatedSection>

          {/* Contact Form */}
          <AnimatedSection animation="fade-left" delay={200}>
            <form ref={formRef} onSubmit={handleSubmit} className="glass-card p-6 md:p-8 flex flex-col gap-5">
              <div>
                <label htmlFor="name" className="font-label-caps text-[11px] tracking-widest text-on-surface-variant dark:text-[#9a9d9e] mb-1.5 block">YOUR NAME</label>
                <input type="text" id="name" name="name" required placeholder="John Doe"
                  className="w-full px-4 py-3 rounded-xl border border-outline-variant dark:border-[#2a2d2e] bg-surface-container-low/50 dark:bg-[#0d0f10]/50 text-primary dark:text-primary-fixed font-body-md text-[14px] focus:border-secondary dark:focus:border-secondary-fixed-dim focus:outline-none transition-all duration-300 placeholder:text-on-surface-variant/50 dark:placeholder:text-[#5a5d5e] backdrop-blur-sm" />
              </div>
              <div>
                <label htmlFor="email" className="font-label-caps text-[11px] tracking-widest text-on-surface-variant dark:text-[#9a9d9e] mb-1.5 block">YOUR EMAIL</label>
                <input type="email" id="email" name="email" required placeholder="john@example.com"
                  className="w-full px-4 py-3 rounded-xl border border-outline-variant dark:border-[#2a2d2e] bg-surface-container-low/50 dark:bg-[#0d0f10]/50 text-primary dark:text-primary-fixed font-body-md text-[14px] focus:border-secondary dark:focus:border-secondary-fixed-dim focus:outline-none transition-all duration-300 placeholder:text-on-surface-variant/50 dark:placeholder:text-[#5a5d5e] backdrop-blur-sm" />
              </div>
              <div>
                <label htmlFor="message" className="font-label-caps text-[11px] tracking-widest text-on-surface-variant dark:text-[#9a9d9e] mb-1.5 block">MESSAGE</label>
                <textarea id="message" name="message" required rows={4} placeholder="Tell me about your project..."
                  className="w-full px-4 py-3 rounded-xl border border-outline-variant dark:border-[#2a2d2e] bg-surface-container-low/50 dark:bg-[#0d0f10]/50 text-primary dark:text-primary-fixed font-body-md text-[14px] focus:border-secondary dark:focus:border-secondary-fixed-dim focus:outline-none transition-all duration-300 resize-none placeholder:text-on-surface-variant/50 dark:placeholder:text-[#5a5d5e] backdrop-blur-sm" />
              </div>
              <button
                type="submit"
                disabled={formStatus === "sending"}
                className={`btn-primary w-full flex items-center justify-center gap-2 transition-all duration-300 ${
                  formStatus === "sent" ? "!bg-green-600 !border-green-600" :
                  formStatus === "error" ? "!bg-red-600 !border-red-600" :
                  formStatus === "sending" ? "opacity-80 cursor-wait" : ""
                }`}
              >
                <span className="material-symbols-outlined text-[18px]">
                  {formStatus === "sending" ? "hourglass_empty" :
                   formStatus === "sent" ? "check_circle" :
                   formStatus === "error" ? "error" : "send"}
                </span>
                {formStatus === "sending" ? "Sending..." :
                 formStatus === "sent" ? "Message Sent Successfully!" :
                 formStatus === "error" ? "Failed to Send. Try Again." : "Send Message"}
              </button>
            </form>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}