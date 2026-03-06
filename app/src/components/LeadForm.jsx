import { useState } from 'react'

const TELEFONE_PATTERN = '^\\([0-9]{2}\\) [0-9]{4,5}-[0-9]{4}$'

function formatTelefone(value) {
  const digits = value.replace(/\D/g, '').slice(0, 11)
  if (digits.length <= 2) return digits ? `(${digits}` : ''
  if (digits.length <= 6) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`
  return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`
}

export function LeadForm({ onSubmit, submitLabel = 'Quero participar do Evento Esquadria Milionária', idPrefix = '' }) {
  const [nomeCompleto, setNomeCompleto] = useState('')
  const [telefone, setTelefone] = useState('')
  const [email, setEmail] = useState('')

  function handleTelefoneChange(e) {
    setTelefone(formatTelefone(e.target.value))
  }

  function handleSubmit(e) {
    e.preventDefault()
    onSubmit?.({ nomeCompleto, telefone, email })
  }

  const n = (id) => idPrefix ? `${idPrefix}-${id}` : id

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label htmlFor={n('nome')} className="block text-white text-sm font-medium mb-2">
          Nome completo
        </label>
        <input
          id={n('nome')}
          type="text"
          value={nomeCompleto}
          onChange={(e) => setNomeCompleto(e.target.value)}
          required
          placeholder="Seu nome completo"
          className="w-full px-4 py-3 rounded-lg bg-background border border-surface-light text-white placeholder:text-muted focus:outline-none focus:border-gold/50 transition-colors"
        />
      </div>
      <div>
        <label htmlFor={n('email')} className="block text-white text-sm font-medium mb-2">
          E-mail
        </label>
        <input
          id={n('email')}
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          placeholder="seu@email.com"
          className="w-full px-4 py-3 rounded-lg bg-background border border-surface-light text-white placeholder:text-muted focus:outline-none focus:border-gold/50 transition-colors"
        />
      </div>
      <div>
        <label htmlFor={n('telefone')} className="block text-white text-sm font-medium mb-2">
          Número de contato
        </label>
        <input
          id={n('telefone')}
          type="tel"
          value={telefone}
          onChange={handleTelefoneChange}
          required
          pattern={TELEFONE_PATTERN}
          title="Use o formato (00) 00000-0000 ou (00) 0000-0000"
          placeholder="(00) 00000-0000"
          className="w-full px-4 py-3 rounded-lg bg-background border border-surface-light text-white placeholder:text-muted focus:outline-none focus:border-gold/50 transition-colors"
        />
      </div>
      <button
        type="submit"
        className="w-full inline-flex items-center justify-center px-8 py-3.5 text-sm font-semibold text-background bg-gold hover:bg-gold-light transition-all duration-200 rounded-full shadow-lg shadow-black/20 hover:shadow-gold/30 uppercase tracking-wider"
      >
        {submitLabel}
      </button>
    </form>
  )
}
