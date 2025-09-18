import React from 'react'
import Videos from './Videos'

const HomeHerotext = () => {
  return (
    <div className='font-[font2] pt-5 text-center'>
        <div className='text-[9.5vw] justify-center flex items-center uppercase leading-[8vw]'>
            L'étincelle
        </div>
       <div className='text-[9.5vw] justify-center flex items-center uppercase leading-[8vw]'>
            qui
            <div className='h-[7vw] w-[16vw] rounded-full mt-5 overflow-hidden'>
                <Videos/>
            </div>génère
        </div>
       <div className='text-[9.5vw] justify-center flex items-center uppercase leading-[8vw]'>
            la créativité
       </div>
    </div>
  )
}

export default HomeHerotext
