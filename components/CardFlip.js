import React from 'react'
import { useState, useEffect } from 'react'

function CardFlip() {
    const [effect, setEffect] = useState(false)
   
  return (
    <div 
         onClick={() => {
            setEffect(true)
            }}
        onAnimationEnd={() => {
            setEffect(false)
        }}
        className={`
            ${effect && "animate-ping"}
            h-44 w-64 bg-white text-black backface-
        `}
    >{'sadfasdfsdaf'}</div>
  )
}

export default CardFlip