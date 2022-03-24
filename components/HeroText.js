import React from 'react'
import ButtonGlowing from '../components/ButtonGlowing'
import PlayButton from '../components/PlayButton'
import { useState, useEffect } from 'react'

function HeroText() {

  const [heroText, setHeroText] = useState("Faster Sneaker Inventory Lists")

  useEffect(() => {
      async function sleep(){
          setTimeout(() => {
            setHeroText("Faster Sneaker Inventory Lists")
          }, 2000);
      }
    if (heroText != "Faster Sneaker Inventory Lists") {
      sleep()
      
    }
  }, [heroText])



  return (
    <>
        <h3 className="text-4xl md:text-6xl lg:text-[4.em] xl:text-[4.5em] font-extrabold leading-[1.4em] md:leading-[1.4em] lg:leading-[1.3em] text-left md:tracking-[0.5em] tracking-[0.4em] bg-clip-text bg-gradient-to-br from-[#ebe5dd] to-[#7f424a] uppercase z-10 text-transparent lg:tracking-[0.2em]">{heroText}</h3>


        <p className="w-full mt-6 lg:mt-12 text-xl lg:text-[26px] leading-relaxed lg:leading-relaxed text-gray-400">Create inventory lists in seconds, without manually entering names, sizes, etc!</p>

        <div className='mt-12 mx-4 sm:space-x-9 space-x-2 items-center w-full grid grid-cols-9'>
            <div className='col-span-7 sm:col-span-8'>
              <ButtonGlowing />
            </div>
            
            <div 
            onMouseEnter={() => {
              setHeroText(`How-to Video Coming soon`)
            }}
            onClick={() => {
              setHeroText("How-to Video Coming soon")
            }}
            className='col-span-2 sm:col-span-1 '>
              <PlayButton />
            </div>  
        </div>
    </>
  )
}

export default HeroText