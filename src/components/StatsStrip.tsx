import { stats } from "@/data/content";

export default function StatsStrip() {
  return (
    <section aria-label="Key results" className="border-b border-line bg-bg-raised px-6 py-12 md:px-10">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-4 pb-1 md:grid-cols-2 xl:grid-cols-4">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="transform-gpu rounded-2xl border border-line bg-[#0a1a2b] px-6 py-5 text-center transition-transform duration-300 ease-out hover:z-10 hover:-translate-y-1 hover:rotate-[1deg] hover:scale-[1.02]"
          >
            <div className="font-display text-3xl font-semibold tracking-tight text-moss sm:text-4xl">
              {stat.value}
            </div>
            <div className="mt-4 text-base text-ink-muted">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
