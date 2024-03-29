import Head from 'next/head'
import useSWR from 'swr'
import SearchBar from '../components/SearchBar'
import Table from '../components/Table'
import Camera from '../components/Camera'
import Menu from '../components/Menu'
import { useState, useEffect } from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import NewTable from '../components/NewTable'
import Header from '../components/Header'
import Footer2 from '../components/Footer2'
import DiscordWebhookAdd from '../components/DiscordWebhookAdd'
import KeyInput from '../components/KeyInput'
import localStorage from 'localStorage'
import DiscordWebhookSold from '../components/DiscordWebhookSold'
import Toggle from '../components/Toggle'

const fetcher = (url) => fetch(url).then((r) => r.json())

//Pass in the url from first fetch results
async function sendDiscordMgs(
  content,
  masterHookAdd,
  masterHookSold,
  enabled,
  sneaker,
  masterKey
) {
  let body = {
    content,
    masterHookAdd,
    masterHookSold,
    enabled,
    sneaker,
    masterKey,
  }
  const res = await fetch('/api/sendDiscordMsg', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  })
  const { response } = await res?.json()
}

export default function Home() {
  const defaultResult = {
    _id: '14241234123412341234132',
    upc: '887223552130',
    size: '10',
    date: '2017-09-06T23:59:59.999Z',
    brand: 'Air Jordan',
    title: "Off-White x Air Jordan 1 Retro High OG 'Chicago'",
    color2: 'White/Black-Varsity Red-Black',
    styleID: 'aa3834 101',
    image:
      'https://image.goat.com/1000/attachments/product_template_pictures/images/008/654/413/original/136666_00.png.png',
    slug: 'off-white-x-air-jordan-1-retro-high-og-aa3834-101',
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
  const [brandTitle, setBrandTitle] = useState(true)
  const [dateTitle, setDateTitle] = useState(true)
  const [styleIDTitle, setStyleIDTitle] = useState(true)
  const [slugTitle, setSlugTitle] = useState(true)
  const [imageTitle, setImageTitle] = useState(true)
  const [scanning, setScanning] = useState(false)
  const [finalScanResult, setFinalScanResult] = useState(false)
  const [camera, setCamera] = useState(false) //if user has camera permissions enabled
  const [masterHookAdd, setMasterHookAdd] = useState('')
  const [masterHookSold, setMasterHookSold] = useState('')
  const [masterKey, setMasterKey] = useState('')
  const [enabled, setEnabled] = useState(true)

  useEffect(() => {
    try {
      if (typeof window !== 'undefined') {
        setCamera(true)
      }
    } catch (error) {
      setCamera(true)
    }
  }, [])

  function copyToClip(selectedArray) {
    console.log(
      'Copy to clip is running with this many items: ',
      selectedArray.length
    )
    //returns string that can be copied into excel
    let returnSting = ''
    selectedArray.forEach((item) => {
      let releaseDate =
        // if item?.date is a date, convert to ISO string, split at T, and return first index
        // else return empty string
        item?.date instanceof Date ? item.date.toISOString().split('T')[0] : ''

      //this skips over deleted entries
      const tab = '\t'
      let entry =
        (upcTitle ? item.upc + tab : '') +
        (titleTitle ? item.title + tab : '') +
        (sizeTitle ? item.size + tab : '') +
        (colorwayTitle ? item.color2 + tab : '') +
        (brandTitle ? item.brand + tab : '') +
        (dateTitle ? releaseDate + tab : '') +
        (styleIDTitle ? item.styleID + tab : '') +
        (slugTitle ? item.slug + tab : '') +
        (imageTitle ? item.image : '')

      returnSting += '\n' + entry
    })
    return returnSting
  }

  async function searchMongoDB(userQuery) {
    if (userQuery?.length) {
      setLoading(true)
      const mongoResult = await fetch('/api/upc', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ upc: userQuery }),
      })
      let { sneaker } = await mongoResult.json()
      setResult((oldArray) => [...oldArray, sneaker]) //add to queue
      setLoading(false)
      setFinalScanResult(false) //turn off green color
      if (masterHookAdd?.length > 20 && sneaker) {
        let response = await sendDiscordMgs(
          userQuery,
          masterHookAdd,
          masterHookSold,
          enabled,
          sneaker,
          masterKey
        )
      }
    }
  }

  useEffect(() => {
    searchMongoDB(queue.slice(-1)[0]) //search 1st upc in queue
  }, [queue])

  function autoSubmit() {
    setQueue((oldArray) => [...oldArray, query])
    setQuery('')
  }

  useEffect(() => {
    //Search once user stops typing for 1000 ms
    const timeoutId = setTimeout(async () => autoSubmit(), 1000)
    return () => clearTimeout(timeoutId)
  }, [query])

  return (
    <>
      <Head>
        <title>Home</title>
        <meta
          name="description"
          content="Scan Sneaker Barcodes to Quickly Create Inventory Lists then Export to Excel, Notes, etc."
        />
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>👟</text></svg>"
        />
      </Head>

      <div className="sticky top-0 z-50">
        <Header hideGetStarted={true} bgColor={'bg-black'} />
      </div>

      <div className="mx-auto bg-black px-7 sm:px-20 lg:px-8">
        <div className=" mx-auto max-w-6xl ">
          <div className="min-h-screen">
            <h1 className="font-display relative pt-6 text-left text-2xl  font-extrabold uppercase leading-snug tracking-widest lg:text-5xl">
              Sneaker Scanner
            </h1>

            <h3 className="text-md fade-color font-display mb-2  max-w-lg pt-2 font-medium leading-tight tracking-wide text-white text-opacity-90 lg:mx-0 lg:mb-4 lg:pr-6 lg:text-left lg:text-xl xl:text-2xl">
              Begin by clicking the blue scan icon
            </h3>

            <div className="pt-2">
              <Toggle enabled={enabled} setEnabled={setEnabled} />
            </div>

            <div className="pt-10">
              <SearchBar
                camera={camera}
                searchMongoDB={searchMongoDB}
                finalScanResult={finalScanResult}
                setFinalScanResult={setFinalScanResult}
                setQueue={setQueue}
                setScanning={setScanning}
                scanning={scanning}
                count={data ? data?.count : ''}
                query={query}
                setResult={setResult}
                setQuery={setQuery}
                queue={queue}
              />

              <Camera
                camera={camera}
                scanning={scanning}
                finalScanResult={finalScanResult}
              />
            </div>

            <div className={`${scanning ? 'pt-48' : null}`}>
              <div className="mt-4 rounded-md border border-white border-opacity-30 bg-[#121212]">
                <NewTable
                  setCopy={setCopy}
                  copy={copy}
                  copyToClip={copyToClip}
                  scanning={scanning}
                  result={result}
                  setResult={setResult}
                  loading={loading}
                  upcTitle={upcTitle}
                  setUpcTitle={setUpcTitle}
                  titleTitle={titleTitle}
                  setTitleTitle={setTitleTitle}
                  sizeTitle={sizeTitle}
                  setSizeTitle={setSizeTitle}
                  colorwayTitle={colorwayTitle}
                  setColorwayTitle={setColorwayTitle}
                  brandTitle={brandTitle}
                  setBrandTitle={setBrandTitle}
                  dateTitle={dateTitle}
                  setDateTitle={setDateTitle}
                  styleIDTitle={styleIDTitle}
                  setStyleIDTitle={setStyleIDTitle}
                  slugTitle={slugTitle}
                  setSlugTitle={setSlugTitle}
                  imageTitle={imageTitle}
                  setImageTitle={setImageTitle}
                />
              </div>

              <div className="pt-4 text-white">
                <DiscordWebhookAdd
                  masterHookAdd={masterHookAdd}
                  setMasterHookAdd={setMasterHookAdd}
                />
              </div>

              <div className="pt-4 text-white">
                <DiscordWebhookSold
                  masterHookSold={masterHookSold}
                  setMasterHookSold={setMasterHookSold}
                />
              </div>

              <div className="pt-4 text-white">
                <KeyInput masterKey={masterKey} setMasterKey={setMasterKey} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer2 />
    </>
  )
}
