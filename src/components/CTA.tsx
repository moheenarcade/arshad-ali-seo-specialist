import { ArrowUpRight } from "lucide-react";
import { profile } from "@/data/content";
import LinkedinIcon from "./icons/LinkedinIcon";

export default function CTA() {
  return (
    <section id="contact" className="px-6 py-20 md:px-10 md:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="relative overflow-hidden rounded-3xl border border-line bg-bg-raised px-8 py-16 text-center">
          <div className="pointer-events-none absolute -left-24 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-moss-dim opacity-25 blur-3xl" />
          <div className="pointer-events-none absolute -right-24 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-gold opacity-10 blur-3xl" />

          <h2 className="font-display relative mx-auto max-w-xl text-3xl font-semibold leading-tight text-ink sm:text-4xl">
            Want results like these for your brand?
          </h2>
          <p className="relative mx-auto mt-4 max-w-md text-ink-muted">
            Let&apos;s talk about where your organic traffic could go next.
          </p>

          <div className="relative mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2 rounded-full bg-moss px-6 py-3 text-sm font-medium text-[#06120c] transition-transform hover:-translate-y-0.5"
            >
              Get in touch
              <ArrowUpRight size={16} />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-line px-6 py-3 text-sm font-medium text-ink transition-colors hover:border-moss hover:text-moss"
            >
              <LinkedinIcon size={16} />
              View LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
