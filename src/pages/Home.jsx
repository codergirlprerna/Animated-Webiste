import React from 'react'
import Videos from '../components/home/Videos'
import HomeHerotext from '../components/home/HomeHerotext'
import HomeBottomText from '../components/home/HomeBottomText'


const Home = () => {
  return (
    <div className='text-white'>
      <div className='h-screen w-screen fixed'>
        <Videos/>
      </div>
      <div className='h-screen w-screen relative flex flex-col justify-between'>
        <HomeHerotext/>
        <HomeBottomText/>
      </div>
    </div>
  )
}

export default Home
