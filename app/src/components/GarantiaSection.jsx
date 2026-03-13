export function GarantiaSection() {
  return (
    <section className="w-full bg-background py-12 md:py-16 px-4">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-xl md:text-2xl font-bold text-foreground">
          Queremos garantir sua <span className="text-bronze">satisfação</span>
        </h2>
        <p className="text-sm md:text-base text-muted mt-4 leading-relaxed">
          Após o pagamento temos <span className="text-foreground font-semibold">1 dia</span> para alinhar o projeto
          e mais <span className="text-foreground font-semibold">7 dias</span> para entregar o site pronto.
          Se esse prazo não for cumprido, devolvemos <span className="text-foreground font-semibold">100% do valor</span>.
        </p>
      </div>
    </section>
  )
}

