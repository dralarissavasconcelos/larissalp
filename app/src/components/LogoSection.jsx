export function LogoSection() {
  return (
    <section className="w-full bg-background py-10 md:py-14 px-4 flex items-center justify-center">
      <div className="max-w-xs md:max-w-sm mx-auto text-center">
        <img
          src="/images/logo.png"
          alt="Sistemaxi"
          className="w-full h-auto object-contain mx-auto"
          loading="lazy"
        />
        <p className="mt-4 text-sm md:text-base text-muted leading-relaxed">
          Transformação digital com tecnologia de ponta. Sistemas, automação e IA para empresas que
          buscam inovação.
        </p>
      </div>
    </section>
  )
}

