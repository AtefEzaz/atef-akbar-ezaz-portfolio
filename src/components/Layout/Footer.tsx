import { profile } from "../../data/profile";
import { FacebookIcon, GithubIcon, LinkedInIcon, MailIcon } from "../UI/Icons";

export function Footer() {
  return (
    <footer className="border-t border-ink-line">
      <div className="container-content flex flex-col items-center gap-4 py-10 text-sm text-paper-faint sm:flex-row sm:justify-between">
        <p className="flex items-center gap-2 font-mono">
          <img src="/images/logo.png" alt="" className="h-5 w-auto" />
          built by {profile.name}, {new Date().getFullYear()}
        </p>
        <div className="flex items-center gap-5">
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
          <a
            href={`mailto:${profile.email}`}
            aria-label="Email"
            className="transition-colors hover:text-amber"
          >
            <MailIcon className="h-5 w-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
