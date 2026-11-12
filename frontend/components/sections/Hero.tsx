import Image from "next/image";
import fotoFormal from "../../public/assets/images/foto_formal_portfolio.png";

export default function Hero() {
  return (
    <section
      id="home"
      aria-labelledby="hero-title"
      className="bg-neutral-950 text-white"
    >
      <div className="mx-auto grid w-full max-w-7xl items-center gap-12 px-6 py-16 sm:px-10 sm:py-20 lg:min-h-[calc(100svh-80px)] lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] lg:gap-16 lg:px-16">
        <div>
          <p className="text-sm font-semibold tracking-wide text-green-400">
            Desenvolvedor Full Stack Júnior
          </p>

          <h1
            id="hero-title"
            className="mt-4 text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl xl:text-7xl"
          >
            Kayke Wilson
          </h1>

          <p className="mt-6 max-w-md text-base leading-7 text-neutral-300 sm:text-lg sm:leading-8">
            Desenvolvo aplicações web completas, da interface à API e ao
            banco de dados.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#projetos"
              className="inline-flex min-h-12 items-center justify-center rounded-lg bg-green-400 px-5 text-sm font-semibold text-neutral-950 transition-colors hover:bg-green-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-green-400"
            >
              Ver projetos
            </a>

            <a
              href="#contato"
              className="inline-flex min-h-12 items-center justify-center rounded-lg border border-neutral-600 px-5 text-sm font-semibold text-white transition-colors hover:border-green-400 hover:text-green-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-green-400"
            >
              Entre em contato
            </a>
          </div>
        </div>

        <div className="relative mx-auto aspect-square w-full max-w-[320px] overflow-hidden rounded-3xl border border-green-400/20 bg-linear-to-br from-green-950 to-neutral-900 lg:ml-auto lg:mr-0 lg:max-w-[384px]">
          <Image
            src={fotoFormal}
            alt="Retrato de Kayke Wilson"
            fill
            sizes="(min-width: 1024px) 384px, (min-width: 368px) 320px, calc(100vw - 48px)"
            className="object-cover object-top"
          />
        </div>
      </div>
    </section>
  );
}