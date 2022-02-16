import Head from 'next/head'
import useSWR from 'swr'
import SearchBar from '../components/SearchBar'
import Table from '../components/Table'
import { useState, useEffect } from 'react'
import { connectToDatabase } from '../utils/dbConnect'



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
  const [result, setResult] = useState([])
  const [queue, setQueue] = useState([])

  async function searchMongoDB(userQuery){
    if (userQuery?.length) {
      const mongoResult = await fetch ("/api/upc", {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({upc: userQuery}) 
      })
      let {sneaker} = await mongoResult.json()
      console.log("🚀 ~ file: index.js ~ line 23 ~ searchMongoDB ~ sneaker", sneaker)
      setResult((oldArray) => [...oldArray, sneaker]) //add to queue
    }
}

useEffect(() => {
  searchMongoDB(queue.slice(-1)[0] ) //search 1st upc in queue
}, [queue])


  return (
    <>
      <div className=" max-w-7xl mx-auto px-7 sm:px-20 lg:px-8">
          <div className="max-w-3xl mx-auto ">
            <SearchBar count={count} query={query} setResult={setResult} setQuery={setQuery} queue={queue} setQueue={setQueue} />
            <Table result={result} setResult={setResult}/>
          </div>
      </div>
    </>
  
  )

}
