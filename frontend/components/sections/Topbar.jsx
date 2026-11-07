'use client';

import { useState } from "react";

export default function Topbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed left-0 top-3 z-50 w-full px-4">
      
      {/* Barra principal */}
      <div className="mx-auto h-20 w-full max-w-7xl rounded-2xl border border-gray-200/80 bg-white/80 shadow-md backdrop-blur-md dark:border-gray-800/80 dark:bg-black/80">

        <div className="flex h-full items-center justify-between px-4 sm:px-6 lg:px-8">

          {/* Nome */}
          <div className="flex items-center">
            <h1 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
              Kayke<span className="text-green-500">Wilson</span> 
              
            </h1>
          </div>

          {/* Menu Desktop (Atualizado para dar suporte perfeito a Light/Dark Mode) */}
          <div className="hidden items-center space-x-1 text-sm font-medium md:flex bg-gray-200/50 dark:bg-zinc-900/60 p-1.5 rounded-full border border-gray-300/40 dark:border-zinc-800/50">

            <a
              href="#sobre"
              className="px-4 py-2 rounded-full text-gray-600 dark:text-zinc-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-500/50 dark:hover:bg-zinc-800/80 transition-all duration-300 ease-out"
            >
              Sobre
            </a>

            <a
              href="#skills"
              className="px-4 py-2 rounded-full text-gray-600 dark:text-zinc-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-500/50 dark:hover:bg-zinc-800/80 transition-all duration-300 ease-out"
            >
              Skills
            </a>

            <a
              href="#projetos"
              className="px-4 py-2 rounded-full text-gray-600 dark:text-zinc-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-500/50 dark:hover:bg-zinc-800/80 transition-all duration-300 ease-out"
            >
              Projetos
            </a>

            <a
              href="#formacao"
              className="px-4 py-2 rounded-full text-gray-600 dark:text-zinc-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-500/50 dark:hover:bg-zinc-800/80 transition-all duration-300 ease-out"
            >
              Formação
            </a>

            <a
              href="#contato"
              className="px-5 py-2 rounded-full bg-green-500 text-slate-950 font-semibold hover:bg-green-400 hover:shadow-[0_0_20px_rgba(34,197,94,0.4)] transition-all duration-300 ease-out"
            >
              Contato
            </a>

          </div>

          {/* Botão Mobile */}
          <div className="flex md:hidden">

            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
              className="rounded-xl p-2.5 text-gray-500 transition duration-200 hover:bg-gray-200/60 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-zinc-900 dark:hover:text-white"
            >

              <span className="sr-only">
                {isOpen ? "Fechar menu" : "Abrir menu"}
              </span>

              {isOpen ? (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              )}

            </button>

          </div>

        </div>

      </div>

      {/* Menu Mobile (Completamente modernizado e alinhado ao design atual) */}
      {isOpen && (
        <div className="mx-auto mt-3 w-full max-w-7xl overflow-hidden rounded-2xl border border-gray-200 bg-white/95 p-3 shadow-xl backdrop-blur-md dark:border-gray-800 dark:bg-black/95 md:hidden animate-in fade-in slide-in-from-top-2 duration-200">

          <div className="flex flex-col space-y-1">

            <a
              href="#sobre"
              onClick={() => setIsOpen(false)}
              className="rounded-xl px-4 py-3 text-base font-medium text-gray-600 transition duration-200 hover:bg-gray-100 hover:text-gray-900 dark:text-zinc-300 dark:hover:bg-zinc-900 dark:hover:text-white"
            >
              Sobre
            </a>

            <a
              href="#skills"
              onClick={() => setIsOpen(false)}
              className="rounded-xl px-4 py-3 text-base font-medium text-gray-600 transition duration-200 hover:bg-gray-100 hover:text-gray-900 dark:text-zinc-300 dark:hover:bg-zinc-900 dark:hover:text-white"
            >
              Skills
            </a>

            <a
              href="#projetos"
              onClick={() => setIsOpen(false)}
              className="rounded-xl px-4 py-3 text-base font-medium text-gray-600 transition duration-200 hover:bg-gray-100 hover:text-gray-900 dark:text-zinc-300 dark:hover:bg-zinc-900 dark:hover:text-white"
            >
              Projetos
            </a>

            <a
              href="#formacao"
              onClick={() => setIsOpen(false)}
              className="rounded-xl px-4 py-3 text-base font-medium text-gray-600 transition duration-200 hover:bg-gray-100 hover:text-gray-900 dark:text-zinc-300 dark:hover:bg-zinc-900 dark:hover:text-white"
            >
              Formação
            </a>

            {/* Link de Contato em destaque também no mobile */}
            <a
              href="#contato"
              onClick={() => setIsOpen(false)}
              className="mt-2 rounded-xl px-4 py-3 text-base font-semibold text-center bg-green-500 text-slate-950 transition duration-200 hover:bg-green-400 active:scale-[0.98]"
            >
              Contato
            </a>

          </div>

        </div>
      )}

    </nav>
  );
}