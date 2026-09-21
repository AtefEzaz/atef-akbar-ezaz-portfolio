import { useState } from "react";
import { profile } from "../../data/profile";
import { SectionHeading } from "../UI/SectionHeading";
import {
  CheckIcon,
  CopyIcon,
  FacebookIcon,
  GithubIcon,
  LinkedInIcon,
  MailIcon,
} from "../UI/Icons";

export function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard API unavailable — the mailto link below still works.
    }
  };

  return (
    <section
      id="contact"
      className="scroll-mt-20 border-t border-ink-line py-20 sm:py-28"
    >
      <div className="container-content">
        <SectionHeading index="05" title="Contact" />

        <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <h3 className="font-display text-2xl font-semibold text-paper sm:text-3xl">
              Have an internship, a junior role, or a project in mind?
            </h3>
            <p className="mt-4 max-w-lg text-paper-muted">
              I&apos;m actively looking for internship and junior full-stack
              opportunities. The fastest way to reach me is email — I typically
              reply within a day.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center gap-2 rounded-md bg-amber px-5 py-3 font-medium text-ink transition-transform hover:-translate-y-0.5"
              >
                <MailIcon className="h-4 w-4" />
                Email me
              </a>
              <button
                type="button"
                onClick={handleCopy}
                className="inline-flex items-center gap-2 rounded-md border border-ink-line px-5 py-3 font-medium text-paper transition-colors hover:border-amber/50 hover:text-amber"
              >
                {copied ? (
                  <>
                    <CheckIcon className="h-4 w-4 text-mint" />
                    Copied
                  </>
                ) : (
                  <>
                    <CopyIcon className="h-4 w-4" />
                    Copy email
                  </>
                )}
              </button>
            </div>
          </div>

          <dl className="h-fit divide-y divide-ink-line rounded-xl border border-ink-line bg-ink-soft">
            <div className="flex items-center justify-between gap-4 px-5 py-4">
              <dt className="font-mono text-xs text-paper-faint">Email</dt>
              <dd className="text-sm text-paper">{profile.email}</dd>
            </div>
            <div className="flex items-center justify-between gap-4 px-5 py-4">
              <dt className="font-mono text-xs text-paper-faint">Phone</dt>
              <dd className="text-sm text-paper">{profile.phone}</dd>
            </div>
            <div className="flex items-center justify-between gap-4 px-5 py-4">
              <dt className="font-mono text-xs text-paper-faint">Location</dt>
              <dd className="text-sm text-paper">{profile.location}</dd>
            </div>
            <div className="flex items-center justify-between gap-4 px-5 py-4">
              <dt className="font-mono text-xs text-paper-faint">Elsewhere</dt>
              <dd className="flex items-center gap-4">
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                  className="text-paper-muted transition-colors hover:text-amber"
                >
                  <GithubIcon className="h-5 w-5" />
                </a>
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                  className="text-paper-muted transition-colors hover:text-amber"
                >
                  <LinkedInIcon className="h-5 w-5" />
                </a>
                <a
                  href={profile.facebook}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Facebook"
                  className="text-paper-muted transition-colors hover:text-amber"
                >
                  <FacebookIcon className="h-5 w-5" />
                </a>
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}
