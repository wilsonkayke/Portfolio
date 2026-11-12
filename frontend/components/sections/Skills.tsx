const skills = [
  {
    title: "Frontend",
    description: "Interfaces responsivas e interativas.",
    technologies: [
      "React",
      "Next.js",
      "JavaScript",
      "TypeScript",
      "Tailwind CSS",
      "HTML",
      "CSS",
    ],
  },
  {
    title: "Backend",
    description: "APIs, regras de negócio e autenticação.",
    technologies: [
      "Python",
      "FastAPI",
      "Node.js",
      "NestJS",
      "TypeScript",
      "REST API",
      "JWT",
    ],
  },
  {
    title: "Banco de dados",
    description: "Modelagem e persistência de dados relacionais e documentais.",
    technologies: ["PostgreSQL", "MySQL", "MongoDB", "PyMongo"],
  },
  {
    title: "Ferramentas",
    description: "Versionamento, desenvolvimento e documentação de APIs.",
    technologies: ["Git", "GitHub", "VS Code", "Postman", "Swagger"],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      aria-labelledby="skills-title"
      className="border-t border-neutral-800 bg-neutral-950 text-white"
    >
      <div className="mx-auto w-full max-w-7xl px-6 py-16 sm:px-10 sm:py-20 lg:px-16 lg:py-24">
        <h2
          id="skills-title"
          className="text-4xl font-bold tracking-tight sm:text-5xl"
        >
          Tecnologias e ferramentas
        </h2>

        <ul className="mt-8 grid gap-4 md:grid-cols-2 lg:mt-10 lg:gap-6">
          {skills.map(({ title, description, technologies }) => (
            <li
              key={title}
              className="flex flex-col rounded-2xl border border-neutral-800 bg-neutral-900 p-5 sm:p-6"
            >
              <h3 className="text-lg font-semibold tracking-tight text-green-400">
                {title}
              </h3>

              <p className="mt-2 text-sm leading-6 text-neutral-300">
                {description}
              </p>

              <ul
                aria-label={`Tecnologias de ${title}`}
                className="mt-auto flex flex-wrap gap-2 pt-5"
              >
                {technologies.map((technology) => (
                  <li
                    key={technology}
                    className="rounded-md border border-neutral-700 bg-neutral-950 px-3 py-1.5 text-sm text-neutral-200"
                  >
                    {technology}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}