import { expertise } from "@/data/content";

export default function Expertise() {
  return (
    <section id="expertise" className="border-b border-line px-6 py-20 md:px-10 md:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <span className="inline-flex rounded-lg bg-bg-card px-4 py-2 text-sm font-semibold text-ink">
            Expertise
          </span>
          <h2 className="font-display mt-5 text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
            Technical Expertise
          </h2>
          <p className="mx-auto mt-5 max-w-3xl text-lg text-ink-muted sm:text-xl">
          What I use day to day to plan, execute, and prove out organic
          growth &mdash; from research and technical fixes to reporting.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-5xl rounded-2xl border border-line bg-bg-card p-7 md:p-10">
          <div className="flex flex-wrap justify-center gap-3">
            {expertise.map((skill) => (
              <span
                key={skill}
                className="transform-gpu cursor-pointer rounded-full border border-line bg-bg-raised px-4 py-2.5 text-center text-sm font-medium text-ink-muted transition duration-300 ease-in-out hover:-rotate-1 hover:scale-105 hover:border-moss hover:text-ink"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
