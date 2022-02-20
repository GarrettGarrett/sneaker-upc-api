import React, { Component, useState, useEffect } from 'react'
import Scanner from '../components/Scanner'
import Result from '../components/Result'
import useSound from 'use-sound';
import beep from '../public/sounds/beep.mp3'
import { useToast } from '@chakra-ui/react'

const threshhold = 15 //how many scons before final result is determined?

function BarcodeIndex({scanning, setScanning, setQueue, finalScanResult, setFinalScanResult,  searchMongoDB, camera }) {
  const [isFetching, setIsFetching] = useState(false)
  const [results, setResults] = useState([])
  const [play] = useSound(beep);
  const toast = useToast()
  const statuses = ['info']

    const _scan = () => {
        setScanning(!scanning)
     
      }

    const _onDetected = async result => {
        setResults((oldArray) => [...oldArray, result.codeResult.code]) //add to queue
        console.log("🚀 ~ file: BarcodeIndex.js ~ line 19 ~ BarcodeIndex ~ result", results)

        if (results.length > threshhold) {
          setResults(results.slice(15, 15 + threshhold)) //keep 15 most recent scans
          console.log("new after slice:", results)
        }
        // [1,1,1,1].every( (val, i, arr) => val === arr[0])   // true (one liner to check if all items in array are equal)
        if ((results.every( (val, i, arr) => val === arr[0])) && results.length >= threshhold && !isFetching) {
          play()
          setIsFetching(true) //fetching from mongo, stop other scans
          setFinalScanResult(true) //for green border 
          setResults([]) //results array that tracks until threshold met
          const mongoResult = await searchMongoDB(results[0])
          setIsFetching(false)
        }
    }



    return (
        <div>
            <svg 
                 onClick={camera ? _scan : () => toast({
                  title: `Enable Camera Permissions & Refresh`,
                  position: "top",
                  status: 'info',
                  isClosable: true,
                })}
              xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="fill-blue-600 bi bi-upc-scan hover:cursor-pointer" viewBox="0 0 16 16">
                <path d="M1.5 1a.5.5 0 0 0-.5.5v3a.5.5 0 0 1-1 0v-3A1.5 1.5 0 0 1 1.5 0h3a.5.5 0 0 1 0 1h-3zM11 .5a.5.5 0 0 1 .5-.5h3A1.5 1.5 0 0 1 16 1.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 1-.5-.5zM.5 11a.5.5 0 0 1 .5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 1 0 1h-3A1.5 1.5 0 0 1 0 14.5v-3a.5.5 0 0 1 .5-.5zm15 0a.5.5 0 0 1 .5.5v3a1.5 1.5 0 0 1-1.5 1.5h-3a.5.5 0 0 1 0-1h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 1 .5-.5zM3 4.5a.5.5 0 0 1 1 0v7a.5.5 0 0 1-1 0v-7zm2 0a.5.5 0 0 1 1 0v7a.5.5 0 0 1-1 0v-7zm2 0a.5.5 0 0 1 1 0v7a.5.5 0 0 1-1 0v-7zm2 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-7zm3 0a.5.5 0 0 1 1 0v7a.5.5 0 0 1-1 0v-7z"/>
              </svg>

          {scanning ? <Scanner onDetected={_onDetected} scanning={scanning}/> : null}
        </div>
      )
}

export default BarcodeIndex