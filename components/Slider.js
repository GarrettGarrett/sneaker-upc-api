import React from 'react'
import {
    CogIcon,
    BadgeCheckIcon,
    QrcodeIcon,
    StarIcon,
    ShoppingBagIcon,
    HeartIcon,
    CalendarIcon,
    ShoppingCartIcon,
    CursorClickIcon,
    LinkIcon
} from '@heroicons/react/outline'

const badgesRow1 = [
    {color: "bg-[#75B588]", content: "Shoe Name", icon: BadgeCheckIcon},
    {color: "bg-[#484C83]", content: "UPC Number", icon: QrcodeIcon},
    {color: "bg-[#CE7090]", content: "Size", icon: StarIcon},
    {color: "bg-[#BD2A2B]", content: "Brand", icon: ShoppingBagIcon},
    {color: "bg-[#D0B489]", content: "Colorway", icon: HeartIcon}, 
    
    {color: "bg-[#75B588]", content: "Shoe Name", icon: BadgeCheckIcon},
    {color: "bg-[#484C83]", content: "UPC Number", icon: QrcodeIcon},
    {color: "bg-[#CE7090]", content: "Size", icon: StarIcon},
    {color: "bg-[#7AB0D5]", content: "Brand", icon: ShoppingBagIcon},
    {color: "bg-[#D0B489]", content: "Colorway", icon: HeartIcon}, 

    {color: "bg-[#75B588]", content: "Shoe Name", icon: BadgeCheckIcon},
    {color: "bg-[#484C83]", content: "UPC Number", icon: QrcodeIcon},
    {color: "bg-[#BD2A2B]", content: "Size", icon: StarIcon},
    {color: "bg-[#7AB0D5]", content: "Brand", icon: ShoppingBagIcon},
    {color: "bg-[#D0B489]", content: "Colorway", icon: HeartIcon}, 

    {color: "bg-[#75B588]", content: "Shoe Name", icon: BadgeCheckIcon},
    {color: "bg-[#484C83]", content: "UPC Number", icon: QrcodeIcon},
    {color: "bg-[#CE7090]", content: "Size", icon: StarIcon},
    {color: "bg-[#7AB0D5]", content: "Brand", icon: ShoppingBagIcon},
    {color: "bg-[#BD2A2B]", content: "Colorway", icon: HeartIcon}, 
       
   
]

const badgesRow2 = [
    {color: "bg-[#BD2A2B]", content: "Release Date", icon: CalendarIcon},
    {color: "bg-[#CE7090]", content: "Style ID", icon: ShoppingCartIcon},
    {color: "bg-[#484C83]", content: "GOAT URL", icon: CursorClickIcon},
    {color: "bg-[#75B588]", content: "Image URL", icon: LinkIcon},
    
    {color: "bg-[#BD2A2B]", content: "Release Date", icon: CalendarIcon},
    {color: "bg-[#CE7090]", content: "Style ID", icon: ShoppingCartIcon},
    {color: "bg-[#484C83]", content: "GOAT URL", icon: CursorClickIcon},
    {color: "bg-[#75B588]", content: "Image URL", icon: LinkIcon},

    {color: "bg-[#BD2A2B]", content: "Release Date", icon: CalendarIcon},
    {color: "bg-[#CE7090]", content: "Style ID", icon: ShoppingCartIcon},
    {color: "bg-[#484C83]", content: "GOAT URL", icon: CursorClickIcon},
    {color: "bg-[#75B588]", content: "Image URL", icon: LinkIcon},

    {color: "bg-[#BD2A2B]", content: "Release Date", icon: CalendarIcon},
    {color: "bg-[#CE7090]", content: "Style ID", icon: ShoppingCartIcon},
    {color: "bg-[#484C83]", content: "GOAT URL", icon: CursorClickIcon},
    {color: "bg-[#75B588]", content: "Image URL", icon: LinkIcon},
    
  
]


function Slider() {
  return (
    <>
    <h2 className="pb-12 sm:pb-24  relative max-w-3xl mx-auto  overflow-hidden text-2xl font-extrabold leading-snug text-center text-white uppercase lg:text-5xl tracking-widest font-display">Available Sneaker Details</h2>

     <div className="relative overflow-hidden h-[250px] ">
        <div className="flex absolute top-0 left-0  whitespace-nowrap animate-slide">
        
        {
            badgesRow1.map(badge => {
                return (
                    <div  className={`${badge.color}  mx-5 flex items-center justify-center w-auto h-8 p-6 rounded-full lg:h-10 lg:p-8`}>
                        <badge.icon className='w-5 h-5'/>
                        <div className="ml-3 text-lg leading-snug text-white whitespace-nowrap lg:text-xl">{badge.content}
                        </div>
                </div>
                )
            })
        }     
               
    

        </div>
       

        <div className="flex absolute top-[6rem] left-0  whitespace-nowrap animate-slide">
        
        {
            badgesRow2.map(badge => {
                return (
                    <div  className={`${badge.color} mx-5 flex items-center justify-center w-auto h-8 p-6 rounded-full lg:h-10 lg:p-8`}>
                        <badge.icon className='w-5 h-5'/>
                        <div className="jsx-922c53d24ec54e45 ml-3 text-lg leading-snug text-white whitespace-nowrap lg:text-xl">{badge.content}
                        </div>
                </div>
                )
            })
        }     
               
    

        </div>
    </div>
    
    
    </>
  )
}

export default Slider