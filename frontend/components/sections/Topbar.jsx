'use client';

import { useState } from "react";

export default function Topbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed left-0 top-0 z-50 h-20 w-full border-b border-gray-600 bg-gray-100 rounded-2xl dark:border-gray-800 dark:bg-black mt-2">

      {/* Container Principal */}
      <div className="mx-auto flex h-full w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">

        {/* Lado Esquerdo: Nome */}
        <div className="flex items-center">
          <h1 className="text-lg font-semibold text-gray-900 dark:text-white">
            Kayke Wilson
          </h1>
        </div>

        {/* Menu para Computador */}
        <div className="hidden items-center space-x-6 text-sm font-medium text-gray-600 dark:text-gray-300 md:flex">
          <a
            href="#sobre"
            className="transition-colors hover:text-gray-900 dark:hover:text-white"
          >
            Sobre
          </a>

          <a
            href="#skills"
            className="transition-colors hover:text-gray-900 dark:hover:text-white"
          >
            Skills
          </a>

          <a
            href="#projetos"
            className="transition-colors hover:text-gray-900 dark:hover:text-white"
          >
            Projetos
          </a>

          <a
            href="#contato"
            className="transition-colors hover:text-gray-900 dark:hover:text-white"
          >
            Contato
          </a>

        </div>

        {/* Botão do Menu Mobile */}
        <div className="flex md:hidden">

          <button
            onClick={() => setIsOpen(!isOpen)}
            type="button"
            className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-white focus:outline-none"
            aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
          >

            <span className="sr-only">
              {isOpen ? "Fechar menu" : "Abrir menu"}
            </span>

            {isOpen ? (
              // Ícone X
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
              // Ícone Hambúrguer
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

      {/* Menu Mobile */}
      {isOpen && (
        <div className="absolute left-0 top-full w-full border-t border-gray-100 bg-white px-4 pb-4 pt-2 shadow-lg dark:border-gray-900 dark:bg-black md:hidden mt-1 rounded-2xl">

          <div className="flex flex-col space-y-2 text-sm font-medium text-gray-600 dark:text-gray-300">

            <a
              href="#sobre"
              onClick={() => setIsOpen(false)}
              className="block py-2 transition-colors hover:text-gray-900 dark:hover:text-white"
            >
              Sobre
            </a>

            <a
              href="#skills"
              onClick={() => setIsOpen(false)}
              className="block py-2 transition-colors hover:text-gray-900 dark:hover:text-white"
            >
              Skills
            </a>

            <a
              href="#projetos"
              onClick={() => setIsOpen(false)}
              className="block py-2 transition-colors hover:text-gray-900 dark:hover:text-white"
            >
              Projetos
            </a>

            <a
              href="#contato"
              onClick={() => setIsOpen(false)}
              className="block py-2 transition-colors hover:text-gray-900 dark:hover:text-white"
            >
              Contato
            </a>

          </div>

        </div>
      )}

    </nav>
  );
}