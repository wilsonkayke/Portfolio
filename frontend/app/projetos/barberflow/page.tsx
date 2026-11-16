import Link from "next/link";

const technologies = [
  "Next.js",
  "React",
  "Tailwind CSS",
  "Python",
  "FastAPI",
  "MongoDB",
];

const flows = [
  {
    title: "Para o cliente",
    steps: [
      "Criar uma conta e acessar o sistema.",
      "Escolher um horário disponível e agendar.",
      "Acompanhar sua posição na fila.",
      "Receber a informação de que foi chamado.",
    ],
  },
  {
    title: "Para a barbearia",
    steps: [
      "Acessar o painel administrativo.",
      "Consultar os agendamentos e a fila.",
      "Chamar o próximo cliente.",
      "Finalizar e registrar o atendimento.",
    ],
  },
];

const challenges = [
  {
    title: "Evitar agendamentos duplicados",
    problem:
      "Precisava impedir reservas conflitantes e garantir que um cliente tivesse apenas um agendamento ativo.",
    solution:
      "Combinei validações na API com índices únicos parciais no MongoDB, considerando os agendamentos com status agendado. Assim, as regras também são aplicadas no momento da gravação.",
    learning:
      "Aprendi a considerar requisições simultâneas e a usar restrições do banco para reforçar as regras de negócio.",
  },
  {
    title: "Recuperar a situação do atendimento",
    problem:
      "O cliente poderia fechar o navegador e ser chamado enquanto estava desconectado. Ao retornar, precisava entender o que havia acontecido.",
    solution:
      "Trabalhei na recuperação do estado do agendamento e na exibição do tempo decorrido desde a chamada, considerando o prazo de tolerância de 15 minutos.",
    learning:
      "Passei a pensar no fluxo completo do usuário, incluindo interrupções, retorno à aplicação e estados que mudam enquanto ele está ausente.",
  },
  {
    title: "Integrar frontend e backend no deploy",
    problem:
      "Com a interface e a API hospedadas em serviços diferentes, precisei ajustar a comunicação entre os ambientes publicados.",
    solution:
      "Configurei a URL da API por variável de ambiente, ajustei o CORS para a origem do frontend e conferi as requisições no navegador e no Postman.",
    learning:
      "Ganhei experiência investigando problemas de integração, configuração de ambiente e comunicação HTTP.",
  },
];

const architecture = [
  {
    title: "Interface",
    technologies: "Next.js, React e Tailwind CSS",
    description:
      "Telas de cadastro, agendamento, acompanhamento da fila e administração.",
  },
  {
    title: "API",
    technologies: "Python e FastAPI",
    description:
      "Processamento dos agendamentos, regras de negócio e operações de atendimento.",
  },
  {
    title: "Persistência",
    technologies: "MongoDB Atlas",
    description:
      "Armazenamento de clientes, agendamentos e registros de atendimento.",
  },
];

export default function BarberFlowPage() {
  return (
    <article className="min-h-screen bg-neutral-950 text-white">
      <header className="border-b border-neutral-800">
        <div className="mx-auto max-w-7xl px-6 py-12 sm:px-10 lg:px-16 lg:py-16">
          <Link
            href="/#projetos"
            className="inline-flex min-h-11 items-center gap-2 rounded-md text-sm font-medium text-neutral-300 transition-colors hover:text-green-400 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-green-400"
          >
            <span aria-hidden="true">←</span>
            Voltar aos projetos
          </Link>

          <div className="mt-10 max-w-3xl">
            <p className="text-sm font-semibold text-green-400">
              Agendamento e fila digital para barbearias
            </p>

            <h1 className="mt-4 text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
              BarberFlow
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-neutral-300">
              Desenvolvi uma aplicação que conecta o agendamento do cliente
              à rotina de atendimento da barbearia, com acompanhamento da
              fila e gerenciamento pelo painel administrativo.
            </p>
          </div>

          <ul
            aria-label="Tecnologias utilizadas"
            className="mt-7 flex flex-wrap gap-2"
          >
            {technologies.map((technology) => (
              <li
                key={technology}
                className="rounded-md border border-neutral-800 bg-neutral-900 px-3 py-1.5 text-sm text-neutral-300"
              >
                {technology}
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="https://sistemagerenciamentefila.vercel.app/login"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-12 items-center gap-2 rounded-lg bg-green-400 px-5 text-sm font-semibold text-neutral-950 transition-colors hover:bg-green-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-green-400"
            >
              Abrir sistema
              <span aria-hidden="true">↗</span>
              <span className="sr-only">(abre em nova aba)</span>
            </a>

            <a
              href="https://github.com/wilsonkayke/FrontBarber90-"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-12 items-center rounded-lg border border-neutral-700 px-5 text-sm font-semibold transition-colors hover:border-green-400 hover:text-green-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-green-400"
            >
              Ver código no GitHub
              <span className="sr-only">(abre em nova aba)</span>
            </a>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
        <section
          aria-labelledby="context-title"
          className="grid gap-8 border-b border-neutral-800 py-14 lg:grid-cols-[1fr_2fr] lg:gap-16 lg:py-20"
        >
          <h2
            id="context-title"
            className="text-3xl font-semibold tracking-tight"
          >
            O problema
          </h2>

          <div className="max-w-2xl space-y-5 leading-8 text-neutral-300">
            <p>
              O projeto partiu da necessidade de organizar agendamentos e
              tornar a espera mais clara para o cliente. Para a barbearia,
              era importante reunir a fila e as ações de atendimento em
              um único lugar.
            </p>

            <p>
              Criei o BarberFlow para permitir que o cliente consultasse
              seu agendamento e acompanhasse sua posição, enquanto a
              equipe gerenciava as chamadas e a finalização dos atendimentos.
            </p>
          </div>
        </section>

        <section
          aria-labelledby="role-title"
          className="grid gap-8 border-b border-neutral-800 py-14 lg:grid-cols-[1fr_2fr] lg:gap-16 lg:py-20"
        >
          <h2
            id="role-title"
            className="text-3xl font-semibold tracking-tight"
          >
            Minha participação
          </h2>

          <div className="max-w-2xl space-y-5 leading-8 text-neutral-300">
            <p>
              Atuei no desenvolvimento das interfaces, na construção da
              API e na integração com o banco de dados. Também trabalhei
              na definição das regras de agendamento e no fluxo entre
              cliente e administrador.
            </p>

            <p>
              O projeto fez parte do meu trabalho de conclusão de curso
              em Análise e Desenvolvimento de Sistemas e continuou
              evoluindo com ajustes e novas funcionalidades.
            </p>
          </div>
        </section>

        <section
          aria-labelledby="flow-title"
          className="border-b border-neutral-800 py-14 lg:py-20"
        >
          <h2
            id="flow-title"
            className="text-3xl font-semibold tracking-tight"
          >
            Como funciona
          </h2>

          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {flows.map(({ title, steps }) => (
              <div
                key={title}
                className="rounded-2xl border border-neutral-800 bg-neutral-900 p-6 sm:p-7"
              >
                <h3 className="text-xl font-semibold text-green-400">
                  {title}
                </h3>

                <ol className="mt-5 list-decimal space-y-3 pl-5 leading-7 text-neutral-300 marker:text-green-400">
                  {steps.map((step) => (
                    <li key={step} className="pl-2">
                      {step}
                    </li>
                  ))}
                </ol>
              </div>
            ))}
          </div>
        </section>

        <section
          aria-labelledby="architecture-title"
          className="border-b border-neutral-800 py-14 lg:py-20"
        >
          <h2
            id="architecture-title"
            className="text-3xl font-semibold tracking-tight"
          >
            Estrutura da aplicação
          </h2>

          <p className="mt-4 max-w-2xl leading-7 text-neutral-300">
            A interface se comunica com a API por requisições HTTP. A API
            processa as operações e consulta ou atualiza os dados no MongoDB.
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {architecture.map(({ title, technologies, description }) => (
              <div key={title} className="border-t border-neutral-700 pt-5">
                <h3 className="text-lg font-semibold">{title}</h3>

                <p className="mt-2 text-sm font-medium text-green-400">
                  {technologies}
                </p>

                <p className="mt-3 text-sm leading-7 text-neutral-300">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section
          aria-labelledby="challenges-title"
          className="border-b border-neutral-800 py-14 lg:py-20"
        >
          <h2
            id="challenges-title"
            className="text-3xl font-semibold tracking-tight"
          >
            Desafios e decisões
          </h2>

          <div className="mt-8 space-y-6">
            {challenges.map(({ title, problem, solution, learning }) => (
              <section
                key={title}
                className="rounded-2xl border border-neutral-800 bg-neutral-900 p-6 sm:p-8"
              >
                <h3 className="text-xl font-semibold tracking-tight sm:text-2xl">
                  {title}
                </h3>

                <dl className="mt-6 grid gap-6 lg:grid-cols-2 lg:gap-10">
                  <div>
                    <dt className="text-sm font-semibold text-neutral-100">
                      O desafio
                    </dt>
                    <dd className="mt-2 leading-7 text-neutral-300">
                      {problem}
                    </dd>
                  </div>

                  <div>
                    <dt className="text-sm font-semibold text-green-400">
                      Como enfrentei
                    </dt>
                    <dd className="mt-2 leading-7 text-neutral-300">
                      {solution}
                    </dd>
                  </div>
                </dl>

                <div className="mt-6 border-t border-neutral-800 pt-5">
                  <h4 className="text-sm font-semibold">O que aprendi</h4>
                  <p className="mt-2 leading-7 text-neutral-300">
                    {learning}
                  </p>
                </div>
              </section>
            ))}
          </div>
        </section>

        <section
          aria-labelledby="results-title"
          className="grid gap-8 border-b border-neutral-800 py-14 lg:grid-cols-[1fr_2fr] lg:gap-16 lg:py-20"
        >
          <h2
            id="results-title"
            className="text-3xl font-semibold tracking-tight"
          >
            Resultado e evolução
          </h2>

          <div className="max-w-2xl space-y-5 leading-8 text-neutral-300">
            <p>
              O projeto reúne o fluxo de cadastro, agendamento,
              acompanhamento da fila e gerenciamento de atendimentos.
              Durante o desenvolvimento, realizei testes manuais na
              interface e nas rotas da API.
            </p>

            <p>
              Essa experiência aprofundou minha compreensão sobre a
              integração entre frontend, backend e banco de dados,
              principalmente ao investigar falhas e acompanhar uma
              operação desde a tela até sua persistência.
            </p>

            <p>
              Entre as melhorias planejadas estão notificações
              automáticas e relatórios mais detalhados sobre os atendimentos.
            </p>
          </div>
        </section>

        <footer className="flex flex-wrap items-center justify-between gap-4 py-10">
          <Link
            href="/#projetos"
            className="inline-flex min-h-11 items-center rounded-md text-sm font-medium text-neutral-300 transition-colors hover:text-green-400 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-green-400"
          >
            Voltar aos projetos
          </Link>

          <Link
            href="/#contato"
            className="inline-flex min-h-11 items-center rounded-md text-sm font-semibold text-green-400 transition-colors hover:text-green-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-green-400"
          >
            Conversar sobre um projeto
          </Link>
        </footer>
      </div>
    </article>
  );
}