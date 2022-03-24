import { Fragment } from 'react'
import { useState } from 'react'
import { Popover, Transition } from '@headlessui/react'
import {
  MenuAlt4Icon
} from '@heroicons/react/outline'
import { ChevronDownIcon } from '@heroicons/react/solid'
import Logo from '../components/Logo'
import MobileMenuDrop from '../components/MobileMenuDrop'
import Link from 'next/link'



function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Header({hideGetStarted, bgColor}) {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <>
    
    
<Popover className="relative ">
        <div className={`${bgColor} w-full bg-opacity-95 backdrop-blur-sm px-3`}>
      <div className="max-w-6xl mx-auto ">
        <div className="bg-opacity-90  flex justify-between items-center  py-0 md:justify-start md:space-x-10">
          <div className="pl-3 sm:pl-0 flex justify-start lg:w-0 lg:flex-1 ">
            <a href="#"  className="h-16 w-16 opacity-90 hover:opacity-100">
              <Logo className='m-auto pt-5 rotate-6'/>
            </a>
          </div>
          <div className="-mr-2 -my-2 md:hidden">
            <Popover.Button className="">
              <span className="sr-only">Open menu</span>
              <MenuAlt4Icon
              onClick={()=> setMobileOpen(!mobileOpen)}
              className="mt-3 mr-6 h-11 w-11 text-white" aria-hidden="true" />
            </Popover.Button>

            
          </div>
          
          <Popover.Group as="nav" className="hidden md:flex space-x-10 ">
            <Popover className="relative">
              {({ open }) => (
                <>
                  <Link href='/stockxscanner'>
                    <a 
                    className={classNames(
                      'group  rounded-md inline-flex items-center text-base font-normal',
                      'transition duration-200 ease-in-out text-gray-300 hover:text-white'
                    )}>Scanner</a>
                  </Link>


                </>
              )}
            </Popover>

          <Link href="/recent" >
              <a className="group rounded-md inline-flex items-center text-base font-normal transition duration-200 ease-in-out text-gray-300 hover:text-white">
                Recently Added
              </a>
          </Link>

           <Link  href="/about">
              <a className="group rounded-md inline-flex items-center text-base font-normal transition duration-200 ease-in-out text-gray-300 hover:text-white">
                  About
              </a>
           </Link>
           
           
          
          </Popover.Group>
          <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">

          {
            !hideGetStarted &&
            <Link href="/stockxscanner">
            <a
              className="uppercase ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border  border-white rounded-full shadow-sm text-sm font-semibold text-black bg-white hover:bg-black hover:text-white transition ease-out duration-150"
            >
              Get Started
            </a>
          </Link>

          }
            
          </div>
        </div>
        </div>
      </div>

      {

      mobileOpen &&

        <MobileMenuDrop
          hideGetStarted={hideGetStarted}
          mobileOpen={mobileOpen} 
          setMobileOpen={setMobileOpen} 
        />

      }
        
     
    </Popover>


    </>
 
  )
}
