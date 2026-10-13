import Hero from '../components/Hero'
import About from '../components/About'
import ProductSection from '../components/ProductSection'
import HeatTreatment from '../components/HeatTreatment'
import Applications from '../components/Applications'
import TechnicalInformation from '../components/TechnicalInformation'
import WhyChooseUs from '../components/WhyChooseUs'
import Contact from '../components/Contact'
import Seo from '../components/Seo'

export default function Home() {
  return (
    <>
      <Seo
        title="DURON STEEL | Tool & Die Steel Solutions"
        description="Explore Duron Steel's tool and die steel categories, including high speed steel, cold work steel, hot work steel, plastic mould steels, and vacuum heat treatment capabilities."
      />
      <Hero />
      <About />
      <ProductSection />
      <HeatTreatment />
      <Applications />
      <TechnicalInformation />
      <WhyChooseUs />
      <Contact />
    </>
  )
}
