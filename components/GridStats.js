import React from 'react'
import {useEffect, useState, useRef} from 'react'
import GridExportSVG from '../components/GridExportSVG'
import GridUpdateSVG from './GridUpdateSVG'
import InfinitySVG from '../components/InfinitySVG'
import FilterSVG from '../components/FilterSVG'
import FadeIn from '../components/FadeIn'
import ButtonStartScanning from './ButtonStartScanning'
import { useAppContext } from '../context/contextState'
import HandScanSVG from '../components/HandScanSVG'
import HandScan from '../components/HandScan'


function GridStats() {
    let context = useAppContext()
    const grid = useRef(); 
    const isFeatureGridVisible = useOnScreen(grid, "-100px")
    
    return (
        <>
         <div className=" mt-8 relative z-10 px-4 antialiased text-white lg:mb-0 md:pb-4 xl:pb-0 md:pt-0 md:px-0 ">
           <h2 className="pb-0 relative max-w-3xl mx-auto mt-0 text-2xl font-extrabold leading-snug text-center uppercase lg:text-5xl tracking-widest font-display lg:leading-snug">
              key features
           </h2>
        <div className="flex items-center w-full max-w-screen-lg mx-auto mt-8 md:mt-12 xl:mt-16 lg:px-16 xl:px-0">
       
       {/* <div ref={grid} className="flex flex-wrap justify-center w-full "> */}
       <div ref={grid} className="place-items-center grid sm:grid-cols-2 grid-cols-1 w-full ">
           
            {
                context.wasFeatureGridOnceVisible && 
                <>
                        <FadeIn delay={0} duration={750}>
                            <div  className="mb-2 -mt-16">
                                <div className="flex flex-col items-center w-full max-w-sm p-2 text-center transition duration-500 ease-in-out transform scale-100 xl:px-6 bg-gray-980 lg:mx-4 shadow-new rounded-xl lg:items-start md:my-2 group">
                                    <div className="h-full p-10 flex items-center justify-center w-full -mt-8 text-black">
                                        {/* <GridExportSVG /> */}
                                        <img src="/export.png" alt="" />
                                    </div>

                                    <div className="inline-block w-full px-2 -mt-20 text-xl antialiased font-bold leading-snug text-center text-white md:text-2xl md:px-4 font-display">Export
                                    </div>
                                    
                                    <div className="px-2 mt-2 text-base font-medium leading-relaxed text-center text-gray-400 md:h-24 w-54 md:px-4">Keep your existing Excel files, Google Sheets, and Notes.
                                    </div>
                                </div>
                            </div>
                            </FadeIn>

                            <FadeIn delay={100} duration={750}>
                            <div  className="mb-2 -mt-16">
                                <div className="flex flex-col items-center w-full max-w-sm p-2 text-center transition duration-500 ease-in-out transform scale-100 xl:px-6  lg:mx-4  rounded-xl  ">
                                    <div className="h-full p-10 flex items-center justify-center w-full -mt-8 text-black">
                                        {/* <GridUpdateSVG /> */}
                                        <img src="/update.png" alt="" />
                                    </div>
                            
                                    <div className="inline-block w-full px-2 -mt-20 text-xl antialiased font-bold leading-snug text-center text-white md:text-2xl md:px-4 font-display">Daily Updates
                                    </div>
                                    
                                    <div className="px-2 mt-2 text-base font-medium leading-relaxed text-center text-gray-400 md:h-24 w-54 md:px-4">The barcode database is updated daily and as new shoes are released. 
                                    </div>
                                </div>
                            </div>
                        </FadeIn>

                        <FadeIn delay={200} duration={750}>
                            <div  className="mb-2 -mt-16">
                                <div className="flex flex-col items-center w-full max-w-sm p-2 text-center transition duration-500 ease-in-out transform scale-100 xl:px-6 bg-gray-980 lg:mx-4 shadow-new rounded-xl lg:items-start md:my-2 group">
                                    <div className="h-full p-10 flex items-center justify-center w-full -mt-8 text-black">
                                        {/* <InfinitySVG /> */}
                                        {/* <HandScanSVG /> */}
                                        {/* <HandScan /> */}
                                        <img src="/handscan.png" alt="" />
                                    </div>
                            
                                    <div className="inline-block w-full px-2 -mt-20 text-xl antialiased font-bold leading-snug text-center text-white md:text-2xl md:px-4 font-display">Handheld Scanner Support
                                    </div>
                                    
                                    <div className="px-2 mt-2 text-base font-medium leading-relaxed text-center text-gray-400 md:h-24 w-54 md:px-4">Use a handheld scanner for faster and more accurate scans.
                                    </div>
                                </div>
                            </div>
                        </FadeIn>

                        <FadeIn delay={300} duration={750}>
                            <div  className="mb-2 -mt-16">
                                <div className="flex flex-col items-center w-full max-w-sm p-2 text-center transition duration-500 ease-in-out transform scale-100 xl:px-6 bg-gray-980 lg:mx-4 shadow-new rounded-xl lg:items-start md:my-2 group">
                                    <div className="h-full p-10 flex items-center justify-center w-full -mt-8 text-black">
                                        {/* <FilterSVG /> */}
                                        <img src="/filtericon.png" alt="" />
                                    </div>
                            
                                    <div className="inline-block w-full px-2 -mt-20 text-xl antialiased font-bold leading-snug text-center text-white md:text-2xl md:px-4 font-display">Filter
                                    </div>
                                    
                                    <div className="px-2 mt-2 text-base font-medium leading-relaxed text-center text-gray-400 md:h-24 w-54 md:px-4">Customize exports by selecting which fields to display.
                                    </div>
                                </div>
                            </div>
                        </FadeIn>
                     </>
                 }
            
                </div>
                
            </div>
        </div>
       
        </>
    )
}

export default GridStats

// Hook
function useOnScreen(ref, rootMargin = "0px") {
   
        let context = useAppContext()
        // State and setter for storing whether element is visible
        const [isIntersecting, setIntersecting] = useState(false);
        useEffect(() => {
          const observer = new IntersectionObserver(
            ([entry]) => {
              // Update our state when observer callback fires
              setIntersecting(entry.isIntersecting);
            },
            {
              rootMargin,
            }
          );
          if (ref.current) {
            observer.observe(ref.current);
          }
          return () => {
            try {
                observer.unobserve(ref.current);
            } catch (error) {
                
            }
            
          };
        }, []); // Empty array ensures that effect is only run on mount and unmount
        if (isIntersecting){
            context.setWasFeatureGridOnceVisible(true) 
        }
        return isIntersecting;
    }
    
   