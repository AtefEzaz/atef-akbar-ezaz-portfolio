import { useState } from "react";
import { useActiveSection } from "../../hooks/useActiveSection";
import { MenuIcon, CloseIcon } from "../UI/Icons";

const links = [
  { id: "about", label: "about" },
  { id: "skills", label: "skills" },
  { id: "projects", label: "projects" },
  { id: "journey", label: "journey" },
  { id: "contact", label: "contact" },
];

export function Navbar() {
  const active = useActiveSection(links.map((l) => l.id));
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-ink-line/80 bg-ink/85 backdrop-blur">
      <nav className="container-content flex h-16 items-center justify-between">
        <a
          href="#top"
          className="flex items-center opacity-90 transition-opacity hover:opacity-100"
        >
          <img
            src="/images/logo.png"
            alt="Atef Akbar Ezaz"
            className="h-9 w-auto"
          />
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {links.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                className={`rounded-md px-3 py-2 font-mono text-sm transition-colors ${
                  active === link.id
                    ? "text-amber"
                    : "text-paper-muted hover:text-paper"
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="hidden rounded-md bg-amber px-4 py-2 font-mono text-sm font-medium text-ink transition-transform hover:-translate-y-0.5 md:inline-block"
        >
          say hello
        </a>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-ink-line text-paper md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? (
            <CloseIcon className="h-5 w-5" />
          ) : (
            <MenuIcon className="h-5 w-5" />
          )}
        </button>
      </nav>

      {open && (
        <div className="border-t border-ink-line bg-ink px-6 pb-6 pt-2 md:hidden">
          <ul className="flex flex-col gap-1">
            {links.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  onClick={() => setOpen(false)}
                  className={`block rounded-md px-3 py-2.5 font-mono text-sm ${
                    active === link.id ? "text-amber" : "text-paper-muted"
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
