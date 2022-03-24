import React from 'react'
import { useState, useEffect } from 'react'
import ArrowSVG from '../components/ArrowSVG'

const boxes = [
    {id: 0, buttonText: "VISIT HOME PAGE", href: "/stockxscanner", src: "/homedark.png"},
    {id: 2, buttonText: "VISIT ABOUT PAGE", href: "about", src: "/aboutdark.png"},
    {id: 1, buttonText: "VISIT RECENTLY ADDED", href: "/recent", src: "/recentdark.png"},
]




function CollapsableTier() {
    const [selected, setSelected] = useState(2)
    const [beforeTransform, setBeforeTransform] = useState(selected)
    const [toggleUseEffect, setToggleUseEffect] = useState(false)


    useEffect(() => {
        async function sleep(){
            setTimeout(() => {
                setBeforeTransform(selected)
            }, 200);
        }
        sleep()
    }, [toggleUseEffect])


  return (
    <>
        <div className=' -mt-11 sm:mt-4 w-full p-0 max-h-lg grid grid-cols-1 place-items-center center'>
                {
                    
                    boxes.map((box, index) => {
                        return (
                        <div
                            key={box.id}
                            id={box.id}
                            onMouseEnter={()=>{
                                // if ()
                                
                                setSelected(box.id)
                                setToggleUseEffect(!toggleUseEffect)
                            }}
                           
                             className={`
                                ${selected == box.id ? "h-[25vh] sm:h-64" : "h-[25vh] sm:h-36"}
                                group mb-4 relative border border-white border-opacity-20 rounded-xl  w-full lg:w-10/12 
                                ease-in-out duration-300
                                hover:border-opacity-100
                                
                                
                            `}> 

                            {
                                index != boxes.length - 1 &&
                                <span className="absolute -bottom-[1.05rem] left-1/2 h-[16px] w-0.5 bg-gray-400 "  />
                            }
                            <a 
                                href={box.href}
                                className='
                                uppercase font-semibold flex items-center px-4 py-3
                                group-hover:scale-100 transition transform
                                opacity-0
                                group-hover:opacity-100
                                scale-95 bg-white rounded-lg shadow-lg 
                                text-gray-900 duration-200 ease-out 
                                z-10 absolute top-5 right-5 w-auto h-10
                                '>
                                    {box.buttonText}
                                    <ArrowSVG />
                            </a>
                            
                            <div className="relative w-full h-full rounded-xl overflow-hidden bg-[#121212]">
                                <img src={box.src} className='opacity-80 hover:opacity-100' />
                            </div>
                        </div>
                        )
                    })
                }
          
        </div>    
        

    </>
  )
}

export default CollapsableTier