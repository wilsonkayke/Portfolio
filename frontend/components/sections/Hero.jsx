import fotoFormal from "../../assets/images/foto_formal_portfolio.png";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-[calc(100vh-80px)] bg-green-950 font-sans text-white dark:bg-black"
    >
      <main className="mx-auto flex min-h-[calc(100vh-80px)] w-full max-w-7xl flex-col items-start justify-center px-6 py-14 sm:px-10 sm:py-16 lg:flex-row lg:items-center lg:px-16 lg:py-20">

        {/* Conteúdo principal */}
        <div className="w-full max-w-3xl">

          {/* Subtítulo */}
          <p className="mb-5 text-sm font-medium uppercase tracking-[0.3em] text-green-400">
            Desenvolvedor Web
          </p>

          {/* Título */}
          <h1 className="text-5xl font-extrabold leading-[0.95] tracking-tight sm:text-6xl lg:text-8xl">
            Kayke
            <span className="block text-green-500">
              Wilson.
            </span>
          </h1>

          {/* Descrição */}
          <p className="mt-7 max-w-xl text-base leading-7 text-gray-300 sm:mt-8 sm:text-lg sm:leading-8">
            Desenvolvo aplicações web modernas, funcionais e focadas
            em proporcionar uma boa experiência para o usuário.
          </p>

          {/* Botões */}
          <div className="mt-8 flex flex-wrap gap-4 sm:mt-10">
            <a
              href="#projetos"
              className="rounded-full bg-green-500 px-7 py-3 font-semibold text-black transition duration-300 hover:-translate-y-1 hover:bg-green-400 hover:shadow-lg hover:shadow-green-500/20"
            >
              Ver projetos
            </a>

            <a
              href="#contato"
              className="rounded-full border border-gray-700 px-7 py-3 font-semibold text-white transition duration-300 hover:-translate-y-1 hover:border-green-500 hover:text-green-400"
            >
              Entre em contato
            </a>
          </div>

        </div>

        {/* Elemento visual */}
        <div className="mt-14 flex w-full items-center justify-center lg:mt-0 lg:flex-1">

          <div className="relative flex h-[340px] w-[340px] items-center justify-center sm:h-[400px] sm:w-[400px] lg:h-[520px] lg:w-[520px]">

            {/* Círculo externo */}
            <div className="absolute h-[330px] w-[330px] rounded-full border border-green-500/20 motion-safe:animate-[pulse_6s_ease-in-out_infinite] sm:h-[390px] sm:w-[390px] lg:h-[500px] lg:w-[500px]" />

            {/* Círculo intermediário */}
            <div className="absolute h-[290px] w-[290px] rounded-full border border-green-500/15 motion-safe:animate-[pulse_5s_ease-in-out_infinite] sm:h-[350px] sm:w-[350px] lg:h-[440px] lg:w-[440px]" />

            {/* Fundo da foto */}
            <div className="absolute h-[260px] w-[260px] rounded-full bg-green-900/30 sm:h-[320px] sm:w-[320px] lg:h-[390px] lg:w-[390px]" />

            {/* Foto */}
            <div className="relative flex h-[270px] w-[270px] items-end justify-center overflow-hidden rounded-full border border-green-500/30 bg-green-900/30 shadow-2xl shadow-black/40 transition duration-700 hover:scale-105 hover:border-green-500/50 sm:h-[330px] sm:w-[330px] lg:h-[400px] lg:w-[400px]">

              <Image
                src={fotoFormal}
                alt="Kayke Wilson"
                width={500}
                height={500}
                priority
                className="h-full w-full scale-[1.25] object-cover object-top transition duration-700"
              />

            </div>

          </div>

        </div>

      </main>
    </section>
  );
}