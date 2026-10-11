'use client';

import { useState } from "react";

export default function Topbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed left-0 top-2 z-50 w-full px-2">
      
      {/* Barra principal */}
      <div className="mx-auto h-20 w-full max-w-7xl rounded-2xl border border-gray-300 bg-gray-100 shadow-sm dark:border-gray-800 dark:bg-black">

        <div className="flex h-full items-center justify-between px-4 sm:px-6 lg:px-8">

          {/* Nome */}
          <div className="flex items-center">
            <h1 className="text-lg font-semibold text-gray-900 dark:text-white">
              Kayke Wilson
            </h1>
          </div>

          {/* Menu Desktop */}
          <div className="hidden items-center space-x-7 text-sm font-medium text-gray-600 dark:text-gray-300 md:flex">

            <a
              href="#sobre"
              className="transition-colors duration-200 hover:text-green-600 dark:hover:text-green-400"
            >
              Sobre
            </a>

            <a
              href="#skills"
              className="transition-colors duration-200 hover:text-green-600 dark:hover:text-green-400"
            >
              Skills
            </a>

            <a
              href="#projetos"
              className="transition-colors duration-200 hover:text-green-600 dark:hover:text-green-400"
            >
              Projetos
            </a>

            <a
              href="#contato"
              className="transition-colors duration-200 hover:text-green-600 dark:hover:text-green-400"
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
              className="rounded-lg p-2 text-gray-500 transition duration-200 hover:bg-gray-200 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-900 dark:hover:text-white"
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

      {/* Menu Mobile */}
      {isOpen && (
        <div className="mx-auto mt-2 w-full max-w-7xl overflow-hidden rounded-2xl border border-gray-300 bg-gray-100 shadow-lg dark:border-gray-800 dark:bg-black md:hidden">

          <div className="flex flex-col p-4">

            <a
              href="#sobre"
              onClick={() => setIsOpen(false)}
              className="rounded-lg px-3 py-3 text-sm font-medium text-gray-600 transition duration-200 hover:bg-gray-200 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-gray-900 dark:hover:text-white"
            >
              Sobre
            </a>

            <a
              href="#skills"
              onClick={() => setIsOpen(false)}
              className="rounded-lg px-3 py-3 text-sm font-medium text-gray-600 transition duration-200 hover:bg-gray-200 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-gray-900 dark:hover:text-white"
            >
              Skills
            </a>

            <a
              href="#projetos"
              onClick={() => setIsOpen(false)}
              className="rounded-lg px-3 py-3 text-sm font-medium text-gray-600 transition duration-200 hover:bg-gray-200 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-gray-900 dark:hover:text-white"
            >
              Projetos
            </a>

            <a
              href="#formacao"
              onClick={() => setIsOpen(false)}
              className="rounded-lg px-3 py-3 text-sm font-medium text-gray-600 transition duration-200 hover:bg-gray-200 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-gray-900 dark:hover:text-white"
            >
              Formação
            </a>

            <a
              href="#contato"
              onClick={() => setIsOpen(false)}
              className="rounded-lg px-3 py-3 text-sm font-medium text-gray-600 transition duration-200 hover:bg-gray-200 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-gray-900 dark:hover:text-white"
            >
              Contato
            </a>

          </div>

        </div>
      )}

    </nav>
  );
}