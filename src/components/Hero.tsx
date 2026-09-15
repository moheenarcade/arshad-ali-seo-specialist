import { ArrowUpRight, Mail } from "lucide-react";
import LinkedinIcon from "./icons/LinkedinIcon";
import { profile, stats } from "@/data/content";

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden border-b border-line">
      <div className="grain pointer-events-none absolute inset-0 opacity-[0.15]" />
      <div className="pointer-events-none absolute -right-40 -top-40 h-96 w-96 rounded-full bg-moss-dim opacity-20 blur-3xl" />

      <div className="relative mx-auto grid max-w-6xl gap-14 px-6 py-20 md:grid-cols-[1.1fr_0.9fr] md:gap-10 md:px-10 md:py-28">
        <div className="flex flex-col justify-center">
          <span className="font-data text-xs uppercase tracking-[0.2em] text-moss">
            SEO Specialist
          </span>
          <h1 className="font-display mt-4 text-4xl font-semibold leading-[1.08] text-ink sm:text-5xl lg:text-6xl">
            {profile.name}
          </h1>
          <p className="mt-6 max-w-lg text-base leading-relaxed text-ink-muted">
            {profile.bio}
          </p>
          <p className="mt-4 max-w-lg text-base leading-relaxed text-ink-muted">
            {profile.bioSecondary}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-moss px-6 py-3 text-sm font-medium text-[#06120c] transition-transform hover:-translate-y-0.5"
            >
              Get in touch
              <ArrowUpRight size={16} />
            </a>
            <a
              href="#work"
              className="inline-flex items-center gap-2 rounded-full border border-line px-6 py-3 text-sm font-medium text-ink transition-colors hover:border-moss hover:text-moss"
            >
              View my work
            </a>
          </div>

          <div className="mt-8 flex items-center gap-5 text-ink-muted">
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm transition-colors hover:text-moss"
            >
              <LinkedinIcon size={16} /> LinkedIn
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2 text-sm transition-colors hover:text-moss"
            >
              <Mail size={16} /> {profile.email}
            </a>
          </div>
        </div>

        <div className="flex items-center">
          <div className="w-full rounded-2xl border border-line bg-bg-card p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.02)]">
            <div className="flex items-center justify-between border-b border-line pb-4">
              <span className="font-data text-xs text-ink-faint">
                performance / last 6 months
              </span>
              <span className="flex h-2 w-2 rounded-full bg-moss" />
            </div>
            <div className="grid grid-cols-2 gap-6 pt-6">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <div className="font-data text-2xl font-semibold text-ink sm:text-3xl">
                    {stat.value}
                  </div>
                  <div className="mt-1 text-xs leading-snug text-ink-muted">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
