const projects = [
  {
    title: "BarberFlow",
    description:
      "Sistema web para gerenciamento de fila de espera e agendamentos para barbearias.",
    technologies: ["Next.js", "React", "Python", "FastAPI", "MongoDB"],
    type: "Sistema Web",
  },
  {
    title: "LojaDiPaula",
    description:
      "Site para apresentação e divulgação de produtos de confeitaria, com foco em uma experiência visual moderna.",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    type: "Website",
  },
];

export default function Projects() {
  return (
    <section
      id="projetos"
      className="w-full bg-green-950 px-6 py-24 text-white dark:bg-black sm:px-10 lg:px-16"
    >
      <div className="mx-auto w-full max-w-7xl">

        {/* Cabeçalho */}
        <div className="max-w-2xl">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-green-400">
            Projetos
          </p>

          <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
            Projetos que
            <span className="block text-green-500">
              transformaram ideias em código.
            </span>
          </h2>

          <p className="mt-6 text-base leading-7 text-gray-400 sm:text-lg">
            Alguns dos projetos que desenvolvi durante minha jornada,
            aplicando conhecimentos de frontend, backend, APIs e banco
            de dados.
          </p>
        </div>

        {/* Projetos */}
        <div className="mt-16 grid gap-8 lg:grid-cols-2">

          {projects.map((project) => (
            <article
              key={project.title}
              className="group overflow-hidden rounded-3xl border border-green-900/60 bg-green-900/20 transition duration-500 hover:-translate-y-2 hover:border-green-500/40"
            >

              {/* Área da imagem */}
              <div className="relative flex h-72 items-center justify-center overflow-hidden bg-black">

                <div className="absolute inset-0 bg-linear-to-br from-green-950 via-black to-green-900 opacity-80" />

                <span className="relative text-5xl font-black tracking-tight text-green-500 transition duration-500 group-hover:scale-110">
                  {project.title}
                </span>

              </div>

              {/* Conteúdo */}
              <div className="p-7">

                <div className="flex items-center justify-between gap-4">

                  <h3 className="text-2xl font-bold">
                    {project.title}
                  </h3>

                  <span className="rounded-full border border-green-800 px-3 py-1 text-xs text-green-400">
                    {project.type}
                  </span>

                </div>

                <p className="mt-4 leading-7 text-gray-400">
                  {project.description}
                </p>

                {/* Tecnologias */}
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-full bg-black/40 px-3 py-1.5 text-xs text-gray-300"
                    >
                      {technology}
                    </span>
                  ))}
                </div>

                {/* Botões */}
                <div className="mt-8 flex gap-4">

                  <a
                    href="#"
                    className="rounded-full bg-green-500 px-5 py-2.5 text-sm font-semibold text-black transition hover:bg-green-400"
                  >
                    Ver projeto
                  </a>

                  <a
                    href="#"
                    className="rounded-full border border-gray-700 px-5 py-2.5 text-sm font-semibold text-white transition hover:border-green-500 hover:text-green-400"
                  >
                    GitHub
                  </a>

                </div>

              </div>

            </article>
          ))}

        </div>

      </div>
    </section>
  );
}