const experiencias = [
  {
    titulo: "BarberFlow",
    descricao:
      "Sistema de agendamento e fila digital para barbearias. O cliente acompanha sua posição na fila, e a barbearia gerencia os atendimentos em um painel administrativo.",
  },
  {
    titulo: "E-commerce de moda",
    descricao:
      "Projeto em desenvolvimento para uma loja de roupas, com catálogo, estoque por variação de tamanho e cor e encaminhamento de pedidos pelo WhatsApp.",
  },
];

export default function About() {
  return (
    <section
      id="sobre"
      aria-labelledby="about-title"
      className="border-t border-neutral-800 bg-neutral-900 text-white"
    >
      <div className="mx-auto grid w-full max-w-7xl gap-10 px-6 py-16 sm:px-10 sm:py-20 lg:grid-cols-2 lg:gap-16 lg:px-16 lg:py-24">
        <div>
          <h2
            id="about-title"
            className="text-4xl font-bold tracking-tight sm:text-5xl"
          >
            Sobre mim
          </h2>

          <div className="mt-6 max-w-lg space-y-4 text-base leading-7 text-neutral-300 sm:text-lg sm:leading-8">
            <p>
              Sou formado em Análise e Desenvolvimento de Sistemas e atuo em
              projetos de desenvolvimento web full stack.
            </p>

            <p>
              Gosto de entender como um negócio funciona no dia a dia e usar
              essas informações para definir as telas e as regras do sistema.
            </p>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold tracking-wide text-green-400">
            Na prática
          </h3>

          <ul className="mt-4 divide-y divide-neutral-800 rounded-2xl border border-neutral-800 bg-neutral-950">
            {experiencias.map(({ titulo, descricao }) => (
              <li key={titulo} className="px-5 py-5 sm:px-6">
                <h4 className="text-lg font-semibold tracking-tight">
                  {titulo}
                </h4>

                <p className="mt-2 text-sm leading-6 text-neutral-300 sm:text-base sm:leading-7">
                  {descricao}
                </p>
              </li>
            ))}
          </ul>

          <a
            href="#projetos"
            className="mt-5 inline-flex min-h-11 items-center gap-2 rounded-md text-sm font-semibold text-green-400 transition-colors hover:text-green-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-green-400"
          >
            Explorar projetos <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}