import { projects } from "@/data/content";
import Image from "next/image";
import Sparkline from "./Sparkline";

export default function Projects() {
  return (
    <section id="work" className="border-b border-line px-6 py-20 md:px-10 md:py-28">
      <div className="mx-auto max-w-6xl">
        <span className="font-data text-xs uppercase tracking-[0.2em] text-moss">
          Case studies
        </span>
        <h2 className="font-display mt-3 max-w-xl text-3xl font-semibold text-ink sm:text-4xl">
          Featured SEO projects
        </h2>
        <p className="mt-4 max-w-xl text-ink-muted">
          Strategic SEO, content optimization, and technical improvements
          behind measurable organic growth and revenue.
        </p>

        <div className="mt-12 grid gap-6 lg:grid-cols-1">
          {projects.map((project) => (
            <article
              key={project.name}
              className="flex flex-col rounded-2xl border border-line bg-bg-card p-7"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="font-display text-xl font-semibold text-ink">
                    {project.name}
                  </h3>
                  <p className="font-data mt-1 text-xs text-ink-faint">
                    {project.market}
                  </p>
                </div>
              </div>

              <p className="mt-4 text-sm leading-relaxed text-ink-muted">
                {project.summary}
              </p>

              {project.evidence && (
                <div className="mt-6">
                  <div className="mb-3 flex items-center justify-between gap-3">
                    <h4 className="font-data text-[11px] uppercase tracking-[0.16em] text-moss">
                      Performance evidence
                    </h4>
                    <span className="font-data text-[11px] text-ink-faint">
                      {project.evidence.length} records
                    </span>
                  </div>
                  <div className="grid grid-cols-1 gap-3 lg:grid-cols-2">
                    {project.evidence.map((image) => (
                      <figure key={image.src} className="overflow-hidden rounded-lg border border-line bg-bg-raised">
                        <Image
                          src={image.src}
                          alt={image.alt}
                          width={1200}
                          height={700}
                          className="aspect-[16/9] w-full object-cover object-top"
                        />
                        <figcaption className="px-3 py-2 text-xs text-ink-faint">
                          {image.label}
                        </figcaption>
                      </figure>
                    ))}
                  </div>
                </div>
              )}

              {/* <div className="mt-5 rounded-xl border border-line bg-bg-raised p-4">
                <Sparkline data={project.sparkline} />
                <div className="mt-3 grid grid-cols-2 gap-3 border-t border-line pt-3 sm:grid-cols-4">
                  {project.metrics.map((metric) => (
                    <div key={metric.label}>
                      <div className="font-data text-sm font-semibold text-ink">
                        {metric.after}
                      </div>
                      <div className="mt-0.5 text-[11px] leading-tight text-ink-faint">
                        {metric.label}
                      </div>
                      <div
                        className={`font-data mt-0.5 text-[11px] ${
                          metric.positive ? "text-moss" : "text-gold"
                        }`}
                      >
                        {metric.change}
                      </div>
                    </div>
                  ))}
                </div>
              </div> */}

              <ul className="mt-5 space-y-2.5">
                {project.bullets.map((bullet) => (
                  <li key={bullet} className="flex gap-3 text-sm text-ink-muted">
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-moss" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
