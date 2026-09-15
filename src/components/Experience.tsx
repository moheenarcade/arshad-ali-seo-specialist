import { experience } from "@/data/content";

export default function Experience() {
  return (
    <section id="journey" className="border-b border-line px-6 py-20 md:px-10 md:py-28">
      <div className="mx-auto max-w-6xl">
        <span className="font-data text-xs uppercase tracking-[0.2em] text-moss">
          Experience
        </span>
        <h2 className="font-display mt-3 max-w-xl text-3xl font-semibold text-ink sm:text-4xl">
          My professional journey
        </h2>
        <p className="mt-4 max-w-xl text-ink-muted">
          Four years across agencies and in-house teams, growing organic
          search performance for e-commerce, services, and marketplace
          brands.
        </p>

        <div className="mt-12 space-y-10 border-l border-line pl-8">
          {experience.map((role) => (
            <div key={role.title + role.company} className="relative">
              <span className="absolute -left-[calc(2rem+5px)] top-1.5 h-2.5 w-2.5 rounded-full bg-moss ring-4 ring-bg" />

              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <h3 className="font-display text-lg font-semibold text-ink">
                  {role.title}
                </h3>
                <span className="font-data text-xs text-ink-faint">
                  {role.period}
                </span>
              </div>
              <p className="mt-1 text-sm text-moss">
                {role.company} &middot; {role.location}
              </p>

              <ul className="mt-4 space-y-2.5">
                {role.bullets.map((bullet) => (
                  <li key={bullet} className="flex gap-3 text-sm text-ink-muted">
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-ink-faint" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
