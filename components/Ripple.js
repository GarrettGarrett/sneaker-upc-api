import React from 'react'
import { CheckCircleIcon } from '@heroicons/react/outline'

function Ripple() {
  return (
    <>
    <div className='relative  container m-auto'>
        <div className='bg-[#75B588] h-20 w-20 rounded-full top-0'>
            <CheckCircleIcon className='absolute z-10 top-0 h-20 w-20'/>
        </div>

        <div className='absolute top-0 bg-[#75B588] rounded-full h-20 w-20 animate-ripple '/>
        <div className='absolute top-0 bg-[#75B588] rounded-full h-20 w-20 animate-ripple animation-delay-2000'/>
        <div className='absolute top-0 bg-[#75B588] rounded-full h-20 w-20 animate-ripple animation-delay-4000'/>
        <div className='absolute top-0 bg-[#75B588] rounded-full h-20 w-20 animate-ripple animation-delay-6000'/>
        <div className='absolute top-0 bg-[#75B588] rounded-full h-20 w-20 animate-ripple animation-delay-8000'/>
        <div className='absolute top-0 bg-[#75B588] rounded-full h-20 w-20 animate-ripple animation-delay-10000'/>
       
    

    </div>
    
    
    </>
  )
}

export default Ripple