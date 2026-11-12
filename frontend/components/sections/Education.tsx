export default function Education() {
  return (
    <section
      id="formacao"
      aria-labelledby="education-title"
      className="border-t border-neutral-800 bg-neutral-950 text-white"
    >
      <div className="mx-auto w-full max-w-7xl px-6 py-16 sm:px-10 sm:py-20 lg:px-16 lg:py-24">
        <h2
          id="education-title"
          className="text-4xl font-bold tracking-tight sm:text-5xl"
        >
          Formação acadêmica
        </h2>

        <article className="mt-8 max-w-4xl rounded-2xl border border-neutral-800 bg-neutral-900 p-5 sm:p-7 lg:mt-10">
          <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2">
            <h3 className="text-xl font-semibold tracking-tight sm:text-2xl">
              Análise e Desenvolvimento de Sistemas
            </h3>

            <p className="text-sm font-semibold text-green-400">
              Concluído em <time dateTime="2026">2026</time>
            </p>
          </div>

          <p className="mt-2 leading-7 text-neutral-300">
            Centro Universitário Nobre de Feira de Santana (UNIFAN)
          </p>

          <div className="mt-6 border-t border-neutral-800 pt-5">
            <h4 className="text-sm font-semibold">
              Trabalho de conclusão de curso
            </h4>

            <p className="mt-2 max-w-2xl text-sm leading-6 text-neutral-300 sm:text-base sm:leading-7">
              Desenvolvi e apresentei o BarberFlow, um sistema web que reúne
              agendamento de horários, acompanhamento da fila pelo cliente e
              gestão de atendimentos pela barbearia.
            </p>
          </div>
        </article>
      </div>
    </section>
  );
}