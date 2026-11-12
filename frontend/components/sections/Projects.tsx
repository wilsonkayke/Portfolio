type Project = {
  title: string;
  description: string;
  technologies: string[];
  demo: string;
  github: string;
  inProgress?: string;
};

const projects: Project[] = [
  {
    title: "BarberFlow",
    description:
      "Sistema de agendamento e fila digital para barbearias. O cliente reserva um horário e acompanha sua posição na fila. No painel administrativo, a equipe chama o próximo cliente e finaliza o atendimento.",
    technologies: ["Next.js", "React", "Tailwind CSS", "Python", "FastAPI", "MongoDB"],
    demo: "https://sistemagerenciamentefila.vercel.app/login",
    github: "https://github.com/wilsonkayke/FrontBarber90-",
  },
  {
    title: "Loja de Roupas",
    description:
      "Catálogo online para uma loja de roupas. O cliente navega pelas peças, consulta fotos e descrições e pode seguir para o WhatsApp para fazer o pedido.",
    inProgress: "Pagamentos online e painel administrativo.",
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "NestJS",
      "PostgreSQL",
    ],
    demo: "https://loja-roupa-rust.vercel.app/",
    github: "https://github.com/wilsonkayke/LojaRoupa",
  },
];

export default function Projects() {
  return (
    <section
      id="projetos"
      aria-labelledby="projects-title"
      className="border-t border-neutral-800 bg-neutral-900 text-white"
    >
      <div className="mx-auto w-full max-w-7xl px-6 py-16 sm:px-10 sm:py-20 lg:px-16 lg:py-24">
        <h2
          id="projects-title"
          className="text-4xl font-bold tracking-tight sm:text-5xl"
        >
          Projetos
        </h2>

        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:mt-10 lg:gap-6">
          {projects.map(({ title, description, technologies, demo, github, inProgress }) => (
            <article
              key={title}
              className="flex flex-col rounded-2xl border border-neutral-800 bg-neutral-950 p-5 sm:p-7"
            >
              <h3 className="text-2xl font-semibold tracking-tight">{title}</h3>

              <p className="mt-3 leading-7 text-neutral-300">{description}</p>

              {inProgress && (
                <p className="mt-4 text-sm leading-6 text-neutral-300">
                  <span className="font-semibold text-green-400">
                    Em desenvolvimento
                  </span>
                  {" · "}
                  {inProgress}
                </p>
              )}

              <ul
                aria-label={`Tecnologias de ${title}`}
                className="mt-auto flex flex-wrap gap-2 pt-6"
              >
                {technologies.map((technology) => (
                  <li
                    key={technology}
                    className="rounded-md border border-neutral-700 bg-neutral-900 px-3 py-1.5 text-sm text-neutral-200"
                  >
                    {technology}
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex flex-wrap gap-3 border-t border-neutral-800 pt-5">
                <a
                  href={demo}
                  aria-label={`Abrir ${title}`}
                  className="inline-flex min-h-11 items-center gap-2 rounded-lg bg-green-400 px-4 text-sm font-semibold text-neutral-950 transition-colors hover:bg-green-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-400"
                >
                  Abrir projeto <span aria-hidden="true">↗</span>
                </a>

                <a
                  href={github}
                  aria-label={`Ver código de ${title} no GitHub`}
                  className="inline-flex min-h-11 items-center rounded-lg border border-neutral-700 px-4 text-sm font-semibold text-white transition-colors hover:border-green-400 hover:text-green-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-400"
                >
                  Código no GitHub
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}