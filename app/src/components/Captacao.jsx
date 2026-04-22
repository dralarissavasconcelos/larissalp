import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { WhatsappLogo, ArrowRight } from '@phosphor-icons/react'

const WA_NUMBER = '557196803516'
const WA_MESSAGE = 'vim pelo site pode me informar mais?'
const waLink = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(WA_MESSAGE)}`

export default function Captacao() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })


  return (
    <section id="captacao" className="section" style={{ background: 'var(--color-bg)' }}>
      <div className="container">
        <div
          ref={ref}
          style={{
            background: 'linear-gradient(145deg, var(--color-bege-light) 0%, #EDE5DA 60%, #E0D9CF 100%)',
            border: '1px solid var(--color-border)',
            borderRadius: 'var(--radius-card)',
            padding: 'clamp(2.5rem, 7vw, 6rem) clamp(1.5rem, 5vw, 5rem)',
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '3rem',
            alignItems: 'center',
            overflow: 'hidden',
            position: 'relative',
          }}
          className="captacao-grid"
        >
          {/* Decorative orb */}
          <div aria-hidden="true" style={{
            position: 'absolute',
            top: '-4rem',
            right: '-4rem',
            width: '24rem',
            height: '24rem',
            borderRadius: '50%',
            background: 'rgba(201,184,168,0.25)',
            filter: 'blur(60px)',
            pointerEvents: 'none',
          }} />

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            style={{ position: 'relative', zIndex: 1 }}
          >
            <span className="eyebrow-pill">Agende sua avaliação</span>
            <h2 className="display-lg" style={{ marginTop: '1.25rem', maxWidth: '14ch' }}>
              O primeiro passo<br />
              começa com<br />
              <em style={{ fontStyle: 'italic', color: 'var(--color-mocha)' }}>uma conversa</em>
            </h2>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.0625rem', fontWeight: 300, color: 'var(--color-text-muted)', lineHeight: 1.75, marginTop: '1.25rem', maxWidth: '46ch' }}>
              A avaliação é o momento em que entendo o seu olhar, seus objetivos e
              se a blefaroplastia ou outros procedimentos é a melhor indicação para você.
            </p>

            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp"
              style={{ marginTop: '2rem', display: 'inline-flex' }}
            >
              <WhatsappLogo size={18} weight="fill" />
              Conversar pelo WhatsApp
            </a>
          </motion.div>

          {/* Direct Contact */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            style={{ position: 'relative', zIndex: 1 }}
          >
            <div
              style={{
                background: 'rgba(253,250,246,0.85)',
                backdropFilter: 'blur(12px)',
                border: '1px solid rgba(255,255,255,0.5)',
                borderRadius: 'var(--radius-card)',
                padding: '3rem 2.5rem',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                gap: '1.5rem',
                boxShadow: 'var(--shadow-soft)',
              }}
            >
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.75rem', fontWeight: 500, color: 'var(--color-text)' }}>
                Fale conosco agora
              </h3>
              
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '1rem', fontWeight: 300, color: 'var(--color-text-muted)', lineHeight: 1.6 }}>
                Clique no botão abaixo para ser atendida diretamente pelo WhatsApp. Nossa equipe está pronta para tirar todas as suas dúvidas.
              </p>

              <a 
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary" 
                style={{ marginTop: '0.5rem', justifyContent: 'center', width: '100%', maxWidth: '300px' }}
              >
                Ir para o WhatsApp
                <span className="arrow-icon">
                  <ArrowRight size={14} />
                </span>
              </a>

              <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.75rem', color: 'var(--color-text-soft)', textAlign: 'center', lineHeight: 1.5, marginTop: '0.5rem' }}>
                Atendimento rápido e humanizado.
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (min-width: 768px) {
          .captacao-grid { grid-template-columns: 1fr 1fr !important; }
        }
      `}</style>
    </section>
  )
}
