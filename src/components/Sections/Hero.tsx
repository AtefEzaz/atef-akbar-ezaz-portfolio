import { profile } from "../../data/profile";
import { useTypedText } from "../../hooks/useTypedText";
import {
  ArrowUpRightIcon,
  FacebookIcon,
  GithubIcon,
  LinkedInIcon,
} from "../UI/Icons";

export function Hero() {
  const typed = useTypedText(profile.role, 500, 40);

  return (
    <section id="top" className="relative overflow-hidden pt-16 sm:pt-24">
      <div className="container-content grid items-center gap-14 pb-20 sm:pb-28 lg:grid-cols-[1.1fr_0.9fr] lg:gap-10">
        <div className="animate-fade-up opacity-0 [animation-delay:100ms]">
          <p className="font-mono text-sm text-amber">hi, my name is</p>
          <h1 className="mt-3 font-display text-4xl font-semibold leading-[1.08] tracking-tight text-paper sm:text-5xl lg:text-6xl">
            {profile.name}
          </h1>
          <p className="mt-4 h-8 font-mono text-lg text-paper-muted sm:text-xl">
            {typed}
            <span className="ml-0.5 inline-block h-5 w-[2px] translate-y-0.5 bg-amber animate-blink" />
          </p>
          <p className="mt-6 max-w-lg text-base leading-relaxed text-paper-muted sm:text-lg">
            {profile.tagline}
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-md bg-amber px-5 py-3 font-medium text-ink transition-transform hover:-translate-y-0.5"
            >
              View my projects
              <ArrowUpRightIcon className="h-4 w-4" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-md border border-ink-line px-5 py-3 font-medium text-paper transition-colors hover:border-amber/50 hover:text-amber"
            >
              Get in touch
            </a>
          </div>

          <div className="mt-10 flex items-center gap-5 text-paper-muted">
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="transition-colors hover:text-amber"
            >
              <GithubIcon className="h-5 w-5" />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="transition-colors hover:text-amber"
            >
              <LinkedInIcon className="h-5 w-5" />
            </a>
            <a
              href={profile.facebook}
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
              className="transition-colors hover:text-amber"
            >
              <FacebookIcon className="h-5 w-5" />
            </a>
            <span className="h-4 w-px bg-ink-line" />
            <span className="font-mono text-sm">{profile.location}</span>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-sm animate-fade-up opacity-0 [animation-delay:250ms] lg:max-w-none">
          <div className="absolute -inset-6 -z-10 rounded-[2rem] bg-gradient-to-br from-amber/10 via-transparent to-transparent" />
          <div className="relative rounded-2xl border border-ink-line bg-ink-soft p-3">
            <div className="flex items-center gap-1.5 px-2 pb-3">
              <span className="h-2.5 w-2.5 rounded-full bg-ink-line" />
              <span className="h-2.5 w-2.5 rounded-full bg-ink-line" />
              <span className="h-2.5 w-2.5 rounded-full bg-ink-line" />
              <span className="ml-2 font-mono text-xs text-paper-faint">
                profile.tsx
              </span>
            </div>
            <div className="overflow-hidden rounded-xl bg-ink">
              <img
                src="/images/profile.webp"
                alt={profile.name}
                className="aspect-[4/5] w-full object-cover object-top"
                width={640}
                height={800}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
