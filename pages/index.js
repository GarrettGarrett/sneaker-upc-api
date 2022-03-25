
import React, { useState, useEffect } from "react";
import { useTheme } from 'next-themes';
import CollapsableTier from '../components/CollapsableTier'
import HeroText from '../components/HeroText';
import LogoCloud from '../components/LogoCloud';
import Gallery from '../components/FloatingShoes';
import GridStats from '../components/GridStats';
import ScanSection from '../components/ScanSection';
import Slider from '../components/Slider'
import ReadyToStart from '../components/ReadyToStart'
import Header from '../components/Header'

const Home = () => {
  const { theme, setTheme } = useTheme("dark")

  useEffect(() => {
    setTheme('dark')
  }, []);

  return (
   <>
   <div className='sticky top-0 z-50'>
    <Header bgColor={"bg-[#121212]"}/>
   </div>

        <div className=" mx-auto px-7 sm:px-20 lg:px-8">
          <div className=" max-w-6xl mx-auto ">
                <div className='h-screen min-h-[]flex'>
                    <div className='mt-12 sm:m-auto 
                    grid grid-cols-1 lg:grid-cols-2 gap-16 '>
                        <div>
                            <HeroText />
                        </div>
                      
                        <div className=''>
                          <CollapsableTier />
                        </div>
                    </div>
                </div>
          </div>
        </div>
   

  <div className='pt-5 sm:pt-20'>
    <LogoCloud />
  </div>

  <div >
    <Gallery />
  </div>

  <div className=" mx-auto px-7 sm:px-20 lg:px-8">
    <div className=" max-w-6xl mx-auto ">
        <div className='pt-10 sm:pt-24 h-[400px] sm:h-[800px]'>
          <GridStats />
        </div>
      </div>
  </div>


 
<div className='h-[590px] sm:hidden '></div>
  <div className='h-[200px] sm:h-[200px]'>
    <ScanSection />
  </div>

  {/* <div className="h-32 sm:bg-blue-700 md:bg-red-700 lg:bg-purple-700 text-white">sm=blue md=red lg=purple</div> */}

  <div className='h-[150px] sm:hidden '></div>
  <div className='pt-0 sm:pt-[600px]'>
    <Slider />
  </div>



<div className=" mx-auto px-7 sm:px-20 lg:px-8">
    <div className=" max-w-6xl mx-auto ">
      <div className='h-[550px]'>
        <ReadyToStart />
      </div>
    </div>
</div>

<div className='sm:h-[100px]'/>


   </>
  )
}

export default Home
