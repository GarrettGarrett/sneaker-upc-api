import React from 'react'
import Head from 'next/head'
import SitemapTimeline from '../components/SitemapTimeline'







function sitemap() {
  return (

    <>
     <Head>
          <title>Home</title>
          <meta name="description" content="Scan Sneaker Barcodes to Quickly Create Inventory Lists then Export to Excel, Notes, etc." />
          <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>👟</text></svg>"/>
        </Head>
    
        <div className='h-screen'>
          <h1 className="pt-5 font-bold text-3xl md:text-5xl tracking-tight mb-1 text-black">Site Map</h1>


          <SitemapTimeline />

          
        </div>
    
    </>
    
  )
}

export default sitemap