import React from 'react'
import Link from 'next/link'

function ButtonStartScanning() {
  return (
    <Link href={"/stockxscanner"}>
     <button className="py-6 absolute left-0 right-0 z-20 max-w-md  bg-white text-black uppercase sm:mx-auto mx-10 text-sm md:text-base font-semibold truncate rounded-lg lg:rounded-lg button focus:outline-none hover:bg-gradient-to-br from-[#ebe5dd] to-[#7f424a] hover:text-white transition ease-in-out duration-150">Start Scanning Inventory</button>
    </Link>
   
  )
}

export default ButtonStartScanning