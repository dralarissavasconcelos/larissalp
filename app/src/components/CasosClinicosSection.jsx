import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { ArrowLeft, ArrowRight } from '@phosphor-icons/react'
import imgAntes from '../assets/antes.png'
import imgDepois from '../assets/depois.png'
import imgAntes2 from '../assets/antes2.png'
import imgDepois2 from '../assets/depois2.png'

const cases = [
  {
    id: 'caso-01',
    antesImg: imgAntes,
    depoisImg: imgDepois,
    label: 'Caso Clínico',
    tag: 'Blefaroplastia Superior Bilateral',
    note: 'Paciente com excesso de pele palpebral bilateral causando aspecto de cansaço e assimetria. Realizada blefaroplastia superior com ressecção conservadora e incisão na dobra palpebral natural. Resultado com naturalidade e abertura do olhar.',
    result: 'Resultado real — pós-operatório',
  },
  {
    id: 'caso-02',
    antesImg: imgAntes2,
    depoisImg: imgDepois2,
    label: 'Caso Clínico',
    tag: 'Blefaroplastia Superior Bilateral',
    note: 'Paciente com ptose palpebral superior bilateral e excesso de pele causando sensação de olhar pesado. Blefaroplastia superior realizada com técnica conservadora respeitando a expressão natural do olhar.',
    result: 'Resultado real — pós-operatório',
  },
]

function PhotoSlot({ src, label, tag }) {
  return (
    <div style={{ position: 'relative' }}>
      <div style={{
        background: 'var(--color-bege-light)',
        border: '1px solid var(--color-border)',
        padding: '3px',
        borderRadius: 'var(--radius-md)',
      }}>
        <div style={{
          borderRadius: 'calc(var(--radius-md) - 3px)',
          overflow: 'hidden',
          aspectRatio: '1 / 1',
          background: 'linear-gradient(135deg, #CEC5BA, #B8AFA4)',
          display: 'flex',
          alignItems: 'flex-end',
          justifyContent: 'center',
          position: 'relative',
        }}>
          {src && (
            <img
              src={src}
              alt={`${label} — ${tag}`}
              style={{
                position: 'absolute',
                inset: 0,
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: 'top',
              }}
              loading="lazy"
            />
          )}
          {/* Label badge */}
          <span style={{
            position: 'relative',
            zIndex: 1,
            fontFamily: 'var(--font-body)',
            fontSize: '0.6875rem',
            fontWeight: 500,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: 'var(--color-text)',
            marginBottom: '0.875rem',
            background: 'rgba(253,250,246,0.88)',
            backdropFilter: 'blur(6px)',
            padding: '0.3rem 0.75rem',
            borderRadius: 'var(--radius-pill)',
            border: '1px solid rgba(255,255,255,0.5)',
          }}>
            {label}
          </span>
        </div>
      </div>
    </div>
  )
}

function CaseCard({ caso }) {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1.75rem' }} className="case-card-inner">
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.875rem' }}>
        <PhotoSlot src={caso.antesImg} label="Antes" tag={caso.tag} />
        <PhotoSlot src={caso.depoisImg} label="Depois" tag={caso.tag} />
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.875rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.625rem', flexWrap: 'wrap' }}>
          <span className="eyebrow-pill">{caso.label}</span>
          <span className="eyebrow-pill" style={{ background: 'var(--color-bege)', color: 'var(--color-text-muted)' }}>{caso.tag}</span>
        </div>
        <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.9375rem', fontWeight: 300, color: 'var(--color-text-muted)', lineHeight: 1.75 }}>
          {caso.note}
        </p>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--color-mocha)', opacity: 0.6 }} />
          <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.8125rem', color: 'var(--color-text-soft)', fontStyle: 'italic' }}>
            {caso.result}
          </span>
        </div>
      </div>
    </div>
  )
}

export default function CasosClinicosSection() {
  const [current, setCurrent] = useState(0)
  const titleRef = useRef(null)
  const titleInView = useInView(titleRef, { once: true, margin: '-80px' })

  const prev = () => setCurrent(c => (c - 1 + cases.length) % cases.length)
  const next = () => setCurrent(c => (c + 1) % cases.length)

  return (
    <section id="casos" className="section" style={{ background: 'var(--color-bg-muted)' }}>
      <div className="container">
        {/* Header */}
        <div ref={titleRef} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 'clamp(2.5rem, 5vw, 4rem)', flexWrap: 'wrap', gap: '1.5rem' }}>
          <div>
            <motion.span
              initial={{ opacity: 0, y: 16 }}
              animate={titleInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="eyebrow-pill"
            >
              Casos Clínicos
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={titleInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="display-lg"
              style={{ marginTop: '1rem' }}
            >
              Resultados que<br />
              <em style={{ fontStyle: 'italic', color: 'var(--color-mocha)' }}>falam por si</em>
            </motion.h2>
          </div>

          {/* Navigation */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={titleInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            style={{ display: 'flex', gap: '0.625rem' }}
          >
            <button
              onClick={prev}
              aria-label="Caso anterior"
              style={{
                width: '48px', height: '48px', borderRadius: '50%',
                background: 'var(--color-bg-card)', border: '1px solid var(--color-border)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                cursor: 'pointer', transition: 'all 0.25s var(--ease-elegant)', color: 'var(--color-text)',
              }}
              onMouseEnter={e => { e.currentTarget.style.background = 'var(--color-bege)'; e.currentTarget.style.transform = 'scale(1.05)' }}
              onMouseLeave={e => { e.currentTarget.style.background = 'var(--color-bg-card)'; e.currentTarget.style.transform = 'scale(1)' }}
            >
              <ArrowLeft size={18} weight="light" />
            </button>
            <button
              onClick={next}
              aria-label="Próximo caso"
              style={{
                width: '48px', height: '48px', borderRadius: '50%',
                background: 'var(--color-text)', border: '1px solid transparent',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                cursor: 'pointer', transition: 'all 0.25s var(--ease-elegant)', color: 'var(--color-white)',
              }}
              onMouseEnter={e => { e.currentTarget.style.background = 'var(--color-mocha-dark)'; e.currentTarget.style.transform = 'scale(1.05)' }}
              onMouseLeave={e => { e.currentTarget.style.background = 'var(--color-text)'; e.currentTarget.style.transform = 'scale(1)' }}
            >
              <ArrowRight size={18} weight="light" />
            </button>
          </motion.div>
        </div>

        {/* Case display */}
        <div style={{
          background: 'var(--color-bg-card)',
          border: '1px solid var(--color-border-soft)',
          borderRadius: 'var(--radius-card)',
          padding: 'clamp(1.5rem, 4vw, 3rem)',
          boxShadow: 'var(--shadow-soft)',
        }}>
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            >
              <CaseCard caso={cases[current]} />
            </motion.div>
          </AnimatePresence>

          {/* Dots */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '0.5rem', marginTop: '2rem' }}>
            {cases.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                aria-label={`Ir para caso ${i + 1}`}
                style={{
                  width: i === current ? '24px' : '8px',
                  height: '8px', borderRadius: '4px',
                  background: i === current ? 'var(--color-mocha)' : 'var(--color-nude-light)',
                  border: 'none', cursor: 'pointer',
                  transition: 'all 0.35s var(--ease-elegant)',
                }}
              />
            ))}
          </div>
        </div>

        {/* Disclaimer */}
        <p style={{ textAlign: 'center', fontFamily: 'var(--font-body)', fontSize: '0.75rem', color: 'var(--color-text-soft)', fontWeight: 300, maxWidth: '60ch', margin: '1.5rem auto 0' }}>
          Fotos reais de pacientes com autorização. Resultados individuais podem variar conforme a anatomia de cada paciente e o planejamento cirúrgico realizado.
        </p>
      </div>
    </section>
  )
}
