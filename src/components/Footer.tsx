import { Mail } from "lucide-react";
import { profile } from "@/data/content";
import LinkedinIcon from "./icons/LinkedinIcon";

export default function Footer() {
  return (
    <footer className="border-t border-line px-6 py-8 md:px-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-sm text-ink-faint sm:flex-row">
        <p>&copy; {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
        <div className="flex items-center gap-5">
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="transition-colors hover:text-moss"
          >
            <LinkedinIcon size={16} />
          </a>
          <a
            href={`mailto:${profile.email}`}
            aria-label="Email"
            className="transition-colors hover:text-moss"
          >
            <Mail size={16} />
          </a>
        </div>
      </div>
    </footer>
  );
}
