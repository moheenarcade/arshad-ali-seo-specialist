import { skillGroups } from "@/data/content";

export default function Expertise() {
  return (
    <section id="expertise" className="border-b border-line px-6 py-20 md:px-10 md:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <span className="inline-flex rounded-lg bg-bg-card px-4 py-2 text-sm font-semibold text-ink">
            Expertise
          </span>
          <h2 className="font-display mt-5 text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
            The toolbox behind the rankings
          </h2>
          <p className="mx-auto mt-5 max-w-3xl text-lg text-ink-muted sm:text-xl">
          What I use day to day to plan, execute, and prove out organic
          growth &mdash; from research and technical fixes to reporting.
          </p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2">
          {skillGroups.map((group) => (
            <div key={group.title} className="rounded-lg border border-line bg-transparent p-7 md:p-8">
              <h3 className="font-display text-2xl font-semibold tracking-tight text-ink">
                {group.title}
              </h3>
              <div className="mt-7 flex flex-wrap gap-2.5">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-md bg-bg-card px-3.5 py-2 text-sm font-medium text-ink-muted"
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
