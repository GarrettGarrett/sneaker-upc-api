import React from 'react'

function Result({ result }) {
    
    if (!result) {
        return null
      }
  
      return (
        <li>
          {' '}
          {result.codeResult.code} [{result.codeResult.format}]{' '}
        </li>
      )
}

export default Result