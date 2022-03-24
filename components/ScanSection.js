import React from 'react'
import BarcodeSVG from '../components/BarcodeSVG'
import {useState, useEffect} from 'react'
import CountUp from 'react-countup'
import VisibilitySensor from 'react-visibility-sensor';




function ScanSection() {
  
  const [offsetY, setOffsetY] = useState(0)
  const handleScroll = () => {
    setOffsetY(window.pageYOffset)
  }
  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])
  


  let circleOpacityOffsetY = { startingY: 416, endingY: 732}
    
    function returnZeroToOneBasedOnMinMaxCurrent(minOffsetY, maxOffsetY, currentOffsetY, optionalAdd=0){
      return (optionalAdd + (1 - (currentOffsetY - minOffsetY) / (maxOffsetY - minOffsetY))) //to fade out
    }
    function returnZeroToOneBasedOnMinMaxCurrentREVERSED(minOffsetY, maxOffsetY, currentOffsetY, optionalAdd=0){
      return  (optionalAdd + (currentOffsetY - minOffsetY) / (maxOffsetY - minOffsetY)) //to fade in
      
    }



  return (
    <>

        {/* <div className="text-white">{offsetY}</div> */}
        <div className="pb-6 overflow-hidden relative z-10 px-4 pt-0  text-white mt-52">

          <VisibilitySensor partialVisibility offset={{ bottom: 200 }} className=''>
          {({ isVisible }) => (
            <div style={{ height: 100 }}>
              {isVisible ? 
              <>
                <h2 className="pt-0 pb-4 relative max-w-3xl mx-auto mt-8 text-2xl font-extrabold leading-snug text-center uppercase lg:text-5xl tracking-widest font-display lg:leading-snug">
                Over 
                  <span className='px-2'>
                    <CountUp end={232897} duration={3} className=''/>
                  </span> 
                Barcodes
                </h2>
                <p className="uppercase  px-4 pt-0 text-md leading-relaxed text-center  lg:text-lg lg:px-0 lg:block lg:leading-relaxed  tracking-widest">
                  From sneakers found on StockX & Goat</p>
              </> : null}
            </div>
          )}
        </VisibilitySensor>

            

            <div className=" flex items-center w-full max-w-screen-lg mx-auto mt-8 md:mt-12 xl:mt-16 lg:px-16 xl:px-0">
                <div className="flex flex-wrap justify-center w-full">

                <div className='h-aut w-1/2 rounded-lg overflow-hidden'>
                    <img src="/barcode.png" alt="" />
                </div>

                </div>
            </div>
            <div className="relative ">
              {/* <div 
                  style={{ transform: `translateY(-${offsetY >= 2400 && offsetY <= 4000 && offsetY - 2700}px) scale(${returnZeroToOneBasedOnMinMaxCurrentREVERSED(2400, 3291, offsetY, .5)})`,
                  opacity: returnZeroToOneBasedOnMinMaxCurrent(2400, 3291, offsetY),
                  // transform: 
                }}
                  className={`${offsetY > 3200 && "hidden"} m-auto max-w-5xl absolute inset-0 bg-red-600 rounded-full removedblur-md h-10`}>
              </div> */}

            <div 
            style={{ transform: `translateY(-${offsetY >= 2400 && offsetY <= 4000 && offsetY - 2400}px) scale(${returnZeroToOneBasedOnMinMaxCurrentREVERSED(2400, 3291, offsetY, .5)})`,
                      opacity: returnZeroToOneBasedOnMinMaxCurrent(2400, 3291, offsetY),
                      // transform: 
                    }}
            className={`${offsetY > 2900 && "hidden"} m-auto relative max-w-5xl h-10 bg-red-600 rounded-full mt-24 bg-blue hidden sm:block`}></div>
            
            <div 
            style={{ transform: `translateY(-${offsetY >= 2900 && offsetY <= 3700 && offsetY - 2900}px) scale(${returnZeroToOneBasedOnMinMaxCurrentREVERSED(2900, 3300, offsetY, .5)})`,
                      opacity: returnZeroToOneBasedOnMinMaxCurrent(2900, 3300, offsetY),
                      // transform: 
                    }}
            className={`${offsetY > 4000 && "hidden"} m-auto relative max-w-5xl h-10 bg-red-600 rounded-full mt-24 bg-blue sm:hidden` }></div>

            </div>
            
        </div>
        <div className="text-white">{offsetY}</div>
    </>
  )
}

export default ScanSection