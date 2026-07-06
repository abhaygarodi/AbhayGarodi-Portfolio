import { notFound } from "next/navigation";
import Link from "next/link";
import { projects } from "@/lib/projects";
import AnimatedSection from "@/components/AnimatedSection";

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default function ProjectCaseStudy({
  params,
}: {
  params: { slug: string };
}) {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  // Show a simplified view if no case study exists
  if (!project.caseStudy) {
    return (
      <div className="min-h-screen flex flex-col pt-20 relative overflow-hidden">
        {/* Background blobs */}
        <div className="gradient-mesh">
          <div className="blob"></div>
          <div className="blob"></div>
        </div>

        <main className="flex-1 w-full max-w-container-max mx-auto px-5 md:px-8 py-16 md:py-24 relative z-10">
          <AnimatedSection>
            <Link href="/projects" className="inline-flex items-center gap-2 font-code-sm text-[13px] text-on-surface-variant dark:text-[#7a7d7e] hover:text-secondary dark:hover:text-secondary-fixed-dim transition-colors mb-8 group">
              <span className="material-symbols-outlined text-[16px] transition-transform group-hover:-translate-x-1">arrow_back</span>
              Back to Projects
            </Link>
          </AnimatedSection>

          <div className="glass-card p-6 md:p-10">
            <AnimatedSection delay={100}>
              <h1 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-primary dark:text-primary-fixed mb-6">{project.title}</h1>
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <p className="font-body-lg text-body-lg text-on-surface-variant dark:text-[#9a9d9e] max-w-3xl mb-8 leading-relaxed">{project.description}</p>
            </AnimatedSection>

            <AnimatedSection delay={300}>
              <div className="flex flex-wrap gap-2 mb-8">
                {project.tags.map((tag) => (
                  <span key={tag} className="tech-tag">{tag}</span>
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection delay={400}>
              <div className="flex flex-wrap gap-4">
                {project.links.map((link) => (
                  <a key={link.label} href={link.href} className="btn-secondary inline-flex items-center gap-2" target="_blank" rel="noopener noreferrer">
                    {link.icon && <span className="material-symbols-outlined text-[18px] text-secondary dark:text-secondary-fixed-dim">{link.icon}</span>}
                    {link.label}
                  </a>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </main>
      </div>
    );
  }

  const { caseStudy } = project;

  return (
    <div className="min-h-screen flex flex-col pt-20 relative overflow-hidden">
      {/* Background blobs */}
      <div className="gradient-mesh">
        <div className="blob"></div>
        <div className="blob"></div>
      </div>

      <main className="flex-1 w-full max-w-container-max mx-auto px-5 md:px-8 py-16 md:py-24 relative z-10">
        {/* Back Link */}
        <AnimatedSection>
          <Link href="/projects" className="inline-flex items-center gap-2 font-code-sm text-[13px] text-on-surface-variant dark:text-[#7a7d7e] hover:text-secondary dark:hover:text-secondary-fixed-dim transition-colors mb-8 group">
            <span className="material-symbols-outlined text-[16px] transition-transform group-hover:-translate-x-1">arrow_back</span>
            Back to Projects
          </Link>
        </AnimatedSection>

        {/* Hero Section */}
        <AnimatedSection delay={100}>
          <section className="mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-secondary/5 dark:bg-secondary/10 border border-secondary/20 rounded-full mb-6">
              <span className="w-2 h-2 rounded-full bg-secondary animate-pulse-glow"></span>
              <span className="font-label-caps text-label-caps text-secondary dark:text-secondary-fixed-dim tracking-widest uppercase">{caseStudy.hero}</span>
            </div>
            <h1 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-primary dark:text-primary-fixed mb-8 leading-tight">{project.title}</h1>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              <div className="lg:col-span-8 font-body-lg text-body-lg text-on-surface-variant dark:text-[#9a9d9e]">
                <p className="mb-6 leading-relaxed">{project.longDescription}</p>
                <div className="flex flex-wrap gap-2 mt-6">
                  {project.techTags?.map((tag) => (
                    <span key={tag} className="tech-tag">{tag}</span>
                  ))}
                </div>
              </div>
              <div className="lg:col-span-4 glass-card p-6 h-fit">
                <h3 className="font-label-caps text-label-caps text-primary dark:text-primary-fixed mb-4 pb-2 border-b border-outline-variant/30 dark:border-[#2a2d2e]/30 tracking-widest text-[10px]">
                  PROJECT METRICS
                </h3>
                <ul className="space-y-4">
                  {project.metrics?.map((metric) => (
                    <li key={metric.label} className="flex justify-between items-center gap-4">
                      <span className="font-body-md text-[14px] text-on-surface-variant dark:text-[#9a9d9e]">{metric.label}</span>
                      <strong className="font-headline-sm text-[16px] text-primary dark:text-primary-fixed whitespace-nowrap">{metric.value}</strong>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
        </AnimatedSection>

        {/* Architecture Section */}
        <AnimatedSection>
          <section className="mb-20">
            <h2 className="font-headline-md text-headline-md text-primary dark:text-primary-fixed mb-8 pb-4 border-b border-outline-variant/30 dark:border-[#2a2d2e]/30 flex items-center gap-3">
              <span className="material-symbols-outlined text-secondary dark:text-secondary-fixed-dim">architecture</span>
              System Architecture
            </h2>
            <div className="space-y-6 font-body-md text-body-md text-on-surface-variant dark:text-[#9a9d9e]">
              <p className="leading-relaxed">{caseStudy.architectureDescription}</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                {caseStudy.architectureFeatures.map((feature, i) => (
                  <AnimatedSection key={i} delay={i * 100} animation="scale-in">
                    <div className="glass-card p-5 h-full">
                      <div className="w-8 h-8 rounded-lg bg-secondary/10 dark:bg-secondary/15 flex items-center justify-center mb-3">
                        <span className="font-headline-sm text-[14px] font-bold text-secondary dark:text-secondary-fixed-dim">{String(i + 1).padStart(2, "0")}</span>
                      </div>
                      <p className="text-[14px] leading-relaxed">{feature}</p>
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            </div>
          </section>
        </AnimatedSection>

        {/* Engineering Challenges */}
        <AnimatedSection>
          <section className="mb-20">
            <h2 className="font-headline-md text-headline-md text-primary dark:text-primary-fixed mb-8 pb-4 border-b border-outline-variant/30 dark:border-[#2a2d2e]/30 flex items-center gap-3">
              <span className="material-symbols-outlined text-secondary dark:text-secondary-fixed-dim">security</span>
              Engineering Challenges
            </h2>
            <div className="space-y-8">
              {caseStudy.challenges.map((challenge, i) => (
                <AnimatedSection key={i} delay={i * 150}>
                  <div className="glass-card p-6 md:p-8">
                    <h3 className="font-headline-sm text-headline-sm text-primary dark:text-primary-fixed mb-4 flex items-center gap-2">
                      <span className="w-8 h-8 rounded-lg bg-secondary/10 dark:bg-secondary/15 flex items-center justify-center flex-shrink-0">
                        <span className="material-symbols-outlined text-[18px] text-secondary dark:text-secondary-fixed-dim">bolt</span>
                      </span>
                      {challenge.title}
                    </h3>
                    <p className="font-body-md text-body-md text-on-surface-variant dark:text-[#9a9d9e] mb-6 leading-relaxed">{challenge.description}</p>
                    {challenge.code && (
                      <div className="code-block rounded-xl">
                        <pre className="overflow-x-auto"><code>{challenge.code}</code></pre>
                      </div>
                    )}
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </section>
        </AnimatedSection>

        {/* Results */}
        <AnimatedSection>
          <section className="mb-12">
            <h2 className="font-headline-md text-headline-md text-primary dark:text-primary-fixed mb-8 pb-4 border-b border-outline-variant/30 dark:border-[#2a2d2e]/30 flex items-center gap-3">
              <span className="material-symbols-outlined text-secondary dark:text-secondary-fixed-dim">trending_up</span>
              Results
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {caseStudy.results.map((result, i) => (
                <AnimatedSection key={result.label} delay={i * 100} animation="scale-in">
                  <div className="glass-card p-6 text-center">
                    <div className="font-display-lg-mobile text-display-lg-mobile md:font-display-lg md:text-[48px] text-primary dark:text-primary-fixed mb-2">{result.value}</div>
                    <div className="font-label-caps text-label-caps text-on-surface-variant dark:text-[#7a7d7e] tracking-widest text-[10px]">{result.label}</div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </section>
        </AnimatedSection>
      </main>
    </div>
  );
}