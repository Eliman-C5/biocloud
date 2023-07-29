import { SubscribeComponent } from '@/components/SubscribeComponent'
import { BiocloudBanner } from '@/layout/Container/BiocloudBanner'
import React from 'react'
import { FramesSection } from '../layout/FramesSection'
import { FeaturesCards } from '@/layout/FeaturesCards'


export const BiocloudSection = () => {
  return (
    <>
      <BiocloudBanner title='¿Quieres ver Biocloud en acción?'>
        <SubscribeComponent />
      </BiocloudBanner>
      <FramesSection />
      <FeaturesCards />
      <BiocloudBanner title='¿Quieres ver Biocloud en acción?'>
        <SubscribeComponent />
      </BiocloudBanner>
    </>
  )
}
