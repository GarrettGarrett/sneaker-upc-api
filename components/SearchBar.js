import { useEffect, useState, useCallback } from "react"
import BarcodeIndex from '../components/BarcodeIndex'



export default function SearchBar({query, setQuery, queue, setQueue, count, scanning, setScanning, finalScanResult, setFinalScanResult, searchMongoDB, camera}) {


    const callbackRef = useCallback(inputElement => { //for auto focusing on the name field when loading the page
        if (inputElement) {
          inputElement.focus();
        }
      }, []);

      const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            let _query = query
            setQuery() //reset the query
            setQueue((oldArray) => [...oldArray, _query ]) //add to queue
            // console.log(queue)
        }
      }

      function numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }



    return (
      <div>
        <div className="flex mt-1 border-b border-white border-opacity-50  ">
          <input
            ref={callbackRef}
            type="text"
            name="name"
            id="name"
            className="block w-full border-0 border-b border-transparent focus:border-transparent bg-transparent focus:ring-0 sm:text-sm"
            placeholder={`Search ${numberWithCommas(count)} Barcodes`}
            value={query?.length ? query : ''}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          
          <span className="m-1">
            <BarcodeIndex 
              camera={camera} 
              searchMongoDB={searchMongoDB} 
              finalScanResult={finalScanResult} 
              setFinalScanResult={setFinalScanResult} 
              setQueue={setQueue} 
              scanning={scanning} 
              setScanning={setScanning}
            />
          </span>
         
        </div>
      </div>
    )
  }
  