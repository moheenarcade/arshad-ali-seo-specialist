import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { profile } from "@/data/content";

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden border-b border-line">
      <div className="grain pointer-events-none absolute inset-0 opacity-[0.15]" />
      <div className="pointer-events-none absolute left-1/2 top-20 h-72 w-72 -translate-x-1/2 rounded-full bg-moss-dim opacity-10 blur-3xl" />

      <div className="relative mx-auto flex max-w-5xl flex-col items-center px-6 pb-20 pt-14 text-center sm:pb-24 sm:pt-20 md:px-10 md:pb-28 md:pt-24">
        {/* <Image
          src="/favicon-96x96.png"
          alt={`${profile.name} profile photo`}
          width={112}
          height={112}
          priority
          className="h-24 w-24 rounded-full border-2 border-line object-cover shadow-[0_0_0_6px_rgba(255,255,255,0.025)] sm:h-28 sm:w-28"
        /> */}

        <h1 className="font-display mt-7 text-5xl font-semibold leading-[0.98] tracking-tight text-ink sm:text-6xl md:text-7xl">
          {profile.name}
        </h1>
        <p className="font-display mt-5 text-xl font-semibold text-ink sm:text-2xl">
          {profile.role}
        </p>
        <p className="mt-6 max-w-5xl text-base leading-7 text-ink-muted sm:text-md sm:leading-8">
          {profile.bio} {profile.bioSecondary}
        </p>

        <div className="mt-9 flex flex-wrap justify-center gap-3 sm:gap-4">
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex min-h-11 items-center gap-3 rounded-md bg-ink px-6 py-3 text-sm font-medium text-bg transition-transform hover:-translate-y-0.5"
          >
            Get in touch
            <ArrowRight size={16} />
          </a>
          <a
            href="#work"
            className="inline-flex min-h-11 items-center rounded-md border border-line px-6 py-3 text-sm font-medium text-ink transition-colors hover:border-moss hover:text-moss"
          >
            View my work
          </a>
        </div>
      </div>
    </section>
  );
}
