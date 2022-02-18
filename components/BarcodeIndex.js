import React, { Component, useState, useEffect } from 'react'
import Scanner from '../components/Scanner'
import Result from '../components/Result'

const threshhold = 15 //how many scons before final result is determined?

function BarcodeIndex({scanning, setScanning, setQueue, finalScanResult, setFinalScanResult}) {
    
    const [results, setResults] = useState([])

    const _scan = () => {
        console.log("clicked")
        setScanning(!scanning)
      }

    const _onDetected = result => {
    console.log("🚀 ~ file: BarcodeIndex.js ~ line 17 ~ BarcodeIndex ~ result", result.codeResult.format)
        setResults((oldArray) => [...oldArray, result.codeResult.code]) //add to queue
        console.log("🚀 ~ file: BarcodeIndex.js ~ line 19 ~ BarcodeIndex ~ result", result)
    }

    useEffect(() => {
      const wait2Seconds = async () => {
        console.log("waiting 2 seconds!")
        await new Promise(r => setTimeout(r, 2000));
      }

      if (results.length > threshhold) {
        setResults(results.slice(0, threshhold)) //keep 15 most recent scans
      }
      // [1,1,1,1].every( (val, i, arr) => val === arr[0])   // true (one liner to check if all items in array are equal)
      if ((results.every( (val, i, arr) => val === arr[0])) && results.length == threshhold) {
        setFinalScanResult(true)
        setResults([])
        setQueue((oldArray) => [...oldArray, results[0]]) //add to queue
        wait2Seconds()
  
      }
    }, [results])

    



    return (
        <div>
            <svg 
                 onClick={_scan}
              xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="fill-gray-500 bi bi-upc-scan hover:cursor-pointer" viewBox="0 0 16 16">
                <path d="M1.5 1a.5.5 0 0 0-.5.5v3a.5.5 0 0 1-1 0v-3A1.5 1.5 0 0 1 1.5 0h3a.5.5 0 0 1 0 1h-3zM11 .5a.5.5 0 0 1 .5-.5h3A1.5 1.5 0 0 1 16 1.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 1-.5-.5zM.5 11a.5.5 0 0 1 .5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 1 0 1h-3A1.5 1.5 0 0 1 0 14.5v-3a.5.5 0 0 1 .5-.5zm15 0a.5.5 0 0 1 .5.5v3a1.5 1.5 0 0 1-1.5 1.5h-3a.5.5 0 0 1 0-1h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 1 .5-.5zM3 4.5a.5.5 0 0 1 1 0v7a.5.5 0 0 1-1 0v-7zm2 0a.5.5 0 0 1 1 0v7a.5.5 0 0 1-1 0v-7zm2 0a.5.5 0 0 1 1 0v7a.5.5 0 0 1-1 0v-7zm2 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-7zm3 0a.5.5 0 0 1 1 0v7a.5.5 0 0 1-1 0v-7z"/>
              </svg>
          {/* <ul className="results">
            {results.map((result, i) => (
              <Result key={i} result={result} />
            ))}
          </ul> */}
          {scanning ? <Scanner onDetected={_onDetected} scanning={scanning}/> : null}
        </div>
      )
}

export default BarcodeIndex