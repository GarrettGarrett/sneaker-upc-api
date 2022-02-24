import Head from 'next/head'
import useSWR from 'swr'
import SearchBar from '../components/SearchBar'
import Table from '../components/Table'
import Camera from '../components/Camera'
import Menu from '../components/Menu'
import { useState, useEffect } from 'react'
import {CopyToClipboard} from 'react-copy-to-clipboard';
import { ClipboardIcon, ClipboardCheckIcon } from '@heroicons/react/outline'



const fetcher = url => fetch(url).then(r => r.json())

export default function Home() {

  const defaultResult = {
    upc: "887223552130",
    size: "10",
    brand: "Air Jordan",
    title: "Off-White x Air Jordan 1 Retro High OG 'Chicago'",
    color2: "White/Black-Varsity Red-Black",
    styleID: "styleID",
    image: "https://image.goat.com/1000/attachments/product_template_pictures/images/008/654/413/original/136666_00.png.png"

  }
  
  const { data, error } = useSWR('/api/getCount', fetcher)
  const [query, setQuery] = useState() // UPC to be searched
  const [loading, setLoading] = useState(false) //turns guide box green
  const [result, setResult] = useState([defaultResult]) // all results from mongoDB
  const [queue, setQueue] = useState([]) //array of queries
  const [copy, setCopy] = useState(true)
  const [upcTitle, setUpcTitle] = useState(true) //upc title filter in table
  const [titleTitle, setTitleTitle] = useState(true) //title title filter in table 
  const [sizeTitle, setSizeTitle] = useState(true) //size title filter in table
  const [colorwayTitle, setColorwayTitle] = useState(true) //color title filter in table
  const [scanning, setScanning] = useState(false) 
  const [finalScanResult, setFinalScanResult] = useState(false)
  const [camera, setCamera] = useState(false) //if user has camera permissions enabled


  useEffect(() => {
    try {
      if (typeof window !== "undefined") {
        navigator.permissions.query({ name: "camera" }).then(res => {
          if(res.state == "granted"){
            setCamera(true)
          } 
      });
      }
    } catch (error) {
      setCamera(true)
    }
  }, [])

  function copyToClip() { //returns string that can be copied into excel
    let returnSting = ''
    result.forEach(item => {    
      if (typeof item.upc != 'undefined'){ //this skips over deleted entries
        const tab = "\t"
        let entry = (upcTitle ? (item.upc) + tab : "") + (titleTitle ? item.title + tab : "") + (sizeTitle ?  item.size + tab : '') + (colorwayTitle ? item.color2 : '')
        returnSting += '\n' + entry
      }
    })
    return returnSting
  }
  

  async function searchMongoDB(userQuery){
    if (userQuery?.length) {
      setLoading(true)
      const mongoResult = await fetch ("/api/upc", {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({upc: userQuery}) 
      })
      let {sneaker} = await mongoResult.json()
      setResult((oldArray) => [...oldArray, sneaker]) //add to queue
      setLoading(false)   
      setFinalScanResult(false)//turn off green color   
    }
  }

  useEffect(() => {
    searchMongoDB(queue.slice(-1)[0] ) //search 1st upc in queue
  }, [queue])



  return (
    <>
        <Head>
          <title>Home</title>
          <meta name="description" content="Scan Sneaker Barcodes to Quickly Create Inventory Lists then Export to Excel, Notes, etc." />
          <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>👟</text></svg>"/>
        </Head>


        <div className='h-screen'>
          <h1 className="pt-5 font-bold text-3xl md:text-5xl tracking-tight mb-1 text-black">StockX Scanner</h1>
          <p className="text-gray-600  pb-5 pt-2">👟 Begin by scanning any sneaker barcode</p>


           <SearchBar camera={camera} searchMongoDB={searchMongoDB} finalScanResult={finalScanResult} setFinalScanResult={setFinalScanResult} setQueue={setQueue} setScanning={setScanning} scanning={scanning} count={data ? data?.count : ''} query={query} setResult={setResult} setQuery={setQuery} queue={queue} setQueue={setQueue} />
        
          <Camera camera={camera} scanning={scanning} finalScanResult={finalScanResult}/>

          
           
          <div className={`${scanning ? 'pt-48' : null}`}>
            <Table setCopy={setCopy} copy={copy} copyToClip={copyToClip} scanning={scanning} result={result} setResult={setResult} loading={loading} upcTitle={upcTitle} setUpcTitle={setUpcTitle} titleTitle={titleTitle} setTitleTitle={setTitleTitle} sizeTitle={sizeTitle} setSizeTitle={setSizeTitle} colorwayTitle={colorwayTitle} setColorwayTitle={setColorwayTitle}/>
          </div>
        </div>
    </>   
  )

}
