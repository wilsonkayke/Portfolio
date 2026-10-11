export default function Contact() {
  return (
    <section
      id="contato"
      className="w-full bg-green-950 px-6 py-24 text-white dark:bg-black sm:px-10 lg:px-16"
    >
      <div className="mx-auto w-full max-w-7xl">

        <div className="relative overflow-hidden rounded-3xl border border-green-800/60 bg-green-900/20 px-8 py-16 sm:px-12 lg:px-20">

          {/* Elementos decorativos */}
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-green-500/10 blur-3xl" />

          <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-green-500/10 blur-3xl" />

          <div className="relative grid gap-12 lg:grid-cols-2 lg:items-center">

            {/* Texto */}
            <div>

              <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-green-400">
                Contato
              </p>

              <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
                Vamos criar algo
                <span className="block text-green-500">
                  juntos?
                </span>
              </h2>

              <p className="mt-6 max-w-xl text-base leading-7 text-gray-400 sm:text-lg">
                Estou aberto a novas oportunidades, projetos e
                colaborações. Se você quiser conversar sobre tecnologia,
                desenvolvimento ou algum projeto, entre em contato.
              </p>

            </div>

            {/* Links */}
            <div className="flex flex-col gap-4">

              <a
                href="mailto:kaykedev42@email.com"
                className="group flex items-center justify-between rounded-2xl border border-green-800/60 bg-black/20 p-5 transition duration-300 hover:border-green-500/60 hover:bg-green-900/30"
              >
                <div>
                  <p className="text-sm text-gray-500">
                    Email
                  </p>

                  <p className="mt-1 font-medium text-white">
                    kaykedev42@email.com
                  </p>
                </div>

                <span className="text-2xl text-green-500 transition group-hover:translate-x-1">
                  →
                </span>
              </a>

              <a
                href="https://github.com/wilsonkayke?tab=repositories"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between rounded-2xl border border-green-800/60 bg-black/20 p-5 transition duration-300 hover:border-green-500/60 hover:bg-green-900/30"
              >
                <div>
                  <p className="text-sm text-gray-500">
                    GitHub
                  </p>

                  <p className="mt-1 font-medium text-white">
                    Meus projetos
                  </p>
                </div>

                <span className="text-2xl text-green-500 transition group-hover:translate-x-1">
                  →
                </span>
              </a>

              <a
                href="https://wa.me/557599568767"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between rounded-2xl border border-green-800/60 bg-black/20 p-5 transition duration-300 hover:border-green-500/60 hover:bg-green-900/30"
              >
                <div>
                  <p className="text-sm text-gray-500">
                    WhatsApp
                  </p>

                  <p className="mt-1 font-medium text-white">
                    Meu contato de WhatsApp
                  </p>
                </div>

                <span className="text-2xl text-green-500 transition group-hover:translate-x-1">
                  →
                </span>
              </a>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}