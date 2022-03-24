import React from 'react'
import Head from 'next/head'
import SitemapTimeline from '../components/SitemapTimeline'
import Footer2 from '../components/Footer2'
import Header from '../components/Header'

function sitemap() {
  return (

    <>
     <Head>
          <title>Home</title>
          <meta name="description" content="Scan Sneaker Barcodes to Quickly Create Inventory Lists then Export to Excel, Notes, etc." />
          <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>👟</text></svg>"/>
        </Head>

        <div className='sticky top-0 z-50'>
          <Header hideGetStarted={true} bgColor={"bg-black"}/>
        </div>

        <div className="bg-black mx-auto px-7 sm:px-20 lg:px-8">
          <div className=" max-w-6xl mx-auto ">
        <div className='h-screen'>
        <h1 className="relative pt-6 text-2xl font-extrabold leading-snug  uppercase lg:text-5xl tracking-widest font-display text-left text-white">Site Map</h1>
          <SitemapTimeline />          
        </div>
        </div>
        </div>
       <Footer2 />
    </>
    
  )
}

export default sitemap