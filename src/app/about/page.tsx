"use client";

import Image from "next/image";
import AnimatedSection from "@/components/AnimatedSection";

const timeline = [
  {
    period: "Mar 2026 – Present",
    title: "Junior Software Developer",
    org: "Ravulapati TecHub Pvt. Ltd., Hyderabad — Building ImpactSuite.AI",
    description: "Developed UI components and user flows for mobile and enterprise applications using React Native and modern frontend practices. Contributed to ImpactSuite AI, a multi-service platform for field-force automation, analytics, and enterprise workflows. Built and maintained backend services using Java, Spring Boot, Python, and FastAPI for authentication, business logic, REST APIs, and integrations. Resolved bugs, improved application performance, and optimized workflows to increase reliability, maintainability, and operational efficiency.",
    active: true,
    type: "Work"
  },
  {
    period: "May 2026 – Present",
    title: "Shanmukha App & Portal",
    org: "Enterprise & Field-Force Operations",
    description: "Contributed to the development of the Shanmukha mobile application and portal for enterprise and field-force operations. Built and improved role-based user workflows, business modules, and responsive UI components across mobile and web interfaces. Integrated API-driven features for data handling, authentication, reporting, and user interaction in a scalable application environment.",
    active: true,
    type: "Project"
  },
  {
    period: "Sep 2025 – Feb 2026",
    title: "PG-Diploma in Advanced Computing (DAC)",
    org: "Center for Development in Advanced Computing (CDAC), Hyderabad",
    description: "Post Graduate Diploma focusing on advanced software development, enterprise frameworks, and architecture. Secured 65/100.",
    active: false,
    type: "Education"
  },
  {
    period: "Mar 2026 – May 2026",
    title: "AI Document Chat App",
    org: "PDF Q&A with Source Citations",
    description: "Built a full-stack AI-powered document chat application using FastAPI with LangChain for document processing, chunking, and RAG. Each response is grounded in the actual document content, providing page-level citations and verbatim quotes. The Next.js frontend provides a real-time chat interface with document upload and conversation history.",
    active: false,
    type: "Project"
  },
  {
    period: "Nov 2025 – Jan 2026",
    title: "Micro-Donation Platform",
    org: "School Fees & Medical Bills",
    description: "Developed a secure micro-donation platform enabling transparent contributions toward verified school fees and medical bills. Implemented role-based authentication and authorization using Spring Security with JWT. Designed RESTful backend services using Spring Boot and Hibernate/JPA. Built a responsive React frontend with routing and dashboard visualizations.",
    active: false,
    type: "Project"
  },
  {
    period: "Jan 2025 – Feb 2025",
    title: "Core Java Training & Intern",
    org: "Friends Union For Energising Lives (FUEL), Pune",
    description: "Completed intensive Java training: built hands-on OOP projects covering inheritance, polymorphism, and collections. Enhanced soft skills, teamwork, and discipline through LinkedIn Learning and internship-based activities.",
    active: false,
    type: "Internship"
  },
  {
    period: "Sep 2024 – Oct 2024",
    title: "Web Development Intern",
    org: "Zidio Development, Bengaluru",
    description: "Designed and shipped user-facing interfaces for collaborative web projects using HTML, CSS, and JavaScript. Strengthened front-end development skills while contributing to key projects and building a strong foundation.",
    active: false,
    type: "Internship"
  },
  {
    period: "Dec 2022 – Jun 2025",
    title: "B.E. in Electronics and Telecommunication Engineering",
    org: "SSBT's College of Engineering & Technology, Bambhori (KBC NMU, Jalgaon)",
    description: "Focused on signal processing, digital electronics, and communication protocols. Graduated with First Class with Distinction — CGPA of 8.37/10.",
    active: false,
    type: "Education"
  },
  {
    period: "Aug 2019 – Jun 2022",
    title: "Diploma in Computer Science Engineering",
    org: "Government Polytechnic, Jalna (MSBTE, Mumbai)",
    description: "Foundational computer engineering training covering data structures, OS, databases, and core OOP principles. First Class with Distinction — 79.26%.",
    active: false,
    type: "Education"
  }
];

const languages = [
  { name: "English", level: "Professional", icon: "translate" },
  { name: "Hindi", level: "Native", icon: "record_voice_over" },
  { name: "Marathi", level: "Native", icon: "record_voice_over" },
];

const techCategories = [
  {
    title: "Programming Languages",
    icon: "code",
    items: ["Java (SE8+)", "Python", "TypeScript", "C", "C++", "C#", "PHP", "Shell Scripting"]
  },
  {
    title: "Web & Backend Technologies",
    icon: "layers",
    items: ["React.js", "Spring Boot", "FastAPI", "React Native", "Servlets", "JSP", "JSTL", "HTML5", "CSS3", "AJAX", "JSON", "XML", "Bootstrap", "jQuery", ".Net MVC"]
  },
  {
    title: "Databases, Infra & Tools",
    icon: "database",
    items: ["MySQL", "MongoDB", "PostgreSQL", "Git", "GitHub", "CI/CD", "Maven", "Postman", "Linux", "VS Code", "Eclipse IDE", "Visual Studio", "MySQL Workbench"]
  },
  {
    title: "AI & Automation",
    icon: "psychology",
    items: ["Prompt Engineering", "LangChain", "n8n", "OpenAI API", "Google Gemini", "LLM Integration"]
  },
  {
    title: "Methodologies & Testing",
    icon: "fact_check",
    items: ["Agile", "Scrum", "Jira", "UML", "SDLC", "OOP", "Design Patterns", "JUnit", "Selenium (Basics)"]
  }
];

interface CertificationItem {
  title: string;
  org: string;
  icon: string;
  href?: string;
}

const certifications: CertificationItem[] = [
  {
    title: "Introduction to Claude Cowork",
    org: "Anthropic",
    icon: "workspace_premium",
    href: "/introduction-to-claude-cowork.pdf"
  },
  {
    title: "Mastering Java + Spring Boot: REST APIs and Microservices",
    org: "Udemy / ZK Tutorials",
    icon: "workspace_premium"
  },
  {
    title: "SQL (Advanced)",
    org: "HackerRank",
    icon: "verified"
  },
  {
    title: "AWS Certified Cloud Practitioner Prep",
    org: "LinkedIn Learning",
    icon: "cloud"
  },
  {
    title: "React.js: Using TypeScript",
    org: "LinkedIn Learning",
    icon: "code_blocks"
  },
  {
    title: "EF SET English Certificate (B2 Upper Intermediate)",
    org: "EF Standard English Test",
    icon: "translate"
  },
  {
    title: "Prompt Engineering for Everyone",
    org: "Cognitive Class",
    icon: "psychology"
  },
  {
    title: "Tailwind CSS 3 Essential Training",
    org: "LinkedIn Learning",
    icon: "web"
  },
  {
    title: "Cisco CCNA (200-301) Cert Prep",
    org: "LinkedIn Learning",
    icon: "settings_ethernet"
  },
  {
    title: "What Is Generative AI?",
    org: "LinkedIn Learning",
    icon: "psychology"
  },
  {
    title: "Learning Java 11",
    org: "LinkedIn Learning",
    icon: "coffee"
  },
  {
    title: "Tata Imagination Challenge 2024 — Student Track",
    org: "Tata Group",
    icon: "emoji_events"
  }
];

const achievements = [
  { title: "Inter-College Coding Marathon — 2nd Place", desc: "Won second place in an inter-college coding marathon, demonstrating competitive problem-solving skills.", icon: "emoji_events" },
  { title: "Tata Imagination Challenge 2024", desc: "Participated in the Student Track organized by Tata Group.", icon: "star" },
  { title: "Smart India Hackathon Finalist", desc: "Finalist at SSBT College; contributed to an innovative full-stack solution.", icon: "military_tech" },
  { title: "Workshop Conductor", desc: "Conducted academic workshops on Arduino, Python, and Web Development for fellow students.", icon: "school" },
  { title: "Active GitHub Contributor", desc: "22 repositories with consistent contributions to open-source and personal projects.", icon: "account_tree" },
  { title: "First Class with Distinction", desc: "Earned First Class with Distinction in both B.E. and Diploma programs.", icon: "workspace_premium" }
];

const activities = [
  "Conducted workshops on Arduino, Python, and Web Development for college students.",
  "Coordinated and managed all activities of the Milestone Event 2024 during a Hackathon.",
  "Completed a 5-day Soft Skills Training program by Rubicon.",
  "Actively participated in college technical fests and coding competitions.",
  "Mentored junior students on Java fundamentals and project development best practices.",
  "1,400+ LinkedIn followers with 500+ professional connections."
];

export default function AboutPage() {
  return (
    <div className="pt-24 md:pt-28 pb-24 max-w-container-max mx-auto px-5 md:px-8 relative overflow-hidden">
      {/* Background blobs */}
      <div className="gradient-mesh">
        <div className="blob"></div>
        <div className="blob"></div>
      </div>

      {/* Header with Photo */}
      <AnimatedSection>
        <section className="mb-16 md:mb-20 relative z-10">
          <div className="glass-card p-6 md:p-8 flex flex-col md:flex-row gap-8 md:gap-12 items-center md:items-start">
            {/* Profile Photo */}
            <div className="flex-shrink-0">
              <div className="relative w-40 h-40 md:w-48 md:h-48 rounded-2xl overflow-hidden border-2 border-outline-variant dark:border-[#2a2d2e] shadow-xl group">
                <Image
                  src="/images/abhay-garodi.jpg"
                  alt="Abhay Garodi — Software Developer"
                  fill
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
              </div>
            </div>
            {/* Text Content */}
            <div className="flex-1 text-center md:text-left">
              <span className="font-label-caps text-label-caps text-secondary dark:text-secondary-fixed-dim tracking-widest">ABOUT ME</span>
              <h1 className="font-display-lg-mobile text-display-lg-mobile md:font-display-lg md:text-display-lg text-primary dark:text-primary-fixed mt-2 mb-6 max-w-3xl leading-tight">
                System Configuration<br />
                <span className="text-gradient">& Identity Matrix</span>
              </h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant dark:text-[#9a9d9e] max-w-3xl">
                Software Developer at Ravulapati TecHub, building ImpactSuite.AI. Focused on robust back-end APIs, interactive front-ends, and integrating intelligent AI workloads.
              </p>
              <div className="flex flex-wrap justify-center md:justify-start gap-3 mt-6">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-secondary/5 dark:bg-secondary/10 border border-secondary/20 rounded-full">
                  <span className="material-symbols-outlined text-[14px] text-secondary dark:text-secondary-fixed-dim">location_on</span>
                  <span className="font-code-sm text-[11px] text-secondary dark:text-secondary-fixed-dim">Hyderabad, India</span>
                </div>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#0A66C2]/5 dark:bg-[#0A66C2]/10 border border-[#0A66C2]/20 rounded-full">
                  <span className="material-symbols-outlined text-[14px] text-[#0A66C2]">group</span>
                  <span className="font-code-sm text-[11px] text-[#0A66C2]">1,400+ LinkedIn Followers</span>
                </div>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#8B5CF6]/5 dark:bg-[#8B5CF6]/10 border border-[#8B5CF6]/20 rounded-full">
                  <span className="material-symbols-outlined text-[14px] text-[#8B5CF6]">account_tree</span>
                  <span className="font-code-sm text-[11px] text-[#8B5CF6]">500+ Connections</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 xl:grid-cols-12 gap-10 xl:gap-12 relative z-10">
        {/* Left Column: Timeline */}
        <div className="xl:col-span-6">
          <AnimatedSection>
            <h2 className="font-headline-md text-headline-md text-primary dark:text-primary-fixed mb-8 pb-4 border-b border-outline-variant dark:border-[#2a2d2e] flex items-center gap-3">
              <span className="material-symbols-outlined text-secondary dark:text-secondary-fixed-dim">history</span>
              Experience & Education
            </h2>
          </AnimatedSection>

          <div className="relative ml-4 pl-8 space-y-10 border-l border-outline-variant dark:border-[#2a2d2e]">
            {timeline.map((item, i) => (
              <AnimatedSection key={item.title} delay={i * 100}>
                <div className="relative">
                  <div className={`absolute -left-[37px] top-1 w-4 h-4 rounded-full border-2 ${item.active
                      ? "bg-secondary border-secondary/30 shadow-[0_0_10px_rgba(0,230,57,0.3)] animate-pulse-glow"
                      : "bg-surface dark:bg-[#141617] border-outline-variant dark:border-[#3a3d3e]"
                    }`}></div>
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <span className={`font-label-caps text-label-caps tracking-widest ${item.active ? "text-secondary dark:text-secondary-fixed-dim" : "text-outline dark:text-[#5a5d5e]"
                      }`}>
                      {item.period}
                    </span>
                    <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-surface-container border border-outline-variant dark:bg-[#1a1d1e] dark:border-[#2a2d2e] text-on-surface-variant dark:text-[#9a9d9e]">
                      {item.type}
                    </span>
                  </div>
                  <h3 className="font-headline-sm text-headline-sm text-primary dark:text-primary-fixed">{item.title}</h3>
                  <p className="font-code-sm text-[12px] text-secondary dark:text-secondary-fixed-dim mt-0.5">{item.org}</p>
                  <p className="font-body-md text-body-md text-on-surface-variant dark:text-[#9a9d9e] mt-2 leading-relaxed">{item.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>

        {/* Right Column: Tech Stack, Certifications & Achievements */}
        <div className="xl:col-span-6 flex flex-col gap-12">
          {/* Tech Stack */}
          <div>
            <AnimatedSection>
              <h2 className="font-headline-md text-headline-md text-primary dark:text-primary-fixed mb-8 pb-4 border-b border-outline-variant dark:border-[#2a2d2e] flex items-center gap-3">
                <span className="material-symbols-outlined text-secondary dark:text-secondary-fixed-dim">memory</span>
                Technical Stack
              </h2>
            </AnimatedSection>

            <div className="flex flex-col gap-4">
              {techCategories.map((cat, i) => (
                <AnimatedSection key={cat.title} delay={i * 100} animation="scale-in">
                  <div className="glass-card p-5">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="material-symbols-outlined text-[20px] text-secondary dark:text-secondary-fixed-dim">{cat.icon}</span>
                      <h3 className="font-headline-sm text-[16px] font-semibold text-primary dark:text-primary-fixed">{cat.title}</h3>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {cat.items.map((item) => (
                        <span key={item} className="tech-tag">{item}</span>
                      ))}
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <AnimatedSection>
              <h2 className="font-headline-md text-headline-md text-primary dark:text-primary-fixed mb-8 pb-4 border-b border-outline-variant dark:border-[#2a2d2e] flex items-center gap-3">
                <span className="material-symbols-outlined text-secondary dark:text-secondary-fixed-dim">workspace_premium</span>
                Certifications
              </h2>
            </AnimatedSection>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {certifications.map((cert, i) => {
                const CardWrapper = cert.href ? "a" : "div";
                const extraProps = cert.href ? {
                  href: cert.href,
                  target: "_blank",
                  rel: "noopener noreferrer",
                  className: "glass-card p-4 flex gap-3 h-full cursor-pointer hover:border-secondary dark:hover:border-secondary-fixed-dim"
                } : {
                  className: "glass-card p-4 flex gap-3 h-full"
                };
                return (
                  <AnimatedSection key={cert.title} delay={i * 100}>
                    <CardWrapper {...extraProps as any}>
                      <span className="material-symbols-outlined text-[20px] text-secondary dark:text-secondary-fixed-dim flex-shrink-0 mt-0.5">{cert.icon}</span>
                      <div className="flex-1">
                        <div className="flex items-start justify-between gap-1">
                          <h4 className="font-headline-sm text-[14px] font-semibold text-primary dark:text-primary-fixed leading-snug">{cert.title}</h4>
                          {cert.href && (
                            <span className="material-symbols-outlined text-[14px] text-on-surface-variant dark:text-[#7a7d7e] flex-shrink-0 mt-0.5">open_in_new</span>
                          )}
                        </div>
                        <p className="font-code-sm text-[11px] text-on-surface-variant dark:text-[#7a7d7e] mt-1">{cert.org}</p>
                      </div>
                    </CardWrapper>
                  </AnimatedSection>
                );
              })}
            </div>
          </div>

          {/* Achievements */}
          <div>
            <AnimatedSection>
              <h2 className="font-headline-md text-headline-md text-primary dark:text-primary-fixed mb-8 pb-4 border-b border-outline-variant dark:border-[#2a2d2e] flex items-center gap-3">
                <span className="material-symbols-outlined text-secondary dark:text-secondary-fixed-dim">military_tech</span>
                Achievements
              </h2>
            </AnimatedSection>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {achievements.map((ach, i) => (
                <AnimatedSection key={ach.title} delay={i * 100}>
                  <div className="glass-card p-4 flex gap-3 h-full">
                    <span className="material-symbols-outlined text-[20px] text-secondary dark:text-secondary-fixed-dim flex-shrink-0 mt-0.5">{ach.icon}</span>
                    <div>
                      <h4 className="font-headline-sm text-[14px] font-semibold text-primary dark:text-primary-fixed leading-snug">{ach.title}</h4>
                      <p className="font-body-md text-[12px] text-on-surface-variant dark:text-[#9a9d9e] mt-1">{ach.desc}</p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>

          {/* Leadership & Activities */}
          <div>
            <AnimatedSection>
              <h2 className="font-headline-md text-headline-md text-primary dark:text-primary-fixed mb-8 pb-4 border-b border-outline-variant dark:border-[#2a2d2e] flex items-center gap-3">
                <span className="material-symbols-outlined text-secondary dark:text-secondary-fixed-dim">groups</span>
                Leadership & Extracurriculars
              </h2>
            </AnimatedSection>

            <div className="glass-card p-5">
              <ul className="space-y-3">
                {activities.map((act, i) => (
                  <AnimatedSection key={i} delay={i * 50}>
                    <li className="flex gap-3 text-[14px] leading-relaxed text-on-surface-variant dark:text-[#9a9d9e]">
                      <span className="material-symbols-outlined text-[18px] text-secondary dark:text-secondary-fixed-dim flex-shrink-0 mt-0.5">arrow_right</span>
                      <span>{act}</span>
                    </li>
                  </AnimatedSection>
                ))}
              </ul>
            </div>
          </div>

          {/* Languages */}
          <div>
            <AnimatedSection>
              <h2 className="font-headline-md text-headline-md text-primary dark:text-primary-fixed mb-8 pb-4 border-b border-outline-variant dark:border-[#2a2d2e] flex items-center gap-3">
                <span className="material-symbols-outlined text-secondary dark:text-secondary-fixed-dim">translate</span>
                Languages
              </h2>
            </AnimatedSection>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {languages.map((lang, i) => (
                <AnimatedSection key={lang.name} delay={i * 100}>
                  <div className="glass-card p-5 text-center">
                    <span className="material-symbols-outlined text-[24px] text-secondary dark:text-secondary-fixed-dim mb-2">{lang.icon}</span>
                    <h4 className="font-headline-sm text-[16px] font-semibold text-primary dark:text-primary-fixed">{lang.name}</h4>
                    <p className="font-code-sm text-[11px] text-on-surface-variant dark:text-[#7a7d7e] mt-1">{lang.level}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}