import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Beneficios from './components/Beneficios'
import Tecnica from './components/Tecnica'
import Jornada from './components/Jornada'
import CasosClinicosSection from './components/CasosClinicosSection'
import AutoridadeMedica from './components/AutoridadeMedica'
import FAQ from './components/FAQ'
import Captacao from './components/Captacao'
import Footer from './components/Footer'
import WhatsAppFAB from './components/WhatsAppFAB'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Beneficios />
        <Tecnica />
        <Jornada />
        <CasosClinicosSection />
        <AutoridadeMedica />
        <FAQ />
        <Captacao />
      </main>
      <Footer />
      <WhatsAppFAB />
    </>
  )
}
