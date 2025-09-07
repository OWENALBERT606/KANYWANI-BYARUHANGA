
import React from 'react'
import UnderDevelopmentPage from '../../components/john/new-hom'
import { HeroSlider } from '../../components/hero-slider'
import CustomCarousel from '@/components/slider'

export default function Page() {
  return (
    <div>
    <CustomCarousel/>
     {/* <div className=""> <HeroSlider/></div> */}
      <UnderDevelopmentPage/>
    </div>
  )
}
