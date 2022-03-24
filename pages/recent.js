import React from 'react'
import { connectToDatabase } from '../utils/dbConnect'
import RecentList from '../components/RecentList'
import Head from 'next/head'
import Header from '../components/Header'
import Footer2 from '../components/Footer2'



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
  
  
  return (
    <>
       <Head>
          <title>Recently Added</title>
          <meta name="description" content="Scan Sneaker Barcodes to Quickly Create Inventory Lists then Export to Excel, Notes, etc." />
          <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>👟</text></svg>"/>
      </Head>

      <div className='sticky top-0 z-50'>
          <Header hideGetStarted={true} bgColor={"bg-black"}/>
        </div>

      <div className="bg-black mx-auto px-7 sm:px-20 lg:px-8">
          <div className=" max-w-6xl mx-auto ">

          <h1 className="relative pt-6 text-2xl font-extrabold leading-snug  uppercase lg:text-5xl tracking-widest font-display text-left">Recently Added</h1>
          <h3 className="text-opacity-90 pt-2 tracking-wide max-w-lg  mb-2 text-md font-medium leading-tight text-white lg:mx-0 fade-color lg:mb-4 font-display lg:text-xl xl:text-2xl lg:text-left lg:pr-6">Updated Daily</h3>
            
            <RecentList latest={latest}/>
          </div>
      </div>
      <Footer2 />
    </>
  )
}

export default Recent