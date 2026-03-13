const WHATSAPP_URL = 'https://api.whatsapp.com/send?phone=557181959330'

export function OfertaFinalSection() {
  return (
    <section className="w-full bg-background py-14 md:py-20 px-4 border-t border-surface-light/20">
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-[11px] md:text-xs tracking-[0.28em] uppercase text-bronze mb-3">
          Condição especial para este projeto
        </p>
        <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-4">
          Um site que transmite seu valor, com uma condição alinhada ao seu momento.
        </h2>
        <p className="text-sm md:text-base text-muted leading-relaxed mb-6">
          Considerando o escopo, especialização e o nível de cuidado com o projeto, este tipo de entrega
          poderia facilmente ser orçado em <span className="text-foreground font-semibold">R$ 4.500,00</span>.
        </p>
        <div className="mb-6">
          <p className="text-sm text-muted line-through">R$ 4.500,00</p>
          <p className="text-3xl md:text-4xl font-semibold text-foreground mt-1">
            R$ 2.800,00
          </p>
        </div>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex w-full sm:w-auto justify-center rounded-full bg-bronze px-8 py-3.5 text-sm font-semibold uppercase tracking-[0.18em] text-background shadow-[0_0_35px_rgba(184,149,107,0.45)] transition-colors hover:bg-bronze-light"
        >
          Quero transmitir valor
        </a>
      </div>
    </section>
  )
}

