import React, { useRef } from 'react'
import HomeHeroText from '../components/home/HomeHeroText'
import HomeBottomText from '../components/home/HomeBottomText'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import Videos from '../components/home/Videos'

const Home = () => {


  return (
    <div className='text-white'>
      <div className='h-screen w-screen fixed'>
        <Videos />
      </div>
      <div className='h-screen w-screen relative pb-5 overflow-hidden flex flex-col justify-between'>
        <HomeHeroText />
        <HomeBottomText />
      </div>
    </div>
  )
}

export default Home