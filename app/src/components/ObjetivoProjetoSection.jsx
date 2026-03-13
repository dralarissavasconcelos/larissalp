export function ObjetivoProjetoSection() {
  return (
    <section className="w-full bg-background py-14 md:py-20 px-4 border-t border-surface-light/20">
      <div className="max-w-3xl mx-auto">
        <p className="text-[11px] md:text-xs tracking-[0.28em] uppercase text-bronze mb-3">
          Objetivo do projeto
        </p>
        <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-5">
          Transformar o site da Dra. Larissa em um ativo de autoridade médica.
        </h2>
        <ul className="space-y-5">
          <li className="flex items-start gap-4">
            <div className="w-8 aspect-square rounded-full border border-bronze/60 text-bronze flex items-center justify-center text-[11px] font-semibold mt-0.5">
              1
            </div>
            <p className="text-sm md:text-base text-muted leading-relaxed">
              Posicionar a Dra. Larissa como referência em cirurgia de pálpebras, deixando clara sua
              especialização logo nos primeiros blocos do site.
            </p>
          </li>
          <li className="flex items-start gap-4">
            <div className="w-8 aspect-square rounded-full border border-bronze/60 text-bronze flex items-center justify-center text-[11px] font-semibold mt-0.5">
              2
            </div>
            <p className="text-sm md:text-base text-muted leading-relaxed">
              Organizar formação, credenciais e experiência de forma visualmente elegante e fácil de
              entender para o paciente leigo.
            </p>
          </li>
          <li className="flex items-start gap-4">
            <div className="w-8 aspect-square rounded-full border border-bronze/60 text-bronze flex items-center justify-center text-[11px] font-semibold mt-0.5">
              3
            </div>
            <p className="text-sm md:text-base text-muted leading-relaxed">
              Criar uma jornada digital que eduque, gere confiança e conduza o paciente até o contato
              (WhatsApp, formulário ou agendamento).
            </p>
          </li>
          <li className="flex items-start gap-4">
            <div className="w-8 aspect-square rounded-full border border-bronze/60 text-bronze flex items-center justify-center text-[11px] font-semibold mt-0.5">
              4
            </div>
            <p className="text-sm md:text-base text-muted leading-relaxed">
              Fazer com que o site funcione como um <span className="text-foreground font-semibold">ativo estratégico</span> de
              posicionamento e geração de pacientes qualificados — não apenas como um cartão de visitas.
            </p>
          </li>
        </ul>
      </div>
    </section>
  )
}

