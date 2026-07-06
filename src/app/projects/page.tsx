"use client";

import Link from "next/link";
import { projects } from "@/lib/projects";
import AnimatedSection from "@/components/AnimatedSection";

function StatusBadge({ status }: { status: string }) {
  const colors: Record<string, string> = {
    Live: "bg-secondary",
    Stable: "bg-[#febc2e]",
    Archived: "bg-outline dark:bg-[#5a5d5e]",
  };
  return (
    <div className="flex items-center gap-2">
      <span className={`w-2 h-2 rounded-full ${colors[status] || "bg-outline"}`}></span>
      <span className="font-code-sm text-[12px] text-on-surface-variant dark:text-[#7a7d7e]">{status}</span>
    </div>
  );
}

export default function ProjectsPage() {
  return (
    <div className="pt-20 lg:pt-0 min-h-screen flex flex-col">
      <div className="flex-1 px-5 md:px-8 py-12 md:py-24 max-w-container-max mx-auto w-full">
        {/* Page Header */}
        <AnimatedSection>
          <header className="mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-secondary/5 dark:bg-secondary/10 border border-secondary/20 rounded-full mb-6">
              <span className="w-2 h-2 rounded-full bg-secondary animate-pulse-glow"></span>
              <span className="font-label-caps text-label-caps text-secondary dark:text-secondary-fixed-dim">
                {projects.length} PROJECTS
              </span>
            </div>
            <h1 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-primary dark:text-primary-fixed mb-4 tracking-tight">
              Projects & Work
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant dark:text-[#9a9d9e] max-w-2xl">
              A curated gallery of engineered solutions — microservices, full-stack applications, and robust architectures designed for scalability.
            </p>
          </header>
        </AnimatedSection>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Featured Project */}
          {projects.slice(0, 1).map((project) => (
            <AnimatedSection key={project.slug} className="col-span-1 lg:col-span-2">
              <Link
                href={`/projects/${project.slug}`}
                className="flex flex-col md:flex-row gap-8 card p-6 md:p-10 group relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-secondary/5 to-transparent rounded-full -mr-20 -mt-20 pointer-events-none group-hover:from-secondary/10 transition-all duration-500"></div>
                <div className="flex-1 flex flex-col justify-between z-10">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <h2 className="font-headline-md text-headline-md text-primary dark:text-primary-fixed group-hover:text-secondary dark:group-hover:text-secondary-fixed-dim transition-colors">{project.title}</h2>
                      <StatusBadge status={project.status} />
                    </div>
                    <p className="font-body-md text-body-md text-on-surface-variant dark:text-[#9a9d9e] mb-6 leading-relaxed">{project.description}</p>
                  </div>
                  <div className="space-y-5">
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span key={tag} className="tech-tag">{tag}</span>
                      ))}
                    </div>
                    {project.metrics && (
                      <div className="flex flex-wrap gap-6 border-t border-outline-variant dark:border-[#2a2d2e] pt-5">
                        {project.metrics.map((m) => (
                          <div key={m.label} className="text-center">
                            <div className="font-headline-sm text-[20px] font-bold text-primary dark:text-primary-fixed">{m.value}</div>
                            <div className="font-label-caps text-[10px] text-on-surface-variant dark:text-[#7a7d7e] tracking-widest">{m.label}</div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
                <div className="flex items-center gap-1 text-on-surface-variant dark:text-[#7a7d7e] group-hover:text-secondary dark:group-hover:text-secondary-fixed-dim transition-colors self-end">
                  <span className="font-code-sm text-[13px]">Case Study</span>
                  <span className="material-symbols-outlined text-[16px] transition-transform group-hover:translate-x-1">arrow_forward</span>
                </div>
              </Link>
            </AnimatedSection>
          ))}

          {/* Other Projects */}
          {projects.slice(1).map((project, i) => (
            <AnimatedSection key={project.slug} delay={i * 150}>
              <Link
                href={`/projects/${project.slug}`}
                className="flex flex-col justify-between card p-6 group relative overflow-hidden h-full"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-secondary/5 to-transparent rounded-full -mr-10 -mt-10 pointer-events-none group-hover:from-secondary/10 transition-all duration-500"></div>
                <div className="z-10">
                  <div className="flex items-center justify-between mb-3">
                    <h2 className="font-headline-sm text-headline-sm text-primary dark:text-primary-fixed group-hover:text-secondary dark:group-hover:text-secondary-fixed-dim transition-colors">{project.title}</h2>
                    <StatusBadge status={project.status} />
                  </div>
                  <p className="font-body-md text-body-md text-on-surface-variant dark:text-[#9a9d9e] mb-6">{project.description}</p>
                </div>
                <div className="z-10">
                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.tags.map((tag) => (
                      <span key={tag} className="tech-tag">{tag}</span>
                    ))}
                  </div>
                  <div className="flex items-center gap-1 text-on-surface-variant dark:text-[#7a7d7e] group-hover:text-secondary dark:group-hover:text-secondary-fixed-dim transition-colors border-t border-outline-variant dark:border-[#2a2d2e] pt-4">
                    <span className="font-code-sm text-[13px]">Explore</span>
                    <span className="material-symbols-outlined text-[16px] transition-transform group-hover:translate-x-1">arrow_forward</span>
                  </div>
                </div>
              </Link>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </div>
  );
}