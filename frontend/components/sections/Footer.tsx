export default function Footer() {
  return (
    <footer className="w-full border-t border-green-900/50 bg-black px-6 py-10 text-white sm:px-10 lg:px-16">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-6 md:flex-row md:items-center md:justify-between">
        
        {/* Nome / identidade */}
        <div>
          <h2 className="text-lg font-bold">
            Kayke <span className="text-green-500">Wilson.</span>
          </h2>

          <p className="mt-1 text-sm text-gray-500">
            Desenvolvedor Web
          </p>
        </div>

        {/* Links */}
        <div className="flex flex-wrap gap-5 text-sm text-gray-400">
          <a
            href="#home"
            className="transition hover:text-green-400"
          >
            Home
          </a>

          <a
            href="#sobre"
            className="transition hover:text-green-400"
          >
            Sobre
          </a>

          <a
            href="#skills"
            className="transition hover:text-green-400"
          >
            Skills
          </a>

          <a
            href="#projetos"
            className="transition hover:text-green-400"
          >
            Projetos
          </a>

          <a
            href="#contato"
            className="transition hover:text-green-400"
          >
            Contato
          </a>
        </div>
      </div>

      {/* Copyright */}
      <div className="mx-auto mt-8 w-full max-w-7xl border-t border-green-900/40 pt-6 text-center text-sm text-gray-600">
        © {new Date().getFullYear()} Kayke Wilson. Todos os direitos reservados.
      </div>
    </footer>
  );
}