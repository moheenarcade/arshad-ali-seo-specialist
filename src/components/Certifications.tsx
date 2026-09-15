import { Award } from "lucide-react";
import { certifications } from "@/data/content";

export default function Certifications() {
  return (
    <section id="certifications" className="border-b border-line px-6 py-20 md:px-10 md:py-28">
      <div className="mx-auto max-w-6xl">
        <span className="font-data text-xs uppercase tracking-[0.2em] text-moss">
          Credentials
        </span>
        <h2 className="font-display mt-3 max-w-xl text-3xl font-semibold text-ink sm:text-4xl">
          Certifications
        </h2>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((cert) => (
            <div
              key={cert.name}
              className="flex items-start gap-4 rounded-2xl border border-line bg-bg-card p-5"
            >
              <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-moss-dim/40 text-moss">
                <Award size={16} />
              </span>
              <div>
                <div className="text-sm font-medium text-ink">{cert.name}</div>
                <div className="mt-0.5 text-xs text-ink-faint">{cert.issuer}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
