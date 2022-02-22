import React from 'react'
import Head from 'next/head'



const features = [
    { name: 'Handheld Scanner Support', img: '/scanner.png', body: 'Use a handheld scanner for faster and more accurate scans.', alt: 'StockX Scanner' },
    { name: 'Mobile Phone Camera Support', img: "/iphone.png", body: 'Use the camera on your mobile device for barcode recognition.', alt: "iphone scanner" },
    { name: 'Daily Updates', img: "/clock.png", body: 'Shoes are added to the database daily and as new sneakers are released.', alt: "daily updates" },
    { name: 'Copy & Paste', img: "/copy.png", body: 'Copy the list of scanned sneaker data and paste into Excel, Notes, etc.', alt: "copy and paste" },
    { name: 'Filter', img: "/filter.png", body: 'Click on the Table Headers to filter columns on and off.', alt: "on and off" },

  ]

function about() {
  return (
      <>
        <Head>
            <title>About</title>
            <meta name="description" content="Scan Sneaker Barcodes to Quickly Create Inventory Lists then Export to Excel, Notes, etc." />
            <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>👟</text></svg>"/>
        </Head>
        <div className='h-screen'>
       <h1 className="pt-5 font-bold text-3xl md:text-5xl tracking-tight mb-1 text-black">About</h1>
        <p className="text-gray-600  pb-5 pt-2">🔎 This tool was created after searching Google for "StockX Scanner" and finding no results.  My hope is this tool can make inventory management easier for fellow sneaker resellers.</p>



        <div className="pt-8 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="pt-6">
                <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8">
                  <div className="-mt-6">
                    <div>
                      <span className="inline-flex items-center justify-center p-3 bg-blue-600 rounded-md shadow-lg">
                        <img alt={feature.alt} className="h-6 w-6 text-white" aria-hidden="true" src={feature.img}/>
                      </span>
                    </div>
                    <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">{feature.name}</h3>
                    <p className="mt-5 text-base text-gray-500">
                      {feature.body}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
      </div>
      </>
   
  )
}

export default about


// About
// I made this tool after finding no results in Google for "StockX Scanner".  My hope is that this tool can be useful to others for quickly scanning shoes into their inventory.  

// How To Use
// Connect your own handheld barcode scanner or use your device's camera to scan barcodes.  The barcode queried against my sneaker database for details on that shoe.  