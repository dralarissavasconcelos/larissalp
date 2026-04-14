import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Buildings } from '@phosphor-icons/react'

import est1 from '../assets/estrutura-1.jpeg'
import est2 from '../assets/estrutura-2.jpeg'
import est3 from '../assets/estrutura-3.jpeg'
import est5 from '../assets/estrutura-5.jpeg'

const GAP = 'clamp(0.375rem, 1vw, 0.625rem)'

/*
  Duas colunas flex independentes:
  Col 1: retângulo (2/3) → quadrado (1/1)
  Col 2: quadrado  (1/1) → retângulo (2/3)
  Altura total de ambas é idêntica → grade perfeitamente alinhada
*/

export default function EstruturaSection() {
  const titleRef = useRef(null)
  const titleInView = useInView(titleRef, { once: true, margin: '-80px' })
  const gridRef = useRef(null)
  const gridInView = useInView(gridRef, { once: true, margin: '-60px' })

  return (
    <section id="estrutura" className="section" style={{ background: 'var(--color-bg)' }}>
      <div className="container">

        {/* Header */}
        <div ref={titleRef} style={{ marginBottom: 'clamp(2rem, 4vw, 3rem)' }}>
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            animate={titleInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="eyebrow-pill"
          >
            <Buildings size={12} weight="regular" style={{ marginRight: '0.25rem' }} />
            Clínica
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={titleInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="display-lg"
            style={{ marginTop: '1rem' }}
          >
            Nossa<br />
            <em style={{ fontStyle: 'italic', color: 'var(--color-mocha)' }}>estrutura</em>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={titleInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.9375rem',
              fontWeight: 300,
              color: 'var(--color-text-muted)',
              marginTop: '0.875rem',
              maxWidth: '44ch',
              lineHeight: 1.7,
            }}
          >
            Um ambiente pensado para o conforto, a segurança e a privacidade de cada paciente.
          </motion.p>
        </div>

        {/* Grade 2×2 com colunas flex independentes */}
        <div
          ref={gridRef}
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: GAP,
            alignItems: 'start',
          }}
        >
          {/* ── Coluna 1: retângulo → quadrado ── */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: GAP }}>
            {[
              { src: est1, alt: 'Recepção da clínica', ratio: '2/3', pos: 'center', delay: 0 },
              { src: est5, alt: 'Espaço clínico',      ratio: '1/1', pos: 'center', delay: 0.15 },
            ].map((foto, i) => (
              <motion.div
                key={foto.alt}
                initial={{ opacity: 0, y: 16 }}
                animate={gridInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.65, delay: foto.delay, ease: [0.16, 1, 0.3, 1] }}
                style={{
                  aspectRatio: foto.ratio,
                  borderRadius: 'var(--radius-card)',
                  overflow: 'hidden',
                  boxShadow: 'var(--shadow-card)',
                  transition: 'box-shadow 0.3s var(--ease-elegant), transform 0.3s var(--ease-elegant)',
                }}
                onMouseEnter={e => { e.currentTarget.style.boxShadow = 'var(--shadow-hover)'; e.currentTarget.style.transform = 'scale(1.015)' }}
                onMouseLeave={e => { e.currentTarget.style.boxShadow = 'var(--shadow-card)'; e.currentTarget.style.transform = 'scale(1)' }}
              >
                <img src={foto.src} alt={foto.alt} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: foto.pos, display: 'block' }} loading={i === 0 ? 'eager' : 'lazy'} decoding="async" />
              </motion.div>
            ))}
          </div>

          {/* ── Coluna 2: quadrado → retângulo ── */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: GAP }}>
            {[
              { src: est2, alt: 'Sala de procedimentos',   ratio: '1/1', pos: 'center',     delay: 0.08 },
              { src: est3, alt: 'Ambiente de atendimento', ratio: '2/3', pos: 'center top', delay: 0.22 },
            ].map((foto) => (
              <motion.div
                key={foto.alt}
                initial={{ opacity: 0, y: 16 }}
                animate={gridInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.65, delay: foto.delay, ease: [0.16, 1, 0.3, 1] }}
                style={{
                  aspectRatio: foto.ratio,
                  borderRadius: 'var(--radius-card)',
                  overflow: 'hidden',
                  boxShadow: 'var(--shadow-card)',
                  transition: 'box-shadow 0.3s var(--ease-elegant), transform 0.3s var(--ease-elegant)',
                }}
                onMouseEnter={e => { e.currentTarget.style.boxShadow = 'var(--shadow-hover)'; e.currentTarget.style.transform = 'scale(1.015)' }}
                onMouseLeave={e => { e.currentTarget.style.boxShadow = 'var(--shadow-card)'; e.currentTarget.style.transform = 'scale(1)' }}
              >
                <img src={foto.src} alt={foto.alt} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: foto.pos, display: 'block' }} loading="lazy" decoding="async" />
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
