import Head from 'next/head'
import useSWR from 'swr'
import SearchBar from '../components/SearchBar'
import Table from '../components/Table'
import { useState, useEffect } from 'react'
import { connectToDatabase } from '../utils/dbConnect'
import {CopyToClipboard} from 'react-copy-to-clipboard';
import { ClipboardIcon, ClipboardCheckIcon } from '@heroicons/react/outline'



export async function getStaticProps({ params }) {
  const { db } = await connectToDatabase();  
  const count = await db.collection("sneakers").count()
  return {
    props: {
      count: count,
    },
    revalidate: 60,
  };
}

export default function Home({ count }) {
  const [query, setQuery] = useState()
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState([])
  const [queue, setQueue] = useState([])
  const [copy, setCopy] = useState(true)
  const [upcTitle, setUpcTitle] = useState(true)
  const [titleTitle, setTitleTitle] = useState(true)
  const [sizeTitle, setSizeTitle] = useState(true)
  const [colorwayTitle, setColorwayTitle] = useState(true)
  const [scanning, setScanning] = useState(false)

  async function searchMongoDB(userQuery){
    if (userQuery?.length) {
      setLoading(true)
      const mongoResult = await fetch ("/api/upc", {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({upc: userQuery}) 
      })
      let {sneaker} = await mongoResult.json()
      console.log("🚀 ~ file: index.js ~ line 23 ~ searchMongoDB ~ sneaker", sneaker)
      setResult((oldArray) => [...oldArray, sneaker]) //add to queue
      setLoading(false)
    }
}

useEffect(() => {
  searchMongoDB(queue.slice(-1)[0] ) //search 1st upc in queue
}, [queue])


  function copyToClip() { //returns string that can be copied into excel
    let returnSting = ''
    result.forEach(item => {
      const tab = "\t"
      let entry = (upcTitle ? (item.upc) + tab : "") + (titleTitle ? item.title + tab : "") + (sizeTitle ?  item.size + tab : '') + (colorwayTitle ? item.color2 : '')
      returnSting += '\n' + entry
    })
    console.log("🚀 ~ file: index.js ~ line 67 ~ copyToClip ~ returnSting", returnSting)
    return returnSting
  }


  return (
    <>
      <div className=" max-w-7xl mx-auto px-7 sm:px-20 lg:px-8">
          <div className="max-w-3xl mx-auto ">
            <SearchBar setScanning={setScanning} scanning={scanning} count={count} query={query} setResult={setResult} setQuery={setQuery} queue={queue} setQueue={setQueue} />
            

            <CopyToClipboard
              options={{format: "text/plain"}}
              text={copyToClip()}
              >
                {
                  copy ? 
                  <ClipboardIcon 
                  onClick={() => setCopy(!copy)}
                  className="h-6 w-6 rounded-full text-slate-500 hover:cursor-pointer mt-3" />
                  : 
                  <ClipboardCheckIcon 
                  onClick={() => setCopy(!copy)}
                  className="h-6 w-6 rounded-full text-slate-500 hover:cursor-pointer mt-3" />
                  
                }
                 
            </CopyToClipboard>

            {scanning ? <div id="interactive" className="viewport" /> : null}


            <Table result={result} setResult={setResult} loading={loading} upcTitle={upcTitle} setUpcTitle={setUpcTitle} titleTitle={titleTitle} setTitleTitle={setTitleTitle} sizeTitle={sizeTitle} setSizeTitle={setSizeTitle} colorwayTitle={colorwayTitle} setColorwayTitle={setColorwayTitle}/>
          </div>
      </div>
    </>
  
  )

}
