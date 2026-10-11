import fotoFormal from "../../assets/images/foto_formal_portfolio.png";
import Image from "next/image";

export default function Hero() {
  return (
    <div className="min-h-[calc(100vh-80px)] bg-green-950 font-sans text-white dark:bg-black">
      <main className="mx-auto flex min-h-screen w-full max-w-7xl items-center px-6 py-20 sm:px-10 lg:px-16">

        {/* Conteúdo principal */}
        <div className="w-full max-w-3xl">

          <p className="mb-5 text-sm font-medium uppercase tracking-[0.3em] text-green-400">
            Desenvolvedor Web
          </p>

          <h1 className="text-6xl font-extrabold leading-[0.95] tracking-tight sm:text-7xl lg:text-8xl">
            Kayke
            <span className="block text-green-500">
              Wilson.
            </span>
          </h1>

          <p className="mt-8 max-w-xl text-lg leading-8 text-gray-300">
            Desenvolvo aplicações web modernas, funcionais e focadas
            em proporcionar uma boa experiência para o usuário.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#projetos"
              className="rounded-full bg-green-500 px-7 py-3 font-semibold text-black transition hover:bg-green-400"
            >
              Ver projetos
            </a>

            <a
              href="#contato"
              className="rounded-full border border-gray-700 px-7 py-3 font-semibold text-white transition hover:border-green-500 hover:text-green-400"
            >
              Entre em contato
            </a>
          </div>

        </div>

        {/* Elemento visual */}
        <div className="hidden flex-1 items-center justify-center lg:flex">
          <div className="relative flex h-[520px] w-[520px] items-center justify-center">

            {/* Círculo externo */}
            <div className="absolute h-[500px] w-[500px] rounded-full border border-green-500/20" />

            {/* Círculo intermediário */}
            <div className="absolute h-[440px] w-[440px] rounded-full border border-green-500/15" />

            {/* Fundo da foto */}
            <div className="absolute h-[390px] w-[390px] rounded-full bg-green-900/30" />

            {/* Foto */}
            <div className="relative flex h-[400px] w-[400px] items-end justify-center overflow-hidden rounded-full border border-green-500/30 bg-green-900/30 shadow-2xl shadow-black/40">

              <Image
                src={fotoFormal}
                alt="Kayke Wilson"
                width={500}
                height={500}
                priority
                className="h-full w-full scale-[1.25] object-cover object-top"
              />

            </div>

          </div>
        </div>

      </main>
    </div>
  );
}