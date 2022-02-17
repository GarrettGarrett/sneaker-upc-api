import { useEffect, useState, useCallback } from "react"
import BarcodeIndex from '../components/BarcodeIndex'



export default function SearchBar({query, setQuery, setResult, queue, setQueue, count}) {


    const callbackRef = useCallback(inputElement => { //for auto focusing on the name field when loading the page
        if (inputElement) {
          inputElement.focus();
        }
      }, []);

      const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            let _query = query
            setQuery() //reset the query
            setQueue((oldArray) => [...oldArray, _query]) //add to queue
        }
      }

      function numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    return (
      <div>
        <div className="flex mt-1 border-b border-gray-300 focus-within:border-indigo-600">
          <input
            ref={callbackRef}
            type="text"
            name="name"
            id="name"
            className="block w-full border-0 border-transparent  focus:ring-0 sm:text-sm"
            placeholder={`Search ${numberWithCommas(count)} Barcodes`}
            value={query?.length ? query : ''}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          <span className="m-2">
            <BarcodeIndex />
          </span>
         
        </div>
      </div>
    )
  }
  