export function ErroMedicosSection() {
  return (
    <section className="w-full bg-background py-14 md:py-20 px-4">
      <div className="max-w-3xl mx-auto">
        <p className="text-[11px] md:text-xs tracking-[0.28em] uppercase text-bronze mb-3">
          Por que muitos sites não convertem
        </p>
        <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-5">
          O erro que 90% dos médicos cometem na presença digital.
        </h2>
        <ul className="space-y-5">
          <li className="flex items-start gap-4">
            <div className="w-8 aspect-square rounded-full border border-bronze/60 text-bronze flex items-center justify-center text-[11px] font-semibold mt-0.5">
              1
            </div>
            <p className="text-sm md:text-base text-muted leading-relaxed">
              Tratar o site apenas como um cartão de visitas digital — com foto, mini bio, lista de
              serviços e contato — sem construir uma narrativa de especialização.
            </p>
          </li>
          <li className="flex items-start gap-4">
            <div className="w-8 aspect-square rounded-full border border-bronze/60 text-bronze flex items-center justify-center text-[11px] font-semibold mt-0.5">
              2
            </div>
            <p className="text-sm md:text-base text-muted leading-relaxed">
              Não responder às dúvidas reais do paciente: se o médico é especialista em pálpebras, qual é
              sua experiência e se ele pode confiar para esse tipo de cirurgia.
            </p>
          </li>
          <li className="flex items-start gap-4">
            <div className="w-8 aspect-square rounded-full border border-bronze/60 text-bronze flex items-center justify-center text-[11px] font-semibold mt-0.5">
              3
            </div>
            <p className="text-sm md:text-base text-muted leading-relaxed">
              Deixar espaço para que outro profissional, com melhor posicionamento digital, pareça mais
              preparado — mesmo quando o nível técnico seja semelhante.
            </p>
          </li>
        </ul>
      </div>
    </section>
  )
}

