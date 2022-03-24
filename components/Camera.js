import React from 'react'

function Camera({camera, scanning, finalScanResult}) {
  return (
    <div className='relative'>

    {
      scanning && camera  &&
      <div className='absolute  -bottom-8 left-16 text-white opacity-70'>
          Enable camera permissions
      </div>
    }

    
    {scanning && camera ? <div id="interactive" className="z-10 ml-2 mr-10 pt-4 block viewport absolute max-w-xs " /> : null}
    {scanning && camera ? <div className={`z-20 top-24 left-6  w-72 h-36 rounded-lg sm:left-6 ${finalScanResult ? 'border-green-500  border-4': 'border-white border-2'} relative `}>
      
    </div> : null}
    
    </div>
  )
}

export default Camera