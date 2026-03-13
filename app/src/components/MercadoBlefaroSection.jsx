export function MercadoBlefaroSection() {
  return (
    <section className="w-full bg-background py-14 md:py-20 px-4 border-t border-surface-light/20">
      <div className="max-w-3xl mx-auto">
        <p className="text-[11px] md:text-xs tracking-[0.28em] uppercase text-bronze mb-3">
          Oportunidade de mercado
        </p>
        <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-5">
          Um dos procedimentos mais procurados do mundo. E cada vez mais pesquisado online.
        </h2>
        <ul className="space-y-5">
          <li className="flex items-start gap-4">
            <div className="w-8 aspect-square rounded-full border border-bronze/60 text-bronze flex items-center justify-center text-[11px] font-semibold mt-0.5">
              1
            </div>
            <p className="text-sm md:text-base text-muted leading-relaxed">
              Segundo a{' '}
              <span className="text-foreground font-semibold">
                ISAPS (International Society of Aesthetic Plastic Surgery)
              </span>
              , a cirurgia de pálpebras está entre as cirurgias plásticas mais realizadas no mundo.
            </p>
          </li>
          <li className="flex items-start gap-4">
            <div className="w-8 aspect-square rounded-full border border-bronze/60 text-bronze flex items-center justify-center text-[11px] font-semibold mt-0.5">
              2
            </div>
            <p className="text-sm md:text-base text-muted leading-relaxed">
              No Brasil, são mais de{' '}
              <span className="text-foreground font-semibold">231 mil cirurgias ao ano</span>, colocando o
              país entre os líderes nesse tipo de procedimento.
            </p>
          </li>
          <li className="flex items-start gap-4">
            <div className="w-8 aspect-square rounded-full border border-bronze/60 text-bronze flex items-center justify-center text-[11px] font-semibold mt-0.5">
              3
            </div>
            <p className="text-sm md:text-base text-muted leading-relaxed">
              Cada vez mais, essa jornada começa na internet: pacientes pesquisam o procedimento, comparam
              especialistas e decidem em quem confiar a partir do que encontram online.
            </p>
          </li>
        </ul>
      </div>
    </section>
  )
}

