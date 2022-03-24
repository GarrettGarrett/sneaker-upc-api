import React from 'react'
import {
    QrcodeIcon,
    ClockIcon,
    InformationCircleIcon
  } from '@heroicons/react/outline'
import Header from './Header'
import Link from 'next/link'

const menuOptions = [
    {content:"Scan" , href:"/stockxscanner" , icon: QrcodeIcon, color: 'text-[#75B588]' },
    {content:"Recently Added" , href:"/recent" , icon: ClockIcon, color: 'text-[#D0B489]' },
    {content:"About" , href:"/about" , icon: InformationCircleIcon, color: 'text-[#BD2A2B]' },
]

function MobileMenuDrop({mobileOpen, setMobileOpen}) {
  return (
    <>
        <div className='-mt-14 relative w-full h-14 flex right-0 inset-0 bg-transparent hover:cursor-pointer'>
            <div 
            onClick={()=> {
                setMobileOpen(!mobileOpen)}
            }
            className='z-50 h-12 w-12  absolute top-0 right-0'></div>
        </div>
        <div className='absolute left-0 top-22 z-50 opacity-95 h-screen w-full bg-black pt-8 '>
            {
                menuOptions.map(option => {
                    return (
                        <Link href={option.href}>
                            <div className='hover:cursor-pointer flex space-x-5 bg-[#121212] rounded-lg py-4 my-2 mx-4 '>
                                <option.icon className={`w-5 h-5 rounded-full ml-4 ${option.color}`}/>
                                <span className='text-white '>{option.content}</span>
                             </div>
                        </Link>
                   
                    )
                })
            }
        </div>

    </>
  )
}

export default MobileMenuDrop