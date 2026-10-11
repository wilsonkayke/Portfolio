export default function About() {
  return (
    <section
      id="sobre"
      className="w-full bg-green-950 px-6 py-24 text-white dark:bg-black sm:px-10 lg:px-16"
    >
      <div className="mx-auto grid w-full max-w-7xl gap-16 lg:grid-cols-2 lg:items-center">
        {/* Título */}
        <div>
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-green-400">
            Sobre mim
          </p>

          <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
            Transformando ideias
            <span className="block text-green-500">em aplicações.</span>
          </h2>
        </div>

        {/* Texto */}
        <div className="space-y-6 text-base leading-8 text-gray-300 sm:text-lg">
          <p>
            Sou formado em Análise e Desenvolvimento de Sistemas e desenvolvedor
            focado na criação de aplicações web.
          </p>

          <p>
            Tenho interesse no desenvolvimento de sistemas completos, atuando
            tanto na construção das interfaces quanto na implementação da lógica
            e das funcionalidades que fazem a aplicação funcionar.
          </p>

          <p>
            Ao longo da minha trajetória, venho desenvolvendo projetos práticos
            utilizando tecnologias como React, Next.js, JavaScript, Python,
            FastAPI e MongoDB.
          </p>

          <p>
            Gosto de transformar problemas em soluções funcionais, buscando
            criar aplicações organizadas, intuitivas e com uma boa experiência
            para o usuário.
          </p>
        </div>
      </div>

      {/* Informações */}
      <div className="mx-auto mt-20 grid w-full max-w-7xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <div className="rounded-2xl border border-green-900/60 bg-green-900/20 p-6">
          <span className="text-3xl font-bold text-green-400">01</span>

          <h3 className="mt-4 text-xl font-semibold">Desenvolvimento Web</h3>

          <p className="mt-2 text-sm leading-6 text-gray-400">
            Criação de aplicações web modernas, responsivas e funcionais.
          </p>
        </div>

        <div className="rounded-2xl border border-green-900/60 bg-green-900/20 p-6">
          <span className="text-3xl font-bold text-green-400">02</span>

          <h3 className="mt-4 text-xl font-semibold">Frontend & Backend</h3>

          <p className="mt-2 text-sm leading-6 text-gray-400">
            Desenvolvimento de interfaces e APIs para aplicações completas.
          </p>
        </div>

        <div className="rounded-2xl border border-green-900/60 bg-green-900/20 p-6">
          <span className="text-3xl font-bold text-green-400">03</span>

          <h3 className="mt-4 text-xl font-semibold">Soluções Funcionais</h3>

          <p className="mt-2 text-sm leading-6 text-gray-400">
            Transformação de necessidades em soluções organizadas, intuitivas e
            voltadas para uma boa experiência do usuário.
          </p>
        </div>
      </div>
    </section>
  );
}
