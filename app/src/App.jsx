import {
  HeroOrcamento,
  BeneficiosSite,
  EmpresasSection,
  GarantiaSection,
  LogoSection,
  FooterOrcamento,
} from './components'
import { submitOrcamento } from './services/orcamentos'

function App() {
  async function handleOrcamentoSubmit(data) {
    return submitOrcamento(data)
  }

  return (
    <main className="min-h-screen bg-background overflow-hidden">
      <HeroOrcamento onSubmit={handleOrcamentoSubmit} />
      <BeneficiosSite />
      <EmpresasSection />
      <GarantiaSection />
      <LogoSection />
      <FooterOrcamento />
    </main>
  )
}

export default App
