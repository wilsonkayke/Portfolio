const skills = [
  {
    title: "Frontend",
    description: "Interfaces modernas, responsivas e interativas.",
    technologies: ["React", "Next.js", "JavaScript", "Tailwind CSS"],
  },
  {
    title: "Backend",
    description: "APIs, regras de negócio e autenticação.",
    technologies: ["Python", "FastAPI", "REST API"],
  },
  {
    title: "Banco de dados",
    description: "Armazenamento e gerenciamento de dados.",
    technologies: ["MongoDB", "PyMongo"],
  },
  {
    title: "Ferramentas",
    description: "Ferramentas utilizadas no desenvolvimento.",
    technologies: ["Git", "GitHub", "VS Code"],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="w-full bg-green-950 px-6 py-24 text-white dark:bg-black sm:px-10 lg:px-16"
    >
      <div className="mx-auto w-full max-w-7xl">

        {/* Cabeçalho */}
        <div className="max-w-2xl">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-green-400">
            Skills
          </p>

          <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
            Tecnologias que
            <span className="block text-green-500">
              fazem parte do meu trabalho.
            </span>
          </h2>

          <p className="mt-6 text-base leading-7 text-gray-400 sm:text-lg">
            Tecnologias e ferramentas que utilizo para desenvolver
            aplicações web, desde a interface até o backend e banco
            de dados.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2">

          {skills.map((skill) => (
            <div
              key={skill.title}
              className="group rounded-2xl border border-green-900/60 bg-green-900/20 p-7 transition duration-300 hover:-translate-y-1 hover:border-green-500/50"
            >
              <h3 className="text-2xl font-bold">
                {skill.title}
              </h3>

              <p className="mt-3 text-sm leading-6 text-gray-400">
                {skill.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                {skill.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-full border border-green-800/70 bg-black/20 px-4 py-2 text-sm text-gray-200 transition group-hover:border-green-500/40"
                  >
                    {technology}
                  </span>
                ))}
              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}