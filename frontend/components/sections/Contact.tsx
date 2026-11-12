const email = "kaykedev42@email.com";

const contactLinks = [
  {
    label: "WhatsApp",
    description: "Conversar sobre um projeto",
    href: "https://wa.me/557599568767",
  },
  {
    label: "GitHub",
    description: "Ver meus repositórios",
    href: "https://github.com/wilsonkayke?tab=repositories",
  },
];

export default function Contact() {
  return (
    <section
      id="contato"
      aria-labelledby="contact-title"
      className="border-t border-neutral-800 bg-neutral-900 text-white"
    >
      <div className="mx-auto w-full max-w-7xl px-6 py-16 sm:px-10 sm:py-20 lg:px-16 lg:py-24">
        <h2
          id="contact-title"
          className="text-4xl font-bold tracking-tight sm:text-5xl"
        >
          Contato
        </h2>

        <div className="mt-8 grid gap-8 rounded-2xl border border-neutral-800 bg-neutral-950 p-5 sm:p-7 lg:mt-10 lg:grid-cols-2 lg:gap-12 lg:p-10">
          <div>
            <p className="max-w-md text-base leading-7 text-neutral-300 sm:text-lg sm:leading-8">
              Estou aberto a oportunidades como desenvolvedor full stack
              júnior e a projetos freelance de desenvolvimento web.
            </p>

            <p className="mt-3 wrap-break-word text-sm text-neutral-400">
              {email}
            </p>

            <div className="mt-5 flex flex-wrap gap-3">
              <a
                href={`mailto:${email}`}
                className="inline-flex min-h-11 items-center rounded-lg bg-green-400 px-4 text-sm font-semibold text-neutral-950 transition-colors hover:bg-green-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-400"
              >
                Enviar e-mail
              </a>

              <a
                href="/Curriculo_kayke_wilson.pdf"
                download="Curriculo_kayke_wilson.pdf"
                className="inline-flex min-h-11 items-center rounded-lg border border-neutral-700 px-4 text-sm font-semibold transition-colors hover:border-green-400 hover:text-green-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-400"
              >
                Baixar currículo (PDF)
              </a>
            </div>
          </div>

          <ul className="divide-y divide-neutral-800 border-t border-neutral-800 pt-2 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
            {contactLinks.map(({ label, description, href }) => (
              <li key={label} className="py-1">
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between gap-4 rounded-lg px-3 py-3 transition-colors hover:bg-neutral-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-400"
                >
                  <span>
                    <span className="block text-sm font-semibold">{label}</span>
                    <span className="mt-1 block text-sm text-neutral-400">
                      {description}
                    </span>
                  </span>

                  <span aria-hidden="true" className="shrink-0 text-green-400">
                    ↗
                  </span>
                  <span className="sr-only">(abre em nova aba)</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}