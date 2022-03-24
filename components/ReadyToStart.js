import React from 'react'
import Ripple from '../components/Ripple'
import ButtonStartScanning from './ButtonStartScanning'


function ReadyToStart() {
  return (
    <>
        <div className='w-full h-auto grid grid-cols-1 place-items-center'>
        
        <div className=" z-10 max-w-3xl px-4 mt-0 sm:mt-24 mb-4 text-2xl font-extrabold leading-tight tracking-widest text-center uppercase md:text-5xl md:leading-snug">Ready to get Started?</div>
        
        <div className='flex pt-24'>
            <Ripple />
        </div>
            
        <div className='pt-32'>
            <ButtonStartScanning />
        </div>

        </div>

    </>
  )
}

export default ReadyToStart