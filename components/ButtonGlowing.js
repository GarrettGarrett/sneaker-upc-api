import Link from 'next/link'
import React from 'react'


function ButtonGlowing() {
  return (
    <>
    <div className="relative">
      <Link href={'/stockxscanner'}>
        <button className="gradient-bg w-full leading-none relative  text-center py-4 sm:py-3 px-4 lg:text-lg font-bold text-black uppercase transition duration-100 ease-in-out transform  rounded-full  md:px-12 md:py-6 hover:scale-[102%] opacity-90 bg-white">
              <span className="hidden sm:inline-block ">Start Scanning Inventory</span>
              <span className="text-black sm:hidden">Start Scanning</span>
        </button>
      </Link>
       
    </div>
      
    </>
  )
}

export default ButtonGlowing