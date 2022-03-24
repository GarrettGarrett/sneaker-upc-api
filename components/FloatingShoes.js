import React, { useState, useEffect } from "react"
import ButtonStartScanning from '../components/ButtonStartScanning'

function FloatingShoes() {
    const [offsetY, setOffsetY] = useState(0)
    const handleScroll = () => {
      setOffsetY(window.pageYOffset)
    }
  
    useEffect(() => {
      window.addEventListener("scroll", handleScroll)
      return () => window.removeEventListener("scroll", handleScroll)
    }, [])
    
    

    
  return (
    <div className='relative mt-10 sm:mt-32 min-h-[650px] overflow-hidden'>
       <h2 className="tracking-widest absolute left-0 right-0 z-20 max-w-2xl mx-auto mt-8 text-2xl font-extrabold leading-snug text-center uppercase lg:text-5xl  font-display lg:leading-snug">Start Scanning Inventory</h2>
        <div className="mt-44 sm:mt-64">
            <ButtonStartScanning />
        </div>
       
        {/* <div className="text-white">{offsetY}</div> */}
        
        {/* left */}
        <div 
            style={{ transform: `translateY(-${offsetY >= 900 && offsetY <= 1850 && offsetY - 900}px)`}}
            className={ `absolute -bottom-20 left-0 h-auto w-1/5 ` }>
                <img src='af1.png' className="-rotate-12"/>
        </div>

        <div 
            style={{ transform: `translateY(-${offsetY >= 900 && offsetY <= 1850 && offsetY - 900}px)`}}
            className={ `absolute -bottom-96 left-0 h-auto w-1/5` }>
                       <img src='chunky.png' className="rotate-12"/>
        </div>

        <div 
            style={{ transform: `translateY(-${offsetY >= 900 && offsetY <= 1850 && offsetY - 900}px)`}}
            className={ `absolute -bottom-[650px] left-0 h-auto w-1/5` }>
                       <img src='og.png' className="-rotate-[2deg]"/>
        </div>



        {/* left-middle */}
        <div 
            style={{ transform: `translateY(-${offsetY >= 900 && offsetY <= 1850 && offsetY - 900 - 100}px)`}}
            className={ `absolute -bottom-28 left-1/4 h-auto w-1/5` }>
                <img src='coolgrey.png' className="-rotate-[5deg]"/>
        </div>

        <div 
            style={{ transform: `translateY(-${offsetY >= 900 && offsetY <= 1850 && offsetY - 900 - 100}px)`}}
            className={ `absolute -bottom-[450px] left-1/4 h-auto w-1/5` }>
                <img src='delsol.png' className="rotate-[20deg]"/>
        </div>

        <div 
            style={{ transform: `translateY(-${offsetY >= 900 && offsetY <= 1850 && offsetY - 900 - 100}px)`}}
            className={ `absolute -bottom-[700px] left-1/4 h-auto w-1/5` }>
                <img src='solidgrey.png' className="rotate-[7deg]"/>
        </div>

        {/* right */}
        <div 
            style={{ transform: `translateY(-${offsetY >= 900 && offsetY <= 1850 && offsetY - 900}px)`}}
            className={ `absolute -bottom-28 right-0 h-auto w-1/5 ` }>
            <img 
            src='slide.png' className="-rotate-[12deg]"/>
        </div>
        <div 
            style={{ transform: `translateY(-${offsetY >= 900 && offsetY <= 1850 && offsetY - 900}px)`}}
            className={ `absolute -bottom-96 right-0 h-auto w-1/5 ` }>
            <img 
            src='royal.png' className="-rotate-[20deg] "/>
        </div>
        <div 
            style={{ transform: `translateY(-${offsetY >= 900 && offsetY <= 1850 && offsetY - 900}px)`}}
            className={ `absolute -bottom-[650px] right-0 h-auto w-1/5 ` }>
            <img 
            src='bone.png' className="-rotate-[15deg] "/>
        </div>
        {/* right-middle */}
        <div 
            style={{ transform: `translateY(-${offsetY >= 900 && offsetY <= 1850 && offsetY - 900 - 100}px)`}}
            className={ `absolute -bottom-44 right-1/4 h-auto w-1/5 ` }>
            <img 
            src='grinch.png' className="-rotate-[10deg] "/>
        </div>
        <div 
            style={{ transform: `translateY(-${offsetY >= 900 && offsetY <= 1850 && offsetY - 900 - 100}px)`}}
            className={ `absolute -bottom-[450px] right-1/4 h-auto w-1/5` }>
            <img 
            src='travis.png' className="-rotate-[25deg]"/>
        </div>
        <div 
            style={{ transform: `translateY(-${offsetY >= 900 && offsetY <= 1850 && offsetY - 900 - 100}px)`}}
            className={ `absolute -bottom-[750px] right-1/4 h-auto w-1/5` }>
            <img 
            src='cardinal.png' className="-rotate-[15deg]"/>
        </div>


        {/* <div className="text-white pt-96">{offsetY}</div> */}
    </div>
  )
}

export default FloatingShoes