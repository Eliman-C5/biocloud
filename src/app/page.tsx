import Layout from '@/layout/Layout'
import { Header } from '@/sections/Header'

import { TestimonialSection } from '@/sections/TestimonialSection'
import { Subscriptions } from '@/sections/Subscriptions'
import { FeatureSlider } from '@/layout/Sliders/FeatureSlider'
import { TerminalesSlider } from '@/layout/Sliders/TerminalesSlider'
import { CardProductSection } from '@/sections/CardProductSection'
import { ContactSection } from '@/sections/ContactSection'
import { FirstSectionBox } from '@/sections/FirstSectionBox'
import { TextWithImage } from '@/sections/TextWithImage'
import { CardsSection } from '@/sections/CardsSection'
import { SecondSectionBox } from '@/sections/SecondSectionBox'
import { MultipleRowsSection } from '@/sections/MultipleRowsSection'
import { BiocloudSection } from '@/sections/BiocloudSection'
import { ThirdSectionBox } from '@/sections/ThirdSectionBox'
import { FourthSectionBox } from '@/sections/FourthSectionBox'
import { BiocloudBanner } from '@/layout/Container/BiocloudBanner'
import { FifthSectionBox } from '@/sections/FifthSectionBox'
import { FeaturesSection } from '@/sections/FeaturesSection'
import { SixthSection } from '@/sections/SixthSection'

export default function Home() {
  return (
    <Layout>
      <Header />
      <FirstSectionBox />
      <TextWithImage />
      <CardsSection />
      <SecondSectionBox />
      <MultipleRowsSection />
      <BiocloudSection />
      <ThirdSectionBox />
      <FeatureSlider />
      <FourthSectionBox />
      <FifthSectionBox />
      <FeaturesSection />
      <SixthSection />
      <TerminalesSlider />
      <CardProductSection />
      <TestimonialSection />
      <Subscriptions />
      <BiocloudBanner
        title='Elige el plan mejor que se adapte a tu empresa'
        col='col-lg-10'
        sectionStyle='mt-50'
      >
        <h4 style={{textAlign: 'center', color: '#2C2A2E'}}>Desarrolla  la digitalización 100%, todo organizado, actualizado y  en un mismo lugar, accesible desde cualquier ubicación las 24 hs los 365 días del año.</h4>
        <div className='d-flex flex-column flex-sm-row align-items-center justify-content-center mt-20' style={{gap: '20px'}}>
          <a className='btn btn-brand-1'>Comparar planes</a>
          <a className='btn btn-brand-1' style={{background: '#E0F1F4'}}>Solicita una demo</a>
        </div>
      </BiocloudBanner>
      <ContactSection />
    </Layout>
  )
}
