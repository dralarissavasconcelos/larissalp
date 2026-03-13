const empresas = [
  { name: 'rot1', src: '/images/rot1.png', alt: 'Logo 1' },
  { name: 'rot2', src: '/images/rot2.png', alt: 'Logo 2' },
  { name: 'rot3', src: '/images/rot3.png', alt: 'Logo 3' },
  { name: 'rot4', src: '/images/rot4.png', alt: 'Logo 4' },
  { name: 'rot5', src: '/images/rot5.png', alt: 'Logo 5' },
]

export function EmpresasSection() {
  const items = [...empresas, ...empresas]

  return (
    <section className="w-full bg-background py-10 md:py-14 px-4 border-t border-surface-light/30">
      <div className="max-w-6xl mx-auto">
        <p className="text-center text-xs md:text-sm tracking-[0.25em] uppercase text-muted mb-6">
          Empresas que já confiam em nós
        </p>
        <div className="relative overflow-hidden rounded-2xl bg-white border border-surface-light/40 py-4">
          <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-background/80 to-transparent pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-background/80 to-transparent pointer-events-none" />
          <div className="marquee-row flex gap-10 items-center">
            {items.map((empresa, index) => (
              <div
                key={`${empresa.name}-${index}`}
                className="flex-shrink-0 h-10 md:h-12 flex items-center justify-center px-6"
              >
                <img
                  src={empresa.src}
                  alt={empresa.alt}
                  className="max-h-8 md:max-h-10 w-auto object-contain opacity-90 hover:opacity-100 transition-opacity"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

