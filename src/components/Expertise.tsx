import { skillGroups } from "@/data/content";

export default function Expertise() {
  return (
    <section id="expertise" className="border-b border-line px-6 py-20 md:px-10 md:py-28">
      <div className="mx-auto max-w-6xl">
        <span className="font-data text-xs uppercase tracking-[0.2em] text-moss">
          Expertise
        </span>
        <h2 className="font-display mt-3 max-w-xl text-3xl font-semibold text-ink sm:text-4xl">
          The toolbox behind the rankings
        </h2>
        <p className="mt-4 max-w-xl text-ink-muted">
          What I use day to day to plan, execute, and prove out organic
          growth &mdash; from research and technical fixes to reporting.
        </p>

        <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group) => (
            <div key={group.title} className="bg-bg-card p-7">
              <h3 className="font-display text-sm font-semibold text-ink">
                {group.title}
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-line px-3 py-1 text-xs text-ink-muted"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
