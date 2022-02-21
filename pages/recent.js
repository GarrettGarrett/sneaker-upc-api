import React from 'react'
import { connectToDatabase } from '../utils/dbConnect'
import RecentList from '../components/RecentList'
import Head from 'next/head'


export async function getStaticProps({ params }) {
    const { db } = await connectToDatabase();  
    const latest = await db.collection("sneakers").find().sort({$natural:-1}).limit(40).toArray()
  
    return {
      props: {
        latest: JSON.parse(JSON.stringify(latest)),
      },
      revalidate: 60,
    };
  }

function Recent({latest}) {
  // console.log("🚀 ~ file: Recent.js ~ line 17 ~ Recent ~ latest", latest)
  
  
  return (
    <>
       <Head>
          <title>Recently Added</title>
          <meta name="description" content="Scan Sneaker Barcodes to Quickly Create Inventory Lists then Export to Excel, Notes, etc." />
          <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>👟</text></svg>"/>
      </Head>
       
          <h1 className="pt-5 font-bold text-3xl md:text-5xl tracking-tight mb-1 text-black">Recently Added</h1>
          <p className="text-gray-600  pb-5 pt-2">Updated Daily 😊</p>
           
          <RecentList latest={latest}/>

    </>
  )
}

export default Recent