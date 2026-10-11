export default function Education() {
  return (
    <section
      id="formacao"
      className="w-full bg-green-950 px-6 py-24 text-white dark:bg-black sm:px-10 lg:px-16"
    >
      <div className="mx-auto w-full max-w-7xl">

        {/* Cabeçalho */}
        <div className="max-w-2xl">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-green-400">
            Formação
          </p>

          <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
            Minha jornada de
            <span className="block text-green-500">
              aprendizado.
            </span>
          </h2>
        </div>

        {/* Formação */}
        <div className="mt-16">

          <div className="relative border-l border-green-800 pl-8 sm:pl-10">

            {/* Ponto da timeline */}
            <div className="absolute -left-[7px] top-1 h-3.5 w-3.5 rounded-full bg-green-500 shadow-lg shadow-green-500/30" />

            <div className="max-w-3xl">

              <span className="text-sm font-medium uppercase tracking-wider text-green-400">
                Graduação
              </span>

              <h3 className="mt-3 text-2xl font-bold sm:text-3xl">
                Análise e Desenvolvimento de Sistemas
              </h3>

              <p className="mt-2 text-gray-400">
                Formação voltada para desenvolvimento de software,
                programação, banco de dados, engenharia de software
                e desenvolvimento de sistemas.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <span className="rounded-full border border-green-800 bg-green-900/20 px-4 py-2 text-sm text-gray-300">
                  Desenvolvimento Web
                </span>

                <span className="rounded-full border border-green-800 bg-green-900/20 px-4 py-2 text-sm text-gray-300">
                  Banco de Dados
                </span>

                <span className="rounded-full border border-green-800 bg-green-900/20 px-4 py-2 text-sm text-gray-300">
                  Engenharia de Software
                </span>

                <span className="rounded-full border border-green-800 bg-green-900/20 px-4 py-2 text-sm text-gray-300">
                  Programação
                </span>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}