"use client";

import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";
import Typewriter from "@/components/Typewriter";
import { projects } from "@/lib/projects";
import { useState } from "react";

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

export default function HomePage() {
  const [formStatus, setFormStatus] = useState<"idle" | "sent">("idle");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const name = (form.elements.namedItem("name") as HTMLInputElement).value;
    const email = (form.elements.namedItem("email") as HTMLInputElement).value;
    const message = (form.elements.namedItem("message") as HTMLTextAreaElement).value;
    const mailtoLink = `mailto:abhayhgarodi365@gmail.com?subject=Portfolio Contact from ${encodeURIComponent(name)}&body=${encodeURIComponent(`From: ${name}\nEmail: ${email}\n\n${message}`)}`;
    window.location.href = mailtoLink;
    setFormStatus("sent");
    form.reset();
    setTimeout(() => setFormStatus("idle"), 3000);
  };

  return (
    <>
      {/* Hero Section */}
      <section className="mt-16 px-5 md:px-8 py-16 md:py-24 flex flex-col lg:flex-row gap-12 max-w-container-max mx-auto items-center min-h-[calc(100vh-4rem)]">
        <div className="flex-1 flex flex-col gap-6">
          <AnimatedSection delay={0}>
            <div className="flex flex-wrap items-center gap-3">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-secondary/5 dark:bg-secondary/10 border border-secondary/20 rounded-full w-fit">
                <span className="w-2 h-2 rounded-full bg-secondary animate-pulse-glow"></span>
                <span className="font-label-caps text-label-caps text-secondary dark:text-secondary-fixed-dim">
                  SOFTWARE DEVELOPER
                </span>
              </div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#8B5CF6]/5 dark:bg-[#8B5CF6]/10 border border-[#8B5CF6]/20 rounded-full w-fit">
                <span className="material-symbols-outlined text-[14px] text-[#8B5CF6]">account_tree</span>
                <span className="font-label-caps text-[10px] tracking-wider text-[#8B5CF6]">
                  22 REPOS • 4+ STARS
                </span>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={150}>
            <h1 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-primary dark:text-primary-fixed max-w-3xl leading-tight">
              Engineering{" "}
              <Typewriter
                words={["Robust Backend APIs", "Mobile Interfaces", "AI Workflows", "Scalable Systems"]}
                className="text-on-surface-variant dark:text-[#7a7d7e]"
              />
              <br />
              Systems Architecture.
            </h1>
          </AnimatedSection>

          <AnimatedSection delay={300}>
            <p className="font-body-lg text-body-lg text-on-surface-variant dark:text-[#9a9d9e] max-w-2xl">
              Software Developer at <strong className="text-primary dark:text-primary-fixed">Ravulapati TecHub</strong>, building{" "}
              <strong className="text-secondary dark:text-secondary-fixed-dim">ImpactSuite.AI</strong>. Specialized in full-stack engineering,
              React Native, FastAPI + Next.js applications, and building document-grounded AI tools.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={450}>
            <div className="flex flex-wrap gap-4 pt-4">
              <Link href="/projects" className="btn-primary inline-flex items-center gap-2">
                <span className="material-symbols-outlined text-[18px]">rocket_launch</span>
                View Projects
              </Link>
              <Link href="/about" className="btn-secondary inline-flex items-center gap-2">
                <span className="material-symbols-outlined text-[18px]">person</span>
                About Me
              </Link>
              <a
                href="/resume.pdf"
                className="inline-flex items-center gap-2 text-[14px] font-medium text-on-surface-variant dark:text-[#9a9d9e] border border-outline-variant dark:border-[#3a3d3e] px-6 py-3 rounded-lg hover:bg-surface-container-low dark:hover:bg-[#1a1d1e] hover:text-primary dark:hover:text-primary-fixed transition-all duration-200"
              >
                <span className="material-symbols-outlined text-[18px]">download</span>
                Resume
              </a>
            </div>
          </AnimatedSection>
        </div>

        {/* Code Terminal */}
        <AnimatedSection animation="fade-left" delay={300} className="flex-1 w-full">
          <div className="w-full h-[380px] md:h-[420px] relative rounded-xl overflow-hidden border border-outline-variant dark:border-[#2a2d2e] bg-[#0d0d0d] flex flex-col group glow-hover transition-all duration-500">
            {/* Terminal Header */}
            <div className="flex items-center gap-2 px-4 py-3 border-b border-[#1a1a1a] bg-[#111111]">
              <span className="w-3 h-3 rounded-full bg-[#ff5f57]"></span>
              <span className="w-3 h-3 rounded-full bg-[#febc2e]"></span>
              <span className="w-3 h-3 rounded-full bg-[#28c840]"></span>
              <span className="font-code-sm text-[12px] text-[#666] ml-3">system_init.ts</span>
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
          </div>
        </AnimatedSection>
      </section>

      {/* Impact Metrics */}
      <AnimatedSection>
        <section className="border-y border-outline-variant dark:border-[#2a2d2e] bg-surface-container-lowest dark:bg-[#0a0a0a]">
          <div className="max-w-container-max mx-auto px-5 md:px-8 py-10 grid grid-cols-2 sm:grid-cols-4 gap-8">
            {[
              { value: "8.37/10", label: "B.E. CGPA", icon: "school" },
              { value: "65/100", label: "PG-DAC (C-DAC) Score", icon: "workspace_premium" },
              { value: "7+", label: "Projects Built", icon: "rocket_launch" },
              { value: "22", label: "GitHub Repositories", icon: "account_tree" },
            ].map((metric) => (
              <div key={metric.label} className="flex flex-col items-center justify-center p-4 gap-2 text-center">
                <span className="material-symbols-outlined text-[28px] text-secondary dark:text-secondary-fixed-dim mb-1">{metric.icon}</span>
                <span className="font-display-lg text-display-lg text-primary dark:text-primary-fixed tracking-tighter">{metric.value}</span>
                <span className="font-label-caps text-label-caps text-on-surface-variant dark:text-[#7a7d7e] uppercase tracking-widest">{metric.label}</span>
              </div>
            ))}
          </div>
        </section>
      </AnimatedSection>

      {/* Featured Projects */}
      <section className="px-5 md:px-8 py-16 md:py-24 max-w-container-max mx-auto">
        <AnimatedSection>
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 mb-12">
            <div>
              <span className="font-label-caps text-label-caps text-secondary dark:text-secondary-fixed-dim tracking-widest">FEATURED WORK</span>
              <h2 className="font-headline-md text-headline-md text-primary dark:text-primary-fixed mt-2">Selected Projects</h2>
            </div>
            <Link href="/projects" className="inline-flex items-center gap-2 text-[14px] font-medium text-on-surface-variant dark:text-[#9a9d9e] hover:text-primary dark:hover:text-primary-fixed transition-colors">
              View all {projects.length} projects
              <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
            </Link>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.slice(0, 4).map((project, i) => (
            <AnimatedSection key={project.slug} delay={i * 150} className={i === 0 ? "md:col-span-2" : ""}>
              <Link
                href={`/projects/${project.slug}`}
                className={`flex flex-col card p-6 md:p-8 group relative overflow-hidden h-full ${i === 0 ? "md:flex-row md:gap-8" : ""}`}
              >
                <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl from-secondary/5 to-transparent rounded-full -mr-12 -mt-12 pointer-events-none group-hover:from-secondary/10 transition-all duration-500"></div>
                <div className="flex-1 flex flex-col justify-between z-10">
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <h3 className={`${i === 0 ? "font-headline-md text-headline-md" : "font-headline-sm text-headline-sm"} text-primary dark:text-primary-fixed group-hover:text-secondary dark:group-hover:text-secondary-fixed-dim transition-colors`}>
                        {project.title}
                      </h3>
                      <div className="flex items-center gap-2">
                        <span className={`w-2 h-2 rounded-full ${project.status === "Live" ? "bg-secondary" : project.status === "Stable" ? "bg-[#febc2e]" : "bg-outline"}`}></span>
                        <span className="font-code-sm text-[12px] text-on-surface-variant dark:text-[#7a7d7e]">{project.status}</span>
                      </div>
                    </div>
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

      {/* Coding Profiles */}
      <AnimatedSection>
        <section className="px-5 md:px-8 py-16 max-w-container-max mx-auto">
          <div className="rounded-xl border border-outline-variant dark:border-[#2a2d2e] bg-surface-container-low dark:bg-[#0d0f10] p-8 md:p-12">
            <span className="font-label-caps text-label-caps text-secondary dark:text-secondary-fixed-dim tracking-widest">COMPETITIVE CODING</span>
            <h2 className="font-headline-md text-headline-md text-primary dark:text-primary-fixed mt-2 mb-8">Coding Profiles</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {codingProfiles.map((profile, i) => (
                <AnimatedSection key={profile.name} delay={i * 100} animation="scale-in">
                  <a
                    href={profile.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center gap-3 p-6 rounded-xl border border-outline-variant dark:border-[#2a2d2e] bg-surface dark:bg-[#141617] hover:border-secondary dark:hover:border-secondary-fixed-dim hover:shadow-lg transition-all duration-300 group cursor-pointer h-full"
                  >
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
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
                    <span className="material-symbols-outlined text-[16px] text-on-surface-variant dark:text-[#5a5d5e] group-hover:text-secondary dark:group-hover:text-secondary-fixed-dim transition-colors">
                      open_in_new
                    </span>
                  </a>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Tech Stack Preview */}
      <AnimatedSection>
        <section className="px-5 md:px-8 py-16 max-w-container-max mx-auto">
          <div className="rounded-xl border border-outline-variant dark:border-[#2a2d2e] bg-surface-container-low dark:bg-[#0d0f10] p-8 md:p-12">
            <span className="font-label-caps text-label-caps text-secondary dark:text-secondary-fixed-dim tracking-widest">TECH STACK</span>
            <h2 className="font-headline-md text-headline-md text-primary dark:text-primary-fixed mt-2 mb-8">Tools I Work With</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {["Java", "React", "Spring Boot", "TypeScript", "Python", "Docker", "PostgreSQL", "Node.js", "FastAPI", "MongoDB", "Git", "AWS"].map((tech, i) => (
                <AnimatedSection key={tech} delay={i * 50} animation="scale-in">
                  <div className="flex flex-col items-center gap-2 p-4 rounded-xl border border-outline-variant dark:border-[#2a2d2e] bg-surface dark:bg-[#141617] hover:border-secondary dark:hover:border-secondary-fixed-dim hover:shadow-md transition-all duration-300 group cursor-default">
                    <span className="material-symbols-outlined text-[24px] text-on-surface-variant dark:text-[#7a7d7e] group-hover:text-secondary dark:group-hover:text-secondary-fixed-dim transition-colors">
                      {tech === "Java" ? "coffee" : tech === "React" ? "web" : tech === "Spring Boot" ? "spa" : tech === "TypeScript" ? "code_blocks" : tech === "Python" ? "code" : tech === "Docker" ? "deployed_code" : tech === "PostgreSQL" ? "database" : tech === "Node.js" ? "terminal" : tech === "FastAPI" ? "bolt" : tech === "MongoDB" ? "storage" : tech === "Git" ? "account_tree" : "cloud"}
                    </span>
                    <span className="font-code-sm text-[12px] text-on-surface-variant dark:text-[#9a9d9e] text-center">{tech}</span>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Contact Section */}
      <section id="contact" className="px-5 md:px-8 py-16 md:py-24 max-w-container-max mx-auto">
        <AnimatedSection>
          <div className="text-center mb-12">
            <span className="font-label-caps text-label-caps text-secondary dark:text-secondary-fixed-dim tracking-widest">GET IN TOUCH</span>
            <h2 className="font-headline-md text-headline-md md:font-display-lg-mobile md:text-display-lg-mobile text-primary dark:text-primary-fixed mt-2">Let&apos;s Build Something Together</h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant dark:text-[#9a9d9e] mt-4 max-w-xl mx-auto">
              Have a project in mind or want to collaborate? I&apos;d love to hear from you.
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
                  className="card p-5 flex items-center gap-4 group glow-hover">
                  <div className="w-11 h-11 rounded-xl bg-secondary/10 dark:bg-secondary/15 flex items-center justify-center group-hover:bg-secondary/20 transition-colors">
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
            <form onSubmit={handleSubmit} className="card p-6 md:p-8 flex flex-col gap-5">
              <div>
                <label htmlFor="name" className="font-label-caps text-[11px] tracking-widest text-on-surface-variant dark:text-[#9a9d9e] mb-1.5 block">YOUR NAME</label>
                <input type="text" id="name" name="name" required placeholder="John Doe"
                  className="w-full px-4 py-3 rounded-lg border border-outline-variant dark:border-[#2a2d2e] bg-surface-container-low dark:bg-[#0d0f10] text-primary dark:text-primary-fixed font-body-md text-[14px] focus:border-secondary dark:focus:border-secondary-fixed-dim focus:outline-none transition-colors placeholder:text-on-surface-variant/50 dark:placeholder:text-[#5a5d5e]" />
              </div>
              <div>
                <label htmlFor="email" className="font-label-caps text-[11px] tracking-widest text-on-surface-variant dark:text-[#9a9d9e] mb-1.5 block">YOUR EMAIL</label>
                <input type="email" id="email" name="email" required placeholder="john@example.com"
                  className="w-full px-4 py-3 rounded-lg border border-outline-variant dark:border-[#2a2d2e] bg-surface-container-low dark:bg-[#0d0f10] text-primary dark:text-primary-fixed font-body-md text-[14px] focus:border-secondary dark:focus:border-secondary-fixed-dim focus:outline-none transition-colors placeholder:text-on-surface-variant/50 dark:placeholder:text-[#5a5d5e]" />
              </div>
              <div>
                <label htmlFor="message" className="font-label-caps text-[11px] tracking-widest text-on-surface-variant dark:text-[#9a9d9e] mb-1.5 block">MESSAGE</label>
                <textarea id="message" name="message" required rows={4} placeholder="Tell me about your project..."
                  className="w-full px-4 py-3 rounded-lg border border-outline-variant dark:border-[#2a2d2e] bg-surface-container-low dark:bg-[#0d0f10] text-primary dark:text-primary-fixed font-body-md text-[14px] focus:border-secondary dark:focus:border-secondary-fixed-dim focus:outline-none transition-colors resize-none placeholder:text-on-surface-variant/50 dark:placeholder:text-[#5a5d5e]" />
              </div>
              <button type="submit" className="btn-primary w-full flex items-center justify-center gap-2">
                <span className="material-symbols-outlined text-[18px]">send</span>
                {formStatus === "sent" ? "Message Opened!" : "Send Message"}
              </button>
            </form>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}