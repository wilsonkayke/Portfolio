"use client";

import { useRef, useState } from "react";

const links = [
  { href: "#sobre", label: "Sobre" },
  { href: "#skills", label: "Skills" },
  { href: "#projetos", label: "Projetos" },
  { href: "#formacao", label: "Formação" },
  { href: "#contato", label: "Contato" },
] as const;

export default function Topbar() {
  const [isOpen, setIsOpen] = useState(false);
  const menuButton = useRef<HTMLButtonElement>(null);

  return (
    <header className="sticky top-0 z-50 h-20 px-4 py-3 sm:px-6">
      <nav
        aria-label="Navegação principal"
        onKeyDown={(event) => {
          if (event.key === "Escape" && isOpen) {
            setIsOpen(false);
            menuButton.current?.focus();
          }
        }}
        className="relative mx-auto flex h-full max-w-7xl items-center justify-between rounded-2xl border border-neutral-200 bg-white/90 px-4 text-neutral-900 shadow-sm backdrop-blur-md sm:px-6 dark:border-neutral-800 dark:bg-neutral-950/90 dark:text-white"
      >
        <a
          href="#home"
          onClick={() => setIsOpen(false)}
          className="rounded-md text-lg font-bold tracking-tight focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-green-500"
        >
          Kayke <span className="text-green-700 dark:text-green-400">Wilson</span>
        </a>

        <button
          ref={menuButton}
          type="button"
          aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={isOpen}
          aria-controls="topbar-links"
          onClick={() => setIsOpen((open) => !open)}
          className="grid size-11 place-items-center rounded-lg transition-colors hover:bg-neutral-100 focus-visible:outline-2 focus-visible:outline-green-500 md:hidden dark:hover:bg-neutral-800"
        >
          <svg
            aria-hidden="true"
            className="size-6"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          >
            <path
              d={isOpen ? "M6 6l12 12M18 6L6 18" : "M4 7h16M4 12h16M4 17h16"}
            />
          </svg>
        </button>

        <ul
          id="topbar-links"
          className={`${isOpen ? "flex" : "hidden"} absolute inset-x-0 top-full mt-2 flex-col gap-1 rounded-2xl border border-neutral-200 bg-white p-2 shadow-lg md:static md:mt-0 md:flex md:flex-row md:items-center md:border-0 md:bg-transparent md:p-0 md:shadow-none dark:border-neutral-800 dark:bg-neutral-950 md:dark:bg-transparent`}
        >
          {links.map(({ href, label }) => (
            <li key={href}>
              <a
                href={href}
                onClick={() => setIsOpen(false)}
                className={
                  href === "#contato"
                    ? "block rounded-lg bg-green-400 px-4 py-2.5 text-center text-sm font-semibold text-neutral-950 transition-colors hover:bg-green-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-500 md:ml-2"
                    : "block rounded-lg px-3 py-2.5 text-sm font-medium text-neutral-700 transition-colors hover:bg-neutral-100 hover:text-neutral-950 focus-visible:outline-2 focus-visible:outline-green-500 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:hover:text-white"
                }
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}