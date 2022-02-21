import React from 'react'

function Camera({camera, scanning, finalScanResult}) {
  return (
    <>
    {scanning && camera ? <div id="interactive" className="ml-2 mr-10 pt-4 block viewport absolute max-w-xs " /> : null}
    {scanning && camera ? <div className={` top-24 left-6  w-72 h-36 rounded-lg sm:left-6 ${finalScanResult ? 'border-green-500  border-4': 'border-white border-2'} relative `}></div> : null}
    
    
    </>
  )
}

export default Camera