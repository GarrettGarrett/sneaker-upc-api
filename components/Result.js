import React from 'react'

function Result({ result }) {
    
    if (!result) {
        return null
      }
  
      return (
        <li>
          {' '}
          [{result.codeResult.format}]{' '}
        </li>
      )
}

export default Result